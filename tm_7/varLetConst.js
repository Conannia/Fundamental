//Perbedaan Var, Let dan const

//Var
//scope
// function a(){
//     var name = `frengky`
// }

// console.log(name) //error

//Mutable
// var mobil = `toyota`
// mobil = `ferari`
// console.log(mobil)

//Let
//scope
// let i = 1
// while (i < 2) {
//     let gelas = `besar`
//     i++
// }
// console.log(gelas) //eror
//Mutable => True

//Const
// scope => function, conditional, looping
// let j = 1
// while (j < 2) {
//     let handuk = `besar`
//     j++
// }
// console.log(handuk) //eror

//Mutable = false
const single = false
single = true

console.log(single)// eror