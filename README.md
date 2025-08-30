# 🚀 Mugabe's Portfolio - Full Stack Developer

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Three.js featuring smooth animations and 3D elements.

## ✨ Features

- **🎨 Modern Design**: Black and purple theme with smooth animations
- **📱 Fully Responsive**: Mobile-first design with hamburger navigation
- **🎭 Smooth Animations**: Framer Motion for beautiful transitions
- **🌐 3D Integration**: Three.js laptop model with interactive controls
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: React Icons
- **Development**: Hot Module Replacement (HMR)

## 📋 Sections

1. **🏠 Hero** - Introduction with 3D laptop model
2. **👨‍💻 About** - Professional bio and tech focus
3. **🛠️ Skills** - Tech stack with animated icons
4. **📂 Projects** - Portfolio showcase with live links
5. **💬 Testimonials** - Client feedback carousel
6. **📞 Contact** - Contact form and social links
7. **🔗 Footer** - Quick links and social media

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mugabe-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Replace Assets
- **Logo**: Replace `/public/logo.svg` with your actual logo
- **Photo**: Replace `/public/me.jpeg` with your professional photo
- **3D Model**: Add your laptop model files to `/public/laptop/`

### Update Content
- **Personal Info**: Edit contact details in `Contact.jsx` and `Footer.jsx`
- **Bio**: Update the about section in `About.jsx`
- **Projects**: Modify project links and descriptions in `Projects.jsx`
- **Social Links**: Update social media URLs in contact and footer components

### Add Your 3D Model
1. Place your `.gltf` or `.glb` file in `/public/laptop/`
2. Update `LaptopModel.jsx` to load your model:
```jsx
import { useGLTF } from '@react-three/drei'
const { nodes, materials } = useGLTF('/laptop/your-model.gltf')
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (hamburger menu, stacked layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full layout)

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with fallbacks
- **3D Model Loading**: Suspense boundaries for smooth loading
- **Error Boundaries**: Graceful error handling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📞 Contact Information

- **Email**: mugabeherve7@gmail.com
- **Phone**: +250 781 908 314
- **Location**: Rwanda

## 🔗 Live Projects Featured

1. [Muhali Coffee](https://muhali-coffee.vercel.app/)
2. [Pharmacie](https://pharamacie.vercel.app/)
3. [Sokogo Platform](https://sokogo-test-git-feature-fetch-api-mugabe-herves-projects.vercel.app/)
4. [Claire Portfolio](https://claire-kveq.vercel.app/)
5. [Murugo](https://murugo.vercel.app/)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ and lots of coffee ☕ by Mugabe**
