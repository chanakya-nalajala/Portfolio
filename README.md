# Portfolio Project

Welcome to my portfolio! This project showcases my work and skills as a developer. 

## Language Composition
- **TypeScript**: 62.7%
- **CSS**: 36.4%
- **HTML**: 0.9%

### Project Overview
This portfolio is built with a focus on TypeScript, utilizing its powerful features to create a robust and maintainable codebase. CSS is extensively used to ensure that the presentation is visually appealing and responsive. Although HTML is kept minimal, it serves as the foundational structure for the entire project.

## Technologies Used
- **TypeScript**: For type-safe, scalable JavaScript development
- **CSS**: For responsive and modern styling
- **HTML**: For semantic markup and structure

## Getting Started

### Development
1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages.

### Live Site
🚀 **[View Live Portfolio](https://YOUR_USERNAME.github.io/Portfolio/)**

### Deployment Setup (One-time)
1. Go to your GitHub repository settings
2. Navigate to **Pages** (under "Code and automation")
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Push your code to the `main` branch
5. GitHub Actions will automatically build and deploy your site

### Manual Deployment
Every push to the `main` branch automatically triggers deployment via GitHub Actions. To deploy:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The deployment workflow will build your site and publish it to GitHub Pages automatically.

## 📊 Analytics Setup

This portfolio includes comprehensive analytics tracking using **Firebase Analytics** and **Firestore**.

### Features
- ✅ Page views and session tracking
- ✅ Visitor location tracking (city, state, country via ipapi)
- ✅ Device, browser, and OS detection
- ✅ Engagement metrics (scroll depth, time on page)
- ✅ Custom event tracking

### Quick Setup for GitHub Pages

1. **Install Firebase:**
   ```bash
   npm install firebase
   ```

2. **Create Firebase project** at https://console.firebase.google.com/
   - Enable Analytics and Firestore

3. **Add GitHub Secrets** (Settings → Secrets → Actions):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`

4. **Create `.env` file for local development:**
   ```bash
   cp .env.example .env
   # Add your Firebase config to .env
   ```

5. **Push to deploy:**
   ```bash
   git push origin master
   ```

### 📖 Documentation

- **[GITHUB-PAGES-ANALYTICS.md](GITHUB-PAGES-ANALYTICS.md)** ⭐ **START HERE** - GitHub Pages specific setup
- **[INSTALL-ANALYTICS.md](INSTALL-ANALYTICS.md)** - Detailed installation guide
- **[ANALYTICS-SETUP.md](ANALYTICS-SETUP.md)** - Features and configuration
- **[ANALYTICS-SUMMARY.md](ANALYTICS-SUMMARY.md)** - Complete overview

Analytics is **free** within Firebase's generous free tier (perfect for portfolios).

## Connect
Feel free to explore the projects showcased here, and connect with me if you have any questions or opportunities!
