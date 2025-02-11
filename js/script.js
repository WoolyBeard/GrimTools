// Helper Function
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function rollOnTable(table) {
    if (typeof table[0] === 'function') {
        const rollRow = Math.ceil(Math.random() * 6) - 1;
        const rollColumn = Math.ceil(Math.random() * 6) - 1;
        const index = rollRow * 6 + rollColumn;
        return table[index](); // Execute the function to get the result
    } else {
        return table[Math.floor(Math.random() * table.length)];
    }
}

// Function to simulate rolling a dice
function rollDice(quantity, sides) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

// Adventure Generation
document.getElementById("generate-adventure-button").addEventListener("click", function () {
    const theme = rollOnTable(adventureThemes);
    const goal = rollOnTable(adventureGoals);
    const descriptor = rollOnTable(adventureDescriptors);
    const denizen = rollOnTable(adventureDenizens);
    const danger = rollOnTable(adventureDangers);
    const location = rollOnTable(adventureLocations);
    const fantasticalLocation = rollOnTable(adventureFantasticalLocations);
    const boon = rollOnTable(adventureBoons);

    document.getElementById("theme").textContent = theme;
    document.getElementById("goal").textContent = goal;
    document.getElementById("descriptor").textContent = descriptor;
    document.getElementById("denizen").textContent = denizen;
    document.getElementById("danger").textContent = danger;
    document.getElementById("location").textContent = location;
    document.getElementById("fantastical-location").textContent = fantasticalLocation;
    document.getElementById("boon").textContent = boon;

    // Construct the narrative sentence
    const narrative = `A ${descriptor} adventure centered on the theme of ${theme}. The goal is to ${goal}, but beware of ${danger} in the ${location}, particularly the ${fantasticalLocation}. You might encounter ${denizen}, but if you succeed, you could gain ${boon}.`;

    document.getElementById("adventure-story").textContent = narrative;
});


// Location Generation
document.getElementById("generate-location-button").addEventListener("click", function () {
    const biome = document.getElementById("biome-select").value;
    const locationType = document.getElementById("location-type-select").value;

    const selectedData = locationData[biome][locationType];

    document.getElementById("location-name").textContent = getRandomItem(selectedData.names);
    document.getElementById("location-description").textContent = getRandomItem(selectedData.descriptions);
    document.getElementById("location-complication").textContent = getRandomItem(selectedData.complications);
});

// Trap Generation
document.getElementById("generate-trap-button").addEventListener("click", function () {
    const trapType = document.getElementById("trap-type-select").value;
    const selectedData = traps[trapType];

    const mechanism = getRandomItem(selectedData.mechanisms);
    const consequence = getRandomItem(selectedData.consequences);
    const tell = getRandomItem(selectedData.tells);
    const difficulty = getRandomItem(selectedData.difficulties);

    // Get a random sense
    const sensesArray = Object.keys(selectedData.senses); // Get an array of the sense keys ("Smell", "Sight", etc.)
    const sense = getRandomItem(sensesArray); // Choose a random sense from the keys

    // Get a random descriptor for that sense
    const senseDescriptor = getRandomItem(selectedData.senses[sense]); // Access the correct descriptor array

    document.getElementById("mechanism").textContent = mechanism;
    document.getElementById("consequence").textContent = consequence;
    document.getElementById("tell").textContent = tell;
    document.getElementById("difficulty").textContent = difficulty;
    document.getElementById("sense").textContent = sense + ": " + senseDescriptor; // Display the sense and its descriptor
});

