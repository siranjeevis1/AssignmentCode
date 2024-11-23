const { test, expect } = require('@playwright/test'); // Import test and expect from Playwright
const BasePage = require('../pages/BasePage');  // Import BasePage correctly

// Base URL for dynamic test URL validation
const baseUrl = 'https://www.fitpeo.com';  // Base URL used for dynamic URL validation

test.describe('Revenue Calculator Tests', () => {
  let fitpeoPage; // Declare a variable to hold the instance of the BasePage class

  // This runs before each test to set up the page object and navigate to the homepage
  test.beforeEach(async ({ page }) => {
    fitpeoPage = new BasePage(page);  // Instantiate the BasePage class and assign it to fitpeoPage
    await fitpeoPage.navigateToHomepage();  // Navigate to homepage before each test starts
  });

  // Step 1: Navigate to the FitPeo Homepage and verify title
  test('1. Navigate to FitPeo Homepage @TC1', async () => {
    const title = await fitpeoPage.page.title();
    console.log('Page Title:', title);  // Log the title for debugging/Validation
    // Verify if the title matches the expected title
    expect(title).toBe('Remote Patient Monitoring (RPM) - fitpeo.com');
  });

  // Step 2: Navigate to the Revenue Calculator Page and verify URL
  test('2. Navigate to Revenue Calculator Page @TC2', async () => {
    await fitpeoPage.goToRevenueCalculator();  // Use the method to navigate to the Revenue Calculator
    const url = await fitpeoPage.page.url();  // Get the current URL of the page
    const expectedUrl = `${baseUrl}/revenue-calculator`;  // Build expected URL dynamically
    // Ensure the page URL contains the expected path
    expect(url).toContain(expectedUrl);
  });

  // Step 3: Scroll Down to the Slider Section and verify visibility
  test('3. Scroll Down to the Slider Section @TC3', async () => {
    await fitpeoPage.scrollToSlider();  // Scroll down to the slider section
    const sliderVisible = await fitpeoPage.fullSlider.isVisible();  // Check if the slider is visible
    // Assert that the slider is visible
    expect(sliderVisible).toBe(true);
  });

  // Step 4: Adjust the Slider to 820 and verify input value
  test('4. Adjust the Slider to 820 @TC4', async () => {
    await fitpeoPage.scrollToSlider();  // Ensure the slider is in view before adjusting
    const targetSteps = 620;  // Calculate steps needed to reach the target value (820)
    await fitpeoPage.sliderScroll(targetSteps);  // Adjust the slider to the desired value
    const value = await fitpeoPage.textField.inputValue();  // Get the input value of the text field
    // Ensure the input field's value matches the expected slider value
    expect(parseInt(value)).toBe(820);  // Validate the value of the text field is 820
  });

  // Step 5 & 6: Update the Text Field to 560 and Check the Slider Value
  test('5 & 6. Update the Text Field and Check Slider Value @TC5 & @TC6', async () => {
    const targetValue = 560;  // Set the target value for text field
    const result = await fitpeoPage.updateTextFieldAndCheckSlider(targetValue);  // Update and validate
    // Validate the text field's value is correctly updated
    expect(result.textFieldValue).toBe(targetValue.toString());  // Validate text field value
    // Validate the slider's value is correctly updated
    expect(result.sliderValue).toBe(targetValue.toString());  // Validate slider value
  });

  // Step 7: Select the CPT Codes
  test('7. Select the CPT Codes @TC7', async () => {
    await fitpeoPage.selectCPTCodes();  // Call the method to select CPT codes
  });

  // Step 8 & 9: Validate Total Recurring Reimbursement
  test('8 & 9. Validate Total Recurring Reimbursement @TC8 & @TC9', async () => {
    // Perform the steps before validating the reimbursement
    await fitpeoPage.selectCPTCodes();  // Select the CPT codes before validating reimbursement

    // Validate the total reimbursement text
    const totalReimbursementElement = await fitpeoPage.verifyTotalReimbursement();  // Get the locator for the reimbursement text

    // Assertion: Validate the text content of the reimbursement field
    await expect(totalReimbursementElement).toHaveText('Total Recurring Reimbursement for all Patients Per Month: $27000');
  });
});

