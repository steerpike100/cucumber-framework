//package steps;
//
//import cucumber.api.DataTable;
//import cucumber.api.PendingException;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//public class ContactUsSteps {
//
//    private WebDriver driver;
//
//    @Before
//    public void setUp() {
//        //    System.setProperty("webdriver.gecko.driver", "C:\\udemy\\CucumberFramework\\resources\\geckodriver.exe");
//        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\resources\\chromedriver.exe");
//        this.driver = new ChromeDriver();
//        //  this.driver = new FirefoxDriver();
//        this.driver.manage().window().maximize();
//        this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
//    }
//
//
//    @Given("^I access webdriveruniversity$")
//    public void i_access_webdriveruniversity() throws Throwable {
//        driver.get("http://webdriveruniversity.com");
//    }
//
//    @When("^I click on the contact us button$")
//    public void i_click_on_the_contact_us_button() throws Throwable {
//        Thread.sleep(3000);
//        driver.findElement(By.id("contact-us")).click();
//    }
//
//    @When("^I enter a valid first name$")
//    public void i_enter_first_name() throws Throwable {
//        String winHandleBefore = driver.getWindowHandle();
//        for(String winHandle: driver.getWindowHandles()){
//            driver.switchTo().window(winHandle);
//        }
//        driver.findElement(By.cssSelector("input[name='first_name']")).sendKeys("Tom");
//    }
//
//    @When("^I enter a valid last name$")
//    public void i_enter_last_name(DataTable table) throws Throwable {
//        List<List<String>> data = table.raw();
//        driver.findElement(By.cssSelector("input[name='last_name']")).sendKeys(data.get(0).get(1));
//    }
//
//    @When("^I enter a valid email address$")
//    public void i_enter_an_email_address() throws Throwable {
//        driver.findElement(By.cssSelector("input[name='email']")).sendKeys("webdriveruniversity@outlook.com");
//    }
//
//    @When("^I enter comments$")
//    public void i_enter_comments(DataTable arg1) throws Throwable {
//        List<List<String>> data = arg1.raw();
//        driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(0) + "\n");
//        driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(1) + "\n");
//        driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(0) + "\n");
//        driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(1));
//    }
//
//    @When("^I click on the submit button$")
//    public void i_click_on_the_submit_button() throws Throwable {
//      driver.findElement(By.cssSelector("input[value='SUBMIT']")).click();
//    }
//
//    @Then("^the information should successfully be submitted via the contact us form$")
//    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @When("^I click on the reset button$")
//    public void i_click_on_the_reset_button() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @Then("^all information which was listed by the user on the contact us form should now be removed$")
//    public void all_information_which_was_listed_by_the_user_on_the_contact_us_form_should_now_be_removed() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//
//}
