// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    // returns all burgers
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    //creates a burger
    create(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    //update function
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};


// Export the database functions for the controller
module.exports = burger;