// SYNTAX FUNCTION
// FUNCTION DECLARATION
function myFunction(){
    console.log(`Ini Function Declaration`)
}

// FUNCTION EXPRESSION
let myfunction2 = function(){
    console.log(`ini Function expression`)
}

//Function Expression with arrow function 
let myfunction3 = () => {
    console.log(`Arrow Function`)
}

//Call Function
myFunction()
myfunction2()
myfunction3()

let greeting = () => {
    let name1 = `Andra`
    let name2 = `Andaru`
    let namaLengkap = name1 + name2

    //output dari sebuah function, dibuat dengan keyword return
    console.log(namaLengkap)
}

//Bedanya return dan console.log
// Kalau console.log untuk menampilkan, sedangkan return itu kata kunci di dalam function untuk mengeluargan output functionnya
greeting()

//WITH PARAMETER
let hello = (a, b) => {
    console.log(`Hello ${a + b}`)
}

hello(`Yusuf `, `Hilman`)

// RETURN
// Return digunakan ketika kita mau memakai sebuah hasil dari function nya
// Return juga untuk menghentikan proses dari si Function
let number1 = () =>{
    let a = 2**2
    return a
}

let number2 = () => {
    let b = 3**2
    return b
}

console.log(number1() * number2())

//Parameter and Return
let sum = (input1, input2) => {
    return input1 + input2
}

console.log(sum(2, 5))

let power = (input3, input4) => {
    return input3 ** input4
}

console.log(power(2, 3))

// Parameter or Function
// Parameter => adalah  yang kita buat saat membuat function
// Argument => adalah value uang kita buat saat memanggil Function

//Default Parameter
let sum1 = (a, b, c = 5) => {
    return a + b + c
}

console.log(sum1(3,4))

let sum2 = (a, b, c = 5) => {
    return a + b + c
}

console.log(sum2(3,4,2))

//Callback Function => kita memasukan parameternya itu function juga
//isi dari sebuah parameter adalah function
let minus = (a, b) =>{
    // a = 20
    // b = 10 (hasil dari return function angka())
    return a - b
}

let angka = () => {
    return 10
}
// ketika function dipanggil menjadi argument, maka itu adalah callback function
console.log(minus(20, angka()))

// Calling other Function
let addition = (a, b) => {
    return a + b
}

let substraction = (a, b) => {
    return a - b
}

let multipliction = (a, b) => {
    return a * b
}

let division = (a, b) => {
    return a / b
}

let showResult = (b, a) => {
    console.log(addition(a,b))
    console.log(substraction(a,b))
    console.log(multipliction(a,b))
    console.log(division(a,b))
}

showResult(10, 5)

//Recursive Fuction => mirip looping (function yang memanggil dirinya sendiri)
let countdown = (counter) => {
    console.log(counter)
    counter--
    if (counter>=0) {
        countdown(counter)
    }
}

countdown(4)

//Array Method
// ForEach => untuk melooping isi Array
