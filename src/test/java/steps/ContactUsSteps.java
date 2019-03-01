package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import utils.DriverFactory;

import java.util.List;

public class ContactUsSteps extends DriverFactory {


    @Given("^I access webgetDriver()university contact us form$")
    public void i_access_webdriver_university_contact_us_form() throws Throwable {
       contactUsPage.getContactUsPage();
    }

    @When("^I enter a valid first name$")
    public void i_enter_a_valid_first_name() throws Throwable {
        contactUsPage.enterFirstName();
    }

    @When("^I enter a valid last name$")
    public void i_enter_a_valid_last_name(DataTable dataTable, int row, int column) throws Throwable {

        contactUsPage.enterLastName(dataTable, row, column);
    }

    @When("^I enter a valid email address$")
    public void i_enter_a_valid_email_address() throws Throwable {
        contactUsPage.enterEmailAddress();
    }

    @When("^I enter comments$")
    public void i_enter_comments(DataTable dataTable, int row, int column) throws Throwable {
        contactUsPage.enterComments(dataTable, row, column);
    }

    @When("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        Thread.sleep(3000);
        getDriver().findElement(By.xpath("//input[@value='SUBMIT']")).click();
    }

    @Then("^the information should successfully be submitted via the contact us form$")
    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
        Thread.sleep(3000);
        WebElement thanksContactUsPage = getDriver().findElement(By.xpath(".//*[@id='contact_reply']/h1"));

        Assert.assertEquals("thankyouforyourmessage!", thanksContactUsPage.getText().toLowerCase().replaceAll("[ ()0-9]", ""));
        ;
    }


}
