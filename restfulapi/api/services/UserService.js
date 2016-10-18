var UserService = {
    sayMsg : function sayHelloService(){
        return 'u4bi test service';
    },
    sendData : function sendServiceData(){
        var data = ['AAA', 'BBB', 'CCC'];
        return data;
    }
}

module.exports = UserService;
