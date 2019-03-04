package pageobjects;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.awt.*;
import java.io.IOException;

public class LoginPage extends BasePage {

    @FindBy(xpath = "//button[@id='login-button']")
    WebElement loginButton;


    public LoginPage() throws IOException {
        super();
    }

    public LoginPage getLoginPage() throws IOException {
        getDriver().get("http://www.webdriveruniversity.com/Login-Portal/index.html");
        return new LoginPage();
    }

    public LoginPage clickLoginButton() throws InterruptedException, IOException, AWTException {
        waitForElementToBeClickable(loginButton, 30);
        getDriver().findElement(By.id("login-button")).click();
        return new LoginPage();
    }
}
