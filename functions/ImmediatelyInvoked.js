;!function () {
    var triumph  = false,
    cake         = false,
    satisfaction = 0,
    isLie,
    note;

    var isLie = function (val) {
        return val === false;
    }

    if (isLie(cake)) {
        triumph = true;

        makeNote('huge success');
        satisfaction += 10;
    }

    function makeNote(message) {
        note = message;
    }

    console.log("note = " + note);
    makeNote("Moderate Success");
    console.log("note = " + note);
    console.log("satisfaction = " + satisfaction);
}()
