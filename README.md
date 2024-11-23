 # **Automation Assignment**

This repository contains an automation script for testing the **Revenue Calculator** functionality on the **FitPeo** website. The script is developed using the **Playwright** framework with **JavaScript**, ensuring robust and efficient web automation.

## **Features of This Project**
- **Framework Used**: **Playwright**, a powerful end-to-end testing framework supporting cross-browser automation with ease.
- **Cross-Browser Support**: The tests are executed across Chrome, Firefox, and WebKit, ensuring compatibility across major browsers.
- **Specialty**:  
  - **Dynamic handling of web elements**: Manages sliders, checkboxes, and other dynamic components efficiently.  
  - **Page Object Model (POM)**: Implements POM to keep the code modular, reusable, and easy to maintain.  
  - **Clean and maintainable codebase**: With reusable functions and clear separation of concerns.  
  - **Built-in exception handling**: Ensures smooth execution even with unexpected scenarios.  
  - **Detailed documentation**: Makes it easy to set up and use the project.  

## **Pre-Requisites**
Before running this project, ensure you have the following installed on your system:  
1. **Node.js** (LTS version recommended)  
   [Download Node.js here](https://nodejs.org/)  
2. **Git**  
   [Download Git here](https://git-scm.com/)  
3. **A Code Editor** (e.g., Visual Studio Code)  
   [Download VS Code here](https://code.visualstudio.com/)  

## **How to Install**
1. **Clone the repository** to your local system:  
   ```bash
   git clone https://github.com/<your-username>/<your-repository-name>.git
   cd <your-repository-name>


### Install required browsers for Playwright testing

Playwright needs the necessary browsers to run the tests. Install them with:  


    npx playwright install



### How to Run the Tests

Run All Test Cases:
To execute all the test cases in the project, use the following command:

     npx playwright test

### Run Tests in Headed Mode (Visible Browser):
To see the browser in action during the test execution (headless mode is the default), use this command:

    npx playwright test --headed

### Run Tests in UI Mode:
To launch the Playwright UI and interact with the test process, use this command:

    npx playwright test --ui

### Run a Specific Test File:
If you want to run a specific test file instead of the whole suite, use this command, replacing <test-file-name> with the test file name you want to run:

    npx playwright test tests/<test-file-name>.spec.js

## Folder  Structure 


    .
    ├── tests/                       # Contains all test files
    │   └── assignmentCode.spec.js   # Test case file (Assignment code)
    ├── pages/                       # Includes the Page Object Model (POM) files
    │   └── basePage.js              # BasePage class with common locators and methods/logics
    ├── playwright-report/           # Auto-generated folder for test reports
    │   └── index.html               # Report overview page
    ├── test-results/                # Folder storing detailed test result data
    │   └── .last-run.json           # Last test run details
    ├── .gitignore                   # Git ignore file
    ├── package-lock.json            # Lock file for package dependencies
    ├── package.json                 # Dependencies and scripts
    ├── playwright.config.js         # Playwright configuration file
    └── README.md                    # Info file


## Test Reports
In this project, Playwright's trace feature captures detailed data during test execution, including actions, network requests, and screenshots.

#### Benefits of Trace:
* Easier Debugging: Replay tests to identify where they fail.
* Network Request Insights: View API calls made during tests.
* Visual Feedback: Screenshots at each step help identify issues.
* Quick Issue Identification: Logs and actions pinpoint test failures.
* Reproducibility: Replay the exact test failure to diagnose problems.

#### Sample Report

![ScreenRecording2024-11-23at8 35 33PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/0ca87948-7574-42f4-aa82-a2f63734374b)

## **Contact**
For any issues, kindly reach out to me at:
- **Email**: siranjeevis134@gmail.com
- **GitHub**: [Siranjeevi S](https://www.linkedin.com/in/siranjeevi1/)






