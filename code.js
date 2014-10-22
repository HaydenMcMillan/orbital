$( document ).ready(function() {


	/*PRELOAD IMAGES*/
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
	$([
	'img/nomus.png', 
	'img/health.png', 
	'img/fuel.png', 
	'img/animated.gif'
	]).preload();

	/*VARIABLES & SETUP*/
	
	/*ship*/
	var cash = 100; 
	var health = 4;
	var fuel = 7;
	var storage = 100;
	
	/*upgrades*/
	var engine = 1;
	var nav = 1;
	var tank = 1;
	var ship = 1;
	var capacity = 1;
	
	/*salvage*/
	var scrap = 1;
	var ore = 3;
	var debris = 20;
	var danger = 7;
	
	/*GLOBAL CANVAS VARIABLES*/
	var healthCanvas = document.getElementById('healthBar').getContext('2d');
	var fuelCanvas = document.getElementById('fuelBar').getContext('2d');
	var dangerCanvas = document.getElementById('dangerBar').getContext('2d');
	var planet = "PLANET";
	
	/*INVOKE FUNCTIONS*/
	upgrades();
	changePlanet();
	canvasDraw();
	
	salvageScrap();
	blackMarket();
	cityMarket();
	travel();
	
	update();
	
	/*UPDATE*/
function update(){
	$(".cashBox").append("$ " + cash);	 
	
	bars();
}

	/*CANVAS*/
function canvasDraw(){
	var healthImg  = document.getElementById("healthImage");
	var fuelImg  = document.getElementById("fuelImage");
	var inventoryCanvas = document.getElementById('inventory').getContext('2d');
	
	healthCanvas.drawImage(healthImg,0,0,300,150);
	fuelCanvas.drawImage(fuelImg,0,0,300,150);
	dangerCanvas.drawImage(healthImg,0,0,300,150);

	inventoryCanvas.moveTo(30,0);
	inventoryCanvas.lineTo(30,200);
	inventoryCanvas.moveTo(60,0);
	inventoryCanvas.lineTo(60,200);
	inventoryCanvas.moveTo(90,0);
	inventoryCanvas.lineTo(90,200);
	inventoryCanvas.moveTo(120,0);
	inventoryCanvas.lineTo(120,200);
	inventoryCanvas.moveTo(150,0);
	inventoryCanvas.lineTo(150,200);
	inventoryCanvas.moveTo(180,0);
	inventoryCanvas.lineTo(180,200);
	inventoryCanvas.moveTo(210,0);
	inventoryCanvas.lineTo(210,200);
	inventoryCanvas.moveTo(240,0);
	inventoryCanvas.lineTo(240,200);
	inventoryCanvas.moveTo(270,0);
	inventoryCanvas.lineTo(270,200);
	inventoryCanvas.moveTo(300,0);
	inventoryCanvas.lineTo(300,200);
	inventoryCanvas.moveTo(0,15);
	inventoryCanvas.lineTo(300,15);
	inventoryCanvas.moveTo(0,30);
	inventoryCanvas.lineTo(300,30);
	inventoryCanvas.moveTo(0,45);
	inventoryCanvas.lineTo(300,45);
	inventoryCanvas.moveTo(0,60);
	inventoryCanvas.lineTo(300,60);
	inventoryCanvas.moveTo(0,75);
	inventoryCanvas.lineTo(300,75);
	inventoryCanvas.moveTo(0,90);
	inventoryCanvas.lineTo(300,90);
	inventoryCanvas.moveTo(0,105);
	inventoryCanvas.lineTo(300,105);
	inventoryCanvas.moveTo(0,120);
	inventoryCanvas.lineTo(300,120);
	inventoryCanvas.moveTo(0,135);
	inventoryCanvas.lineTo(300,135);
	
	inventoryCanvas.strokeStyle = "#cccccc";
	inventoryCanvas.lineWidth = 0.5;
	inventoryCanvas.stroke();
}
	
	/*BUTTONS*/
$("#salvage").click(function(){
	hideAll();
	$(".salvage").show();
	$(this).addClass("selected");
});
$("#store").click(function(){
	hideAll();
	$(".store").show();
	$(this).addClass("selected");
});
$("#blackMarket").click(function(){
	hideAll();
	$(".blackMarket").show();
	$(this).addClass("selected");
});
$("#cityMarket").click(function(){
	hideAll();
	$(".cityMarket").show();
	$(this).addClass("selected");
});
$("#travel").click(function(){
	hideAll();
	$(".travel").show();
	$(this).addClass("selected");
});

	/*ONE DIV SHOW AT A TIME*/
function hideAll(){
	$(".button").removeClass("selected");
	$(".salvage").hide();
	$(".store").hide();
	$(".blackMarket").hide();
	$(".cityMarket").hide();
	$(".travel").hide();
}

	/*CHANGE PLANET IMAGE*/
function changePlanet(){
	if(planet == "PLANET"){
		$(".planetImage").append("<img src='img/animated.gif'>");
	}
}

	/*UPGRADES*/
function upgrades(){
	$(".planetName").append(planet);
	$(".engUpgrade").append(engine);
	$(".navUpgrade").append(nav);
	$(".fuelUpgrade").append(tank);
	$(".shipUpgrade").append(ship);
	$(".storUpgrade").append(capacity);
}
	
	/*DRAW BARS BASED ON THEIR VARIABLES*/
function bars(){

	if(health == 9){
	healthCanvas.rect(270,0,30,150);
	}
	if(health == 8){
	healthCanvas.rect(240,0,60,150);
	}
	if(health == 7){
	healthCanvas.rect(210,0,90,150);
	}
	if(health == 6){
	healthCanvas.rect(180,0,120,150);	
	}
	if(health == 5){
	healthCanvas.rect(150,0,150,150);	
	}
	if(health == 4){
	healthCanvas.rect(120,0,180,150);	
	}
	if(health == 3){
	healthCanvas.rect(90,0,210,150);	
	}
	if(health == 2){
	healthCanvas.rect(60,0,240,150);	
	}
	if(health == 1){
	healthCanvas.rect(30,0,270,150);	
	}
	if(health === 0){
	healthCanvas.rect(0,0,300,150);
	}
	
	if(fuel == 9){
	fuelCanvas.rect(270,0,30,150);
	}
	if(fuel == 8){
	fuelCanvas.rect(240,0,60,150);
	}
	if(fuel == 7){
	fuelCanvas.rect(210,0,90,150);
	}
	if(fuel == 6){
	fuelCanvas.rect(180,0,120,150);	
	}
	if(fuel == 5){
	fuelCanvas.rect(150,0,150,150);	
	}
	if(fuel == 4){
	fuelCanvas.rect(120,0,180,150);	
	}
	if(fuel == 3){
	fuelCanvas.rect(90,0,210,150);	
	}
	if(fuel == 2){
	fuelCanvas.rect(60,0,240,150);	
	}
	if(fuel == 1){
	fuelCanvas.rect(30,0,270,150);	
	}
	if(fuel === 0){
	fuelCanvas.rect(0,0,300,150);
	}
	
	if(danger == 9){
	dangerCanvas.rect(270,0,30,150);
	}
	if(danger == 8){
	dangerCanvas.rect(240,0,60,150);
	}
	if(danger == 7){
	dangerCanvas.rect(210,0,90,150);
	}
	if(danger == 6){
	dangerCanvas.rect(180,0,120,150);	
	}
	if(danger == 5){
	dangerCanvas.rect(150,0,150,150);	
	}
	if(danger == 4){
	dangerCanvas.rect(120,0,180,150);	
	}
	if(danger == 3){
	dangerCanvas.rect(90,0,210,150);	
	}
	if(danger == 2){
	dangerCanvas.rect(60,0,240,150);	
	}
	if(danger == 1){
	dangerCanvas.rect(30,0,270,150);	
	}
	if(danger === 0){
	dangerCanvas.rect(0,0,300,150);
	}
	
	healthCanvas.fillStyle = "#333";
	healthCanvas.fill();
	fuelCanvas.fillStyle = "#333";
	fuelCanvas.fill();
	dangerCanvas.fillStyle = "#333";
	dangerCanvas.fill();
}

	/*SALVAGE SCRAP*/
function salvageScrap(){
	$("#salvageBtn").click(function () {
      $(this).text(function(i, text){
          return text === "OFF" ? "ON" : "OFF";
      });
   });
   
   $("#scrap").append(scrap);
   $("#ore").append(ore);
   $("#debris").append(debris);
}
	/*SETUP STORE*/
function setupStore(){
	
}
	/*BLACK MARKET*/
function blackMarket(){
	
}
	/*CITY MARKET*/
function cityMarket(){
	
}
	/*TRAVEL*/
function travel(){
	
}

});
