const User = require('../Model/UserModel');
const jwt = require('jsonwebtoken');

exports.signupUser = async (req, res, next) => {
    try {
        const { fname, lname, email, password, confirmPassword } = req.body;
        console.log(fname)
        if (!fname || !lname || !email || !password || !confirmPassword) {
            throw new Error("Every Field is required.");
        }

        const user = await User.create(req.body);
        console.log(user);

        const token = jwt.sign({ _id: user._id }, "investoisfutureunicorn", { expiresIn: "15d" });

        res.status(200).json({ token });

    } catch (error) {
        throw new Error(error);
    }
}


exports.signinUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        if (!email || !password) {
            throw new Error("Email and password is required.");
        }

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            throw new Error("User is not found.");
        }
        const isValid = user.isValidPassword(password, user.password);
        if (!isValid) {
            throw new Error("Password is not valid");
        }

        const token = jwt.sign({ _id: user._id }, "meetvekariyaisgoodboy", { expiresIn: "15d" });
        res.status(200).json({ token });

    } catch (error) {
        throw new Error(error);
    }
}
