package Pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class IndustriaPowerConnectorPage extends  BasePage {

	public IndustriaPowerConnectorPage(WebDriver driver) {
		super(driver);
		
	}
   public void getPICAddress(String baseURL){
	   driver.get(baseURL + "/c/connectors/power-connectors/industrial-power-connectors/?searchTerm=RS%20Pro&intcmp=UK-WEB-_-L1-PB3-_-Jun-17-_-Cables_Wires");
	   
   }
   /* Verify if user has navigated to Industrial Title Page */
   public boolean isIndustrialPowerConnectorTitlePagePresent(){
	   boolean IndustrialPowerTitle=isElementPresent("TitlePage_Selector");
	   return IndustrialPowerTitle;
   }
   
   public boolean isIndustrialPowerConnectotProductsAdded(){
	   boolean ProductedAdded=isElementPresent("IndustrialPowerConnectorPd1_Added_Selector");
	   return ProductedAdded;
	   
   }
   
    public void clickRedAddButtonPICProductor1(){
    	click("IndustrialPowerConnectorPd1_AddButton_Selector");
    }
    
}
