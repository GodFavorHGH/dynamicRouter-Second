// 取到需要权限判断的路由表
import {
  permissionRouter,
  fixedRouter ,
  springboot_router,
  springcloud_router,
  mysql_router,
  mybatis_router,
  mongodb_router,
  redis_router,
  linux_router,
  nginx_router,
  git_router,
  maven_router,
  zookeeper_router,
  dubbo_router,
  elasticsearch_router,
  java_basis_router,
  jvm_router,
  tomcat_router,
} from '@/router'
import router from '@/router'
var addRouFlag = false

router.beforeEach((to, from, next) => {
  // 取到用户的角色
  let GetRole = localStorage.getItem("userRole")

  // 如果登录了
  if (GetRole&&GetRole !== 'unload') {
    next() //next()方法后的代码也会执行
    // 1.如果路由表 没根据角色进行筛选,就筛选一次
    if (!addRouFlag) {
      addRouFlag = true
      // 2.根据用户的角色、和需要动态展示的路由，生成符合用户角色的路由
      // var getRoutes = baseRoleGetRouters(permissionRouter, GetRole.split(","))
      var springbootRouter = baseRoleGetRouters(springboot_router, GetRole.split(","))
      var springcloudRouter = baseRoleGetRouters(springcloud_router, GetRole.split(","))
      var mysqlRouter = baseRoleGetRouters(mysql_router, GetRole.split(","))
      var mybatisRouter = baseRoleGetRouters(mybatis_router, GetRole.split(","))
      var mongodbRouter = baseRoleGetRouters(mongodb_router, GetRole.split(","))
      var redisRouter = baseRoleGetRouters(redis_router, GetRole.split(","))
      var linuxRouter = baseRoleGetRouters(linux_router, GetRole.split(","))
      var nginxRouter = baseRoleGetRouters(nginx_router, GetRole.split(","))
      var gitRouter = baseRoleGetRouters(git_router, GetRole.split(","))
      var mavenRouter = baseRoleGetRouters(maven_router, GetRole.split(","))
      var zookeeperRouter = baseRoleGetRouters(zookeeper_router, GetRole.split(","))
      var dubboRouter = baseRoleGetRouters(dubbo_router, GetRole.split(","))
      var elasticsearchRouter = baseRoleGetRouters(elasticsearch_router, GetRole.split(","))
      var java_basisRouter = baseRoleGetRouters(java_basis_router, GetRole.split(","))
      var jvmRouter = baseRoleGetRouters(jvm_router, GetRole.split(","))
      var tomcatRouter = baseRoleGetRouters(tomcat_router, GetRole.split(","))
      // 3.利用global属性，让渲染菜单的组件sideMeuns.vue重新生成左侧菜单
      global.antRouter = fixedRouter.concat(/*getRoutes,*/
        springbootRouter,
        springcloudRouter,
        mysqlRouter,
        mybatisRouter,
        mongodbRouter,
        redisRouter,
        linuxRouter,
        nginxRouter,
        gitRouter,
        mavenRouter,
        zookeeperRouter,
        dubboRouter,
        elasticsearchRouter,
        java_basisRouter,
        jvmRouter,
        tomcatRouter,
      )
      // 4.将生成好的路由addRoutes
      router.addRoutes(fixedRouter.concat(/*getRoutes,*/
        springbootRouter,
        springcloud_router,
        mysql_router,
        mybatisRouter,
        mongodbRouter,
        redisRouter,
        linuxRouter,
        nginxRouter,
        gitRouter,
        mavenRouter,
        zookeeperRouter,
        dubboRouter,
        elasticsearchRouter,
        java_basisRouter,
        jvmRouter,
        tomcatRouter,
      ))
      // 5.push之后，会重新进入到beforeEach的钩子里,直接进入第一个if判断
      router.push({ path: to.path })
    }
  } else {
    // 用户没登录，跳转到登录页面
    if (to.path === '/') {
      next()
    } else {
      next('/')
    }
  }

})


function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}
// 根据用户的角色取到该用户对应的路由
function baseRoleGetRouters(allRoutes, roles) {
  // allRoutes是动态路由表
  // roles是取到的用户角色，数组
  let rightRoutes = allRoutes.filter((route, index) => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = baseRoleGetRouters(route.children, roles)
      }
      return true
    }
    return false
  })
  return rightRoutes
}
