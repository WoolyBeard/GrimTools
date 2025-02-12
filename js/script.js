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



//=====new roller

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
        let numThorns = 0;

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
        if (perfectD6 > 0) {
            outcome = "Perfect";
        } else if (messyD6 > 0) {
            outcome = "Messy";
        }

        // Function to apply color codes and the string
        function applyColorCode(outcome) {
            let color = "";
            switch (outcome) {
                case "Perfect":
                    color = "green";
                    break;
                case "Messy":
                    color = "darkgoldenrod";
                    break;
                case "Grim":
                    color = "red";
                    break;
                default:
                    color = "black"; //Or your preferred "normal" color
                    break;
            }
            return `<span style="color: ${color}">${outcome}</span>`;
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