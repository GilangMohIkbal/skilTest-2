const { Users } = require("../../models");
// validator email
const validator = require('validator')
const service = async (req,res) => {
    try {
        const name = req.body.name;
        const address = req.body.address;
        const gender = req.body.gender;
        const email = req.body.email;
        const password = req.body.password;
        if (name === "") {
            res.status(400).json({
                message: "Name cannot be empty"
            });
        }
        if (address === ''){
            res.status(400).json({
                message: "Address cannot be empty"
            })
        } 
        if( gender === '') {
            res.status(400).json({
                message: "gender cannot be empty"
            })
        }
        if ( email === '') {
            res.status(400).json({
                message: "email cannot be empty"
            })
        }

        if ( password === '') {
            res.status(400).json({
                message: "password cannot be empty"
            })
        }
        // validasi email valid
        if(email) {
            if(!validator.isEmail(email)) {
                res.status(400).json({
                    message: "email is not valid"
                })
            }
        }
        else {
            const payload = req.body;
            const requestDB = await Users.create(payload);
            return res.json({
                msg: "User created successfully",
                data: requestDB,
            });
        }
       
    } catch (error) {
        return res.status(500).json({
            msg: error.toString(),
        })
    }
}

module.exports = { service }