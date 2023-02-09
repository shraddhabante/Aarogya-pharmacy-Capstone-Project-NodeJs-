
let loginModel = require("../model/loginModel");

//insert the record
let signUpData = async (request, response) => {
    let login = request.body;
    // console.log(customer)
    // response.send("done")
    try {
        if (login.type_of_user == "admin") {
            response.json({ "msg": "Admin can't create account" })
        } else {
            let result = await loginModel.insertMany(login);
            if (result != null) {
                response.json({ "msg": "Customer account created" })
            }
        }
    } catch (err) {
        // response.send(err);
        response.json({ "msg": "EmailId must be unique" });
    }
}

let signInData = async (request, response) => {
    let login = request.body;
    try {
        let result = await loginModel.findOne({ emailId: login.emailId, password: login.password, type_of_user: login.type_of_user });
        // response.json(result);
        if (result == null) {
            response.json({ "msg": "EmailId or password or Type of user may be worng" })
        } else if (result.type_of_user == "admin") {
            response.json({ "msg": "Admin login Sucessfully" })
        } else {
            response.json({ "msg": "Customer login sucessfully" })
        }
    } catch (err) {
        response.json(err)
    }
}

let showAllCustomers = async (request, response) => {
    try {
        let result = await loginModel.find({});
        var res = JSON.stringify(result)
        response.send(res);
    } catch (err) {
        response.json(err);
    }
}

let findUserByEmailId = async (request, response) => {
    let email = request.body.emailId;
    try {
        let result = await loginModel.findOne({ emailId: email });
        // response.json(result);
        if (result != null) {
            var res=JSON.stringify(result)
            response.send(res)
        }
    } catch (err) {
        // response.json(err)
        response.send("There is no customer exist with email id as "+emailId)
    }
}
module.exports = { signUpData, signInData, showAllCustomers,findUserByEmailId};