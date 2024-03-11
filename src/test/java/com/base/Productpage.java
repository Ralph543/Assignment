package com.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Productpage extends Baseclass {
	
	
	public Productpage() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy (xpath = "//div[@class='product__description rte quick-add-hidden']")
	private WebElement specs;
	
	@FindBy (name="add")
	private WebElement addToCart;

	public WebElement getSpecs() {
		return specs;
	}

	public WebElement getAddToCart() {
		return addToCart;
	}
	
	
	}
	
	


