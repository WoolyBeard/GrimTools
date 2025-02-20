// ========================= Helper Functions =========================

/**
 * Returns a random item from an array.
 * @param {Array} array - The array to select from.
 * @returns {*} - A randomly selected item from the array.
 */
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Rolls on a table, either executing a function or returning a value.
 * @param {Array} table - The table to roll on. If the first element is a function, treats as an array of functions.
 * @returns {*} - The result of the roll (either the returned value or the function's return value).
 */
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

/**
 * Simulates rolling a dice `quantity` times, with each die having `sides` sides.
 * @param {number} quantity - The number of dice to roll.
 * @param {number} sides - The number of sides on each die.
 * @returns {number} - The total sum of the dice rolls.
 */
function rollDice(quantity, sides) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}




//==========TABLE Generator===========

/**
 * Dynamically generates an HTML table from a given data structure and inserts it into the specified container.
 *
 * @param {string} containerId - The ID of the HTML element where the table should be inserted.
 * @param {string} tableName - The name to display as the table's title.
 * @param {Array<Array<any>> | Array<object>} tableData - The data to display in the table.
 *                                                          Can be an array of arrays (for simple tables)
 *                                                          or an array of objects (where each object represents a row).
 * @param {string[]} columnHeaders - An optional array of strings to use as the table headers.
 *                                    If not provided, the function will attempt to extract headers from the object keys (if the data is an array of objects).
 */
function generateTable(containerId, tableName, tableData, columnHeaders = []) {
    // 1. Basic validation of the input data
    if (!Array.isArray(tableData) || tableData.length === 0) {
        console.warn("generateTable: tableData is not a valid array or is empty.");
        document.getElementById(containerId).innerHTML = "<p>No data to display.</p>";
        return;
    }

    // 2. Determine the table headers
    let headers = columnHeaders;
    if (tableData.length > 0 && typeof tableData[0] === 'object' && columnHeaders.length === 0) {
        // Try to extract headers from the object keys
        headers = Object.keys(tableData[0]);
    }

    // 3. Construct the HTML table string
    let tableHTML = `<h3>${tableName}</h3><table class="data-table"><thead><tr>`;

    // Add table headers
    headers.forEach(header => {
        tableHTML += `<th>${header}</th>`;
    });

    tableHTML += `</tr></thead><tbody>`;

    // Add table rows
    tableData.forEach((row, index) => {
        tableHTML += `<tr>`;
        if (Array.isArray(row)) {
            // Handle array-based data
            row.forEach(cell => {
                tableHTML += `<td>${cell}</td>`;
            });
        } else if (typeof row === 'object') {
            // Handle object-based data
            headers.forEach(header => {
                tableHTML += `<td>${row[header] || ''}</td>`; // Use || '' to avoid displaying "undefined"
            });
        } else {
            console.warn(`generateTable: Invalid row data at index ${index}.`);
            return; // Skip invalid row
        }
        tableHTML += `</tr>`;
    });

    tableHTML += `</tbody></table>`;

    // 4. Insert the table into the specified container
    document.getElementById(containerId).innerHTML = tableHTML;
}


function loadExcalidraw(doc, id){
    var excalidrawAPI, setExcalidrawAPI;

    var options =  {     
           langCode: 'fr-FR',
           ref: (api) => setExcalidrawAPI(api), 
           initialData: {
              libraryItems: libraryFile.libraryItems,   //from a libray file
              elements:   [ someelement ]
           }
        };
             
    const App = () => {

        [excalidrawAPI, setExcalidrawAPI] = React.useState(null);

        return React.createElement( React.Fragment, null,
                      React.createElement( "div", { style: { height: "100vh" }, },
                      React.createElement( ExcalidrawLib.Excalidraw, options ), ),  //put options here
               );
    };  

  const excali = doc.getElementById(id);
  const root   = ReactDOM.createRoot(excali);
        root.render(React.createElement(App));
}

// ========================= Adventure Generation =========================

/**
 * Event listener for the "Generate Adventure" button click. Generates an adventure narrative based on random elements.
 */
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

// ========================= Location Generation =========================

/**
 * Event listener for the "Generate Location" button click. Generates a location based on selected biome and location type.
 */
document.getElementById("generate-location-button").addEventListener("click", function () {
    const biome = document.getElementById("biome-select").value;
    const locationType = document.getElementById("location-type-select").value;

    const selectedData = locationData[biome][locationType];

    document.getElementById("location-name").textContent = getRandomItem(selectedData.names);
    document.getElementById("location-description").textContent = getRandomItem(selectedData.descriptions);
    document.getElementById("location-complication").textContent = getRandomItem(selectedData.complications);
});

// ========================= Trap Generation =========================

/**
 * Event listener for the "Generate Trap" button click. Generates a trap description based on selected trap type.
 */
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

// ========================= Treasure Map Generation =========================

/**
 * Event listener for the "Generate Treasure Map" button click. Generates a treasure map narrative.
 */
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

// ========================= Hireling Generation =========================

/**
 * Event listener for the "Generate Hireling" button click. Generates hireling character details.
 */
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

// ========================= Party Bonds Generation =========================
// Party Bonds Generation
document.getElementById("generate-party-bonds-button").addEventListener("click", function () {
    const charsAreRow = Math.floor(Math.random() * 6);
    const charsAreRow2 = Math.floor(Math.random() * 6);

    const bondRoll = Math.floor(Math.random() * 6);
    const bondRoll2    = Math.floor(Math.random() * 6);

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


    document.getElementById("charactersAre").innerHTML = charactersAreHTML;
    document.getElementById("boundTogetherBy").innerHTML = charactersAreBoundHTML;
    document.getElementById("whoAre").textContent = getRandomItem(whoAre[whoAreRow]);

 // Underline the battles
 const battle1 = getRandomItem(andBattle[andBattleRow]);
 const battle2 = getRandomItem(andBattle[andBattleRow2]);
 const battle3 = getRandomItem(andBattle[andBattleRow3]);
 const andBattleHTML = `<u>${battle1}</u>, <u>${battle2}</u>, and possibly <u>${battle3}</u>`;

 document.getElementById("andBattle").innerHTML = andBattleHTML;


    document.getElementById("whoAreTryingTo").textContent = getRandomItem(whoAreTryingTo[whoTryingToRow]);
});


