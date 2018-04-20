var friendData = require("../data/friends");

module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        if (friendData.scores === true) {
            friendData.push(req.body);
            res.json(true);
        }
    })
};