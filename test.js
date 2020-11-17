console.log('node is installed')

require('chromedriver');
const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const By = webdriver.By;
const until = webdriver.until;
const assert = require('assert');
const url = "https://qa-sandbox.apps.htec.rs/";
let email = "vladimir.klindic@gmail.com";
let password = "RsvfG4RQ84VqHud";
let technologies = ["android", "ios", "java", "qaautomation"];
let seniority = ["junior", "medior", "senior"];
let teams = ["FE", "BE", "QA"];
let persons = ["Android Junior", "Android Senior", "IOs Medior", "Java Medior", "QA Senior"];
let projectName = ["New Project", "Another Project"];


driver.get(url);

//login
driver.findElement(By.css("div.text-center a.btn-secondary")).click();
driver.findElement(By.css("input[type='email']")).sendKeys(email);
driver.findElement(By.css("input[type='password']")).sendKeys(password);
driver.findElement(By.css("form button")).click();

/*driver.wait(until.elementLocated(By.css("div.text-center a.btn-secondary")), 10000).click();
driver.wait(until.elementLocated(By.css("input[type='email']")), 50000).sendKeys(email);
driver.wait(until.elementLocated(By.css("input[type='password']")), 50000).sendKeys(password);
driver.wait(until.elementLocated(By.css("form button")), 50000).click();*/

//go to playground 
driver.wait(until.elementLocated(By.css("div.row .col-sm-3.pb-2:nth-of-type(3)")), 50000).click();

//create technologies
for(let i=0; i<technologies.length; i++){
	driver.wait(until.elementLocated(By.css("div.row #test4")), 10000).click();
	driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
	driver.findElement(By.css("input[type='text']")).sendKeys(technologies[i]);
	driver.findElement(By.css("button[type='submit']")).click();
}

//create seniorities
for(let i=0; i<seniority.length; i++){
	driver.wait(until.elementLocated(By.css("div.row #test3")), 1000).click();
	driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
	driver.findElement(By.css("input[type='text']")).sendKeys(seniority[i]);
	driver.findElement(By.css("button[type='submit']")).click();
}

//create teams
for(let i=0; i<teams.length; i++){
	driver.wait(until.elementLocated(By.css("div.row #test1")), 1000).click();
	driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
	driver.findElement(By.css("input[type='text']")).sendKeys(teams[i]);
	driver.findElement(By.css("button[type='submit']")).click();
}

//create persons
for(let i=0; i<persons.length; i++){
	driver.wait(until.elementLocated(By.css("div.row #test2")), 1000).click();
	driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
	let inputName = driver.findElement(By.css("form input[type='text']"));
	inputName.sendKeys(persons[i]);
	driver.findElement(By.css("form div.pb-3:nth-of-type(2)")).click();
	inputName.getAttribute("value")
	.then((element)=>{
		if(element == persons[0]){
			driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[0]}']`)), 1000).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
			driver.findElement(By.xpath(`//*[text()='${seniority[0]}']`)).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
			driver.findElement(By.xpath(`//*[text()='${teams[0]}']`)).click();
			driver.findElement(By.css("button[type='submit']")).click();
		} else if (element == persons[1]){
			driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[0]}']`)), 1000).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
			driver.findElement(By.xpath(`//*[text()='${seniority[2]}']`)).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
			driver.findElement(By.xpath(`//*[text()='${teams[0]}']`)).click();
			driver.findElement(By.css("button[type='submit']")).click();
		} else if (element == persons[2]){
			driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[1]}']`)), 1000).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
			driver.findElement(By.xpath(`//*[text()='${seniority[1]}']`)).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
			driver.findElement(By.xpath(`//*[text()='${teams[0]}']`)).click();
			driver.findElement(By.css("button[type='submit']")).click();
		} else if (element == persons[3]){
			driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[2]}']`)), 1000).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
			driver.findElement(By.xpath(`//*[text()='${seniority[1]}']`)).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
			driver.findElement(By.xpath(`//*[text()='${teams[1]}']`)).click();
			driver.findElement(By.css("button[type='submit']")).click();
		} else {
			driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[3]}']`)), 1000).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
			driver.findElement(By.xpath(`//*[text()='${seniority[2]}']`)).click();
			driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
			driver.findElement(By.xpath(`//*[text()='${teams[2]}']`)).click();
			driver.findElement(By.css("button[type='submit']")).click();
		}
	})
	
}

//create project
driver.wait(until.elementLocated(By.css("div.row #test0")), 1000).click();
driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
driver.findElement(By.css("input[type='text']")).sendKeys(`${projectName[0]}`);
driver.findElement(By.css("form div.pb-3")).click();
for(let i=0; i<persons.length; i++){
	driver.findElement(By.xpath(`//*[text()='${persons[i]}']`)).click();
}
driver.findElement(By.css("button[type='submit']")).click();

//edit project
driver.wait(until.elementLocated(By.css("div.row #test0")), 1000).click();
driver.wait(until.elementLocated(By.xpath(`//*[text()='${projectName[0]}']`)), 1000).click();
driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
driver.wait(until.elementLocated(By.xpath(`//span[text()='${persons[0]}']//following-sibling::span`)), 1000).click();
driver.wait(until.elementLocated(By.xpath(`//span[text()='${persons[3]}']//following-sibling::span`)), 1000).click();
driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
driver.wait(until.elementLocated(By.css("input[type='text']")), 1000).clear();
driver.findElement(By.css("input[type='text']")).sendKeys(`${projectName[1]}`);
driver.findElement(By.css("button[type='submit']")).click();

