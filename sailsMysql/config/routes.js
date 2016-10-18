module.exports.routes = {
    '/': {
        view: 'homepage'
    },
    'get /user' : {
        controller  : 'user',
        action      : 'list'
    },
    'post /user' : {
        controller  : 'user',
        action      : 'create'
    },
    'get /user/:id' : {
        controller  : 'user',
        action      : 'edit'
    },
    'put /user/:id': {
        controller  : 'user',
        action      : 'update'
    },
    'get /user/delete/:id': {
        controller  : 'user',
        action      : 'destroy'
    }
};
