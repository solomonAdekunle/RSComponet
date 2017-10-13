$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/Pages/Features/AllProductMenu.feature");
formatter.feature({
  "line": 1,
  "name": "All Products Menu",
  "description": "       As A User I should be able to View and Navigate\r\n       to each Products category within the All Product Menu",
  "id": "all-products-menu",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#@ignore"
    }
  ],
  "line": 8,
  "name": "Navigating to Cable wire page",
  "description": "",
  "id": "all-products-menu;navigating-to-cable-wire-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@AllProductMenu"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I Navigate to the Home Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on all Product menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on Cable Wire link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Should see Cable wire Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_Home_Page_on(String)"
});
formatter.result({
  "duration": 15549184187,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_all_Product_menu()"
});
formatter.result({
  "duration": 285649710,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Cable_Wire_link()"
});
formatter.result({
  "duration": 3758954525,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_Should_see_Cable_wire_Page()"
});
formatter.result({
  "duration": 139715174,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#@ignore"
    }
  ],
  "line": 16,
  "name": "Navigating to SemiConductor page",
  "description": "",
  "id": "all-products-menu;navigating-to-semiconductor-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@AllProductMenu"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Navigate to the Home Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on all Product menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on SemiConductor",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Should see be displayed with SemiConductor Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_Home_Page_on(String)"
});
formatter.result({
  "duration": 1710994922,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_all_Product_menu()"
});
formatter.result({
  "duration": 614338871,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_SemiConductor()"
});
formatter.result({
  "duration": 2318833037,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_Should_see_be_displayed_with_SemiConductor_Page()"
});
formatter.result({
  "duration": 45151203,
  "status": "passed"
});
formatter.uri("main/resources/Pages/Features/CableAndWire.feature");
formatter.feature({
  "line": 1,
  "name": "Choose your Connector",
  "description": "       User should be able to view and click on the links\r\n       of each product on Cable and Wire page i order\r\n       to add to basket, check prices.",
  "id": "choose-your-connector",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#@ignore"
    }
  ],
  "line": 9,
  "name": "User wanting to choose product via Choose your own",
  "description": "",
  "id": "choose-your-connector;user-wanting-to-choose-product-via-choose-your-own",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@CableAndWireProduct"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I Navigated to Cable and Wire Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Choose your own Connector link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should Navigate to IndustrialPower Connector Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 39
    }
  ],
  "location": "StepsDefinition.i_Navigated_to_Cable_and_Wire_Page_on(String)"
});
formatter.result({
  "duration": 2606209611,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Choose_your_own_Connector_link()"
});
formatter.result({
  "duration": 4410805002,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_Navigate_to_IndustrialPower_Connector_Page()"
});
formatter.result({
  "duration": 51197793,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#@ignore"
    }
  ],
  "line": 16,
  "name": "Adding SemiConnectorProduct to Basket",
  "description": "",
  "id": "choose-your-connector;adding-semiconnectorproduct-to-basket",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@CableAndWireProduct"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Power Industrial Connector Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Add button on PIC Product table",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see my Product added",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.i_am_on_Power_Industrial_Connector_Page()"
});
formatter.result({
  "duration": 6058725345,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Add_button_on_PIC_Product_table()"
});
formatter.result({
  "duration": 94679010,
  "error_message": "java.lang.AssertionError: Element not found - IndustrialPowerConnectorPd1_AddButton_Selectorunknown error: Element \u003cbutton class\u003d\"btn btn-danger addToBasketBtn\" id\u003d\"atbBtn-1\" rs-add-to-basket\u003d\"\" add-to-basket-function\u003d\"facetFilters.addToBasket(rsStockNumber, quantity, buttonId)\" added-to-basket-trigger\u003d\"facetFilters.addedToBasketTrigger\" data-qtyfieldid\u003d\"atbQty-1\" data-rsstocknumber\u003d\"724-9088\"\u003e...\u003c/button\u003e is not clickable at point (724, 602). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 58 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027solomon\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Solomon\\AppData\\Local\\Temp\\scoped_dir8628_15220}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: fbf71a43a7f6e12837aa81d73791da58\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat Pages.BasePage.click(BasePage.java:38)\r\n\tat Pages.IndustriaPowerConnectorPage.clickRedAddButtonPICProductor1(IndustriaPowerConnectorPage.java:32)\r\n\tat com.StepDef.StepsDefinition.i_click_on_Add_button_on_PIC_Product_table(StepsDefinition.java:117)\r\n\tat ✽.When I click on Add button on PIC Product table(main/resources/Pages/Features/CableAndWire.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepsDefinition.i_should_see_my_Product_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("main/resources/Pages/Features/SearchFliter.feature");
formatter.feature({
  "line": 1,
  "name": "SearchFilter",
  "description": "     User should be able to search for a product \r\n     Quickly by Product number and add Quanty amount",
  "id": "searchfilter",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@ignore"
    }
  ],
  "line": 7,
  "name": "Quick Search of Product with valid Stock Number",
  "description": "",
  "id": "searchfilter;quick-search-of-product-with-valid-stock-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Navigate to the Home Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter Product Number as \"136-7817\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter Quantity Amaoun as \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on search AddToBasket button Home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be Redirected to Checkout Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_Home_Page_on(String)"
});
formatter.result({
  "duration": 3601806065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "136-7817",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.i_enter_Product_Number_as(String)"
});
formatter.result({
  "duration": 207365643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "StepsDefinition.i_enter_Quantity_Amaoun_as(String)"
});
formatter.result({
  "duration": 100485258,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_search_AddToBasket_button_Home_page()"
});
formatter.result({
  "duration": 10845369136,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_Redirected_to_Checkout_Page()"
});
formatter.result({
  "duration": 85513118,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#@ignore"
    }
  ],
  "line": 15,
  "name": "Quick Search of Product with Invalid Stock Number",
  "description": "",
  "id": "searchfilter;quick-search-of-product-with-invalid-stock-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I Navigate to the Home Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter Product Number as \"136-7817153\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter Quantity Amaoun as \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on search AddToBasket button Home page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be see errorMessage displayed on Checkout Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see CheckOut button Disabled on CheckOut Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_Home_Page_on(String)"
});
formatter.result({
  "duration": 1643278595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "136-7817153",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.i_enter_Product_Number_as(String)"
});
formatter.result({
  "duration": 347527715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "StepsDefinition.i_enter_Quantity_Amaoun_as(String)"
});
formatter.result({
  "duration": 94708091,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_search_AddToBasket_button_Home_page()"
});
formatter.result({
  "duration": 3244248171,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_see_errorMessage_displayed_on_Checkout_Page()"
});
formatter.result({
  "duration": 49417472,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_see_CheckOut_Button_Disabled_on_CheckOut_Page()"
});
formatter.result({
  "duration": 53513535,
  "status": "passed"
});
formatter.uri("main/resources/Pages/Features/SemiConductor.feature");
formatter.feature({
  "line": 1,
  "name": "SemiConductor Products",
  "description": "        User should be able to View and order any semiconductor\n        products on semiConductor Page",
  "id": "semiconductor-products",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User navigating to the home page",
  "description": "",
  "id": "semiconductor-products;user-navigating-to-the-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@web"
    },
    {
      "line": 5,
      "name": "@Semiconductor"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I Navigate to the semiConductor Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on order your here link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click view basket button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be Redirected to Checkout Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 41
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_semiConductor_Page_on(String)"
});
formatter.result({
  "duration": 2502032422,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_order_your_here_link()"
});
formatter.result({
  "duration": 3503149025,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_Add_to_basket_button()"
});
formatter.result({
  "duration": 170495090,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_view_basket_button()"
});
formatter.result({
  "duration": 3503687440,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_Redirected_to_Checkout_Page()"
});
formatter.result({
  "duration": 137577763,
  "status": "passed"
});
formatter.after({
  "duration": 2575020004,
  "status": "passed"
});
});