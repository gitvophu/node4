class Utils {
    static getBearerToken(bearer){
        var token = bearer.split(" ").pop();
        return token;
    }
}
module.exports.Utils = Utils;