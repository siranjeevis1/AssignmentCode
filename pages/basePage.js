// BasePage.js
class BasePage {
    /**
     * Constructor initializes locators and page object.
     * @param {import('@playwright/test').Page} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;
  
      // Locators for homepage
      this.revenueCalculator = this.page.getByRole('link', { name: 'Revenue Calculator' });
  
      // Locators for revenue calculator page
      this.sliderPointer = page.locator('body > div.MuiBox-root.css-3f59le > div.MuiBox-root.css-rfiegf > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-6.css-l0ykmo > div:nth-child(2) > div > div > span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.css-16i48op > span.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-1sfugkh');
      this.textField = page.locator('input[type="number"]');
      this.CPTField = page.locator('[class="MuiBox-root css-1p19z09"]');
      this.CPTCheckbox = page.locator('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"]');
      this.totalReimbursement = page.locator('body > div.MuiBox-root.css-3f59le > div.MuiBox-root.css-rfiegf > header > div > p:nth-child(4)');
      this.fullSlider = page.locator('[class="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-16i48op"]');
      this.sliderInput = page.locator('.MuiSlider-root input'); // Locator for the input element inside the slider
    }
  
    /**
     * Navigate to the homepage of FitPeo.
     * @async
     */
    async navigateToHomepage() {
      try {
        await this.page.goto('https://www.fitpeo.com/', { timeout: 60000 }); // 60 seconds timeout
      } catch (error) {
        console.error('Failed to navigate to homepage:', error);
        throw error; // Re-throw the error for test failure
      }
    }
  
    /**
     * Navigate to the Revenue Calculator page.
     * @async
     */
    async goToRevenueCalculator() {
      try {
        await this.revenueCalculator.click(); // Click the link to navigate
        await this.page.waitForNavigation({ waitUntil: 'load' }); // Wait for the page to load
      } catch (error) {
        console.error('Failed to navigate to Revenue Calculator:', error);
        throw error;
      }
    }
  
    /**
     * Scroll to the slider section on the page.
     * @async
     */
    async scrollToSlider() {
      try {
        await this.revenueCalculator.click(); // Navigate to Revenue Calculator page first
        await this.fullSlider.scrollIntoViewIfNeeded(); // Ensure the slider is in view
      } catch (error) {
        console.error('Failed to scroll to slider:', error);
        throw error;
      }
    }
  
    /**
     * Adjust the slider to a specific value by simulating key presses.
     * @param {number} targetSteps - The number of steps to move the slider.
     * @async
     */
    async sliderScroll(targetSteps) {
      try {
        await this.sliderPointer.click(); // Click on the slider to focus it
  
        // Press the 'ArrowRight' key for the specified number of steps
        for (let i = 0; i < targetSteps; i++) {
          await this.page.keyboard.press('ArrowRight');
        }
  
        // Optional: Add a small delay to ensure UI updates
        await this.page.waitForTimeout(500);
      } catch (error) {
        console.error('Failed to adjust the slider:', error);
        throw error;
      }
    }
  
    /**
     * Update the text field with a target value and validate the slider's value.
     * @param {number} targetValue - The target value to fill into the text field.
     * @returns {Promise<{textFieldValue: string, sliderValue: string}>} - The text field and slider values.
     * @async
     */
    async updateTextFieldAndCheckSlider(targetValue) {
      try {
        await this.revenueCalculator.click(); // Navigate to the Revenue Calculator page
        await this.fullSlider.scrollIntoViewIfNeeded(); // Ensure the slider is visible
        await this.textField.fill(targetValue.toString()); // Fill the text field with the target value
  
        // Wait for UI to update
        await this.page.waitForTimeout(500);
  
        // Get the value of the slider directly from the input element
        const sliderValue = await this.sliderInput.getAttribute('aria-valuenow');
  
        // Return the values for validation
        return { textFieldValue: await this.textField.inputValue(), sliderValue };
      } catch (error) {
        console.error('Failed to update text field and check slider:', error);
        throw error;
      }
    }
  
    /**
     * Select checkboxes for specific CPT codes.
     * @async
     */
    async selectCPTCodes() {
      try {
        await this.revenueCalculator.click(); // Navigate to Revenue Calculator
        await this.fullSlider.scrollIntoViewIfNeeded(); // Ensure the slider is visible
  
        const cptCodesToSelect = ['CPT-99091', 'CPT-99453', 'CPT-99454', 'CPT-99474'];
        const cptContainers = this.page.locator('.MuiBox-root.css-1eynrej');
  
        // Loop through each CPT container and select if it matches the required CPT code
        for (let i = 0; i < await cptContainers.count(); i++) {
          const cptContainer = cptContainers.nth(i);
          const cptText = await cptContainer.locator('p.MuiTypography-body1').textContent();
  
          if (cptText && cptCodesToSelect.includes(cptText.trim())) {
            await cptContainer.locator('input[type="checkbox"]').click();
          }
        }
      } catch (error) {
        console.error('Failed to select CPT codes:', error);
        throw error;
      }
    }
  
    /**
     * Verify the total recurring reimbursement value is displayed correctly.
     * @returns {Promise<import('@playwright/test').Locator>} - The locator for the total reimbursement text.
     * @async
     */
    async verifyTotalReimbursement() {
      try {
        await this.totalReimbursement.waitFor({ state: 'visible' }); // Wait for element to be visible
        return this.totalReimbursement; // Return the locator for further assertions
      } catch (error) {
        console.error('Failed to verify total reimbursement:', error);
        throw error;
      }
    }
  }
  
  module.exports = BasePage;
  
  