// Treasure Map Generation
document.getElementById("generate-treasure-map-button").addEventListener("click", function () {
    const isMundaneStart = Math.random() < 0.5;  // 50% chance of mundane vs. fantastic
    const isMundaneTreasure = Math.random() < 0.5;

    const startingLocation = isMundaneStart
        ? rollOnTable(treasureMinorMundaneLocations)
        : rollOnTable(treasureMinorFantasticLocations);

    const treasureLocation = isMundaneTreasure
        ? rollOnTable(treasureMundaneTreasureLocations)
        : rollOnTable(treasureFantasticTreasureLocations);

    const locationDetail = rollOnTable(treasureEnvironmentalFeatures);
    const locationDescriptor = rollOnTable(treasureLoreDescriptors);
    const directions = rollOnTable(treasureDirections);

    // Guardian Logic
    let guardian = "";
    let plundered = "Untouched";
    let whoWasHere = "";
    let theyTook = "";
    let whereDidTheyGo = "";

    // Guardian check - 50% chance of a guardian
    if (Math.random() < 0.5) {
        guardian = rollOnTable(treasureGuardians);
    } else {
        guardian = "No Guardian";
    }

    // Plundered Check
    const plunderedRoll = Math.ceil(Math.random() * 6);

    if (plunderedRoll >= 4) {
        //Location is plundered
        plundered = "Yes";
    }

    // If Messy/Plundered
    if (plundered == "Yes") {
        whoWasHere = rollOnTable(treasureWhoWasHere);
        theyTook = rollOnTable(treasureHooks);
        whereDidTheyGo = rollOnTable(treasureWhereDidTheyGo);

    }

    const reward = rollOnTable(treasureRewards);


    document.getElementById("starting-location").textContent = startingLocation;
    document.getElementById("treasure-location").textContent = treasureLocation;
    document.getElementById("is-fantastic-starting-location").textContent = isMundaneStart ? "Mundane" : "Fantastic";
    document.getElementById("is-fantastic-treasure-location").textContent = isMundaneTreasure ? "Mundane" : "Fantastic";
    document.getElementById("location-detail").textContent = locationDetail;
    document.getElementById("location-descriptor").textContent = locationDescriptor;
    document.getElementById("directions").textContent = directions;
    document.getElementById("guardian").textContent = guardian;
    document.getElementById("plundered").textContent = plundered;
    document.getElementById("who-was-here").textContent = whoWasHere;
    document.getElementById("they-took").textContent = theyTook;
    document.getElementById("where-did-they-go").textContent = whereDidTheyGo;
    document.getElementById("reward").textContent = reward;

     // Construct the narrative sentence
     let narrative = `The treasure map leads from ${startingLocation}, ${locationDetail}, to ${treasureLocation}. ${directions}.  `;

     if (guardian !== "No Guardian") {
         narrative += `The treasure is guarded by ${guardian}. `;
     } else {
         narrative += `The treasure is unguarded. `;
     }
 
     if (plundered === "Yes") {
         narrative += `The treasure has already been plundered by ${whoWasHere}, who left behind ${theyTook} and went ${whereDidTheyGo}. `;
     } else {
         narrative += `The treasure is untouched and consists of ${reward}. `;
     }
 
     document.getElementById("treasure-story").textContent = narrative;
});



