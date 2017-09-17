$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AllProductMenu.feature");
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
  "duration": 14263946961,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_all_Product_menu()"
});
formatter.result({
  "duration": 272159193,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Cable_Wire_link()"
});
formatter.result({
  "duration": 2845714547,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_Should_see_Cable_wire_Page()"
});
formatter.result({
  "duration": 150666220,
  "status": "passed"
});
formatter.after({
  "duration": 78689,
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
  "duration": 1409640424,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_all_Product_menu()"
});
formatter.result({
  "duration": 371500992,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_SemiConductor()"
});
formatter.result({
  "duration": 3100384418,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_Should_see_be_displayed_with_SemiConductor_Page()"
});
formatter.result({
  "duration": 22368423,
  "status": "passed"
});
formatter.after({
  "duration": 44048,
  "status": "passed"
});
formatter.uri("CableAndWire.feature");
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
  "duration": 1633961856,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Choose_your_own_Connector_link()"
});
formatter.result({
  "duration": 2970037732,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_Navigate_to_IndustrialPower_Connector_Page()"
});
formatter.result({
  "duration": 43399573,
  "status": "passed"
});
formatter.after({
  "duration": 32929,
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
  "duration": 2013346642,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Add_button_on_PIC_Product_table()"
});
formatter.result({
  "duration": 196224161,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_see_my_Product_added()"
});
formatter.result({
  "duration": 125608284,
  "status": "passed"
});
formatter.after({
  "duration": 30363,
  "status": "passed"
});
formatter.uri("SearchFliter.feature");
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
  "duration": 1244992496,
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
  "duration": 307317881,
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
  "duration": 149080908,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_search_AddToBasket_button_Home_page()"
});
formatter.result({
  "duration": 4252747140,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_Redirected_to_Checkout_Page()"
});
formatter.result({
  "duration": 135410960,
  "status": "passed"
});
formatter.after({
  "duration": 35496,
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
  "duration": 1727658199,
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
  "duration": 425409724,
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
  "duration": 99412361,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_search_AddToBasket_button_Home_page()"
});
formatter.result({
  "duration": 3229285207,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_see_errorMessage_displayed_on_Checkout_Page()"
});
formatter.result({
  "duration": 62879195,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_see_CheckOut_Button_Disabled_on_CheckOut_Page()"
});
formatter.result({
  "duration": 44029507,
  "status": "passed"
});
formatter.after({
  "duration": 37634,
  "status": "passed"
});
formatter.uri("SemiConductor.feature");
formatter.feature({
  "line": 1,
  "name": "SemiConductor Products",
  "description": "        User should be able to View and order any semiconductor\n        products on semiConductor Page",
  "id": "semiconductor-products",
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
  "name": "User navigating to the home page",
  "description": "",
  "id": "semiconductor-products;user-navigating-to-the-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Semiconductor"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Navigate to the semiConductor Page on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on order your here link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click Add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click view basket button",
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
      "offset": 41
    }
  ],
  "location": "StepsDefinition.i_Navigate_to_the_semiConductor_Page_on(String)"
});
formatter.result({
  "duration": 2555842368,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_order_your_here_link()"
});
formatter.result({
  "duration": 5487380156,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_Add_to_basket_button()"
});
formatter.result({
  "duration": 132862145,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_view_basket_button()"
});
formatter.result({
  "duration": 2964403823,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_be_Redirected_to_Checkout_Page()"
});
formatter.result({
  "duration": 141556342,
  "status": "passed"
});
formatter.after({
  "duration": 30791,
  "status": "passed"
});
});