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

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat row #${i + 1}`);
//     for (let row2 of row) {
//         console.log(`   ${row2}`);
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

// let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// let attempts = 1;

// while (!maximum) {
//     maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'));

// while (parseInt(guess) !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
//     } else {
//         guess = parseInt(prompt('Terlalu rendah! tebak lagi:'));
//     }
// }

// alert(`Selamat tebakanmu benar! Dengan percobaan ${attempts} kali`);

// ^^^^ Batas Bawah Code Game ^^^^

// const fruits = ['Jackfruit', 'Durian', 'Pineapple', 'Melon', 'Watermelon'];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(`Buah ${fruits[i]}`);
// // }

// for (const buah of fruits) {
//     console.log(`Buah ${buah}`);
// }

// const studentScore = {
//     Olivia: 20,
//     Liam: 13,
//     Emma: 40,
//     Noah: 18,
//     Amelia: 32,
//     Oliver: 10,
//     Ava: 11,
//     Elijah: 21,
//     Sophia: 14,
//     Mateo: 22,
// };

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);

// let lemparDadu = console.log(lemparDadu);
// function lemparDadu() {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi() {
//     console.log('Cek...');
//     console.log('Do re mi...');
// }

// nyanyi();

// function selamatPagi(name) {
//     console.log(`Hello, ${name}. Selamat Pagi!`);
// }

// selamatPagi('Mahardhika');

// function jumlahkan(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'not number';
//     }
//     return a + b;
// }

// let programming = 'JavaScript';

// function typeSafe() {
//     let programming = 'TypeScript'
//     console.log(programming);
// }

// typeSafe();
// console.log(programming);

// let tinggi = 8;
// if(tinggi > 5) {
//     let lebar = 10;
//     console.log('Lebar: ', lebar);
// }

// console.log('Tinggi: ', tinggi);

// for (let index = 0; index < 10; index++) {
//     const lebar = index;
//     console.log('Lebar lebih kecil dari 10: ', lebar);
// }

// function lamarKerja() {
//     const jabatan = 'Programmer';
//     function orangDalam() {
//         let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//         console.log(kenalan);
//     }
//     orangDalam();
// }

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function(nilai) {
//     return nilai * nilai;
// }

// hasilPerpangkatan();

// function duaKali(func) {
//     func()
//     func()
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// function hasilnyaAdalahFunction() {
//     const rand = Math.random()
//     if(rand > 0.5) {
//         return function() {
//             console.log('Selamat, angkanya lebih besar');
//         }
//     } else {
//         return function() {
//             console.log('Maaf, mungkin bisa coba lagi');
//         }
//     }
// }

// function myFun() { //function biasa
//     console.log('Hi');
//     return 'Hello';
// }

// const myMath = { //object
//     perkalian: function (x, y) { //method
//         return x * y;
//     }
// }

// const saya = {
//     nama: 'Mahardhika',
//     hobi: 'Youtube-an',
//     kenalan: function() {
//         return `Hi nama saya ${this.nama}. Hobi saya yaitu ${this.hobi}.`
//     }
// }

// try {
//   saya.kenalan();
// } catch {
//   console.log("error!!!");
// }

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Silahkan masukkan tipe data string ke argument teriak()");
//   }
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num) {
//     return num * 2;
// });

// const angkaGanjil = angka.filter(n => {
//   return n % 2 === 1;
// });
// const angkaBaru = angka.filter(n => {
//   return n < 5;
// });

// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const examScore = [80, 85, 70, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// let total = 0;
// for (let score of examScore) {
//   total += score;
// }

// const total = examScore.reduce((total, score) => {
//   return total + score;
// });

// const animes = [
//   {
//     title: "Attack On Titan",
//     rating: 90,
//     year: 2014,
//   },
//   {
//     title: "One Piece",
//     rating: 89,
//     year: 1999,
//   },
//   {
//     title: "Bleach",
//     rating: 95,
//     year: 2008,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 50,
//     year: 2015,
//   },
//   {
//     title: "Naruto",
//     rating: 80,
//     year: 2002,
//   },
// ];

// const bestAnime = animes.reduce((bestAnime, currentAnime) => {
//   if(currentAnime.rating > bestAnime.rating) {
//     return currentAnime;
//   }
//   return bestAnime;
// });

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);

// const animeBagus = animes.filter(anime => {
//   return anime.rating >= 85;
// });

// const judulAnimeBagus = animes
//   .filter((anime) => anime.rating >= 85)
//   .map((anime) => anime.title);

// const animeCukupBagus = animes.filter(anime => {
//   return anime.rating <= 80;
// });

// const animeBaru = animes.filter(anime => {
//   return anime.year > 2010
// })

// animes.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const animeList = animes.map(function(anime) {
//     return anime.title.toUpperCase();
// })

// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(5);

// const hasil = function(x) {
//   return x * x;
// }

// const perpangkatan = (x) => {
//   return x * x;
// }

// const random = () => (
//   Math.floor(Math.random() * 30)
// );

// const add = (a, b) => a + b;

// console.log("Halo...");
// setTimeout(() => {
//   console.log("Masih di sana nggak...");
// }, 5000);
// console.log('Saya pergi ya..');

// const interval = setInterval(() => {
//   console.log(Math.floor(Math.random() * 100))
// }, 2000);

// const person = {
//   firstName: "Mahardhika",
//   lastName: "Pratama",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function lemparDadu(sisi = 6) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name = 'user', msg = 'selamat bekerja') {
//   console.log(`${name}, ${msg}`);
// }

// const angka = [23, 45, 21, 25, 33, 14, 15, 20, 22];
// function angkaMax() {
//   return Math.max(...angka);
// }
// function angkaMin() {
//   return Math.min(...angka);
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

// const campuran = [...angka, ...nama];

// const user = {
//   name: "Mahardhika",
//   email: "mahardhika@belajar.com",
// };

// const credential = {
//   password: "pass1234",
//   token: "123912nkn213n12njadasdkas123aksdal1",
// };

// const userBaru = {...user, ...credential};

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// const nama = ["Alex", "Bimo", "Cici", "Delila", "Felix", "Gerard", "Huey"];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//   console.log(`Medali emas diraih: ${gold}`);
//   console.log(`Medali silver diraih: ${silver}`);
//   console.log(`Medali bronze diraih: ${bronze}`);
//   console.log(`Peserta yang belum beruntung: ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//   name: "Mahardhika",
//   email: "mahardhika@belajar.com",
//   role: "Admin",
// };

// const { name, email, phone = '08123456789' } = user;

// const userAndRole = ({ name, role }) => {
//   return `${name} ${role}`;
// };

const animes = [
  {
    title: "Attack On Titan",
    rating: 90,
    year: 2014,
  },
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 95,
    year: 2008,
  },
  {
    title: "Hunter x Hunter",
    rating: 50,
    year: 2015,
  },
  {
    title: "Naruto",
    rating: 80,
    year: 2002,
  },
];

const anime = animes.map(({title, year, rating}) => {
  return `${title} (${year}) rating ${rating}`;
});
