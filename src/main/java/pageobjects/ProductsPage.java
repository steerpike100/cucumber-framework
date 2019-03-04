package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;

public class ProductsPage extends BasePage {
    public @FindBy(css = "#container-special-offers")
    WebElement specialOffersButton;
    public @FindBy(css = "container-product2")
    WebElement newLaptopsButton;
    public @FindBy(xpath = ".//*[@id='myModal']//b[contains(text(), 'NEWCUSTOMER')]")
    WebElement specialOffersText;
    public @FindBy(xpath = "//button[contains(text(),'Proceed')]")
    WebElement buttonProceedPopup;

    public ProductsPage() throws IOException {
        super();
    }

    public void clickOnSpecialOffersButton(String locator) throws InterruptedException {
        By offersButton = By.cssSelector(locator);
        waitForIsDisplayed(specialOffersButton, 30);
        waitAndClickElement(specialOffersButton);
    }

    public ProductsPage clickOnProceedButtonPopUp() throws InterruptedException, IOException {
        waitAndClickElement(buttonProceedPopup);
        return new ProductsPage();
    }

    public ProductsPage printSpecialOfferVoucherCode() throws IOException, InterruptedException {
        waitAndClickElement(specialOffersText);
        String voucherText = specialOffersText.getText();
        System.out.println("VoucherCode =  " + voucherText);
        return new ProductsPage();
    }


}
