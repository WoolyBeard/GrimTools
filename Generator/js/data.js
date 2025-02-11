// Adventure Data Tables
const adventureThemes = [
    "Pilgrimage", "Treasure Hunt", "Political Intrigue", "Survival", "Forbidden Lore", "Escapade",
    "Redemption", "Reconnaissance", "Mystical Quest", "Retribution", "Artifact Recovery", "Monster Slaying",
    "Exploration", "Trade Route", "Diplomatic Mission", "Investigation", "Cultural Exchange", "Prophecy Fulfilment",
    "Personal Growth", "Scientific Study", "Spiritual adventure", "Military Campaign", "Cartographic Survey", "Hidden Truth",
    "Lost Civilization", "Magical Convergence", "Prophecy Fulfillment", "Ancient Ritual", "Royal Escort", "Artistic Expression",
    "Haunted Legacy", "Unnatural Plague", "Rival Factions", "Resource Gathering", "Lost Colony", "Natural Disaster"
];

const adventureGoals = [
    "Escape", "Rescue", "Discover", "Protect", "Deliver", "Reclaim",
    "Retrieve", "Investigate", "Conquer", "Map", "Negotiate", "Trade",
    "Forge", "Build", "Uncover", "Defend", "Sabotage", "Smuggle",
    "Reunite", "Explore", "Retrieve", "Challenge", "Expose", "Survive",
    "Convince", "Hunt", "Transport", "Subvert", "Ascend", "Free",
    "Liberate", "Guard", "Seek", "Repair", "Bargain", "Witness"
];

const adventureDescriptors = [
    "Blighted", "Hidden", "Frozen", "Verdant", "Whispering", "Shattered",
    "Ancient", "Treacherous", "Glimmering", "Sacred", "Cursed", "Obscured",
    "Burning", "Winding", "Distant", "Hallowed", "Empty", "Looming",
    "Perilous", "Echoing", "Rugged", "Serene", "Forbidden", "Flickering",
    "Glittering", "Feral", "Haunted", "Fading", "Vast", "Stormy",
    "Sweltering", "Hollow", "Unyielding", "Majestic", "Forgotten", "Crumbling"
];

const adventureDenizens = [
    "Wandering Storyteller", "Hermit Scholar", "Traveling Merchant", "Lost Pilgrim", "Enigmatic Artisan", "Reclusive Healer",
    "Exiled Noble", "Dream Weaver", "Nomadic Cartographer", "Bound Spirit", "Mystic Seer", "Curious Explorer",
    "Ancient Guardian", "Fae Wanderer", "Wayward Bard", "Silent Observer", "Elemental Guide", "Eccentric Inventor",
    "Disgraced Knight", "Skeletal Scholar", "Grave Keeper", "Masked Prophet", "Forgotten Deity", "Restless Spirit",
    "Nature Mystic", "Sky-Dwelling Sage", "Shadow Broker", "Beast Speaker", "Corrupted Oracle", "Animated Statue",
    "Gloom-Bound Wanderer", "Time-Lost Child", "Roving Librarian", "Silent Knight", "Lunar Oracle", "Obsessive Collector"
];

const adventureDangers = [
    "Feral Pack", "Corrupted Entity", "Guardian Construct", "Lost Souls", "Territorial Predator", "Apathetic Watchers",
    "Mutated Swarm", "Arcane Experiment", "Ancient Automaton", "Desperate Hermit", "Lurking Stalker", "Opportunistic Scavengers",
    "Elemental Spirit", "Psychic Aberration", "Fallen Protector", "Crazed Cultist", "Hive-Mind Collective", "Reluctant Servants",
    "Venomous Hunter", "Blood-Thirsty Beast", "Ambitious Warlord", "Trapped Explorer", "Terrified Villagers", "Enigmatic Observer",
    "Grave Robbers", "Mad Seer", "Evolving Mutation", "Enraged Behemoth", "Scheming Broker", "Chaotic Anarchist",
    "Deformed Hunters", "Possessive Entity", "Vengeful Spirit", "Obsessed Collector", "Silent Raiders", "Evasive Manipulator"
];

const adventureLocations = [
    "Ruins", "Forest", "River", "Mountains", "Desert", "Caverns",
    "City", "Swamp", "Oasis", "Wasteland", "Coastline", "Temple",
    "Tundra", "Volcano", "Sky", "Sea", "Glacier", "Tower",
    "Plains", "Labyrinth", "Portal", "Dream", "Graveyard", "Mine",
    "Fortress", "Underworld", "Sanctum", "Battlefield", "Road", "Maze",
    "Citadel", "Jungle", "Market", "Workshop", "Garden", "Shrine"
];

const adventureFantasticalLocations = [
    "Whispering Pass", "Petrified Forest", "Shifting Dunes", "Crystalline Caves", "Sunken Causeway", "Howling Peaks",
    "Ghostly City", "Fungal Mire", "Celestial Road", "Blighted Valley", "Frozen Labyrinth", "Forbidden Spire",
    "Floating Isles", "Volcanic Heart", "Starfall Scar", "Living River", "Glacier Tomb", "Arcane Gate",
    "Ethereal Plains", "Mirrored Maze", "Time-Twisted Ruins", "Haunted Crossroads", "Warped Path", "Forgotten Mine",
    "Ironclad Fortress", "Shadowed Descent", "Sanctified Grove", "Astral Battlefield", "Forgotten Trail", "Echoing Chasm",
    "Sky Citadel", "Enchanted Jungle", "Traveling Bazaar", "Elemental Forge", "Woven Garden", "Sacred Shrine"
];

const adventureBoons = [
    "Rare Resource", "Uncommon Artifact", "Friendly Encounter", "Temporary Ally", "Hidden Knowledge", "Safe Passage",
    "Valuable Map", "Improved Equipment", "Unforeseen Help", "Mystical Blessing", "Magic Item", "Strategic Advantage",
    "Healing Location", "A Friendly Community", "Ancient Technique", "Powerful Artifact", "Guidance", "Reputation Boost",
    "Hidden Shortcut", "Rest and Recuperation", "Financial Support", "Lore Knowledge", "New Contact", "Treasure Cache",
    "New Skill", "Divine Intervention", "Information Network", "Specialized Training", "Lost Technology", "Safe House",
    "Magical Boon", "Ancient Secret", "Favorable Trade", "Enchanted Item", "Favorable Weather", "Prophecy Alignment"
];

// Location Data Tables