// Hireling Generation
document.getElementById("generate-hireling-button").addEventListener("click", function () {

const settlementSize = Math.floor(Math.random() * settlementSizes.length);
const establishmentType = Math.floor(Math.random() * 6);
const recruitAmount = establishmentRecruits[settlementSize][establishmentType]();

const healthPool = rollDice(1, 4);
const race = getRandomItem(raceList);
const profession = getRandomItem(professionList);
const equipmentPreparedness = getRandomItem(equipmentPreparednessList);
const personalGoal = getRandomItem(personalGoalList);
const secretGoal = getRandomItem(secretGoalList);
const personality = getRandomItem(personalityList);
const loyaltyMorale = getRandomItem(loyaltyMoraleList);

// Roll for physical features *ONCE*
const physicalFeaturesBuildRoll = getRandomItem(physicalFeaturesBuild);
const physicalFeaturesFacialRoll = getRandomItem(physicalFeaturesFacial);
const physicalFeaturesHairRoll = getRandomItem(physicalFeaturesHair);
const physicalFeaturesSkinRoll = getRandomItem(physicalFeaturesSkin);
const physicalFeaturesMovementRoll = getRandomItem(physicalFeaturesMovement);
const physicalFeaturesMarksRoll = getRandomItem(physicalFeaturesMarks);

const oddFeatures = getRandomItem(oddFeaturesList);

document.getElementById("settlement-hireling-availability").textContent = settlementSizes[settlementSize] + ": " + hirelingAvailability[settlementSize];
document.getElementById("recruit-amount").textContent = recruitAmount;
document.getElementById("health-pool").textContent = healthPool;
document.getElementById("race").textContent = race;
document.getElementById("profession").textContent = profession;
document.getElementById("equipment-preparedness").textContent = equipmentPreparedness;
document.getElementById("personal-goal").textContent = personalGoal;
document.getElementById("secret-goal").textContent = secretGoal;
document.getElementById("personality").textContent = personality;
document.getElementById("loyalty-morale").textContent = loyaltyMorale;
document.getElementById("physical-features").innerHTML =  // CHANGED TO innerHTML
    "Build: " + physicalFeaturesBuildRoll + "<br>" +
    "Facial: " + physicalFeaturesFacialRoll + "<br>" +
    "Hair: " + physicalFeaturesHairRoll + "<br>" +
    "Skin: " + physicalFeaturesSkinRoll + "<br>" +
    "Movement: " + physicalFeaturesMovementRoll + "<br>" +
    "Marks: " + physicalFeaturesMarksRoll;
document.getElementById("odd-features").textContent = oddFeatures;

   // Generate the Hireling Summary:
   const summary = `This ${race} is a ${personality} ${profession} with a ${physicalFeaturesBuildRoll} build, a ${physicalFeaturesFacialRoll} face, ${equipmentPreparedness}. Their personal goal is to ${personalGoal}, but their secret goal is to ${secretGoal}. They are ${loyaltyMorale}, and also possess the feature ${oddFeatures}.`;

   document.getElementById("hireling-story").textContent = summary;

});

// Party Bonds Generation
document.getElementById("generate-party-bonds-button").addEventListener("click", function () {
    const charsAreRow = Math.floor(Math.random() * 6);
	const charsAreRow2 = Math.floor(Math.random() * 6);

    const bondRoll = Math.floor(Math.random() * 6);
	const bondRoll2	= Math.floor(Math.random() * 6);
	
    const whoAreRow = Math.floor(Math.random() * 6);
	const whoAreRow2 = Math.floor(Math.random() * 6);
	
    const andBattleRow = Math.floor(Math.random() * 6);
	const andBattleRow2 = Math.floor(Math.random() * 6);
	const andBattleRow3 = Math.floor(Math.random() * 6);
    const whoTryingToRow = Math.floor(Math.random() * 6);

    const charactersAreResult = getRandomItem(charactersAre[charsAreRow]);
	const charactersAreResult2 = getRandomItem(charactersAre[charsAreRow2]);
	

    const boundTogetherByResult = getRandomItem(boundTogetherBy[Math.floor(Math.random() * boundTogetherBy.length)]);
    const boundTogetherByResult2 = getRandomItem(boundTogetherBy[Math.floor(Math.random() * boundTogetherBy.length)]);

    // Build the HTML string with italics
    const charactersAreHTML = `<u>${charactersAreResult}</u> and possibly also <u>${charactersAreResult2}</u>`;
    const charactersAreBoundHTML = `<u>${boundTogetherByResult}</u>  and/or  <u>${boundTogetherByResult2}</u>`;


    document.getElementById("characters-are").innerHTML = charactersAreHTML;
    document.getElementById("bound-together-by").innerHTML = charactersAreBoundHTML;
    document.getElementById("who-are").textContent = getRandomItem(whoAre[whoAreRow]);

 // Underline the battles
 const battle1 = getRandomItem(andBattle[andBattleRow]);
 const battle2 = getRandomItem(andBattle[andBattleRow2]);
 const battle3 = getRandomItem(andBattle[andBattleRow3]);
 const andBattleHTML = `<u>${battle1}</u>, <u>${battle2}</u>, and possibly <u>${battle3}</u>`;

 document.getElementById("and-battle").innerHTML = andBattleHTML;


    document.getElementById("who-are-trying-to").textContent = getRandomItem(whoAreTryingTo[whoTryingToRow]);
});



