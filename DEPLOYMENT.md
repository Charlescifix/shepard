# Shepard Claret Model School - Deployment Guide

## 🚀 Deploy to Railway

This application is ready for deployment on Railway with zero configuration needed!

### Quick Deploy Steps:

1. **Visit Railway**: Go to [railway.app](https://railway.app)

2. **Sign In**: Log in with your GitHub account

3. **New Project**: Click "New Project"

4. **Deploy from GitHub**:
   - Select "Deploy from GitHub repo"
   - Choose `Charlescifix/shepard`
   - Railway will automatically detect it's a Node.js project

5. **Automatic Configuration**:
   - Railway will use the `railway.json` configuration
   - Build command: `npm install && npm run build`
   - Start command: `npm run preview -- --host 0.0.0.0 --port $PORT`

6. **Deploy**:
   - Click "Deploy Now"
   - Railway will build and deploy your app
   - You'll get a public URL automatically

### Environment Variables
No environment variables required! The app works out of the box.

### Custom Domain (Optional)
1. Go to your project settings in Railway
2. Click "Domains"
3. Add your custom domain
4. Follow Railway's DNS configuration instructions

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Railway (Nixpacks)

## 🎨 Features
- Responsive design with glass morphism effects
- Interactive chatbot widget
- Smooth scroll animations
- Contact forms with validation
- Modern UI/UX design
- SEO optimized

---

**Built with ❤️ using Claude Code**