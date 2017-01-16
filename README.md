微信小程序开发模板
===============

> 该工具用于生成一坨微信小程序所使用的 `wxml`, `wxss`, `js`。

该工具会将 `src/` 下的相应的文件转换并于 `dist/` 下生成对应的各个文件。

`src/` 下的文件结构参照自 [微信公众平台|小程序 - 开发文档 - 目录结构](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/structure.html?t=2017112)

使用的转换工具为如下所示：

- `yaml` -> `json`
- `pug` -> `wxml`
- `scss` -> `wxss`
- `js (es6)` -> `js (es5)`

## 食用指北

1. 克隆本项目
2. 使用 `npm install` 安装包依赖
3. 使用 `npm start` 开始项目监听
