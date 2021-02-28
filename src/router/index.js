import Vue from 'vue'
import Router from 'vue-router'
const layout = () => import('@/components/layout')
// 登录页
const reload = () => import('@/components/reLoad')

const main = () => import('@/views/index')
const table = () => import('@/views/example/table/index')
const tree = () => import('@/views/example/tree')
const tableFirst = () => import('@/views/example/table/tableFirst')
const tableSecond = () => import('@/views/example/table/tableSecond')

const springboot_quickstart = () => import('@/views/springboot/springboot_quickstart')
const springboot_interview = () => import('@/views/springboot/springboot_interview')

const eureka = () => import('@/views/springcloud/eureka/eureka')
const eureka_tree = () => import('@/views/springcloud/eureka_tree')
const eureka_quickstart = () => import('@/views/springcloud/eureka/eureka_quickstart')
const eureka_interview = () => import('@/views/springcloud/eureka/eureka_interview')

const mysql_install = () => import('@/views/mysql/mysql_install')
const mysql_basis = () => import('@/views/mysql/mysql_basis')
const mysql_high = () => import('@/views/mysql/mysql_high')
const mysql_interview = () => import('@/views/mysql/mysql_interview')

const mybatis_quickstart = () => import('@/views/mybatis/mybatis_quickstart')
const mybatis_interview = () => import('@/views/mybatis/mybatis_interview')

const mongodb_quickstart = () => import('@/views/mongodb/mongodb_quickstart')
const mongodb_interview = () => import('@/views/mongodb/mongodb_interview')

const redis_quickstart = () => import('@/views/redis/redis_quickstart')
const redis_interview = () => import('@/views/redis/redis_interview')

const linux_quickstart = () => import('@/views/linux/linux_quickstart')
const linux_interview = () => import('@/views/linux/linux_interview')

const nginx_quickstart = () => import('@/views/nginx/nginx_quickstart')
const nginx_interview = () => import('@/views/nginx/nginx_interview')

const git_quickstart = () => import('@/views/git/git_quickstart')
const git_interview = () => import('@/views/git/git_interview')

const maven_quickstart = () => import('@/views/maven/maven_quickstart')
const maven_interview = () => import('@/views/maven/maven_interview')

const zookeeper_quickstart = () => import('@/views/zookeeper/zookeeper_quickstart')
const zookeeper_interview = () => import('@/views/zookeeper/zookeeper_interview')

const dubbo_quickstart = () => import('@/views/dubbo/dubbo_quickstart')
const dubbo_interview = () => import('@/views/dubbo/dubbo_interview')

const elasticsearch_quickstart = () => import('@/views/elasticsearch/elasticsearch_quickstart')
const elasticsearch_interview = () => import('@/views/elasticsearch/elasticsearch_interview')

const java_basis_quickstart = () => import('@/views/java_basis/java_basis_quickstart')
const java_basis_interview = () => import('@/views/java_basis/java_basis_interview')

const jvm_quickstart = () => import('@/views/jvm/jvm_quickstart')
const jvm_interview = () => import('@/views/jvm/jvm_interview')

const tomcat_quickstart = () => import('@/views/tomcat/tomcat_quickstart')
const tomcat_interview = () => import('@/views/tomcat/tomcat_interview')

