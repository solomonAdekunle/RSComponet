package StepDef;


import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

	// runner class
	

@RunWith(Cucumber.class)
@cucumber.api.CucumberOptions(features = {"src\\main\\resources\\Pages\\Features\\"},format={"pretty","html:target/site/cucumber-pretty",
		"json:target/cucumber.jason"},tags = {"~@ignore"})
//@Cucumber.Options(format={"html:output"}
	
	public class Runner {
	
		
	
		
	
}

