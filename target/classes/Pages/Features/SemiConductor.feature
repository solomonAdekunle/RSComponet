Feature: SemiConductor Products
          User should be able to View and order any semiconductor
          products on semiConductor Page

@ignore
@Semiconductor       
 Scenario: User navigating to the home page
    Given I Navigate to the semiConductor Page on "browser"
    When I click on order your here link
    And  I click Add to basket button
    And  I click view basket button
    Then I should be Redirected to Checkout Page
    
    
 
 