const tools = {}

// 判断当前是否是根目录
tools.isRootRouter = (routeStr) => {

  // 登录、我的、首页
  const atLogin = routeStr.indexOf("#/login") > -1
  const atMine = routeStr.indexOf("#/my") > -1
  const atHome = routeStr.indexOf("#/home") > -1
  
  return atLogin || atMine || atHome
}

export default tools
