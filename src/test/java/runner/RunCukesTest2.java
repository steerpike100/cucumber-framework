package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features2/"},
        glue = {"steps"},
        plugin = {"pretty", "html:target/cucumber-reports", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter: output/report.html"}
)

public class RunCukesTest2 extends AbstractTestNGCucumberTests {

}