document.addEventListener("DOMContentLoaded", function () {
    // Set column headers (can be customized)
    const columnHeaders = ["1", "2", "3", "4", "5", "6"];
    const columnHeaders2 = ["1", "2"];

    generateTable("characters-table", "The Characters Are:", charactersAre, columnHeaders);

    generateTable("bound-table", "Bound Together By:", boundTogetherBy, columnHeaders2);

    generateTable("whoare-table", "Who Are They?", whoAre, columnHeaders);

    generateTable("andbattle-table", "They Battle", andBattle, columnHeaders);

    generateTable("whoare", "What Are They Trying to Do?", whoAreTryingTo, columnHeaders);
});


// ========================= Monster Generation =========================

/**
 * Event listener for the "Generate Monster" button click. Generates descriptions of monsters based on various properties.
 */
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

// ========================= Vibe Check Generation =========================

/**
 * Event listener for the "Vibe Check" button click. Generates a random "vibe" or atmosphere.
 */
document.getElementById("vibe-check-button").addEventListener("click", function () {
    const vibe = getRandomItem(vibeCheckTable);
    document.getElementById("vibe-check-result").textContent = "Vibe Check: " + vibe;
});

// ========================= Path Event Generation =========================

/**
 * Event listener for the "Generate Path Event" button click. Generates events that occur along a path based on selected biome and path type.
 */
document.getElementById("generate-path-event-button").addEventListener("click", function () {
    const biome = document.getElementById("path-biome-select").value;
    const pathType = document.getElementById("path-type-select").value;

    const selectedData = pathEvents[biome][pathType];
    const selectedEvent = getRandomItem(selectedData);

    document.getElementById("path-event").textContent = selectedEvent.event;
    document.getElementById("path-event-details").textContent = selectedEvent.details;
});




// ========================= Loot Generation =========================

/**
 * Event listener for the "Generate Loot" button click. Generates loot items and details based on selected value and type.
 */
document.getElementById("generate-loot-button").addEventListener("click", function () {
    console.log("Generate Loot button clicked!"); // Added log to confirm button click

    // 1. Get the selected values from the dropdown menus:
    const lootValue = document.getElementById("loot-value-select").value; // "minor", "major", or "mythic"
    const lootType = document.getElementById("loot-type-select").value;   // "tangibles", "intangibles", or "magic"

    console.log("Selected lootValue:", lootValue); // Log the selected value
    console.log("Selected lootType:", lootType);   // Log the selected type

    // 2. Access the correct nested array in the lootData object:
    const selectedData = lootData[lootValue][lootType];

    console.log("selectedData:", selectedData);   // Log the selected data array

    // 3. Check if selectedData exists and is an array:
    if (selectedData && Array.isArray(selectedData)) {
        // 4. Get a random loot item from the selected array:
        const loot = getRandomItem(selectedData);

        console.log("Randomly selected loot:", loot);   // Log the selected loot object

        // 5. Check if loot exists and has item and details properties:
        if (loot && typeof loot === 'object' && loot.item && loot.details) {
            // 6. Set the text content of the corresponding HTML elements:
            document.getElementById("loot-item").textContent = loot.item;
            document.getElementById("loot-details").textContent = loot.details;

            console.log("Successfully populated loot item and details!"); // Log success
        } else {
            console.warn("loot object is missing 'item' or 'details' properties, or is not an object.");  // Log warning
            document.getElementById("loot-item").textContent = "Error: Missing Data";
            document.getElementById("loot-details").textContent = "Error: Missing Data";
        }
    } else {
        console.warn("selectedData is not a valid array. Check lootValue and lootType."); // Log warning
        document.getElementById("loot-item").textContent = "Error: Invalid Selection";
        document.getElementById("loot-details").textContent = "Error: Invalid Selection";
    }
});

// ========================= GMTable Code =========================

document.getElementById("generate-tableMash-button").addEventListener("click", function () {
    const tableRowOne = Math.floor(Math.random() * 6);
    const tableRowTwo = Math.floor(Math.random() * 6);

    const itemOne = getRandomItem(FirstTables[tableRowOne]);
    const itemTwo = getRandomItem(SecondTables[tableRowTwo]);

    document.getElementById("GMtableOne").textContent = itemOne;
    document.getElementById("GMtableTwo").textContent = itemTwo;

});


document.addEventListener("DOMContentLoaded", function () {
    // Set column headers (can be customized)
    const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    // Generate table for heritageAreas
    generateTable("First-table-container", "First", FirstTables, columnHeaders);

    // Generate table for heritageDescriptors
    generateTable("Second-table-container", "Second", SecondTables, columnHeaders);
});



//======================    Seasons Tab    ==================================================


document.getElementById("GenerateSeasons").addEventListener("click", function() {
    // Roll on tables and combine
    const spring = rollOnTable(SeasonSpringPrefix) + " " + rollOnTable(SeasonSpringSuffix);
    const summer = rollOnTable(SeasonSummerPrefix) + " " + rollOnTable(SeasonSummerSuffix);
    const fall = rollOnTable(SeasonFallSuffix) + " " + rollOnTable(SeasonFallSuffix);
    const winter = rollOnTable(SeasonWinterPrefix) + " " + rollOnTable(SeasonWinterPrefix);
    


    // Update HTML
    document.getElementById("spring").textContent = spring;
    document.getElementById("summer").textContent = summer;
    document.getElementById("fall").textContent = fall;
    document.getElementById("winter").textContent = winter;
    
});


document.addEventListener("DOMContentLoaded", function() {

    // Set column headers (can be customized)
    const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    
// Generate table for SpringPrefix
generateTable("springprefix-table-container", "Spring Prefix", [SeasonSpringPrefix], columnHeaders);

// Generate table for SpringSuffix
generateTable("springsuffix-table-container", "Spring Suffix", [SeasonSpringSuffix], columnHeaders);

// Generate table for SummerPrefix
generateTable("summerprefix-table-container", "Summer Prefix", [SeasonSummerPrefix], columnHeaders);

// Generate table for SummerSuffix
generateTable("summersuffix-table-container", "Summer Suffix", [SeasonSummerSuffix], columnHeaders);

// Generate table for FallPrefix
generateTable("fallprefix-table-container", "Fall Prefix", [SeasonFallPrefix], columnHeaders);

// Generate table for FallSuffix
generateTable("fallsuffix-table-container", "Fall Suffix", [SeasonFallSuffix], columnHeaders);

// Generate table for WinterPrefix
generateTable("winterprefix-table-container", "Winter Prefix", [SeasonWinterPrefix], columnHeaders);

// Generate table for WinterSuffix
generateTable("wintersuffix-table-container", "Winter Suffix", [SeasonWinterSuffix], columnHeaders);

});