// Location Data - Nested by Biome and Location Type
const locationData = {
    forest: {
        mundane: {
            names: [
                "Old Logging Camp",
                "Hunter's Blind",
                "Deer Trail",
                "Creek Crossing",
                "Worn Stone Bridge",
                "Bandit Ambush Point",
                "Logging Cabin",
                "Charred Remains",
                "Overgrown Ruin",
                "Trapper's Trail",
                "Murky Pond",
                "Tangled Thicket",
                "Overlook",
                "Shadowed Gulch",
                "Wolf Den",
                "Old Mill Site",
                "Mineral Spring",
                "Fallen Log Crossing",
                "Spiderwebbed Path",
                "Twisted Oak Clearing",
                "Raven's Peak",
                "Gloomwood Path",
                "Mossy Outcrop",
                "Stone Archway",
                "Echoing Hollow",
                "Wildflower Meadow",
                "Charred Tree",
                "Lost Firepit",
                "Birdsong Dell",
                "Muddy Creek Bank",
                "Old Bones Trail",
                "Rest Stop Rock",
                "Rotting Tree",
                "Deer Run"
            ],
            descriptions: [
                "A weathered stone bridge spanning a deep ravine, showing signs of disrepair.",
                "A clearing where a band of outlaws has set up a makeshift camp.",
                "A small, rundown cabin used by hunters seeking game in the forest.",
                "A shallow creek that must be forded to continue along the path.",
                "A clearing littered with decaying logs and rusting equipment from a bygone logging operation.",
                "A sudden and unexpected depression in the forest floor, partially filled with water.",
                "A small, neglected shrine dedicated to a forgotten forest deity.",
                "A secret stash of traps and supplies hidden by a long-absent trapper.",
                "A small body of stagnant water, barely visible beneath the thick canopy."
            ],
            complications: [
                "A troll lives under the bridge, demanding a toll for passage.",
                "The bandits are led by a ruthless killer with a vendetta.",
                "A wendigo stalks the hunting cabin, preying on lone travelers.",
                "The creek is infested with leeches that transmit a debilitating disease.",
                "Animated logging equipment haunts the site, attacking anyone who enters.",
                "The sinkhole leads to an underground cave system with unknown dangers.",
                "A vengeful spirit haunts the shrine, punishing those who disturb it.",
                "The trapper's cache is guarded by a magical construct.",
                "The murky pond contains a hidden portal to another dimension.",
                "The stones whisper secrets that drive you mad"
            ]
        },
        fantastic: {
            names: [
                "The Emerald Grove",
                "Feywild Border Crossing",
                "The Whispering Cairn",
                "The Living Labyrinth",
                "The Shadow Pool",
                "The Petrified Waterfall",
                "The Treant King's Court",
                "The Moonlit Clearing",
                "The Sunken Shrine of Silvanus",
                "The Crystalline Caverns",
                "The Everbloom Glade",
                "The Gnarled Root Gate",
                "The Sprite Village",
                "The Banshee's Howl",
            ],
            descriptions: [
                "A grove of ancient trees with emerald leaves that shimmer in the sunlight.",
                "A spot where the veil between the Material Plane and the Feywild is thin.",
                "An ancient stone cairn that whispers forgotten prophecies.",
                "A constantly shifting maze of living trees and thorny vines.",
                "A pool of water that reflects not the surrounding forest, but glimpses of other worlds.",
                "A waterfall frozen in time, turned to solid crystal.",
                "A gathering of treants (ancient talking trees), centered on a massive, elder tree.",
                "A place only illuminated by moonlight where strange creatures gather.",
                "A place where you can get lost in a deep dark pool",
                "A place where a tree may come to life",
                "A cave system made of pure crystal.",
                "A forest with blooms that are permenantly in bloom",
                "Tree roots that are connected to another plane",
                "A Village of mischievous Sprites",
                "It howls that can be heard for miles"
            ],
            complications: [
                "The grove is protected by a powerful dryad.",
                "Crossing the border attracts the attention of jealous fey creatures.",
                "The whispers can drive listeners mad with knowledge of the future.",
                "Getting lost in the labyrinth means facing dangerous fey creatures.",
                "Gazing into the pool can trap your soul in another dimension.",
                "Touching the crystal can turn you to stone.",
                "Angering the treants will bring the forest down upon you.",
                "Creatures are drawn to it",
                "You may drown",
                "The trees can move and change in a blink of an eye",
                "The crystal structures block magic.",
                "The permenant blooms attract terrible predators",
                "There are terrible whispers",
                "The Sprites will steal your stuff",
                "The Howl draws in the dark forces"
            ]
        }
    },
    plains: {
        mundane: {
            names: [
                "Abandoned Farmhouse",
                "Wagon Trail",
                "Lone Oak",
                "Dry Gulch",
                "Cattle Skull",
                "Dust Devil",
                "Prairie Dog Town",
                "Caravan Wreck",
                "Windmill Ruin",
                "Abandoned Well",
                "Old Scarecrow",
                "Sunken Cart",
                "Vulture Perch",
                "Stone Cairn"
        ],
        descriptions: [
            "A deserted farmhouse with broken windows and a creaking porch.",
            "A dusty trail worn by countless wagons heading west.",
            "A solitary oak tree standing sentinel over the flatlands.",
            "A deep, dry gully carved by ancient floods.",
            "A sun-bleached skull of a long-dead bovine.",
            "A swirling vortex of dust and wind.",
            "An extensive network of burrows and mounds created by prairie dogs.",
            "Scattered wreckage and supplies from a destroyed wagon train.",
            "A dilapidated windmill, its sails long gone.",
            "A stone-lined well, long since dried up and abandoned.",
            "A ragged scarecrow standing in a field of withered crops.",
            "A broken down cart sinking into the ground",
            "A cluster of sun beaten stones",
            "An eerie spot to lay down."
        ],
        complications: [
            "The farmhouse is infested with rats carrying a dangerous plague.",
            "Bandits prey on travelers along the wagon trail.",
            "The oak tree is a frequent target for lightning strikes.",
            "The gulch hides a nest of venomous snakes.",
            "The skull is cursed, bringing bad luck to those who touch it.",
            "The dust devil is a minor elemental, attacking those who get too close.",
            "The prairie dogs are fiercely territorial and carry disease.",
            "The wreckage is haunted by the ghosts of the travelers who perished.",
            "The windmill is home to a monstrous owl.",
            "A creature is trapped down there.",
            "The field has creatures that try to pull you down",
            "A demon lives inside",
            "The vulture wants to pick your bones.",
            "The stones send out a bad energy"
        ]
    },
    fantastic: {
        names: [
            "Floating Mesa",
            "The Mirage Well",
            "Windstone Circle",
            "Grave of the Sky Kraken",
            "The Rainbow Arch",
            "Singing Stones",
            "The Plains Beasts Lair",
            "Whispering Grass",
            "Gnomish Village",
            "The Obsidian Monolith",
            "The Stargazer's Platform",
            "The Sunken Zepplin",
            "Crystal Field",
            "Giant Rock Bird Nest"
        ],
        descriptions: [
            "A mesa that floats gently above the plains, supported by ancient magic.",
            "A well that produces only illusory water and reflects impossible visions.",
            "A circle of standing stones that hum with ethereal energy.",
            "A massive skeleton embedded in the plains, said to be from a creature that once swam in the sky.",
            "A shimmering archway formed by pure light.",
            "A cluster of stones that produce melodies when touched.",
            "A sinkhole leading to the lair of a massive, land-bound kraken.",
            "Grass that whispers secrets to those who listen closely.",
            "A hidden village of gnomes built into the roots of a giant tree.",
            "A dark rock that seems to absorb light",
            "It reflects the nightsky during the day.",
            "A relic of a long lost civilization, still working.",
            "It creates new light and is warm",
            "Birds like living on it."
        ],
        complications: [
            "The mesa is slowly drifting toward a dangerous storm.",
            "The illusions can trap unwary travelers in a dream world.",
            "The stones amplify psychic abilities, but also attract malevolent entities.",
            "The skeleton is haunted by the restless spirit of the Sky Kraken.",
            "Crossing the arch teleports you to a random location on the Material Plane.",
            "The melodies can drive listeners mad with repetitive tunes.",
            "The kraken is still alive and very hungry.",
            "The secrets are often lies meant to mislead or corrupt.",
            "The gnomes are fiercely protective of their home and distrust outsiders.",
            "The light drains your sanity",
            "The stars are not there but are an illusion.",
            "It summons terrible storms.",
            "Scarab monsters lay eggs in your ears.",
            "Its home to massive rock birds"
        ]
    }
},
mountains: {
    mundane: {
        names: [
            "Goat Trail",
            "Mountaintop Shrine",
            "Cave Entrance",
            "Crumbling Watchtower",
            "Shepherd's Hut",
            "Abandoned Mine Shaft",
            "Frozen Lake",
            "Stone Quarry",
            "Avalanche Zone",
            "Hidden Pass",
            "Echoing Canyon",
            "Glacier's Edge",
            "Lost Prospector's Camp",
            "Rope Bridge"
        ],
        descriptions: [
            "A narrow path winding precariously along a cliff face.",
            "A small shrine dedicated to a mountain deity.",
            "The mouth of a dark and unexplored cave.",
            "The ruins of an old stone watchtower, battered by wind and snow.",
            "A small, sturdy hut used by shepherds tending their flocks.",
            "A dark, flooded mine shaft with broken supports",
            "A lake frozen solid all year round, with treacherous ice.",
            "A source of stone.",
            "Signs show this is a danger zone.",
            "A hidden path known to natives.",
            "Loud sounds come back to you.",
            "The point where the glacier meets the earth",
            "Signs of a life lost",
            "A scary bridge hanging on for dear life."
        ],
        complications: [
            "The trail is prone to rockslides.",
            "The shrine has been defiled by vandals.",
            "The cave is inhabited by a monstrous creature.",
            "The watchtower is about to collapse.",
            "The shepherd is a recluse with a dark secret.",
            "A monster lives there",
            "The ice is prone to crack",
            "It creates constant avalanches",
            "Anything can happen on a trail",
            "Wind and storms can hit anytime",
            "It summons all types of creatures",
            "It tests your resolve",
            "They will push you down",
            "The rope is about to break"
        ]
    },
    fantastic: {
        names: [
            "Crystal Peak",
            "The Elemental Forge",
            "The Sky Bridge",
            "The Roc's Nest",
            "The Dragon's Hoard",
            "Giant's Grave",
            "The Cloud Altar",
            "The Stone Golem Quarry",
            "Mirror Caverns",
            "The Thunderlord's Cairn",
            "Labyrinth of the Shifting Stones",
            "Aerie of the Storm Eagles",
            "The Petrified City of Aerthos",
            "The Wellspring of Wishes"
        ],
        descriptions: [
            "A mountain peak covered in enormous, shimmering crystals.",
            "A hidden forge powered by the elemental forces of the mountain.",
            "A bridge made of solidified clouds connecting two mountain peaks.",
            "A nest built by giant Rocs",
            "Guarded by a fearsome dragon.",
            "Home of a long forgotten race of giants",
            "A site of natural storms",
            "Can only find this if you want to.",
            "An optical illusion",
            "A long forgotten place.",
            "A cave system with strange creatures",
            "It is always storming near",
            "People come to remember those lost to time.",
            "A place to come to wish for great things"
        ],
        complications: [
            "The crystals emit a disorienting energy.",
            "The forge is guarded by a fire elemental.",
            "The bridge is unstable and prone to collapsing.",
            "The Rocs will protect their territory",
            "The dragon is fiercely protective and greedy.",
            "Animate skeletons",
            "You will be struck by lightning",
            "The golems test you and kill you",
            "You can get lost forever",
            "Storms of past are relived.",
            "Everything is at random",
            "Eagles can carry you off",
            "All are cursed.",
            "A demon is bound there and will trick you."
        ]
    }
},
swamp: {
    mundane: {
        names: [
            "Muddy Bank",
            "Cypress Grove",
            "Hanging Moss",
            "Old Boat",
            "Gator Nest",
            "Quicksand Pit",
            "Spanish Moss Bridge",
            "Smuggler's Shack",
            "Stagnant Pool",
            "Firefly Meadow",
            "Fungal Rot",
            "Crocodile Nesting Ground",
            "Ghost Orchid Patch",
            "Half-Sunken Rowboat"
        ],
        descriptions: [
            "The murky water is black as ink.",
            "Cypress Trees full of roots are old and gnarled",
            "Moss dangles thick like curtains, obscuring everything.",
            "A broken ship sits sinking into the swamp.",
            "Filled with gator eggs",
            "Where the ground turns to goo.",
            "Strands of it form a bridge you might be able to cross.",
            "A barely visible shack is barely there and falling apart",
            "The still water is a breeding ground.",
            "A glade where fireflies dance.",
            "Plants are growing",
            "A place where many nest",
            "Strange beautiful flowers here.",
            "Barely visable but it still floats"
        ],
        complications: [
            "Hungry gators.",
            "The trees move slowly",
            "The moss causes hallucinations",
            "It summons snakes",
            "The queen gator attacks.",
            "It will swallow you.",
            "It might break any minute.",
            "A hag lives here",
            "It summons demons",
            "Vampires are there.",
            "Undead grow near",
            "Everything gets very loud.",
            "The spores will infect you and grow",
            "The boat may summon monsters or be haunted",
            "They are protected and you get hurt more often.",
            ]
        },
    fantastic: {
        names: [
            "Lizard King's Throne",
            "Will-o-wisp Nest",
            "Floating Hut",
            "Vortex Bloom",
            "The Sunken Ziggurat",
            "Hydra's Lair",
            "The Mire of Lost Souls",
            "Circle of Standing Stones",
            "The Whispering Reeds",
            "The Grotto of Glowing Fungus",
            "Serpent's Skull Isle",
            "The Bone Orchard",
            "Altar of the Drowned God",
            "Bog Mother's Bog"
        ],
        descriptions: [
            "A seat of power claimed by an ancient lizard king",
            "Orbs of light dance as you walk closer.",
            "Hidden deep in the swamp, held afloat by magic.",
            "It is said to connect other words. - You are transported, you are healed, it will give water.",
            "Steps lead down into dark waters",
            "Full of many heads and they eat well",
            "The sounds of suffering come from here.",
            "These stones are all to big and they hum",
            "They seem to have some form of communication.",
            "It may be poisonous but it looks so nice.",
            "Teeth and bone are the stone you walk on",
            "Trees bear fruit of bones and not fruit",
            "Everything here wants you dead.",
            "A mother protects this space"
        ],
        complications: [
            "He is not friendly",
            "They are hungry.",
            "Anyone who enters never comes out.",
            "It teleports you into the earth.",
            "Undead gaurd it.",
            "Cut off one head, two more grow",
            "Souls will attack and try to consume you.",
            "The stones can drive you mad",
            "There are hidden Lizardfolk",
            "The toxins and mushrooms can kill you if you are not careful",
            "You will be eaten alive",
            "They scream and yell all the time.",
            "It has not been nice to those who have defiled it.",
            "She eats well and is terrible"
        ]
    }
},
arctic: {
        mundane: {
            names: [
                "Icy Cave",
                "Frozen Corpse",
                "Sealed Vault",
                "Sleet Storm",
                "Aurora Borealis",
                "Glacier Crevasse",
                "Abandoned Research Station",
                "Snowdrift Maze",
                "Hidden Hot Spring",
                "Whale Graveyard",
                "Migration Trail",
                "Ominous Black Ice",
                "Frozen Waterfall",
                "Ancient Cairn"
            ],
            descriptions: [
                "The icy cave is the source of fresh water",
                "You can make out his face and he looks to be in pain",
                "The door is cracked open just enough to see inside",
                "White out conditions",
                "A beautiful sky dance",
                "A deep hidden hole",
                "Lights flicker on and off for some reason",
                "Snow walls block the wind here",
                "A break in the ice shows warm waters",
                "Home to thousands of long dead whales",
                "This route goes on for miles and miles",
                "A dark patch to avoid",
                "A permenantly frozen lake",
                "It has an evil aura"
            ],
            complications: [
                "It is guarded by a worm.",
                "He comes back to life.",
                "It holds something terrible.",
                "It causes frostbite.",
                "It makes you dance until you die",
                "It leads to the center of the earth",
                "There are terrible experiments",
                "You can get lost easily",
                "All the water comes to life",
                "They curse those who walk on it",
                "Creatures with follow",
                "It will drag you down",
                "There is something lost inside",
                "Storms will come and they will make you lost",
                "The stones whisper to you"
            ]
        },
    fantastic: {
        names: [
            "Frozen Dragon",
            "Windigo Nest",
            "Ice Fortress",
            "Snow Angel Grave",
            "The Mirror Glacier",
            "City of Crystalline Spires",
            "Heart of the Frost Giant",
            "The Auroral Veil",
            "The Well of Winter's Tears",
            "Frost Lich's Ziggurat",
            "The Shambling Iceberg",
            "The Cave of Shivering Souls",
            "Ymir's Thumb",
            "Gate to the Ice Plane"
        ],
        descriptions: [
            "The scales glisten in the blue ice.",
            "This is where they are born.",
            "Only the wind howls here.",
            "A beautiful grave covered in wind blown snow",
            "The ice creates illusions",
            "It glistens and glimmers",
            "The ground here is always cold and it emits energy",
            "The light changes based on the people near",
            "The water heals any wounds",
            "He may come back to life",
            "A large iceberg walks.",
            "Home to souls",
            "A long pillar on the horizion.",
            "A doorway that takes you somewhere else"
        ],
        complications: [
            "It might come back to life.",
            "They are starving and see you as food",
            "It keeps moving and crushing things.",
            "It has a hypnotic power.",
            "It will trap you forever",
            "Creatures will take you",
            "Giants come to protect it",
            "It shows lies of what you wish.",
            "The heat is taken.",
            "A storm happens and he revives",
            "It eats ice.",
            "The souls want to latch on",
            "If it falls the world will end",
            "It drains all warmth"
        ]
    }
},
desert: {
    mundane: {
        names: [
            "Scorpion Den",
            "Hidden Oasis",
            "Sandstorm",
            "Cactus Garden",
            "Canyon Pass",
            "Dry Riverbed",
            "Old Bandit Camp",
            "Mirage Lake",
            "Dust Devil Swirl",
            "Ancient Ruins",
            "Trading Post",
            "Forgotten Well",
            "Terracotta Pillars",
            "Sun Bleached Oasis",
            "The Lonely Grave"
        ],
        descriptions: [
            "Scorpions swarm around as you get closer.",
            "A pocket of relief from the harsh desert",
            "The visibility is zero.",
            "Prickly flowers line this location",
            "Rock walls line the canyon pass",
            "Bone fragments lay here",
            "The wind howls",
            "The heat radiates everywhere",
            "You can get turned around quick",
            "It is easy to get lost",
            "Strange creatures stop here.",
            "Old ruins of a town.",
            "It's still working.",
            "These support the world",
            "You're not sure where you're going",
            "Its hard to see but you are being watched."
        ],
        complications: [
            "Their poison can knock out a horse",
            "The water is all but gone.",
            "You can easily get lost or separated.",
            "The flowers cause hallucinations",
            "The roof may come crashing down",
            "It can cause sickness",
            "The sand may claim what belongs to you",
            "The people may betray you.",
            "Sand may turn into quicksand",
            "A monster attacks from above",
            "Spirits wander",
            "There is never anything good to trade.",
            "You can drown",
            "A tornado may arise",
            "They may come back and attack",
            "There is no one here only you."
        ]
    },
    fantastic: {
        names: [
            "Obelisk of Thirst",
            "Sand Kraken Grave",
            "Crystal Scarab Mound",
            "Quicksand Whirlpool",
            "The Oasis of Whispering Palms",
            "The Djinn's Prison",
            "The Shifting Sands Bazaar",
            "The Sunken Pyramid of Akhet",
            "The Mirage Dragon's Hoard",
            "The Dune Sea Leviathan",
            "The Obsidian City of Night",
            "Bird Kin Nest",
            "Terracotta Giants",
            "Scorpion King's Tomb",
            "Living Fire"
        ],
        descriptions: [
            "It emits heat and you can feel its power",
            "The skeleton tells a horrible story",
            "They scuttle in and out of the sand.",
            "It appears out of nowhere and will swallow you",
            "Guarded by ghouls, the Oasis provides water that comes from the earth",
            "The creature does what it wants to you.",
            "It is a lie to take your soul.",
            "Long before anything existed was built.",
            "A fire dragon has fallen here.",
            "An ancient creature sleeps beneath.",
            "It comes out of nowhere and disappears.",
            "It keeps moving and changing."
        ],
        complications: [
            "It makes you incredibly thirsty and you start hallucinating",
            "It sends out a psionic message to flee.",
            "They can control the sand and the temperature.",
            "It is a portal to another world.",
            "The desert creatures will drain your mind and follow",
            "It has chains and it seems to want help to trick you",
            "All the water will make you forget.",
            "They will take your breath.",
            "Scarab monsters lay eggs in your ears.",
            "Scarab monsters lay eggs in your ears.",
            "Sand can be made out of the monsters",
            "Aarakocra steal you and fly away",
            "They will crush and kill",
            "There is no escape here."
        ]
    }
}
};



