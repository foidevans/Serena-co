# Serena & Co — Interior Design Website

Serena & Co is a boutique interior design website crafted to showcase refined, light-filled, emotionally resonant spaces. The site blends smooth motion, elegant typography, curated portfolio displays, and seamless navigation to reflect the brand’s sophisticated aesthetic.

This project is built with **React 19**, **TailwindCSS 4**, **Framer Motion**, **Locomotive Scroll**, and **Supabase**.

---
## 📸 Website Preview

Here is a preview of the Serena & Co interior design website:

![Serena & Co Screenshot](./public/serena-co%20home-page.png)

## ✨ Features

### **🌫️ Hero Spotlight Interaction**
A dynamic landing page featuring:
- Smooth spotlight movement on mouse hover  
- Layered motion text animations  
- A minimalist dark overlay for luxury ambience  

### **🎞️ Smooth Page Transitions & Scroll**
- Powered by **Locomotive Scroll**
- Custom scrollTo behavior for routed navigation  
- Animated section reveals  

### **📸 Dynamic Portfolio Section**
- Portfolio items fetched from **Supabase**
- Fully responsive **Swiper.js** slider
- Desktop and mobile-optimized layouts  
- Image loading fallback and error handling included  

### **📨 Contact Integration**
- Email handling using **EmailJS**
- Phone number formatting using **react-phone-number-input**

### **📱 Responsive Navigation**
- Desktop navbar with animated links  
- Mobile hamburger menu using `hamburger-react`  
- Framer Motion stagger and slide animations  

---

## 🛠️ Tech Stack

| Category | Tools Used |
|---------|------------|
| **Framework** | React 19 + Vite |
| **Styling** | TailwindCSS 4, SCSS |
| **Animations** | Framer Motion, Locomotive Scroll |
| **Database** | Supabase (REST API & Storage) |
| **Slider** | Swiper.js |
| **Forms** | EmailJS, React Phone Input |
---

## 📂 Folder Structure
src/
│── assets/ # Images, icons, static files
│── components/ # Navbar, Footer
│── pages/ # Home, Portfolio, Services, Journal, Contact
│── supabase-client.js # Supabase configuration
│── App.jsx / main.jsx # App entry
│── index.css / App.scss # Global styling


---

## 🚀 Getting Started

### **1. Clone the repository**
```sh
git clone https://github.com/foidevans/Serena-co.git

### **2. Install dependencies**

npm install


### **3. Set up environment variables**

Create a .env file:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

## **4. Run the development server**
npm run dev

---

📄 License
This project is licensed under the MIT License.

💜 Acknowledgements

Design credit: Phenomenal Studio (Dribbble)  
Development: Favour Evans
