# Release Notes

## Version 1.0.0

### Initial Release

**Core Features:**
- GitHub README badge generation using shields.io
- Support for multiple badge types: status, version, license, tech stack, deploy platform, social links
- Real-time preview with live badge rendering
- Multiple badge styles (flat, flat-square, plastic, for-the-badge, social)
- Multiple color schemes (Auto, GitHub Dark, Soft Pastel, Cyber, Minimal, Warm)
- Markdown output with three formats (image, image with link, HTML)

**V2 Features (Enhanced):**
- Custom badge support with label, message, color, logo, link
- Badge reordering (move up/down)
- Batch operations (select all/clear tech stack, deploy platform, social links)
- Smart recommendation combinations
- GitHub repository URL auto-parsing
- Health check panel for configuration validation
- Enhanced README preview with features and quick start
- Dark mode support
- LocalStorage persistence

**V3 Features (Release-Ready):**
- Internationalization (Chinese/English) with browser language detection
- Share link functionality - encode config to URL hash
- PWA support with offline capability for UI
- Project type smart recommendations (Frontend, AI, CLI, Server, Extension, Docs, Library, Fun)
- Full README generator with configurable sections (description, features, install, usage, demo, screenshots)
- Snapshot/backup system - save up to 10 configuration snapshots
- Publish checklist - 8-item pre-release validation
- Export package - download all outputs in one file
- Accessibility improvements (ARIA labels, keyboard support)
- Mobile-responsive design

**Technical Details:**
- Pure HTML/CSS/JavaScript - no frameworks
- All data stored locally in browser (localStorage)
- No server-side components required
- GitHub Pages compatible
- Works offline for UI (badges require internet for shields.io)

**Known Limitations:**
- GitHub dynamic badges (stars, forks, issues) require valid owner/repo
- Large number of badges (>12) may affect README layout
- No GitHub API integration - badges are static URLs

**Privacy:**
- All configurations stored locally in browser localStorage
- No data uploaded to any server
- Share links only encode current configuration in URL hash (not uploaded)
- PWA works in HTTPS environments (e.g., GitHub Pages); local HTTP may show unavailable

**Known Limitations:**
- GitHub dynamic badges (stars, forks, issues) require valid owner/repo
- Large number of badges (>12) may affect README layout
- No GitHub API integration - badges are static URLs
- PWA requires HTTPS for full functionality

**Planned Features:**
- More template options
- Badge categories/groups
- Import from existing READMEs
- Theme customization

---

## Version 3.1 - Self Test (Current)

**Release Date:** May 2026

### New Features
- ✅ Added `self-test.html` - self-test page
- ✅ Added `self-test.js` - comprehensive test suite
- ✅ Exposed core test APIs via `window.ReadmeBadgeStudioTestAPI`
- ✅ No external dependencies required
- ✅ Test report generation and export

### Test Capabilities
- Default configuration tests
- Config normalization tests
- GitHub URL parsing tests
- Badge URL generation tests
- Markdown generation tests
- README generation tests
- Share link encoding/decoding tests
- Custom badges tests
- Publish checklist tests
- Multi-language tests
- DOM structure tests
- Interaction simulation tests
- localStorage tests

### Bug Fixes
- README preview badge display with error handling
- PWA status detection for HTTP/HTTPS
- Language toggle button display improvement
- Expanded publish checklist to 14 items
- Code cleanup (no TODO/FIXME)

---

Built with 💙 using shields.io