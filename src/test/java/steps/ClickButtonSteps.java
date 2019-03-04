package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

import java.util.List;

public class ClickButtonSteps extends DriverFactory {

    String baseUrl = "http://www.webdriveruniversity.com/index.html";

    @Given("^I am on the button click page$")
    public void i_am_on_the_button_click_page() throws Throwable {
        getDriver().get(baseUrl);
        clickButtonsPage.clickOnButtonClicksLink();
        clickButtonsPage.buttonsPageHasLoaded();
    }
    @When("^I click on the button:$")
    public void i_click_on_the_webelementclick_button(DataTable data) throws Throwable {
        clickButtonsPage.clickChosenButton(data);
    }

    @Then("^I receive a success message alert:$")
    public void i_receive_a_success_message_alert(DataTable data) throws Throwable {
        clickButtonsPage.assertValidationMessage();
    }

}
