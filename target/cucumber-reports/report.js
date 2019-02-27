$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "As a user\r\nI should be able to submit information via the contact us form\r\nSo that I can contact the website\r\n\r\nRules\r\n- if a user clicks on the reset button, all information should be removed",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4462008400,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the contact us button",
  "keyword": "When "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 868037700,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 3152661000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Submit information to using the contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-to-using-the-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@live"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter a valid first name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "comment one",
        "comment two"
      ],
      "line": 20
    },
    {
      "cells": [
        "comment three",
        "comment four"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_enter_first_name()"
});
formatter.result({
  "duration": 368290300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_last_name(DataTable)"
});
formatter.result({
  "duration": 126287900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_an_email_address()"
});
formatter.result({
  "duration": 239326800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 444780000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 530319300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 47385100,
  "status": "passed"
});
formatter.after({
  "duration": 781626200,
  "status": "passed"
});
});