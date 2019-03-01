package pageobjects;

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

    public ProductsPage() throws IOException {
        super();
    }


}
