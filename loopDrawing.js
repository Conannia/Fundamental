//****** Horizontal

let res = ``
for(let i = 0; i<5; i++){
    res += ` * `
}
console.log(res)
// setelah loopingnya selesai, maka res diconsole.log 


// segitiga siku2
let resa = ``
for(let i = 0; i<5; i++){
    resa += ` * `
    console.log(resa)
}
// resa akan ditambah * setiap kali looping

// Vertikal
let res2 = ``
for(let i = 0; i < 5; i++){
    res2 += `*` + `\n`
}
console.log(res2)

// Bentuk kotak
let res3 = ``
for (let i = 0; i < 5; i++) { // i => 0
    for (let j = 0; j < 5; j++){ // j => 0
        res3 += ` * `
    }
    res3 += '\n'
}
console.log(res3)

//segitiga siku2
let res4 = ``
for (let i = 0; i < 5; i++){ // i => 0 1
    for(let j = 0; j <= i; j++){ // j => 0 1 2 
        res4 += ` * `
    }
    res4 += `\n`
}
console.log(res4)