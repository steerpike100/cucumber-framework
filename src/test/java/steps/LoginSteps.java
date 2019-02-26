package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class LoginSteps {

    WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.gecko.driver", "C:\\udemy\\CucumberFramework\\resources\\geckodriver.exe");
        this.driver = new FirefoxDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }


    @Given("^User navigates to stackoverflow website$")
    public void user_navigates_to_stackoverflow_website() {
        System.out.println("User navigates to stackoverflow website");
    }

    @Given("^User clicks on the login button on homepage$")
    public void user_clicks_on_the_login_button_on_homepage() {
        System.out.println("User clicks on the login button on homepage");
    }

    @Given("^User enters a valid username$")
    public void user_enters_a_valid_username() {
        System.out.println("User enters a valid username");
    }

    @Given("^User enters a valid password$")
    public void user_enters_a_valid_password() {
        System.out.println("User enters a valid password");
    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() {
        System.out.println("User clicks on the login button");
    }

    @Then("^User should be taken to the successful login page$")
    public void user_should_be_taken_to_the_successful_login_page() {
        System.out.println("User should be taken to the successful login page");
    }


}
