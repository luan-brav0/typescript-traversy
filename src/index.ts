let foo: number = 5
// Error
// foo = '5'
foo = 50
console.log(`foo: ${foo}`)

let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

// array containing only numbers
let ids: number[] = [1, 2, 3, 4]
let arr: any[] = [1, 'hi', false]

// Tuple - order specific
let person: [number, string, boolean] = [69, 'Nick', true]

// Tuple array
let employee: [number,string][]
employee = [[1, 'Brad'],
[2, 'Maria'], [3, 'John']]

// Union
let ids2: string | number = 32
ids2 = '32'

// Enum
enum Direction1 {
    // 1
    Up,
    // 2
    Down,
    // 3
    Left,
    // 4
    Right
}
console.log(Direction1.Left)
// Out: 3

// Enum w/ strings
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction1.Left)
// Out: Left

// Objects
// 1 - types on object
const user: {
    id:  number,
    name: string
} = {
    id: 1,
    name: 'John'
}
// 2 - types aside
type User2 = {
    id:  number,
    name: string
} 
const user2: User2 = {
    id: 2,
    name: 'Maria'
}

// Tyoe Assertion
let cid: any = 1
// let customerId = <number>cid 
let customerId = cid as number
// ( : varType , : varType): returnType
const addNum =(x: number, y: number): number => x + y
// Void Type - No return 
const log = (message: string | number):void => {
    console.log(message)
} 

// Interfaces
// no =
interface User3 {
    id:  number,
    name: string
} 
const user3: User3 = {
    id: 2,
    name: 'Maria'
}

// Types VS Interfaces
// Types can be used with unions and primatives
type Point = number | string
const p1: Point = 1
// Prefer Interfaces with Objects
interface User4 {
    // readonly to make constant
    readonly id:  number,
    name: string,
    // ? makes optional 
    age?: number
} 
const user4: User4 = {
    id: 2,
    name: 'Maria'
    // , age: 5
} 

// interfaces w/ funtions
interface MathFunc {
    (x: number, y: number): number 
}
const addNums: MathFunc = (x, y) => x + y
// Same as
// const add = (x: number, y: number): number => x + y
// or w/ explicit typing, but following interface typing 
// const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x:number, y:number):number => x - y 
const add: MathFunc = (x: number, y: number): number => x + y 

// Classes
interface PersonInterface {
    id:number
    name:string
    register():string // only returns strings
}
class Person implements PersonInterface {
    // Class properties
    // Can be public (default), private, protected
    // private id:number 
    id:number
    name:string

    // constructor runs when crating a new Class
    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    // class function
    register() {
        return `${this.name} is now resgistered`
    }
}
// runs constructor with given properties
const lul = new Person(1, '/luan-brav0')
console.log(lul.register())   
// Subclasses
class Employee extends Person {
    position:string
    constructor(id:number, name:string, position:string) {
        super(id, name)
        this.position = position
    }
}
const mark = new Employee(3, 'Mark', 'Developer')
console.log(mark.register())

// Generics
// Allows for type holder to expect the correct types when executing in different situations
function getArray<T>(items:T[]): T[] {
return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a', 'b', 'c'])
// will return Error
// numArray.push('hello')