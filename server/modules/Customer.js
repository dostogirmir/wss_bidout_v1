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
        min: 18,
        max: 65
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);
