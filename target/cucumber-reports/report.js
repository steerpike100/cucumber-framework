$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Login to WebdriverUniversity",
  "description": "",
  "id": "login-to-webdriveruniversity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to account with a valid password",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user should be presented with the following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver2",
        "webdriver1232",
        "validation succeeded2"
      ],
      "line": 13,
      "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1471196900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to account with a valid password",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"webdriver2\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters the \"webdriver1232\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user should be presented with the following prompt alert \"validation succeeded2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.userNavigatesTo(String)"
});
formatter.result({
  "duration": 1438016600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.theUserClicksOnTheLoginPortalButton()"
});
formatter.result({
  "duration": 142086800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver2",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersTheUsername(String)"
});
formatter.result({
  "duration": 3166233300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver1232",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersThePassword(String)"
});
formatter.result({
  "duration": 76498000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 3102271200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded2",
      "offset": 62
    }
  ],
  "location": "LoginSteps.theUserShouldBePresentedWithTheFollowingPromptAlert(String)"
});
formatter.result({
  "duration": 11854000,
  "error_message": "java.lang.AssertionError: expected [validationfailed] but found [validationsucceeded2]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.LoginSteps.theUserShouldBePresentedWithTheFollowingPromptAlert(LoginSteps.java:112)\r\n\tat ✽.Then the user should be presented with the following prompt alert \"validation succeeded2\"(Login2.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 20436300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : validation failed}\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027STEVEB\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\steveb\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63640}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: fadfffe99e70af65c7f72f53b510dfc8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\r\n\tat steps.LoginSteps.tearDown(LoginSteps.java:119)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:55)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:47)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
});