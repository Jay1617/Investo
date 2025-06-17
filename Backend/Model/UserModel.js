const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


mongoose.connect('mongodb://localhost:27017/Investo').then(() => {
    console.log("Connection is successful.");
}).catch((err) => {
    console.log("There was an error: " + err);
    throw new Error("Something went wrong: " + err);
});

const userSchema = mongoose.Schema({
    fname: {
        required: true,
        type: String,
    },
    lname: {
        required: [true, "Last name is required."],
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email Id.");
            }
        }
    },
    password: {
        required: true,
        type: String,
    },
    confirmPassword: {
        required: true,
        type: String,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password do not match"
        }
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isValidPassword = (pass, mongoPass) => {
    return bcrypt.compare(pass, mongoPass);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
