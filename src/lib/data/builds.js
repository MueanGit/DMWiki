// src/lib/data/builds.js
export const buildProgressionData = {
  initialBuilds: [
    {
      id: "early-game-1",
      name: "Early Game Hunter",
      rank: "LR3",
      description: "Basic setup for beginning hunters",
      equipment: [
        { id: "hunter-sword", type: "weapon", name: "Hunter's Sword" },
        { id: "hunter-helm", type: "armor", name: "Hunter's Helm" },
        { id: "hunter-mail", type: "armor", name: "Hunter's Mail" },
        { id: "hunter-vambraces", type: "armor", name: "Hunter's Vambraces" },
        { id: "hunter-coil", type: "armor", name: "Hunter's Coil" },
        { id: "hunter-greaves", type: "armor", name: "Hunter's Greaves" }
      ],
      nextBuilds: [
        {
          id: "early-mid-game-1",
          name: "Wilderness Survivor",
          rank: "LR5",
          description: "Improved setup after defeating first major monsters",
          equipment: [
            { id: "bone-blade", type: "weapon", name: "Bone Blade II" },
            { id: "jagras-helm", type: "armor", name: "Jagras Helm" },
            { id: "jagras-mail", type: "armor", name: "Jagras Mail" },
            { id: "alloy-vambraces", type: "armor", name: "Alloy Vambraces" },
            { id: "alloy-coil", type: "armor", name: "Alloy Coil" },
            { id: "alloy-greaves", type: "armor", name: "Alloy Greaves" }
          ],
          nextBuilds: [
            {
              id: "mid-game-1",
              name: "Elemental Striker",
              rank: "HR3",
              description: "First High Rank build focusing on elemental damage",
              equipment: [
                { id: "flame-sword", type: "weapon", name: "Flame Blade" },
                { id: "rathalos-helm", type: "armor", name: "Rathalos Helm" },
                { id: "rathalos-mail", type: "armor", name: "Rathalos Mail" },
                { id: "rathalos-vambraces", type: "armor", name: "Rathalos Vambraces" },
                { id: "odogaron-coil", type: "armor", name: "Odogaron Coil" },
                { id: "odogaron-greaves", type: "armor", name: "Odogaron Greaves" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default buildProgressionData;