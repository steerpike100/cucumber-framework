package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
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
        for (String winHandle : driver.getWindowHandles()) {
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

    @Given("^user navigates to \"([^\"]*)\"$")
    public void userNavigatesTo(String url) {
        driver.get(url);
    }

    @And("the user clicks on the login portal button")
    public void theUserClicksOnTheLoginPortalButton() {
        driver.findElement(By.id("login-portal")).click();
    }


    @And("^user enters the \"([^\"]*)\" username")
    public void userEntersTheUsername(String username) throws InterruptedException {
        Thread.sleep(3000);
        @SuppressWarnings("unused")
        String winHandleBefore = driver.getWindowHandle();
        for (String winHandle : driver.getWindowHandles()) {
            driver.switchTo().window(winHandle);
        }
        driver.findElement(By.id("text")).sendKeys(username);
    }


    @And("^user enters the \"([^\"]*)\" password$")
    public void userEntersThePassword(String password) {
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @When("^user clicks on the login button$")
    public void userClicksOnTheLoginButton() throws InterruptedException {
        Thread.sleep(3000);
        driver.findElement(By.id("login-button")).click();
    }

    @Then("^the user should be presented with the following prompt alert \"([^\"]*)\"$")
    public void theUserShouldBePresentedWithTheFollowingPromptAlert(String message) throws InterruptedException {
        Alert alert = driver.switchTo().alert();
        System.out.println(alert.getText());
        Assert.assertEquals(message.toLowerCase().replaceAll("\\s*", ""), alert.getText().toLowerCase().replaceAll("\\s*", ""));
        Thread.sleep(3000);
        alert.accept();
    }

    @After
    public void tearDown() {
        driver.manage().deleteAllCookies();
        driver.close();
        driver.quit();
    }


}