//======================    Exploration Tab    ==================================================


   

    document.getElementById("GenerateExploration").addEventListener("click", function() {
        // Roll on tables and combine
        const building = rollOnTable(Building1) + " " + rollOnTable(Building2);
        const settlement = rollOnTable(Settlement1) + " " + rollOnTable(Settlement2);
        const sites = rollOnTable(Sites1) + " " + rollOnTable(Sites2);
        const dangers = rollOnTable(Dangers1) + " " + rollOnTable(Dangers2);
        const curiosities = rollOnTable(Curiosities1) + " " + rollOnTable(Curiosities2);
        const barriers = rollOnTable(Barriers1) + " " + rollOnTable(Barriers2);
        const factions = rollOnTable(Factions1) + " " + rollOnTable(Factions2);





        // Update HTML
        document.getElementById("building").textContent = building;
        document.getElementById("settlement").textContent = settlement;
        document.getElementById("sites").textContent = sites;
        document.getElementById("dangers").textContent = dangers;
        document.getElementById("curiosities").textContent = curiosities;
        document.getElementById("barriers").textContent = barriers;
        document.getElementById("factions").textContent = factions;
    });


document.addEventListener("DOMContentLoaded", function() {

        // Set column headers (can be customized)
        const columnHeaders = ["1", "2", "3", "4", "5", "6"];

        
    // Generate table for Building1
    generateTable("building1-table-container", "Building1", Building11, columnHeaders);

    // Generate table for Building2
    generateTable("building2-table-container", "Building2", Building22, columnHeaders);

    // Generate table for Settlement1
    generateTable("settlement1-table-container", "Settlement1", Settlement11, columnHeaders);

    // Generate table for Settlement2
    generateTable("settlement2-table-container", "Settlement2", Settlement22, columnHeaders);

    // Generate table for Sites1
    generateTable("sites1-table-container", "Sites1", Sites11, columnHeaders);

    // Generate table for Sites2
    generateTable("sites2table-table-container", "Sites2", Sites22, columnHeaders);

    // Generate table for Dangers1
    generateTable("dangers1-table-container", "Dangers1", Dangers11, columnHeaders);

    // Generate table for Dangers2
    generateTable("dangers2-table-container", "Dangers2", Dangers22, columnHeaders);

    // Generate table for Curiosities1
    generateTable("curiosities1-table-container", "Curiosities1", Curiosities11, columnHeaders);

    // Generate table for Curiosities2
    generateTable("curiosities2-table-container", "Curiosities2", Curiosities22, columnHeaders);

    // Generate table for Barriers1
    generateTable("barriers1-table-container", "Barriers1", Barriers11, columnHeaders);

    // Generate table for Barriers2
    generateTable("barriers2-table-container", "Barriers2", Barriers22, columnHeaders);

    // Generate table for Factions1
    generateTable("factions1-table-container", "Factions1", Factions11, columnHeaders);

    // Generate table for Factions2
    generateTable("factions2-table-container", "Factions2", Factions22, columnHeaders);
});
















// ========================= Player Heritage Code =========================
document.getElementById("generate-heritage-button").addEventListener("click", function () {
    const area = getRandomItem(heritageAreas[Math.floor(Math.random() * heritageAreas.length)]);
    const descriptor = getRandomItem(heritageDescriptors[Math.floor(Math.random() * heritageDescriptors.length)]);
    const denizen = getRandomItem(heritageDenizens[Math.floor(Math.random() * heritageDenizens.length)]);

    document.getElementById("heritageArea").textContent = area;
    document.getElementById("heritageDescriptor").textContent = descriptor;
    document.getElementById("heritageDenizen").textContent = denizen;
});


document.addEventListener("DOMContentLoaded", function () {
    // Set column headers (can be customized)
    const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    // Generate table for heritageAreas
    generateTable("heritage-areas-table-container", "Heritage Areas", heritageAreas, columnHeaders);

    // Generate table for heritageDescriptors
    generateTable("heritage-descriptors-table-container", "Heritage Descriptors", heritageDescriptors, columnHeaders);

    // Generate table for heritageDenizens
    generateTable("heritageDenizens-table-container", "Heritage Denizens", heritageDenizens, columnHeaders);
});



// ========================= Class Code Starts Here =========================


// ========================= Bard Crucibles =========================

  
  document.addEventListener("DOMContentLoaded", function () {
    // Roller Button Event Listener
    document.getElementById("generate-bard-performance").addEventListener("click", function () {
      const style = getRandomItem(bardStyles);
      const tune = getRandomItem(bardTunes);
      const impact = getRandomItem(bardImpacts);
      const instrument = getRandomItem(bardInstruments); // NEW
  
      // Generate the Narrative
      const narrative = generateBardNarrative(style, tune, impact);
  
      // Update the results display
      document.getElementById("bard-style").textContent = style;
      document.getElementById("bard-tune").textContent = tune;
      document.getElementById("bard-impact").textContent = impact;
      document.getElementById("bard-narrative").textContent = narrative; // Added Narrative
      document.getElementById("bard-instrument").textContent = instrument; // NEW
    });
  
  
      /**
       * Returns a random item from an array.
       * @param {Array} array - The array to select from.
       * @returns {*} - A randomly selected item from the array.
       */
      function getRandomItem(array) {
          return array[Math.floor(Math.random() * array.length)];
      }
  
    // Narrative Generation Function
    function generateBardNarrative(style, tune, impact) {
      let narrative = "";
  
      switch (`${style} ${tune} of ${impact}`) {
        case "haunting requiem of fear":
          narrative = "The villagers abandon their homes, terrified of shadows that aren't there.";
          break;
        case "playful ballad of joy":
          narrative = "A tense negotiation dissolves into laughter, everyone suddenly sharing joyful stories.";
          break;
        case "whimsical serenade of wonder":
          narrative = "The towering golem halts, transfixed by the sudden beauty of a flower.";
          break;
        case "dire chant of despair":
          narrative = "The dragon, mid-flight, veers away in terror, retreating to its lair in panic.";
          break;
        case "fiery anthem of fury":
          narrative = "A normally docile treant uproots itself, thrashing wildly, lashing out at all nearby.";
          break;
        case "nostalgic ode of hope":
          narrative = "War-weary soldiers rally, tears flowing, as they march against impossible odds.";
          break;
        case "chaotic hymn of mockery":
          narrative = "The proud king stumbles, embarrassed, as the crowd laughs uncontrollably.";
          break;
        case "rousing rhapsody of affection":
          narrative = "The rampaging dire wolf stops and nuzzles someone nearby, tail wagging.";
          break;
        case "gentle anthem of calm":
          narrative = "The hydra lowers its heads, each one slowly settling into peaceful slumber.";
          break;
        case "vicious ditty of fury":
          narrative = "A tavern erupts in wanton destruction, patrons consumed by primal rage.";
          break;
        default:
          narrative = `A ${style} ${tune} of ${impact}. (Generic Result)`;
          break;
      }
  
      return narrative;
    }
  });
  
  // Table Generation
  
  document.addEventListener("DOMContentLoaded", function () {
    // Set column headers (can be customized)
    const columnHeaders = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const columnHeadersIns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24"];  
    // Generate table for Styles
    generateTable("bard-styles-table-container", "Styles", [bardStyles], columnHeaders);
  
    // Generate table for Tunes
    generateTable("bard-tunes-table-container", "Tunes", [bardTunes], columnHeaders);
  
    // Generate table for Impacts
    generateTable("bard-impacts-table-container", "Impacts", [bardImpacts], columnHeaders);

    // Generate table for Instruments
    generateTable("bard-instruments-table-container", "Instruments", [bardInstruments], columnHeadersIns);

  });


