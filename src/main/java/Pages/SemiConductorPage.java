package Pages;

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
		click("AddToBasket_Selector");
	}

	/* Click on View Basket Button */
	public void clickViewBasketButton() {
		click("viewBasket_Selector");
	}
	
	 public boolean isSemiconductorTitlePagePresent(){
		 boolean TitlePage=isElementPresent("ProductsCategoryTitlePage_Selector");
		 return TitlePage;
	 }
}
