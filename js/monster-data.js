

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