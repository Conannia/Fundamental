let products = [
    {
        id: 1639642627967,
        kate: `Fast Food`,
        nama: `Noodle`,
        harga: 3500,
        stok:9
    },
    {
        id: 1639612327967,
        kate: `Electronic`,
        nama: `Headphone`,
        harga: 350000,
        stok: 8
    },
    {
        id: 1639642626597,
        kate: `Cloth`,
        nama: `Hoodie`,
        harga: 150000,
        stok: 6
    },
    {
        id: 1639642123967,
        kate: `Fruit`,
        nama: `Apple`,
        harga: 13500,
        stok: 7
    }
]

class Product {
    constructor(id, kate, nama, harga, stok){
        this.id = id
        this.kate = kate
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }
}