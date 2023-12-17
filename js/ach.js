
addLayer("a", {
    name: "achievements",
    symbol: "A",
    position: 0, 
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    row: "side",
    layerShown(){return true},
    tooltip: "Achievements",
    achievements: {
        11: {
            name: "It is tree of nerfs?",
            done(){return hasUpgrade('n', 11)},
            tooltip: "Buy '-1' upgrade"
        },

        12: {
            name: "Second Nerf",
            done(){return hasUpgrade('n', 15)},
            tooltip: "Buy '5' upgrade"
        },
        13: {
            name: "Imaginary Achievement",
            done(){return player.i.points.gte(1)},
            tooltip: "Do a second layer reset",
        },
        14: {
            name: "Million",
            done(){return player.points.gte(1000000)},
            tooltip: "Get 1e6 points",
        },
    }
})

