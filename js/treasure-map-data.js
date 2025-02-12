

// Treasure Map Data
const treasureMinorMundaneLocations = [
    "A muddy track along the shore", "A small, rocky beach", "A cluster of fishing boats", "A weathered stone jetty", "A grassy dune overlooking the sea", "A collection of seashells and driftwood",
    "A dusty road leading inland", "A simple wooden bridge", "A field of tall grass", "A shallow stream crossing the path", "A small grove of trees with a worn trail", "A crossroads with a weathered signpost",
    "A farmer's field with crops", "A small, wooden fence", "A simple well and water trough", "A pile of old fishing nets", "A few basic tools for farming", "A simple animal pen with a few chickens",
    "A thicket of undergrowth", "A narrow path through the trees", "A rocky outcrop with small caves", "A clearing with a small fire pit", "A fallen log covered in moss", "A small stream winding through the woods",
    "A steep, rocky slope", "A path worn into the side of a hill", "A patch of bare, exposed earth", "A small cluster of rocks at the hilltop", "A view down into the surrounding area", "A small, scraggly tree at the peak",
    "A crumbling stone wall", "An overgrown foundation", "A pile of scattered bricks and stones", "A partially collapsed hut", "A small well, now filled with debris", "A broken fence overgrown with vines"
];

const treasureMinorFantasticLocations = [
    "Jagged Peak", "Sandy Cove", "Twisted Woods", "Old Ruins", "Murky Swamp", "Hidden Cave",
    "Sunken Ship", "Volcano Crater", "Forgotten Temple", "Crystal Cavern", "Coral Reef", "Shifting Sands",
    "Ancient Forest", "Whispering Falls", "Petrified Grove", "Shadowed Grotto", "Cursed Island", "Misty Mountain",
    "Watchtower Ruins", "Abandoned Mine", "Desert Oasis", "Grassy Plateau", "Cliffside Path", "Gloomy Bog",
    "Secret Harbor", "Winding River", "Ghostly Marsh", "Stone Archway", "Starlit Pond", "Lava Fields",
    "Skyhigh Peak", "Sprawling City", "Enchanted Glade", "Sacred Hill", "Forbidden Canyon", "Floating Islands"
];

const treasureMundaneTreasureLocations = [
    "The Fisherman's Shrine", "The Driftwood Market", "The Abandoned Dock", "The Smuggler's Cove", "An ancient Oak", "The Treasure Hunter's Camp",
    "The Wreck of the Crimson Cutlass", "The Treasure Map Cave", "The Ghostly Lighthouse", "An old forgotten wagon", "The Sunken Bell Tower", "The reminisce of an old fleet",
    "The Boiling Springs", "A Hidden Outpost", "Old Wizards Tower", "An Old Quarry", "The Smuggler's Stash", "The Forgotten Roadside Shrine",
    "The Rocks", "Forest glade", "A formstead well", "A Simple Clearing", "The Bone Bridge", "The Misty Archipelago",
    "A Hidden Cave", "A hidden room", "An Old Lighthouse Keeper's home", "A Local Tavern", "The Old Trading Post", "A deserted shack",
    "The Golden Tide Pool", "An old Storage Room", "An Underground Passage", "A Hidden Warehouse", "The Old Town Hall", "A long forgotten crypt"
];

const treasureFantasticTreasureLocations = [
    "Tide Pools of Illusion", "Glass Lagoon", "Glowing Grotto", "Siren's Perch", "Stormcaller's Altar", "Eternal Bonfire",
    "Mermaid's Grotto", "Serpent's Nest", "Kraken's Ink Pool", "Pirate’s Gambit", "Pirate's Gauntlet", "Floating Wreck",
    "Haunted Shallows", "Salted Graveyard", "Cave of Echoes", "The Shifting Sands", "Skyhigh Peaks", "Cursed Lighthouse",
    "Coral Maze", "Singing Mangroves", "Floating Islands", "Tower of Terror", "Shifting Sands", "Lava Fields",
    "An Old Temple", "A forgotten ruin", "Shifting Sands", "Forgotten Ruins", "Forgotten Island", "A Lost Civilization",
    "Starlit Pond", "The Forbidden Canyon", "Starless Sea", "Celestial Gateway", "Otherworldly Shrine", "Thieves Den"
];

