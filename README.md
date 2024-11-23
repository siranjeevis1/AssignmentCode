\# \*\*FitPeo Automation Assignment\*\*

This repository contains an automation script for testing the
\*\*Revenue Calculator\*\* functionality on the \*\*FitPeo\*\* website.
The script is developed using the \*\*Playwright\*\* framework with
\*\*JavaScript\*\*, ensuring robust and efficient web automation.

\## \*\*Features of This Project\*\* - \*\*Framework Used\*\*:
\*\*Playwright\*\*, a powerful end-to-end testing framework supporting
cross-browser automation with ease.  - \*\*Specialty\*\*:  - \*\*Dynamic
handling of web elements\*\*: Manages sliders, checkboxes, and other
dynamic components efficiently.  - \*\*Page Object Model (POM)\*\*:
Implements POM to keep the code modular, reusable, and easy to maintain.
 - \*\*Clean and maintainable codebase\*\*: With reusable functions and
clear separation of concerns.  - \*\*Built-in exception handling\*\*:
Ensures smooth execution even with unexpected scenarios.  - \*\*Detailed
documentation\*\*: Makes it easy to set up and use the project.

\## \*\*Pre-Requisites\*\* Before running this project, ensure you have
the following installed on your system:  1. \*\*Node.js\*\* (LTS version
recommended) \[Download Node.js here\](https://nodejs.org/) 2.
\*\*Git\*\* \[Download Git here\](https://git-scm.com/) 3. \*\*A Code
Editor\*\* (e.g., Visual Studio Code) \[Download VS Code
here\](https://code.visualstudio.com/)

\## \*\*How to Install\*\* 1. \*\*Clone the repository\*\* to your local
system: \`\`\`bash git clone
https://github.com/\<your-username\>/\<your-repository-name\>.git cd
\<your-repository-name\> \## \*\* Install required browsers for
Playwright testing:\*\* Playwright needs the necessary browsers to run
the tests. Install them with: \`\`\`bash npx playwright install

\## \*\* How to Run the Tests\*\* Run All Test Cases: To execute all the
test cases in the project, use the following command: \`\`\`bash npx
playwright test Install dependencies using npm: This will install all
the required libraries and packages needed for the project.

bash Copy code npm install Install required browsers for Playwright
testing: Playwright needs the necessary browsers to run the tests.
Install them with:

bash Copy code npx playwright install How to Run the Tests Run All Test
Cases: To execute all the test cases in the project, use the following
command:

bash Copy code npx playwright test Run Tests in Headed Mode (Visible
Browser): To see the browser in action during the test execution
(headless mode is the default), use this command:

bash Copy code npx playwright test \--headed Run Tests in UI Mode: To
launch the Playwright UI and interact with the test process, use this
command:

bash Copy code npx playwright test \--ui Run a Specific Test File: If
you want to run a specific test file instead of the whole suite, use
this command, replacing \<test-file-name\> with the test file name you
want to run:

bash Copy code npx playwright test tests/\<test-file-name\>.spec.js
Folder Structure plaintext Copy code . ├── tests/ \# Contains all test
files │ ├── assignmentCode1.spec.js \# Example test case file │ └──
anotherTest.spec.js \# Another test file ├── pages/ \# Includes the Page
Object Model (POM) files │ ├── basePage.js \# BasePage class with common
locators and methods │ └── revenueCalculatorPage.js \# Specific page
class for revenue calculator page ├── reports/ \# Auto-generated folder
for test reports ├── package.json \# Dependencies and scripts ├──
playwright.config.js \# Playwright configuration file └── README.md \#
This file Key Highlights of the Code BasePage Class: Includes reusable
locators and methods to simplify test scripting. Test Scripts: Written
in separate files to ensure clean and modular structure. Playwright
Framework: Cross-browser support (Chromium, Firefox, WebKit). Fast
execution and parallel testing. Automatic handling of timeouts and
retries. Support For any issues or queries, contact me directly at:
Email: siranjeevis134@gmail.com

yaml Copy code
