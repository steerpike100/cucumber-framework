package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/featureFiles/"},
        glue = {"CucumberFramework/src/test/java/steps/LoginSteps.java"},
        plugin = {"pretty", "html:target/cucumber-reports", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter: output/report.html"},
        monochrome = true)
//        tags = "")
//, "com.cucumber.listener.ExtentCucumberFormatter: output/report.html","html:target/cucumber", "json:target/cucumber.json"

public class RunCukesTest {

}
