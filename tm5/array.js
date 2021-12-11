// ARRAY
// SYINTAX ARRAY
let things = [5, `Book`, true, undefined, null, [], {}]

// cara akses Array
console.log(things[1])

//Change data ARRAY
things[3]= `Pencil`
console.log(things)

// Create New Index
console.log(things.length)
console.log(things)
things[8]= true
console.log(things)
console.log(things[7])
console.log(things.length)

//PUSH AND POP
let fruit = [`apel`, `melon`, `pisang`]
fruit.push([`Durian`,`Kiwi`]) // untuk menambah data baru pada elemen terakhir di Array
console.log(fruit)
fruit[3].pop() //Artinya menghapus satu elemen terakhir di dalam Array
console.log(fruit)

// UNSHIFT AND SHIFT
let a = [`gitar`, `bola`, `celana`]
a.unshift(10, 20) // mirip seperti push, tapi nambahinnya di depan
console.log(a)
a.shift()
console.log(a)// mirip Pop, tapi menghapusnya di depan

// for(let i = 0; 1<4; i++){
//     fruit.pop()
// }

// Splice dan Delete
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (start, jumlah data yang dihapus, optional => new data)
// Splice for delete
number.splice(1, 3)
console.log(number)
// SPLICE FOR DELETE AND REPLACE
number.splice(1,3,7) 
console.log(number)
// SPLICE FOR INSERT
number.splice(2,0,7,8) // dimasukan dari index kedua, dihapus 0 data dimasukan 7 dan 8
console.log(number)

//DELETE => untuk menghapus data tanpa menghapus index yang digunakan
let b = [1, 2, 3, 4]
delete b[1]
console.log(b)

//SLICE untuk mengambil isi Array, tapi tidak sampai index terakhir
let c = [1, 2, 3, 4, 5, 6]
let c2 = c.slice(1,3) // diambil dari index ke 1 sampai index ke 4 tapi index ke 3 tidak diambil
let c3 = c.slice(2,4) // diambil dari index ke 2 sampai index ke 4 tapi index ke 4 tidak diambil
console.log(c2)
console.log(c3)

// INCLUDES
let d = [1, 2, 3, 4, 5]
console.log(d.includes(2))
console.log(d.includes(6))

// INDEXOF 
let e = [`book`, `pencil`, `eraser`, `sharpener`]
console.log(e.indexOf(`pencil`)) // cari index dari item pencil
console.log(e.indexOf(`car`)) // jika yang di cari tidak ada maka hasilnya -1

//Sort => mengurutkan data 
let word = [`pencil`, `car`, `melon`, `budi`, `ball`]
console.log(word.sort())
let campur = [`word`, 1, true,`abc`, 2, false, undefined, null, [1, 2], [`a`, `z`]]
console.log(campur.sort())

let f = [3, 5 , 2, 1, 4]
console.log(f.sort((a, b) => b - a))

// REVERSE => tidak mengurutkan, tapi hanya membalik saja
let g = [`pencil`, `car`, `melon`, `budi`, `ball`]
console.log(g.reverse())

// JOIN => menggabungkan data di dalam array menjadi string
let h = [`Ade`, `Andra`, `Dimas`, `Gandang`]
console.log(h.join(` - `))
console.log(h.join(` / `))

// Menggunakan banyak method pada sekali eksekusi array
let i = [`Gandang`, `Andra`, `Ade`, `Dimas`, 'Nafis']
let i2 = i.slice(1).sort().join(` - `)
console.log(i2)

// CONCATINATING ARRAY => untuk menggabungkan data di Array yang berbeda menjadi 1 Array
let arr1 = [`apel`, `mangga`]
let arr2 = [`pensil`, `pulpen`]
let arr3 = [`rabbit`, `bear`]

let arr4 = arr1.concat(arr2)
console.log(arr4)
let arr5 = arr4.concat(arr3)
console.log(arr5)

// ARRAY TWO DIMENTION
let j = [[1, 2], [3, 4], [[5, 6, [9, 10]], 7, 8]]
console.log(j[2][0][0]) // how to get value 5
console.log(j[2][2]) // how to get 8
console.log(j[2][0][2][1])