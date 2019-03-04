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

public class LoginPageSteps extends DriverFactory {

    @Given("^I have navigated to the login page$")
    public void i_have_navigated_to_the_login_page() throws Throwable {
        loginPage.getLoginPage();
    }

    @When("^I enter a valid username ([^\"]*)$")
    public void iEnterAValidUsername(String username) throws Throwable {
        WebElement userNameField = driver.findElement(By.xpath("//input[@placeholder='Username']"));
        userNameField.sendKeys(username);
    }

    @When("^I enter a valid password (\\w+\\d+)$")
    public void i_enter_a_valid_password(String password) throws Throwable {
        WebElement passwordField = driver.findElement(By.xpath("//input[@id='password']"));
        passwordField.sendKeys(password);
    }

    @When("^I click the login button$")
    public void i_click_the_login_button() throws Throwable {
        loginPage.clickLoginButton();
    }

    @Then("^I am presented with a successful validation ([^\"]*)$")
    public void iAmPresentedWithASuccessfulValidation(String message) throws Throwable {
        WebElement validationMessage =  getDriver().findElement(By.xpath(""));
        Assert.assertEquals("Success Message", message, validationMessage.getText() );
    }


}
