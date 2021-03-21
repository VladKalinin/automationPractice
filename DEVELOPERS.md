#Base information
## How to run tests:
- Run `npm test`
- FYI1: if the packages are not installed there is pretest `npm install`, so for the first run you do not need to run this command
- FYI2: for more information about settings please check `package.json` in root project folder
- FYI3: after each test run html report is generated and opened in the browser

## Report or how to evaluate:
- After each test run there are logs in _reports/allure-reports_
- To generate allure report use command `allure generate reports/allure-results` in terminal in ide
- After the command in root there is folder _allure-reports_
- Open _index.html_ in browser and you will see the report 

Measure: each step is marked as passed or failed so it is clear to understand if the test run successfully

## Project file structure:

1. reports folder - generated different logs logs
2. test folder - contains test/s, pageobjects, etc. for tests
3. wdio.conf.js - webdriverio settings

## Additional Information

This code could not have all JS standards, but from my Java automation experience I would like to share my ideas about refactoring:

Example case ofr improving: in orders page (http://automationpractice.com/index.php?controller=order) I would do it as BaseOrdersPage and create 5 block:
1. SummaryBlock
2. SignInBlock
3. AddressBlock
4. ShippingBlock
5. PaymentBlock

Some explanation regarding last test step: _Make sure that Product is ordered_
I would like to user reference orders code in `<br>` tag and got to orders page, verify if the orders has the expected value, but it was hard to handle it, that is why I just check the popup.
