


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