

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
