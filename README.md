# WanderNusa - Travel Landing Page

Sebuah landing page yang menarik untuk agen travel Indonesia "WanderNusa" yang dibangun menggunakan Astro.js dan Tailwind CSS.

## 🌟 Fitur Utama

- **Design Responsif**: Tampil sempurna di semua perangkat
- **Hero Section**: Tampilan utama yang memukau dengan gambar Indonesia
- **Destinasi Populer**: Showcase destinasi wisata terbaik Indonesia
- **Layanan Lengkap**: Informasi lengkap tentang layanan yang ditawarkan
- **Testimoni**: Reviews dari pelanggan yang puas
- **Form Kontak**: Formulir kontak yang mudah digunakan
- **Smooth Scrolling**: Navigasi yang halus antar section

## 🚀 Tech Stack

- **Framework**: [Astro.js](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash (untuk demo)
- **Language**: JavaScript/TypeScript

## 📁 Struktur Project

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── pages/
│       └── index.astro        # Landing page utama
├── .github/
│   └── copilot-instructions.md # Instruksi untuk GitHub Copilot
├── astro.config.mjs           # Konfigurasi Astro
├── tailwind.config.mjs        # Konfigurasi Tailwind
└── package.json
```

## � Live Demo

Website ini dapat diakses di: [https://YOUR_USERNAME.github.io/wandernusa-travel](https://YOUR_USERNAME.github.io/wandernusa-travel)

## 📦 Deployment

Website ini menggunakan GitHub Pages untuk hosting dengan GitHub Actions untuk automatic deployment.

### Deploy ke GitHub Pages:

1. Fork atau clone repository ini
2. Update `astro.config.mjs`:
   ```javascript
   site: 'https://YOUR_USERNAME.github.io',
   base: '/wandernusa-travel',
   ```
3. Push ke repository GitHub Anda
4. Aktifkan GitHub Pages di Settings → Pages → Source: GitHub Actions
5. Website akan otomatis ter-deploy setiap kali ada push ke branch main

## �🛠️ Commands

Semua command dijalankan dari root directory project:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Install dependencies                                     |
| `npm run dev`       | Mulai development server di `localhost:4321`             |
| `npm run build`     | Build production site ke `./dist/`                       |
| `npm run preview`   | Preview build secara lokal sebelum deploy                |
| `npm run astro ...` | Jalankan CLI commands seperti `astro add`, `astro check` |

## 🎨 Sections

### 1. Navigation

- Fixed header dengan backdrop blur
- Smooth scroll navigation
- Mobile responsive menu

### 2. Hero Section

- Full-screen hero dengan background image
- Call-to-action buttons
- Gradient overlay untuk readability

### 3. Stats Section

- Counter animasi untuk statistik perusahaan
- Grid responsive layout

### 4. Destinasi Populer

- Card layout untuk destinasi wisata
- Hover effects dan transitions
- Price dan duration info

### 5. Layanan

- Icon-based service highlights
- 3-column grid layout
- Hover animations

### 6. Testimonials

- Customer reviews dengan star ratings
- 3-column responsive grid

### 7. Contact Section

- Form kontak yang lengkap
- Contact information dengan icons
- Gradient background

### 8. Footer

- Company info dan social links
- Link grid layout
- Copyright notice

## 🎯 Getting Started

1. **Clone dan Install**

   ```bash
   git clone <repository-url>
   cd project
   npm install
   ```

2. **Development**

   ```bash
   npm run dev
   ```

   Buka [http://localhost:4321](http://localhost:4321) di browser Anda.

3. **Build untuk Production**
   ```bash
   npm run build
   npm run preview
   ```

## 🎨 Customization

### Colors

Brand colors bisa diubah di Tailwind classes:

- Primary: `blue-600` (#2563eb)
- Secondary: `yellow-400`
- Accent: `purple-700`

### Content

Untuk mengubah konten:

1. Edit data destinasi di `src/pages/index.astro`
2. Update contact information di section contact
3. Ganti images dari Unsplash dengan assets sendiri

### Styling

Semua styling menggunakan Tailwind CSS utility classes untuk:

- Responsive design
- Hover effects
- Transitions dan animations
- Layout dan spacing

## 📝 TODO

- [ ] Integrasi dengan backend untuk form submission
- [ ] Add image optimization
- [ ] Implement loading states
- [ ] Add more destinations
- [ ] SEO optimization
- [ ] Add blog section
- [ ] Multi-language support

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Indonesia Tourism](https://www.indonesia.travel)

## 📄 License

Project ini dibuat untuk keperluan demo dan pembelajaran.
