/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        email : {
            type : 'email',
            require : true,
            unique : true
        },
        password : {
            type : 'string',
            required : true,
            minLength : 6
        }
    }
};