// ========================= Berserker Crucibles =========================
  
   
  
    /**
     * Populates the Berserker sheet when the button is clicked.
     */
    document.getElementById("generate-berserker").addEventListener("click", function() {
      const frenzySource = rollOnTable(frenzySources) + " and/or " + rollOnTable(frenzySources) ;
      const scarsResult = rollOnTable(scars)+ " and/or " + rollOnTable(scars) ;
  
      document.getElementById("berserker-frenzy-source").textContent = frenzySource;
      document.getElementById("berserker-scars").textContent = scarsResult;
    });
  
    document.addEventListener("DOMContentLoaded", function() {

        const columnHeaders1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        const columnHeaders2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    generateTable("frenzy-sources-table-container", "Frenzy Sources", [frenzySources], columnHeaders1);
    generateTable("scars-table-container", "Scars", [scars], columnHeaders2);
  });




// ========================= Cleric Crucibles =========================
  
    document.getElementById("generate-cleric").addEventListener("click", function() {
        const DietyName = rollOnTable(godNames) ;
        const DietyDisposition = rollOnTable(godDispositions);
        const DietyDomain = rollOnTable(godDomains) ;
        const DietyNarrative = "Your gods name is " + DietyName + " They have a " + DietyDisposition + " disposition, they reside over the " + DietyDomain + " domain ";

        document.getElementById("diety-Name").textContent = DietyName;
        document.getElementById("diety-Disposition").textContent = DietyDisposition;
        document.getElementById("diety-Domain").textContent = DietyDomain;
        document.getElementById("diety-Narrative").textContent = DietyNarrative;
    });

    document.addEventListener("DOMContentLoaded", function() {
        const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    generateTable("druid-tells1", "Druid Tells", DruidTells2, columnHeaders);
    generateTable("druid-herb1", "Druid Herb Prefix", TalentHerbalism11, columnHeaders);
    generateTable("druid-herb2", "Druid Herb Suffix", TalentHerbalism22, columnHeaders);
 

    });


// ========================= Druid Crucibles =========================

document.getElementById("generate-druid").addEventListener("click", function() {
    const tells = rollOnTable(DruidTells) ;
    const herb1 = rollOnTable(TalentHerbalism1);
    const herb2 = rollOnTable(TalentHerbalism2);

    const herbName = herb1 + herb2;

    document.getElementById("druid-tells").textContent = tells;
    document.getElementById("druid-herb").textContent = herbName;
 

    


});

// ========================= Fighter Crucibles =========================

document.getElementById("generate-fighter").addEventListener("click", function() {
    const originOne = rollOnTable(FighterWeaponOrigin);
    const originTwo = rollOnTable(FighterWeaponOrigin);

    const origin12Combo = `This weapon is both ${originOne.toLowerCase()} and ${originTwo.toLowerCase()}.`;

    document.getElementById("origin1").textContent = originOne;
    document.getElementById("origin2").textContent = originTwo;
    document.getElementById("origin-combo").textContent = origin12Combo;

});
    document.addEventListener("DOMContentLoaded", function() {
        const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    generateTable("origin-table", "Fighter Weapon Origin", FighterWeaponOriginMulti, columnHeaders);

});



// ========================= Monk Crucibles =========================

document.getElementById("generate-monk").addEventListener("click", function() {
    const concept1 = rollOnTable(MonkStyleConcept2);
    const concept2 = rollOnTable(MonkStyleConcept2);
    const style1 = rollOnTable(MonkStyleMoves);
    const style2 = rollOnTable(MonkStyleMoves);
    const style3 = rollOnTable(MonkStyleMoves);
    const weapon1 = rollOnTable(MonkStyleWeapons);
    const weapon2 = rollOnTable(MonkStyleWeapons);

    const ConceptCombo = `This martial arts style is bassed on the concept of ${concept1.toLowerCase()} and/or ${concept2.toLowerCase()}.`;
    const StyleCombo = `It feature stances and moves like: ${style1.toLowerCase()} , ${style2.toLowerCase()}  and ${style3.toLowerCase()}.`;
    const WeaponCombo = `It often makes use of weapons like: ${weapon1.toLowerCase()} or ${weapon2.toLowerCase()}.`;

    document.getElementById("concept").textContent = ConceptCombo;
    document.getElementById("stances").textContent = StyleCombo;
    document.getElementById("weapons").textContent = WeaponCombo;

});
    document.addEventListener("DOMContentLoaded", function() {
        const columnHeaders = ["1", "2", "3", "4", "5", "6"];

    generateTable("concept-table", "Concept", MonkStyleConceptNA, columnHeaders);
    generateTable("stances-table", "Stances", MonkStyleMovesNA, columnHeaders);
    generateTable("weapon-table", "Weapons", MonkStyleWeaponsNA, columnHeaders);


});



// ========================= Paladin Crucibles =========================


