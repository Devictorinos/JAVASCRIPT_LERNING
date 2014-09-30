;var Person = {};
var Bank = {

    funds:0,
    receiveDepositFrom: function (person) {

        this.funds += person.funds;
        person.funds = 0;

    }

};

console.log(Person.funds);

Person.funds = (function work () {

    return 100;

})();

console.log(Person.funds);

Bank.receiveDepositFrom(Person);

console.log(Person.funds);

login('user','password', function (result) {

        if (result.ok) {

            getProfile(function (result) {

        if (result.ok) {

            updateProfile(result.user, function (result) {

        if (result.ok) {

            callback(user);

         }

            });

        }

         });

    }

}, callback);
