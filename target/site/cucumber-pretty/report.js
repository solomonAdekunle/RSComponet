$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AllProductMenu.feature");
formatter.feature({
  "line": 1,
  "name": "All Products Menu",
  "description": "       As A User I should be able to View and Navigate\r\n       to each Products category within the All Product Menu",
  "id": "all-products-menu",
  "keyword": "Feature"
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
  "duration": 15828522444,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_Choose_your_own_Connector_link()"
});
formatter.result({
  "duration": 4683299399,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_should_Navigate_to_IndustrialPower_Connector_Page()"
});
formatter.result({
  "duration": 72217012,
  "status": "passed"
});
formatter.after({
  "duration": 82965,
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
formatter.uri("SemiConductor.feature");
formatter.feature({
  "line": 1,
  "name": "SemiConductor Products",
  "description": "        User should be able to View and order any semiconductor\n        products on semiConductor Page",
  "id": "semiconductor-products",
  "keyword": "Feature"
});
});