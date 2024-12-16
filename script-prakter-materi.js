// kode di bawah ini menyeleksi element button ke dalam variabel tombol
// contoh : <button> </button>
let tombol = document.querySelector("button");

// kode di atas menambahkan class "tombol" ke dalam element button
tombol.className = "tombol";


//cara menambahkan nama class ke dalam element
tombol.classList.add("class-tambahan");
tombol.classList.add("class-tambahan2");

// menampilkan nama-nama class di dalam element
console.log(tombol.classList);
// kenapa menggunakan className, karena dalam sebuah element nama class bisa lebih dari satu
// contoh : <button class="tambah class1 class2 class3 class4"> </button>

// cara menghapus class di dalam element
tombol.classList.remove("class-tambahan2"); // class "class-tambahan2" dihapus

// cara mengganti class di dalam element
tombol.classList.replace("class-tambahan", "class-ganti");

// cara memeriksa apakah element memiliki class tertentu
console.log(tombol.classList.contains("class-ganti")); // true
console.log(tombol.classList.contains("class-tambahan")); // false

// toggle berfungsi untuk menambahkan atau menghapus class
// toggle juga merupakan gabungan dari add dan remove
tombol.classList.toggle("class-ganti");
tombol.classList.toggle("class-toggle"); // class "class-toggle" di tambah

console.log(tombol.classList);

// innerHTML
let judul = document.querySelector("h1");
judul.innerHTML = "Belajar Javascript DOM";
// penggunaan innerHTML beresiko terhadap serangan XSS
// XSS = Cross Site Scripting
// contoh : <h1>Belajar Javascript DOM</h1> diubah menjadi <script>alert("Hacker")</script>
judul.innerHTML = `Tulisan ini diubah dengan <i style = "color: red">innerHTML </i> `;

// textContent
let paragraf = document.querySelector("p");
paragraf.textContent = "Halo";
// penggunaan textContent tidak beresiko terhadap serangan XSS
// contoh : <p>Halo</p> diubah menjadi <script>alert("Hacker")</script>
paragraf.textContent = `<p>Halo</p> diubah menjadi < script > alert("Hack") < /script>`;

// parentElement

let h1 = document.querySelector("h1");

// kegunaan parentElement untuk mengecek apakah sebuah element ada di dalam element lain
console.log(h1.parentElement); // menampilkan element h1 di dalam element body

// children dan childNodes adalah berbeda dengan parentElement dan parentNode yang
// digunakan untuk mengecek apakah sebuah element ada di dalam element lain
let ul = document.querySelector("ul");
console.log(ul.children); // menampilkan element li di dalam element ul
console.log(ul.childNodes); // menampilkan element li dan element text di dalam element ul

/*
children hanya mengembalikan elemen anak yang merupakan elemen HTML (seperti div, span, p, dll.),
sedangkan childNodes mengembalikan semua jenis node anak, termasuk elemen HTML,teks, dan komentar.
*/



