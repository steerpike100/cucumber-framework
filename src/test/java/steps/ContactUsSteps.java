package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class ContactUsSteps extends DriverFactory {


    @Given("^I access webdriveruniversity contact us form$")
    public void i_access_webdriver_university_contact_us_form() throws Throwable {
        contactUsPage.getContactUsPage();
    }

    @When("^I enter a valid first name$")
    public void i_enter_a_valid_first_name() throws Throwable {
        contactUsPage.enterFirstName();
    }

    @When("^I enter a valid last name$")
    public void i_enter_a_valid_last_name(DataTable dataTable) throws Throwable {

        contactUsPage.enterLastName(dataTable, 0, 2);
    }

    @When("^I enter a valid email address$")
    public void i_enter_a_valid_email_address() throws Throwable {
        contactUsPage.enterEmailAddress();
    }

    @When("^I enter comments$")
    public void i_enter_comments(DataTable dataTable) throws Throwable {
        contactUsPage.enterComments(dataTable, 0, 1);
    }

    @When("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        contactUsPage.clickSubmitButton();
    }

    @Then("^the information should successfully be submitted via the contact us form$")
    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
       contactUsPage.confirmContactUsFormSubmissionWasSuccessful();
    }


}
