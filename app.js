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

// const password = prompt('buat password!');

//password harus sepanjang 6 karakter
// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//         console.log('Password valid');
//     } else {
//         console.log('Password tidak boleh ada spasi');
//     }
// } else {
//     console.log('Password minimal 6 karakter');
// }

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password Valid');
// } else {
//     console.log('Password tidak memenuhi syarat');
// }

// const role = prompt('masukan role akun');

// if(role !== 'admin') {
//     console.log('akses ditolak');
// } else {
//     console.log('boleh mengaksesnya');
// }

// const balonku = prompt('input warna balon')
// switch(balonku) {
//     case 'merah':
//         console.log('warna merah');
//         break;
//     case 'hijau':
//         console.log('dooooorrrrr');
//         break;
//     default:
//         console.log('bukan balon saya');
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++) {
//     console.log('ini namanya loop');
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log('ini namanya loop');
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 1) {
//     console.log('ini namanya loop');
//     console.log(i);
// }

//atau

// for (let i = 20; i >= 0; i-- ) {
//     console.log('ini namanya loop');
//     console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10 ) {
//     console.log('ini namanya loop');
//     console.log(i);
// }

// const animals = ['cat', 'dog', 'chicken', 'bird', 'fish'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1, animals[i]);
// }


// const studentRow = [
//     ['Fany', 'Nanda', 'Khadijah', 'Zahra'],
//     ['Nafis', 'Rafif', 'Bhram', 'Wanda'],
//     ['Azka', 'Daffa', 'Pratama', 'Dita'],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`  ${row[j]}`);
//     }
// }


// const pilihan = 'abcd';

// for (let i = 1; i < 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`     ${pilihan[j]}. Pilihan jawaban`);
//     }
// }



// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }


// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//     guess = prompt('enter the password');
// }
// alert('congrats! the password is correct');


// let input = prompt('Hei, say something!');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop') break;
// }
// alert('ok');


// for (let i = 0; i < 10000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// vvvv Batas Atas Code Game vvvv

let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
let attempts = 1;

while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));


while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
    } else {
        guess = parseInt(prompt('Terlalu rendah! tebak lagi:'));
    }
}

alert(`Selamat tebakanmu benar! Dengan percobaan ${attempts} kali`);

// ^^^^ Batas Bawah Code Game ^^^^