const treasureDirections = [
    "Follow the phantom lights, past the twisted trees and through the broken stone.", "Where the wind sings a mournful tune, beneath the watchful eye of the solitary tree", "North to the echoing falls, past the pools that shimmer with false light.", "Climb the cliff where the seabirds nest, and seek the cove that the birds ignore.", "Follow the serpent's coils where the ground is soft, to the ruined tower.", "Go to where the sun's reflection is broken in two, past the ghostly ship that drifts on.",
    "South by the crashing waves, towards the ship that remains on the sands.", "West where the tide reveals the bones, along the path that follows the sea.", "Down into the caves of salt, where the path winds toward the sea.", "Seek out the lone isle where the water flows in circles, and follow its pull.", "East to where the waves never break, under the shadow of the towering stone.", "North, following the currents where they lead to a hidden shore.",
    "Where the dark gathers in a knot, where the ground seems to watch you walk.", "Past the trees that clutch at the sky, to where the shadows dance.", "East beneath the watchful gaze of the dark cliffs, towards the fire that never dies.", "South through the mist and the fog, to the shore where secrets are kept.", "Follow the shadows of the tall grasses, to a place where the sun never hits.", "Where the creatures of the night gather, following the bones of the dead.",
    "Where the sounds of the past whisper on the wind, to the ruins that time left behind.", "Beneath the arch of the weathered rocks, follow the voices that guide the way.", "Down to the deep pools that mirror the sky, past the place where sound does not exist.", "South where the ground cries out a melody, to where the earth splits.", "Past the place where the sound echoes back, beneath the trees where the wind howls.", "Where the silence is deafening, to the shore where the sounds of the water are lost.",
    "Where the moon reflects a hidden path, follow the light to the hidden cave.", "Seek out the sun that shines through the cracks, along a narrow path.", "South towards the pool where the stars reflect, to where a faint glow shines.", "Down to the shallows where the water is warm, to where the light refracts into many colours.", "East to the place that is never dark, and beyond the single stone.", "Northwest to where the stars guide your way, past the pool of pure light.",
    "Seek the twisted path where the trees have faces, following the trail where no one has been.", "Where the grass is made of glass, follow the footprints that glitter in the sun.", "West through the pools where the water seems to move on its own, and follow the path to where the rocks cry out.", "To where the path twists and turns on itself, down a trail that seems to disappear from view.", "South, where the ground floats above the earth, along the path where you’re never sure where you’re going.", "To where the sky seems closer than before, and following the path with no end."
];

const treasureEnvironmentalFeatures = [
    "...with a lonely tree", "...where the water whispers secrets", "...shrouded in mist", "...overgrown with strange vines", "...reeking of decay", "...leading into the dark",
    "...where strange flowers grow", "...inhabited by seabirds", "...carved with strange symbols", "...the ground shakes with each step", "...that hum with an inner power", "...surrounded by a strange light",
    "...with a hidden spring", "...where shadows dance", "...that seem to watch you", "...where the air is thick and still", "...that hold a dark secret", "...with a view of the skies",
    "...inhabited by strange creatures", "...filled with whispers of past battles", "...where the rock is jagged and sharp", "...with strange glowing fungus", "...leading to a hidden path", "...that reflects the stars",
    "...with an echo of voices", "...full of unusual sounds", "...where the path disappears", "...with a sense of foreboding", "...where the gravity feels lighter", "...marked with a strange emblem",
    "...where time seems to slow", "...where a chill wind blows", "...that feels alive", "...where the silence is deafening", "...filled with the songs of nature", "...where the path is unclear"
];

