export const menus = [
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', },
    {
        key: '/app/usermanage', title: '用户管理', icon: 'user-delete',
        sub: [
            { key: '/app/usermanage/ManageUser', title: '用户清单管理 ', icon: '', },
            { key: '/app/usermanage/UserJrisdiction', title: '用户权限管理', icon: '', },
            { key: '/app/table/asynchronousTable', title: '异步表格', icon: '', },
        ],
    },
    {
        key: '/app/table', title: '用户管理', icon: 'copy',
        sub: [
            { key: '/app/table/basicTable', title: '用户清单管理 ', icon: '', },
            { key: '/app/table/advancedTable', title: '用户权限管理', icon: '', },
            { key: '/app/table/asynchronousTable', title: '异步表格', icon: '', },
        ],
    },
    {
      key: '/app/manage', title: '管理员管理 ', icon: 'user-delete',
    sub: [
        { key: '/app/manage/ManageTable', title: '管理员管理 ', icon: 'user-delete', },
        { key: '/app/table/ManageTable', title: '管理员管理 ', icon: '', },
        { key: '/app/table/ManageTable', title: '管理员管理 ', icon: '', },
    ],
  },{
    key: '/app/addelete', title: '管理员管理1 ', icon: 'user-delete',
  sub: [
      { key: '/app/addelete/ExampleTable', title: '管理员管理11', icon: 'user-delete', },
      { key: '/app/table/EditableTable', title: '管理员管理2', icon: '', },
      { key: '/app/table/ManageTable', title: '管理员管理 ', icon: '', },
  ],
},
  {
    key: '/app/announcement', title: '公告管理 ', icon: 'user-delete',
  sub: [

      { key: '/app/announcement/anouncenow', title: '当前公告', icon: '', },
        { key: '/app/announcement/history', title: '历史公告 ', icon: 'user-delete', },
  ],
},
    {
        key: '/app/ui', title: '座位预约管理', icon: 'scan',
        sub: [
            { key: '/app/ui/Rules', title: '预约规则'},
            { key: '/app/ui/RuleSetone', title: '预约设置1', icon: '', },
            { key: '/app/ui/RuleSettwo', title: '预约设置2', icon: '', },
            { key: '/app/ui/RuleSethree', title: '预约设置3', icon: '', },
            { key: '/app/ui/drags', title: '拖拽', icon: '', },
            { key: '/app/ui/buttons', title: '按钮', icon: '', },
            { key: '/app/ui/icons', title: '图标', icon: '', },
            { key: '/app/ui/spins', title: '加载中', icon: '', },
            { key: '/app/ui/modals', title: '对话框', icon: '', },
            { key: '/app/ui/notifications', title: '通知提醒框', icon: '', },
            { key: '/app/ui/tabs', title: '标签页', icon: '', },
            { key: '/app/ui/banners', title: '轮播图', icon: '', },
            { key: '/app/ui/wysiwyg', title: '富文本', icon: '', },
            { key: '/app/ui/gallery', title: '画廊', icon: '', },
            { key: '/app/ui/map', title: '地图'},
        ],
    },
    {
        key: '/app/animation', title: '动画', icon: 'rocket',
        sub: [
            { key: '/app/animation/basicAnimations', title: '基础动画', icon: '', },
            { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
        ],
    },

    {
        key: '/app/form', title: '表单', icon: 'edit',
        sub: [
            { key: '/app/form/basicForm', title: '基础表单', icon: '', },
        ],
    },
    {
        key: '/app/chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: '/app/chart/echarts', title: 'echarts', icon: '', },
            { key: '/app/chart/recharts', title: 'recharts', icon: '', },
        ],
    },
    {
        key: '/sub4', title: '页面', icon: 'switcher',
        sub: [
            { key: '/login', title: '登录', icon: '', },
            { key: '/404', title: '404', icon: '', },
        ],
    },
    {
        key: '/app/auth', title: '权限管理', icon: 'safety',
        sub: [
            { key: '/app/auth/basic', title: '基础演示', icon: '', },
            { key: '/app/auth/routerEnter', title: '路由拦截', icon: '', },
        ],
    },
    {
        key: '/app/cssModule', title: 'cssModule', icon: 'star',
    },
];
