$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to WebdriverUniversity",
  "description": "",
  "id": "login-to-webdriveruniversity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Background:"
    },
    {
      "line": 4,
      "value": "#    Given I access webdriveruniversity"
    },
    {
      "line": 5,
      "value": "#    When I click on the portal button"
    }
  ],
  "line": 7,
  "name": "Login to account with a valid password",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user should be presented with the following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
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
      "line": 15,
      "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "user1",
        "pass1",
        "validation failed"
      ],
      "line": 16,
      "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 17,
      "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2741415300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to account with a valid password",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"user1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters the \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user should be presented with the following prompt alert \"validation failed\"",
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
  "duration": 970881800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.theUserClicksOnTheLoginPortalButton()"
});
formatter.result({
  "duration": 275743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersTheUsername(String)"
});
formatter.result({
  "duration": 3177349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersThePassword(String)"
});
formatter.result({
  "duration": 75991900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 3106657400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 62
    }
  ],
  "location": "LoginSteps.theUserShouldBePresentedWithTheFollowingPromptAlert(String)"
});
formatter.result({
  "duration": 3010931700,
  "status": "passed"
});
formatter.after({
  "duration": 734588900,
  "status": "passed"
});
formatter.before({
  "duration": 1582175900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login to account with a valid password",
  "description": "",
  "id": "login-to-webdriveruniversity;login-to-account-with-a-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user clicks on the login portal button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters the \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user should be presented with the following prompt alert \"validation succeeded\"",
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
  "duration": 1002641700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.theUserClicksOnTheLoginPortalButton()"
});
formatter.result({
  "duration": 186017700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersTheUsername(String)"
});
formatter.result({
  "duration": 3168346400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.userEntersThePassword(String)"
});
formatter.result({
  "duration": 93772000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 3070406100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 62
    }
  ],
  "location": "LoginSteps.theUserShouldBePresentedWithTheFollowingPromptAlert(String)"
});
formatter.result({
  "duration": 3011127400,
  "status": "passed"
});
formatter.after({
  "duration": 710420700,
  "status": "passed"
});
});