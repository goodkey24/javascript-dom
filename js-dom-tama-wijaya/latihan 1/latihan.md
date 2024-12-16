### Latihan 1: **Memilih Elemen dengan Berbagai Selector**

Buatlah sebuah file HTML sederhana yang memiliki elemen-elemen berikut:

- Buat Sebuah elemen `<div>` dengan id `mid-container`.
- Buat Tiga elemen `<p>` dengan kelas `paragraph`.
- Buat elemen `<span>` di dalam salah satu paragraf dengan teks "Highlight me!".

Kemudian buatlah file JavaScript untuk:

1. Memilih elemen `<div>` dengan dan menambahkan id `main-container` dan ubah warna latar belakangnya menjadi kuning.
2. Memilih semua elemen <p> dan memberi class `paragraph` dan ubah warna teksnya menjadi biru.
3. Memilih elemen `<span>` di dalam paragraf dan ubah teksnya menjadi "I am highlighted!".

---

### Latihan 2: **Memilih Elemen Berdasarkan Hirarki**

Buat struktur HTML seperti ini:

```html

<div id="outer">
    <div class="inner">
        <p class="text">Paragraph 1</p>
        <p class="text">Paragraph 2</p>
    </div>
    <p class="text">Paragraph 3</p>
</div>
```

Tugas:

1. Gunakan JavaScript untuk memilih hanya paragraf kedua (`Paragraph 2`) dan ubah warnanya menjadi hijau.
2. Pilih semua paragraf di dalam `<div class="inner">` dan tambahkan teks "(inside)" di akhir paragraf.

---

### Latihan 3: **Manipulasi Elemen yang Dipilih**

Buat form sederhana dengan elemen berikut:

- Sebuah input teks dengan id `username`.
- Sebuah tombol dengan id `submit-btn`.
- Sebuah paragraf kosong dengan id `output`.

Tugas:

1. Ketika tombol ditekan, pilih elemen input dengan id `username` dan ambil nilai teks yang dimasukkan pengguna.
2. Tampilkan nilai teks tersebut di paragraf dengan id `output`.

---

### Latihan 4: **Selector Khusus**

Buat struktur HTML berikut:

```html

<ul>
    <li>Item 1</li>
    <li class="highlight">Item 2</li>
    <li>Item 3</li>
    <li class="highlight">Item 4</li>
</ul>
```

Tugas:

1. Pilih hanya elemen `<li>` yang memiliki kelas `highlight` dan ubah teksnya menjadi huruf kapital.
2. Pilih elemen `<li>` pertama dan tambahkan kelas `first-item`.

---

### Latihan 5: **Latihan Gabungan**

Buat halaman HTML dengan elemen berikut:

- Header `<h1>` dengan id `page-title`.
- Beberapa paragraf dengan kelas `content`.
- Sebuah tombol "Hide Content" dengan id `toggle-btn`.

Tugas:

1. Ketika tombol ditekan, sembunyikan semua elemen dengan kelas `content`. Jika ditekan lagi, tampilkan kembali elemen
   tersebut.
2. Ubah teks tombol menjadi "Show Content" atau "Hide Content" berdasarkan statusnya.

---
