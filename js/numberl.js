addLayer("n", {
    name: "number", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "numbers", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for numbers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
	11: { title: "-1",
	description: "Unlock next upgrade, but divide point gain by 3",
	cost: new Decimal(1),

},
	12: { title: "1",
	description: "Point gain x4",
	cost: new Decimal(1),
unlocked(){return hasUpgrade("n", 11)},
},
	13: { title: "3",
	description: "Point boosts themselves",
	cost: new Decimal(3),
effect(){return player.points.add(1).pow(hasUpgrade("n", 13)?0.15:0.15)},
    effectDisplay(){return format(this.effect())+"x"},
unlocked(){return hasUpgrade("n", 12)},
},
	14: { title: "4",
	description: "Numbers boosts points gain",
	cost: new Decimal(4),
effect(){return player.n.points.add(1).pow(hasUpgrade("n", 14)?0.3:0.3)},
    effectDisplay(){return format(this.effect())+"x"},
unlocked(){return hasUpgrade("n", 13)},
},
	15: { title: "5",
	description: "Boost '-1'",
	cost: new Decimal(5),
unlocked(){return hasUpgrade("n", 14)},
},
	16: { title: "6",
	description: "Boosts point gain by 5",
	cost: new Decimal(6),
unlocked(){return hasUpgrade("n", 21)},
},

	21: { title: "2",
	description: "Disables effect from '-1'",
	cost: new Decimal(2),
unlocked(){return hasUpgrade("n", 15)},
},
},


})
