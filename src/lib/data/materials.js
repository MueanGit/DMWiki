// src/lib/data/materials.js
export const materials = [
    {
      id: "rathalos-scale",
      name: "Rathalos Scale",
      description: "Rathalos material. Mostly obtained by carving. Solid, used to craft gear.",
      rarity: 4,
      sources: [
        {
          monster: "Rathalos",
          action: "Carve Body",
          chance: 70,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Break Head",
          chance: 65,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Capture",
          chance: 20,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Hunt Reward",
          chance: 30,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "rathalos-helm",
          name: "Rathalos Helm",
          type: "Armor"
        },
        {
          id: "rathalos-mail",
          name: "Rathalos Mail",
          type: "Armor"
        },
        {
          id: "flame-sword",
          name: "Flame Blade",
          type: "Weapon"
        }
      ]
    },
    {
      id: "rathalos-shell",
      name: "Rathalos Shell",
      description: "Rathalos material. Obtained by breaking its body. Solid, used to craft gear.",
      rarity: 4,
      sources: [
        {
          monster: "Rathalos",
          action: "Break Body",
          chance: 65,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Carve Body",
          chance: 25,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Capture",
          chance: 32,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "rathalos-helm",
          name: "Rathalos Helm",
          type: "Armor"
        },
        {
          id: "flame-sword",
          name: "Flame Blade",
          type: "Weapon"
        }
      ]
    },
    {
      id: "rathalos-webbing",
      name: "Rathalos Webbing",
      description: "Rathalos material. Obtained by breaking its wings. Supple, used in many weapons.",
      rarity: 4,
      sources: [
        {
          monster: "Rathalos",
          action: "Break Wings",
          chance: 80,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Hunt Reward",
          chance: 18,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "flame-sword",
          name: "Flame Blade",
          type: "Weapon"
        }
      ]
    },
    {
      id: "rathalos-plate",
      name: "Rathalos Plate",
      description: "A rare Rathalos material. Almost too nice to use, but forms the basis of rare equipment.",
      rarity: 6,
      sources: [
        {
          monster: "Rathalos",
          action: "Carve Tail",
          chance: 5,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Break Head",
          chance: 3,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Hunt Gold Reward",
          chance: 2,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "rathalos-mail",
          name: "Rathalos Mail",
          type: "Armor"
        }
      ]
    },
    {
      id: "rathalos-marrow",
      name: "Rathalos Marrow",
      description: "Rathalos material. A valuable find, used to craft rare equipment.",
      rarity: 5,
      sources: [
        {
          monster: "Rathalos",
          action: "Carve Tail",
          chance: 18,
          location: "All Areas"
        },
        {
          monster: "Rathalos",
          action: "Break Back",
          chance: 12,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "rathalos-helm",
          name: "Rathalos Helm",
          type: "Armor"
        }
      ]
    },
    {
      id: "inferno-sac",
      name: "Inferno Sac",
      description: "A monster organ filled with powder that ignites upon impact. Handle with extreme care.",
      rarity: 4,
      sources: [
        {
          monster: "Rathalos",
          action: "Carve Body",
          chance: 16,
          location: "All Areas"
        },
        {
          monster: "Anjanath",
          action: "Carve Body",
          chance: 25,
          location: "All Areas"
        },
        {
          monster: "Teostra",
          action: "Carve Body",
          chance: 35,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "flame-sword",
          name: "Flame Blade",
          type: "Weapon"
        },
        {
          id: "rathalos-mail",
          name: "Rathalos Mail",
          type: "Armor"
        }
      ]
    },
    {
      id: "monster-hardbone",
      name: "Monster Hardbone",
      description: "Precious bone obtained from large monsters. Their rarity makes them highly sought after.",
      rarity: 4,
      sources: [
        {
          monster: "Various Large Monsters",
          action: "Hunt Reward HR",
          chance: 25,
          location: "All Areas"
        },
        {
          monster: "Bonepiles",
          action: "Gather HR",
          chance: 15,
          location: "Various Locales"
        }
      ],
      usedIn: [
        {
          id: "flame-sword",
          name: "Flame Blade",
          type: "Weapon"
        },
        {
          id: "steel-edge",
          name: "Steel Edge",
          type: "Weapon"
        }
      ]
    },
    {
      id: "zinogre-claw",
      name: "Zinogre Claw",
      description: "Zinogre material. Obtained by breaking its forelegs. Used for many weapons.",
      rarity: 5,
      sources: [
        {
          monster: "Zinogre",
          action: "Break Foreleg",
          chance: 70,
          location: "All Areas"
        },
        {
          monster: "Zinogre",
          action: "Carve Body",
          chance: 25,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "lightning-bow",
          name: "Lightning Bow",
          type: "Weapon"
        }
      ]
    },
    {
      id: "zinogre-shell",
      name: "Zinogre Shell",
      description: "Zinogre material. Mostly obtained by carving. Solid, used to craft gear.",
      rarity: 5,
      sources: [
        {
          monster: "Zinogre",
          action: "Carve Body",
          chance: 45,
          location: "All Areas"
        },
        {
          monster: "Zinogre",
          action: "Break Back",
          chance: 30,
          location: "All Areas"
        },
        {
          monster: "Zinogre",
          action: "Capture",
          chance: 22,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "lightning-bow",
          name: "Lightning Bow",
          type: "Weapon"
        }
      ]
    },
    {
      id: "great-jagras-hide",
      name: "Great Jagras Hide",
      description: "Great Jagras material. Mostly obtained by carving. Supple, used to craft gear.",
      rarity: 3,
      sources: [
        {
          monster: "Great Jagras",
          action: "Carve Body",
          chance: 60,
          location: "Ancient Forest"
        },
        {
          monster: "Great Jagras",
          action: "Break Body",
          chance: 40,
          location: "Ancient Forest"
        }
      ],
      usedIn: [
        {
          id: "jagras-helm",
          name: "Jagras Helm",
          type: "Armor"
        },
        {
          id: "jagras-mail",
          name: "Jagras Mail",
          type: "Armor"
        }
      ]
    },
    {
      id: "iron-ore",
      name: "Iron Ore",
      description: "A common ore that can be found almost anywhere. It's not worth much, but it's easy to process.",
      rarity: 1,
      sources: [
        {
          monster: "None",
          action: "Mining",
          chance: 85,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "hunter-sword",
          name: "Hunter's Sword",
          type: "Weapon"
        },
        {
          id: "hunter-helm",
          name: "Hunter's Helm",
          type: "Armor"
        },
        {
          id: "hunter-mail",
          name: "Hunter's Mail",
          type: "Armor"
        },
        {
          id: "hunter-vambraces",
          name: "Hunter's Vambraces",
          type: "Armor"
        },
        {
          id: "hunter-coil",
          name: "Hunter's Coil",
          type: "Armor"
        },
        {
          id: "hunter-greaves",
          name: "Hunter's Greaves",
          type: "Armor"
        }
      ]
    },
    {
      id: "monster-bone-small",
      name: "Monster Bone Small",
      description: "A small but sturdy bone. Indispensable for crafting basic equipment.",
      rarity: 1,
      sources: [
        {
          monster: "Small Monsters",
          action: "Carve",
          chance: 50,
          location: "All Areas"
        },
        {
          monster: "Bonepiles",
          action: "Gather",
          chance: 80,
          location: "All Areas"
        }
      ],
      usedIn: [
        {
          id: "hunter-sword",
          name: "Hunter's Sword",
          type: "Weapon"
        },
        {
          id: "bone-blade",
          name: "Bone Blade II",
          type: "Weapon"
        },
        {
          id: "steel-edge",
          name: "Steel Edge",
          type: "Weapon"
        },
        {
          id: "hunter-helm",
          name: "Hunter's Helm",
          type: "Armor"
        },
        {
          id: "hunter-mail",
          name: "Hunter's Mail",
          type: "Armor"
        }
      ]
    }
  ];
  
  export default materials;