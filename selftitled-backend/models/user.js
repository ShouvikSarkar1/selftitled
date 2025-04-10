const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    emailId: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    emailUpdates: {
        type: Boolean,
        required: false,
    },
    businessName: {
        type: String,
        trim: true,
        required: false,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        enum: [
                "Alabama", 
                "Alaska", 
                "Arizona", 
                "Arkansas", 
                "California", 
                "Colorado", 
                "Connecticut",
                "Delaware",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvannia",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming",
                "DC"
            ],
        required: true,
    },
    zipcode: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['venue', 'promoter', 'artist'],
        required: true,
    },
    lookingFor: {
        type: String,
        enum: ['venues', 'promoters', 'artists']
    },
    comments: {
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);