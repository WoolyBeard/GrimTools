

// Hireling Data
const settlementSizes = [
    "Hamlet/Isolated Village", "Small Village", "Large Village", "Small Town", "Large Town", "City"
];

const hirelingAvailability = [
    "Very Limited: Only a few locals might be available for short-term work.", "Limited: A small number of general laborers or tradespeople available.", "Moderate: Several options, including some skilled workers and guards.",
    "Common: A fair number of hirelings, including some experienced in various trades and guards.", "Plenty: A wide range of hirelings, including mercenaries, artisans, and experienced laborers.", "Abundant: Any type of hireling can be found, including very specialized professionals."
];

const establishmentRecruits = [
    [() => Math.max(0, rollDice(1, 2) - 1), () => 0, () => 0, () => 0, () => 0, () => 0],
    [() => Math.max(0, rollDice(1, 2) - 1), () => rollDice(1, 2), () => 0, () => 0, () => 0, () => 0],
    [() => rollDice(1, 2), () => rollDice(1, 3), () => rollDice(1, 3), () => Math.max(0, rollDice(1, 2) - 1), () => Math.max(0, rollDice(1, 2) - 1), () => 0],
    [() => Math.max(0, rollDice(1, 3) - 1), () => rollDice(1, 4), () => rollDice(1, 4), () => rollDice(1, 2), () => rollDice(1, 2) + 1, () => rollDice(1, 2)],
    [() => rollDice(1, 3), () => rollDice(1, 4) + 1, () => rollDice(1, 4) + 1, () => rollDice(1, 2) + 1, () => rollDice(1, 2) + 1, () => rollDice(1, 3)],
    [() => Math.max(0, rollDice(1, 4) - 1), () => rollDice(1, 6) + 1, () => rollDice(1, 6), () => rollDice(1, 3) + 1, () => rollDice(1, 3) + 1, () => rollDice(1, 6) + 1]
];

const raceList = [
    "Human", "Elf", "Dwarf", "Halfling", "Goblin", "Half-Orc",
    "Gnome", "Deep Gnome", "Unknown", "Bird Person", "Catfolk", "Ratfolk",
    "Half-Elf", "Orc", "Lizardfolk", "Minotaur", "Elemental kin", "Frog kin",
    "Ogre", "Trollkin", "Kobold", "Centaur", "Dryad", "Shadow kin",
    "Automaton", "Fairy", "Undead", "Changeling", "Angel kin", "Fiend-blooded",
    "Merfolk", "Satyr", "Gnoll", "Dragon kin", "Construct", "Dhampir"
];

const professionList = [
    "Soldier", "Sailor", "Merchant", "Priest", "Herbalist", "Scout",
    "Farmer", "Blacksmith", "Alchemist", "Healer", "Gardener", "Trapper",
    "Carpenter", "Fisherman", "Scribe", "Chaplain", "Apothecary", "Woodsman",
    "Baker", "Miner", "Cook", "Cleric", "Seer", "Tracker",
    "Gladiator", "Tanner", "Tailor", "Mystic", "Forester", "Beastkeeper",
    "Bodyguard", "Spy", "Entertainer", "Scholar", "Shaman", "Hunter"
];

const equipmentPreparednessList = [
    "Poorly Equipped & Unprepared: Worn clothing, basic tools (or none), no extra supplies.", "Basic Kit & Minimal Supplies: Basic tools, a weapon (if applicable), some basic rations.", "Adequate Gear & Some Supplies: Decent tool kit, a weapon, a small amount of extra resource.",
    "Well-Equipped: Good gear, a choice of weapons, modest amount of resource.", "Expertise: Specialized equipment for their area of expertise, a weapon, resource.", "Well-Equipped & Prepared: Good gear and a decent pool of resources."
];

