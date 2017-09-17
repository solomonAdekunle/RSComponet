package Pages;

import org.openqa.selenium.WebDriver;

public class CableAndWirePage extends BasePage {

	public CableAndWirePage(WebDriver driver) {
		super(driver);
		
	}
	/* Navigate to Cable Wire Home Page */
	 public void get(String baseURL){
		 this.driver.get(baseURL + "/c/cables-wires/");
	 }
     /* Verify if Cable And Wire is displayed as title */ 
	 public boolean isCableWireTilePresent(){
		 boolean TitlePage=isElementPresent("ProductsCategoryTitlePage_Selector");
		 return TitlePage;
	 }
	 /* Click on Choose your Connection link on the page */
	 public void clickChooseYourConnectionlink(){
		 click("cableAndwire_ChooseYourConnection_Selector");
	 }
}
