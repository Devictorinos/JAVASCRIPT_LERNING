var directory = {
    children: [{
        name: "home",
        children: [{
            name: "downloads",
            children: [{
                name: "movies",
                children: []
            }, {
                name: "music",
                children: []
            }, {
                name: "pictuures",
                children: []
            }]
        }]

    }, {


        name: "root",
        children: [{
            name: "system",
            children: []
            }, {
            name: "etc",
            children: []
        }]
    }]


};



function showDir (dir, deph) {

    var deph = deph || 0;
    var len  = dir.children.length;

    console.log("dir name is : " + dir.name + " and deph is :" + deph);

    while (len > 0) {
        len--;

        showDir (dir.children[len], deph+1);
    } 

}

showDir(directory);