/* Trap Data
const mechanisms = [
    "Poison Dart Trap", "Pit Trap", "Falling Block Trap", "Swinging Blade Trap", "Net Trap",
    "Alarm Trap (Summons Guards)", "Glyph of Warding (Magic Blast)", "Pressure Plate Triggered Acid Spray", "False Floor Collapse", "Locking Door Trap",
    "Rolling Boulder Trap", "Teleportation Trap (to a dangerous area)", "Ceiling Collapse", "Wall Scythe Trap", "Electrified Floor",
    "Freezing Mist", "Flamethrower Trap", "Spiked Walls", "Hypnotic Pattern", "Summoning Trap (Minor Elemental)",
    "Rust Gas Cloud", "Binding Chains", "Reverse Gravity Field", "Dust Cloud (Blinding)", "Sonic Resonance", "Entangling Roots",
    "Grease Trap", "Sticky Goo Shooter", "Symbol of Pain", "Symbol of Fear", "Symbol of Hopelessness", "Hallucinogenic Gas",
    "Animating Armor", "Magic Missile Barrage", "Fireball Trap", "Lightning Bolt Trap", "Cone of Cold Trap", "Sleep Gas",
    "Stinking Cloud", "Web Trap", "Black Tentacles", "Gust of Wind (Pushing)", "Darkness Sphere", "Silence Field",
    "Mirror Image Illusion", "Phantasmal Killer", "Otto's Irresistible Dance", "Maze Spell", "Imprisonment (brief)", "Polymorph Trap",
    "Bestow Curse", "Feeblemind", "Insanity", "Dominate Person", "Geas/Quest", "Wish (Twisted)", "Delayed Blast Fireball",
    "Earthquake (localized)", "Control Weather (dangerous effect)", "Binding", "Plane Shift (random location)", "Power Word Kill (unlikely)",
    "Temporal Stasis", "Trap the Soul", "Astral Projection (uncontrolled)", "Mind Blank (backwards)", "Prismatic Spray", "Prismatic Wall"
];

const consequences = [
    "Minor poison damage and slowed movement", "Fall into a pit (moderate fall damage)", "Bludgeoning damage from falling rocks", "Slashing damage and potential bleeding", "Restrained and potentially suspended",
    "Alerts nearby enemies, combat ensues", "Moderate magical damage (type varies)", "Acid burns, dealing damage over time", "Fall into a lower level/room (potential for other dangers)", "Locked in a room, potentially with other dangers",
    "Crushing damage and potential for being knocked prone", "Teleported to a monster infested area", "Buried under rubble (suffocation risk)", "Severely injured by scythe blades", "Paralyzed by electrical shock",
    "Frozen solid for a short time", "Severe burns, potential for setting alight", "Impaled on spikes", "Confused and disoriented", "Minor elemental attacks",
    "Equipment rusts and degrades", "Bound and unable to move", "Fall upwards, hitting the ceiling", "Blinded for several rounds", "Deafened and disoriented", "Immobilized by roots",
    "Slipping and falling prone", "Covered in sticky goo, movement impaired", "Wracked with pain", "Overwhelmed with fear", "Overcome by despair", "Experiencing vivid hallucinations",
    "Animated armor attacks the party", "Hit by multiple magic missiles", "Enveloped in a fireball", "Struck by a lightning bolt", "Frosted with cold", "Fall asleep",
    "Nauseated and vomiting", "Entangled in webs", "Grappled by tentacles", "Pushed away from the trigger area", "Surrounded by darkness", "Unable to speak or cast spells",
    "Mirror Image Illusion", "Phantasmal Killer", "Otto's Irresistible Dance", "Maze Spell", "Imprisonment (brief)", "Transformed into an animal",
    "Cursed with misfortune", "Reduced intelligence", "Driven insane", "Compelled to obey commands", "Forced into a quest", "Granted a twisted wish", "Explosion of fire damage",
    "Ground shakes, difficult terrain", "Weather turns hostile", "Bound to a location", "Teleported to a random plane", "Instant death",
    "Frozen in time", "Soul trapped within an object", "Body left behind on the material plane", "Reverse effects of Mind Blank, rendering the target vulnerable", "Hit by a spray of colors, each with a different effect", "Trapped within a shifting wall of energy"
];

const tells = [
    "A barely visible pressure plate", "A loose stone in the floor", "A faint clicking sound", "Dust falling from the ceiling", "A strange pattern on the wall",
    "A magical aura (detectable with magic)", "A subtle change in air temperature", "A slight indentation in the floor", "A faint metallic smell", "A small hole in the wall",
    "A tripwire barely off the ground", "Uneven floor tiles", "Scratch marks on the floor", "Oily residue on the wall", "Faint electrical hum",
    "Sudden drop in temperature", "Smell of sulfur", "Blood stains on the floor", "Whispering voices", "Unnatural stillness",
    "Corrosion marks on metal", "Gleaming metal chains", "Objects floating slightly", "Foggy air", "High pitched whine", "Patches of dead vegetation",
    "Greasy patches on the floor", "Glistening substance", "Unusual symbol etched in the stone", "Distorted reflections", "Dark shadows", "Shimmering air",
    "Sounds of clanking metal", "Faint arcane energy", "Burn marks on the wall", "Charred remains", "Frost patterns", "Yawning sound",
    "Foul odor", "Silken threads", "Slithering sounds", "Draft of wind", "Total lack of light", "Complete silence",
    "Multiple mirror images", "Sense of impending doom", "Feeling of irresistible compulsion", "Maze-like architecture", "Feeling of being watched", "Animal tracks leading to the spot",
    "Dark stain seeping into the wall", "Muffled cries", "Gibbering voices", "Sense of being controlled", "Unusual dreams", "The air smells like ozone",
    "Glowing runes on the floor", "Tremors can be felt in the ground", "The wind is blowing in an unnatural way", "Glow in the dark", "The absence of gravity", "Silence falls"
];*/


