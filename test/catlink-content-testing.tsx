import React, { useState } from 'react';
import { 
  TestTube,
  Lightbulb,
  Play,
  BarChart3,
  Sparkles,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Video,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Plus,
  Filter,
  Download,
  Calendar,
  Zap,
  Youtube,
  Instagram,
  Music,
  Trophy,
  Flag,
  Activity,
  FileText,
  Settings,
  RefreshCw
} from 'lucide-react';

const ContentTesting = () => {
  const [activeModule, setActiveModule] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // 测试想法数据
  const testIdeas = [
    {
      id: 1,
      title: '多猫家庭痛点视频系列',
      hypothesis: '展示多猫使用场景能提升30%的互动率',
      kpi: { metric: '互动率', target: '+30%', baseline: '2.5%' },
      platforms: ['TikTok', 'Instagram'],
      status: 'approved',
      priority: 'high',
      createdDate: '2025-06-28'
    },
    {
      id: 2,
      title: '30秒快速清洁演示',
      hypothesis: '简短的清洁演示视频能提高购买意向',
      kpi: { metric: '转化率', target: '+25%', baseline: '3.2%' },
      platforms: ['TikTok'],
      status: 'in-review',
      priority: 'medium',
      createdDate: '2025-06-25'
    },
    {
      id: 3,
      title: 'KOL开箱体验对比',
      hypothesis: 'KOL开箱视频比产品展示视频效果好50%',
      kpi: { metric: '观看完成率', target: '+50%', baseline: '45%' },
      platforms: ['YouTube'],
      status: 'draft',
      priority: 'high',
      createdDate: '2025-06-20'
    },
    {
      id: 4,
      title: 'UGC内容征集活动',
      hypothesis: '用户生成内容能带来更高的信任度',
      kpi: { metric: '分享率', target: '+40%', baseline: '1.8%' },
      platforms: ['Instagram', 'TikTok'],
      status: 'approved',
      priority: 'medium',
      createdDate: '2025-06-18'
    },
    {
      id: 5,
      title: '产品使用教程系列',
      hypothesis: '详细教程能减少售后咨询并提升满意度',
      kpi: { metric: '满意度评分', target: '4.5+', baseline: '4.0' },
      platforms: ['YouTube', 'Instagram'],
      status: 'draft',
      priority: 'low',
      createdDate: '2025-06-15'
    }
  ];

  // 执行中的测试
  const activeTests = [
    {
      id: 1,
      ideaId: 1,
      title: '多猫家庭痛点视频系列',
      platform: 'TikTok',
      variants: [
        { 
          name: 'A版本-幽默风格', 
          posts: 3, 
          views: 125000, 
          engagement: 4.2,
          status: 'running'
        },
        { 
          name: 'B版本-专业风格', 
          posts: 3, 
          views: 98000, 
          engagement: 3.1,
          status: 'running'
        }
      ],
      progress: 65,
      startDate: '2025-06-15',
      endDate: '2025-07-15',
      dataCollected: {
        views: 223000,
        likes: 8900,
        comments: 456,
        shares: 234
      }
    },
    {
      id: 2,
      ideaId: 4,
      title: 'UGC内容征集活动',
      platform: 'Instagram',
      variants: [
        { 
          name: '奖品激励版', 
          posts: 5, 
          views: 89000, 
          engagement: 5.8,
          status: 'running'
        },
        { 
          name: '情感激励版', 
          posts: 5, 
          views: 76000, 
          engagement: 6.2,
          status: 'running'
        }
      ],
      progress: 40,
      startDate: '2025-06-20',
      endDate: '2025-07-20',
      dataCollected: {
        views: 165000,
        likes: 9600,
        comments: 890,
        shares: 456
      }
    },
    {
      id: 3,
      ideaId: 3,
      title: 'KOL开箱体验对比',
      platform: 'YouTube',
      variants: [
        { 
          name: '专业评测版', 
          posts: 2, 
          views: 45000, 
          engagement: 2.8,
          status: 'running'
        },
        { 
          name: '生活分享版', 
          posts: 2, 
          views: 52000, 
          engagement: 3.4,
          status: 'running'
        }
      ],
      progress: 25,
      startDate: '2025-06-25',
      endDate: '2025-07-25',
      dataCollected: {
        views: 97000,
        likes: 2900,
        comments: 234,
        shares: 89
      }
    }
  ];

  // 已完成测试的效果数据
  const completedTests = [
    {
      id: 1,
      title: '产品功能对比视频',
      platform: 'TikTok',
      winner: 'B版本',
      improvement: 45,
      confidence: 98,
      keyFindings: [
        '简洁的对比表格提升45%互动率',
        '15秒内完成核心信息传达效果最佳',
        '使用动画效果增加25%完播率'
      ],
      metrics: {
        views: { a: 156000, b: 234000 },
        engagement: { a: 3.2, b: 4.6 },
        conversion: { a: 2.1, b: 3.1 }
      }
    },
    {
      id: 2,
      title: '用户见证视频',
      platform: 'Instagram',
      winner: 'A版本',
      improvement: 32,
      confidence: 95,
      keyFindings: [
        '真实用户故事提升32%信任度',
        '3-5只猫的场景最受欢迎',
        '配音讲解比字幕效果好28%'
      ],
      metrics: {
        views: { a: 189000, b: 145000 },
        engagement: { a: 5.8, b: 4.4 },
        conversion: { a: 3.8, b: 2.9 }
      }
    }
  ];

  // 优化建议数据
  const refinementSuggestions = [
    {
      category: '内容形式',
      suggestions: [
        {
          title: '短视频优先策略',
          impact: 'high',
          description: '15-30秒视频获得最高完播率和互动率',
          improvement: '+52%',
          platforms: ['TikTok', 'Instagram']
        },
        {
          title: '系列化内容',
          impact: 'high',
          description: '连续剧式内容提升用户粘性',
          improvement: '+38%',
          platforms: ['YouTube', 'TikTok']
        }
      ]
    },
    {
      category: '创意元素',
      suggestions: [
        {
          title: '多猫场景展示',
          impact: 'high',
          description: '3只以上猫咪的使用场景最受欢迎',
          improvement: '+45%',
          platforms: ['All']
        },
        {
          title: '幽默元素加入',
          impact: 'medium',
          description: '适度幽默提升分享率',
          improvement: '+28%',
          platforms: ['TikTok']
        }
      ]
    },
    {
      category: '发布策略',
      suggestions: [
        {
          title: '最佳发布时间',
          impact: 'medium',
          description: '晚8-10点发布效果最佳',
          improvement: '+22%',
          platforms: ['All']
        },
        {
          title: '频率优化',
          impact: 'medium',
          description: '每周3-4条内容最优',
          improvement: '+18%',
          platforms: ['Instagram', 'TikTok']
        }
      ]
    }
  ];

  const modules = [
    { id: 'overview', name: '总览', icon: TestTube },
    { id: 'ideation', name: '创意构思', icon: Lightbulb },
    { id: 'execution', name: '执行管理', icon: Play },
    { id: 'performance', name: '效果分析', icon: BarChart3 },
    { id: 'refinement', name: '优化建议', icon: Sparkles }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            <span className="text-sm text-gray-600">本月</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{testIdeas.length}</p>
          <p className="text-sm text-gray-600 mt-1">测试想法</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Play className="h-8 w-8 text-green-600" />
            <span className="text-sm text-gray-600">进行中</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{activeTests.length}</p>
          <p className="text-sm text-gray-600 mt-1">执行测试</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <Trophy className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="h-4 w-4" />
              15%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">89%</p>
          <p className="text-sm text-gray-600 mt-1">测试成功率</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-gray-600">平均</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">+38%</p>
          <p className="text-sm text-gray-600 mt-1">性能提升</p>
        </div>
      </div>

      {/* 测试进度概览 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">活跃测试进度</h3>
        <div className="space-y-4">
          {activeTests.map(test => (
            <div key={test.id} className="border-b pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    test.platform === 'TikTok' ? 'bg-purple-100' :
                    test.platform === 'Instagram' ? 'bg-pink-100' : 'bg-red-100'
                  }`}>
                    {test.platform === 'TikTok' && <Music className="h-5 w-5 text-purple-600" />}
                    {test.platform === 'Instagram' && <Instagram className="h-5 w-5 text-pink-600" />}
                    {test.platform === 'YouTube' && <Youtube className="h-5 w-5 text-red-600" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{test.title}</p>
                    <p className="text-sm text-gray-600">{test.startDate} - {test.endDate}</p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-900">{test.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${test.progress}%` }}
                />
              </div>
              <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
                <span>浏览: {formatNumber(test.dataCollected.views)}</span>
                <span>互动: {formatNumber(test.dataCollected.likes + test.dataCollected.comments)}</span>
                <span>分享: {formatNumber(test.dataCollected.shares)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最近完成的测试 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {completedTests.map(test => (
          <div key={test.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">{test.title}</h4>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                完成
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">获胜版本</span>
                <span className="font-semibold text-gray-900">{test.winner}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-gray-600">性能提升</span>
                <span className="font-semibold text-green-600">+{test.improvement}%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-600">置信度</span>
                <span className="font-semibold text-purple-600">{test.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIdeation = () => (
    <div className="space-y-6">
      {/* 创建新想法按钮 */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">测试想法库</h3>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          创建新想法
        </button>
      </div>

      {/* 想法列表 */}
      <div className="space-y-4">
        {testIdeas.map(idea => (
          <div key={idea.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{idea.title}</h4>
                <p className="text-gray-600 mt-1">{idea.hypothesis}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  idea.priority === 'high' ? 'bg-red-100 text-red-700' :
                  idea.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {idea.priority === 'high' ? '高优先级' : 
                   idea.priority === 'medium' ? '中优先级' : '低优先级'}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  idea.status === 'approved' ? 'bg-green-100 text-green-700' :
                  idea.status === 'in-review' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {idea.status === 'approved' ? '已批准' : 
                   idea.status === 'in-review' ? '审核中' : '草稿'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">KPI指标</p>
                <p className="font-semibold text-gray-900">{idea.kpi.metric}</p>
                <p className="text-sm text-purple-600">{idea.kpi.target} (基准: {idea.kpi.baseline})</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">测试平台</p>
                <div className="flex gap-2 mt-1">
                  {idea.platforms.map(platform => (
                    <span key={platform} className="text-xs bg-white px-2 py-1 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">创建日期</p>
                <p className="font-semibold text-gray-900">{idea.createdDate}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-3 py-1 text-gray-600 hover:text-gray-700 text-sm font-medium">
                编辑
              </button>
              <button className="px-3 py-1 text-purple-600 hover:text-purple-700 text-sm font-medium">
                开始测试
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExecution = () => (
    <div className="space-y-6">
      {/* 执行状态概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <Activity className="h-6 w-6 text-green-600" />
            <span className="text-sm font-medium text-green-600">运行中</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{activeTests.length}</p>
          <p className="text-sm text-gray-600">活跃测试</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <Eye className="h-6 w-6 text-blue-600" />
            <span className="text-sm text-gray-600">总计</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(485000)}</p>
          <p className="text-sm text-gray-600">测试浏览量</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <Clock className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-gray-600">平均</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">14天</p>
          <p className="text-sm text-gray-600">测试周期</p>
        </div>
      </div>

      {/* 执行中的测试详情 */}
      <div className="space-y-6">
        {activeTests.map(test => (
          <div key={test.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  test.platform === 'TikTok' ? 'bg-purple-100' :
                  test.platform === 'Instagram' ? 'bg-pink-100' : 'bg-red-100'
                }`}>
                  {test.platform === 'TikTok' && <Music className="h-5 w-5 text-purple-600" />}
                  {test.platform === 'Instagram' && <Instagram className="h-5 w-5 text-pink-600" />}
                  {test.platform === 'YouTube' && <Youtube className="h-5 w-5 text-red-600" />}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{test.title}</h4>
                  <p className="text-sm text-gray-600">{test.startDate} - {test.endDate}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">{test.progress}%</p>
                <p className="text-sm text-gray-600">完成度</p>
              </div>
            </div>

            {/* 变体对比 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {test.variants.map((variant, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-medium text-gray-900">{variant.name}</h5>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                      {variant.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">发布数</span>
                      <span className="font-medium">{variant.posts}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">浏览量</span>
                      <span className="font-medium">{formatNumber(variant.views)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">互动率</span>
                      <span className="font-medium text-purple-600">{variant.engagement}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 数据收集进度 */}
            <div className="border-t pt-4">
              <h5 className="font-medium text-gray-900 mb-3">数据收集进度</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Eye className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-sm text-gray-600">浏览</p>
                  <p className="font-semibold">{formatNumber(test.dataCollected.views)}</p>
                </div>
                <div className="text-center">
                  <Heart className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-sm text-gray-600">点赞</p>
                  <p className="font-semibold">{formatNumber(test.dataCollected.likes)}</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-sm text-gray-600">评论</p>
                  <p className="font-semibold">{formatNumber(test.dataCollected.comments)}</p>
                </div>
                <div className="text-center">
                  <Share2 className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-sm text-gray-600">分享</p>
                  <p className="font-semibold">{formatNumber(test.dataCollected.shares)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      {/* 测试结果对比 */}
      <div className="space-y-6">
        {completedTests.map(test => (
          <div key={test.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{test.title}</h3>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  获胜: {test.winner}
                </span>
                <span className="text-sm text-gray-600">置信度: {test.confidence}%</span>
              </div>
            </div>

            {/* 指标对比 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">浏览量对比</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">A版本</span>
                    <span className="font-medium">{formatNumber(test.metrics.views.a)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full"
                      style={{ width: `${(test.metrics.views.a / (test.metrics.views.a + test.metrics.views.b)) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">B版本</span>
                    <span className="font-medium text-green-600">{formatNumber(test.metrics.views.b)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(test.metrics.views.b / (test.metrics.views.a + test.metrics.views.b)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">互动率对比</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">A版本</span>
                    <span className="font-medium">{test.metrics.engagement.a}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full"
                      style={{ width: `${(test.metrics.engagement.a / 10) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">B版本</span>
                    <span className="font-medium text-green-600">{test.metrics.engagement.b}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(test.metrics.engagement.b / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">转化率对比</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">A版本</span>
                    <span className="font-medium">{test.metrics.conversion.a}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full"
                      style={{ width: `${(test.metrics.conversion.a / 5) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">B版本</span>
                    <span className="font-medium text-green-600">{test.metrics.conversion.b}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(test.metrics.conversion.b / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 关键发现 */}
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-3">关键发现</h4>
              <div className="space-y-2">
                {test.keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <p className="text-sm text-gray-700">{finding}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold text-green-600">
                    +{test.improvement}% 性能提升
                  </span>
                </div>
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200">
                  应用到内容策略
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 统计显著性说明 */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">统计显著性说明</h4>
            <p className="text-sm text-gray-700">
              我们使用95%的置信区间来确定测试结果的统计显著性。当置信度达到95%以上时，
              表示我们有95%的把握认为观察到的差异不是由于随机因素造成的。
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRefinement = () => (
    <div className="space-y-6">
      {/* 优化建议分类 */}
      {refinementSuggestions.map((category, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.suggestions.map((suggestion, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    suggestion.impact === 'high' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {suggestion.impact === 'high' ? '高影响' : '中影响'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-green-600">{suggestion.improvement}</span>
                    <div className="flex gap-1">
                      {suggestion.platforms.map(platform => (
                        <span key={platform} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* 最佳实践总结 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">最佳实践总结</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Video className="h-5 w-5" />
              <h4 className="font-semibold">内容创作</h4>
            </div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• 15-30秒短视频效果最佳</li>
              <li>• 多猫场景提升45%互动</li>
              <li>• 开头3秒决定完播率</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5" />
              <h4 className="font-semibold">发布时机</h4>
            </div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• 晚8-10点发布最佳</li>
              <li>• 周末互动率高20%</li>
              <li>• 保持3-4条/周频率</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5" />
              <h4 className="font-semibold">优化方向</h4>
            </div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• A/B测试持续14天</li>
              <li>• 关注首周数据</li>
              <li>• 快速迭代优化</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 下一步行动 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">推荐下一步行动</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <Flag className="h-5 w-5 text-purple-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">将成功元素应用到KOL合作</p>
              <p className="text-sm text-gray-600">基于测试结果优化KOL创作指南</p>
            </div>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm font-medium">
              开始执行
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Zap className="h-5 w-5 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">更新广告素材库</p>
              <p className="text-sm text-gray-600">将高效素材加入广告投放库</p>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-medium">
              立即更新
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <RefreshCw className="h-5 w-5 text-green-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">启动新一轮测试</p>
              <p className="text-sm text-gray-600">基于发现设计新的测试方案</p>
            </div>
            <button className="px-3 py-1 bg-green-600 text-white rounded text-sm font-medium">
              创建测试
            </button>
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
            <h1 className="text-3xl font-bold text-gray-900">内容测试中心</h1>
            <p className="text-gray-600 mt-2">通过自营社媒矩阵测试，发现最优质的内容策略</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">全部平台</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
            </select>
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
        {activeModule === 'overview' && renderOverview()}
        {activeModule === 'ideation' && renderIdeation()}
        {activeModule === 'execution' && renderExecution()}
        {activeModule === 'performance' && renderPerformance()}
        {activeModule === 'refinement' && renderRefinement()}
      </div>
    </div>
  );
};

export default ContentTesting;