package steps;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class LoginSteps {

    WebDriver driver;

    @Before
    public void setUp() {
    //    System.setProperty("webdriver.gecko.driver", "C:\\udemy\\CucumberFramework\\resources\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\resources\\chromedriver.exe");
        this.driver = new ChromeDriver();
        //  this.driver = new FirefoxDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Given("^I access webdriveruniversity$")
    public void i_access_webdriveruniversity() throws Throwable {
      driver.get("http://webdriveruniversity.com");
    }


    @When("^I click on the portal button$")
    public void i_click_on_the_portal_button() throws Throwable {
        driver.findElement(By.id("login-portal")).click();
    }

    @When("^I enter a username$")
    public void i_enter_a_username() throws Throwable {
       String winHandleBefore = driver.getWindowHandle();
       for(String winHandle: driver.getWindowHandles()){
           driver.switchTo().window(winHandle);
       }
       driver.findElement(By.id("text")).sendKeys("Tom");
    }

    @When("^I enter a \"([^\"]*)\" password$")
    public void i_enter_a_password(String password) throws Throwable {
       driver.findElement(By.id("password")).sendKeys(password);
    }

    @When("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable {
        driver.findElement(By.id("login-button")).click();
    }

    @Then("^I should be presented with a successful validation alert$")
    public void i_should_be_presented_with_a_successful_validation_alert() throws Throwable {
        Alert alert = driver.switchTo().alert();
        System.out.println(alert.getText());
        Assert.assertEquals("validation failed", alert.getText());
    }

    @Then("^I should be presented with a unsuccessful validation alert$")
    public void i_should_be_presented_with_a_unsuccessful_validation_alert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