const traps = {
    mundane: {
        mechanisms: [
            "Poison Dart Trap", "Pit Trap", "Falling Block Trap", "Swinging Blade Trap", "Net Trap", "Alarm Trap (Summons Guards)", "Pressure Plate Triggered Acid Spray", "False Floor Collapse", "Locking Door Trap", "Rolling Boulder Trap"
        ],
        consequences: [
            "Minor poison damage and slowed movement", "Fall into a pit (moderate fall damage)", "Bludgeoning damage from falling rocks", "Slashing damage and potential bleeding", "Restrained and potentially suspended", "Alerts nearby enemies, combat ensues", "Acid burns, dealing damage over time", "Fall into a lower level/room (potential for other dangers)", "Locked in a room, potentially with other dangers", "Crushing damage and potential for being knocked prone"
        ],
        tells: [
            "A barely visible pressure plate", "A loose stone in the floor", "Dust falling from the ceiling", "A faint clicking sound", "A strange pattern on the wall", "A subtle change in air temperature", "A slight indentation in the floor", "A faint metallic smell", "A small hole in the wall", "A tripwire barely off the ground"
        ],
        difficulties: [
            "Easy", "Medium", "Hard"
        ],
        senses: {
            "Touch": [
                "A slight pressure underfoot signals the danger.",
                "The hair on the back of your neck stands on end." ,
                "There is a distinct lack of air, like something is sucking it away"
            ],
            "Sight": [
                "A faint discoloration on the floor betrays the trap.",
                "There is a strange glint in the air." ,
                "A odd disortion to light catches your attention"
            ],
            "Sound": [
                "A high pitched almost muted whine.",
                "You can barely hear a scraping noise",
                "A faint click echos"
            ],
            "Smell": [
                "An ozone smell that may be a signal for danger",
                "You start to smell your death",
                "There is a smell of poison"
            ],
            "Taste": [
                "A distinct metallic taste on the tongue betrays it is poisonous",
                "If you eat this you will die",
                "Everything is a lie"
            ]
        }
    },
    fantastic: {
        mechanisms: [
            "Teleportation Trap", "Ceiling Collapse", "Wall Scythe Trap", "Electrified Floor", "Freezing Mist", "Flamethrower Trap", "Spiked Walls", "Hypnotic Pattern", "Summoning Trap (Minor Elemental)", "Rust Gas Cloud", "Binding Chains", "Reverse Gravity Field", "Dust Cloud (Blinding)", "Sonic Resonance", "Mirror Image Illusion", "Phantasmal Killer", "Otto's Irresistible Dance", "Maze Spell", "Imprisonment (brief)", "Polymorph Trap"
        ],
        consequences: [
            "The area around shifts and you're somewhere else", "The walls shake", "Razor thin scythes coming from the walls", "You get a terrible shock", "It creates a fog and everything goes numb", "The room catches fire", "The spikes may make you stay.", "Everything looks off and you forget things.", "A small creature now fights for the room", "All metal rust", "You are caught", "You fall up", "You can no longer see", "Everything hurts", "Things are not what they seem", "Horrible visions appear", "You are dancing and don't remember anything", "The room shifts and changes before your very eyes", "You are no longer yourself", "You are now a animal"
        ],
        tells: [
            "Glowing runes on the floor", "Tremors can be felt in the ground", "The wind is blowing in an unnatural way", "Glow in the dark", "The absence of gravity", "Sounds of clanking metal", "Faint arcane energy", "Burn marks on the wall", "Charred remains", "Frost patterns", "Yawning sound", "Foul odor", "Silken threads", "Slithering sounds", "Multiple mirror images", "Sense of impending doom", "Feeling of irresistible compulsion", "Maze-like architecture", "Feeling of being watched", "Animal tracks leading to the spot"
        ],
        difficulties: [
            "Easy", "Medium", "Hard", "Very Hard", "Impossible"
        ],
        senses: {
            "Smell": [
                "A faint odor of ozone precedes the attack.",
                "The air smells of death." ,
                "Roses and Violets are present."
            ],
            "Sight": [
                "The air shimmers with an unnatural light.",
                "Everyhing seems to be still",
                "Things seem too perfect"
            ],
            "Sound": [
                "A high-pitched whine fills the air.",
                "There is laughter in the background",
                "The wind seems to be singing"
            ],
            "Touch": [
                "A tingling sensation spreads across your skin.",
                "There is a static in the air",
                "It feels like you are covered in hair"
            ],
            "Taste": [
                "A metallic taste floods your mouth",
                "There is nothing that can hydrate you",
                "Everything taste delicious"
            ],
             "Psionic": [
                "A feeling of sadness covers you",
                "There is a sudden feeling of joy",
                "What you should do is clear"
            ],
             "Magic": [
                "Magic dances and moves around the room",
                "Everything is fading",
                "All light is being drained"
            ]
        }
    }
};

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

