package com.base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingPage extends Baseclass{

	
	public ShoppingPage() {
	
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy (xpath = "//a[@class='cart-item__name h4 break']")
	private WebElement prodinCart;

	@FindBy (xpath = "(//button)[12]")
	private WebElement checkoutbtn;

	
	
	public WebElement getProdinCart() {
		return prodinCart;
	}



	public WebElement getCheckoutbtn() {
		return checkoutbtn;
	}
	

	
}
