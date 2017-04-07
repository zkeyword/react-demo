# react手脚架

> 相关技术栈

- react
- redux
- stylus
- eslint

## 目录结构

    / 根目录
    |__ build webpack配置
    |__ config 环境配置
    |__ dist 生成结果
    |__ src 源文件
    |   |__ assets 静态目录
    |   |__ components 公用组件
    |   |__ redux redux状态管理
    |   |__ routers 路由管理
    |   |__ services 接口管理
    |   |__ utils 工具类
    |   |__ views 页面路径
    |   |__ app.jsx jsx入口
    |   |__ main.js 主文文件
    |__ index.html 应用入口文件
    |__ package.json npm依赖管理

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