// Party Bonds Data Jezter
const charactersAre = [
    ["Family members", "Professional rivals", "Settlers", "Displaced nobility", "Unwitting pawns", "Bounty Hunters"],
    ["Explorers / Dungeon Delvers", "hired guns", "City Watch Members", "Children of famous parents", "Bitter enemies", "Smugglers"],
    ["followers of a religion", "A cult", "Soldiers", "Spies", "Societal outcasts", "Game wardens"],
    ["from the same location", "Traveling entertainers", "Former soldiers", "Investigators", "Scribes / Documentarians", "Wilderness Guides"],
    ["of the same profession", "Con artists", "Refugees", "Rebels / Resistance", "Bodyguards", "Collectors"],
    ["of the same background", "fugitives", "Students/Mentor", "Disgraced heroes", "Monster Hunters", "Cartographers"]
];

const boundTogetherBy = [
    ["a secret they must keep", "a shared destiny"],
    ["an unfortunate mix-up", "a shared struggle"],
    ["a shared tragic experience", "a shared treasure map"],
    ["a common enemy", "a common desire"],
    ["a common patron", "mysterious visions"],
    ["a shared belief", "mutual malady"]
];

const whoAre = [
    ["defending a location", "out for revenge", "exploring a new area", "caught in the middle", "resurrecting a deceased ally", "documenting the present"],
    ["looking for a lost person", "seeking wealth", "righting a wrong", "waging war", "transporting something", "trying to escape"],
    ["seeking a powerful artifact", "investigating a mystery", "raising awareness", "restoring reputations", "stopping a ritual", "fighting ancient evil"],
    ["joining a faction", "protecting a person", "fighting corruption", "trying to survive", "performing a ritual", "the bad guys"],
    ["infiltrating another faction", "finding a lost location", "seeking justice", "building a faction", "exposing secrets", "restoring order"],
    ["looking for answers", "wanting fame", "hiding from authority", "preparing for war", "researching history", "keeping secrets"]
];

