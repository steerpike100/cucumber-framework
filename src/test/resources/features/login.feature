Feature: Login to website

  Scenario Outline:
    Given I have navigated to the login page
    When I enter a valid username
    And I enter a valid password
    And I click the login button
    Then