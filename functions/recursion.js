var tree = {
    name: "Users",
    children: [{
        name: "heavesixer",
        children: [{
            name: "Applications",
            children: []
        }, {
            name: "downloads",
            children: []
        }, {
            name: "library",
            children: []
        }, {
            name: "accouns",
            children: []
        }, {
            name: "ardurino",
            children: []
        }]
    },{
        name: "root",
        children: []
    }] 
};



    var walker = function walk(branch, newDeph) {
    var deph = newDeph || 0;
    var len = branch.children.length;

    console.log(deph + " : " + branch.name + " : " + len);

    while (len > 0) {
        len --;
        walker(branch.children[len], deph +1);
        //arguments.callee(branch.children[len], deph +1);//recommended, an no use it like this, because of dependency of use strict
    }
}

walker(tree);