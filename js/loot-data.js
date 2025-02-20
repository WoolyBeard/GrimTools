


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
            { item: "Bag of Marbles", details: "Good for a distraction"},
            { item: "Rope with spikes", details: "A small rope you can carry for many uses." },
            { item: "Navigator’s Satchel", details: "A worn leather bag filled with maps to places that no longer exist—or so they say." },
            { item: "Golden Chalice", details: "Once used in royal courts, it now has the faint odor of aged wine, but carries a quiet weight of history." },
            { item: "Worn Tapestry", details: "A heavy, embroidered cloth depicting a battle long past—its true significance is lost to time." },
            { item: "Cursed Goblet", details: "A beautifully crafted goblet, dented and stained, but those who drink from it are cursed with vivid, haunting dreams." },
            { item: "Ironbound Tome", details: "A dusty book of old laws and forgotten rules—its pages are brittle, and its wisdom outdated." },
            { item: "Sailor’s Compass", details: "An old and rusted compass that always points toward the horizon, though it’s unclear what it’s guiding you to." },
            { item: "Viking Horn", details: "Once a call to battle, now a memento of war—but the sound it makes is hollow and distant." },
            { item: "Desert Wanderer’s Boots", details: "Well-worn and cracked, these boots are perfect for long travels, though they’re uncomfortable after a week’s use." },
            { item: "Bandolier of Curiosities", details: "A collection of strange trinkets and strange tools, each one holding a personal, mysterious history." },
            { item: "Fossilized Skull", details: "A relic from an ancient beast—its teeth sharp and weathered, the skull slightly too large to be practical as a trophy." }
        ],
        intangibles: [
            { item: "Bard's Performance", details: "A wandering bard performs for you, lifting spirits." },
            { item: "Smith's Apprenticeship", details: "Watching the village smithy work grants a small bonus to forging for a limited time." },
            { item: "Pilgrim's Blessing", details: "A blessing for those who are at the temple" },
            { item: "Whispers on the breeze", details: "An omen to head in a specific direction." },
            { item: "Guide To a location", details: "Now you know where to go." },
            { item: "A day of peace", details: "Everything is clear, someone runs interference or owes a favor." },
            { item: "A blessing from a priest", details: "Their presence protects you."},
            { item: "A favor for a week offered by a local establishment", details: "They really appreciate what you have done"},
            { item: "Some healing from the temple", details: "The right plants and people to heal you!"}
        ],
        magic: [
            { item: "A Charmed Pebble", details: "This rock lets you float for a short time."},
            { item: "A candle that burns and lights different colors", details: "What more can I say?"},
            { item: "Potion of Healing", details: "Minor healing, can heal most ailments." },
            { item: "Simple Protection Ritual", details: "Wards off minor spirits for one night." },
            { item: "Light orb", details: "Keeps away the dark and the creatures therein but fizzles out occasionally" },
            { item: "A magical plant of regeneration", details: "Harvest this wisely, it restores you."},
            { item: "Whispering Stone", details: "A stone that murmurs secrets, though they’re often more confusing than helpful." },
            { item: "Cursed Coin", details: "Grants one small request, but the price is always something you didn’t expect." },
            { item: "Wand of Misfire", details: "It casts spells at random, but rarely with the desired result. Will explode" },
            { item: "Everlast Flask", details: "Always full of water, but it tastes like dust and regret." },
            { item: "Dust of Discomfort", details: "Makes everyone sneeze, a mild annoyance that lingers longer than you’d like." },
            { item: "Echoing Bell", details: "Rings with an eerie tone that attracts more attention than you want." },
            { item: "Timeless Band", details: "halfs aging but, but makes everything around you seem to speed up, it actually just makes you move in slow motion." },
            { item: "Moonlit Mirror", details: "Reflects only what hides in the dark, showing things you’d rather forget." },
            { item: "Frozen Locket", details: "Freezes small objects briefly, but always brings a gust of cold wind when opened." },
        ]
    },
    major: {
        tangibles: [
            { item: "Royal Signet Ring", details: "Grants authority, but also attracts unwanted scheming." },
            { item: "Spacious Estate Deed", details: "A crumbling manor with potential—if you can restore it." },
            { item: "Shares in a Swift Sailing Ship", details: "Partial ownership, with a steady stream of profits and pirates." },
            { item: "Map to a Land", details: "A place untouched by time, where fortunes are made—and lost." },
            { item: "Gems", details: "A small fortune, but the real wealth lies in who you sell them to." },
            { item: "A Bag that Holds something special", details: "Light as air, but you’ll never know what’s inside until you reach in." },
            { item: "A Chest Filled with the Bones of a Saint", details: "A relic of old—its power is unknown, but not easily wielded." },
            { item: "A Map of a Kingdom", details: "A treasure to some, a curse to others; with power comes envy." },
            { item: "Long Boat with Supplies", details: "Ready for a long journey, but it’s a slow way to escape the desert." },
            { item: "Crown of the Fallen King", details: "A tarnished crown, heavy with the blood of a lost kingdom, its presence commands both reverence and fear." },
            { item: "Navigator’s Astrolabe", details: "An ancient, intricate instrument once used to chart the stars, now invaluable for charting the future—if you can understand its secrets." },
            { item: "Empress’ Scepter", details: "A regal scepter, worn from centuries of use, imbued with the authority of empires past, though its true power is a mystery." },
            { item: "Map of Forgotten Realms", details: "A hand-drawn map that details uncharted lands, the ink faded, but its promises of untold riches still intact." },
            { item: "Titan’s Helm", details: "An oversized, weathered helm once worn by a mighty warrior, too large for any mortal to wear, but its weight is a constant reminder of its power." },
            { item: "The Prince’s Banner", details: "A tattered, regal flag that once flew above a mighty army—its presence stirs loyalty, but also brings forth enemies seeking to reclaim it." },
            { item: "Scales of the High Judge", details: "A pair of finely crafted scales, used by a legendary lawmaker. They have the power to weigh a person’s soul, but they are not to be used lightly." },
            { item: "The Grand Telescope", details: "A masterwork telescope capable of seeing beyond the stars, yet its lens is clouded by the mysteries of the universe." },
            { item: "War Banner of the Eternal Legion", details: "A war banner that still flies in the hearts of those who seek conquest; it inspires those who follow, but burns those who hold it too long." },
            { item: "The Shipwright’s Blueprint", details: "A set of forgotten designs for a ship of legendary construction, said to be able to navigate both land and sea, though none have dared to complete it." }
        ],
        intangibles: [
            { item: "Hire Skilled People", details: "The aid of a skilled group, to accomplish something difficult but very rewarding" },
            { item: "Mercenary Squad", details: "A group of elite mercenaries" },
            { item: "Favor of a City Council", details: "Influence within a particular city's government." },
            { item: "Trade contract", details: "Can get your wares across the sea!" },
            { item: "The secrets of a town", details: "It knows what its protectors are doing. So do you!" },
            { item: "A blessing from the gods.", details: "They will look down on what you do."},
            { item: "The town is yours", details: "For better or worst what happens is up to you."},
            { item: "The Right to Rule", details: "A whispered promise, a title that cannot be contested, yet it’s hollow without the power to enforce it." }

         
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
            { item: "Tears of the First Light", details: "They bless and give peace to the tormented" },
            { item: "Ankh of Immortality", details: "It must be activated with 7 ritual sacrifices." },
            { item: "Mirror of the Past", details: "Who did they see in it, I wonder?" },
            { item: "Blood of a god", details: "It turns your skin to steel, it turns your bones to ash" },
            { item: "Frozen Stars", details: "Crashes every day"},
            { item: "Those that you lost", details: "You see them every day."},
            { item: "A broken sword", details: "With all you can take the world."}
  
        ],
        intangibles: [
            { item: "Absolute Authority", details: "Unmatched influence across the world" },
            { item: "A gods calling card.", details: "They may help."},
            { item: "Legendary Army", details: "An elite force, utterly loyal." },
            { item: "Support from beyond", details: "Those that may grant you power." },
            { item: "The keys to a kingdom", details: "The most powerful do your bidding"},
            { item: "A legion of the dead", details: "The bones shake and break to your cause"},
            { item: "Favor of a Lost Deity", details: "A long-forgotten god offers their blessing, but only to those who prove themselves worthy in ways that may never be clear." },
            { item: "A Pact with the Horizon", details: "A binding agreement with an ancient force—your path is forever aligned with distant shores, but you may never return home." },
            { item: "The Whisper of the Unseen", details: "An elusive truth, whispered in the dark. It holds knowledge of events yet to come, but it can never be fully understood." },
            { item: "The Blessing of the Eternal Dawn", details: "The light of a new day is yours to command—but only for those you deem worthy. The price is to never see true night again." },
            { item: "A Key to the Unspoken", details: "A secret to something older than civilization itself; it opens doors that no one dares approach." },
            { item: "A Promise of the Endless Road", details: "An agreement that binds your fate to a never-ending journey, with no hope of rest or return." },
            { item: "The Veil of Shadows", details: "A gift of anonymity, allowing you to move unseen, but the shadow that follows is never far behind." },
            { item: "The Voice of the Forgotten", details: "The power to speak for those lost to history, but only in riddles and fragments that others may never fully comprehend." },
            { item: "The Mark of Unbroken Loyalty", details: "A vow that binds you to another—unbreakable, yet a constant weight on your soul, demanding a price at every turn." }


        ],
        magic: [
            { item: "Forgotten Arcana", details: "This gives you new levels of control." },
            { item: "Elixr of Life", details: "It echoes back with the voice of an old friend"},
            { item: "Staff of Control All", details: "Those who can do it are remembered for their vile deeds"},
            { item: "A demon in a box and what it offers", details: "It desires souls"},
            { item: "Miniature Sun in a Bottle", details: "Provides warmth, light, and devastating fiery blasts." },
            { item: "A wish to change it all", details: "Be careful"},
            { item: "A magical pet that gives insight", details: "You can't ever get rid of it. but it will be your most valuable companion"},
            { item: "Crown of the Endless Night", details: "Grants dominion over darkness, but takes your sight in return." },
            { item: "The Devouring Stone", details: "A black stone that consumes magic, but grows heavier with each use." },
            { item: "Veil of the Forgotten Dream", details: "Allows you to peer into other’s dreams, but the nightmares may follow you." },
            { item: "Sands of the Timeless Hour", details: "Can turn back time for a moment, but at a cost of your own lifespan." },
            { item: "The Golden Lantern", details: "Lights the way through any darkness, but casts shadows on everything you’ve left behind." },
            { item: "A Heart from the Abyss", details: "Allows you to control creatures of the deep, but they demand tribute in blood." },
            { item: "The Shattered Blade", details: "This blade once slew a god, but it’s broken—and each piece hungers for a new purpose." },
            { item: "Wings of the Fallen", details: "Gives you the ability to fly, but at the cost of your earthly connections." },
            { item: "The Whispering Book", details: "This tome whispers secrets of the universe, but only at the cost of your sanity." },
            { item: "Ring of the True King", details: "Grants command over subjects, but only those who truly despise you will obey." },
            { item: "The Moonlit Dagger", details: "Strikes with the cold of the moon, yet leaves a wound that will never fully heal." },
            { item: "Cloak of the Night’s Embrace", details: "Wrap yourself in shadows, but you can never fully leave them behind." },
            { item: "A Vessel for Souls", details: "This jar holds the essence of life, but it constantly calls for more." },
            { item: "Spear of the Lost Gods", details: "Can pierce any defense, but the weapon is cursed to never return to its wielder." },
            { item: "The Eternal Fire", details: "A flame that cannot be extinguished, but burns through anything it touches, including your own soul." },
            { item: "Eye of the Watcher", details: "Grants omniscient vision, but it never lets you close your eyes again." },
            { item: "The Blackened Tome", details: "A book of forbidden knowledge, but each word curses its reader." },
            { item: "Crown of the Earth’s Heart", details: "Commands the power of the earth, but the ground beneath you grows restless." },
            { item: "Talisman of the Nevermore", details: "Grants immortality, but you are forever trapped in a loop of your past mistakes." },
            { item: "Sculptor’s Heart", details: "Mold creatures from clay, but they demand their own freedom and purpose." },
            { item: "The Sapphire Eye", details: "Allows you to peer through walls, but everything you see is twisted and broken." }
        ]
    }
};