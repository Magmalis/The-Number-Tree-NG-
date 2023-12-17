addLayer("f", {
    name: "f", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "f", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFA500",
    requires: new Decimal(1e6), // Can be a function that takes requirement increases into account
    resource: "factors", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.09, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: Reset for factors", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
branches: ['n'],
layerShown(){return hasUpgrade('f', 14)},
	upgrades: {
	11: { title: "ENDGAME",
	description: "ENDGMAE",
	cost: new Decimal(999999),
},
},
})
