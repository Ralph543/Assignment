package com.base;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class Baseclass {
	
	public static WebDriver driver ;
	
	public void launchBrowser() {
		
		WebDriverManager.chromedriver().setup();
		
		 ChromeOptions op = new ChromeOptions();
		
		op.setExperimentalOption("excludeSwitches",new String[] {"enable-automation"});
		op.addArguments("--remote-allow-origins=*");
		
		driver = new ChromeDriver(op);
		
		
		driver.manage().window().maximize();
		
	
	}
	public void close() {
		
		driver.quit();
	}
	
	public void loadUrl(String url) {
		
		driver.navigate().to(url);
	}
	
	
	public String title() {
		
		return driver.getTitle();
	}
	
	/*public void click(WebElement element) {
		
		element.click();
		
	}*/
 
     public void input(WebElement element,String data) {
		
		element.sendKeys(data);
		
     }
     
     public void scrolldown(WebElement ele) {
    	 
    	 JavascriptExecutor js = (JavascriptExecutor)driver;
    	 js.executeScript("arguments[0].scrollIntoView(true)", ele);
     }
	
     public void impwait() {
		
    	 driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);

	}
     
     public void validate(Object obj1, Object obj2)	{
    	 
    	 Assert.assertEquals(obj1, obj2);
     }
     
     
}
