# Portfolio Website 2026

Sebuah proyek *Single Page Application* (SPA) portofolio interaktif yang dibangun dengan teknologi modern, berfokus pada performa tinggi dan visual 3D yang imersif.

## 🛠️ Tech Stack

Proyek ini menggunakan kombinasi pustaka (*library*) modern di ekosistem JavaScript dan React:

- **[Vite](https://vitejs.dev/)**: *Build tool* dan *dev server* yang sangat cepat.
- **[React 19](https://react.dev/)**: Library utama untuk membangun antarmuka pengguna (UI).
- **[Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)**: Digunakan untuk elemen visual 3D.
  - `@react-three/fiber`: Memungkinkan penulisan kode Three.js sebagai komponen React.
  - `@react-three/drei`: Kumpulan *helper* dan komponen siap pakai untuk elemen 3D.
- **[Framer Motion](https://www.framer.com/motion/)**: Library standar untuk animasi React (transisi saat scroll, animasi antarmuka, dll).
- **[React Icons](https://react-icons.github.io/react-icons/)**: Kumpulan ikon vektor (SVG) yang di-*import* langsung sebagai komponen React.
- **CSS Asli (Vanilla CSS)**: Seluruh desain sistem (warna, tipografi, responsivitas) diatur secara terpusat tanpa *framework* CSS tambahan.

## 📂 Struktur Direktori

Aplikasi ini disusun secara teratur dan modular:

- `index.html`: File HTML dasar yang dimuat oleh browser.
- `src/`: Berisi seluruh *source code* utama proyek.
  - `main.jsx`: *Entry point* yang merender aplikasi React ke DOM.
  - `App.jsx`: Komponen utama yang menyatukan seluruh tata letak (*layout*) halaman secara berurutan.
  - `assets/`: Tempat menyimpan aset statis seperti gambar, *font*, atau model 3D (seperti format `.gltf` atau `.glb`).
  - `components/`: Direktori kumpulan komponen UI yang dipisah per-*section*:
    - `Navbar.jsx`: Bilah navigasi.
    - `Hero/`: Seksi sambutan utama (biasanya memuat elemen 3D atau intro).
    - `Highlight/`: Seksi penonjolan kemampuan atau pencapaian utama.
    - `Experience/`: Seksi riwayat pekerjaan/pendidikan (*timeline*).
    - `Process/`: Seksi penjelasan alur kerja dan pendekatan masalah.
    - `Projects/`: Galeri karya dan portofolio.
    - `Contact/`: Area untuk formulir kontak dan info sosial media.
    - `Footer.jsx`: Bagian penutup di bawah halaman (*copyright*).
  - `data/`:
    - `portfolio.js`: "Database" lokal (konfigurasi data). Menyimpan semua teks konten utama (nama, deskripsi, daftar proyek) sebagai objek JavaScript agar mudah di-*update* tanpa menyentuh *source code* UI.
  - `styles/`:
    - `index.css`: File styling utama (pusat *design system*) yang memuat CSS asli untuk keseluruhan desain halaman.

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. **Pastikan Anda memiliki [Node.js](https://nodejs.org/) yang terinstal.**
2. Buka terminal dan arahkan ke direktori proyek ini.
3. **Instal seluruh dependensi (paket/library) yang dibutuhkan:**
   ```bash
   npm install
   ```
4. **Jalankan *server* pengembangan lokal:**
   ```bash
   npm run dev
   ```
5. Buka tautan *localhost* yang muncul di terminal (biasanya `http://localhost:5173`) melalui browser Anda.

## 📦 Skrip Tersedia (NPM Scripts)

- `npm run dev`: Menjalankan aplikasi untuk *development* (dilengkapi *Hot-Module Replacement*).
- `npm run build`: Membangun versi final (kompilasi) untuk siap *deploy* (*production*) yang akan disimpan pada folder `dist`.
- `npm run preview`: Menjalankan *server* pratinjau lokal untuk menguji hasil *build* produksi.

---
*Dibuat untuk Portfolio Website 2026*
