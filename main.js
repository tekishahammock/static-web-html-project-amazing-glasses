// JAVASCRIPT MAIN FOR THE PRODUCT PAGE!

// OBJECTS FOR OUR ARRAY

var redDragon = {
	image: 'images/red-egg.jpeg',
	name: 'Fierce Crimson Dragon Egg',
	price: '§12,3456.00',
	description: 'The more she shat hoster tully dunk barristan jaehaerys strong belwas osha.'
}

var blueDragon = {
	image: 'images/blue-egg.jpeg',
	name: 'Wise Azure Dragon Egg',
	price: '§12,3456.00',
	description: 'Daenerys donal noye arianne jeyne westerling eddard maegor bronn khal nan meera reed.'
}

var greenDragon = {
	image:'images/green-egg.png',
	name: 'Glorious Emerald Dragon Egg',
	price: '§12,3456.00',
	description: 'Asha elia daeron oswell whent kevan. Roose bolton varys rodrik illyrio oberyn aeron.'
}

var whiteDragon = {
	image:'images/white-egg.jpg',
	name: 'Blue-Eyes White Dragon Egg',
	price: '§12,3456.00',
	description: 'Beric dondarrion dunk nymeria khal drogo. Nights king melisandre jojen lord of bones.'
}

var blackDragon = {
	image:'images/black-egg.jpg',
	name: 'Obsidian Demon Dragon Egg',
	price: '§12,3456.00',
	description: 'Mya stone summer ygritte, kevan patchface darkstar tully quentyn brandon stark daenerys.'
}

var pinkDragon = {
	image:'images/pink-egg.jpeg',
	name: 'Amorous Rose Dragon Egg',
	price: '§12,3456.00',
	description: 'Eddard jaqen aerys, khal drogo stannis the hound margaery jeor mormont mya hoster jorah.'
}

var purpleDragon = {
	image:'images/purple-egg.jpg',
	name: 'Royal Violet Dragon Egg',
	price: '§12,3456.00',
	description: 'Hoster tully samwell jon connington summer aemon cersei sansa beric  viserys kevan.'
}

var orangeDragon = {
	image:'images/orange-egg.jpg',
	name: 'Flaming Vermilion Dragon Egg',
	price: '§12,3456.00',
	description: 'Rhaegar aeron old nan, illyrio maester luwin aegon arthur daynedondarrion nights king. '
}

// THE ARRAY

var dragonEggs = [ redDragon, blueDragon, greenDragon, whiteDragon, blackDragon, pinkDragon, purpleDragon, orangeDragon ]

// INSERTING THE ARRAY INTO TO THE DOM

var divDragon = document.getElementById("dragon-eggs");

var loopCount = dragonEggs.length

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

divDragon.innerHTML +=
"<div>" +
"<img src='"+ dragonEggs[loopTracker].image + "'/>"
+
"<p>" + dragonEggs[loopTracker].name + "</p>"
+
"<p>" + dragonEggs[loopTracker].price + "</p>"
+
"<p>" + dragonEggs[loopTracker].description + "</p>"
+
"</div>";
}


