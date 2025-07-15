import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  BarChart3,
  Video,
  Search,
  TestTube,
  UserCheck,
  Megaphone,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Brain,
  Globe,
  Target,
  Mail,
  Store
} from 'lucide-react';

const MainDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // KPI数据
  const kpiData = {
    totalViews: 2156300,
    viewsChange: 23.5,
    totalEngagement: 15420,
    engagementChange: 15.2,
    avgROAS: 3.68,
    roasChange: -2.1,
    activeKOCs: 89,
    kocChange: 12.3
  };

  // 模块快速入口
  const modules = [
    {
      id: 'insight',
      name: '消费者洞察',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      description: 'VOC分析、搜索洞察、病毒传播',
      metrics: { value: '1.2K', label: '新洞察' },
      path: '/insight'
    },
    {
      id: 'testing',
      name: '内容测试',
      icon: TestTube,
      color: 'from-blue-500 to-blue-600',
      description: '创意中心、内容矩阵、优化',
      metrics: { value: '45', label: '测试中' },
      path: '/testing'
    },
    {
      id: 'kol',
      name: 'KOL管理',
      icon: UserCheck,
      color: 'from-green-500 to-green-600',
      description: 'KOL概览、触达分析、转化分析',
      metrics: { value: '156', label: '活跃KOL' },
      path: '/kol'
    },
    {
      id: 'ads',
      name: '广告分析',
      icon: Megaphone,
      color: 'from-orange-500 to-orange-600',
      description: '受众洞察、分布分析、优化追踪',
      metrics: { value: '$45K', label: '本月花费' },
      path: '/ads'
    },
    {
      id: 'private',
      name: '私域运营',
      icon: Lock,
      color: 'from-indigo-500 to-indigo-600',
      description: 'EDM、LinkedIn、WhatsApp、线下',
      metrics: { value: '8.5K', label: '私域用户' },
      path: '/private'
    }
  ];

  // 热门内容数据
  const topContent = [
    {
      platform: 'TikTok',
      title: 'Multi-cat household solution',
      views: 626300,
      engagement: 2830,
      creator: '@dinomcmah',
      trend: 'up'
    },
    {
      platform: 'Instagram',
      title: 'Smart litter box review',
      views: 679000,
      engagement: 3937,
      creator: '@davidsonmaxqwsf',
      trend: 'up'
    },
    {
      platform: 'YouTube',
      title: 'Setup tutorial',
      views: 35000,
      engagement: 164,
      creator: '@norberthairston',
      trend: 'stable'
    }
  ];

  // 最新洞察
  const latestInsights = [
    {
      type: 'trend',
      title: 'Multi-cat主题内容表现优异',
      description: 'Multi-cat相关内容的ROAS达到6.79，高于平均值126%',
      priority: 'high',
      action: '增加Multi-cat内容投放'
    },
    {
      type: 'warning',
      title: 'YouTube转化率下降',
      description: 'YouTube平台转化率仅0.61%，建议优化内容策略',
      priority: 'medium',
      action: '调整YouTube内容方向'
    },
    {
      type: 'opportunity',
      title: 'Instagram互动率提升空间',
      description: 'Instagram平台互动率有20%的提升潜力',
      priority: 'medium',
      action: '优化Instagram内容形式'
    }
  ];

  // 平台分布数据
  const platformData = [
    { platform: 'TikTok', percentage: 45, color: 'bg-purple-500' },
    { platform: 'Instagram', percentage: 30, color: 'bg-pink-500' },
    { platform: 'YouTube', percentage: 15, color: 'bg-red-500' },
    { platform: 'Others', percentage: 10, color: 'bg-gray-400' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 头部 */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Catlink 内容驱动智能增长决策系统
            </h1>
            <p className="text-gray-600 mt-2">欢迎回来！这是您的数据概览</p>
          </div>
          <div className="flex gap-2">
            {['day', 'week', 'month'].map(period => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedPeriod === period
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {period === 'day' ? '今日' : period === 'week' ? '本周' : '本月'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 核心KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-purple-600" />
            <span className={`flex items-center text-sm font-medium ${
              kpiData.viewsChange > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpiData.viewsChange > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {Math.abs(kpiData.viewsChange)}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(kpiData.totalViews)}</p>
          <p className="text-sm text-gray-600 mt-1">总浏览量</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className={`flex items-center text-sm font-medium ${
              kpiData.engagementChange > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpiData.engagementChange > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {Math.abs(kpiData.engagementChange)}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(kpiData.totalEngagement)}</p>
          <p className="text-sm text-gray-600 mt-1">总互动量</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <span className={`flex items-center text-sm font-medium ${
              kpiData.roasChange > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpiData.roasChange > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {Math.abs(kpiData.roasChange)}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{kpiData.avgROAS}</p>
          <p className="text-sm text-gray-600 mt-1">平均ROAS</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <span className={`flex items-center text-sm font-medium ${
              kpiData.kocChange > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpiData.kocChange > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              {Math.abs(kpiData.kocChange)}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{kpiData.activeKOCs}</p>
          <p className="text-sm text-gray-600 mt-1">活跃KOC</p>
        </div>
      </div>

      {/* 模块入口 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">系统模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map(module => (
            <div
              key={module.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.location.href = module.path}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${module.color} mb-4`}>
                <module.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
              <p className="text-xs text-gray-600 mb-3">{module.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-900">{module.metrics.value}</p>
                  <p className="text-xs text-gray-600">{module.metrics.label}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 热门内容 */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">热门内容表现</h2>
          <div className="space-y-4">
            {topContent.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    content.platform === 'TikTok' ? 'bg-purple-100' :
                    content.platform === 'Instagram' ? 'bg-pink-100' :
                    'bg-red-100'
                  }`}>
                    <Video className={`h-6 w-6 ${
                      content.platform === 'TikTok' ? 'text-purple-600' :
                      content.platform === 'Instagram' ? 'text-pink-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{content.title}</p>
                    <p className="text-sm text-gray-600">{content.creator} · {content.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatNumber(content.views)}</p>
                  <p className="text-sm text-gray-600">{formatNumber(content.engagement)} 互动</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 平台分布 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">平台流量分布</h2>
          <div className="space-y-4">
            {platformData.map((platform, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{platform.platform}</span>
                  <span className="text-sm font-medium text-gray-900">{platform.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${platform.color}`}
                    style={{ width: `${platform.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-600 mb-2">总覆盖人数</p>
            <p className="text-2xl font-bold text-gray-900">3.2M</p>
            <p className="text-sm text-green-600 mt-1">+18% vs 上月</p>
          </div>
        </div>
      </div>

      {/* 关键洞察 */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">关键洞察与建议</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestInsights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              insight.priority === 'high' ? 'border-red-500 bg-red-50' :
              insight.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
              'border-blue-500 bg-blue-50'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {insight.type === 'trend' && <TrendingUp className="h-5 w-5 text-green-600" />}
                {insight.type === 'warning' && <MessageCircle className="h-5 w-5 text-orange-600" />}
                {insight.type === 'opportunity' && <Target className="h-5 w-5 text-blue-600" />}
                <h3 className="font-semibold text-gray-900">{insight.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                {insight.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;