let str = 'Javasript'

//escape character
let a = "Wait. I'll be in there a second"
console.log(a)
let b = 'Wait I\'ll be in there a second'
console.log(b)
let c = `Wait, I'll be in there a second`
console.log(c)
let d = 'Hello \n Guys!' //akan menjadi enter
console.log(d)
let e = 'Hello \t Guys!' // akan menjadi tab
console.log(e)

// Concatinate String untuk menggabungkan lebih dari satu String
let firstName = 'Nicole'
let lastName = 'Sadjoli'
console.log(firstName + lastName)
console.log(firstName + ' ' + lastName)

let angka = '8'
let str2 = 12
console.log(angka + str2, typeof(angka + str2))

//Backtick
let first_name = 'Naufal'
let last_name = 'Afif'
console.log(`${first_name} ${last_name}`) // Dollar dipakai backtick kalau kita mau manggil variable lain
// back tick memudahkan kita memanggil variable lain untuk dimasukan ke dalam string

//String Properties and Method
let x = 'Hello World'
// index adalah urutan, dimulai dari Nol
console.log(x.length) // untuk menghitung panjang atau jumlah karakter dalam satu string
console.log(x.indexOf('World')) // untuk mencari index dari sebuah kata
console.log(x.substring(0, 3)) // menggambil sebagian dari string dimulai dari urutan nol sebanyak 5
console.log(x.slice(0, 5)) // sengambil sebagian dari string mulai dari nol sampai indeks ke berapa
console.log(x.slice(6, 11)) // menggambil sebagian dari string diambil dari indeks ke 6 sampai ke 11
console.log(x.split(' ')) // diambil/ dibagi berdasarkan spasi
console.log(x.split('l'))
console.log(x.split('c')) // tidak akan tersplit kalau parameternya tidak ada di string

let y = 'hello'
let z = 'WORLD'
console.log(y.toUpperCase()) // mengganti menjadi kapital semua
console.log(z.toLowerCase()) // untuk mengganti menjadi huruf kecil semua
console.log(y.replace('l', 'n')) // dia akan mengganti huruf l pertama menjadi huruf N
console.log(y.replace(/l/g, 'n'))
console.log(y.replace('ll', 'n'))
// contoh replace untuk mengganti huruf e dan o
let res = y.replace('e', 'n')
let res2 = res.replace('o', 'n')
console.log(res2)

let text = 'Hello World'
console.log(text.includes('Hello'))
console.log(text.includes('Hellos'))
console.log(text.includes('world'))