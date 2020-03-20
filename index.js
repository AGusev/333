var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000);

console.log('Listening to the port 3000...');

var example = {
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
};

app.get(
    '/api/example.json',
    function (req, res) {
        res.send(example);
    }
);

var getPrice = function() {
    var thePrice = 500;
    if (this.speed == "4GHz") {
        thePrice += 300;
    }
    else {
        thePrice += 100;
    }
    if (this.hdspace == "1TB") {
        thePrice += 150;
    }
    else {
        thePrice += 80;
    }
    if (this.ram == "16GB") {
        thePrice += 200;
    }
    else {
        thePrice += 100;
    }
    return thePrice;
};
var Computer = function(speed, hdspace, ram) {
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.getPrice = getPrice;
    this.price = this.getPrice();
};

console.log(Computer);
var workComputer = new Computer("3.4GHz", "500GB", "4GB");
console.log(workComputer);
console.log(workComputer.price);
var homeComputer = new Computer("4GHz", "1TB", "16GB");
console.log(homeComputer);
console.log(homeComputer.price);
var laptop = new Computer("2.93GHz", "250GB", "8GB");
console.log(laptop);
console.log(laptop.price);


var computers = {
    "Work Computer": workComputer,
    "Home Computer": homeComputer,
    "Laptop": laptop
};
app.get('/api/computers.json', function(req, res) {
    res.send(computers);
});
