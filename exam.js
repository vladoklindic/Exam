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





describe('exam',  function(){
	
	before(async function(){
		this.timeout(20000);
		await driver.get(url);
	});


	//login
	it('login', async function(){
		this.timeout(20000);
		await driver.wait(until.elementLocated(By.css("div.text-center a.btn-secondary")), 10000).click();
		await driver.wait(until.elementLocated(By.css("input[type='email']")), 50000).sendKeys(email);
		await driver.wait(until.elementLocated(By.css("input[type='password']")), 50000).sendKeys(password);
		await driver.wait(until.elementLocated(By.css("form button")), 50000).click();
	});

	//go to playground
	it('go to playground', async function(){
		this.timeout(20000);
		await driver.wait(until.elementLocated(By.css("div.row .col-sm-3.pb-2:nth-of-type(3)")), 50000).click();
	});	

	//create technologies
	it('create technologies', async function(){
		this.timeout(20000);
		for(let i=0; i<technologies.length; i++){
			await driver.wait(until.elementLocated(By.css("div.row #test4")), 10000).click();
			await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
			await driver.findElement(By.css("input[type='text']")).sendKeys(technologies[i]);
			await driver.findElement(By.css("button[type='submit']")).click();
		}
		
	});
	//create seniorities
	it('create seniorities', async function(){
		this.timeout(20000);
		for(let i=0; i<seniority.length; i++){
			await driver.wait(until.elementLocated(By.css("div.row #test3")), 10000).click();
			await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
			await driver.findElement(By.css("input[type='text']")).sendKeys(seniority[i]);
			await driver.findElement(By.css("button[type='submit']")).click();
		}
		
	});

	//create teams
	it('create teams', async function(){
		this.timeout(20000);
		for(let i=0; i<teams.length; i++){
			await driver.wait(until.elementLocated(By.css("div.row #test1")), 10000).click();
			await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
			await driver.findElement(By.css("input[type='text']")).sendKeys(teams[i]);
			await driver.findElement(By.css("button[type='submit']")).click();
		}
		
	});

	
	//create people
	it('create people', async function(){
		this.timeout(20000);
		for(let i=0; i<persons.length; i++){
			await driver.wait(until.elementLocated(By.css("div.row #test2")), 10000).click();
			await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
			let inputName = await driver.findElement(By.css("form input[type='text']"));
			inputName.sendKeys(persons[i]);
			await driver.findElement(By.css("form div.pb-3:nth-of-type(2)")).click();
			let inputValue = await inputName.getAttribute("value");
			if(inputValue == persons[0]){
				console.log(inputName.getAttribute("value"));
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[0]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${seniority[0]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${teams[0]}']`)), 5000).click();
				await driver.findElement(By.css("button[type='submit']")).click();
			} else if (inputValue == persons[1]){
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[0]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
				await driver.findElement(By.xpath(`//*[text()='${seniority[2]}']`)).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
				await driver.findElement(By.xpath(`//*[text()='${teams[0]}']`)).click();
				await driver.findElement(By.css("button[type='submit']")).click();
			} else if (inputValue == persons[2]){
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[1]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
				await driver.findElement(By.xpath(`//*[text()='${seniority[1]}']`)).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
				await driver.findElement(By.xpath(`//*[text()='${teams[0]}']`)).click();
				await driver.findElement(By.css("button[type='submit']")).click();
			} else if (inputValue == persons[3]){
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[2]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
				await driver.findElement(By.xpath(`//*[text()='${seniority[1]}']`)).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
				await driver.findElement(By.xpath(`//*[text()='${teams[1]}']`)).click();
				await driver.findElement(By.css("button[type='submit']")).click();
			} else {
				await driver.wait(until.elementLocated(By.xpath(`//*[text()='${technologies[3]}']`)), 5000).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(3)")).click();
				await driver.findElement(By.xpath(`//*[text()='${seniority[2]}']`)).click();
				await driver.findElement(By.css("form div.pb-3:nth-of-type(4)")).click();
				await driver.findElement(By.xpath(`//*[text()='${teams[2]}']`)).click();
				await driver.findElement(By.css("button[type='submit']")).click();
			}

		}
		
	});

	//create project
	it('create project', async function(){
		this.timeout(20000);
		await driver.wait(until.elementLocated(By.css("div.row #test0")), 5000).click();
		await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
		await driver.findElement(By.css("input[type='text']")).sendKeys(`${projectName[0]}`);
		await driver.findElement(By.css("form div.pb-3")).click();
		for(let i=0; i<persons.length; i++){
			await driver.findElement(By.xpath(`//*[text()='${persons[i]}']`)).click();
		}
		await driver.findElement(By.css("button[type='submit']")).click();
		
	});

	//edit project
	it('edit project', async function(){
		this.timeout(20000);
		await driver.wait(until.elementLocated(By.css("div.row #test0")), 5000).click();
		await driver.wait(until.elementLocated(By.xpath(`//*[text()='${projectName[0]}']`)), 5000).click();
		await driver.findElement(By.css("div.container>a:nth-of-type(2)")).click();
		await driver.wait(until.elementLocated(By.xpath(`//span[text()='${persons[0]}']//following-sibling::span`)), 5000).click();
		await driver.wait(until.elementLocated(By.xpath(`//span[text()='${persons[3]}']//following-sibling::span`)), 5000).click();
		await driver.findElement(By.css("form div.pb-3:nth-of-type(2) div>svg")).click();
		await driver.wait(until.elementLocated(By.css("input[type='text']")), 1000).clear();
		await driver.findElement(By.css("input[type='text']")).sendKeys(`${projectName[1]}`);
		await driver.findElement(By.css("button[type='submit']")).click();
	});

	after(async function(){
		this.timeout(20000);
		await driver.quit();
	});





});




