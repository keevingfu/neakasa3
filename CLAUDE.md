# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neakasa_h5** is a static analytics dashboard platform for Neakasa product marketing. The project consists of 25+ self-contained HTML dashboards with embedded CSS and JavaScript, providing data visualization and business intelligence for two main product lines (Garment Steamer and Cat Litter Box) across multiple marketing channels and platforms.

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
- **Visualization**: Apache ECharts 5.4.3 (primary), Chart.js 4.4.1 (newer dashboards)
- **Styling**: Dark theme (#0f0f23), gradient accents (#00f2ea to #ff0050)
- **JavaScript**: Vanilla ES6+, no build process required
- **Data**: Static arrays embedded in each HTML file

### High-Level Architecture

**Navigation Hub (index.html)**:
- Accordion sidebar (auto-collapse behavior)
- Dynamic iframe loading for dashboards
- Category organization: SelfKOC (矩阵内容测试) and Ads (内容赋能广告)

**Dashboard Pattern** - Each HTML file is self-contained with:
- Embedded `<style>` and `<script>` tags
- Static data arrays (no external APIs)
- Platform filters (DTC, Amazon, TikTok Shop)
- Responsive breakpoints (375px, 768px, 1024px, 1440px)
- Business insights panels

### File Naming Convention
- `neakasa_ads_*` - Advertising dashboards
- `neakasa_selfkoc_*` - Self-operated KOC content
- `neakasa_ecom_*` - E-commerce comparisons
- Product suffixes: `_catbox_`, `_steamer_`
- Date format: `May7-July20-2025`

## Common Patterns

### Data Metrics
- Performance: Clicks, impressions, orders, revenue, CTR, CVR
- Time periods: Weekly with WoW calculations
- Platforms: DTC, Amazon, TikTok Shop, YouTube, Instagram
- Currency: USD ($) and EUR (€)

## Development Guidelines

### Adding New Dashboards
1. Copy existing dashboard as template
2. Update data arrays and chart configurations
3. Add to index.html navigation (update dashboard count)
4. Test responsive breakpoints

### Chart Implementation
```javascript
// ECharts pattern
const chart = echarts.init(document.getElementById('chartId'));
chart.setOption(option);
window.addEventListener('resize', () => chart.resize());

// Platform filtering
function filterByPlatform(platform) {
    const filteredData = data.filter(d => d.platform === platform || platform === 'all');
    updateCharts(filteredData);
}
```

## Testing & Validation

### Browser Testing
- Chrome, Safari, Firefox, Edge
- Mobile: 375px, Tablet: 768px, Desktop: 1024px+

### Data Validation
- Check calculations (especially division by zero)
- Verify WoW percentages
- Test platform filtering
- Validate chart interactions

## Key Implementation Details

### Video Preview System
The project includes standardized video preview implementations (`preview_ytb.html`, `prieview_tk.html`) supporting:
- **YouTube**: Extract ID from URL, embed via iframe
- **TikTok**: Direct embed URL format
- **Instagram**: Post ID extraction for embed

Embed patterns:
```javascript
// YouTube: https://www.youtube.com/embed/{videoId}
// TikTok: https://www.tiktok.com/embed/v2/{videoId}
// Instagram: https://www.instagram.com/p/{postId}/embed/
```

## Project State

### Repository
- GitHub: https://github.com/keevingfu/neakasa3.git
- 28 dashboards organized by strategic importance
- No package.json or build process required
- Static hosting ready

### Latest Updates (August 2025)

#### New Dashboards Added
1. **neakasa_selfkoc_matrix_test_July25-Aug3-2025.html** - Comprehensive KOC matrix content marketing test analysis
   - Now set as default landing page
   - Features multi-tab navigation (Overview, Cat Litter Box, Garment Steamer, Strategy)
   - Advanced visualizations: scatter plots, funnel charts, treemaps
   - Automated campaign optimization recommendations

2. **neakasa_keyword_research_analysis_Aug2025.html** - Google search keyword insights
   - Top search keywords performance analysis
   - CPC competition analysis
   - Search intent mapping
   - Strategic SEO roadmap

3. **neakasa_selfkoc_weekly_report_July21-28-2025.html** - Weekly performance tracking

#### Navigation Restructure
- Added new primary section: "Strategic Analysis & Insights" (expanded by default)
- Reorganized menu by analytical importance rather than just product type
- Featured dashboards now prominently displayed at top
- Improved user flow for accessing critical business insights

#### Technical Improvements
- Fixed chart layout issues in Performance Comparison, Funnel, and Classification visualizations
- Implemented proper CSS grid layouts matching Creative Performance Matrix style
- Enhanced chart types: grouped bar charts, actual funnel charts, bubble charts, treemaps
- Improved responsive design and container space utilization

### Claude Code Settings
Local permissions configured in `.claude/settings.local.json` for:
- File operations (ls, grep, python3)
- Git commands (init, add, commit, push)
- Dashboard preview (open *.html)
- MCP server access

