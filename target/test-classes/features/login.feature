Feature: Login to website

  @runthis
  Scenario Outline:
    Given I have navigated to the login page
    When I enter a valid username <username>
    And I enter a valid password <password>
    And I click the login button
    Then I am presented with a successful validation <message>
    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver124 | validation failed |
