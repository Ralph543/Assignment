package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.base.Report;

import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import net.bytebuddy.implementation.bind.annotation.AllArguments.Assignment;


@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\resources\\Features",glue="com.stepdefinition", plugin= {"pretty",

		"html:C:\\Users\\augustin\\eclipse-workspace\\Assignment\\target",
		"junit:C:\\Users\\augustin\\eclipse-workspace\\Assignment\\target\\xmlreport.xml",
		"json:C:\\Users\\augustin\\eclipse-workspace\\Assignment\\target\\jsonreport.json"})


public class TestRunner {
	
	@AfterClass
	
	public static void report() {
		
		Report.generateReport("C:\\Users\\augustin\\eclipse-workspace\\Assignment\\target\\index.json");
	}
	
	
}
