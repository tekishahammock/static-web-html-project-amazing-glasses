// JAVASCRIPT MAIN FOR THE PRODUCT PAGE!

// OBJECTS FOR OUR ARRAY

var redDragon = {
	image: '',
	name: 'Fierce Crimson Dragon Egg',
	price: '§12,3456.00',
	description: 'The more she shat hoster tully dunk barristan jaehaerys strong belwas osha.'
}

var blueDragon = {
	image:'',
	name: 'Wise Azure Dragon Egg',
	price: '§12,3456.00',
	description: 'Daenerys donal noye arianne jeyne westerling eddard maegor bronn khal drogo nymeria shireen old nan meera reed.'
}

var greenDragon = {
	image:'',
	name: 'Glorious Emerald Dragon Egg',
	price: '§12,3456.00',
	description: 'Asha elia daeron oswell whent kevan. Roose bolton varys rodrik illyrio oberyn aeron.'
}

var whiteDragon = {
	image:'',
	name: 'Blue-Eyes White Dragon Egg',
	price: '§12,3456.00',
	description: 'Beric dondarrion dunk nymeria khal drogo. Nights king melisandre jojen gilly, jon snow chett sansa ygritte drogon lord of bones.'
}

var blackDragon = {
	image:'',
	name: 'Obsidian Demon Dragon Egg',
	price: '§12,3456.00',
	description: 'Mya stone summer ygritte, kevan patchface darkstar daenerys.'
}

var pinkDragon = {
	image:'',
	name: 'Amorous Rose Dragon Egg',
	price: '§12,3456.00',
	description: 'Eddard jaqen aerys, khal drogo stannis the hound margaery jeor mormont mya stone hoster tully quentyn brandon stark jorah.'
}

var purpleDragon = {
	image:'',
	name: 'Royal Violet Dragon Egg',
	price: '§12,3456.00',
	description: 'Hoster tully samwell jon connington summer aemon cersei sansa beric dondarrion nights king viserys kevan.'
}

var orangeDragon = {
	image:'',
	name: 'Flaming Vermilion Dragon Egg',
	price: '§12,3456.00',
	description: 'Rhaegar aeron old nan, illyrio maester luwin aegon arthur dayne. '
}

// THE ARRAY

var dragonEggs = [ redDragon, blueDragon, greenDragon, whiteDragon, blackDragon, pinkDragon, purpleDragon, orangeDragon ]

// INSERTING THE ARRAY INTO TO THE DOM

var divDragon = document.getElementById("dragon-eggs");

var loopCount = dragonEggs.length

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

divDragon.innerHTML += 
"<div>" + 
"<p>" + dragonEggs[loopTracker].image + "</p>"
+ 
"<p>" + dragonEggs[loopTracker].name + "</p>"
+
"<p>" + dragonEggs[loopTracker].price + "</p>"
+
"<p>" + dragonEggs[loopTracker].description + "</p>"
+
"</div>";
}