document.getElementById("generate-paladin").addEventListener("click", function() {
    const bring = rollOnTable(PaladinTenetBring);
    const forThe = rollOnTable(PaladinTenetForThe);
    const because = rollOnTable(PaladinTenetBecause); // Access the first sub-array

    const tenetStatement = `I will bring ${bring.toLowerCase()} for the ${forThe.toLowerCase()} because of ${because.toLowerCase()}....`;

    document.getElementById("tenet-bring").textContent = `${bring}`;
    document.getElementById("tenet-forthe").textContent = `${forThe}`;
    document.getElementById("tenet-because").textContent = `${because}`; // Display selected "because" value

    document.getElementById("tenet-combo").textContent = `${tenetStatement}`; 


});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers

    generateTable("bring-table", "Bring", PaladinTenetBringNA, columnHeaders);
    generateTable("forthe-table", "For The", PaladinTenetForTheNA, columnHeaders);
    generateTable("because-table", "Because", [PaladinTenetBecause], columnHeaders);

});


// ========================= Ranger Crucibles =========================


document.getElementById("generate-ranger").addEventListener("click", function() {
    const trapEffect = rollOnTable(RangerTrap1);
    const trapTrigger = rollOnTable(RangerTrap2);

    const trapDescription = `A ${trapEffect.toLowerCase()} trap triggered by a ${trapTrigger.toLowerCase()}.`;

    document.getElementById("trap-effect").textContent = `Effect: ${trapEffect}`;
    document.getElementById("trap-trigger").textContent = `Trigger: ${trapTrigger}`;

});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers

    generateTable("effect-table", "Effects", [RangerTrap1], columnHeaders);
    generateTable("trigger-table", "Trigger", [RangerTrap2], columnHeaders);


});


// ========================= Rogue Crucibles =========================



document.getElementById("generate-rogue").addEventListener("click", function() {
    const crimeSeverity = rollOnTable(RogueCrimeSeverity);
    const crimeNature = rollOnTable(RogueCrimeNature);
    const crimeReputation = rollOnTable(RogueCrimeReputation);


    document.getElementById("crime-severity").textContent = `Severity: ${crimeSeverity}`;
    document.getElementById("crime-nature").textContent = `Nature: ${crimeNature}`;
    document.getElementById("crime-reputation").textContent = `Reputation: ${crimeReputation}`;
});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers

    generateTable("severity-table", "Crime Severity", [RogueCrimeSeverityNA], columnHeaders);
    generateTable("nature-table", "Crime Nature", RogueCrimeNatureNA, columnHeaders);
    generateTable("reputation-table", "Crime Reputation", [RogueCrimeReputationNA], columnHeaders);
});


// ========================= Sorcerer Crucibles =========================

document.getElementById("generate-wild-surge").addEventListener("click", function() {
    const surgeEffect1 = rollOnTable(SorcerorWildSurge1);
    const surgeEffect2 = rollOnTable(SorcerorWildSurge2);

   // const surgeDescription = `A wild surge causes a sudden ${surgeEffect1.toLowerCase()} as ${surgeEffect2.toLowerCase()}.`;

    document.getElementById("surge-effect1").textContent = ` ${surgeEffect1}`;
    document.getElementById("surge-effect2").textContent = ` ${surgeEffect2}`;
});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers

    generateTable("surge1-table", "Surge Effect 1", SorcerorWildSurge1NA, columnHeaders);
    generateTable("surge2-table", "Surge Effect 2", SorcerorWildSurge2NA, columnHeaders);
});

// ========================= Warlock Crucibles =========================


document.getElementById("generate-warlock-patron").addEventListener("click", function() {
    const patronNature = rollOnTable(WarlockPatronNature);
    const patronDesire = rollOnTable(WarlockPatronDesire);

   // const patronDescription = `This Warlock's Patron is an entity of ${patronNature.toLowerCase()}, driven by a desire for ${patronDesire.toLowerCase()}.`;

    document.getElementById("patron-nature").textContent = `Nature: ${patronNature}`;
    document.getElementById("patron-desire").textContent = `Desire: ${patronDesire}`;
});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers

    generateTable("desire-table", "Patron Desire", WarlockPatronDesireNA, columnHeaders);

    generateTable("nature2-table", "Patron Nature", WarlockPatronNatureNA, columnHeaders);

});


// ========================= Wizard Crucibles =========================


document.getElementById("generate-wizard-spell").addEventListener("click", function() {
    const spellStyle = rollOnTable(WizardSpellStyle);
    const spellEssence = rollOnTable(WizardSpellEssence);
    const spellForm = rollOnTable(WizardSpellForm);
    const spellSchool = rollOnTable(WizardSpellSchool);

   // const spellDescription = `This spell manifests as a ${spellStyle.toLowerCase()} ${spellForm.toLowerCase()} of ${spellEssence.toLowerCase()}. It is of the school of ${spellSchool.toLowerCase()}.`;

    document.getElementById("spell-style").textContent = ` ${spellStyle}`;
    document.getElementById("spell-essence").textContent = ` ${spellEssence}`;
    document.getElementById("spell-form").textContent = ` ${spellForm}`;
    document.getElementById("spell-school").textContent = ` ${spellSchool}`;

});

document.addEventListener("DOMContentLoaded", function() {
    const columnHeaders = ["1", "2", "3", "4", "5", "6"]; // Define column headers
    const columnHeadersSchool = ["Abjuration","Conjuration","Divination","Enchantment","Evocation","Illusion","Necromancy","Transmutation"] // for the spell school cause there is only one entry per array.

    generateTable("style-table", "Spell Style", WizardSpellStyleNA, columnHeaders);
    generateTable("essence-table", "Spell Essence", WizardSpellEssenceNA, columnHeaders);
    generateTable("form-table", "Spell Form", WizardSpellFormNA, columnHeaders);
    generateTable("school-table", "Spell School", WizardSpellSchoolNA, columnHeadersSchool);


});

  // ========================= Utilities Start Here ==================================================================================================================================================================


//=====new roller   =========================

