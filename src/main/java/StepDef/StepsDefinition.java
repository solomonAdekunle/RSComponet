package StepDef;

import org.junit.Assert;

import Pages.BasePage;
import Pages.CableAndWirePage;
import Pages.CheckoutPage;
import Pages.HomePage;
import Pages.IndustriaPowerConnectorPage;
import Pages.SemiConductorPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsDefinition extends BaseTest {

	private BasePage basePage;
	private HomePage homePage;
	private CableAndWirePage cwPage;
	private SemiConductorPage SCPage;
	private CheckoutPage checkoutPage;
	private IndustriaPowerConnectorPage PICPage;
	

	// Creating a Constructor
	public StepsDefinition() {
		super();
		
		homePage = new HomePage(BaseTest.driver);
		cwPage = new CableAndWirePage(BaseTest.driver);
		SCPage = new SemiConductorPage(BaseTest.driver);
		checkoutPage = new CheckoutPage(BaseTest.driver);
		PICPage=new IndustriaPowerConnectorPage(BaseTest.driver);
		

	}

	/* Go to Home Page */
	@Given("^I Navigate to the Home Page on \"([^\"]*)\"$")
	public void i_Navigate_to_the_Home_Page_on(String baseURL) {
		homePage.get(CONFIG.getProperty("siteName"));
	}

	/* Go To SemiConductor Home page */
	@Given("^I Navigate to the semiConductor Page on \"([^\"]*)\"$")
	public void i_Navigate_to_the_semiConductor_Page_on(String baseURL) {
		SCPage.getSemiConductor(CONFIG.getProperty("siteName"));
	}

	/* Go To Cable and Wire Home Page */
	@Given("^I Navigated to Cable and Wire Page on \"([^\"]*)\"$")
	public void i_Navigated_to_Cable_and_Wire_Page_on(String baseURL) {
		cwPage.get(CONFIG.getProperty("siteName"));
	}
	/* Go To Power Industrial SemiConnector Page */
	@Given("^I am on Power Industrial Connector Page$")
	public void i_am_on_Power_Industrial_Connector_Page()  {
		PICPage.getPICAddress(CONFIG.getProperty("siteName"));
	    
	}


	/////////////////////////////////////////////////////////////////////////////////////
	///////////// The Below When Methods Annotation methods are for Initiatingan
	///////////////////////////////////////////////////////////////////////////////////// Action
	///////////////////////////////////////////////////////////////////////////////////// \\
	//////////////////////////////////////////////////////////////////////////////////////

	/* User Click on All Product menu */
	@When("^I click on all Product menu$")
	public void i_click_on_all_Product_menu() throws Throwable {
		homePage.clickAllProductMenuLink();
	}

	/* User Click on Cable Wire Link within All Product Menu */
	@When("^I click on Cable Wire link$")
	public void i_click_on_Cable_Wire_link() {
		homePage.clickAllProductCableAndWireLink();

	}

	/* click on Semi Conductor link within All Product menu */
	@When("^I click on SemiConductor$")
	public void i_click_on_SemiConductor() {
		homePage.clickAllProductSemiCondctorLink();

	}

	/* User click on Order your here link on SemiConductor home page */
	@When("^I click on order your here link$")
	public void i_click_on_order_your_here_link() {
		SCPage.clickOrderYourHereLink();

	}

	/* User Click on Add To Basket button of SemiConductor Page */
	@When("^I click Add to basket button$")
	public void i_click_Add_to_basket_button() {
		SCPage.clickAddToBasketButton();

	}

	/* Click on View Basket button SemiConductor Product Page */
	@When("^I click view basket button$")
	public void i_click_view_basket_button() {
		SCPage.clickViewBasketButton();
	}

	@When("^I click on Choose your own Connector link$")
	public void i_click_on_Choose_your_own_Connector_link()  {
        cwPage.clickChooseYourConnectionlink();
	}
	/* Click on Add button On Pic  Prouctor tabe */
	@When("^I click on Add button on PIC Product table$")
	public void i_click_on_Add_button_on_PIC_Product_table()  {
	   PICPage.clickRedAddButtonPICProductor1();
	}
	@When("^I enter Product Number as \"([^\"]*)\"$")
	public void i_enter_Product_Number_as(String StockNumber)  {
		homePage.sendSearchProductNumber(StockNumber);
	    
	}

	@When("^I enter Quantity Amaoun as \"([^\"]*)\"$")
	public void i_enter_Quantity_Amaoun_as(String Amount)  {
		homePage.sendSearchQuantyAmount(Amount);
	    
	}

	@When("^I click on search AddToBasket button Home page$")
	public void i_click_on_search_AddToBasket_button_Home_page() {
		homePage.clickSearchAddToBasketRedButton();
	    
	}
	
	////////////////////////////////////////////////////////////////////////////////
	////// The Below Then Annotation methods are for Verification ////////////
	/////////////////////////////////////////////////////////////////////////////////

	/* Verify if user navigate to Cable Wire page */
	@Then("^I Should see Cable wire Page$")
	public void i_Should_see_Cable_wire_Page() {
		Assert.assertTrue(cwPage.isCableWireTilePresent());

	}

	/* Verify if user was displayed with Checkout Page */
	@Then("^I should be Redirected to Checkout Page$")
	public void i_should_be_Redirected_to_Checkout_Page() {
		Assert.assertTrue(checkoutPage.isCheckOutButtonsPresent());

	}

	/* Verify if user is displayed with Semiconductor Page */
	@Then("^I Should see be displayed with SemiConductor Page$")
	public void i_Should_see_be_displayed_with_SemiConductor_Page() {
		Assert.assertTrue(SCPage.isSemiconductorTitlePagePresent());

	}
	/* Verify if user navigeted to Power Industrial Connector via
	 *  Choose your own connector link on Cable and Wire home Page 
	 */
	@Then("^I should Navigate to IndustrialPower Connector Page$")
	public void i_should_Navigate_to_IndustrialPower_Connector_Page()  {
		Assert.assertTrue(PICPage.isIndustrialPowerConnectorTitlePagePresent());
	}
	/* Check if Green tick Added  displayed */
	@Then("^I should see my Product added$")
	public void i_should_see_my_Product_added(){
		Assert.assertTrue(PICPage.isIndustrialPowerConnectotProductsAdded());
	}
	/* Verify if Error Message is displayed on Checkout Page */
	@Then("^I should be see errorMessage displayed on Checkout Page$")
	public void i_should_be_see_errorMessage_displayed_on_Checkout_Page() {
		Assert.assertTrue(checkoutPage.isErrorMesssageCheckOutPagePresent());
	}
    /* Verify if disabled Checkout Securly button displayed */
	@Then("^I should see CheckOut button Disabled on CheckOut Page$")
	public void i_should_see_CheckOut_Button_Disabled_on_CheckOut_Page(){
		Assert.assertTrue(checkoutPage.isDisabledCheckOutButtonPresent());
	}
	@After
	public void afterScenario() {
		// driver.close();
	}

}