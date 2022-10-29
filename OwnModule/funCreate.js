const add = (a,b)=> {
    return a+b;
}

const sub = (a,b)=> {
    return a-b;
}
const name = "shivam";

// 1.
// module.exports = add; --> for single variable not work for more than one function
 
// 2.
// module.exports.add = add;
// module.exports.sub = sub;

// 3.
// module.exports = {add , sub};

// 4.
module.exports = {add , sub, name};



