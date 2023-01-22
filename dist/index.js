"use strict";
let foo = 5;
// Error
// foo = '5'
foo = 50;
console.log(`foo: ${foo}`);
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
// array containing only numbers
let ids = [1, 2, 3, 4];
let arr = [1, 'hi', false];
// Tuple - order specific
let person = [69, 'Nick', true];
// Tuple array
let employee;
employee = [[1, 'Brad'],
    [2, 'Maria'], [3, 'John']];
// Union
let ids2 = 32;
ids2 = '32';
// Enum
var Direction1;
(function (Direction1) {
    // 1
    Direction1[Direction1["Up"] = 0] = "Up";
    // 2
    Direction1[Direction1["Down"] = 1] = "Down";
    // 3
    Direction1[Direction1["Left"] = 2] = "Left";
    // 4
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
// Out: 3
// Enum w/ strings
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
// Out: Left
// Objects
// 1 - types on object
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: 'Maria'
};
// Tyoe Assertion
let cid = 1;
// let customerId = <number>cid 
let customerId = cid;
// ( : varType , : varType): returnType
const addNum = (x, y) => x + y;
// Void Type - No return 
const log = (message) => {
    console.log(message);
};
const user3 = {
    id: 2,
    name: 'Maria'
};
const p1 = 1;
const user4 = {
    id: 2,
    name: 'Maria'
    // , age: 5
};
const addNums = (x, y) => x + y;
// Same as
// const add = (x: number, y: number): number => x + y
// or w/ explicit typing, but following interface typing 
// const add: MathFunc = (x: number, y: number): number => x + y 
const sub = (x, y) => x - y;
const add = (x, y) => x + y;
class Person {
    // constructor runs when crating a new Class
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // class function
    register() {
        return `${this.name} is now resgistered`;
    }
}
// runs constructor with given properties
const lul = new Person(1, '/luan-brav0');
console.log(lul.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const mark = new Employee(3, 'Mark', 'Developer');
console.log(mark.register());
// Generics
// Allows for type holder to expect the correct types when executing in different situations
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['a', 'b', 'c']);
// will return Error
// numArray.push('hello')
