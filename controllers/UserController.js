const { USERS } = require('../constants') 


exports.getUsers = (req, res) =>{
    const data = JSON.stringify(USERS);
    res.end(data);
}

exports.getUserById = (req, res) =>{
    const id = (req.url).slice(7,8);
    const user = USERS.find(user => user.id === +id);
    const data = JSON.stringify(user);
    res.end(data);
}

