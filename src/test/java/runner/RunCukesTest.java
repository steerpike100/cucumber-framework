package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features/"},
        glue = {"steps"},
        plugin = {"pretty", "html:target/cucumber-reports", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter: output/report.html"}
//        tags = {"@important"}
)

public class RunCukesTest extends AbstractTestNGCucumberTests {

}
