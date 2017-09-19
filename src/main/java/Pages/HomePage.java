package Pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends BasePage {

	// Creating a Constructor */
	public HomePage(WebDriver driver) {
		super(driver);

	}

	/* Naviaget to the Home Page */
	public void get(String baseURL) {
		this.driver.get(baseURL + "/");
	}

	/* Click on All Product Link */
	public void clickAllProductMenuLink() {
		click("AllProucts_Selector");

	}

	/* Click on SemiConductor on the All Product ment */
	public void clickAllProductSemiCondctorLink() {
		WebElement AllProductMenuOver = driver
				.findElement(By.cssSelector(OR.getProperty("ProductMenuOverLay_Selector")));
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOf(AllProductMenuOver));
		click("AllProductor_SemiConductor_Selector");
	}

	/* Click on Cable and Wire witnin the all Product Menu */
	public void clickAllProductCableAndWireLink() {
		WebElement AllProductMenuOver = driver
				.findElement(By.cssSelector(OR.getProperty("ProductMenuOverLay_Selector")));
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOf(AllProductMenuOver));
		click("AllProductor_CableAndWire_Selector");
	}
	/* Click on Search Add ToBasket button */
	public void clickSearchAddToBasketRedButton(){
		WebElement searchAddButton=driver.findElement(By.cssSelector(OR.getProperty("hp_SearchAddToBasket_Selector")));
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", searchAddButton);
	}
	
	/* enter product Stock Number in the Search Text box */	
	public void sendSearchProductNumber(String StockNumber){
		int searchTextBox=driver.findElements(By.cssSelector(OR.getProperty("hp_SearchNumber_Selector"))).size();
		System.out.println(searchTextBox);
		List<WebElement> searchinputboxes=driver.findElements(By.cssSelector(OR.getProperty("hp_SearchNumber_Selector")));
		WebElement searchBox1=searchinputboxes.get(0);
		searchBox1.sendKeys(StockNumber);
	}
   /* enter the quantity amount of stock */
	public void sendSearchQuantyAmount(String Amount){
		List<WebElement> searchinputboxes=driver.findElements(By.cssSelector(OR.getProperty("hp_SearchQuantityAmount_Selector")));
		WebElement searchBox1=searchinputboxes.get(0);
		searchBox1.sendKeys(Amount);
	}
}