const personalGoalList = [
    "Earn riches", "Prove my worth", "Seek redemption", "Explore the world", "Learn a trade", "Protect someone",
    "Settle a debt", "Build a legacy", "Protect my people", "Avenge a wrong", "Write a book", "Become famous",
    "Hunt a monster", "Protect nature", "Find a lost family", "Restore my honor", "Learn magic", "Become a leader",
    "Overcome fear", "Test my limits", "Find ancient relic", "Escape my past", "Survive the wild", "Serve the gods",
    "Build alliances", "Start a new life", "Gain knowledge", "Seek adventure", "Find a homeland", "Become immortal",
    "Heal the sick", "Defend the weak", "Protect an artifact", "Learn alchemy", "Find love", "Solve a mystery"
];

const secretGoalList = [
    "Betray the party", "Steal an artifact", "Destroy a rival", "Serve a hidden cult", "Gain revenge", "Sabotage a faction",
    "Find forbidden lore", "Rescue a loved one", "Escape a bounty", "Reclaim a title", "Subvert a kingdom", "Protect a dangerous secret",
    "Overthrow a leader", "Take vengeance", "Corrupt an artifact", "Spy on the group", "Kill a powerful foe", "Destroy a sacred relic",
    "Find a hidden city", "Unlock immortality", "Gain ultimate power", "Save a loved one", "Learn dark magic", "Manipulate the party",
    "Discover a lost god", "Release a demon", "Avenge a betrayal", "Prove my greatness", "Destroy a clan", "Reunite with my kin",
    "Find a cure", "Sabotage the adventure", "Become the leader", "End a bloodline", "Hide my crimes", "Fulfill a prophecy"
];

const personalityList = [
    "Brash", "Cunning", "Friendly", "Stoic", "Nervous", "Ambitious",
    "Optimistic", "Greedy", "Aloof", "Quick-witted", "Curious", "Kindhearted",
    "Fierce", "Lazy", "Talkative", "Arrogant", "Pessimistic", "Superstitious",
    "Calculating", "Generous", "Ruthless", "Submissive", "Stubborn", "Secretive",
    "Chipper", "Reserved", "Protective", "Daring", "Quiet", "Suspicious",
    "Honorable", "Impulsive", "Loyal", "Scheming", "Reserved", "Soft-spoken"
];

const loyaltyMoraleList = [
    "Unwavering", "Opportunistic", "Loyal to gold", "Loyal to a cause", "Personal grudges", "Fear-based loyalty",
    "Honor-bound", "Mercenary-like", "Loyal to family", "Fickle", "Dutiful but selfish", "Conditional loyalty",
    "Loyal to a lie", "Loyal to power", "Reluctant loyalty", "True devotion", "Secretly resentful", "Tricky to trust",
    "Easily swayed", "Begrudgingly loyal", "Loyal to the group", "Devoted to faith", "Pragmatic", "Driven by guilt",
    "Neutral but fair", "Self-serving", "Fearful respect", "Protective", "Loyal under duress", "Hidden agenda",
    "Fanatically loyal", "Vengeful loyalty", "Mutually beneficial", "Culturally tied", "Emotionally driven", "Strategically loyal"
];

const physicalFeaturesBuild = [
    "Reedy, Lanky", "Top-Heavy, Sloping", "Hunched, Crooked", "Broad, Asymmetrical", "Short, Stunted", "Thin, Narrow",
    "Barrel-Chested", "Tapered, Thin Limbs", "Wide Hips", "Long Torso, Short Legs", "Round Shoulders", "Slight Build",
    "Lopsided, Bulky", "Long Limbs, Short Torso", "Stiff, Angular", "Swollen Ankles", "Unusually Tall", "Unusually Short",
    "Slender, Boney", "Sloping Shoulders", "Wiry, Taut", "Rounded Build", "V-Tapered", "Unusually Wide"
];

const physicalFeaturesFacial = [
    "Missing an Ear", "Protruding Teeth", "Uneven Eyes", "Sunken Cheeks", "Bulbous Nose", "Unusual Eye Color",
    "Narrow Set Eyes", "Crooked Nose", "Deep Set Eyes", "Crossed Eyes", "Wide Set Eyes", "Narrow Chin",
    "Scarred Lip", "Large Mouth", "Small Mouth", "Eyelids Droop", "Cheek Twitch", "Thick Eyebrows",
    "A Missing Eyebrow", "Pinched Nose", "Uneven Nostrils", "Overly Plump Cheeks", "Narrow Forehead", "Missing a Tooth"
];

