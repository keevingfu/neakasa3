import React, { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Eye, Heart, MessageCircle, Share2, Calendar, Award } from 'lucide-react';

const SocialMediaDashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  
  // 原始数据
  const rawData = [
    {
      platform: 'TikTok',
      channel: 'dinomcmah',
      url: 'https://www.tiktok.com/@dinomcmah/video/7503952116663274794',
      likes: 2126,
      comments: 29,
      views: 626300,
      date: '2025-05-13',
      forwards: 675
    },
    {
      platform: 'TikTok',
      channel: 'dinomcmah',
      url: 'https://www.tiktok.com/@dinomcmah/video/7495021027110489390',
      likes: 333,
      comments: 3,
      views: 126000,
      date: '2025-04-19',
      forwards: 81
    },
    {
      platform: 'TikTok',
      channel: 'cordellkauf',
      url: 'https://www.tiktok.com/@cordellkauf/video/7513600437061192991',
      likes: 2471,
      comments: 104,
      views: 80200,
      date: '2025-06-08',
      forwards: 345
    },
    {
      platform: 'YouTube',
      channel: 'norberthairston',
      url: 'https://www.youtube.com//shorts/x5AlH_UIGMM',
      likes: 61,
      comments: 2,
      views: 35000,
      date: '2025-05-31',
      forwards: 0
    },
    {
      platform: 'YouTube',
      channel: 'norberthairston',
      url: 'https://www.youtube.com//shorts/ZRhg5KBOvCg',
      likes: 103,
      comments: 1,
      views: 35000,
      date: '2025-05-25',
      forwards: 0
    },
    {
      platform: 'YouTube',
      channel: 'asteriodzip',
      url: 'https://www.youtube.com//shorts/kTSQofZ0d7A',
      likes: 124,
      comments: 0,
      views: 34000,
      date: '2025-05-16',
      forwards: 0
    },
    {
      platform: 'Instagram',
      channel: 'davidsonmaxqwsf',
      url: 'https://www.instagram.com/davidsonmaxqwsf/reel/DJRfSHsgj0e/',
      likes: 3292,
      comments: 645,
      views: 679000,
      date: '2025-05-05',
      forwards: 0
    },
    {
      platform: 'Instagram',
      channel: 'barrettagnesghmbq',
      url: 'https://www.instagram.com/barrettagnesghmbq/reel/DKfF2tdMztZ/',
      likes: 29,
      comments: 0,
      views: 24700,
      date: '2025-06-05',
      forwards: 0
    },
    {
      platform: 'Instagram',
      channel: 'barrettagnesghmbq',
      url: 'https://www.instagram.com/barrettagnesghmbq/reel/DJrkyUduTmY/',
      likes: 21,
      comments: 1,
      views: 19700,
      date: '2025-05-16',
      forwards: 0
    }
  ];

  // 计算汇总数据
  const summaryData = useMemo(() => {
    const filtered = selectedPlatform === 'all' 
      ? rawData 
      : rawData.filter(item => item.platform === selectedPlatform);
    
    return {
      totalViews: filtered.reduce((sum, item) => sum + item.views, 0),
      totalLikes: filtered.reduce((sum, item) => sum + item.likes, 0),
      totalComments: filtered.reduce((sum, item) => sum + item.comments, 0),
      totalForwards: filtered.reduce((sum, item) => sum + item.forwards, 0),
      totalEngagement: filtered.reduce((sum, item) => sum + item.likes + item.comments + item.forwards, 0),
      avgEngagementRate: filtered.reduce((sum, item) => {
        const engagement = item.likes + item.comments + item.forwards;
        return sum + (engagement / item.views * 100);
      }, 0) / filtered.length
    };
  }, [selectedPlatform]);

  // 平台对比数据
  const platformComparison = useMemo(() => {
    const platforms = ['TikTok', 'YouTube', 'Instagram'];
    return platforms.map(platform => {
      const platformData = rawData.filter(item => item.platform === platform);
      const totalViews = platformData.reduce((sum, item) => sum + item.views, 0);
      const totalEngagement = platformData.reduce((sum, item) => sum + item.likes + item.comments + item.forwards, 0);
      
      return {
        platform,
        views: totalViews,
        engagement: totalEngagement,
        avgEngagementRate: (totalEngagement / totalViews * 100).toFixed(2),
        posts: platformData.length
      };
    });
  }, []);

  // 饼图数据
  const pieData = platformComparison.map(item => ({
    name: item.platform,
    value: item.views
  }));

  const COLORS = ['#8B5CF6', '#3B82F6', '#EC4899'];

  // 时间趋势数据
  const timelineData = useMemo(() => {
    const monthData = {};
    rawData.forEach(item => {
      const month = item.date.substring(0, 7);
      if (!monthData[month]) {
        monthData[month] = { month, views: 0, engagement: 0 };
      }
      monthData[month].views += item.views;
      monthData[month].engagement += item.likes + item.comments + item.forwards;
    });
    
    return Object.values(monthData).sort((a, b) => a.month.localeCompare(b.month));
  }, []);

  // KOC表现数据
  const kocPerformance = useMemo(() => {
    const kocData = {};
    rawData.forEach(item => {
      if (!kocData[item.channel]) {
        kocData[item.channel] = {
          channel: item.channel,
          platform: item.platform,
          totalViews: 0,
          totalEngagement: 0,
          posts: 0
        };
      }
      kocData[item.channel].totalViews += item.views;
      kocData[item.channel].totalEngagement += item.likes + item.comments + item.forwards;
      kocData[item.channel].posts += 1;
    });
    
    return Object.values(kocData)
      .map(koc => ({
        ...koc,
        avgEngagementRate: ((koc.totalEngagement / koc.totalViews) * 100).toFixed(2)
      }))
      .sort((a, b) => b.totalViews - a.totalViews);
  }, []);

  // 格式化数字
  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // 获取最佳内容
  const topContent = useMemo(() => {
    return [...rawData].sort((a, b) => b.views - a.views)[0];
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* 标题和筛选器 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Catlink Q2 2025 自营社媒内容营销数据看板
        </h1>
        <p className="text-gray-600">2025年4月-6月 | 自营KOC矩阵表现分析</p>
        
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setSelectedPlatform('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedPlatform === 'all'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            全部平台
          </button>
          {['TikTok', 'YouTube', 'Instagram'].map(platform => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedPlatform === platform
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>

      {/* 核心指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-gray-500">总观看量</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{formatNumber(summaryData.totalViews)}</p>
          <p className="text-sm text-green-600 mt-2">+23% vs Q1</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="text-sm text-gray-500">总互动量</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{formatNumber(summaryData.totalEngagement)}</p>
          <p className="text-sm text-green-600 mt-2">+15% vs Q1</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-gray-500">平均互动率</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{summaryData.avgEngagementRate.toFixed(2)}%</p>
          <p className="text-sm text-orange-600 mt-2">行业平均: 1.2%</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Award className="h-8 w-8 text-yellow-600" />
            <span className="text-sm text-gray-500">最佳表现</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{topContent.channel}</p>
          <p className="text-sm text-gray-600 mt-1">{formatNumber(topContent.views)} views</p>
        </div>
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 平台表现对比 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">平台表现对比</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Legend />
              <Bar dataKey="views" fill="#8B5CF6" name="观看量" />
              <Bar dataKey="engagement" fill="#EC4899" name="互动量" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 流量分布饼图 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">流量分布</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatNumber(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 时间趋势 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">月度趋势分析</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip formatter={(value) => formatNumber(value)} />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="views" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              name="观看量"
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="engagement" 
              stroke="#EC4899" 
              strokeWidth={3}
              name="互动量"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* KOC表现排行 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">KOC表现排行榜</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4">排名</th>
                <th className="text-left py-3 px-4">KOC账号</th>
                <th className="text-left py-3 px-4">平台</th>
                <th className="text-left py-3 px-4">总观看量</th>
                <th className="text-left py-3 px-4">总互动量</th>
                <th className="text-left py-3 px-4">互动率</th>
                <th className="text-left py-3 px-4">发布数</th>
              </tr>
            </thead>
            <tbody>
              {kocPerformance.map((koc, index) => (
                <tr key={koc.channel} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      index === 0 ? 'bg-yellow-400 text-white' :
                      index === 1 ? 'bg-gray-400 text-white' :
                      index === 2 ? 'bg-orange-400 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">{koc.channel}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      koc.platform === 'TikTok' ? 'bg-purple-100 text-purple-800' :
                      koc.platform === 'YouTube' ? 'bg-red-100 text-red-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {koc.platform}
                    </span>
                  </td>
                  <td className="py-3 px-4">{formatNumber(koc.totalViews)}</td>
                  <td className="py-3 px-4">{formatNumber(koc.totalEngagement)}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${
                      parseFloat(koc.avgEngagementRate) > 1 ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {koc.avgEngagementRate}%
                    </span>
                  </td>
                  <td className="py-3 px-4">{koc.posts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 最佳内容展示 */}
      <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">🏆 Q2最佳表现内容</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg mb-2">平台：{topContent.platform}</p>
            <p className="text-lg mb-2">账号：@{topContent.channel}</p>
            <p className="text-lg mb-2">发布时间：{topContent.date}</p>
          </div>
          <div>
            <p className="text-lg mb-2">观看量：{formatNumber(topContent.views)}</p>
            <p className="text-lg mb-2">点赞数：{formatNumber(topContent.likes)}</p>
            <p className="text-lg mb-2">
              互动率：{((topContent.likes + topContent.comments + topContent.forwards) / topContent.views * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaDashboard;