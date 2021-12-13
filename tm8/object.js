// Object
//SYNTAX oBJECT
let obj = {
    name : `Apple`, 
    price : 10000,
    stock : 9
}

//How to access Value in Object
console.log(obj.name)
console.log(obj[`price`])

//Make object with new keyword
let obj2 = new Object() //let obj2= {}
obj2.username = `Juan`
console.log(obj2)

// Method => sebutan function di dalam object
let obj3 = {
    name : `Hirdzan`,
    hello : function greet(){
        console.log(`hello`)
    }
}

obj3.hello()

let obj4 = {
    name : `Hirdzan`,
    greet(){
        console.log(`hello`)
    }
}
//How to access Method
obj4.greet()

//This => keyword yang kita gunakan untuk mengambil value di dalam object
let obj5 = {
    name : `Kuroky`,
    intro : ( ) => {
        console.log (`Hello! My name is ${obj5.name}`)
    } 
}
obj5.intro()

let obj6 = {
    name : `Kuroky`,
    intro : function() {
        console.log (`Hello! My name is ` + this.name)
    } 
}
obj6.intro()

//Class 
// What => cetakan untuk membuat object dengan property yang sama persis dan value nya berbeda
// When => ketika kita butuh untuk membuat object dengan properti yang sama berkali - kali
// WHY => tentu untuk mempermudah dalam membuat object yang sama sehingga tidak perlu membuat objject dengan property yang sama berkali - kali.
class Artis {
    constructor(nama, lagu, rilis){ //constructor adalah syntax untuk menulis argumen
        this.nama = nama,
        this.lagu = lagu,
        this.tahun = rilis
    }

    intro = () => {
        console.log(`I am a singer`)
    }
}

let artis1 = new Artis(`Isyana`, `Angan - anganku`, 2018)
let artist2 = new Artis(`Afgan`, `Sadis`, 2015)
console.log(artis1)
console.log(artist2)
artis1.intro()

// INHERITENCE => Class untuk mencetak class lainnya
class LivingThings{
    constructor(name, age, alive) {
        this.name = name,
        this.age = age,
        this.alive = true
    }

    eat = () => {
        console.log(`eating`)
    }

    breed = () => {
        console.log('breed')
    }
}

class Human extends LivingThings{
    constructor(name, age, pet){
        super(name, age)
        this.pet = pet
    }

    work = () => {
        console.log(`work`)
    }
}

//inheritance dari human (Livingthings => human => animal)
class Animal extends LivingThings{
    constructor(name, age, pet, fly){
        super(name, age, pet)
        this.fly = fly
    }

    tail = () => {
        console.log(this.tail)
    }
}

let human1 = new Human(`Budi`, 20, `dog`)
let animal1 = new Animal(`Monkey`, 5, false, false)
console.log(human1)
console.log(animal1)

// INHARITANCE FROM 2 CLASS => eror => TIDAK BISA,
// Karena extends hanya bisa sekali dipakai dalam INHARITANCE
// class A1 {
//     constructor(nama){
//         this.nama = nama
//     }
// }

// class B2 {
//     constructor(umur){
//         this.umur = umur
//     }
// }

// class Fusion extends A1 extends B2 {
//     constructor(nama, umur, hobi){
//         super(nama)
//         super(umur)
//         this.hobi = hobi
//     }

// }

// let hasil = new Fusion(`Budi`, 20, `Codding`)
// console.log(hasil)