document.addEventListener("DOMContentLoaded", function () {
    let numD6 = 0;
    let numD8 = 0;

    // Function to update dice counts in the UI
    function updateDiceCounts() {
        document.getElementById("num-d6").textContent = numD6;
        document.getElementById("num-d8").textContent = numD8;
    }

    // d6 Controls
    document.getElementById("add-d6").addEventListener("click", function () {
        numD6++;
        updateDiceCounts();
    });

    document.getElementById("remove-d6").addEventListener("click", function () {
        if (numD6 > 0) {
            numD6--;
            updateDiceCounts();
        }
    });

    // d8 Controls
    document.getElementById("add-d8").addEventListener("click", function () {
        numD8++;
        updateDiceCounts();
    });

    document.getElementById("remove-d8").addEventListener("click", function () {
        if (numD8 > 0) {
            numD8--;
            updateDiceCounts();
        }
    });

    // Roll Button
    document.getElementById("roll-dice").addEventListener("click", function () {
        let results = [];
        let total = 0;
        let perfectD6 = 0;
        let messyD6 = 0;
        let grimD6 = 0;
        let disasterD6 = 0;
        let numThorns = 0;
        let crit = false; // Check if two 6's are rolled

        // Roll d6s
        for (let i = 0; i < numD6; i++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            results.push(`d6: ${roll}`);
            total += roll;

            if (roll === 6) {
                perfectD6++;
            } else if (roll >= 4) {
                messyD6++;
            } else {
                grimD6++;
            }
        }

        //Crit Check
        if (perfectD6 >= 2) {
            crit = true;
        }

        // Roll d8s (Thorns)
        for (let i = 0; i < numD8; i++) {
            const roll = Math.floor(Math.random() * 8) + 1;
            results.push(`d8: ${roll}`);
            total += roll;
            // Each 7 or 8 on a thorn cuts a roll’s outcome by one step (messy→grim).
            if (roll >= 7) {
                numThorns++;
            }
        }

        // Determine the initial outcome based on D6s
        let outcome = "Grim"; // Default
        if (crit) {
            outcome = "Crit"; // Set to "Crit" if two 6's are rolled
        } else if (perfectD6 > 0) {
            outcome = "Perfect";
        } else if (messyD6 > 0) {
            outcome = "Messy";
        }


        // Function to apply color codes and the string
        function applyColorCode(outcome) {
            let color = "";
            let bold = false; // is bolded
            switch (outcome) {
                case "Crit":
                    color = "gold";
                    break;
                case "Perfect":
                    color = "green";
                    break;
                case "Messy":
                    color = "darkgoldenrod";
                    break;
                case "Grim":
                    color = "red";
                    break;
                case "Disaster":
                    color = "darkred"; //Disaster text change
                    bold = true; // disaster text bold
                    break;
                default:
                    color = "black"; //Or your preferred "normal" color
                    break;
            }
            if (bold) {
                return `<span style="color: ${color}; font-weight: bold">${outcome}</span>`; // make disaster bold
            } else {
                return `<span style="color: ${color}">${outcome}</span>`;
            }
        }

        //Thorn Calculation
        let thornEffect = ""; //String to store what happened.
        let initialOutcome = outcome; // to show the base number

        for (let i = 0; i < numThorns; i++) {
            if (outcome === "Messy") {
                outcome = "Grim";
                thornEffect += " (Messy -> Grim)";
            } else if (outcome === "Perfect") {
                outcome = "Messy"; //Or Grim you can choose.
                thornEffect += " (Perfect -> Messy)";
            } else if (outcome === "Grim") {
                outcome = "Disaster";
                thornEffect += " (Grim -> Disaster)";
            }
        }

        // Appy colors
        const initialOutcomeColored = applyColorCode(initialOutcome);
        const finalOutcomeColored = applyColorCode(outcome);

        // Display Results
        document.getElementById("dice-results").textContent = results.join(", ");
        //Display total is here.
        const totalDice = numD6 + numD8; // This now measures the amount of dice
        let outcomeString = `Initial Outcome: ${initialOutcomeColored}`;
        if (thornEffect) {
            outcomeString += `, Thorn Effect: ${finalOutcomeColored} ${thornEffect}`
        }
        document.getElementById("dice-total").innerHTML = `Number of dice: ${totalDice},  ${outcomeString}`;
    });

    // Initialize dice counts (optional, but good practice)
    updateDiceCounts();
});


// ========================= Excalidraw utility =========================

/**
 * Loads the code so users can play Excalidraw within the window.
 */
function loadExcalidraw(doc, id) {
    var excalidrawAPI, setExcalidrawAPI;

    var options = {
        langCode: 'En',
        ref: (api) => setExcalidrawAPI(api),
        initialData: {
            libraryItems: [],   //from a libray file
        }
    };

    const App = () => {

        [excalidrawAPI, setExcalidrawAPI] = React.useState(null);

        return React.createElement(React.Fragment, null,
            React.createElement("div", {
                    style: {
                        height: "100vh"
                    },
                },
                React.createElement(ExcalidrawLib.Excalidraw, options), ), //put options here
        );
    };

    const excali = document.getElementById(id);
    const root = ReactDOM.createRoot(excali);
    root.render(React.createElement(App));
}

document.addEventListener("DOMContentLoaded", function () {
    // Load at start
            loadExcalidraw(document, "excali");
    });


// ========================= Pool utility =========================


/**
 * Manages diminishing pools of d6 dice for tracking resources, time, or effort.
 */

