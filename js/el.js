addLayer("i", {
    name: "i", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "i", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#08457e",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "imaginary units", // Name of prestige currency
    baseResource: "numbers", // Name of resource prestige is based on
    baseAmount() {return player.n.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for imaginary units", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
branches: ['n'],
layerShown(){return hasUpgrade('n', 16)},
	upgrades: {
	11: { title: "This upgrade don't exist",
	description: "Boost point gain based on points",
	cost: new Decimal(1),
effect(){return player.points.add(1).pow(hasUpgrade("i", 11)?0.3:0.3)},
    effectDisplay(){return format(this.effect())+"x"},
},
	12: { title: "",
	description: "Boost point gain based on imaginary units",
	cost: new Decimal(1),
effect(){return player.i.points.add(1).pow(hasUpgrade("i", 12)?1:1)},
    effectDisplay(){return format(this.effect())+"x"},
},
	13: { title: "",
	description: "x3 points gain boost",
	cost: new Decimal(2),
},
	14: { title: "",
	description: "Unlock new Layer: 'Factor'",
	cost: new Decimal(3),
},
},
})
