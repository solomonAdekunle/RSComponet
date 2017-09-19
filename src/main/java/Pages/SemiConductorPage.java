package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SemiConductorPage extends BasePage {

	/* Creating a Constructor */
	public SemiConductorPage(WebDriver driver) {
		super(driver);

	}

	/* Navigate to SemiConductor Home Page */
	public void getSemiConductor(String baseUrl) {
		driver.get(baseUrl + "/c/semiconductors");

	}

	/* Click on Order your here link within the Page */
	public void clickOrderYourHereLink() {
		click("semiConductorOrderYourHere_Selector");
	}

	/* Click on AddTo Baseket Button */
	public void clickAddToBasketButton() {
		WebElement AddToBasket=driver.findElement(By.cssSelector(OR.getProperty("AddToBasket_Selector")));
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", AddToBasket);
		
	}

	/* Click on View Basket Button */
	public void clickViewBasketButton() {
		WebElement ViewBasketButton=driver.findElement(By.cssSelector(OR.getProperty("viewBasket_Selector")));
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", ViewBasketButton);

	}
	
	 public boolean isSemiconductorTitlePagePresent(){
		 boolean TitlePage=isElementPresent("ProductsCategoryTitlePage_Selector");
		 return TitlePage;
	 }
}
