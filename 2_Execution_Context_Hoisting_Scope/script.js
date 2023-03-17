// 1. Creation phase pada global context 
// Komsep Hoisting: (mengerek bendera / dinaikan keatas)
//=> javascript akan mengecek apakah ada variable di dalam file, kalau ada semua variable akan diisi dengan undefined dulu. Lalu apabila da function, javascript akan mengisi function tersebut dengan kode function nya (fn())

// 2. Execution Phase
//=> setelah variable dan function dinaikan dan diisi dengan default yaitu undefined dan nama fungsi tersebut, maka javascript akan mengeksekusinya baris per baris

// console.log(sayHello());

var nama ='Adrian';
var umur = 24;

function sayHello(){
    return `Hallo, Nama saya ${nama}, umur ${umur}`
}

// console.log(sayHello());

//setiap function dipanggil maka akan menciptakan execution context yang baru. Disebult local execution context

function a(){
    console.log('ini a');

    function b(){
        console.log('ini b');

        function c(){
            console.log('ini c')
        }
        c();
    }
    b();
}
// a();



// Closure function yang me-return function atau disebut juga inner function

function init(){
    let nama = 'Hadinata';
    function tampilNma(){
        console.log(nama);
    }
    tampilNma()
    // console.dir(tampilNma)
}
// init();
// console.dir(init);

// function disimpan ke variable

function onot(){
    // Anonymous Function
   return function(nama){
        console.log(nama);
    }
}
let panggilNama = onot();
// panggilNama('Zeus')

// => kenapa menggunakan Closure ?
//1. untuk membuat function Factory
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`)
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Orewa');

//2. untuk membuat private function

//immediately invoke function
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    } 
})();

console.log(add());
console.log(add());
console.log(add());