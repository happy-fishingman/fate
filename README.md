# 项目介绍

本作品基于FATE开发了一款面向重复诊疗场景的个性化津贴给付型商业医疗保险定价系统，旨在降低个人医疗开销、减少医疗资源浪费、为保险业带来新的增长点。

# 项目亮点
- 该系统利用横向联邦学习在医院之间实现医疗信息共享，利用层次纵向联邦学习实现客户信息补充，有效解决了各机构间信息不对称问题，在保护隐私的前提下实现多机构间协作。
- 该系统提供了病情发展预测、检查可靠性分析、医疗欺诈风险评估，以及重复检查保险定价功能，实现了个人、医院和保险公司三方共赢。

# 项目安装

## 安装node.js
```bash
# 安装 nvm (Node 版本管理器)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# 下载并安装 Node.js（可能需要重启终端）
nvm install 22
# 验证环境中是否存在正确的 Node.js 版本
node -v # 应该打印 `v22.11.0`
# 验证环境中是否存在正确的 npm 版本
npm -v # 应该打印 `10.9.0`
```

## 安装依赖
进项目根目录
安装相关包：
```bash
npm install
```

## 运行项目
```bash
npm start
```

## 后台监听
```bash
cd src/sever
node sever.js
```

## FATE 环境

FATE 环境使用官方 Docker，相关代码在 `fate_code` 文件夹下。
