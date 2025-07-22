# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neakasa_h5** is a comprehensive analytics dashboard platform for Neakasa product marketing. The project contains 24 self-contained HTML dashboards with embedded CSS and JavaScript for data visualization, performance tracking, and business intelligence across multiple product lines and marketing channels.

## Commands

### Development
```bash
# Serve HTML files directly (no build process required)
python -m http.server 8000  # Python 3
npx http-server             # Node.js
open *.html                 # macOS - open in browser
```

### Git Workflow
```bash
# Check repository status
git status

# Stage and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

## Architecture

### Technical Stack
- **Visualization Libraries**:
  - Apache ECharts v5.4.3 (primary - used in most dashboards)
  - Chart.js v4.4.1 (secondary - used in newer dashboards)
- **Styling**:
  - Custom CSS with consistent dark theme (#0f0f23 background)
  - Tailwind CSS via CDN (selected dashboards)
  - Gradient accents: #00f2ea to #ff0050
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Data**: Static datasets embedded in each file

### Design Patterns
1. **Self-contained files**: Each HTML file includes all CSS, JS, and data
2. **Consistent dark theme**: #0f0f23 or #0f0f1e backgrounds throughout
3. **Responsive layouts**: CSS Grid/Flexbox with mobile breakpoints
4. **Interactive charts**: Hover tooltips, click interactions, zoom capabilities
5. **Performance optimization**: Lazy loading with Intersection Observer API

### Dashboard Naming Convention
- `neakasa-ads_*` - Advertising performance dashboards
- `neakasa_selfkoc_*` - Self-operated KOC (Key Opinion Consumer) content
- `neakasa_catbox_*` - Cat litter box product analytics
- `neakasa_steamer_*` - Garment steamer product analytics
- Date ranges in filenames use format: `May7-July20-2025`

## Key Dashboard Files

### Navigation & Overview
- **index.html** - Central navigation hub with sidebar menu system

### Recent High-Impact Dashboards (Created January 2025)
- **neakasa_catbox_multichannel.html** - Multi-channel performance (DTC/Amazon/TikTok)
- **neakasa_weekly_videos.html** - Cross-platform video analytics
- **neakasa_video_gallery.html** - Advanced video gallery with lazy loading
- **neakasa_comprehensive_analysis.html** - Premium analytics with predictive modeling
- **neakasa_platform_performance.html** - Platform comparison with ROI analysis
- **neakasa_catbox_social_trends.html** - Social media content marketing trends
- **neakasa_catbox_meta_ads.html** - Meta platform advertising performance
- **neakasa_catbox_video_analytics.html** - Advanced video campaign analytics
- **neakasa_steamer_wow.html** - Week-over-Week performance analysis
- **neakasa_steamer_video_ads.html** - Video advertising campaign metrics
- **neakasa_steamer_social_matrix.html** - Social media matrix performance

### Common Data Patterns
- **Performance Metrics**: Clicks, impressions, orders, revenue, conversion rates
- **Time Periods**: Weekly data with WoW (Week-over-Week) calculations
- **Platforms**: DTC (Direct-to-Consumer), Amazon, TikTok Shop
- **Video Platforms**: TikTok, Instagram, YouTube
- **Currency**: Mixed USD ($) and EUR (€) depending on market

## Development Guidelines

### Adding New Dashboards
1. Use existing dashboard as template
2. Maintain consistent dark theme and color scheme
3. Include insights panel with actionable recommendations
4. Implement responsive design (mobile/tablet/desktop)
5. Add to index.html navigation menu
6. Update dashboard count in header

### Chart Implementation
```javascript
// Standard ECharts initialization pattern
const chart = echarts.init(document.getElementById('chartId'));
const option = {
    tooltip: { trigger: 'axis' },
    // ... configuration
};
chart.setOption(option);

// Window resize handler
window.addEventListener('resize', () => {
    chart.resize();
});
```

### Performance Optimization
- Keep file size under 50KB when possible
- Use lazy loading for heavy content
- Implement skeleton screens for loading states
- Optimize chart rendering with data sampling

### Data Handling
- Validate calculations for accuracy
- Handle edge cases (division by zero, null values)
- Format numbers consistently (toLocaleString(), toFixed())
- Show meaningful zero states

## Current Project State

### Repository
- **GitHub**: https://github.com/keevingfu/neakasa3.git
- **Total Dashboards**: 24 HTML files
- **Latest Updates**: January 2025
- **Primary Language**: English (with some Chinese in specific dashboards)

### Key Features Implemented
- ✅ Multi-channel analytics (DTC, Amazon, TikTok Shop)
- ✅ Video performance tracking across platforms
- ✅ Week-over-Week trend analysis
- ✅ Conversion funnel visualization
- ✅ Revenue attribution and ROI calculation
- ✅ Predictive modeling and forecasting
- ✅ Interactive filtering and drill-down
- ✅ Mobile-responsive design
- ✅ Business insights and recommendations
- ✅ Lazy loading and performance optimization

### Dashboard Categories
1. **Navigation Hub** - Central control panel
2. **Product Analytics** - Steamer and cat litter box performance
3. **Video Analytics** - Cross-platform video performance
4. **Advertising Performance** - Campaign ROI and optimization
5. **Social Media Analytics** - Content marketing effectiveness
6. **Comprehensive Analysis** - Executive-level insights

## Testing Checklist
1. **Responsive Design**: Test at 375px, 768px, 1024px, 1440px widths
2. **Chart Interactions**: Verify tooltips, click events, zoom functionality
3. **Data Accuracy**: Validate calculations and percentages
4. **Performance**: Check load times and smooth animations
5. **Cross-Browser**: Test on Chrome, Safari, Firefox, Edge