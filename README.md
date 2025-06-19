# React Password Strength Meter
Antarmuka pengguna (UI) pengukur kekuatan kata sandi yang sederhana dan interaktif, dibuat dengan React dan Vite. Menggunakan Library `zxcvbn` untuk penilaian kekuatan yang akurat dan Tailwind CSS untuk style. Juga ada fungsi untuk cara mentranslate nya secara manual, karena `zxcvbn` hanya mendukung bahasa inggris.

## Fitur

* **Indikator Kekuatan Real-time:** Menampilkan kekuatan kata sandi secara visual (lemah, sedang, kuat) saat Anda mengetik.
* **Penilaian Canggih (`zxcvbn`):** Menggunakan library `zxcvbn` dari Dropbox untuk penilaian kekuatan kata sandi yang cerdas, mengenali pola umum, kata-kata kamus, dan informasi yang mudah ditebak.
* **Umpan Balik yang Membantu:** Memberikan saran dan peringatan yang jelas untuk membantu pengguna membuat kata sandi yang lebih kuat.
* **Dukungan Multi-bahasa:** Saya membuat contoh fungsi cara mentranslate hasil dari library `zxcvbn`
* **Desain Responsif & Modern:** Dibuat dengan Tailwind CSS untuk tampilan yang bersih dan dapat disesuaikan.

## Pratinjau

![Password Strength Meter Preview](https://i.imgur.com/8SU6w13.jpeg)

## Demo Langsung

Lihat aplikasi ini beraksi: [https://d-password-check.netlify.app/](https://d-password-check.netlify.app/)

## Teknologi yang Digunakan

* **React:** Library JavaScript untuk membangun antarmuka pengguna.
* **Vite:** Tooling frontend generasi selanjutnya yang cepat.
* **zxcvbn:** Library penilaian kekuatan kata sandi oleh Dropbox.
* **Tailwind CSS:** Kerangka kerja CSS utilitas-pertama untuk styling yang cepat.

## Instalasi dan Penggunaan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal:

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/diardomarendikrista/password-strength-checker
    cd password-strength-checker # Atau nama folder tempat Anda mengkloning
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan aplikasi dalam mode pengembangan:**
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`
