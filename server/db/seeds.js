use footprints;
db.dropDatabase();

db.footprints.insertMany([
    {
        username: "Greta",
        household: "3",
        house_size: "Medium",
        food: "Meat Daily",
        water: "3",
        purchases: "2",
        waste: "1",
        recycle: "true",
        transport: "Bus"
    },
    {
        username: "Bono",
        household: "5",
        house_size: "Large",
        food: "Vegan",
        water: "3",
        purchases: "5",
        waste: "2",
        recycle: "false",
        transport: "Car"
    },

]);