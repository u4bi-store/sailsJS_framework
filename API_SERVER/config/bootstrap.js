/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  User.create({name: '명재', age : 17, phone : '010-7777-1234', money : 1000}).exec(console.log);
  User.create({name: '명돌', age : 18, phone : '010-7777-2234', money : 3000}).exec(console.log);
  User.create({name: '명훈', age : 19, phone : '010-7777-3234', money : 4000}).exec(console.log);
  cb();
};
