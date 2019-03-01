package pageobjects;

import cucumber.api.DataTable;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.util.List;

public class ContactUsPage extends BasePage {
    public @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement textFieldFirstName;
    public @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement textFieldLastName;
    public @FindBy(xpath = "//input[@placeholder='Email Address']")
    WebElement textFieldEmailAddress;
    public @FindBy(xpath = "//textarea[@placeholder='Comments']")
    WebElement textFieldMessage;
    public @FindBy(xpath = "//input[@value='SUBMIT']")
    WebElement submit;

    public ContactUsPage() throws IOException {
        super();
    }

    public ContactUsPage getContactUsPage() throws IOException {
        getDriver().get("http://www.webgetDriver()university.com/Contact-Us/contactus.html");
        return new ContactUsPage();
    }

    public ContactUsPage enterFirstName() throws Exception {
        sendKeysToWebElement(textFieldFirstName, "Tom");
        return new ContactUsPage();
    }

    public ContactUsPage enterLastName(DataTable dataTable, int row, int column) throws Exception {
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textFieldLastName, data.get(row).get(column));
        return new ContactUsPage();

    }

    public ContactUsPage enterEmailAddress() throws Exception {
        sendKeysToWebElement(textFieldEmailAddress, "test@example.com");
        return new ContactUsPage();
    }

    public ContactUsPage enterComments(DataTable dataTable, int row, int column) throws Exception {
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textFieldMessage, data.get(row).get(column));
        return new ContactUsPage();

    }

    public ContactUsPage clickSubmitButton() throws IOException {
        clickOnElementUsingCustomTimeout(submit, driver, 10 );
        return new ContactUsPage();
    }


}