const andBattle = [
    ["undead", "political foes", "fey", "cultists", "snake people", "ogres"],
    ["beasts", "elementals", "constructs", "rival adventurers", "vampires", "trolls"],
    ["an army", "Hon-humanoid monsters", "plants", "law enforcement", "mushroom people", "skeletons"],
    ["powerful magic", "criminals", "swarms", "other factions", "kobolds", "zombies"],
    ["the environment", "humanoid monsters", "Oozes / jellies", "lizard folk", "orcs", "a lich or two"],
    ["celestial beings", "fiends", "dragons", "goblinoids", "giants", "incorporeal"]
];

const whoAreTryingTo = [
    ["Find an object", "gain immortality", "find love", "escape a prophecy", "obtain enlightenment", "escape this reality"],
    ["resurrect a god or avatar", "gain immeasurable wealth", "protect a loved one", "hiding the truth", "resurrect an extinct species", "eliminate knowledge"],
    ["Find a person", "cause chaos", "do good things the wrong way", "erasing the past", "preserve their species", "end fun"],
    ["control people", "cause cataclysm", "build a machine", "destroy a location", "destroy an object", "find a student / protege"],
    ["control land", "fulfill a prophecy", "merge multiple realities", "destroy a region", "destroy a person", "merge dimensions"],
    ["gain fame", "destroy a faction", "end their own immortality", "destroy magic", "destroy an environment", "transform into something else"]
];

// Monster Data Tables
const monsterType = [
    "Insectoid", "Fungoid", "Amphibian", "Avian", "Crustacean", "Mammalian",
    "Reptilian", "Aberrant", "Construct", "Aquatic", "Humanoid", "Roll Twice Combine"
];

const monsterSize = [
    "Diminutive - Grain of Sand", "Tiny - Mouse", "Small - Dog", "Medium - Human", "Large - Ogre", "Huge - Adult Dragon or Larger"
];

const monsterNumberAppearing = [
    "Solitary - The creature is encountered alone but is not the last of its kind.",
    "Paired - Two of these creatures are encountered together, likely a mated pair or siblings, working together. They will likely act in concert.",
    "Small Group - A small group (3-5) of these creatures is encountered.",
    "Swarm - A large, chaotic group (6-12) of creatures is encountered. The swarm may be moving erratically and the individual parts may move together or separately.",
    "Pack - These creatures are in a coordinated group (4-6), working together as a pack. They may have a designated leader and act with calculated movements.",
    "Last of its Kind - This one particular creature appears as a singular entity.  There are no others. A Legendary Beast."
];

const monsterDemeanor = [
    "Ferocious", "Aloof", "Territorial", "Submissive", "Predatory", "Curious",
    "Cautious", "Playful", "Skittish", "Mischievous", "Docile", "Roll Twice Combine"
];

const monsterLimbs = [
    "0 or 1 - No limbs or a single main limb.", "2 - Two main limbs or a pair.",
    "4 - Four limbs, or two pairs.", "6 - Six limbs or appendages, a trio of pairs.",
    "8 - Eight limbs, or 4 pairs.", "Variable - Roll Twice"
];

const monsterAppendages = [
    "Spikes", "Slime", "Pectoral Fins", "Wings", "Segmented", "Retracting",
    "Loping", "Clawed Limbs", "Pectoral Limbs", "Gliding Membrane", "Stubby", "Membranes",
    "Hooved", "Tentacles", "Suckers", "Powered Legs", "Probes", "Barbed",
    "Padded", "Slithering", "Webbed", "Flippers", "Crutch-Like", "Jets",
    "Climbing", "Hulking Limbs", "Grasping", "Multi-Jointed", "Stilted", "Hovering",
    "Digging", "Sliding", "Treaded", "Powered Wings", "Wheel-like", "Balled"
];

const monsterAttackDefense = [
    "Bite", "Claw", "Ramming", "Constriction", "Spit", "Stomp",
    "Fangs", "Pincer", "Tusks", "Barbs", "Tail Lash", "Venomous Bite",
    "Spikes", "Grasping", "Crushing", "Sting", "Latching", "Scythes",
    "Acidic Spit", "Laceration", "Entangling", "Shredding", "Probing", "Bellowing",
    "Spit Poison", "Screeching", "Chomping", "Sonic Attack", "Explosive Blast", "Magnetic Field",
    "Suckers", "Grappling", "Ramming", "Electric Touch", "Magical Energy", "Psionics"
];

const monsterMarkingsColors = [
    "Camouflaged", "Striped", "Spotted", "Plaid", "Metallic", "Bioluminescent",
    "Earth Tones", "Vibrant", "Mottled", "Prismatic", "Neon", "Crystalline",
    "Metallic", "Pastel", "Dark", "Bi-Colored", "Translucent", "Shimmering",
    "Opaque", "Marbled", "Light", "Variegated", "Glossy", "Textured",
    "Ombre", "Patterned", "Skeletal", "Striped", "Gradient", "Matted",
    "Solid Color", "Shaded", "Glowing", "Speckled", "Chitinous", "Patchy"
];

const monsterOdditiesFeatures = [
    "Bioluminescence", "Extra Eyes", "Prehensile Tail", "Echolocation", "Acidic Blood", "Detachable Limbs",
    "Camouflaging", "Poison Barbs", "Webbing", "Heat Vision", "Sonic Blast", "Gaseous Form",
    "Mimicry", "Regeneration", "Multiple Mouths", "Psychic", "Teleportation", "Spit Fire",
    "Electric Charge", "Armored Shell", "Venomous Bite", "Hypnotic Gaze", "Burrowing Claws", "Swarms",
    "Translucency", "Constricting Body", "Flight", "Amphibious", "Magnetic", "Long Tongue",
    "Chitinous Plates", "Detachable Limbs", "Bone Spikes", "Invisibility", "Burrowing", "Stone Skin"
];

