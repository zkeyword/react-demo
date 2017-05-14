# react手脚架

## 相关技术栈

- react
- redux
- stylus
- eslint
- webpack2
- antd

## 目录结构

    / 根目录
    |__ build                    # webpack配置
    |__ config                   # 环境配置
    |__ dist                     # 生成结果
    ├── src                      # 程序源文件
    │   ├── main.js              # 程序启动和渲染
    │   ├── components           # 全局可复用的表现组件(Presentational Components)
    │   ├── containers           # 全局可复用的容器组件
    │   ├── layouts              # 主页结构
    │   ├── static               # 静态文件(不要到处imported源文件)
    │   ├── styles               # 程序样式
    │   ├── store                # Redux指定块
    │   │   ├── createStore.js   # 创建和使用redux store
    │   │   └── reducers.js      # Reducer注册和注入
    │   └── routes               # 主路由和异步分割点
    │       ├── index.js         # 用store启动主程序路由
    │       └── Home             # 不规则路由
    │           ├── index.js     # 路由定义和代码异步分割
    │           ├── assets       # 组件引入的静态资源
    │           ├── components   # 直观React组件
    │           ├── container    # 连接actions和store
    │           └── modules      # reducers/constants/actions的集合
    ├── index.html               # 应用入口文件
    └──package.json              # npm依赖管理

## 使用

```bash
# 依赖安装
npm install

# 开发模式，默认端口：8080
npm run dev

# 打包
npm run build

# eslint检测
npm run lint
```

## 代码处理流程

main.js =>  router => views => redux

action => types => reducers => store => connect => views

组件 -->action--> thunk中间件-->ajax请求-->reducer-->store->组件
