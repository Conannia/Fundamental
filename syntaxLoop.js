// // WHILE --> jika false maka fungsi tidak bisa jalan
// let i = 5
// while(i > 0){
//     console.log(`Looping while`)
//     i--
// }

// // Do While, bedanya dengan While, dia melakukan perintahnya dulu, baru dicek conditionnya.
// let j = 0 //dia akan langsung mengkonsole baru di cek lagi ke let di atas
// do { // dia akan tetap menjalankan taks 1x walaupun kondisinya salah
//     console.log(`Looping Do While`)
//     j++
// } while(j < 5)

// For
// for(let k = 0; k < 5; k++) {
//     console.log(`Looping For`)
// }

// let k = 0
// for( ; k<5;k++){
//     console.log(`KAS`)
// }

// // Break and Continue
// // Break => untuk memaksa menghentikan looping
// // Contoh break untuk while
// let a = 0
// while(a< 5){
//     console.log(a)
//     if(a == 3) break
//     a++
//     //0 1 2 3
// }
// while(a< 5){
//     if(a == 3) break
//     console.log(a)
//     a++
//     // 0 1 2
// }

// contoh break untuk For
// for(let b = 0; b<5;b++){
//     if(b==3) break
//     console.log(b)
// } 

// for(let b = 0; b<5;b++){
// //     console.log(b)
// //     if(b==3) break
// } 

//CONTINUE => Untuk melewatkan task sesuai condition tertentu
// case : Tolong tampilkan hanya angka ganjil
for(let c = 0; c < 5; c++){
    if (c % 2 == 0) continue
    console.log(c)
}
for(let c = 0; c < 5; c++){
    console.log(c)
    if (c % 2 == 0) continue
    
}

// Tolong tampilkan huruf selain l
let str = `Hello`
for (let d = 0; d< str.length;d++){
    if (str.charAt(d)==`l`) continue
    console.log(str.charAt(d))
}