// Path Events Data
const pathEvents = {
    forest: {
        major: [
            { event: "Friendly Ranger", details: "A ranger offers directions, supplies, and warnings." },
            { event: "Hidden Spring", details: "Find a clear spring. Gain a temporary bonus to healing." },
            { event: "Bountiful Berry Patch", details: "Gather enough berries for a day's rations." },
            { event: "Abandoned Picnic", details: "Discover a forgotten feast (check for spoilage!)." },
            { event: "Sun-Dappled Clearing", details: "The clearing is relaxing." },
            { event: "Clear stream", details: "You can fill your flask!" },
            { event: "Friendly deer", details: "A new companion. Can you befriend it?" },
            { event: "Sun-Dappled Clearing", details: "Take a good look at this peaceful grove." },
        ],
        minor: [
            { event: "Overgrown Path", details: "The trail is nearly invisible; navigation check needed." },
            { event: "Fallen Tree", details: "Requires some skill to traverse." },
            { event: "Shifting Ground", details: "You take damage" },
            { event: "Spiderweb Crossing", details: "A tree is full of spiders. It's dangerous" },
            { event: "Bog", details: "You come close to sinking "},
            { event: "Lost", details: "Take another path."},
            { event: "Poison", details: "Did you touch it?"},
            { event: "Thick Mud", details: "You fall in."},
        ],
        rough: [
            { event: "Bandit Ambush", details: "Crossbowmen fire from the trees." },
            { event: "Wounded Beast", details: "A wounded wolf snarls, ready to defend itself." },
            { event: "Collapsing Bridge", details: "Make a reflex save to survive!" },
            { event: "Treacherous Bog", details: "The ground crumbles and eats everything around." },
            { event: "Vampires", details: "There isn't much to do, just run!" },
            { event: "Fairy circles", details: "Try not to step inside." },
            { event: "Poison Ivy", details: "You are now blind" },
            { event: "Something bad happened", details: "Your gear vanishes" },
        ]
    },
    plains: {
        major: [
           { event: "Traveling Merchant", details: "A merchant offers wares, information, and a chance to resupply." },
            { event: "Roadside Shrine", details: "A small shrine offers a place to rest and receive blessings." },
            { event: "Patrolling Guards", details: "A group of guards asks for identification and offers protection." },
            { event: "Lost Traveler", details: "A lost traveler seeks directions to the nearest town." },
            { event: "Friendly K9", details: "A dog who seems to help"},
            { event: "Find Food", details: "You found a berry or something edible!" },
            { event: "Clear Sky", details: "The weather is nice" },
            { event: "Wildife can be found.", details: "There are creatures to capture and tame " },
            { event: "Nothing", details: "There are no events to find today." },
        ],
        minor: [
           { event: "Traveling Merchant", details: "A merchant offers wares, information, and a chance to resupply." },
            { event: "Roadside Shrine", details: "A small shrine offers a place to rest and receive blessings." },
            { event: "Patrolling Guards", details: "A group of guards asks for identification and offers protection." },
            { event: "Lost Traveler", details: "A lost traveler seeks directions to the nearest town." },
            { event: "Wild Dog", details: "A wild animal approaches."},
            { event: "Find Food", details: "You found a berry or something edible!" },
            { event: "Clear Sky", details: "The weather is nice" },
            { event: "Wildife can be found.", details: "There are creatures to capture and tame " },
            { event: "Nothing", details: "There are no events to find today." },
       ],
        rough: [
           { event: "Traveling Merchant", details: "A merchant offers wares, information, and a chance to resupply." },
            { event: "Roadside Shrine", details: "A small shrine offers a place to rest and receive blessings." },
            { event: "Patrolling Guards", details: "A group of guards asks for identification and offers protection." },
            { event: "Lost Traveler", details: "A lost traveler seeks directions to the nearest town." },
            { event: "Big worm", details: "It comes to the surface as a sign."},
            { event: "Find Food", details: "You found a berry or something edible!" },
            { event: "Clear Sky", details: "The weather is nice" },
            { event: "Wildife can be found.", details: "There are creatures to capture and tame " },
            { event: "Nothing", details: "There are no events to find today." },
]
    },
    mountains: {
        major: [
           { event: "Traveling Merchant", details: "A merchant offers wares, information, and a chance to resupply." },
            { event: "Roadside Shrine", details: "A small shrine offers a place to rest and receive blessings." },
            { event: "Patrolling Guards", details: "A group of guards asks for identification and offers protection." },
            { event: "Lost Traveler", details: "A lost traveler seeks directions to the nearest town." },
            ["Clear Sky", "This is a wonderful day"],
            { event: "Find Food", details: "You found a berry or something edible!" },
            { event: "Clear Sky", details: "The weather is nice" },
            { event: "Wildife can be found.", details: "There are creatures to capture and tame " },
            { event: "Nothing", details: "There are no events to find today." },
],
        minor: [
         { event: "Traveling Merchant", details: "A merchant offers wares, information, and a chance to resupply." },
            { event: "Roadside Shrine", details: "A small shrine offers a place to rest and receive blessings." },
            { event: "Patrolling Guards", details: "A group of guards asks for identification and offers protection." },
            { event: "Lost Traveler", details: "A lost traveler seeks directions to the nearest town." },
            { event: "Find Food", details: "You found a berry or something edible!" },
            { event: "Clear Sky", details: "The weather is nice" },
            { event: "Wildife can be found.", details: "There are creatures to hunt, capture and tame " },
            { event: "Nothing", details: "There are no events to find today." },
],
        rough: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ]
    },
    swamp: {
        major: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ],
        minor: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "They are glowing."},
        ],
        rough: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "It is more a spore." },
        ]
    },
    arctic: {
        major: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ],
        minor: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ],
        rough: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ]
    },
    desert: {
        major: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ],
        minor: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ],
        rough: [
            { event: "Bandit Ambush", details: "Bandits lie in wait, ready to attack from the undergrowth." },
            { event: "Monster Tracks", details: "Large, clawed prints suggest a dangerous beast nearby." },
            { event: "Collapsing Bridge", details: "A rickety bridge begins to crumble as you cross it." },
            { event: "Poisonous Plants", details: "The path is lined with dangerous plants that inflict poison." },
        ]
    }
};



