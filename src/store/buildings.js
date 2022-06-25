const buildings = [
  {
    name: "Building 1",
    power: 1,
    cost: 1,
    costIncrement: 1.1,
    buildingCount: 0,
    powerups: [
      {
        name: "Powerup 1",
        type: "multiplyPower",
        value: 2,
        enabled: true,
        cost: 100,
      },
      {
        name: "Powerup 2",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 1000,
      },
    ],
  },
  {
    name: "Building 2",
    power: 10,
    cost: 1000,
    costIncrement: 1.1,
    buildingCount: 0,
    powerups: [
      {
        name: "Powerup 1",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 100,
      },
      {
        name: "Powerup 2",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 1000,
      },
    ],
  },
  {
    name: "Building 3",
    power: 100,
    cost: 3000,
    costIncrement: 1.1,
    buildingCount: 0,
    powerups: [
      {
        name: "Powerup 1",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 100,
      },
      {
        name: "Powerup 2",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 1000,
      },
    ],
  },
  {
    name: "Building 4",
    power: 1000,
    cost: 30000,
    costIncrement: 1.3,
    buildingCount: 0,
    powerups: [
      {
        name: "Powerup 1",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 100,
      },
      {
        name: "Powerup 2",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 1000,
      },
    ],
  },
  {
    name: "Building 5",
    power: 2000,
    cost: 200000,
    costIncrement: 1.4,
    buildingCount: 0,
    powerups: [
      {
        name: "Powerup 1",
        type: "multiplyPower",
        value: 2,
        enabled: true,
        cost: 100,
      },
      {
        name: "Powerup 2",
        type: "multiplyPower",
        value: 2,
        enabled: false,
        cost: 1000,
      },
    ],
  },
];

export default buildings;