const physicalFeaturesHair = [
    "Unruly, Mismatched Hairline", "One Long Braid/Lock", "Very Thin Eyebrows", "One Side Shaved", "Wildly Untamed", "Large, Pointed Ears",
    "Patchy Bald Spots", "Braided with Beads", "Unnaturally Thick Hair", "Scalp Tattoo", "Unusually Thin Hair", "Hair Dyed Odd Color",
    "Mismatched Sideburns", "Wears a Hat Constantly", "Wears a Head Scarf", "Thick Eyebrows", "Hair Placed in Odd Styles", "Hairs Have White Streaks",
    "Has a Scar on Scalp", "Long Braids", "Blue Dyed", "Smells Oddly", "Patchy and Thin", "Unnaturaly Clean"
];

const physicalFeaturesSkin = [
    "Blotchy, Mottled", "Unusually Pale", "Dark Patches, Vitiligo", "Unusually Red, Blotchy", "Heavy Freckling", "Excessive Hair Growth",
    "Leathery Skin", "Small Moles", "Dry, Scaly Skin", "Spotted Skin", "Rosy Cheeks", "Red Blotches",
    "Veined Skin", "Patchy Tan", "Dark Circles Under Eyes", "Pale with Blueish Tone", "Bruised Look", "Patch Marked",
    "Pale, Translucent", "Green Tint", "Brown Pigments", "Rough Scars", "Small Pustuals", "Oily Skin"
];

const physicalFeaturesMovement = [
    "Stiff, Jerky Limbs", "Limps Heavily", "Lopsided Gait", "Sways, Unsteady", "Shuffles, Slides", "Twitches, Fidgety",
    "Rushes, Starts", "Hesitant, Skips", "Waddles, Plods", "Swaying, Rocking", "Creeps, Crouching", "Drags a Foot",
    "Skips, Stumbles", "Stomps Heavily", "Clumsy, Flails", "Slouches, Sulks", "Paces Restlessly", "Shuffle and Slide",
    "Pigeon Toed", "Sways Side to Side", "Walks With a Cane", "Shuffles Low", "Stalks Low", "Moves Well"
];

const physicalFeaturesMarks = [
    "Prominent Scars", "Clubbed Finger/Toe", "Deformed Earlobes", "Webbed Toes/Fingers", "Missing Teeth", "Peculiar Birthmark",
    "Unusually Long Limbs", "Uneven Shoulder Height", "Large Knuckles", "One Leg Shorter", "Unusually Small Hands", "Unusually Large Hands",
    "Curved Spine", "Unusually Long Neck", "Prominent Veins", "Long Finger Nails", "Unusually Short Limbs", "Uneven Length of Limbs",
    "Unusually Large Earlobes", "Unusually Small Feet", "Warped Back", "Missing Finger(s)", "Unusual Finger Lengths", "A Peculiar Odor"
];

const oddFeaturesList = [
    "Piercing yellow eyes", "Missing a finger", "Strange accent", "Elaborate tattoos", "Golden prosthetic", "Always smells like saltwater",
    "One glowing hand", "Burns that shimmer", "Unusually large ears", "Fangs", "Bark-like skin", "Never blinks",
    "Too many scars", "Crystalline hair", "Half-mechanical limb", "Voice like gravel", "Oddly melodic laugh", "Cloak seems alive",
    "Bone jewelry", "Glowing green veins", "Missing a shadow", "Metallic patches", "Eyes change colors", "Talisman hums softly",
    "Hollow voice", "Always dripping wet", "Webbed fingers", "Never casts a reflection", "Extra jointed limbs", "Oddly elongated limbs",
    "Smoke curls from breath", "Stone-like skin", "Forked tongue", "Always cold to the touch", "Brightly glowing freckles", "Leaves footprints of fire"
];
