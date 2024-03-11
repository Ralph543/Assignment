package com.base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage extends Baseclass{

	
	public CheckoutPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (xpath = "(//a[contains(@class,'s2kwpi1')])[3]")
	private WebElement loginbtn;
	
	@FindBy (xpath = "(//div[contains(@class,'_1ip0g651 _1fragemkb')])[6]")
	private WebElement accountName;
	
	@FindBy (xpath = "(//input)[4]")
	private WebElement hno;
	
	@FindBy (xpath = "(//input)[5]")
	private WebElement address;
	
	@FindBy (xpath = "(//input)[6]")
	private WebElement cityName;
	
	@FindBy (xpath = "(//Select)[2]")
	private WebElement stateName;
	
	@FindBy (xpath = "(//input)[7]")
	private WebElement pinCode;
	
	@FindBy (xpath = "(//input)[8]")
	private WebElement phoneNo;

	
	
	
	
	public WebElement getLoginbtn() {
		return loginbtn;	
			
	}
	
	
	public WebElement getAccountName() {
		return accountName;
	}

	public WebElement getHno() {
		return hno;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCityName() {
		return cityName;
	}

	public WebElement getStateName() {
		return stateName;
	}

	public WebElement getPinCode() {
		return pinCode;
	}

	public WebElement getPhoneNo() {
		return phoneNo;
	}

	

	
}