const treasureLoreDescriptors = [
    "...marked by ancient symbols", "...said to be haunted by a long-lost captain", "...where only the bravest dare tread", "...guarded by a cunning trick", "...whispers of lost riches are carried on the wind", "...where the moon hangs low",
    "...that is rumored to house a portal", "...where the weather changes suddenly", "...where the ground trembles often", "...where the wind howls like a banshee", "...where the magic is powerful and wild", "...where the trees have faces",
    "...where the veil between worlds is thin", "...where the spirits of old walk freely", "...where fortunes are made and lost", "...where shadows move on their own", "...where the sun never seems to shine", "...that hides its secrets well",
    "...where the plants are carnivorous", "...that echoes with laughter", "...where time has no meaning", "...that is the site of a great battle", "...where the birds sing songs of warning", "...where the water glows",
    "...where the stars seem closer", "...that is said to be blessed by the gods", "...where the stones speak in riddles", "...where the path seems to shift", "...where the water tastes sweet and pure", "...where the wind whispers secrets",
    "...where the shadows are longer", "...where the plants have an unusual color", "...that is the heart of something ancient", "...where the creatures glow", "...where the sky is always different", "...where the air crackles with power"
];

const treasureGuardians = [
    "A pack of snarling monkeys", "A giant crab with a shell like stone", "A ghostly pirate crew", "A monstrous serpent", "A cunning trap in the shadows", "No Guardian",
    "A swarm of stinging insects", "A hulking golem of stone", "A fearsome wild beast", "A cunning illusion", "A magical guardian", "A flock of magical birds",
    "A band of ruthless bandits", "A creature born of nightmares", "A cunning puzzle that locks the path", "An elemental guardian", "A guardian of the earth", "A celestial beast",
    "A tribe of savage cannibals", "A being that controls time", "A creature made of pure shadow", "A mechanical construct", "An undead sentinel", "An old god",
    "A flock of bloodthirsty ravens", "A guardian that shifts its shape", "A spirit of nature", "An invisible sentry", "A venomous plant", "A storm elemental",
    "A creature of the deep", "A guardian with a cruel grin", "A cunning mimic", "A guardian in a form of riddles", "A guardian from another world", "A manifestation of the island itself"
];

const treasureRewards = [
    "A chest of gold doubloons", "A powerful cursed weapon", "A tattered map to an even greater prize", "A magical amulet", "A potion of great healing", "A secret passage to an unknown location",
    "A set of enchanted compasses", "A strange, glowing orb", "A spell that grants incredible power", "A cloak that allows you to vanish", "A magical artifact from an old civilization", "A legendary sword",
    "A key to unlock a hidden gate", "An ancient book of arcane lore", "A gemstone that reveals hidden things", "A talisman that grants immunity", "A ring that enhances the senses", "A device to control the wind",
    "A rare herb that enhances senses", "A pair of magical boots", "A map to a hidden treasure chamber", "A compass that points to fate", "An enchantment that enhances a weapon", "A set of lockpicks that never fail",
    "A bottle of potent rum", "A pet with extraordinary abilities", "A charm that deflects curses", "A book of ancient knowledge", "A set of armor made with ancient metal", "A recipe to an incredible meal",
    "A weapon with a life of its own", "A compass that points to lost places", "A scroll of a lost language", "A potion of invisibility", "A set of magical dice", "A method to control the tides"
];

