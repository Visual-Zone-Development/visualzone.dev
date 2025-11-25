# Visual Zone Development Website

This is the official website for Visual Zone Development, showcasing our projects and company information.

## 🌐 Live Site

Visit us at: [visualzone.dev](https://visualzone.dev)

## 🚀 GitHub Pages Setup

This website is designed to be hosted on GitHub Pages for free. Follow these steps to deploy:

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new repository** named `visualzone.dev` (or your custom domain)

2. **Push the website files:**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit: Visual Zone Development website"
   git branch -M main
   git remote add origin https://github.com/Visual-Zone-Development/visualzone.dev.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click "Save"
   - Your site will be live at `https://visual-zone-development.github.io/visualzone.dev/`

4. **Custom Domain (Optional):**
   - In repository settings > Pages, add your custom domain (e.g., `visualzone.dev`)
   - Create a `CNAME` file in the root with your domain name
   - Configure DNS settings with your domain provider:
     - Add A records pointing to GitHub's IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - Or add a CNAME record pointing to `visual-zone-development.github.io`

### Option 2: Deploy from Existing Repository

If deploying from the GitFlex repository:

1. **Enable GitHub Pages:**
   - Go to repository settings
   - Navigate to "Pages"
   - Select source: `main` branch
   - Select folder: `/website`
   - Click "Save"

2. **Access the site:**
   - Your site will be at: `https://visual-zone-development.github.io/GitFlex/`

## 📁 Project Structure

```
website/
├── index.html              # Landing page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript interactions
├── assets/                 # Images and media
│   ├── logo.svg           # Company logo (placeholder)
│   ├── hero-illustration.svg  # Hero section image
│   └── projects/          # Project-specific assets
│       ├── gitflex-icon.png
│       ├── gitflex-screenshot1.png
│       ├── gitflex-screenshot2.png
│       ├── gitflex-screenshot3.png
│       ├── project2-icon.png
│       └── project3-icon.png
└── projects/              # Individual project pages
    ├── project.css        # Project page styles
    ├── gitflex.html       # GitFlex project page
    ├── project2.html      # Placeholder project
    └── project3.html      # Placeholder project
```

## 🎨 Customization

### Adding New Projects

1. **Update `index.html`:**
   - Add a new project card in the `.projects-grid` section
   - Include icon, title, description, tags, and link

2. **Create project page:**
   - Copy `projects/project2.html` as a template
   - Update content with project details
   - Add screenshots and download links

3. **Add assets:**
   - Place project icon in `assets/projects/`
   - Add screenshots as needed
   - Use consistent naming: `projectname-icon.png`, `projectname-screenshot1.png`

### Updating Placeholders

Replace placeholder images in `assets/`:
- `logo.svg` - Your company logo
- `hero-illustration.svg` - Hero section illustration
- `projects/[project]-icon.png` - Project icons
- `projects/[project]-screenshot[n].png` - Project screenshots

### Styling

- **Colors:** Edit CSS variables in `styles.css` under `:root`
- **Fonts:** Update font stack in `body` selector
- **Layout:** Modify container widths, grid columns, and spacing

## 🔧 Local Development

To test locally:

1. Open `index.html` in a web browser, or
2. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```
3. Visit `http://localhost:8000`

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Animated elements on scroll
- ✅ Project showcase with detail pages
- ✅ SEO-optimized HTML
- ✅ Fast loading (no external dependencies)
- ✅ GitHub Pages ready

## 🛠️ Technologies

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no frameworks)
- GitHub Pages hosting

## 📄 License

© 2025 Visual Zone Development. All rights reserved.

## 🤝 Contributing

This is the company website for Visual Zone Development. For contributions to our projects, please visit the individual project repositories.

---

Built with ❤️ by Visual Zone Development
