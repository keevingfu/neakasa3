import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Globe, 
  Search,
  TrendingUp,
  DollarSign,
  BarChart3,
  TestTube,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Zap,
  PieChart,
  MapPin,
  Hash,
  Youtube,
  Instagram,
  Music,
  RefreshCw,
  Calendar,
  Filter
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [refreshing, setRefreshing] = useState(false);

  // KOL统计数据
  const kolStats = {
    total: 342,
    active: 156,
    newThisMonth: 23,
    avgEngagement: 4.2,
    platformDistribution: [
      { platform: 'YouTube', count: 145, percentage: 42.4, icon: Youtube, color: 'bg-red-500' },
      { platform: 'Instagram', count: 102, percentage: 29.8, icon: Instagram, color: 'bg-pink-500' },
      { platform: 'TikTok', count: 95, percentage: 27.8, icon: Music, color: 'bg-purple-500' }
    ],
    regionDistribution: [
      { region: '北美', count: 125, percentage: 36.5 },
      { region: '欧洲', count: 98, percentage: 28.7 },
      { region: '亚太', count: 76, percentage: 22.2 },
      { region: '其他', count: 43, percentage: 12.6 }
    ]
  };

  // 搜索洞察数据
  const searchInsights = {
    topKeywords: [
      { keyword: 'smart litter box', volume: 12500, cpc: 2.45, trend: 15 },
      { keyword: 'automatic cat litter', volume: 8900, cpc: 1.89, trend: 23 },
      { keyword: 'self cleaning litter box', volume: 7200, cpc: 3.12, trend: -5 },
      { keyword: 'catlink review', volume: 4500, cpc: 0.85, trend: 45 },
      { keyword: 'multi cat litter box', volume: 3200, cpc: 2.76, trend: 18 }
    ],
    avgCPC: 2.21,
    cpcTrend: -8.5,
    totalSearchVolume: 156000,
    volumeTrend: 22.3
  };

  // 广告效果数据
  const adPerformance = {
    totalSpend: 45280,
    totalRevenue: 168500,
    roas: 3.72,
    campaigns: [
      { name: 'Multi-cat Campaign', spend: 12500, revenue: 56800, roas: 4.54, status: 'active' },
      { name: 'Safety Features', spend: 8900, revenue: 32100, roas: 3.61, status: 'active' },
      { name: 'Smart Home Integration', spend: 6700, revenue: 21300, roas: 3.18, status: 'paused' },
      { name: 'Holiday Special', spend: 10200, revenue: 38900, roas: 3.81, status: 'active' }
    ]
  };

  // A/B测试数据
  const abTests = {
    active: 5,
    completed: 12,
    topTests: [
      { 
        name: '产品页面优化',
        variant: 'B',
        improvement: 23.5,
        confidence: 95,
        status: 'winning'
      },
      {
        name: '邮件标题测试',
        variant: 'A',
        improvement: 15.2,
        confidence: 89,
        status: 'testing'
      },
      {
        name: '广告创意对比',
        variant: 'C',
        improvement: 31.8,
        confidence: 98,
        status: 'winning'
      }
    ]
  };

  // 私域营销数据
  const privateDomain = {
    totalUsers: 8542,
    activeUsers: 3218,
    channels: [
      { channel: 'EDM', users: 4521, engagement: 22.5, revenue: 45600 },
      { channel: 'WhatsApp', users: 2103, engagement: 35.8, revenue: 28900 },
      { channel: 'LinkedIn', users: 1918, engagement: 18.2, revenue: 21300 }
    ],
    conversionRate: 4.8,
    ltv: 285
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 头部控制栏 */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">业务数据仪表板</h1>
            <p className="text-gray-600 mt-2">全方位监控您的内容营销表现</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="7d">过去7天</option>
              <option value="30d">过去30天</option>
              <option value="90d">过去90天</option>
              <option value="custom">自定义</option>
            </select>
            <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={handleRefresh}
              className={`p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 ${
                refreshing ? 'animate-spin' : ''
              }`}
            >
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* KOL统计概览 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="h-6 w-6 text-purple-600" />
          KOL 统计概览
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* KOL总体统计 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">KOL总数</span>
                <span className="text-2xl font-bold text-gray-900">{kolStats.total}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">活跃KOL</span>
                <span className="text-xl font-semibold text-green-600">{kolStats.active}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">本月新增</span>
                <span className="text-xl font-semibold text-blue-600">+{kolStats.newThisMonth}</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">平均互动率</span>
                  <span className="text-xl font-semibold text-purple-600">{kolStats.avgEngagement}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 平台分布 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">平台分布</h3>
            <div className="space-y-3">
              {kolStats.platformDistribution.map((platform, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${platform.color}`}>
                      <platform.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{platform.platform}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900 font-semibold">{platform.count}</span>
                    <span className="text-gray-500 text-sm">{platform.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 区域分布 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">区域分布</h3>
            <div className="space-y-3">
              {kolStats.regionDistribution.map((region, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {region.region}
                    </span>
                    <span className="text-gray-900 font-semibold">{region.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 搜索洞察摘要 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="h-6 w-6 text-blue-600" />
          搜索洞察摘要
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 热门关键词 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">热门关键词</h3>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">总搜索量: </span>
                <span className="font-semibold text-gray-900">{formatNumber(searchInsights.totalSearchVolume)}</span>
                <span className={`flex items-center ${searchInsights.volumeTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {searchInsights.volumeTrend > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {Math.abs(searchInsights.volumeTrend)}%
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {searchInsights.topKeywords.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 font-medium">#{index + 1}</span>
                    <div>
                      <p className="font-medium text-gray-900">{keyword.keyword}</p>
                      <p className="text-sm text-gray-600">{formatNumber(keyword.volume)} 搜索</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${keyword.cpc}</p>
                    <p className={`text-sm flex items-center justify-end ${
                      keyword.trend > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {keyword.trend > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {Math.abs(keyword.trend)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CPC分析 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">CPC 分析</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <DollarSign className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">平均CPC</p>
                <p className="text-3xl font-bold text-gray-900">${searchInsights.avgCPC}</p>
                <p className={`text-sm mt-2 flex items-center justify-center ${
                  searchInsights.cpcTrend < 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {searchInsights.cpcTrend < 0 ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                  {Math.abs(searchInsights.cpcTrend)}%
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">最高CPC</p>
                  <p className="font-semibold text-gray-900">$3.12</p>
                  <p className="text-xs text-gray-500">self cleaning litter box</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">最低CPC</p>
                  <p className="font-semibold text-gray-900">$0.85</p>
                  <p className="text-xs text-gray-500">catlink review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 广告效果快速预览 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-green-600" />
          广告效果快速预览
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">总广告支出</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(adPerformance.totalSpend)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">总收入</p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(adPerformance.totalRevenue)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">ROAS</p>
            <p className="text-2xl font-bold text-purple-600">{adPerformance.roas}x</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-600 mb-1">活跃广告系列</p>
            <p className="text-2xl font-bold text-blue-600">{adPerformance.campaigns.filter(c => c.status === 'active').length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-gray-600">广告系列</th>
                <th className="pb-3 text-sm font-medium text-gray-600">支出</th>
                <th className="pb-3 text-sm font-medium text-gray-600">收入</th>
                <th className="pb-3 text-sm font-medium text-gray-600">ROAS</th>
                <th className="pb-3 text-sm font-medium text-gray-600">状态</th>
              </tr>
            </thead>
            <tbody>
              {adPerformance.campaigns.map((campaign, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-900">{campaign.name}</td>
                  <td className="py-3 text-gray-700">{formatCurrency(campaign.spend)}</td>
                  <td className="py-3 text-gray-700">{formatCurrency(campaign.revenue)}</td>
                  <td className="py-3">
                    <span className={`font-semibold ${
                      campaign.roas >= 4 ? 'text-green-600' : 
                      campaign.roas >= 3 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {campaign.roas}x
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {campaign.status === 'active' ? '运行中' : '已暂停'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* A/B测试成果展示 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TestTube className="h-6 w-6 text-orange-600" />
          A/B 测试成果展示
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">测试概况</h3>
              <Activity className="h-5 w-5 text-orange-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">进行中测试</span>
                <span className="font-semibold text-orange-600">{abTests.active}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">已完成测试</span>
                <span className="font-semibold text-green-600">{abTests.completed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">平均提升</span>
                <span className="font-semibold text-purple-600">+21.8%</span>
              </div>
            </div>
          </div>

          {abTests.topTests.map((test, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-900">{test.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  test.status === 'winning' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {test.status === 'winning' ? '获胜' : '测试中'}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">获胜变体</span>
                  <span className="font-semibold">变体 {test.variant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">提升率</span>
                  <span className="font-semibold text-green-600">+{test.improvement}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">置信度</span>
                  <span className="font-semibold">{test.confidence}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 私域营销数据汇总 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Lock className="h-6 w-6 text-indigo-600" />
          私域营销数据汇总
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 总体数据 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">私域用户总数</span>
                <span className="text-2xl font-bold text-gray-900">{formatNumber(privateDomain.totalUsers)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">活跃用户</span>
                <span className="text-xl font-semibold text-green-600">{formatNumber(privateDomain.activeUsers)}</span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">平均LTV</span>
                  <span className="text-xl font-semibold text-purple-600">${privateDomain.ltv}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">转化率</span>
                  <span className="text-xl font-semibold text-blue-600">{privateDomain.conversionRate}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 渠道数据 */}
          {privateDomain.channels.map((channel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">{channel.channel}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">用户数</span>
                  <span className="font-semibold">{formatNumber(channel.users)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">互动率</span>
                  <span className="font-semibold text-green-600">{channel.engagement}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">收入</span>
                  <span className="font-semibold text-purple-600">{formatCurrency(channel.revenue)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 快速操作栏 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">快速操作</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left transition-colors">
            <Target className="h-6 w-6 mb-2" />
            <p className="font-semibold">创建新广告系列</p>
            <p className="text-sm opacity-80">快速启动新的推广活动</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left transition-colors">
            <TestTube className="h-6 w-6 mb-2" />
            <p className="font-semibold">发起A/B测试</p>
            <p className="text-sm opacity-80">优化转化率和用户体验</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left transition-colors">
            <Users className="h-6 w-6 mb-2" />
            <p className="font-semibold">招募新KOL</p>
            <p className="text-sm opacity-80">扩大内容创作者网络</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-left transition-colors">
            <Zap className="h-6 w-6 mb-2" />
            <p className="font-semibold">查看实时数据</p>
            <p className="text-sm opacity-80">监控当前活动表现</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;