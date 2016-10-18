
var UserController = {

    index: function(req, res){
        res.view();
    },
    list: function(req, res){
        User.findAll().limit(10).sort('createdAt ASC').done(function(err,users){
            if(err){
                return console.log(err);
            }else{
                console.log('users found:',users);
                res.view({
                    users:users
                });
            }
        });
    },
    create: function(req,res){
        User.create({
            name: req.body.name,
            mobile: req.body.mobile,
            country: req.body.country
        }),done(function(err, user){
            if(err){
                return console.log(err);
            }else{
                console.log("user created:",user);
            }
        });
    },
    edit: function(req,res){
        User.find(req,param('id')).done(function(err, user){
            if(err){
                return console.log(err);
            }else{
                console.log('user found:',user);
                res.view({
                    users:user
                });
            }
        });
    },
    update: function(req,res){
        User.update({
            id: req.param('id')
        },{
            name : req.body.name,
            mobail: req.body.mobile,
            country: req.body.country
        }, function(err, user){
            if(err){
                return console.log(err);
            }else{
                console.log('user updated:',user);
                res.redirect('/user');
            }
        });
    },
    destroy:function(req,res){
        User.destroy({
            id:req.param('id')
        },
        function(err){
            if(err){
                return console.log(err);
            }else{
                console.log('user deleted');
                res.redirect('/user');
            }
        });
    }
};

module.exports = UserController;
