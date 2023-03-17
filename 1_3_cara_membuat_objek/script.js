// Cara membuat objek pada javascript
// 1. Objek literal

let mahasiswa1 = {
    nama: 'Sandhika',
    energi:10,
    makan:function (porsi){
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`)
    }
}

let mahasiswa2 = {
    nama: 'Adrian',
    energi:10,
    makan:function (porsi){
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}

//2. Function Declaration
//a. membuat objek dengan fungsi

function Mahasiswa(nama,energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    };
    mahasiswa.main = function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main!`);
    }
return mahasiswa;
}

let sandika = Mahasiswa('Sandhika',10);
let dody = Mahasiswa('Dody',20);

//b. fungsi disimpan di objek lain
// harus aware ketika ada penambahan fungsi, karena sekarang mengelola 2 objek
const Fungsi = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main!`);
    }
}

function Constb_Mahasiswa(nama,energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = Fungsi.makan;
    mahasiswa.main = Fungsi.main;
    return mahasiswa;
    
}

let kronos = new Constb_Mahasiswa('Kronos',100)

//c. mengatasi masalah b menggunakan object.create

const FungsiOc = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main!`);
    },
    tidur: function(jam){
        this.energi * jam;
        console.log(`halo ${this.nama}, selamat tidur!`)
    }
}

function ConstOc_Mahasiswa(nama,energi){
    let mahasiswa = Object.create(FungsiOc)
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let thanos = new ConstOc_Mahasiswa('Thanos',200);

//3. function Constructor

//a. Boros memori, karena fungsi energi dan main di create berulang-ulang
function Const_Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    };
    this.main = function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main!`);
    }
}

let adrian = new Const_Mahasiswa('Adrian', 50);
let semprul = new Const_Mahasiswa('Semprul', 1);

//b. Prototyping

function protMhs (nama,energi){
    this.nama = nama;
    this.energi = energi;
};

protMhs.prototype.makan = function(porsi){
    this.energi += porsi;
    return `halo ${this.nama}, selamat makan!`;
}

protMhs.prototype.main = function(jam){
    this.energi -= jam;
    return `halo ${this.nama}, selamat main!`;
}

protMhs.prototype.tidur = function(jam){
    this.energi * jam;
    return `halo ${this.nama}, selamat tidur!`;
}
let neptune = new protMhs('Neptune',900);

//c. Class
class Mhs {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }
    // didalam class tidak perlu ketik fungsi
    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main!`;
    }
    tidur(jam){
        this.energi *= jam;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let dewi = new Mhs('Dewi',900);


