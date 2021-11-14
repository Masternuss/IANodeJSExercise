const a = 1, b = 2, c = 3;

const oldObject = {
    a:a,
    b:b,
    c:c,
    toString: function() {
        return "oldObject: " + a + b + c;
    },
    "123": 42
};
console.log(oldObject);
console.log(oldObject.toString());

const newObject = {
    a,
    b,
    c,
    toString() {
        return "newObject: " + a + b + c;
    },
    [""+a+b+c]:42
};
console.log(newObject);
console.log(newObject.toString());