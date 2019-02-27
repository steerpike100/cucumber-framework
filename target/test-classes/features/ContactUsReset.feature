#Feature: Reset data to webdriveruniversity.com using contact us form
#  As a user
#  I should be able to reset information via the contact us form
#  So that I can remove contact us information
#
#  Rules
#  - if a user clicks on the reset button, all information should be removed
#
#
#Scenario: Enter information into the contact form, when click on the reset button then information should be removed
#Given I access webdriveruniversity
#When I click on the contact us button
#And I enter first name
#And I enter last name
#And I enter an email address
#And I enter comments
#When I click on the reset button
#Then all information which was listed by the user on the contact us form should now be removed
