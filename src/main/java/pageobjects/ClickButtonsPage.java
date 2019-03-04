package pageobjects;

import cucumber.api.DataTable;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


import java.io.IOException;
import java.util.List;
import java.util.Random;

public class ClickButtonsPage extends BasePage {

    @FindBy(xpath = "//h1[contains (text(), 'BUTTON CLICKS')]")
    WebElement buttonClicksLink;

    @FindBy(id = "button1")
    WebElement buttonOne;

    @FindBy(id = "button1")
    WebElement buttonTwo;

    @FindBy(id = "button1")
    WebElement buttonThree;


    public ClickButtonsPage() throws IOException {
        super();
    }

    static String message = null;
    static String alertText = null;


    public void clickOnButtonClicksLink() throws InterruptedException {
        waitAndClickElement(buttonClicksLink);
    }

    public void buttonsPageHasLoaded() {

        for(String windowHandle : driver.getWindowHandles()){
            driver.switchTo().window(windowHandle);
        }

        waitForUrlToContain("Click-Buttons", 20);
    }


    public void clickChosenButton(DataTable data) throws InterruptedException {
        List<List<String>> tableData = data.raw();

        String webElementButton = tableData.get(0).get(0);
        String javaScriptButton = tableData.get(0).get(1);
        String actionMoveClickButton = tableData.get(0).get(2);
        Random rand = new Random();

        int n = rand.nextInt(tableData.size());

        switch (n) {
            case 0:
                waitAndClickElement(buttonOne);
                alertText = buttonOne.getText();
                message = webElementButton;
                break;
            case 1:
                waitAndClickElement(buttonTwo);
                isAlertPresent();
                alertText = switchToAlertAndGetText();
                message = javaScriptButton;
                break;
            case 2:
                waitAndClickElement(buttonThree);
                isAlertPresent();
                alertText = switchToAlertAndGetText();
                message = actionMoveClickButton;
                break;
        }


    }

    public void assertValidationMessage() {
        Assert.assertEquals(message.toLowerCase().replaceAll("\\s*", ""), alertText.toLowerCase().replaceAll("\\s*", ""));
        closeAlertPopupBox();
    }


}
