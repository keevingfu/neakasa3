# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neakasa_h5** is a collection of standalone HTML dashboard files for Neakasa product marketing analytics. The project contains 14 self-contained HTML files with embedded CSS and JavaScript for data visualization and analysis.

## Project Structure

### Dashboard Categories

1. **Navigation Hub** (1 file):
   - `index.html` - Central navigation dashboard with sidebar menu and overview stats

2. **Comprehensive Analytics** (1 file):
   - `neakasa-ads.html` - Executive-level analytics using Chart.js and Tailwind CSS

3. **Steamer Product Dashboards** (6 files):
   - `neakasa-steamer01.html` - Social Media Marketing Dashboard (ECharts)
   - `neakasa-steamer02.html` - Platform Performance Dashboard (ECharts)
   - `neakasa-steamer03.html` - Multi-Channel Sales Dashboard (ECharts)
   - `Neakasa-steamer04.html` - MAGIC1挂烫机销售数据环比分析 (Chinese, ECharts)
   - `neakasa-steamer05.html` - Social Media Analytics Dashboard (ECharts)
   - `neakasa-steamer06.html` - Content Marketing Analytics (Tailwind CSS, ECharts)

4. **Cat Litter Box Dashboards** (5 files):
   - `neakasa_catbox01.html` - Marketing Analytics Dashboard
   - `neakasa_catbox02.html` - Social Media Analytics Dashboard - Phase 3
   - `neakasa_catbox03.html` - Europe Social Media Analytics Dashboard
   - `neakasa_catbox04.html` - Cat Litter Box Sales Dashboard
   - `neakasa_catbox05.html` - Top Content Performance Dashboard - Q2 2025

5. **Product Comparison** (1 file):
   - `neakasa-tts.html` - TikTok Shop (TTS) 产品对比分析 (Chinese)

## Commands

### Development
```bash
# No build process - serve HTML files directly
python -m http.server 8000  # Python 3
# or
npx http-server             # Node.js
# or
open *.html                 # macOS - open in browser
```

### Git Workflow
```bash
# Clone repository
git clone https://github.com/keevingfu/neakasa3.git

# Check status
git status

# Stage and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

### Testing
No automated tests - manually verify in browser:
1. Check responsive behavior (mobile/tablet/desktop)
2. Verify chart interactions (hover, click)
3. Test chart resize on window resize
4. Validate data calculations if modifying

## Architecture

### Technical Stack
- **Visualization Libraries**:
  - Apache ECharts v5.4.3 (most dashboards)
  - Chart.js v4.4.1 (neakasa-ads.html and newer files)
- **Styling**:
  - Custom CSS (older dashboards)
  - Tailwind CSS via CDN (newer dashboards)
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Data**: Hardcoded in each file (no backend)

### Design Patterns
1. **Self-contained files**: Each HTML file includes all CSS, JS, and data
2. **Dark theme**: Consistent use of #0f0f23 or #0f0f1e backgrounds
3. **Gradient accents**: #00f2ea to #ff0050 gradients throughout
4. **Responsive layout**: CSS Grid/Flexbox with mobile breakpoints
5. **Lazy loading**: Intersection Observer API for performance

### Data Structure Conventions
```javascript
// ECharts dashboards use option objects:
const option = {
    title: { text: 'Dashboard Title' },
    series: [{ data: [...] }]
};

// Chart.js dashboards use config objects:
const config = {
    type: 'line',
    data: { datasets: [...] },
    options: { responsive: true }
};
```

## Key Development Considerations

1. **File Size**: Keep under 40KB for optimal loading
2. **Chart Responsiveness**: Always include resize handlers
3. **Data Consistency**: Maintain same data format across similar dashboards
4. **Browser Compatibility**: Test in Chrome, Safari, Firefox
5. **Mobile Support**: Ensure touch interactions work properly

## Important Project Context

- **Purpose**: Marketing analytics and reporting dashboards
- **Audience**: Internal Neakasa marketing team
- **Data Source**: Static demonstration data (not live)
- **Deployment**: Can be served from any static web server
- **Version Control**: Git repository at https://github.com/keevingfu/neakasa3.git
- **Test Directory**: Contains 15 experimental files (HTML prototypes and TSX React components)

## Common Data Patterns

- **TikTok Dominance**: Most dashboards show 90%+ traffic from TikTok
- **Low Engagement**: High view counts but low engagement rates (< 1%)
- **Time Periods**: Most data covers Q1-Q2 2024 or 2025
- **Languages**: English (default) and Chinese (specific dashboards)
- **Currency**: Mixed USD ($) and CNY (¥) depending on region

## Project Status (as of 2025-01-15)

### Repository Information
- **GitHub URL**: https://github.com/keevingfu/neakasa3.git
- **Current Branch**: main
- **Working Tree**: Clean (all changes committed and pushed)
- **Total Project Size**: 1.5MB
- **Test Directory Size**: 608KB

### File Statistics
- **Production HTML Files**: 14 files in root directory
- **Test/Development Files**: 16 files in test/ directory
- **Configuration Files**: .gitignore, CLAUDE.md
- **Total Commits**: 5 (since initial commit)

### Recent Updates

- **2025-01-15**: Added neakasa-steamer06.html (Content Marketing Analytics)
- **2025-01-15**: Updated navigation in index.html to include all 6 steamer dashboards
- **2025-01-15**: Added .gitignore file for system files and future build artifacts
- **2025-01-15**: Synced all files to GitHub repository
- **2025-01-15**: Updated CLAUDE.md with Git workflow and current status

### Current Features
- ✅ All dashboards fully functional and responsive
- ✅ Navigation system working with sidebar menu
- ✅ Git version control properly configured
- ✅ GitHub repository synchronized
- ✅ Test directory with prototype components
- ✅ Consistent dark theme across all dashboards
- ✅ Both ECharts and Chart.js implementations

### Known Issues
- ⚠️ All data is static/hardcoded (no live data integration)
- ⚠️ No automated testing framework
- ⚠️ No build/bundling process (deliberate design choice)
- ⚠️ Chinese filenames in test directory may cause issues on some systems