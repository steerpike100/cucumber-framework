package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import utils.DriverFactory;

public class ProductSteps extends DriverFactory {


    @Given("^user navigates to \"(.*?)\" website$")
    public void user_navigates_to_website(String url) throws Throwable {
        Thread.sleep(3000);
        getDriver().get(url);

    }

    @When("^user clicks on the \"(.*?)\"$")
    public void user_clicks_on_the(String locator) throws Throwable {
        Thread.sleep(2000);
        getDriver().findElement(By.cssSelector(locator)).click();

    }

    @Then("^user should be presented with a promo alert$")
    public void user_should_be_presented_with_a_promo_alert() throws Throwable {
        Thread.sleep(3000);
            getDriver().findElement(By.xpath("//button[contains(text(),'Proceed')]")).click();

    }
}
