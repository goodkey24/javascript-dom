let button = document.querySelector("button")
// kode di atas mengambil element button
// contoh : <button> </button>

button.className = "tombol";
// kode di atas menambahkan class "tombol" ke dalam element button

// menambahkan nama class ke dalam element
button.classList.add("Class1")
button.classList.add("Class2")
button.classList.add("Class3")
button.classList.add("Class4")

// menampilkan nama-nama class di dalam element
console.log(button.classList);
// kenapa menggunakan className, karena dalam sebuah element nama class bisa lebih dari satu
// contoh : <button class="button red small"> </button>


// menghapus nama class di dalam element
button.classList.remove()