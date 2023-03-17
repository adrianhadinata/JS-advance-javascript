// Function Expression => fungsi yang disimpan ke dalam variable

let tampilPesan = function(nama){
    console.log('Hallo ' + nama);
}

tampilPesan('Adrian');

// Arrow function => bentuk lain dari Function Expression yang lebih ringkas

let tampilPesanArrow = (nama) => {
    console.log('Hallo ' + nama);
}

tampilPesanArrow('Hadinata');

let duaParameter = (nama, time) => {
    return 'Hallo ' + nama + '. Selamat ' + time;
}

console.log(duaParameter('Sisi', 'pagi'));

// Implisit return

let implisitFunction = nama => 'Hallo ' + nama;

console.log(implisitFunction('Adrian'));

// Tanpa parameter 

let noParams = () => 'Hello World!'

console.log(noParams());

//Function Map

let mahasiswa = ['Adrian', 'Bramantio', 'Pradima'];

let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});

console.log(jumlahHuruf);

// Function Map pake Arrow Function

let pekerja = ['Sutrisno', 'Kucit', 'Bambang']

let jumlahHurufArrow = pekerja.map(nama => nama.length)

console.log(jumlahHurufArrow);

// Function Map pake Arrow Function tapi returnnya objek

let project = ['E-BUDGETING', 'GI-LAYOUT', 'WHATSAPP-API'];

let retunObjek = project.map(nama => ({nama:nama, panjangHuruf:nama.length})  )

console.log(retunObjek);
console.table(retunObjek);