# 🎨 README Badge Studio

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-4c1?style=flat" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-4c1?style=flat" alt="License">
  <img src="https://img.shields.io/badge/Status-Active-4c1?style=flat" alt="Status">
</p>

README Badge Studio is a visual tool for generating beautiful [shields.io](https://shields.io) badges for your GitHub projects. Perfect for open source maintainers and developers who want professional-looking READMEs.

## ✨ Features

- 🎯 **Visual Configuration** - Intuitive UI for selecting tech stack, deploy platform, social links
- ⚡ **Real-time Preview** - See badges instantly as you configure
- 🌐 **Internationalization** - Support for Chinese and English
- 🔗 **Share Links** - Encode configuration to URL for easy sharing
- 📱 **PWA Support** - Install as a desktop/mobile app, works offline for UI
- 💾 **Snapshots** - Save and restore configuration snapshots
- 🎨 **Multiple Styles** - Flat, Flat Square, Plastic, For The Badge, Social
- 🌈 **Color Schemes** - Auto, GitHub Dark, Soft Pastel, Cyber, Minimal, Warm
- 📋 **Multiple Output Formats** - Markdown image, Markdown with link, HTML
- 🖥️ **Full README Generator** - Generate complete README templates
- 🌙 **Dark Mode** - Easy on the eyes
- 🔒 **Privacy First** - All data stored locally, nothing uploaded

## 🚀 Online Demo

**[https://w0nderful666.github.io/readme-badge-studio/](https://w0nderful666.github.io/readme-badge-studio/)**

[![Deploy to GitHub Pages](https://github.com/w0nderful666/readme-badge-studio/actions/workflows/pages/badge.svg)](https://github.com/w0nderful666/readme-badge-studio/actions/workflows/pages)

## 📸 Screenshots

> Add screenshots here after deployment

## 🛠️ Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/readme-badge-studio.git
cd readme-badge-studio

# Open in browser (or use any static server)
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/readme-badge-studio.git
   git push -u origin main
   ```
3. Go to **Settings** → **Pages**
4. Source: **Deploy from a branch**
5. Branch: **main**, Folder: **/ (root)**
6. Save and wait for deployment

## 📖 Usage Guide

### 1. Basic Configuration

- Enter your GitHub repository URL or username/repo
- Project name, version, and license
- Select project status (active, beta, etc.)

### 2. Tech Stack & Platform

- Select your tech stack (JavaScript, TypeScript, React, etc.)
- Choose deploy platform (GitHub Pages, Vercel, Netlify, etc.)
- Add social links (GitHub stars, forks, issues, etc.)

### 3. Custom Badges

Add custom badges with:
- Label (e.g., "Build")
- Message (e.g., "Passing")
- Color (e.g., "brightgreen")
- Logo (optional)
- Link (optional)

### 4. Full README

Configure complete README with:
- Project description
- Feature list
- Install/usage commands
- Demo URL
- Screenshot URL

### 5. Export

- Copy individual badge Markdown
- Copy all badges
- Download complete README
- Export configuration as JSON
- Export full project package

## 🔧 Tech Stack

- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks, no dependencies
- LocalStorage for data persistence
- Service Worker for PWA support

## 📁 Project Structure

```
readme-badge-studio/
├── index.html          # Main HTML
├── styles.css          # Styles
├── app.js              # Application logic
├── manifest.webmanifest # PWA manifest
├── sw.js               # Service worker
├── LICENSE             # MIT License
├── README.md           # This file
└── RELEASE_NOTES.md    # Version history
```

## 🔐 Privacy

- ✅ All data stored in browser's localStorage
- ✅ No configuration uploaded to any server
- ✅ Share links only encode current configuration in URL hash (not uploaded)
- ✅ No tracking, no analytics

## 📱 PWA Notes

- PWA works best when deployed to **HTTPS** environments (e.g., GitHub Pages)
- When running locally via HTTP, PWA features may show as unavailable
- The app works offline for UI; badges require internet to load from shields.io
- To install as a PWA, open in Chrome/Edge on desktop or mobile

## 🌐 Browser Compatibility

- Chrome/Edge 80+
- Firefox 75+
- Safari 14+
- Works on mobile browsers

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 🙏 Acknowledgments

- [shields.io](https://shields.io) for the badge service
- All contributors and users

---

## 🧪 Testing / 自测

本项目不依赖重型测试框架，可通过内置自测系统进行自动化测试。

### 运行自测

```bash
# 启动本地服务器
python3 -m http.server 30001 --bind ::

# 访问自测页面
http://[服务器IPv6]:30001/self-test.html
```

### 测试覆盖

- ✅ 默认配置测试
- ✅ 配置归一化测试
- ✅ GitHub 仓库 URL 解析测试
- ✅ 徽章 URL 生成测试
- ✅ Markdown 生成测试
- ✅ Full README 生成测试
- ✅ 分享链接编码/解码测试
- ✅ 自定义徽章测试
- ✅ 发布前检查测试
- ✅ 多语言测试
- ✅ 关键 DOM 结构测试
- ✅ 基础交互模拟测试
- ✅ localStorage 测试

### 测试报告

自测页面会显示：
- 测试总数
- 通过数量 (PASS)
- 失败数量 (FAIL)
- 警告数量 (WARN)

每个测试项显示详细状态和错误原因，支持复制测试报告。

---

<p align="center">Generated with 💙 by README Badge Studio</p>