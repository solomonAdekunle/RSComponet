package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CheckoutPage extends BasePage {

	public CheckoutPage(WebDriver driver) {
		super(driver);

	}

	/* verify if Checkout active displayed at the Top of CheckOut Page */
	public boolean isCheckOutButtonsPresent() {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(
				ExpectedConditions.presenceOfElementLocated(By.cssSelector(OR.getProperty("CheckBoutton1_Selector"))));
		boolean TopCheckButton = isElementPresent("CheckBoutton1_Selector");
		return TopCheckButton;

	}
	/* Verify if  inactive checkout secure button is displayed */ 
	public boolean isDisabledCheckOutButtonPresent(){
		boolean inactiveSecureCheckoutbutton=isElementPresent("disabledCheckButton1_Selector");
		return inactiveSecureCheckoutbutton;
	}
  public boolean isErrorMesssageCheckOutPagePresent(){
	  boolean ErrorMessage=isElementPresent("checkoutErrorMessaageTitle_Selector");
	return ErrorMessage;
	  
  }
	
}
