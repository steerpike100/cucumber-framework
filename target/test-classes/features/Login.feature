Feature: Login to WebdriverUniversity

#  Background:
#    Given I access webdriveruniversity
#    When I click on the portal button

  Scenario Outline: Login to account with a valid password
    Given user navigates to "<url>"
    And the user clicks on the login portal button
    And user enters the "<username>" username
    And user enters the "<password>" password
    When user clicks on the login button
    Then the user should be presented with the following prompt alert "<message>"
    Examples:
      | url                                | username  | password     | message              |
      | http://www.webdriveruniversity.com | user1     | pass1        | validation failed    |
      | http://www.webdriveruniversity.com | webdriver | webdriver123 | validation succeeded666 |

