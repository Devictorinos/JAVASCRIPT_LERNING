var secretStore = (function () {
    var data, secret, newSecret;

    //emulation of private functions and variables
    data   = "secret";
    secret = function () {
        return data;
    };

    newSecret = function (newValue) {
        data = newValue;
        return secret();
    }

    return {
        getSecret: secret,
        setSecret: newSecret
    }
})();

var secret = secretStore;
console.log(secret.getSecret());
console.log(secret.setSecret('new secret'));

var secret2 = secretStore;
console.log(secret2.getSecret());

console.log(secret2.getSecret === secret.getSecret)

