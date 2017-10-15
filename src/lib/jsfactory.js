export const routes = {
  '0': {
    text: '首页',
    icon: 'ios-home'
  },
  '1': {
    text: '会员管理',
    icon: 'person',
    '1': {
      text: '会员管理',
      menu: true
    },
    '2': {
      text: '会员办卡',
      menu: true
    },
    '3': {
      text: '会员充值',
      menu: true,
      '1': {
        text: '会员充值详情页'
      }
    },
    '4': {
      text: '会员充值历史',
      menu: true
    },
    '5': {
      text: '会员转移',
      menu: true
    },
    '6': {
      text: '领取普通福利',
      menu: true
    },
    '7': {
      text: '领取特价福利',
      menu: true
    },
    '8': {
      text: '会员消费历史',
      menu: true
    },
    '9': {
      text: '客户生日提醒',
      menu: true
    },
    '10': {
      text: '会员资料修改'
    },
    '11': {
      text: '购买福利'
    },
    '12': {
      text: '会员换卡'
    },
    '13': {
      text: '会员跟进'
    },
    '14': {
      text: '会员充值'
    }
  },
  '2': {
    text: '签约单',
    icon: 'compose',
    '1': {
      text: '签约单查询',
      menu: true
    },
    '2': {
      text: '签约单到期提醒',
      menu: true
    }
  },
  '3': {
    text: '市场营销',
    icon:'card',
    '1': {
      text: '活动管理',
      menu: true,
      '1': {
        text: '活动详情'
      },
      '2': {
        text: '活动邀约'
      }
    },
    '2': {
      text: '新增市场活动',
      menu: true
    }
  },
  '4': {
    text: '库存管理',
    icon: 'cloud',
    '1': {
      text: '入库管理',
      menu: true
    },
    '2': {
      text: '出库管理',
      menu: true
    },
    '3': {
      text: '库存盘点',
      menu: true
    },
    '4': {
      text: '盘点历史数据',
      menu: true
    },
    '5': {
      text: '商品库存查询',
      menu: true
    }
  },
  '5': {
    text: '报表统计',
    icon: 'stats-bars',
    '1': {
      text: '会员统计',
      menu: true
    },
    '2': {
      text: '签单统计',
      menu: true
    },
    '3': {
      text: '上报报表(行政)',
      menu: true
    },
    '4': {
      text: '签收报表(财务)',
      menu: true
    }
  },
  '6': {
    text: '系统管理',
    icon: 'ios-settings',
    '1': {
      text: '机构及人员管理',
      menu: true
    },
    '2': {
      text: '用户管理',
      menu: true
    },
    '3': {
      text: '资源管理',
      menu: true,
      '1': {
        text: '添加资源'
      }
    },
    '4': {
      text: '角色管理',
      menu: true,
      '1': {
        text: '添加角色'
      },
      '2': {
        text: '权限分配'
      }
    },
    '5': {
      text: '数据字典',
      menu: true
    },
    '6': {
      text: '用户登录日志',
      menu: true
    },
    '7': {
      text: '用户操作日志',
      menu: true
    }
  },
  '7': {
    text: '工具管理',
    icon: 'settings',
    '1': {
      text: '商品管理',
      menu: true
    },
    '2': {
      text: '系统消息',
      menu: true
    },
    '3': {
      text: '代办事项',
      menu: true
    }
  }
}

export const permissiontype = {
  '-1': {
    id: '-1',
    label: '超级用户'
  },
  '0': {
    id: '0',
    label: '普通用户'
  },
  '1': {
    id: '1',
    label: '同级用户'
  },
  '2': {
    id: '2',
    label: '同级下用户'
  },
  '3': {
    id: '3',
    label: '个人下用户'
  }
}
export const permissiontypeArr = [
  {
    id: '-1',
    label: '超级用户'
  }, {
    id: '0',
    label: '普通用户'
  }, {
    id: '1',
    label: '同级用户'
  }, {
    id: '2',
    label: '同级下用户'
  }, {
    id: '3',
    label: '个人下用户'
  }
]
