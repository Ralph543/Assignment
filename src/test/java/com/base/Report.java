package com.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Report {
	
	public static void generateReport(String jsonFile) {
	
		File file = new File("C:\\Users\\augustin\\eclipse-workspace\\Assignment\\target\\maven-report");
		
		Configuration config = new Configuration(file,"ShopNow");
		
		config.addClassifications("browser", "Chrome");
		config.addClassifications("os", "Windows11");
		
		List<String> jsonFiles = new ArrayList<>();
		jsonFiles.add(jsonFile);
		
		ReportBuilder builder = new ReportBuilder(jsonFiles,config);
		
		builder.generateReports();
		
		
		
		

	}

}
