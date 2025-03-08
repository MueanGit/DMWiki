// src/lib/data/weapons.js
export const weapons = [
    {
      id: "flame-sword",
      name: "Flame Blade",
      weaponType: "Great Sword",
      description: "A great sword forged from Rathalos parts. The blade houses the fire wyvern's power.",
      rarity: 5,
      attack: 864,
      affinity: 0,
      element: "Fire",
      elementValue: 180,
      elementColor: "red-500",
      sharpness: {
        red: 6,
        orange: 5,
        yellow: 5,
        green: 9,
        blue: 5,
        white: 0,
        purple: 0
      },
      craftingMaterials: [
        {
          id: "rathalos-shell",
          name: "Rathalos Shell",
          quantity: 3,
          description: "Rathalos material. Obtained by breaking its body. Solid, used to craft gear."
        },
        {
          id: "rathalos-webbing",
          name: "Rathalos Webbing",
          quantity: 2,
          description: "Rathalos material. Obtained by breaking its wings. Supple, used in many weapons."
        },
        {
          id: "inferno-sac",
          name: "Inferno Sac",
          quantity: 1,
          description: "A monster organ filled with powder that ignites upon impact. Handle with extreme care."
        },
        {
          id: "monster-hardbone",
          name: "Monster Hardbone",
          quantity: 4,
          description: "Precious bone obtained from large monsters. Their rarity makes them highly sought after."
        }
      ]
    },
    {
      id: "steel-edge",
      name: "Steel Edge",
      weaponType: "Long Sword",
      description: "A basic but reliable long sword forged with quality steel. Popular among novice hunters.",
      rarity: 3,
      attack: 495,
      affinity: 0,
      element: null,
      elementValue: 0,
      elementColor: "",
      sharpness: {
        red: 10,
        orange: 8,
        yellow: 12,
        green: 5,
        blue: 0,
        white: 0,
        purple: 0
      },
      craftingMaterials: [
        {
          id: "quality-bone",
          name: "Quality Bone",
          quantity: 5,
          description: "A bone with a smooth ivory-like texture. Can be crafted into many things."
        },
        {
          id: "monster-bone-small",
          name: "Monster Bone Small",
          quantity: 3,
          description: "A small but sturdy bone. Indispensable for crafting basic equipment."
        },
        {
          id: "machalite-ore",
          name: "Machalite Ore",
          quantity: 3,
          description: "An ore that yields metal superior to that of Iron. Produces fine steel when worked."
        }
      ]
    },
    {
      id: "lightning-bow",
      name: "Lightning Bow",
      weaponType: "Bow",
      description: "A bow infused with Zinogre's electrical power. Fires arrows charged with lightning.",
      rarity: 5,
      attack: 216,
      affinity: 10,
      element: "Thunder",
      elementValue: 240,
      elementColor: "yellow-500",
      coatings: ["Close Range", "Power", "Paralysis"],
      chargeShots: {
        level1: "Rapid 2",
        level2: "Rapid 3",
        level3: "Spread 3",
        level4: "Spread 4"
      },
      craftingMaterials: [
        {
          id: "zinogre-shell",
          name: "Zinogre Shell",
          quantity: 4,
          description: "Zinogre material. Mostly obtained by carving. Solid, used to craft gear."
        },
        {
          id: "zinogre-claw",
          name: "Zinogre Claw",
          quantity: 2,
          description: "Zinogre material. Obtained by breaking its forelegs. Used for many weapons."
        },
        {
          id: "electro-sac",
          name: "Electro Sac",
          quantity: 2,
          description: "A monster organ that can store electricity. Generates a powerful shock when struck."
        },
        {
          id: "monster-keenbone",
          name: "Monster Keenbone",
          quantity: 3,
          description: "Bone obtained from large monsters. Hard to work with due to its density."
        }
      ]
    },
    {
      id: "hunter-sword",
      name: "Hunter's Sword",
      weaponType: "Sword & Shield",
      description: "A basic sword and shield used by hunters just starting their journey.",
      rarity: 1,
      attack: 140,
      affinity: 0,
      element: null,
      elementValue: 0,
      elementColor: "",
      sharpness: {
        red: 15,
        orange: 10,
        yellow: 5,
        green: 0,
        blue: 0,
        white: 0,
        purple: 0
      },
      craftingMaterials: [
        {
          id: "iron-ore",
          name: "Iron Ore",
          quantity: 3,
          description: "A common ore that can be found almost anywhere. It's not worth much, but it's easy to process."
        },
        {
          id: "monster-bone-small",
          name: "Monster Bone Small",
          quantity: 2,
          description: "A small but sturdy bone. Indispensable for crafting basic equipment."
        }
      ]
    },
    {
      id: "bone-blade",
      name: "Bone Blade II",
      weaponType: "Great Sword",
      description: "A great sword made from sturdy monster bones. Primitive but effective.",
      rarity: 2,
      attack: 384,
      affinity: 0,
      element: null,
      elementValue: 0,
      elementColor: "",
      sharpness: {
        red: 12,
        orange: 10,
        yellow: 8,
        green: 0,
        blue: 0,
        white: 0,
        purple: 0
      },
      craftingMaterials: [
        {
          id: "monster-bone-medium",
          name: "Monster Bone Medium",
          quantity: 2,
          description: "Bone obtained from medium monsters. It's reliable and can be used to craft gear."
        },
        {
          id: "quality-bone",
          name: "Quality Bone",
          quantity: 3,
          description: "A bone with a smooth ivory-like texture. Can be crafted into many things."
        },
        {
          id: "monster-bone-small",
          name: "Monster Bone Small",
          quantity: 5,
          description: "A small but sturdy bone. Indispensable for crafting basic equipment."
        }
      ]
    }
  ];
  
  export default weapons;