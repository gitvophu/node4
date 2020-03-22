const user_obj = require('../model_module/module_user').user_obj;
const greeter_controller = {
    sayHello:function(call, callback){
        console.log(call['metadata']['_internal_repr']['authorization'][0]);
        callback(null, {message: 'Hello ' + call.request.name});
    }
};
module.exports.greeter_controller = greeter_controller;