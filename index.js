const fs = require("fs")


fs.readFile('welcome.txt', function (error, value) {
    if (error) {
        return console.log(error);
    }
    console.log("succesfullll", value.toString());//ascii
})

// const example = fs.readFileSync('welcome.txt')
// console.log(example.toString());

fs.writeFile('welcome.txt', 'hello World', function (error) {
    if (error) throw error;
    console.log('changed');
})


//file system
console.log("hello");
console.log("welcome");

//NPM (node packing module)
