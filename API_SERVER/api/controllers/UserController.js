/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create : function(req, res){
    User.create({name: '명재', age : 17, phone : '010-7777-1234', money : 1000}).exec(console.log);
    User.create({name: '명돌', age : 18, phone : '010-7777-2234', money : 3000}).exec(console.log);
    User.create({name: '명훈', age : 19, phone : '010-7777-3234', money : 4000}).exec(console.log);
    res.send('created!');
  }
};

