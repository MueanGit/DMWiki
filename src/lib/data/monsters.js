// src/lib/data/monsters.js
export const monsters = [
    {
      id: "rathalos",
      name: "Rathalos",
      threatLevel: 4,
      type: "Flying Wyvern",
      description: "The apex monster of the Ancient Forest, also known as the 'King of the Skies'. A terrible wyvern that descends upon invaders from on high, attacking with poisonous claws and breath of fire.",
      habitat: "Dense forests, volcanic regions, and mountainous areas. Most commonly found in the Ancient Forest and the Wildspire Waste.",
      behavior: "Highly territorial and aggressive. Prefers to attack from the air, using its powerful wings to stay aloft while raining fire down on prey. When threatened, it will use its poisonous talons to incapacitate targets.",
      size: {
        average: "1704.28cm",
        goldCrown: "2045.14cm"
      },
      elements: ["Fire"],
      ailments: ["Poison", "Fireblight"],
      weaknesses: {
        elements: {
          dragon: 3,
          thunder: 2,
          ice: 1,
          water: 1,
          fire: 0
        },
        status: {
          poison: 2,
          sleep: 2,
          paralysis: 2,
          blast: 2,
          stun: 3
        },
        parts: [
          {
            name: "Head",
            slash: 3,
            blunt: 3,
            ammo: 2,
            element: 3
          },
          {
            name: "Neck",
            slash: 2,
            blunt: 2,
            ammo: 1,
            element: 2
          },
          {
            name: "Wings",
            slash: 2,
            blunt: 1,
            ammo: 3,
            element: 1
          },
          {
            name: "Back",
            slash: 1,
            blunt: 1,
            ammo: 1,
            element: 1
          },
          {
            name: "Tail",
            slash: 3,
            blunt: 2,
            ammo: 2,
            element: 2
          }
        ]
      },
      materials: [
        {
          id: "rathalos-scale",
          name: "Rathalos Scale",
          description: "Rathalos material. Mostly obtained by carving. Solid, used to craft gear.",
          rarity: 4,
          dropRate: 70
        },
        {
          id: "rathalos-shell",
          name: "Rathalos Shell",
          description: "Rathalos material. Obtained by breaking its body. Solid, used to craft gear.",
          rarity: 4,
          dropRate: 30
        },
        {
          id: "rathalos-webbing",
          name: "Rathalos Webbing",
          description: "Rathalos material. Obtained by breaking its wings. Supple, used in many weapons.",
          rarity: 4,
          dropRate: 32
        },
        {
          id: "rathalos-plate",
          name: "Rathalos Plate",
          description: "A rare Rathalos material. Almost too nice to use, but forms the basis of rare equipment.",
          rarity: 6,
          dropRate: 3
        },
        {
          id: "rathalos-marrow",
          name: "Rathalos Marrow",
          description: "Rathalos material. A valuable find, used to craft rare equipment.",
          rarity: 5,
          dropRate: 14
        }
      ],
      moves: [
        {
          id: "fireball",
          name: "Fireball",
          description: "Rathalos launches a fireball straight ahead, causing fireblight on impact.",
          threatLevel: 2,
          damage: "Medium",
          tellSigns: [
            "Rathalos rears its head back",
            "Brief pause in movement",
            "The monster's throat glows orange"
          ],
          effects: [
            "Causes fireblight if hit directly",
            "Creates small explosion on impact with ground",
            "Can be fired in rapid succession up to three times"
          ],
          counters: [
            {
              title: "Dodge to the Side",
              description: "The fireball travels in a straight line. A quick roll to either side is the safest option."
            },
            {
              title: "Block with High Fire Resistance",
              description: "With sufficient fire resistance and a strong shield, you can block this attack without taking significant damage."
            },
            {
              title: "Flash Pod During Wind-up",
              description: "If you're quick, a flash pod during the wind-up will interrupt the attack and possibly bring Rathalos down from the air."
            }
          ]
        },
        {
          id: "poison-claw-dive",
          name: "Poison Claw Dive",
          description: "Rathalos flies up then dives down with its poisonous claws extended to grab hunters.",
          threatLevel: 4,
          damage: "High",
          tellSigns: [
            "Rathalos flies higher than normal",
            "Briefly hovers while targeting a hunter",
            "Extends its talons downward"
          ],
          effects: [
            "Inflicts poison status if hit by the claws",
            "Can pin hunters to the ground for follow-up attacks",
            "Deals heavy damage on impact"
          ],
          counters: [
            {
              title: "Superman Dive",
              description: "The safest option is to sheathe your weapon and perform a superman dive just before impact. The extended invincibility frames will keep you safe."
            },
            {
              title: "Flashpod Counter",
              description: "If timed correctly, a flash pod will blind Rathalos mid-dive, causing it to crash to the ground and creating an opening for attacks."
            },
            {
              title: "Roll Under",
              description: "For experienced hunters, rolling directly under Rathalos as it dives can avoid the attack, positioning you for a counterattack on its now-vulnerable tail."
            }
          ]
        }
      ]
    },
    {
      id: "zinogre",
      name: "Zinogre",
      threatLevel: 5,
      type: "Fanged Wyvern",
      description: "A fanged wyvern that can store and manipulate electricity in its body. It absorbs energy from Thunderbugs living on its back to increase its power.",
      habitat: "Forested areas, mountainous regions, and highlands where Thunderbugs are plentiful.",
      behavior: "Prideful and territorial. It charges up electrical energy to enter a supercharged state, becoming more aggressive and dangerous.",
      size: {
        average: "1821.56cm",
        goldCrown: "2185.87cm"
      },
      elements: ["Thunder"],
      ailments: ["Thunderblight", "Stun"],
      weaknesses: {
        elements: {
          ice: 3,
          water: 2,
          fire: 1,
          dragon: 1,
          thunder: 0
        },
        status: {
          poison: 3,
          sleep: 1,
          paralysis: 1,
          blast: 2,
          stun: 2
        },
        parts: [
          {
            name: "Head",
            slash: 3,
            blunt: 3,
            ammo: 2,
            element: 3
          },
          {
            name: "Foreleg",
            slash: 3,
            blunt: 2,
            ammo: 2,
            element: 2
          },
          {
            name: "Back",
            slash: 1,
            blunt: 2,
            ammo: 1,
            element: 2
          },
          {
            name: "Tail",
            slash: 2,
            blunt: 1,
            ammo: 2,
            element: 1
          }
        ]
      },
      materials: [
        {
          id: "zinogre-claw",
          name: "Zinogre Claw",
          description: "Zinogre material. Obtained by breaking its forelegs. Used for many weapons.",
          rarity: 5,
          dropRate: 35
        },
        {
          id: "zinogre-shell",
          name: "Zinogre Shell",
          description: "Zinogre material. Mostly obtained by carving. Solid, used to craft gear.",
          rarity: 5,
          dropRate: 32
        },
        {
          id: "zinogre-horn",
          name: "Zinogre Horn",
          description: "Zinogre material. Obtained by breaking its head. Unusual, used in select gear.",
          rarity: 5,
          dropRate: 28
        },
        {
          id: "zinogre-plate",
          name: "Zinogre Plate",
          description: "A rare Zinogre material. Uncommon, used to craft special gear.",
          rarity: 6,
          dropRate: 5
        },
        {
          id: "fulgur-gem",
          name: "Fulgur Gem",
          description: "A rare gem that can only be harvested from thunder-element monsters. Used for precious equipment.",
          rarity: 7,
          dropRate: 3
        }
      ],
      moves: [
        {
          id: "thunderpaw-slam",
          name: "Thunderpaw Slam",
          description: "Zinogre slams its electrified front paw into the ground, creating electrical discharges.",
          threatLevel: 3,
          damage: "Medium-High",
          tellSigns: [
            "Zinogre raises one front leg high",
            "Brief pause before the strike",
            "Electrical sparks gather around its paw"
          ],
          effects: [
            "Creates multiple lightning strikes in a cone-shaped area",
            "Causes thunderblight if hit",
            "Can stun hunters with low thunder resistance"
          ],
          counters: [
            {
              title: "Roll to the Side",
              description: "The attack creates a cone of electricity in front of Zinogre. Rolling to the side is the best evasion strategy."
            },
            {
              title: "Guard with Thunder Resistance",
              description: "With proper thunder resistance and a strong shield, this attack can be blocked without major damage."
            },
            {
              title: "Punish the Recovery",
              description: "Zinogre has a brief recovery animation after this attack, creating an opening for counterattacks."
            }
          ]
        }
      ]
    }
  ];
  
  export default monsters;