Playwright Test Automation Project
This project is a Test Automation framework built with Playwright and TypeScript. 

🛠️ Features
TypeScript Support: Leverages TypeScript for better code quality and type safety.

📋 Prerequisites
Make sure you have the following installed:

Node.js: Download Node.js
npm (comes with Node.js)
Git: Download Git

📂 Project Structure

🚀 Getting Started
Follow these steps to set up the project:

1. Clone the Repository
```
git clone https://github.com/monikakonieczna/playwright-ts-lab.git
```
2. Install Dependencies
```
npm install
```

📝 Writing Tests
Tests can be found in the tests/ directory.

⚙️ Configuration

🏃 Test Execution with CLI
To execute tests with Playwright via the CLI, you can use the Playwright Test Runner, which is a powerful tool for running your tests, controlling the execution environment, and generating reports.
1. Run all tests
To run all the tests in your project, simply use the following command:
```
npx playwright test
```
2. Run Specific Test Files
```
npx playwright test tests/sample.spec.ts
```
You can also run multiple test files:
```
npx playwright test tests/test1.spec.ts tests/test2.spec.ts
```
3. Run Tests in Specific Browser
Playwright supports cross-browser testing with chromium, firefox, and webkit. To run the tests in a specific browser, use the --project option.
To run tests in Chromium:
```
npx playwright test --project=chromium
```
To run tests in Firefox:
```
npx playwright test --project=firefox
```
To run tests in WebKit:
```
npx playwright test --project=webkit
```
4. Run Tests with Headed Mode
By default, Playwright runs tests in headless mode (without UI). To run the tests with a visible browser window, use the --headed flag:
```
npx playwright test --headed
```

🏃Test Execution with UI
1. Run Tests from UI
```
npx playwright test --ui
```

📊 Reports
1. Run Tests with Reporters
Playwright provides several reporting options. You can generate HTML, JSON, or other formats.
- HTML Report: To generate an HTML report after running tests:
```
npx playwright test --reporter=html
```
- JSON Report: To generate a JSON report:
```
npx playwright test --reporter=json
```
2. After running the tests, you can view the generated reports.
HTML Report: If you've run tests with the --reporter=html flag, you can open the report by navigating to the playwright-report folder:
```
npx playwright show-report
```

🤖 Continuous Integration

🛠️ Debugging Tips
1. Run Tests with Debugging
For debugging, you can run tests with additional debug information. Use the --debug flag:
```
npx playwright test --debug
``
`
💡 Additional Resources