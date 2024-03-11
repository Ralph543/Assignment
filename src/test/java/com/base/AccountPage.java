package com.base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Baseclass {
	
	public AccountPage() {
		PageFactory.initElements(driver, this);
	}
	

	public WebElement getEmail() {
		return email;
	}


	public WebElement getPassWord() {
		return passWord;
	}


	@FindBy (id="CustomerEmail")
	private WebElement email;
	

	@FindBy (id="CustomerPassword")
	private WebElement passWord;
	
	@FindBy (xpath="(//button)[11]")
	private WebElement signInbtn;

	public WebElement getSignInbtn() {
		return signInbtn;
	}
	
	
	
	
}
