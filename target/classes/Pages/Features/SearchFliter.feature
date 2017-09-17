Feature: SearchFilter
       User should be able to search for a product 
       Quickly by Product number and add Quanty amount 
       
@ignore     
@Search    
 Scenario: Quick Search of Product with valid Stock Number
 Given I Navigate to the Home Page on "browser"  
 When I enter Product Number as "136-7817"
  And I enter Quantity Amaoun as "2"
  And I click on search AddToBasket button Home page
  Then I should be Redirected to Checkout Page
@ignore 
@Search    
 Scenario: Quick Search of Product with Invalid Stock Number
 Given I Navigate to the Home Page on "browser"  
 When I enter Product Number as "136-7817153"
  And I enter Quantity Amaoun as "2"
  And I click on search AddToBasket button Home page
 Then I should be see errorMessage displayed on Checkout Page
  And I should see CheckOut button Disabled on CheckOut Page