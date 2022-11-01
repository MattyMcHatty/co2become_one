use footprints;
db.dropDatabase();

db.footprints.insertMany([
    {
        username: "Greta",
        household: "3 People",
        house_size: "Medium",
        food: "Meat Daily",
        water: "Over 9 times a week",
        purchases: "Less than 3",
        waste: "Half or less",
        recycle: "Yes",
        transport: "Bus"
    },
    {
        username: "Bono",
        household: "5 People",
        house_size: "Large",
        food: "Vegan",
        water: "4-9 times a week",
        purchases: "7+ times",
        waste: "1 Bag",
        recycle: "No",
        transport: "Car"
    },

]);