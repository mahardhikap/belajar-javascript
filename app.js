// console.log('sebelum pembanding');
// if (1 + 1 === 2) {
//     console.log('di dalam pembanding');
// }
// console.log('setelah pembanding');

// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5) {
//     console.log('Angka lebih besar dari 0.5');
// }

// if(angka <= 0.5) {
//     console.log('Angka lebih kecil dari 0.5');
// }

// const iniHari = prompt('Isikan hari!').toLowerCase();

// if(iniHari === 'senin') {
//     console.log('Selamat bekerja kawan!');
// } else if(iniHari === 'sabtu') {
//     console.log('Semoga jangan cepat berlalu!');
// } else if (iniHari === 'minggu') {
//     console.log('Hari yang syahdu!');
// } else {
//     console.log('Yah biasa saja');
// }

// const nilai = '49';

// if (nilai < 50) {
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
// } else if (nilai < 70) {
//     console.log('C');
// } else if (nilai < 80) {
//     console.log('B');
// } else if (nilai < 100) {
//     console.log('A');
// }

const password = prompt('buat password!');

//password harus sepanjang 6 karakter
if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log('Password valid');
    } else {
        console.log('Password tidak boleh ada spasi');
    }
} else {
    console.log('Password minimal 6 karakter');
}

