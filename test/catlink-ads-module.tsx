import React, { useState } from 'react';
import { 
  Megaphone,
  Users,
  Globe,
  TrendingUp,
  BarChart3,
  Target,
  DollarSign,
  Eye,
  Clock,
  Activity,
  Map,
  Smartphone,
  Monitor,
  Calendar,
  Zap,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Settings,
  Youtube,
  Instagram,
  ShoppingBag,
  Search,
  PieChart,
  MapPin,
  Heart,
  MessageCircle,
  Share2,
  MousePointer,
  TrendingDown,
  Award,
  Sparkles,
  Package,
  CreditCard,
  RefreshCw,
  Info,
  MoreVertical,
  Trophy
} from 'lucide-react';

const AdsAnalysis = () => {
  const [activeModule, setActiveModule] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  // 广告概览数据
  const overviewData = {
    totalSpend: 45280,
    totalRevenue: 168500,
    totalImpressions: 3250000,
    totalClicks: 42500,
    avgCTR: 1.31,
    avgCPC: 1.07,
    roas: 3.72,
    activeCampaigns: 12,
    platformPerformance: [
      { platform: 'Google', spend: 15800, revenue: 68900, roas: 4.36, status: 'good' },
      { platform: 'Meta', spend: 12500, revenue: 45200, roas: 3.62, status: 'good' },
      { platform: 'TikTok', spend: 8900, revenue: 31200, roas: 3.51, status: 'warning' },
      { platform: 'Amazon', spend: 4200, revenue: 15800, roas: 3.76, status: 'good' },
      { platform: 'YouTube', spend: 3880, revenue: 7400, roas: 1.91, status: 'poor' }
    ],
    topCampaigns: [
      {
        name: 'Multi-cat Awareness',
        platform: 'Google',
        spend: 8900,
        impressions: 980000,
        clicks: 12500,
        ctr: 1.28,
        conversions: 356,
        revenue: 44500,
        roas: 5.00
      },
      {
        name: 'Smart Features Campaign',
        platform: 'Meta',
        spend: 6700,
        impressions: 756000,
        clicks: 9800,
        ctr: 1.30,
        conversions: 289,
        revenue: 28900,
        roas: 4.31
      },
      {
        name: 'Holiday Special',
        platform: 'TikTok',
        spend: 5400,
        impressions: 620000,
        clicks: 8900,
        ctr: 1.44,
        conversions: 198,
        revenue: 19800,
        roas: 3.67
      }
    ]
  };

  // 受众分析数据
  const audienceData = {
    demographics: {
      gender: [
        { type: '女性', percentage: 68, value: 2176000 },
        { type: '男性', percentage: 28, value: 896000 },
        { type: '其他', percentage: 4, value: 128000 }
      ],
      age: [
        { range: '18-24', percentage: 15, value: 480000 },
        { range: '25-34', percentage: 35, value: 1120000 },
        { range: '35-44', percentage: 28, value: 896000 },
        { range: '45-54', percentage: 15, value: 480000 },
        { range: '55+', percentage: 7, value: 224000 }
      ],
      income: [
        { level: '高收入', percentage: 22, definition: '>$100k', value: 704000 },
        { level: '中高收入', percentage: 35, definition: '$70-100k', value: 1120000 },
        { level: '中等收入', percentage: 28, definition: '$40-70k', value: 896000 },
        { level: '低收入', percentage: 15, definition: '<$40k', value: 480000 }
      ]
    },
    interests: [
      { interest: '宠物护理', score: 95, audience: 2880000 },
      { interest: '智能家居', score: 78, audience: 2364000 },
      { interest: '家庭生活', score: 72, audience: 2184000 },
      { interest: '科技产品', score: 65, audience: 1970000 },
      { interest: '环保生活', score: 58, audience: 1758000 }
    ],
    behaviors: [
      { behavior: '多猫家庭', percentage: 42, insight: '核心目标群体' },
      { behavior: '在线购物频繁', percentage: 78, insight: '转化潜力高' },
      { behavior: '移动设备为主', percentage: 65, insight: '优化移动体验' },
      { behavior: '社交媒体活跃', percentage: 82, insight: '适合社交广告' },
      { behavior: '价格敏感度中等', percentage: 55, insight: '重视性价比' }
    ],
    affinities: [
      { brand: 'Petco', index: 3.2 },
      { brand: 'Chewy', index: 2.8 },
      { brand: 'Amazon', index: 2.5 },
      { brand: 'Nest', index: 2.1 },
      { brand: 'Apple', index: 1.9 }
    ]
  };

  // 投放分布数据
  const distributionData = {
    geographic: {
      countries: [
        { country: '美国', impressions: 1625000, percentage: 50, avgCPM: 12.5 },
        { country: '加拿大', impressions: 487500, percentage: 15, avgCPM: 10.8 },
        { country: '英国', impressions: 390000, percentage: 12, avgCPM: 11.2 },
        { country: '德国', impressions: 325000, percentage: 10, avgCPM: 9.5 },
        { country: '其他', impressions: 422500, percentage: 13, avgCPM: 8.9 }
      ],
      topCities: [
        { city: '纽约', country: '美国', impressions: 325000 },
        { city: '洛杉矶', country: '美国', impressions: 260000 },
        { city: '多伦多', country: '加拿大', impressions: 195000 },
        { city: '伦敦', country: '英国', impressions: 162500 },
        { city: '柏林', country: '德国', impressions: 130000 }
      ]
    },
    temporal: {
      hourly: [
        { hour: '0-3', impressions: 65000, ctr: 0.8 },
        { hour: '3-6', impressions: 32500, ctr: 0.6 },
        { hour: '6-9', impressions: 195000, ctr: 1.2 },
        { hour: '9-12', impressions: 390000, ctr: 1.4 },
        { hour: '12-15', impressions: 487500, ctr: 1.5 },
        { hour: '15-18', impressions: 585000, ctr: 1.6 },
        { hour: '18-21', impressions: 812500, ctr: 1.8 },
        { hour: '21-24', impressions: 682500, ctr: 1.5 }
      ],
      weekly: [
        { day: '周一', impressions: 422500, conversions: 42 },
        { day: '周二', impressions: 455000, conversions: 48 },
        { day: '周三', impressions: 487500, conversions: 52 },
        { day: '周四', impressions: 520000, conversions: 58 },
        { day: '周五', impressions: 552500, conversions: 65 },
        { day: '周六', impressions: 455000, conversions: 55 },
        { day: '周日', impressions: 357500, conversions: 38 }
      ]
    },
    device: {
      types: [
        { device: '移动设备', impressions: 2112500, percentage: 65, ctr: 1.8 },
        { device: '桌面设备', impressions: 975000, percentage: 30, ctr: 1.2 },
        { device: '平板设备', impressions: 162500, percentage: 5, ctr: 1.5 }
      ],
      os: [
        { os: 'iOS', percentage: 42, avgOrderValue: 125 },
        { os: 'Android', percentage: 38, avgOrderValue: 98 },
        { os: 'Windows', percentage: 15, avgOrderValue: 115 },
        { os: '其他', percentage: 5, avgOrderValue: 105 }
      ]
    }
  };

  // 优化建议数据
  const optimizationData = {
    bidding: {
      opportunities: [
        {
          campaign: 'Multi-cat Awareness',
          currentBid: 1.25,
          suggestedBid: 1.45,
          impact: '+18% 曝光量',
          reason: '竞争加剧，建议提高出价'
        },
        {
          campaign: 'YouTube Brand',
          currentBid: 0.85,
          suggestedBid: 0.65,
          impact: '-15% 成本',
          reason: 'CTR偏低，建议降低出价'
        }
      ],
      automatedRules: [
        { rule: '高转化时段自动提价20%', status: 'active', impact: '+12% 转化' },
        { rule: '低CTR广告组自动降价', status: 'active', impact: '-8% 成本' },
        { rule: '预算接近上限时自动调整', status: 'paused', impact: '待评估' }
      ]
    },
    creative: {
      topPerformers: [
        {
          creative: '多猫家庭视频A',
          ctr: 2.8,
          conversionRate: 4.2,
          score: 95,
          insights: ['开头3秒吸引力强', '痛点明确', '号召行动清晰']
        },
        {
          creative: '智能功能演示B',
          ctr: 2.5,
          conversionRate: 3.8,
          score: 88,
          insights: ['功能展示清晰', '时长适中', '背景音乐匹配']
        }
      ],
      improvements: [
        {
          issue: '视频完播率低',
          affected: 3,
          suggestion: '缩短视频至15秒内',
          priority: 'high'
        },
        {
          issue: '移动端展示不佳',
          affected: 5,
          suggestion: '优化移动端素材尺寸',
          priority: 'medium'
        }
      ]
    },
    targeting: {
      audiences: [
        {
          name: '高价值多猫家庭',
          size: 850000,
          cpm: 15.6,
          cvr: 4.8,
          recommendation: '增加预算'
        },
        {
          name: '智能家居爱好者',
          size: 1200000,
          cpm: 12.3,
          cvr: 3.2,
          recommendation: '保持投放'
        },
        {
          name: '一般宠物主人',
          size: 2500000,
          cpm: 8.9,
          cvr: 1.2,
          recommendation: '降低权重'
        }
      ],
      exclusions: [
        { type: '已购买用户', count: 28500, saving: '$3,200/月' },
        { type: '低价值地区', count: 450000, saving: '$1,800/月' },
        { type: '无关兴趣', count: 680000, saving: '$2,400/月' }
      ]
    }
  };

  // 效果追踪数据
  const trackingData = {
    realtime: {
      impressions: 2456,
      clicks: 42,
      spend: 38.50,
      conversions: 3,
      revenue: 375,
      lastUpdate: '2分钟前'
    },
    conversion: {
      funnel: [
        { stage: '广告曝光', value: 3250000, rate: 100 },
        { stage: '广告点击', value: 42500, rate: 1.31 },
        { stage: '落地页访问', value: 38250, rate: 1.18 },
        { stage: '加入购物车', value: 8925, rate: 0.27 },
        { stage: '开始结账', value: 4463, rate: 0.14 },
        { stage: '完成购买', value: 1339, rate: 0.04 }
      ],
      byPlatform: [
        { platform: 'Google', conversions: 486, rate: 2.8, value: 60750 },
        { platform: 'Meta', conversions: 378, rate: 2.2, value: 37800 },
        { platform: 'TikTok', conversions: 256, rate: 1.8, value: 25600 },
        { platform: 'Amazon', conversions: 189, rate: 3.5, value: 23625 },
        { platform: 'YouTube', conversions: 30, rate: 0.8, value: 3750 }
      ]
    },
    attribution: {
      models: [
        { model: '最后点击', conversions: 1339, revenue: 151525 },
        { model: '首次点击', conversions: 1425, revenue: 161325 },
        { model: '线性', conversions: 1382, revenue: 156482 },
        { model: '时间衰减', conversions: 1361, revenue: 154153 }
      ],
      paths: [
        { path: 'Google → Meta → Google', conversions: 156, percentage: 11.6 },
        { path: 'TikTok → Google', conversions: 128, percentage: 9.6 },
        { path: 'Meta → TikTok → Meta', conversions: 98, percentage: 7.3 },
        { path: '直接转化', conversions: 489, percentage: 36.5 }
      ]
    },
    ltv: {
      cohorts: [
        { month: '2025-01', customers: 1250, day30: 125, day60: 189, day90: 245 },
        { month: '2025-02', customers: 1380, day30: 138, day60: 208, day90: null },
        { month: '2025-03', customers: 1520, day30: 152, day60: null, day90: null }
      ],
      prediction: {
        avgLTV: 285,
        highValue: 520,
        retention90: 0.42
      }
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const modules = [
    { id: 'overview', name: '总览', icon: BarChart3 },
    { id: 'audience', name: '受众分析', icon: Users },
    { id: 'distribution', name: '投放分布', icon: Globe },
    { id: 'optimization', name: '优化建议', icon: Sparkles },
    { id: 'tracking', name: '效果追踪', icon: Activity }
  ];

  const platformIcons = {
    Google: Search,
    Meta: Instagram,
    TikTok: Megaphone,
    Amazon: ShoppingBag,
    YouTube: Youtube
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-green-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              12%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(overviewData.totalSpend)}</p>
          <p className="text-sm text-gray-600 mt-1">总广告支出</p>
          <p className="text-xs text-gray-500 mt-2">ROAS: {overviewData.roas}x</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              18%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(overviewData.totalImpressions)}</p>
          <p className="text-sm text-gray-600 mt-1">总曝光量</p>
          <p className="text-xs text-gray-500 mt-2">CPM: $9.85</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <MousePointer className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-red-600 flex items-center">
              <ArrowDownRight className="h-4 w-4" />
              5%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(overviewData.totalClicks)}</p>
          <p className="text-sm text-gray-600 mt-1">总点击数</p>
          <p className="text-xs text-gray-500 mt-2">CTR: {overviewData.avgCTR}%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-orange-600" />
            <span className="text-sm text-gray-600">活跃</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{overviewData.activeCampaigns}</p>
          <p className="text-sm text-gray-600 mt-1">广告系列</p>
          <p className="text-xs text-gray-500 mt-2">5个平台</p>
        </div>
      </div>

      {/* 平台表现 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">平台表现对比</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {overviewData.platformPerformance.map((platform, index) => {
            const Icon = platformIcons[platform.platform] || Globe;
            return (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`inline-flex p-3 rounded-lg mb-3 ${
                  platform.platform === 'Google' ? 'bg-blue-100' :
                  platform.platform === 'Meta' ? 'bg-pink-100' :
                  platform.platform === 'TikTok' ? 'bg-purple-100' :
                  platform.platform === 'Amazon' ? 'bg-orange-100' :
                  'bg-red-100'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    platform.platform === 'Google' ? 'text-blue-600' :
                    platform.platform === 'Meta' ? 'text-pink-600' :
                    platform.platform === 'TikTok' ? 'text-purple-600' :
                    platform.platform === 'Amazon' ? 'text-orange-600' :
                    'text-red-600'
                  }`} />
                </div>
                <h4 className="font-semibold text-gray-900">{platform.platform}</h4>
                <p className="text-sm text-gray-600 mt-2">花费: {formatCurrency(platform.spend)}</p>
                <p className="text-sm text-gray-600">收入: {formatCurrency(platform.revenue)}</p>
                <div className={`mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  platform.status === 'good' ? 'bg-green-100 text-green-700' :
                  platform.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  ROAS: {platform.roas}x
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 热门广告系列 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">热门广告系列</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-gray-600">广告系列</th>
                <th className="pb-3 text-sm font-medium text-gray-600">平台</th>
                <th className="pb-3 text-sm font-medium text-gray-600">花费</th>
                <th className="pb-3 text-sm font-medium text-gray-600">曝光</th>
                <th className="pb-3 text-sm font-medium text-gray-600">点击</th>
                <th className="pb-3 text-sm font-medium text-gray-600">CTR</th>
                <th className="pb-3 text-sm font-medium text-gray-600">转化</th>
                <th className="pb-3 text-sm font-medium text-gray-600">收入</th>
                <th className="pb-3 text-sm font-medium text-gray-600">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {overviewData.topCampaigns.map((campaign, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-900">{campaign.name}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.platform === 'Google' ? 'bg-blue-100 text-blue-700' :
                      campaign.platform === 'Meta' ? 'bg-pink-100 text-pink-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {campaign.platform}
                    </span>
                  </td>
                  <td className="py-3">{formatCurrency(campaign.spend)}</td>
                  <td className="py-3">{formatNumber(campaign.impressions)}</td>
                  <td className="py-3">{formatNumber(campaign.clicks)}</td>
                  <td className="py-3">{campaign.ctr}%</td>
                  <td className="py-3">{campaign.conversions}</td>
                  <td className="py-3 font-semibold">{formatCurrency(campaign.revenue)}</td>
                  <td className="py-3">
                    <span className={`font-semibold ${
                      campaign.roas >= 4 ? 'text-green-600' : 
                      campaign.roas >= 3 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {campaign.roas}x
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 快速洞察 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">关键洞察</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5" />
              <h4 className="font-semibold">最佳平台</h4>
            </div>
            <p className="text-sm opacity-90">Google Ads表现最佳，ROAS达4.36x，建议增加预算20%</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5" />
              <h4 className="font-semibold">需要优化</h4>
            </div>
            <p className="text-sm opacity-90">YouTube广告效果不佳，建议优化视频素材或调整定向</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5" />
              <h4 className="font-semibold">增长机会</h4>
            </div>
            <p className="text-sm opacity-90">TikTok广告CTR高但转化率低，优化落地页可提升30%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAudienceAnalysis = () => (
    <div className="space-y-6">
      {/* 人口统计 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">性别分布</h3>
          <div className="space-y-3">
            {audienceData.demographics.gender.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{item.type}</span>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.type === '女性' ? 'bg-pink-500' :
                      item.type === '男性' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">年龄分布</h3>
          <div className="space-y-3">
            {audienceData.demographics.age.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.range}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-10 text-right">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">收入水平</h3>
          <div className="space-y-3">
            {audienceData.demographics.income.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{item.level}</p>
                    <p className="text-xs text-gray-600">{item.definition}</p>
                  </div>
                  <span className="text-lg font-semibold text-purple-600">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 兴趣分析 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">兴趣标签分析</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {audienceData.interests.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <div>
                    <p className="font-medium text-gray-900">{item.interest}</p>
                    <p className="text-sm text-gray-600">{formatNumber(item.audience)} 人</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 relative">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="36" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="40" cy="40" r="36" stroke="#8B5CF6" strokeWidth="8" fill="none"
                        strokeDasharray={`${2 * Math.PI * 36 * item.score / 100} ${2 * Math.PI * 36}`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-purple-600">{item.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 mb-2">行为特征</h4>
            {audienceData.behaviors.map((item, index) => (
              <div key={index} className="p-3 bg-purple-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-900">{item.behavior}</span>
                  <span className="text-lg font-semibold text-purple-600">{item.percentage}%</span>
                </div>
                <p className="text-sm text-gray-600">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 品牌亲和度 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">品牌亲和度指数</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {audienceData.affinities.map((item, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">{item.brand}</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">{item.index}x</p>
              <p className="text-xs text-gray-600">vs 平均</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDistribution = () => (
    <div className="space-y-6">
      {/* 地理分布 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">地理分布</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">国家分布</h4>
            <div className="space-y-3">
              {distributionData.geographic.countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{country.country}</p>
                      <p className="text-sm text-gray-600">{formatNumber(country.impressions)} 曝光</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{country.percentage}%</p>
                    <p className="text-sm text-gray-600">CPM ${country.avgCPM}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">热门城市</h4>
            <div className="space-y-2">
              {distributionData.geographic.topCities.map((city, index) => (
                <div key={index} className="flex items-center justify-between p-2">
                  <span className="text-sm text-gray-700">{city.city}, {city.country}</span>
                  <span className="font-medium text-gray-900">{formatNumber(city.impressions)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <Info className="h-4 w-4 inline mr-1" />
                北美市场占50%份额，建议加大投放力度
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 时间分布 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">时间分布</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">24小时分布</h4>
            <div className="space-y-2">
              {distributionData.temporal.hourly.map((hour, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-12">{hour.hour}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(hour.impressions / 812500) * 100}%` }}
                    >
                      <span className="text-xs text-white">{formatNumber(hour.impressions)}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 w-16 text-right">CTR {hour.ctr}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">星期分布</h4>
            <div className="space-y-3">
              {distributionData.temporal.weekly.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{day.day}</span>
                  <div className="text-right">
                    <p className="font-semibold">{formatNumber(day.impressions)}</p>
                    <p className="text-sm text-gray-600">{day.conversions} 转化</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 设备分布 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">设备分布</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">设备类型</h4>
            <div className="space-y-4">
              {distributionData.device.types.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {device.device === '移动设备' && <Smartphone className="h-5 w-5 text-purple-600" />}
                    {device.device === '桌面设备' && <Monitor className="h-5 w-5 text-blue-600" />}
                    {device.device === '平板设备' && <Smartphone className="h-5 w-5 text-gray-600" />}
                    <div>
                      <p className="font-medium text-gray-900">{device.device}</p>
                      <p className="text-sm text-gray-600">{formatNumber(device.impressions)} 曝光</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">{device.percentage}%</p>
                    <p className="text-sm text-purple-600">CTR {device.ctr}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">操作系统</h4>
            <div className="space-y-3">
              {distributionData.device.os.map((os, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{os.os}</span>
                    <span className="text-lg font-semibold text-purple-600">{os.percentage}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">平均客单价: ${os.avgOrderValue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOptimization = () => (
    <div className="space-y-6">
      {/* 出价优化 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">出价优化建议</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">优化机会</h4>
            <div className="space-y-3">
              {optimizationData.bidding.opportunities.map((opp, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-purple-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-gray-900">{opp.campaign}</h5>
                    <span className="text-sm text-purple-600 font-medium">{opp.impact}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">当前: ${opp.currentBid}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-900">建议: ${opp.suggestedBid}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{opp.reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">自动化规则</h4>
            <div className="space-y-3">
              {optimizationData.bidding.automatedRules.map((rule, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{rule.rule}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rule.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {rule.status === 'active' ? '启用' : '暂停'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{rule.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 素材优化 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">素材优化</h3>
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">表现最佳的素材</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizationData.creative.topPerformers.map((creative, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-gray-900">{creative.creative}</h5>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-lg font-semibold text-purple-600">{creative.score}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-sm text-gray-600">CTR</p>
                    <p className="font-semibold">{creative.ctr}%</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-sm text-gray-600">转化率</p>
                    <p className="font-semibold">{creative.conversionRate}%</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {creative.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <p className="text-sm text-gray-700">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">改进建议</h4>
          <div className="space-y-3">
            {optimizationData.creative.improvements.map((improvement, index) => (
              <div key={index} className={`p-3 border rounded-lg ${
                improvement.priority === 'high' ? 'border-red-300 bg-red-50' :
                'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertCircle className={`h-5 w-5 ${
                      improvement.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900">{improvement.issue}</p>
                      <p className="text-sm text-gray-600">影响 {improvement.affected} 个广告</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50">
                    {improvement.suggestion}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 定向优化 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">定向优化</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">受众表现</h4>
            <div className="space-y-3">
              {optimizationData.targeting.audiences.map((audience, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{audience.name}</p>
                      <p className="text-sm text-gray-600">{formatNumber(audience.size)} 人</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      audience.recommendation === '增加预算' ? 'bg-green-100 text-green-700' :
                      audience.recommendation === '保持投放' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {audience.recommendation}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">CPM: ${audience.cpm}</span>
                    <span className="text-purple-600 font-medium">CVR: {audience.cvr}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">排除设置</h4>
            <div className="space-y-3">
              {optimizationData.targeting.exclusions.map((exclusion, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{exclusion.type}</p>
                    <p className="text-sm text-gray-600">{formatNumber(exclusion.count)} 用户</p>
                  </div>
                  <p className="text-green-600 font-medium">{exclusion.saving}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-800">
                <Sparkles className="h-4 w-4 inline mr-1" />
                通过优化排除设置，每月可节省$7,400广告费用
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTracking = () => (
    <div className="space-y-6">
      {/* 实时数据 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">实时数据监控</h3>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            <span className="text-sm opacity-90">更新于 {trackingData.realtime.lastUpdate}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{formatNumber(trackingData.realtime.impressions)}</p>
            <p className="text-sm opacity-90">曝光</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{trackingData.realtime.clicks}</p>
            <p className="text-sm opacity-90">点击</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">${trackingData.realtime.spend}</p>
            <p className="text-sm opacity-90">花费</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{trackingData.realtime.conversions}</p>
            <p className="text-sm opacity-90">转化</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">${trackingData.realtime.revenue}</p>
            <p className="text-sm opacity-90">收入</p>
          </div>
        </div>
      </div>

      {/* 转化漏斗 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">转化漏斗分析</h3>
        <div className="space-y-4">
          {trackingData.conversion.funnel.map((stage, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900">{stage.stage}</span>
                <div className="text-right">
                  <span className="font-semibold">{formatNumber(stage.value)}</span>
                  <span className="text-sm text-gray-600 ml-2">({stage.rate}%)</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-8 rounded-full flex items-center justify-end pr-3"
                  style={{ width: `${stage.rate}%` }}
                >
                  <span className="text-xs text-white font-medium">{stage.rate}%</span>
                </div>
              </div>
              {index < trackingData.conversion.funnel.length - 1 && (
                <div className="text-center py-2">
                  <ChevronRight className="h-5 w-5 text-gray-400 mx-auto rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 平台转化对比 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">平台转化表现</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-gray-600">平台</th>
                <th className="pb-3 text-sm font-medium text-gray-600">转化数</th>
                <th className="pb-3 text-sm font-medium text-gray-600">转化率</th>
                <th className="pb-3 text-sm font-medium text-gray-600">转化价值</th>
                <th className="pb-3 text-sm font-medium text-gray-600">CPA</th>
              </tr>
            </thead>
            <tbody>
              {trackingData.conversion.byPlatform.map((platform, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      platform.platform === 'Google' ? 'bg-blue-100 text-blue-700' :
                      platform.platform === 'Meta' ? 'bg-pink-100 text-pink-700' :
                      platform.platform === 'TikTok' ? 'bg-purple-100 text-purple-700' :
                      platform.platform === 'Amazon' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {platform.platform}
                    </span>
                  </td>
                  <td className="py-3 font-medium">{platform.conversions}</td>
                  <td className="py-3">
                    <span className={`font-medium ${
                      platform.rate >= 3 ? 'text-green-600' :
                      platform.rate >= 2 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {platform.rate}%
                    </span>
                  </td>
                  <td className="py-3 font-semibold">{formatCurrency(platform.value)}</td>
                  <td className="py-3">{formatCurrency(platform.value / platform.conversions)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 归因分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">归因模型对比</h3>
          <div className="space-y-3">
            {trackingData.attribution.models.map((model, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{model.model}</span>
                <div className="text-right">
                  <p className="font-semibold">{model.conversions} 转化</p>
                  <p className="text-sm text-gray-600">{formatCurrency(model.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">转化路径分析</h3>
          <div className="space-y-3">
            {trackingData.attribution.paths.map((path, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">{path.path}</span>
                <div className="text-right">
                  <p className="font-semibold">{path.conversions}</p>
                  <p className="text-sm text-purple-600">{path.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LTV分析 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">客户生命周期价值（LTV）</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h4 className="font-medium text-gray-700 mb-3">队列分析</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left text-gray-600">队列</th>
                    <th className="pb-2 text-center text-gray-600">新客户</th>
                    <th className="pb-2 text-center text-gray-600">30天</th>
                    <th className="pb-2 text-center text-gray-600">60天</th>
                    <th className="pb-2 text-center text-gray-600">90天</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingData.ltv.cohorts.map((cohort, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-medium">{cohort.month}</td>
                      <td className="py-2 text-center">{cohort.customers}</td>
                      <td className="py-2 text-center">${cohort.day30}</td>
                      <td className="py-2 text-center">
                        {cohort.day60 ? `$${cohort.day60}` : '-'}
                      </td>
                      <td className="py-2 text-center">
                        {cohort.day90 ? `$${cohort.day90}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">预测指标</h4>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">平均LTV</p>
                <p className="text-2xl font-bold text-purple-600">${trackingData.ltv.prediction.avgLTV}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">高价值客户LTV</p>
                <p className="text-2xl font-bold text-green-600">${trackingData.ltv.prediction.highValue}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">90天留存率</p>
                <p className="text-2xl font-bold text-blue-600">{(trackingData.ltv.prediction.retention90 * 100).toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 头部 */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">广告分析中心</h1>
            <p className="text-gray-600 mt-2">多平台广告投放管理与优化，最大化ROI</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">全部平台</option>
              <option value="google">Google Ads</option>
              <option value="meta">Meta</option>
              <option value="tiktok">TikTok</option>
              <option value="amazon">Amazon</option>
              <option value="youtube">YouTube</option>
            </select>
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="1d">今天</option>
              <option value="7d">过去7天</option>
              <option value="30d">过去30天</option>
              <option value="custom">自定义</option>
            </select>
            <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Download className="h-4 w-4 inline mr-2" />
              导出报告
            </button>
          </div>
        </div>
      </div>

      {/* 模块导航 */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {modules.map(module => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeModule === module.id
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <module.icon className="h-5 w-5" />
              {module.name}
            </button>
          ))}
        </nav>
      </div>

      {/* 内容区域 */}
      <div>
        {activeModule === 'overview' && renderOverview()}
        {activeModule === 'audience' && renderAudienceAnalysis()}
        {activeModule === 'distribution' && renderDistribution()}
        {activeModule === 'optimization' && renderOptimization()}
        {activeModule === 'tracking' && renderTracking()}
      </div>
    </div>
  );
};

export default AdsAnalysis;