document.addEventListener("DOMContentLoaded", function () {
    const poolListContainer = document.getElementById("pool-list");
    const createPoolButton = document.getElementById("create-pool");
    const poolStatusContainer = document.getElementById("pool-status");

    // New: Export/Import Buttons
    const exportPoolsButton = document.getElementById("export-pools");
    const importPoolsButton = document.getElementById("import-pools");
    const importFileElement = document.getElementById("import-file");
    

    let pools = {};

    function createPool() {
        const poolNameInput = document.getElementById("new-pool-name");
        const poolSizeSelect = document.getElementById("new-pool-size");

        const poolName = poolNameInput.value.trim();
        const poolSize = parseInt(poolSizeSelect.value);

        if (!poolName) {
            displayStatus("Please enter a pool name.", "error");
            return;
        }

        if (isNaN(poolSize) || poolSize <= 0) {
            displayStatus("Please select a valid pool size.", "error");
            return;
        }

        if (pools[poolName]) {
            displayStatus("Pool with this name already exists.", "error");
            return;
        }

        const newPool = {
            name: poolName,
            size: poolSize,
            dice: Array(poolSize).fill(6),
        };

        pools[poolName] = newPool;
        renderPool(newPool);

        poolNameInput.value = "";
        clearStatus();
    }


    function renderPool(pool) {
        const table = document.createElement("table");
        table.classList.add("pool-table");
        table.dataset.poolName = pool.name;

        // Create a header row for buttons and pool name
        const headerRow = table.createTHead().insertRow();
        const buttonCell = headerRow.insertCell();

         // Container for buttons
         const buttonContainer = document.createElement("div");
         buttonContainer.classList.add("button-container");

        // Create Roll & Reduce button
        const rollButton = document.createElement("button");
        rollButton.textContent = "Roll & Reduce";
        rollButton.addEventListener("click", () => rollAndReducePool(pool.name));
        buttonContainer.appendChild(rollButton);

        // Create Delete Pool button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Pool";
        deleteButton.addEventListener("click", () => deletePool(pool.name));
        buttonContainer.appendChild(deleteButton);

        //Appending button container to the button cell.
        buttonCell.appendChild(buttonContainer)

        // Create name cell
        const nameCell = headerRow.insertCell();
        nameCell.textContent = pool.name;
        nameCell.classList.add("pool-name");

        // Table Body - Dice values
        const body = table.createTBody();
        const diceRow = body.insertRow();

        for (let i = 0; i < pool.size; i++) {
            const dieCell = diceRow.insertCell();
            dieCell.textContent = pool.dice[i];
        }

        // Append the table to the container
        poolListContainer.appendChild(table);
    }

    function deletePool(poolName) {
        if (confirm(`Are you sure you want to delete the pool "${poolName}"?`)) {
            delete pools[poolName];

            const tableToRemove = document.querySelector(`.pool-table[data-pool-name="${poolName}"]`);
            if (tableToRemove) {
                poolListContainer.removeChild(tableToRemove);
            }
            clearStatus();
        }
    }

    /**
 * Rolls the dice in a pool, highlights dice to be removed, waits, then reduces the pool and updates the UI.
 * @param {string} poolName - The name of the pool to roll and reduce.
 */
function rollAndReducePool(poolName) {
    const pool = pools[poolName];

    if (!pool) {
        displayStatus(`Pool "${poolName}" not found.`, "error");
        return;
    }

    const rolls = [];
    const rolledDice = [];
    const diceIndicesToRemove = []; // Store indices of dice to remove

    // Roll the dice and determine which dice to remove
    for (let i = 0; i < pool.size; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);

        const dieData = {
            roll: roll,
            remove: roll <= 3, // Mark for removal if roll <= 3
            index: i // Store the index of the die
        };

        rolledDice.push(dieData);

        if (dieData.remove) {
            diceIndicesToRemove.push(i); // Store index for later removal
        }
    }

    // Update the UI to show the initial rolls and highlight the ones to be removed
    updatePoolDisplay(poolName, rolledDice);

    // Wait before removing the dice from the data and updating UI again
    setTimeout(() => {
        // Remove dice from the original pool.dice array based on indices
        const remainingDice = pool.dice.filter((_, index) => !diceIndicesToRemove.includes(index));
        pool.dice = remainingDice;
        pool.size = remainingDice.length;

        // Prepare updated rolledDice array for the UI
        const updatedRolledDice = pool.dice.map((diceValue, index) => ({
            roll: diceValue,
            remove: false, // Reset remove status
            index: index
        }));

        // Update the UI again to show the reduced pool
        updatePoolDisplay(poolName, updatedRolledDice);

        if (pool.size === 0) {
            displayStatus(`Pool "${poolName}" is depleted!`, "depleted");
        }
    }, 1000); // Adjust the delay (in milliseconds) as needed
}

/**
 * Updates the displayed dice values in the pool's table after a roll.
 * @param {string} poolName - The name of the pool to update.
 * @param {object[]} rolledDice - An array of objects, each containing the roll result, removal status, and original index.
 */
function updatePoolDisplay(poolName, rolledDice) {
    const table = document.querySelector(`.pool-table[data-pool-name="${poolName}"]`);

    if (!table) {
        console.error(`Table for pool "${poolName}" not found.`);
        return;
    }

    const diceRow = table.querySelector("tbody tr");
    diceRow.innerHTML = ""; // Clear existing dice

    // Re-populate the dice based on the information in rolledDice array
    for (let i = 0; i < rolledDice.length; i++) {
        const dieData = rolledDice[i];
        const dieCell = diceRow.insertCell();

        dieCell.textContent = dieData.roll;

        if (dieData.remove) {
            dieCell.classList.add("removed-die");
        }
    }
}

    function displayStatus(message, type) {
        poolStatusContainer.textContent = message;
        poolStatusContainer.className = "pool-status";
        poolStatusContainer.classList.add(type);
    }

    function clearStatus() {
        poolStatusContainer.textContent = "";
        poolStatusContainer.className = "pool-status";
    }


 /**
     * Exports the current pools to a JSON file.
     */
 function exportPools() {
    const dataStr = JSON.stringify(pools);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileName = 'Grimtool_Pools_Data.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
}

/**
 * Imports pools from a JSON file.
 */
function importPools() {
    importFileElement.click(); // Trigger file selection dialog
}

/**
 * Handles the file selection and import process.
 * @param {Event} event - The file input change event.
 */
function handleFileImport(event) {
    const file = event.target.files[0];

    if (!file) {
        displayStatus("No file selected.", "error");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedPools = JSON.parse(e.target.result);

            // Validate and import the pools
            if (typeof importedPools === 'object' && importedPools !== null) {
                pools = importedPools; // Replace existing pools
                renderAllPools();       // Re-render all pools
                displayStatus("Pools imported successfully!", "success");
            } else {
                displayStatus("Invalid file format.", "error");
            }
        } catch (error) {
            displayStatus("Error parsing file.", "error");
        }
    };

    reader.onerror = function () {
        displayStatus("Error reading file.", "error");
    };

    reader.readAsText(file);
    event.target.value = null;  // Clear the input to allow re-importing the same file
}

/**
 * Renders all the pools.
 */
function renderAllPools() {
    poolListContainer.innerHTML = ''; // Clear existing pools
    for (const poolName in pools) {
        if (pools.hasOwnProperty(poolName)) {
            renderPool(pools[poolName]);
        }
    }
}

// Event Listeners
createPoolButton.addEventListener("click", createPool);
exportPoolsButton.addEventListener("click", exportPools);
importPoolsButton.addEventListener("click", importPools);
importFileElement.addEventListener("change", handleFileImport);

});




//========================== Character/Notes Keeper  =======================================================================================================


const classSelect = document.getElementById("class-select");
const addCharacterInstanceButton = document.getElementById("add-character-instance");
const characterInstancesContainer = document.getElementById("character-instances");
const sheetUrlPrompt = document.getElementById("sheet-url-prompt");
const sheetUrlInput = document.getElementById("sheet-url");
const saveCharacterDataButton = document.getElementById("save-character-data");
const importCharacterDataButton = document.getElementById("import-character-data");
const importFileCharacterElement = document.getElementById("import-file-character");
const characterNameInput = document.getElementById("character-name");

let characterData = {
    instances: {} // Object to store character instances and their data
};

