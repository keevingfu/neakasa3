# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neakasa_h5** is a collection of standalone HTML dashboard files for Neakasa product marketing analytics. The project contains 11 self-contained HTML files with embedded CSS and JavaScript for data visualization and analysis.

## Project Structure

### Product Categories

1. **Steamer Dashboards** (5 files): 
   - `neakasa-steamer01.html` - Social Media Marketing Dashboard
   - `neakasa-steamer02.html` - Platform Performance Dashboard
   - `neakasa-steamer03.html` - Multi-Channel Sales Dashboard
   - `Neakasa-steamer04.html` - MAGIC1挂烫机销售数据环比分析 (Chinese)
   - `neakasa-steamer05.html` - Social Media Analytics Dashboard

2. **Cat Box Dashboards** (5 files):
   - `neakasa_catbox01.html` - Marketing Analytics Dashboard
   - `neakasa_catbox02.html` - Social Media Analytics Dashboard - Phase 3
   - `neakasa_catbox03.html` - Europe Social Media Analytics Dashboard
   - `neakasa_catbox04.html` - Cat Litter Box Sales Dashboard
   - `neakasa_catbox05.html` - Top Content Performance Dashboard - Q2 2025

3. **TikTok Shop Analysis** (1 file):
   - `neakasa-tts.html` - TikTok Shop (TTS) 产品对比分析

## Technical Stack

- **Frontend**: Pure HTML5 with embedded CSS and JavaScript
- **Data Visualization**: Apache ECharts v5.4.3 (CDN)
- **Styling**: CSS3 with Grid/Flexbox layouts, dark theme with gradient accents
- **JavaScript**: Vanilla JS (ES6+) with no framework dependencies
- **Performance**: Intersection Observer API for lazy loading

## Key Features

### Common Features Across All Dashboards
- Responsive design with mobile support
- Interactive charts with hover effects
- Real-time chart resizing on window resize
- Dark theme with gradient backgrounds
- No external API calls (all data is embedded)

### Dashboard Types
1. **Social Media Analytics** - Track engagement across TikTok, Instagram, YouTube
2. **Sales Performance** - Monitor revenue and conversion metrics
3. **Regional Analysis** - Europe-specific performance data
4. **Content Performance** - Top posts and engagement analysis
5. **Comparative Analysis** - Month-over-month performance tracking

## neakasa-tts.html - TikTok Shop Product Comparison Analysis

### Overview
This dashboard provides a comprehensive comparison between two Neakasa products (Steamer vs Cat Litter Box) sold on TikTok Shop from April to June 2024.

### Key Components

1. **Product Comparison Cards**
   - Visual KPI cards showing clicks, orders, and revenue
   - Performance badges (高性能产品/需要优化)
   - Growth indicators with percentage changes

2. **Data Insights**
   - **Steamer (挂烫机)**: 
     - 386K total clicks (679x growth)
     - 3,554 orders (895% increase)
     - ¥77,674 revenue (100% of total revenue)
   - **Cat Litter Box (猫砂盆)**:
     - 746 clicks (27% decrease)
     - 14 orders (43% decrease)
     - ¥0 revenue (data anomaly)

3. **Visualizations**
   - Monthly trend comparison (logarithmic scale)
   - Conversion rate radar chart
   - Traffic distribution pie chart
   - Revenue stacked bar chart
   - Product performance radar chart
   - Growth rate analysis

4. **Technical Features**
   - Chinese language interface
   - Dark theme with neon accents (#00f2ea, #ff0050)
   - Responsive grid layout
   - Warning box for data anomalies
   - Animated loading states

### Data Anomalies Detected
- April steamer orders (182) exceed clicks (178) - possible data collection issue
- Cat litter box shows 14 orders but ¥0 revenue - requires investigation

### Business Insights
- TikTok Shop traffic is 99.8% concentrated on steamers
- Steamer conversion rates: 0.92-1.5% (excluding April anomaly)
- Cat litter box needs urgent optimization (1.88% conversion, no revenue)
- Significant growth opportunity identified for May-June period

## File Characteristics

- **Size Range**: 17KB - 39KB per file
- **No Build Process**: Direct HTML files ready for deployment
- **Static Data**: All dashboards use hardcoded data for demonstration
- **Deployment Ready**: Can be served directly from any web server

## Development Guidelines

1. **Adding New Dashboards**:
   - Follow existing naming convention: `neakasa_[product][number].html`
   - Use ECharts for consistency
   - Maintain dark theme styling
   - Embed all data directly in the file

2. **Modifying Existing Dashboards**:
   - Test responsive behavior after changes
   - Ensure chart resize handlers are maintained
   - Keep data structures consistent

3. **Performance Considerations**:
   - Lazy load images and heavy content
   - Minimize external dependencies
   - Keep file sizes under 40KB when possible

## Important Notes

- All data appears to be for demonstration/reporting purposes
- No backend integration or real-time data feeds
- TikTok dominates traffic sources (90%+ in most dashboards)
- Low engagement rates despite high view counts is a common pattern
- The project is not currently version controlled (no .git directory)