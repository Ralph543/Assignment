$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Shopnow.feature");
formatter.feature({
  "name": "Validation of the Checkout page of Shopnow Web application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of Checkout page using Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Shopnow web application in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User verifies that homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User searches for Laptop on the search bar",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the result",
  "keyword": "And "
});
formatter.step({
  "name": "User views the product details of the product",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies if shopping cart page is open",
  "keyword": "Then "
});
formatter.step({
  "name": "User vrifies the correct product",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks check out button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies if cart page is open",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks the login",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies if account page is open",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters email and password and waits for a second",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies if we are back to Check out page",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies if the account detail is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter hno , address, city, state , pincode and phone number",
  "keyword": "When "
});
formatter.step({
  "name": "User closes browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browser"
      ]
    },
    {
      "cells": [
        "Chrome"
      ]
    },
    {
      "cells": [
        "Firefox"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of Checkout page using Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Shopnow web application in \"Chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launches_Shopnow_web_application_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_that_homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for Laptop on the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_searches_for_Laptop_on_the_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the result",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_on_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User views the product details of the product",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_views_the_product_details_of_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies if shopping cart page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_if_shopping_cart_page_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User vrifies the correct product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_vrifies_the_correct_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks check out button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_check_out_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies if cart page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_if_cart_page_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies if account page is open",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_if_account_page_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email and password and waits for a second",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enters_email_and_password_and_waits_for_a_second()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies if we are back to Check out page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_if_we_are_back_to_Check_out_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//div[contains(@class,\u0027_1ip0g651 _1fragemkb\u0027)])[6]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat com.stepdefinition.Stepdefinition.user_verifies_if_we_are_back_to_Check_out_page(Stepdefinition.java:212)\r\n\tat ✽.User verifies if we are back to Check out page(file:src/test/resources/Features/Shopnow.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[contains(@class,\u0027_1ip0g651 _1fragemkb\u0027)])[6]\"}\n  (Session info: chrome\u003d122.0.6261.112)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027LAPTOP-JN7AV1DU\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bd766db71ea219453ca8cfbb90cde90a, findElement {using\u003dxpath, value\u003d(//div[contains(@class,\u0027_1ip0g651 _1fragemkb\u0027)])[6]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.112, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\augustin\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:7886}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:7886/devtool..., se:cdpVersion: 122.0.6261.112, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bd766db71ea219453ca8cfbb90cde90a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:307)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:40)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:293)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:290)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.stepdefinition.Stepdefinition.user_verifies_if_we_are_back_to_Check_out_page(Stepdefinition.java:212)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies if the account detail is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_if_the_account_detail_is_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter hno , address, city, state , pincode and phone number",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enter_hno_address_city_state_pincode_and_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validation of Checkout page using Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Shopnow web application in \"Firefox\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_launches_Shopnow_web_application_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_verifies_that_homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User searches for Laptop on the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_searches_for_Laptop_on_the_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the result",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_on_the_result()"
});
