Feature: click buttons

  Scenario: click some buttons
    Given I am on the button click page
    When I click on the button:
    |webelement|javascript|action|
    Then I receive a success message alert:
    |Congratulations!|Its that Easy!! Well I think it is.....|Well done! the Action Move & Click can become very useful!|
