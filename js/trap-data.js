


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