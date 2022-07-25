const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name!"],
        minlength: [1, "Name must be at least 1 characters long."]
    },
    imageURL: {
        type: String,
        required: [true, "Must have an image URL"],
        minlength: [1, "Must have image URL"]

    },
    numChests: { 
        type: Number,
        required: [true, "Must list number of treasure chests!"],
        min: [1, "Must have at least 1 chest"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Must have a catch phrase!"],
        minlength: [1, "Must have catch phrase."]
    },
    crewPosition: {
        type: String,
        required: [true, "Must list position!"],
        minlength: [1, "Must list position."]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Must choose true or false"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Must choose true or false"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Must choose true or false"]
    }
})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;