// untuk membuat Variabel kita bisa pakai 3 keyword, yaitu Var, Let dan Const
var name // kita buat sebuah variable
name = 'John' // kita assign sebuah variable nama dengan isinya 'john'
console.log(name) // seharusnya isinya => John

// atau cara lain kita bisa langsung isi variablenya dengan let
let name2 = 'Nurul' // kalau let bisa diganti isinya
// cara mengganti Variable atau assign ulang Variable. name2 langsung diisi baru Jinny
name2 = 'Jinny'
console.log(name2)
const name3 = 'Ken Sanders' // kalau const tidak bisa diganti isinya. kalau diganti langsung seperti let maka akan eror
//const name3 = 'Alfa Ken'
console.log(name3)
// kapan kita pakai let kapan kita pakai const. 
// jika kita menggunakan penampung/ variable yang bisa diganti atau diisi ulang maka pakai let.
// tapi kalau pengen menggunakan penampung/ variable yang tidak bisa diganti/ Paten maka bisa pakai const
// Aturan untuk membuat Variable di Javasript
// 1. tidak boleh mengandung spasi. seperti (Stok Barang, Total Price) jika mengandung spasi maka akan eror
// 2. Hanya bisa dimulai dengan huruf atau underscore atau dollar.
// 3. Di dalam Variable hanya dapat mengandung huruf, angka, underscore atau dollar. tidak bisa mengandung yang lain seperti koma, titik, tanda seru.
// 4. Penamaan Variable di Javascript itu case sensitive,
// misalnya HasilNilai dan hasilnilai itu nanti akan beda
// Aturan penulisan Variable di Java Script/ berbagai cara penulisan Variable di Javascript
// 1. Camel Case (menggunakan huruf kapital sebagai pengganti spasi, biasa dipakai di Javascript)
// example : let totalBarang, stockProduct
// 2. snake case (mengganti spasi dengan underscore, biasa dipakai orang2 Phyton)
// Kapan kita menggunakan Variable...?
// Ketika kita mau menggunakan data tersebut lebih dari satu kali.
// ex. console Purwadika sebanyak 5x
console.log('Purwadika Is The Best')
console.log('Purwadika Is The Best')
console.log('Purwadika Is The Best')
console.log('Purwadika Is The Best')
console.log('Purwadika Is The Best')
// jika cara manual untuk mengganti string harus mengedit sebanyak string yang akan diganti. agar lebih efisien bisa menggunakan Let sebagai berikut
let kalimat = 'Javascript Is The Best'
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)

// Data Types
// 1. String => Kalimat/ Kata. Bisa pakai angka tapi harus dikasih tanda kutip
let data = 'Yusuf'
let data3 = '1234'
let data4 = `1234` // bisa juga pakai back tik (biasanya di bawahnya esc)
// 2. Numbers, itu terdiri dari dua jenis, yaitu Integers dan Float
// Contoh Integers
let data1 = 1
// float => itu yang pakai koma
let data2 = 1.5
// 3. Boolean => Data Kondisi, biasanya hanya ada True or False
let data5 = true
// 4. Object => bisa menyimpan banyak data dan bisa define. sedangkan Array hanya menyimpan banyak data aja.
let data6 = {
    name : 'John',
    age : 12,
    Single : true
}

// 5. Array itu pakai kurung siku, bisa nyimpen banyak data
let data7 = ['John', 12, true]
// 6. Undifine and Null => data kosong. kita buat variable tapi ga kita define isinya
let contoh
console.log(contoh)
// contoh null => kita isi dengan data, tapi datanya kosong
let contoh2 = null
console.log(contoh2)

// Typeoff
console.log(typeof 'laptop')
let uji = {
    name : 'Ken'
}
console.log(typeof uji)

// Numbers terdiri dari Integers (Bilangan Bulat) dan Float (ada koma)
// untuk menambah, pakainya tanda +
//contoh
// Aritmatics Numbers
let a = 1+2 // penambahan
console.log(a)
let b = 4-2 // pengurangan
console.log(b)
let c = 2*5 // perkalian
console.log(c)
let d = 15/3 // pembagian
console.log(d)
let e = 7%2 // modulus karena 7-2-2-2
console.log(e)
let e1 = 13%5 // modulus
console.log(e1)

let f = 2
f++ // incement artinya variable f ini masih ditambah 1
console.log(f) 
let g = 2
g-- // decrement
console.log(g)

// Shorthands Operators
let h = 2
h = h+5
console.log(h)

let i = 2
i +=5 // i = i (2+5)
console.log(i)

let j = 3
j %=2 //j = j % 2
console.log(j)