Vue.use(Router)
// 固定的路由表
export const fixedRouter = [{
    path: '',
    component: reload,
    hidden: true
  },
  {
    path: '',
    component: layout, //整体页面的布局(包含左侧菜单跟主内容区域)
    children: [{
      path: 'main',
      component: main,
      meta: {
        title: '首页', //菜单名称
        roles: ['user', 'admin'], //当前菜单哪些角色可以看到
        icon: 'el-icon-info' //菜单左侧的icon图标
      }
    }]
  },
]
// 需要权限判断展示的路由
export const permissionRouter = [{
  path: "/example",
  component: layout,
  name: "Example",
  meta: {
    title: "案例",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [{
      path: "/example/table",
      name: "Table",
      component: table,
      meta: {
        title: "table案例",
        icon: "el-icon-goods",
        roles: ['admin']
      },
      // 三级菜单写法，对应demotable案例下边的两个菜单
      children: [{
          path: "table1",
          name: "Table1",
          component: tableFirst,
          meta: {
            title: "table1",
            icon: "el-icon-mobile-phone",
            roles: ['admin']

          }
        },
        {
          path: "table2",
          name: "Table2",
          component: tableSecond,
          meta: {
            title: "table2",
            icon: "el-icon-service",
            roles: ['admin']
          }
        }
      ]
    },
    {
      path: "tree",
      name: "Tree",
      component: tree,
      meta: {
        title: "树形菜单",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]

export const springboot_router = [{
  path: "/springboot",
  component: layout,
  name: "Springboot",
  meta: {
    title: "springboot",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [{
    path: "springboot_quickstart",
    name: "Springboot_quickstart",
    component: springboot_quickstart,
    meta: {
      title: "快速入门",
      icon: "el-icon-goods",
      roles: ['admin']
    }
  },
    {
      path: "springboot_interview",
      name: "Springboot_interview",
      component: springboot_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]

export const springcloud_router = [{
  path: "/springcloud",
  component: layout,
  name: "Springcloud",
  meta: {
    title: "springcloud",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
      {
      path: "/springcloud/eureka",
      name: "Eureka",
      component: eureka,
      meta: {
        title: "eureka",
        icon: "el-icon-goods",
        roles: ['admin']
      },
      // 三级菜单写法，对应demotable案例下边的两个菜单
      children: [
        {
          path: "eureka_quickstart",
          name: "Eureka_quickstart",
          component: eureka_quickstart,
          meta: {
            title: "快速入门",
            icon: "el-icon-mobile-phone",
            roles: ['admin']
          }
        },
        {
          path: "eureka_interview",
          name: "Eureka_interview",
          component: eureka_interview,
          meta: {
            title: "面试相关",
            icon: "el-icon-service",
            roles: ['admin']
          }
        }
      ]
    },
    {
      path: "eureka_tree",
      name: "Eureka_tree",
      component: eureka_tree,
      meta: {
        title: "eureka_tree",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]

export const mysql_router = [{
  path: "/mysql",
  component: layout,
  name: "Mysql",
  meta: {
    title: "mysql",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "mysql_install",
      name: "Mysql_install",
      component: mysql_install,
      meta: {
        title: "环境安装",
        icon: "el-icon-goods",
        roles: ['admin']
      }
    },
    {
      path: "mysql_basis",
      name: "Mysql_basis",
      component: mysql_basis,
      meta: {
        title: "mysql基础",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "mysql_high",
      name: "Mysql_high",
      component: mysql_high,
      meta: {
        title: "mysql高级",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "mysql_interview",
      name: "Mysql_interview",
      component: mysql_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const mybatis_router = [{
  path: "/mybatis",
  component: layout,
  name: "Mybatis",
  meta: {
    title: "mybatis",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "mybatis_quickstart",
      name: "Mybatis_quickstart",
      component: mybatis_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "mybatis_interview",
      name: "Mybatis_interview",
      component: mybatis_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]

export const mongodb_router = [{
  path: "/mongodb",
  component: layout,
  name: "Mongodb",
  meta: {
    title: "mongodb",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "mongodb_quickstart",
      name: "Mongodb_quickstart",
      component: mongodb_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "mongodb_interview",
      name: "mongodb_interview",
      component: mongodb_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const redis_router = [{
  path: "/redis",
  component: layout,
  name: "Redis",
  meta: {
    title: "redis",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "redis_quickstart",
      name: "Redis_quickstart",
      component: redis_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      },
    },
    {
      path: "redis_interview",
      name: "redis_interview",
      component: redis_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const linux_router = [{
  path: "/linux",
  component: layout,
  name: "Linux",
  meta: {
    title: "linux",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "linux_quickstart",
      name: "Linux_quickstart",
      component: linux_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "linux_interview",
      name: "linux_interview",
      component: linux_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const nginx_router = [{
  path: "/nginx",
  component: layout,
  name: "Nginx",
  meta: {
    title: "nginx",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "nginx_quickstart",
      name: "Nginx_quickstart",
      component: nginx_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "nginx_interview",
      name: "nginx_interview",
      component: nginx_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const git_router = [{
  path: "/git",
  component: layout,
  name: "Git",
  meta: {
    title: "git",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "git_quickstart",
      name: "Git_quickstart",
      component: git_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "git_interview",
      name: "git_interview",
      component: git_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const maven_router = [{
  path: "/maven",
  component: layout,
  name: "Maven",
  meta: {
    title: "maven",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "maven_quickstart",
      name: "Maven_quickstart",
      component: maven_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "maven_interview",
      name: "maven_interview",
      component: maven_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const zookeeper_router = [{
  path: "/zookeeper",
  component: layout,
  name: "Zookeeper",
  meta: {
    title: "zookeeper",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "zookeeper_quickstart",
      name: "Zookeeper_quickstart",
      component: zookeeper_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "zookeeper_interview",
      name: "zookeeper_interview",
      component: zookeeper_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const dubbo_router = [{
  path: "/dubbo",
  component: layout,
  name: "Dubbo",
  meta: {
    title: "dubbo",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "dubbo_quickstart",
      name: "Dubbo_quickstart",
      component: dubbo_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "dubbo_interview",
      name: "dubbo_interview",
      component: dubbo_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const elasticsearch_router = [{
  path: "/elasticsearch",
  component: layout,
  name: "Elasticsearch",
  meta: {
    title: "elasticsearch",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "elasticsearch_quickstart",
      name: "Elasticsearch_quickstart",
      component: elasticsearch_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "elasticsearch_interview",
      name: "elasticsearch_interview",
      component: elasticsearch_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const java_basis_router = [{
  path: "/java_basis",
  component: layout,
  name: "Java_basis",
  meta: {
    title: "java_basis",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "java_basis_quickstart",
      name: "Java_basis_quickstart",
      component: java_basis_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "java_basis_interview",
      name: "java_basis_interview",
      component: java_basis_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const jvm_router = [{
  path: "/jvm",
  component: layout,
  name: "Jvm",
  meta: {
    title: "jvm",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "jvm_quickstart",
      name: "Jvm_quickstart",
      component: jvm_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "jvm_interview",
      name: "jvm_interview",
      component: jvm_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
export const tomcat_router = [{
  path: "/tomcat",
  component: layout,
  name: "Tomcat",
  meta: {
    title: "tomcat",
    icon: "el-icon-success",
    roles: ['admin', 'user']
  },
  children: [
    {
      path: "tomcat_quickstart",
      name: "Tomcat_quickstart",
      component: tomcat_quickstart,
      meta: {
        title: "快速入门",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    },
    {
      path: "tomcat_interview",
      name: "tomcat_interview",
      component: tomcat_interview,
      meta: {
        title: "面试相关",
        icon: "el-icon-upload",
        roles: ['user', 'admin']
      }
    }
  ]
}]
//springcloud_alibaba nacos sentinel seata
//mybatis
//mongodb
//redis
//linux
//nginx
//git
//maven
//zookeeper
//dubbo
//elasticsearch
//message rabbitMQ kafka rocketMQ activeMQ
//java_basis java基础
//jvm
//tomcat
export default new Router({
  routes: fixedRouter

})
