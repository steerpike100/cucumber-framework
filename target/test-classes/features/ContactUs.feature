Feature: Submit data to webdriveruniversity.com using contact us form
  As a user
  I should be able to submit information via the contact us form
  So that I can contact the website

  Rules
  - if a user clicks on the reset button, all information should be removed

  Background:
    Given I access webdriveruniversity
    When I click on the contact us button

  @live
  Scenario: Submit information to using the contact us form
    And I enter a valid first name
    And I enter a valid last name
      | woods | jackson | jones |
    And I enter a valid email address
    And I enter comments
      | comment one   | comment two  |
      | comment three | comment four |
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form

  @staging
  Scenario: Submit information to using the contact us form
    And I enter a valid first name
    And I enter a valid last name
      | gates | bill | bruno |
    And I enter a valid email address
    And I enter comments
      | comment five  | comment six   |
      | comment seven | comment eight |
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form

