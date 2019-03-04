$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to website",
  "description": "",
  "id": "login-to-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": "login-to-website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@runthis"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I have navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a valid password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am presented with a successful validation \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-website;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 11,
      "id": "login-to-website;;;1"
    },
    {
      "cells": [
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 12,
      "id": "login-to-website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2454090400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-to-website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@runthis"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I have navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid username webdriver",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a valid password webdriver123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am presented with a successful validation validation succeeded",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.i_have_navigated_to_the_login_page()"
});
formatter.result({
  "duration": 459213400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 25
    }
  ],
  "location": "LoginPageSteps.i_enter_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 10481200,
  "error_message": "cucumber.runtime.CucumberException: Don\u0027t know how to convert \"webdriver\" into cucumber.api.DataTable.\nTry writing your own converter:\n\n@cucumber.deps.com.thoughtworks.xstream.annotations.XStreamConverter(DataTableConverter.class)\npublic class DataTable {}\n\r\n\tat cucumber.runtime.ParameterInfo.convert(ParameterInfo.java:150)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:697)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:1004)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:728)\r\n\tat org.testng.TestRunner.run(TestRunner.java:629)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 25
    }
  ],
  "location": "LoginPageSteps.i_enter_a_valid_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 44
    }
  ],
  "location": "LoginPageSteps.iAmPresentedWithASuccessfulValidation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 983623300,
  "status": "passed"
});
});