// Loot Data
const lootData = {
    minor: {
        tangibles: [
            { item: "Silver Brooch", details: "A small, elegant brooch worth a few coins; could be sold or worn." },
            { item: "Exotic Canary", details: "A brightly colored bird in a cage. Its song is cheerful, but it needs care." },
            { item: "Detailed Road Map", details: "Shows nearby landmarks; may be slightly out-of-date." },
            { item: "Fine Wool Blanket", details: "Provides warmth on cold nights. Snug and comfy." },
            { item: "Set of Carving Tools", details: "Well-maintained tools for woodworking." },
            { item: "Unusual Seed", details: "A small, stone-like seed. What could it make?" },
            { item: "Potion of Slumber", details: "Induces a brief, restful sleep. But the dreams..." },
            { item: "Two Gold Teeth", details: "Removed from a corpse; morbid but valuable." },
            { item: "Fashionable Silk Hat", details: "A stylish hat that improves social interactions a bit." },
            { item: "Scruffy Dog", details: "Loyal, if a bit smelly; will follow you everywhere." },
            { item: "Beaded Bracelet", details: "Made of bone and sinew with a tribal pattern." },
            { item: "Flask of Fine Ink", details: "A small flask of very high quality ink. Scribes will love you" },
            { item: "Smoked Meat (ration)", details: "A ration of dried meat, preserved and tough." },
            { item: "Small Dagger", details: "Small enough to be hidden, but deadly to use" },
            { item: "Ripe Apple", details: "Nothing special or strange to see here." },
            { item: "Silver Comb", details: "Keeps your hair shiny." },
            { item: "silver Whistle", details: "Can only summon some animals."},
            { item: "A candle that burns and lights different colors", details: "What more can I say?"},
            { item: "Bag of Marbles", details: "Good for a distraction"},
            { item: "Rope with spikes", details: "A small rope you can carry for many uses." }
        ],
        intangibles: [
            { item: "Bard's Performance", details: "A wandering bard performs for you, lifting spirits." },
            { item: "Smith's Apprenticeship", details: "Watching the village smithy work grants a small bonus to forging for a limited time." },
            { item: "Pilgrim's Blessing", details: "A blessing for those who are at the temple" },
            { item: "Whispers on the breeze", details: "An omen to head in a specific direction." },
            { item: "Guide To a location", details: "Now you know where to go." },
            { item: "A day of peace", details: "Everything is clear, someone runs interference or owes a favor." },
            { item: "Food for the week", details: "There is enouugh to share"},
            { item: "Some healing from the temple", details: "The right plants and people to heal you!"}
        ],
        magic: [
            { item: "A Charmed Pebble", details: "This rock lets you float for a short time."},
            { item: "Potion of Healing", details: "Minor healing, can heal most ailments." },
            { item: "Simple Protection Ritual", details: "Wards off minor spirits for one night." },
             { item: "Whispers on the breeze", details: "An omen to head in a specific direction." },
            { item: "Light orb", details: "Keeps away the dark and the creatures therein" },
            { item: "A blessing from the gods", details: "Their presence protects you."},
            { item: "A plant of regeneration", details: "Harvest this wisely, it restores you."}
        ]
    },
    major: {
        tangibles: [
            { item: "Royal Signet Ring", details: "Confers authority in a small region. Use for intrigue or trade." },
            { item: "Spacious Estate Deed", details: "A modest manor in disrepair, but with fertile lands." },
            { item: "Shares in a Swift Sailing Ship", details: "Partial ownership; entitles you to a share of profits." },
             { item: "Map to a land", details: "The world is new and so are the rewards" },
            { item: "Gems", details: "Worth a lot"},
            { item: "A bag of holding", details: "The weight is not there."},
           { item: "A chest of bones", details: "What secrets are within!" },
            { item: "A Map of a kingdom", details: "Not only powerfull people want this." },
         { item: "Long boat with supplies", details: "Good for travels."}
        ],
        intangibles: [
            { item: "Hire Skilled People", details: "The aid of a skilled group, to accomplish something difficult but very rewarding" },
            { item: "Mercenary Squad", details: "A group of elite mercenaries" },
            { item: "Favor of a City Council", details: "Influence within a particular city's government." },
            { item: "Trade contract", details: "Can get your wares across the sea!" },
         { item: "The secrets of a town", details: "It knows what its protectors are doing. So do you!" },
          { item: "A blessing from the gods.", details: "They will look down on what you do."},
         { item: "The town is yours", details: "For better or worst what happens is up to you."}
        ],
        magic: [
            { item: "Advanced Arcana Tome", details: "Knowledge of powerful spells and forbidden magic." },
            { item: "Scroll of Greater Healing", details: "Restores a significant amount of health." },
            { item: "Greater Protection Ritual", details: "Wards off more powerful spirits and fey." },
            { item: "A pet that casts spells", details: "It learns and grows!"},
            { item: "A pet rock", details: "It loves you."},
            { item: "Scroll of Truth", details: "Now you know."}
        ]
    },
    mythic: {
        tangibles: [
            { item: "Celestial Crown", details: "Made of starlight, grants divine favor but may attract celestial attention." },
            { item: "Key to the Infinite Labyrinth", details: "Unlocks any door and opens passages to other realities." },
            { item: "The Stormreaver", details: "A warship forged from a storm; commands lightning and tempests." },
            { item: "Cosmic Cartographer's Quill", details: "Writes prophecies and maps unseen realms." },
            { item: "Seed of Unmaking", details: "Can end life. Use with great caution "},
            { item: "Pulsing Obsidian Heart", details: "Grants power over gravity and the earth." },
            { item: "Miniature Sun in a Bottle", details: "Provides warmth, light, and devastating fiery blasts." },
            { item: "Tears of the First Light", details: "They bless and give peace to the tormented" },
            { item: "Ankh of Immortality", details: "It must be activated with 7 ritual sacrifices." },
            { item: "Mirror of the Past", details: "Who did they see in it, I wonder?" },
            { item: "Blood of a god", details: "It turns your skin to steel, it turns your bones to ash" },
            { item: "Frozen Stars", details: "Crashes every day"},
            { item: "Those that you lost", details: "You see them every day."},
            { item: "A broken sword", details: "With all you can take the world."},
            { item: "Elixr of Life", details: "It echoes back with the voice of an old friend"},
            { item: "You will be here for", details: "I will end it and begin."},
            { item: "There is something you need to take", details: "Make haste"},
            { item: "Take that path", details: "It will test your faith"  },
            { item: "Follow that river", details: "What do you see"},
            { item: "To be the best what do you do?", details: "Kill them, they will say."},
            { item: "I am the best", details: "Just you"}
        ],
        intangibles: [
            { item: "Absolute Authority", details: "Unmatched influence across the world" },
            { item: "Legendary Army", details: "An elite force, utterly loyal." },
            { item: "Support from beyond", details: "Those that may grant you power." },
             { item: "The keys to a kingdom", details: "The most powerful do your bidding"},
             { item: "A legion of the dead", details: "The bones shake and break to your cause"}

        ],
        magic: [
            { item: "Forgotten Arcana", details: "This gives you new levels of control." },
            { item: "Control All", details: "Those who can do it are remembered"},
            { item: "A demon and what it offers", details: "It desires souls"},
   { item: "All that is dark is now yours", details: "The old gods are scared"},
  { item: "A method to change it all", details: "Be careful"},
             { item: "A pet that gives insight", details: "You can't ever get rid of it."},
             { item: "A god.", details: "They may help."},
 { item: "A method to destroy", details: "Only the best can be trusted with that."}
        ]
    }
};

// Vibe Check Table
const vibeCheckTable = [
    "Vibes feeling off…", "Low-Key Sus", "Moderately Sketch", "Majorly Sus", "BIG Red Flag", "THIS IS FINE. EVERYTHING IS FINE.",
    "Everything’s fine…Seriously :)", "Hmm, Something's Off", "A Bit Dodgy", "Sus, No Cap Fam", "Oh this ain’t good.", "Nope. Just Nope",
    "Feels Off", "Smells Fishy", "Definitely Sketchy", "Sus AF. Srsly", "Not again….", "Hard Fucking Pass Champ",
    "Maybe a Bit Strange", "Suspiciously Normal", "Pretty Sus", "Sus. Very, Very  Sus.", "Don't Trust It. PERIOD.", "Sigh. This isn’t ending well.",
    "Something is Up", "Sketchy Vibes", "Highly Questionable", "Big Chungus level of Sussy ", "Definitely a Trap", "Oh hell no!",
    "Could Be Coincidence", "Shady AF", "It's Giving….Weird Vibes…uh oh", "Giving Major Sus", "Alarm Bells Ringing ", "Bail Out, Abort! Abort!",
    "Probably Nothing", "Not Gonna Lie, Sus", "I’m Getting a Bad Feeling", "Sus 2.0 electric boogaloo", "Full On Red alert.", "Fuck no. FUCK NO!!!"
];

    

