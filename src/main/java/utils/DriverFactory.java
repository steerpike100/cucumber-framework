package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import pageobjects.ContactUsPage;
import pageobjects.ProductsPage;

import java.util.concurrent.TimeUnit;

public class DriverFactory {

    public static WebDriver driver;
    public static ProductsPage productsPage;
    public static ContactUsPage contactUsPage;

    public WebDriver getDriver() {
        try {
            //Read Config
            ReadConfigFile file = new ReadConfigFile();
            String browser = file.getBrowser();

            switch (browser) {
                case "firefox":
                    if (driver == null) {
                        System.setProperty("webdriver.gecko.driver", Constant.CHROME_DRIVER_DIRECTORY);
                        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                        capabilities.setCapability("marionette", true);
                        driver = new FirefoxDriver();
                        driver.manage().window().maximize();
                    }
                    break;

                case "chrome":
                    if (driver == null) {
                        System.setProperty("webdriver.chrome.driver", Constant.CHROME_DRIVER_DIRECTORY);
                        //CHROME OPTIONS
                        driver = new ChromeDriver();
                        driver.manage().window().maximize();
                    }
                    break;

                case "ie":
                    if (driver == null) {
                        DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
                        System.setProperty("webdriver.ie.driver", Constant.IE_DRIVER_DIRECTORY);
                        capabilities.setCapability("ignoreZoomSetting", true);
                        driver = new InternetExplorerDriver(capabilities);
                        driver.manage().window().maximize();

                    }
                    break;


            }
        } catch (Exception e) {
            System.out.println("Unable to load browser" + e.getMessage());

        } finally {
            //   assert driver != null;
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            contactUsPage = PageFactory.initElements(driver, ContactUsPage.class);
            productsPage = PageFactory.initElements(driver, ProductsPage.class);
        }
        return driver;
    }
}
