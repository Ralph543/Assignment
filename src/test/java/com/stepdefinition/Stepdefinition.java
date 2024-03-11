package com.stepdefinition;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.base.AccountPage;
import com.base.Baseclass;
import com.base.CheckoutPage;
import com.base.HomePage;
import com.base.Productpage;
import com.base.ShoppingPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;


public class Stepdefinition extends Baseclass{

	
	
	
	HomePage hp ;
	Productpage p;
	ShoppingPage sp;
	CheckoutPage ch;
	AccountPage ap;
	
	

	

		@Given("User launches Shopnow web application")
		public void user_launches_Shopnow_web_application() {
		
			launchBrowser();
			loadUrl("https://shopnowonline.in/");
		
			
		}

		@Then("User verifies that homepage is displayed")
		public void user_verifies_that_homepage_is_displayed() {
		    
			String hometitle = title();
			String home = "Shop Now";	
			validate(hometitle, home);

			
		}

		@When("User searches for Laptop on the search bar")
		public void user_searches_for_Laptop_on_the_search_bar()  {
			
			 hp = new HomePage();
		
			hp.getSearchbtn().click(); 
			hp.getSearchbox().sendKeys("Laptop");
			hp.getSearchbox().sendKeys(Keys.ENTER);
			
					
		}

		@When("User clicks on the result")
		public void user_clicks_on_the_result() {
		 
			String prodname = hp.getprod().getText();
			
			System.out.println(prodname);
			
			hp.getprod().click();
		}

		
		
		@When("User views the product details of the product")
		public void user_views_the_product_details_of_the_product() {
			p = new Productpage();
				scrolldown(p.getSpecs());
		}

		@When("User clicks add to cart")
		public void user_clicks_add_to_cart() {
		
			WebElement addToCart = p.getAddToCart();
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			wait.until(ExpectedConditions.elementToBeClickable(addToCart));
			
			addToCart.click();
		
		}

		@Then("User verifies if shopping cart page is open")
		public void user_verifies_if_shopping_cart_page_is_open() {
		    
			String Shopingpagetitle= title();
		
			String Shoppage ="Your Shopping Cart – Shop Now";
			
			validate(Shopingpagetitle, Shoppage);
			
		}

		@Then("User vrifies the correct product")
		public void user_vrifies_the_correct_product() {
			
			 sp = new ShoppingPage();
			
			String cartprod = sp.getProdinCart().getText();
			String productName = "Anti Radiation Chip for Mobile Cell Phone | Rediance Chip Black & Gold";
			System.out.println(cartprod);
			
			validate(productName, cartprod);
			
		}

		@Then("User clicks check out button")
		public void user_clicks_check_out_button() {
		  
			sp.getCheckoutbtn().click();
			
		}

		@Then("User verifies if cart page is open")
		public void user_verifies_if_cart_page_is_open() {
		   

	         String cartpgtitle = title();
	         
	         String cartpage = "Checkout - Shop Now";
	         
	         validate(cartpgtitle, cartpage);
			
		}

		@Then("User clicks the login")
		public void user_clicks_the_login() {
			
			ch = new CheckoutPage();
		    
			ch.getLoginbtn().click();
			
		}

		@Then("User verifies if account page is open")
		public void user_verifies_if_account_page_is_open() {
		    
			String accountpageTitle = title();
			
			String accountpage = "Account – Shop Now";
			
			validate(accountpageTitle, accountpage);
			
		}

		@When("User enters email and password and waits for a second")
		public void user_enters_email_and_password_and_waits_for_a_second()  {
			ap = new AccountPage();
			ap.getEmail().sendKeys("blaisevp53@gmail.com");
			ap.getPassWord().sendKeys("SHOPnow53");
			
			
			
			
			
		}

		@When("User clicks Sign in button")
		public void user_clicks_Sign_in_button() throws InterruptedException {
		   
			Thread.sleep(5000);
			ap.getSignInbtn().click();
			
			Thread.sleep(1000);
			boolean displayed = driver.findElement(By.xpath("(//p)[2]")).isDisplayed();
		if(displayed==true)	{
			driver.navigate().back();
			Thread.sleep(5000);
			ap.getSignInbtn().click();
		}
			
		}

		@Then("User verifies if we are back to Check out page")
		public void user_verifies_if_we_are_back_to_Check_out_page() throws InterruptedException {  
			
		WebElement accountName =	ch.getAccountName();

			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			
			wait.until(ExpectedConditions.visibilityOf( accountName));
			
			
	         String cartpgtitle = title();
	         
	         String cartpage = "Checkout - Shop Now";
	         
	         validate(cartpgtitle, cartpage);
		}

		@Then("User verifies if the account detail is correct")
		public void user_verifies_if_the_account_detail_is_correct() {
		    
			//ch.getAccountName().sendKeys("blaisevp53@gmail.com");
			
			String id = ch.getAccountName().getText();
			String emailId = "blaisevp53@gmail.com";
			
			validate(id, emailId);
		}

		@When("User enter hno , address, city, state , pincode and phone number")
		public void user_enter_hno_address_city_state_pincode_and_phone_number() {
		    
			ch.getHno().sendKeys("H.NO 38");
			
			ch.getAddress().sendKeys("Pallandiamman Koil Street,Pallikaranai");
			
			WebElement city = ch.getCityName();
			
			scrolldown(city);
			
			city.sendKeys("Chennai");
			
			WebElement state = ch.getStateName();
			
			Select s = new Select(state);
			
			s.selectByValue("TN");
			
			ch.getPinCode().sendKeys("600100");
			
			ch.getPhoneNo().sendKeys("8778242922");
		}

		@When("User closes browser")
		public void user_closes_browser() {
			
			close();
		    
		}



}