const treasureHooks = [
    "A few broken crates marked with faded clan symbols", "Empty chests with a sea-serpent carved into the wood", "A single, worthless trinket that hums with a faint magical energy trackable", "Patches of blood with strange, non-human footprints nearby", "Scraps of parchment covered in arcane symbols and hastily written notes", "Discarded tools and rope with a distinctive knot used by treasure hunters",
    "Spilled provisions with traces of a rare, pungent spice", "A torn flag bearing the emblem of a known privateer captain or bandit leader", "An abandoned weapon with a crudely repaired grip", "A broken lock and footprints leading directly to a well-worn path", "A coded message written in a language that resembles bird calls", "A small, empty birdcage with a tiny, glittering feather inside",
    "A damaged cart with a merchant's guild seal", "A trail of dropped coins from a far-off land", "A tattered map with an altered route that seems to be hand-drawn", "Burned remains of a camp emitting a strange, lingering odor ", "A single playing card with a symbol depicting a mask", "Crumbled bricks from a torn down wall showing signs of giant claw marks recently left. Distinct and identifiable. ",
    "A collection of strange bones arranged in a ritualistic pattern", "A pool of strange liquid that glows faintly in the dark", "A pile of worn maps marked with a symbol that represents a distant land", "A note scribbled in haste with a phrase that refers to an old god", "A few broken chains that appear to have been freshly broken", "Discarded vials of potion with a label showing a red skull",
    "A crude drawing on the wall depicting a masked figure and a portal", "Broken pieces of a puzzle that are made of a unique glowing metal", "A set of mysterious footprints that seem to disappear into thin air", "Strange glowing dust that seems to gravitate towards a certain point", "The skeletons of those who fell in battle their weapons still clutched tightly in their hands", "An empty birdcage with a broken latch",
    "A strange metallic object that seems to vibrate at a low frequency", "A collection of bones with runes that pulse with an inner light", "A broken telescope with a lens that's made of strange crystal from a specific location", "A single large tooth that has small symbols carved into it", "A mysterious music box that seems to echo a song in a faraway language", "An eerie silence where the surrounding wildlife seems to avoid the area"
];

const treasureWhoWasHere = [
    "Scavenging Goblins", "A rival pirate crew (known)", "A lone, cunning rogue", "A group of desperate buccaneers or bandits", "A scholarly thief (name unknown)", "A group of treasure hunters",
    "Hungry wildlife", "A band of privateers (unidentified)", "A disgraced noble turned pirate", "Local villagers, desperate for anything", "A secret society of thieves", "A magic user (unknown)",
    "Mercenaries in need of coin", "A greedy merchant and his crew", "An old, grizzled explorer", "A tribe of natives with a dark secret", "A group of alchemists", "A band of cartographers",
    "Someone fleeing a great force", "A giant creature of the earth", "A gambler who likes to taunt", "A cursed artist who can draw portals", "A tinker who likes complicated puzzles", "Creatures from another dimension",
    "A courier looking for quick money", "An escaped prisoner seeking revenge", "A healer trying to get what they need", "A trickster with a flair for the dramatic", "A magic user on the search for power", "The spirits of long dead sailors",
    "An animal trainer", "A druid looking for something lost", "A shaman seeking answers from beyond the veil", "A tinker looking for something useful", "A stargazer with an unnatural curiosity", "A hunter tracking their prey"
];

const treasureWhereDidTheyGo = [
    "Deeper into the location", "To a nearby port", "Seeking new marks", "Fled into the woods/jungles", "To an ancient library", "To the next rumored treasure location (extra map)",
    "Still lurking around the area", "Back to their ship or wagon, sails or dust on horizon", "Lost at sea, lake or river", "Back to their village", "To a meeting point", "Into a portal",
    "To a new employer", "Back to their trade route", "Further into the unknown", "Into a hidden village", "Their secret laboratory", "To a distant land",
    "In a hiding place", "Deeper into the earth", "To their hideout", "Through an ancient fey road", "Stuck off in a puzzle", "Back to their dimension",
    "To their delivery spot", "To their captors", "Into the wild to collect rare plants", "Into a hideout to plan more tricks", "Feasting on nearby animals", "Still around the area",
    "Capturing a beasts", "Deeper into the wild", "To his sacred ground", "To their workshop", "To a local brewery/tavern", "Spending or selling the treasure"
];