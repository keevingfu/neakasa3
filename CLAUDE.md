# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neakasa_h5** is a static analytics dashboard platform for Neakasa product marketing. The project consists of 28 self-contained HTML dashboards with embedded CSS and JavaScript, providing data visualization and business intelligence for two main product lines (Garment Steamer and Cat Litter Box) across multiple marketing channels and platforms.

## Commands

### Development
```bash
# Serve HTML files locally (no build process required)
python3 -m http.server 8000  # Python 3
npx http-server -p 8000      # Node.js alternative

# Open specific dashboards
open index.html              # macOS - opens navigation hub
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
  - Apache ECharts 5.4.3 (primary) - Used in most dashboards
  - Chart.js 4.4.1 (newer dashboards) - For specific chart types
- **Styling**: Dark theme (#0f0f23), gradient accents (#00f2ea to #ff0050)
- **JavaScript**: Vanilla ES6+, no build process or transpilation required
- **Data**: Static arrays embedded in each HTML file (no external APIs or databases)
- **Hosting**: Static files, can be served from any web server

### High-Level Architecture

**Navigation System (index.html)**:
- Accordion-style sidebar with auto-collapse behavior between sections
- Dynamic iframe loading for seamless dashboard switching
- Category organization with dashboard counts
- Stats display in header showing total dashboards

**Dashboard Architecture Pattern**:
Each HTML file is completely self-contained with:
- Embedded `<style>` tags for all CSS (no external stylesheets)
- Embedded `<script>` tags with data and chart logic
- Static data arrays (typically `const data = [...]` or similar)
- Platform filtering functionality (DTC, Amazon, TikTok Shop)
- Responsive design with breakpoints: 375px, 768px, 1024px, 1440px
- Business insights panels with key metrics and recommendations

### File Naming Convention
- `neakasa_ads_*` - Advertising performance dashboards
- `neakasa_selfkoc_*` - Self-operated KOC (Key Opinion Consumer) content
- `neakasa_ecom_*` - E-commerce platform comparisons
- `neakasa_keyword_*` - SEO and keyword analysis
- Product identifiers: `_catbox_`, `_steamer_`
- Date ranges: `May7-July20-2025` format

### Navigation Structure
Primary categories in index.html:
1. **Strategic Analysis & Insights** (default expanded)
2. **SelfKOC - 矩阵内容测试** (Matrix Content Testing)
3. **Ads - 内容赋能广告** (Content-Empowered Advertising)

## Common Implementation Patterns

### Data Structure
```javascript
// Typical data array structure
const data = [
    {
        week: 'Week 1',
        platform: 'TikTok Shop',
        clicks: 1234,
        impressions: 45678,
        orders: 89,
        revenue: 2345.67,
        ctr: 2.7,  // Click-through rate %
        cvr: 7.2   // Conversion rate %
    }
];
```

### Chart Initialization Pattern
```javascript
// ECharts initialization
const chart = echarts.init(document.getElementById('chartId'));
chart.setOption(option);
window.addEventListener('resize', () => chart.resize());

// Chart.js initialization
const ctx = document.getElementById('chartId').getContext('2d');
const chart = new Chart(ctx, config);
```

### Platform Filtering Implementation
```javascript
// Standard filtering pattern used across dashboards
function filterByPlatform(platform) {
    const filteredData = data.filter(d => 
        platform === 'all' || d.platform === platform
    );
    updateCharts(filteredData);
}

// Platform buttons typically include: All, DTC, Amazon, TikTok Shop
```

### Responsive Chart Handling
```javascript
// Window resize handling for charts
window.addEventListener('resize', () => {
    // ECharts
    myChart.resize();
    
    // Chart.js (automatic with responsive: true)
});
```

## Dashboard Types & Features

### 1. Matrix Test Dashboards (`*_matrix_test_*`)
- Multi-tab navigation (Overview, Cat Litter Box, Garment Steamer, Strategy)
- Advanced visualizations: scatter plots, funnel charts, treemaps
- Automated optimization recommendations
- Campaign performance analysis

### 2. Weekly Report Dashboards (`*_weekly_report_*`)
- Week-over-week (WoW) comparisons
- Platform performance breakdowns
- Trend analysis with growth indicators

### 3. Keyword Research Dashboards (`*_keyword_*`)
- Search volume and CPC analysis
- Competition metrics visualization
- Search intent categorization
- SEO recommendations

### 4. Video Campaign Dashboards (`*_video_*`)
- Video performance metrics
- Platform-specific video analytics
- Engagement rate tracking

## Development Guidelines

### Adding New Dashboards
1. **Create from template**: Copy an existing dashboard matching your visualization needs
2. **Update data**: Replace static data arrays with new metrics
3. **Configure charts**: Adjust chart options, colors, and layouts
4. **Add to navigation**: Update index.html:
   - Add menu item in appropriate section
   - Update dashboard count in header
   - Set correct iframe src on click
5. **Test responsiveness**: Verify all breakpoints work correctly

### Code Style Guidelines
- Use consistent indentation (4 spaces)
- Keep all code within the HTML file (no external JS/CSS files)
- Comment complex chart configurations
- Use semantic HTML5 elements
- Follow existing color scheme and gradients

### Performance Considerations
- Charts are initialized on page load (no lazy loading needed)
- Use `requestAnimationFrame` for smooth animations if needed
- Minimize DOM manipulations in update functions
- Keep data arrays reasonable in size (typically under 1000 records)

## Testing Checklist

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### Responsive Testing
- [ ] Mobile: 375px width
- [ ] Tablet: 768px width
- [ ] Desktop: 1024px+ width
- [ ] Large screens: 1440px+ width

### Functionality Testing
- [ ] Platform filters work correctly
- [ ] Charts render without errors
- [ ] Resize handling works smoothly
- [ ] All calculations are accurate (especially percentages)
- [ ] Navigation between dashboards via iframe

### Data Validation
- [ ] Check for division by zero in calculations
- [ ] Verify WoW percentage calculations
- [ ] Ensure currency formatting is consistent
- [ ] Validate date ranges match filename

## Common Issues & Solutions

### Chart Not Displaying
- Ensure ECharts/Chart.js script is loaded before initialization
- Check console for JavaScript errors
- Verify element ID matches between HTML and JavaScript

### Responsive Issues
- Use percentage-based widths for containers
- Set explicit heights for chart containers
- Test resize event listeners

### Performance Problems
- Reduce data points if charts are slow
- Use `throttle` or `debounce` for resize handlers
- Minimize real-time calculations

## Project State & Repository

- **GitHub**: https://github.com/keevingfu/neakasa3.git
- **Total Dashboards**: 28 (and growing)
- **No Build Process**: Direct HTML files, no compilation needed
- **Deployment**: Any static file host (GitHub Pages, Netlify, etc.)

## Recent Updates (August 2025)

### Latest Dashboards
- `neakasa_selfkoc_matrix_test_July25-Aug3-2025.html` - Now default landing page
- `neakasa_keyword_research_analysis_Aug2025.html` - SEO insights
- `neakasa_selfkoc_weekly_report_July21-28-2025.html` - Weekly tracking
- `neakasa_social_matrix_q3_2025_summary.html` - Q3 summary analysis

### Technical Improvements
- Enhanced chart layouts using CSS Grid
- New chart types: treemaps, bubble charts, actual funnel charts
- Improved mobile responsiveness
- Better color consistency across dashboards