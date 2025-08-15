# Lyra's Universe - Personal Portfolio

A stunning 3D galaxy-themed personal portfolio website built with Next.js, Three.js, and React Three Fiber.

## 🌟 Features

- **3D Galaxy Background**: Interactive galaxy visualization with customizable parameters
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Interactive Planets**: Navigate through different sections via 3D planets
- **Galaxy Drawing Canvas**: Create and save your own galaxy artwork
- **Modern UI**: Clean, space-themed interface with smooth animations
- **Multiple Sections**: Experience, Learning, Projects, Competitions, Activities

## 🚀 Live Demo

Visit the live site: [https://yourusername.github.io/your-repo-name](https://yourusername.github.io/your-repo-name)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Update Repository Name**: 
   - Replace `your-repo-name` in `next.config.mjs` with your actual repository name
   - Update the live demo link in this README

2. **Push to GitHub**:
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will automatically deploy on every push to main branch

4. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/your-repo-name`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── experience/        # Experience section
│   ├── learning/          # Learning section
│   ├── projects/          # Projects section
│   ├── competitions/      # Competitions section
│   └── activities/        # Activities section
├── components/            # Reusable components
│   ├── galaxy.tsx         # 3D galaxy component
│   ├── navigation.tsx     # Navigation component
│   └── ui/               # UI components
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions for deployment
\`\`\`

## 🎨 Customization

### Galaxy Parameters
Modify the galaxy appearance in `components/galaxy-background.tsx`:
- `count`: Number of stars
- `size`: Star size
- `radius`: Galaxy radius
- `branches`: Number of spiral arms
- `spin`: Spiral intensity

### Colors and Styling
Update the color scheme in `tailwind.config.ts` and component files.

### Content
Update your personal information in the respective page files under the `app/` directory.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- Inspired by the beauty of galaxies and space exploration
- Built with modern web technologies for optimal performance
- Designed for showcasing personal and professional achievements

---

**"To infinity and beyond. LLAP 🖖"**
