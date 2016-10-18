/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    goodman: function (req, res) {
        res.send("res send u4ib");
    },
    hi: function(req,res){
        return res.send('hi there');
    },
    bye: function(req,res){
        return res.redirect('https://github.com/u4bi');
    }
};

