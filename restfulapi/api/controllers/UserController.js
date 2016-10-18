/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var dataArray = ['A','B','C'];

module.exports = {
    index: function(req, res){
        var u4biServiceMsg = UserService.sayMsg();
        res.send('service : '+u4biServiceMsg);
    },
    goodman: function (req, res) {
        res.send("res send u4ib");
    },
    hi: function(req,res){
        return res.send('hi there');
    },
    bye: function(req,res){
        return res.redirect('https://github.com/u4bi');
    },
    rootcode10: function(req, res){
        return res.view('u4bi_template/rootcode10',{
            data: dataArray,
            serviceData : UserService.sendData()
        });
    },
    jsonAPI: function(req, res){
      /*
        res.json(null)
        res.json({ user: 'tobi' })
        res.json(500, { error: 'message' })
      */
        return res.json({ user: 'tobi'});
    },
    jsonpAPI: function(req, res){
        return res.jsonp({
          users: [{
            name: 'thelma',
            id : 1
          },{
            name : 'leonardo',
            id:2
          }]
        });
    },
    update: function(req,res){
      return res.view('user/update');
    },
    ok: function(req, res){
      /* return res.ok(data, pathToView); */
        return res.ok({
          name: 'u4bi',
          occupation: 'developer'
        }, 'user/detail');
    }
};