let currentId = 0;

// Function to generate the tab panel for a character
function generateSheetContainer(sheetData) {
    const tabPanel = document.createElement('div');
    tabPanel.id = sheetData.id;
    tabPanel.classList.add('character-tab-panel');

    // Create a container for the embed
    const sheetEmbedContainer = document.createElement('div');
    sheetEmbedContainer.classList.add('sheet-embed-container');

    const iframe = document.createElement('iframe');
    iframe.src = sheetData.sheetUrl;
    iframe.width = "600";
    iframe.height = "400";
    iframe.frameBorder = "0";
    sheetEmbedContainer.appendChild(iframe);

    tabPanel.appendChild(sheetEmbedContainer);

    // Button to Remove
    const removeCharacterButton = document.createElement("button");
    removeCharacterButton.innerHTML = `Remove ${sheetData.name}`;
    removeCharacterButton.addEventListener('click', (event) => {
        const parentDiv = document.getElementById(sheetData.id); // Get the tabPanel by ID
        delete characterData.instances[sheetData.id]; // Remove the object
        parentDiv.remove(); //Remove the Element
    });

    tabPanel.appendChild(removeCharacterButton);

    return tabPanel;
}

// Function to open a character tab
function openCharacterTab(tabId) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.character-tab-panel');
    tabPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.character-tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab panel
    const selectedPanel = document.getElementById(tabId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
    }

    // Activate the selected tab button
    const selectedButton = document.querySelector(`.character-tab-button[data-tab="${tabId}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Function to create the tab button
function createTabButton(tabId, characterName, className) {
    const tabButton = document.createElement('button');
    tabButton.classList.add('character-tab-button');
    tabButton.dataset.tab = tabId; // Store the tab ID
    tabButton.textContent = `${characterName} (${className})`; // Display name and class
    tabButton.addEventListener('click', () => openCharacterTab(tabId));
    return tabButton;
}

// Function to add a new character instance (creates tab button and panel)
function addClassInstance(className, name, sheetURL) {
    currentId++;
    const tabId = `character-tab-${currentId}`; // unique ID for each instance

    if (!characterData.instances) {
        characterData.instances = {};
    }

    const sheetData = {
        name: name,
        sheetUrl: sheetURL,
        id: tabId,
    };

    // Create the tab panel
    const tabPanel = generateSheetContainer(sheetData);

    // Create the tab button (passing the class name)
    const tabButton = createTabButton(tabId, name, className);

    // Append to proper containers.
    document.getElementById("character-tab-buttons-container").appendChild(tabButton);
    document.getElementById("character-tab-panels-container").appendChild(tabPanel);



    // Store the character data
    characterData.instances[tabId] = {
        name: name,
        className: className,
        sheetURL: sheetURL,
        id: tabId, //Store the ID with the data as well
    };

    console.log("characterData after adding:", characterData);

    // Open the newly created tab
    openCharacterTab(tabId);

    return `Object name ${name} with link ${sheetURL}`;
}

// Event listener for adding a character instance
addCharacterInstanceButton.addEventListener("click", function () {
    const selectedClass = classSelect.value;
    const selectedName = characterNameInput.value;
    const sheetURL = sheetUrlInput.value;

    if (selectedClass) {
        if (selectedName && sheetURL) {
            addClassInstance(selectedClass, selectedName, sheetURL);
        }
    } else {
        alert("Please select a class, cannot create empty load without a type.");
    }
});

// ========================= Load, Save, Import Code character keeper =========================

function saveData() {
    const dataStr = JSON.stringify(characterData);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileName = 'Grimtools_data.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
}

function importData() {
    importFileCharacterElement.click();
}

/**
 *This code loads the old characters back onto the scene.
 *
 */
function changeData(event) {
    const file = event.target.files[0];

    if (!file) {
        alert("No file selected.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            characterData = JSON.parse(e.target.result);
            // Iterate over all sheets
            for (const tabId in characterData.instances) {
                if (characterData.instances.hasOwnProperty(tabId)) {
                    const character = characterData.instances[tabId];
                    addClassInstance(character.className, character.name, character.sheetURL);
                    // Re-open the tab
                    openCharacterTab(tabId);
                }
            }
        } catch (error) {
            alert("Error parsing file: " + error);
        }
    };
    reader.readAsText(file);
}

// ========================= Load Save Import Event Listener  character keeper=========================
saveCharacterDataButton.addEventListener("click", saveData);
importCharacterDataButton.addEventListener("click", importData);
importFileCharacterElement.addEventListener("change", changeData);

// ========================= Initialize character keeper =========================
//We need the character to load to the site.
document.addEventListener("DOMContentLoaded", function () {
    // Load at start
    importData();
});

document.addEventListener("DOMContentLoaded", function() {


    
    const tabPanelsContainer = document.getElementById("character-tab-panels-container");



    if (tabPanelsContainer) {
        tabPanelsContainer.addEventListener("wheel", function(event) {
            event.stopPropagation(); // Prevent scroll from propagating up
        });
    } else {
        console.warn("#character-tab-panels-container not found!");
    }
});
 




//============================= Resources  ===================================================================



document.addEventListener("DOMContentLoaded", function() {
    const resourceList = document.getElementById("resource-list");
  
    function displayAllFiles() {
      // Group files by directory
      const filesByDirectory = {};
  
      for (const resource of window.resources) {
        if (resource.type === "file") {
          const directory = resource.name.substring(0, resource.name.lastIndexOf('/')); // Extract directory
          if (!filesByDirectory[directory]) {
            filesByDirectory[directory] = [];
          }
          filesByDirectory[directory].push(resource);
        }
      }
  
      // Display files by directory
      for (const directory in filesByDirectory) {
        if (filesByDirectory.hasOwnProperty(directory)) {
          // Create directory header
          const directoryHeader = document.createElement("h3");
          directoryHeader.textContent = directory;
          resourceList.appendChild(directoryHeader);
  
          // Create download links for files in the directory
          const files = filesByDirectory[directory];
          for (const file of files) {
            const listItem = document.createElement("li");
            const downloadLink = document.createElement("a");
            downloadLink.href = file.name; // Path to file
            downloadLink.textContent = file.name.split('/').pop(); // Display filename
            downloadLink.download = file.name.split('/').pop(); // Ensure download
            listItem.appendChild(downloadLink);
            resourceList.appendChild(listItem);
          }
        }
      }
    }
  
    displayAllFiles(); // Call the function to display all files
  });












// ========================= Tab Management =========================
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