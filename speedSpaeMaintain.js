// Tolong tampilkan console.log(`Hello Everybondy!`) sebanyak 5x
// 1. console.log sebanyak 5x secara manual
console.log(`Hello Everybondy!`)
console.log(`Hello Everybondy!`)
console.log(`Hello Everybondy!`)
console.log(`Hello Everybondy!`)
console.log(`Hello Everybondy!`)

// 2. Pakai Looping
for(let i = 0 ; i < 5; i++){
    console.log(`Hello Everybody`)
}

// Dari segi speed, Alternatif pertama menang. Karena dalam mengeksekusi perintahnya mesin hanya perlu menjalankan console.log tanpa melihat hal yang lain.
// sedangkan alternatif 2, mesin perlu melakukan banyak hal seperti menyimpan variabel di dalam RAM. melakukan checkin kondisi, increment dll.

/* Dari segi space, Alternatif 1 punya kelebihan dari segi space untuk RAM, karena mesin hanya melakukan 1 hal, bukan beberapa hal. Sedangkan Alternatif ke 2 menang dari segi space untuk Hardisk karena Alternatif 2 itu hanya 3 baris, sedangkan Alternatif 1 berisi 5 baris atau lebih banyak code*/

/* Dari segi Maintainability, lebih bagus yang kedua karena lebih mudah diganti atau direvisi di bagian rumusnya. 
sedangkan yang Alternatif 1 harus diganti satu per satu*/