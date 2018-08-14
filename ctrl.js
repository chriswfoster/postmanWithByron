const axios = require('axios')
const usersArray = [
    {
        name: "Chriswf",
        age: 55,
        password: "iliketurtles"
    },
    {
        name: "Byron",
        age: 1000,
        password: "footballiskewl"
    },
    {
        name: "Kiran",
        age: 30,
        password: "spinsciiswhereiwork"
    }
];
const getUsers = (req, res) => {

    res.status(200).json(usersArray)
    // axios.get('https://swapi.co/api/planets/1/')
    // .then(response => res.status(200).json(response.data))
}
const updateUser = (req, res) => {
    usersArray[req.body.userIndex].age = req.body.updatedAge
    res.status(200).json(usersArray);
}
const createUser = (req, res) => {
    usersArray.push(req.body)
    res.status(200).json(usersArray)
}
const deleteUser = (req, res) => {
    usersArray.splice(req.params.userIndex, 1)
    res.status(200).json(usersArray)
};

module.exports = {
    getUsers,
    updateUser,
    createUser,
    deleteUser
};