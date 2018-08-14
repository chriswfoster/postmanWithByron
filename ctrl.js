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
]
const getUsers = (req, res) => {
    res.status(200).json(usersArray)
}
const updateUser = (req, res) => {
    res.status(200).json(usersArray);
}
const createUser = (req, res) => {
    usersArray.push(req.body)
    res.status(200).json(usersArray)
}
const deleteUser = (req, res) => {


    res.status(200).json(usersArray)
}

module.exports = {
    getUsers,
    updateUser,
    createUser,
    deleteUser
}