// Monster Generation
document.getElementById("generate-monster-button").addEventListener("click", function () {
    const type1 = getRandomItem(monsterType);
    let typeResult = type1;
    if (type1 == "Roll Twice Combine") {
        typeResult = getRandomItem(monsterType) + ", " + getRandomItem(monsterType);
    }
    document.getElementById("monster-type").textContent = typeResult;

    document.getElementById("monster-size").textContent = getRandomItem(monsterSize);

    const numberAppearing = getRandomItem(monsterNumberAppearing);
    document.getElementById("monster-number").textContent = numberAppearing;

    const demeanor1 = getRandomItem(monsterDemeanor);
    let demeanorResult = demeanor1;
    if (demeanor1 == "Roll Twice Combine") {
        demeanorResult = getRandomItem(monsterDemeanor) + ", " + getRandomItem(monsterDemeanor);
    }
    document.getElementById("monster-demeanor").textContent = demeanorResult;

    const limbs = getRandomItem(monsterLimbs);
    document.getElementById("monster-limbs").textContent = limbs;

    // Determine the number of appendages to roll based on the 'limbs' selection:
    let numAppendages = 0;
    if (limbs.startsWith("0 or 1")) {
        numAppendages = 1;
    } else if (limbs.startsWith("2")) {
        numAppendages = 2;
    } else if (limbs.startsWith("4")) {
        numAppendages = 4;
    } else if (limbs.startsWith("6")) {
        numAppendages = 6;
    } else if (limbs.startsWith("8")) {
        numAppendages = 8;
    } else { // Variable - Roll Twice
        numAppendages = Math.floor(Math.random() * 6) + 1; // Choose a random number between 1 and 6 for variable
    }

    let appendagesResult = "";
    for (let i = 0; i < numAppendages; i++) {
        appendagesResult += getRandomItem(monsterAppendages) + ", ";
    }
    appendagesResult = appendagesResult.slice(0, -2); // Remove the trailing ", "

    document.getElementById("monster-appendages").textContent = appendagesResult;
    document.getElementById("monster-attack").textContent = getRandomItem(monsterAttackDefense);
    document.getElementById("monster-markings").textContent = getRandomItem(monsterMarkingsColors);
    document.getElementById("monster-oddities").textContent = getRandomItem(monsterOdditiesFeatures);

    // Basic interpretation
    const interpretation = `A ${document.getElementById("monster-size").textContent.split(" - ")[1]} sized, ${document.getElementById("monster-markings").textContent} creature with ${document.getElementById("monster-limbs").textContent.split(" - ")[0]} and ${appendagesResult}. It is ${document.getElementById("monster-demeanor").textContent} and ${numberAppearing}`;
    document.getElementById("monster-interpretation").textContent = interpretation;
});

// Vibe Check Generation
document.getElementById("vibe-check-button").addEventListener("click", function () {
    const vibe = getRandomItem(vibeCheckTable);
    document.getElementById("vibe-check-result").textContent = "Vibe Check: " + vibe;
});

// Path Event Generation
document.getElementById("generate-path-event-button").addEventListener("click", function () {
    const biome = document.getElementById("path-biome-select").value;
    const pathType = document.getElementById("path-type-select").value;

    const selectedData = pathEvents[biome][pathType];
    const selectedEvent = getRandomItem(selectedData);

    document.getElementById("path-event").textContent = selectedEvent.event;
    document.getElementById("path-event-details").textContent = selectedEvent.details;
});

// Loot Generation
document.getElementById("generate-loot-button").addEventListener("click", function () {
    const lootValue = document.getElementById("loot-value-select").value;
    const lootType = document.getElementById("loot-type-select").value;

    const selectedData = lootData[lootValue][lootType];
    const loot = getRandomItem(selectedData);

    document.getElementById("loot-item").textContent = loot.item;
    document.getElementById("loot-details").textContent = loot.details;
});


// Tab Management
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and mark the button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSubTab(evt, tabName) {
    // Get the parent tab's ID (e.g., "Grimwild" or "GrimTools")
    const parentTabId = evt.currentTarget.closest(".tabcontent").id;
    // First find the tab content
    const tabcontent = document.getElementById(parentTabId).getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" inside the tab
    tablinks = document.getElementById(parentTabId).getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the Grimwild tab by default
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablinks").click();
});