package com.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Baseclass{
	
	public HomePage() {
		
		PageFactory.initElements(driver,this);
	}
	
	@FindBy (xpath = "(//summary)[10]")
	private WebElement searchbtn;
	
	@FindBy (name = "q")
	private WebElement searchbox;
	
	@FindBy (id = "CardLink--8050413175061")
	private WebElement prod;

	
	
	
	public WebElement getSearchbtn() {
		return searchbtn;
	}

	
	
	public WebElement getSearchbox() {
		return searchbox; 
		
	}



	public WebElement getprod() {
		return prod;
	}

	
	
	
	
	
}
