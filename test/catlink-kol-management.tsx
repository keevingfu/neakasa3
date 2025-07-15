import React, { useState } from 'react';
import { 
  Users,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  DollarSign,
  Star,
  BarChart3,
  PieChart,
  Filter,
  Search,
  Download,
  Plus,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Globe,
  Youtube,
  Instagram,
  Music,
  ArrowUpRight,
  ArrowDownRight,
  Award,
  Target,
  ShoppingBag,
  Activity,
  UserCheck,
  MapPin,
  Mail,
  Phone,
  Link,
  Clock,
  AlertCircle,
  CheckCircle,
  Zap,
  Package,
  CreditCard,
  Edit,
  MoreVertical
} from 'lucide-react';

const KOLManagement = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedKOL, setSelectedKOL] = useState(null);

  // KOL Dashboard数据
  const dashboardData = {
    totalKOLs: 342,
    activeKOLs: 156,
    totalReach: 12500000,
    avgEngagement: 4.2,
    totalSales: 2850000,
    avgROI: 8.5,
    topKOLs: [
      {
        id: 1,
        name: 'Sarah Johnson',
        platform: 'YouTube',
        followers: 1200000,
        engagement: 5.8,
        posts: 12,
        sales: 450000,
        roi: 12.5,
        trend: 'up'
      },
      {
        id: 2,
        name: 'Mike Chen',
        platform: 'TikTok',
        followers: 850000,
        engagement: 8.2,
        posts: 24,
        sales: 380000,
        roi: 10.8,
        trend: 'up'
      },
      {
        id: 3,
        name: 'Emma Davis',
        platform: 'Instagram',
        followers: 650000,
        engagement: 6.5,
        posts: 18,
        sales: 320000,
        roi: 9.2,
        trend: 'stable'
      },
      {
        id: 4,
        name: 'Alex Thompson',
        platform: 'YouTube',
        followers: 520000,
        engagement: 4.8,
        posts: 8,
        sales: 280000,
        roi: 8.5,
        trend: 'down'
      },
      {
        id: 5,
        name: 'Lisa Wang',
        platform: 'Instagram',
        followers: 480000,
        engagement: 7.2,
        posts: 15,
        sales: 265000,
        roi: 7.8,
        trend: 'up'
      }
    ],
    monthlyTrend: [
      { month: '1月', reach: 8500000, engagement: 3.8, sales: 1850000 },
      { month: '2月', reach: 9200000, engagement: 4.0, sales: 2100000 },
      { month: '3月', reach: 10800000, engagement: 4.1, sales: 2350000 },
      { month: '4月', reach: 11500000, engagement: 4.3, sales: 2600000 },
      { month: '5月', reach: 12000000, engagement: 4.2, sales: 2750000 },
      { month: '6月', reach: 12500000, engagement: 4.2, sales: 2850000 }
    ]
  };

  // KOL列表数据
  const kolList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '👩',
      platform: 'YouTube',
      region: '北美',
      category: '宠物博主',
      followers: 1200000,
      engagement: 5.8,
      monthlyPosts: 4,
      totalPosts: 48,
      totalSales: 450000,
      avgOrderValue: 125,
      status: 'active',
      rating: 4.8,
      contractEnd: '2025-12-31'
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '👨',
      platform: 'TikTok',
      region: '亚太',
      category: '生活方式',
      followers: 850000,
      engagement: 8.2,
      monthlyPosts: 8,
      totalPosts: 96,
      totalSales: 380000,
      avgOrderValue: 98,
      status: 'active',
      rating: 4.9,
      contractEnd: '2025-10-15'
    },
    {
      id: 3,
      name: 'Emma Davis',
      avatar: '👩',
      platform: 'Instagram',
      region: '欧洲',
      category: '家居生活',
      followers: 650000,
      engagement: 6.5,
      monthlyPosts: 6,
      totalPosts: 72,
      totalSales: 320000,
      avgOrderValue: 115,
      status: 'active',
      rating: 4.7,
      contractEnd: '2025-09-30'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      avatar: '👨',
      platform: 'YouTube',
      region: '北美',
      category: '科技评测',
      followers: 520000,
      engagement: 4.8,
      monthlyPosts: 2,
      totalPosts: 24,
      totalSales: 280000,
      avgOrderValue: 156,
      status: 'paused',
      rating: 4.5,
      contractEnd: '2025-08-31'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      avatar: '👩',
      platform: 'Instagram',
      region: '亚太',
      category: '宠物博主',
      followers: 480000,
      engagement: 7.2,
      monthlyPosts: 5,
      totalPosts: 60,
      totalSales: 265000,
      avgOrderValue: 108,
      status: 'active',
      rating: 4.6,
      contractEnd: '2025-11-30'
    }
  ];

  // 触达分析数据
  const reachAnalysisData = {
    totalReach: 12500000,
    uniqueReach: 8900000,
    avgFrequency: 1.4,
    platformDistribution: [
      { platform: 'YouTube', reach: 5200000, percentage: 41.6 },
      { platform: 'Instagram', reach: 3800000, percentage: 30.4 },
      { platform: 'TikTok', reach: 3500000, percentage: 28.0 }
    ],
    regionDistribution: [
      { region: '北美', reach: 4500000, percentage: 36.0 },
      { region: '欧洲', reach: 3500000, percentage: 28.0 },
      { region: '亚太', reach: 3000000, percentage: 24.0 },
      { region: '其他', reach: 1500000, percentage: 12.0 }
    ],
    viralContent: [
      {
        title: 'Multi-cat solution review',
        kol: 'Sarah Johnson',
        views: 2500000,
        shares: 45000,
        viralScore: 95
      },
      {
        title: 'Smart features demonstration',
        kol: 'Mike Chen',
        views: 1800000,
        shares: 38000,
        viralScore: 88
      },
      {
        title: 'Unboxing & setup guide',
        kol: 'Emma Davis',
        views: 1200000,
        shares: 25000,
        viralScore: 82
      }
    ]
  };

  // 转化分析数据
  const conversionData = {
    totalOrders: 28500,
    totalRevenue: 2850000,
    avgOrderValue: 100,
    conversionRate: 3.8,
    conversionFunnel: [
      { stage: '曝光', value: 12500000, rate: 100 },
      { stage: '点击', value: 875000, rate: 7.0 },
      { stage: '访问产品页', value: 262500, rate: 2.1 },
      { stage: '加入购物车', value: 78750, rate: 0.63 },
      { stage: '完成购买', value: 28500, rate: 0.23 }
    ],
    topProducts: [
      { product: 'Catlink Scooper Pro', orders: 12500, revenue: 1250000 },
      { product: 'Catlink Pure', orders: 8900, revenue: 890000 },
      { product: 'Catlink Young', orders: 7100, revenue: 710000 }
    ],
    kolPerformance: [
      { kol: 'Sarah Johnson', orders: 3600, revenue: 450000, roi: 12.5 },
      { kol: 'Mike Chen', orders: 3880, revenue: 380000, roi: 10.8 },
      { kol: 'Emma Davis', orders: 2783, revenue: 320000, roi: 9.2 },
      { kol: 'Alex Thompson', orders: 1795, revenue: 280000, roi: 8.5 },
      { kol: 'Lisa Wang', orders: 2454, revenue: 265000, roi: 7.8 }
    ]
  };

  // 模拟的KOL详情数据
  const kolDetail = {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '👩',
    platform: 'YouTube',
    region: '北美',
    category: '宠物博主',
    followers: 1200000,
    engagement: 5.8,
    email: 'sarah.j@example.com',
    phone: '+1-xxx-xxx-xxxx',
    website: 'www.sarahpets.com',
    bio: '专注宠物生活方式内容创作，拥有5年以上经验，内容风格温馨有趣，深受观众喜爱。',
    tags: ['宠物', '生活方式', '产品评测', '教程'],
    performance: {
      totalPosts: 48,
      totalViews: 15600000,
      totalEngagement: 904800,
      totalSales: 450000,
      avgViewsPerPost: 325000,
      avgEngagementRate: 5.8,
      avgOrdersPerPost: 75
    },
    recentPosts: [
      {
        title: 'Catlink智能猫砂盆30天使用体验',
        date: '2025-06-28',
        views: 450000,
        engagement: 26100,
        orders: 120,
        revenue: 15000
      },
      {
        title: '多猫家庭的智能解决方案',
        date: '2025-06-15',
        views: 380000,
        engagement: 22040,
        orders: 95,
        revenue: 11875
      },
      {
        title: '开箱测评：Catlink新品首发',
        date: '2025-06-01',
        views: 520000,
        engagement: 30160,
        orders: 145,
        revenue: 18125
      }
    ],
    contractInfo: {
      startDate: '2025-01-01',
      endDate: '2025-12-31',
      monthlyPosts: 4,
      pricePerPost: 5000,
      bonusStructure: '基础费用 + 销售提成10%',
      exclusivity: '品类独家',
      paymentTerms: '月结30天'
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
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'overview', name: 'KOL Overview', icon: Users },
    { id: 'reach', name: '触达分析', icon: Eye },
    { id: 'conversion', name: '转化分析', icon: ShoppingBag },
    { id: 'detail', name: 'KOL详情', icon: UserCheck }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              12%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalKOLs}</p>
          <p className="text-sm text-gray-600 mt-1">合作KOL总数</p>
          <p className="text-xs text-gray-500 mt-2">{dashboardData.activeKOLs} 活跃</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              18%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(dashboardData.totalReach)}</p>
          <p className="text-sm text-gray-600 mt-1">总触达人数</p>
          <p className="text-xs text-gray-500 mt-2">平均互动率 {dashboardData.avgEngagement}%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-green-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              25%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(dashboardData.totalSales)}</p>
          <p className="text-sm text-gray-600 mt-1">总销售额</p>
          <p className="text-xs text-gray-500 mt-2">平均ROI {dashboardData.avgROI}x</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Award className="h-8 w-8 text-yellow-600" />
            <span className="text-sm text-gray-600">本月</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">85%</p>
          <p className="text-sm text-gray-600 mt-1">KOL满意度</p>
          <p className="text-xs text-gray-500 mt-2">续约率 92%</p>
        </div>
      </div>

      {/* TOP KOL排名 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">TOP KOL 排名</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-gray-600">排名</th>
                <th className="pb-3 text-sm font-medium text-gray-600">KOL</th>
                <th className="pb-3 text-sm font-medium text-gray-600">平台</th>
                <th className="pb-3 text-sm font-medium text-gray-600">粉丝数</th>
                <th className="pb-3 text-sm font-medium text-gray-600">互动率</th>
                <th className="pb-3 text-sm font-medium text-gray-600">本月发布</th>
                <th className="pb-3 text-sm font-medium text-gray-600">销售额</th>
                <th className="pb-3 text-sm font-medium text-gray-600">ROI</th>
                <th className="pb-3 text-sm font-medium text-gray-600">趋势</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.topKOLs.map((kol, index) => (
                <tr key={kol.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      index === 0 ? 'bg-yellow-400 text-white' :
                      index === 1 ? 'bg-gray-400 text-white' :
                      index === 2 ? 'bg-orange-400 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-3 font-medium text-gray-900">{kol.name}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      kol.platform === 'YouTube' ? 'bg-red-100 text-red-700' :
                      kol.platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {kol.platform === 'YouTube' && <Youtube className="h-3 w-3" />}
                      {kol.platform === 'Instagram' && <Instagram className="h-3 w-3" />}
                      {kol.platform === 'TikTok' && <Music className="h-3 w-3" />}
                      {kol.platform}
                    </span>
                  </td>
                  <td className="py-3">{formatNumber(kol.followers)}</td>
                  <td className="py-3">
                    <span className="font-semibold text-purple-600">{kol.engagement}%</span>
                  </td>
                  <td className="py-3">{kol.posts}</td>
                  <td className="py-3 font-semibold">{formatCurrency(kol.sales)}</td>
                  <td className="py-3">
                    <span className="font-semibold text-green-600">{kol.roi}x</span>
                  </td>
                  <td className="py-3">
                    <span className={`flex items-center ${
                      kol.trend === 'up' ? 'text-green-600' :
                      kol.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {kol.trend === 'up' && <ArrowUpRight className="h-4 w-4" />}
                      {kol.trend === 'down' && <ArrowDownRight className="h-4 w-4" />}
                      {kol.trend === 'stable' && <Activity className="h-4 w-4" />}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 趋势分析 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">月度趋势分析</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          {/* 这里应该是一个真实的图表组件 */}
          <p>触达人数、互动率、销售额趋势图</p>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* 筛选栏 */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索KOL名称..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">全部平台</option>
            <option value="youtube">YouTube</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
          </select>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">全部地区</option>
            <option value="north-america">北美</option>
            <option value="europe">欧洲</option>
            <option value="asia-pacific">亚太</option>
            <option value="others">其他</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            添加KOL
          </button>
        </div>
      </div>

      {/* KOL列表 */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left text-sm font-medium text-gray-600">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">KOL信息</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">平台</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">地区</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">粉丝数</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">互动率</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">月发布</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">总销售</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">评分</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">状态</th>
                <th className="p-4 text-left text-sm font-medium text-gray-600">操作</th>
              </tr>
            </thead>
            <tbody>
              {kolList.map(kol => (
                <tr key={kol.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                        {kol.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{kol.name}</p>
                        <p className="text-sm text-gray-600">{kol.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      kol.platform === 'YouTube' ? 'bg-red-100 text-red-700' :
                      kol.platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {kol.platform === 'YouTube' && <Youtube className="h-3 w-3" />}
                      {kol.platform === 'Instagram' && <Instagram className="h-3 w-3" />}
                      {kol.platform === 'TikTok' && <Music className="h-3 w-3" />}
                      {kol.platform}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <MapPin className="h-4 w-4" />
                      {kol.region}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{formatNumber(kol.followers)}</td>
                  <td className="p-4">
                    <span className="font-semibold text-purple-600">{kol.engagement}%</span>
                  </td>
                  <td className="p-4">{kol.monthlyPosts}</td>
                  <td className="p-4 font-semibold">{formatCurrency(kol.totalSales)}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{kol.rating}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      kol.status === 'active' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {kol.status === 'active' ? '活跃' : '暂停'}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => {
                        setSelectedKOL(kol);
                        setActiveModule('detail');
                      }}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      查看详情
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 分页 */}
        <div className="p-4 border-t flex items-center justify-between">
          <p className="text-sm text-gray-600">显示 1-5 条，共 342 条</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">68</button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReachAnalysis = () => (
    <div className="space-y-6">
      {/* 触达概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              22%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(reachAnalysisData.totalReach)}</p>
          <p className="text-sm text-gray-600 mt-1">总触达人数</p>
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">独立触达: {formatNumber(reachAnalysisData.uniqueReach)}</p>
            <p className="text-sm text-gray-600">平均频次: {reachAnalysisData.avgFrequency}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="font-semibold text-gray-900 mb-4">平台分布</h4>
          <div className="space-y-3">
            {reachAnalysisData.platformDistribution.map((platform, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{platform.platform}</span>
                  <span className="text-sm font-medium">{formatNumber(platform.reach)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      platform.platform === 'YouTube' ? 'bg-red-500' :
                      platform.platform === 'Instagram' ? 'bg-pink-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${platform.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="font-semibold text-gray-900 mb-4">地区分布</h4>
          <div className="space-y-3">
            {reachAnalysisData.regionDistribution.map((region, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {region.region}
                  </span>
                  <span className="text-sm font-medium">{region.percentage}%</span>
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

      {/* 病毒传播内容 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">病毒传播内容</h3>
        <div className="space-y-4">
          {reachAnalysisData.viralContent.map((content, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{content.title}</h4>
                <p className="text-sm text-gray-600 mt-1">by {content.kol}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">观看</p>
                  <p className="font-semibold">{formatNumber(content.views)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">分享</p>
                  <p className="font-semibold">{formatNumber(content.shares)}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 relative">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="32" cy="32" r="28" stroke="#8B5CF6" strokeWidth="8" fill="none"
                        strokeDasharray={`${2 * Math.PI * 28 * content.viralScore / 100} ${2 * Math.PI * 28}`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">{content.viralScore}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">病毒指数</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 传播效果分析 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">传播效果分析</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          {/* 这里应该是一个真实的图表组件 */}
          <p>传播路径和影响力分析图表</p>
        </div>
      </div>
    </div>
  );

  const renderConversionAnalysis = () => (
    <div className="space-y-6">
      {/* 转化概览 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Package className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              18%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(conversionData.totalOrders)}</p>
          <p className="text-sm text-gray-600 mt-1">总订单数</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-green-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              25%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(conversionData.totalRevenue)}</p>
          <p className="text-sm text-gray-600 mt-1">总收入</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-gray-600">平均</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${conversionData.avgOrderValue}</p>
          <p className="text-sm text-gray-600 mt-1">客单价</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-orange-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              0.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{conversionData.conversionRate}%</p>
          <p className="text-sm text-gray-600 mt-1">转化率</p>
        </div>
      </div>

      {/* 转化漏斗 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">转化漏斗分析</h3>
        <div className="space-y-4">
          {conversionData.conversionFunnel.map((stage, index) => (
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
              {index < conversionData.conversionFunnel.length - 1 && (
                <div className="text-center py-2">
                  <ArrowDownRight className="h-5 w-5 text-gray-400 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 产品表现和KOL表现 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">产品销售表现</h3>
          <div className="space-y-3">
            {conversionData.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{product.product}</p>
                  <p className="text-sm text-gray-600">{formatNumber(product.orders)} 订单</p>
                </div>
                <p className="font-semibold text-gray-900">{formatCurrency(product.revenue)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">KOL带货表现</h3>
          <div className="space-y-3">
            {conversionData.kolPerformance.map((kol, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{kol.kol}</p>
                  <p className="text-sm text-gray-600">{formatNumber(kol.orders)} 订单</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(kol.revenue)}</p>
                  <p className="text-sm text-green-600">ROI: {kol.roi}x</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderKOLDetail = () => (
    <div className="space-y-6">
      {/* KOL基本信息 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
              {kolDetail.avatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{kolDetail.name}</h2>
              <p className="text-gray-600">{kolDetail.category}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                  kolDetail.platform === 'YouTube' ? 'bg-red-100 text-red-700' :
                  kolDetail.platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {kolDetail.platform === 'YouTube' && <Youtube className="h-4 w-4" />}
                  {kolDetail.platform === 'Instagram' && <Instagram className="h-4 w-4" />}
                  {kolDetail.platform === 'TikTok' && <Music className="h-4 w-4" />}
                  {kolDetail.platform}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {kolDetail.region}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  {formatNumber(kolDetail.followers)} 粉丝
                </span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
            <Edit className="h-4 w-4" />
            编辑信息
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{kolDetail.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{kolDetail.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Link className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{kolDetail.website}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{kolDetail.bio}</p>

        <div className="flex flex-wrap gap-2">
          {kolDetail.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 表现数据 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-gray-600 mb-1">总发布数</p>
          <p className="text-2xl font-bold text-gray-900">{kolDetail.performance.totalPosts}</p>
          <p className="text-xs text-gray-500 mt-1">过去12个月</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-gray-600 mb-1">总观看量</p>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(kolDetail.performance.totalViews)}</p>
          <p className="text-xs text-gray-500 mt-1">平均 {formatNumber(kolDetail.performance.avgViewsPerPost)}/篇</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-gray-600 mb-1">总销售额</p>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(kolDetail.performance.totalSales)}</p>
          <p className="text-xs text-gray-500 mt-1">平均 {kolDetail.performance.avgOrdersPerPost} 单/篇</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-gray-600 mb-1">平均互动率</p>
          <p className="text-2xl font-bold text-gray-900">{kolDetail.performance.avgEngagementRate}%</p>
          <p className="text-xs text-gray-500 mt-1">行业平均 3.5%</p>
        </div>
      </div>

      {/* 最近发布 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最近发布内容</h3>
        <div className="space-y-4">
          {kolDetail.recentPosts.map((post, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{post.date}</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-gray-600">观看</p>
                  <p className="font-semibold">{formatNumber(post.views)}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">互动</p>
                  <p className="font-semibold">{formatNumber(post.engagement)}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">订单</p>
                  <p className="font-semibold">{post.orders}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">收入</p>
                  <p className="font-semibold">{formatCurrency(post.revenue)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 合作信息 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">合作信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">合同期限</p>
              <p className="font-medium text-gray-900">{kolDetail.contractInfo.startDate} - {kolDetail.contractInfo.endDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">月度发布要求</p>
              <p className="font-medium text-gray-900">{kolDetail.contractInfo.monthlyPosts} 篇</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">单篇价格</p>
              <p className="font-medium text-gray-900">{formatCurrency(kolDetail.contractInfo.pricePerPost)}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">奖金结构</p>
              <p className="font-medium text-gray-900">{kolDetail.contractInfo.bonusStructure}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">独家条款</p>
              <p className="font-medium text-gray-900">{kolDetail.contractInfo.exclusivity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">付款条款</p>
              <p className="font-medium text-gray-900">{kolDetail.contractInfo.paymentTerms}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            <span className="text-orange-600 font-medium">合同将于60天后到期</span>
          </div>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            续约谈判
          </button>
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
            <h1 className="text-3xl font-bold text-gray-900">KOL管理中心</h1>
            <p className="text-gray-600 mt-2">管理KOL合作，评估内容效果，优化ROI</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Calendar className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 text-gray-600" />
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
        {activeModule === 'dashboard' && renderDashboard()}
        {activeModule === 'overview' && renderOverview()}
        {activeModule === 'reach' && renderReachAnalysis()}
        {activeModule === 'conversion' && renderConversionAnalysis()}
        {activeModule === 'detail' && renderKOLDetail()}
      </div>
    </div>
  );
};

export default KOLManagement;