import mongoose from "mongoose";
const { Schema } = mongoose;
const customerSchema = new Schema({
    firstName: {
        type: String,
        required: ["First name field is required"]
    },
    lastName: {
        type: String,
        required: ["Last name field is required"]
    },
    fullName: {
        type: String,
        required: false,
        get: function() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            message: "Invalid email format"
        }
    },
    nidNumber: {
        type: String,
        required: ["NID number field is required"],
        unique: true,
        
    },
    nidImage: {
        type: String,
        default: null,
        required: false
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: function(val) {
            const age = (new Date() - new Date(val)) / (1000 * 60 * 60 * 24 * 365.25);
            return age >= 18 && age <= 85;
            },
            message: 'Date of birth must be between 18 and 85 years old'
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(val) {
                return /^(?:+88|01)?\d{11}$/.test(val);
            },
            message: 'Invalid Bangladeshi phone number'
        }
    },
        age: {
        type: Number,
        required: true,
        min: [18, 'Age must be at least 18'],
        max: [85, 'Age cannot be more than 85']
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);
