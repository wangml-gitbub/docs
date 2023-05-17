
# umi 

## 开发环境准备

### 安装 nvm 并使用 nvm 安装及管理 node((github)[https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro])
- 1、安装 nvm
```text
window 下载对应包： https://github.com/coreybutler/nvm-windows/releases
macOS || Linux 使用命令: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
查看 nvm 版本(确认是否安装成功)： nvm -v
```
- 2、nvm 安装及管理 node
```text
安装对应 node 版本（如：16.20.0版本）： nvm install 16.20.0
使用指定版本的 node: nvm use 16.20.0
查看当前 node 版本： node -v
查看当前 npm 版本： npm -v
```

### 依赖管理工具
(参考)[https://blog.csdn.net/u011374856/article/details/129417674]
```text
npm: node 自带的包管理工具，安装完 node 后，npm 也自动内置。


cnpm: 淘宝npm. 因为npm安装插件是从国外服务器下载，受网络的影响比较大，可能会出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事
安装 cnpm: npm install -g cnpm --registry=https://registry.npm.taobao.org


pnpm: 是一款新兴的包管理工具，与 NPM 不同的是，PNPM 采用了类似软链接的方式，将依赖包安装到每个项目的 node_modules 目录下，从而避免了大量的重复安装
安装 pnpm:npm install -g pnpm


yarn: 是一个 JavaScript 的包管理器，它是由 Facebook、Google、Tilde 以及其他社区成员共同维护的开源项目。Yarn 在 NPM 的基础上进行了改进和增强，旨在提高依赖包的安装速度和可靠性
安装 yarn:npm install -g yarn
```
### IDE 
```text
Visual Studio Code (Recommended)
WebStorm (Recommended)
IntelliJ IDEA
Sublime Text
Atom
```
## 项目创建 & 启动 & 打包

### 创建一个新的空目录
```text
mkdir myproject && cd myproject
```

### 初始化项目(推荐使用 pnpm + tabao源方式初始化项目)
- 方式1：使用 PNPM 方式初始化项目
```text
pnpm dlx create-umi@latest


Pick Umi App Template：按照实际需求选择
Simple App
Ant Design Pro
Vue Simple App
Umi Plugin

Pick Npm Client：推荐选择 pnpm
npm
cnpm
tnpm
yarn


Pick Npm Registry：推荐选择 taobao
npm 
taobao
```
- 方式2：使用 BUN 方式初始化项目(注意 bun 版本 >= 0.4.0)
```text
bunx create-umi


Pick Umi App Template：按照实际需求选择
Simple App
Ant Design Pro
Vue Simple App
Umi Plugin

Pick Npm Client：推荐选择 pnpm
npm
cnpm
tnpm
yarn


Pick Npm Registry：推荐选择 taobao
npm 
taobao
```
- 方式3：使用 NPM 方式初始化项目
```text
npx cerate-umi@latest


Pick Umi App Template：按照实际需求选择
Simple App
Ant Design Pro
Vue Simple App
Umi Plugin

Pick Npm Client：推荐选择 pnpm
npm
cnpm
tnpm
yarn


Pick Npm Registry：推荐选择 taobao
npm 
taobao
```
- 方式4：使用 YARN 方式初始化项目
```text
yarn create umi


Pick Umi App Template：按照实际需求选择
Simple App
Ant Design Pro
Vue Simple App
Umi Plugin

Pick Npm Client：推荐选择 pnpm
npm
cnpm
tnpm
yarn


Pick Npm Registry：推荐选择 taobao
npm 
taobao
```
- 扩展1： 使用某个模板初始化项目
```bash
# Create an electron template project from @umijs/electron-template
pnpm create umi --template electron

# Create an electron template project from @umijs/umi-app
yarn create @umijs/umi-app
```
- 扩展2： 使用 create-umi 初始化项目及 create-umi 的一些参数
```text
npm install -g umi
or
npm install -g yarn
yarn global add umi


mkdir myproject
cd myproject
yarn create umi


# create-umi 的一些参数
--no-git: 创建项目，但不初始化 Git
--no-install: 创建项目，但不自动安装依赖
```
- 扩展3：如果需要用 prettier 做项目代码的自动格式化或者其他（Jest、Tailwind CSS、mock等），可以执行 pnpm umi g  后进行选择
```text
pnpm umi g


Create Pages -- Create a umi page by page name
Enable Prettier -- Setup Prettier Configurations
Enable Jest -- Setup Jest Configuration
Enable Tailwind CSS -- Setup Tailwind CSS configuration
Enable Dva -- Configuration, Dependencies, and Model Files for Dva
Generate Component -- Generate component boilerplate code
Generate mock -- Generate mock boilerplate code
Enable E2E Testing with Cypress -- Setup Cypress Configuration
Generator api -- Generate api route boilerplate code
Generate Precommit -- Generate precommit boilerplate code
```
### 项目启动
```text
pnpm dev
```
### 项目打包
```text
pnpm build
```
## 项目目录结构解析
### 目录结构
```text
.
├── config
│   └── config.ts
├── dist
├── mock
│   └── app.ts｜tsx
├── src
│   ├── .umi
│   ├── .umi-production
│   ├── layouts
│   │   ├── BasicLayout.tsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   ├── utils // Recommended directory
│   │   └── index.ts
│   ├── services // Recommended directory
│   │   └── api.ts
│   ├── app.(ts|tsx)
│   ├── global.ts
│   ├── global.(css|less|sass|scss)
│   ├── overrides.(css|less|sass|scss)
│   ├── favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)
│   └── loading.(tsx|jsx)
├── node_modules
│   └── .cache
│       ├── bundler-webpack
│       ├── mfsu
│       └── mfsu-deps
├── .env
├── plugin.ts 
├── .umirc.ts // Choose between this and the config/config.ts file
├── package.json
├── tsconfig.json
└── typings.d.ts

```
### 根目录&文件
- package.json
umi4 不能像 umi3 那样自动的注册插件或在 package.json 中 预设像 @umijs/preset-  @umijs/plugin umi-preset- umi-plugin- 开头的插件。如果需要自定义额外插件、预设，需要手动配置到 plugin



- .env 
环境变量,如
```text
PORT=8081
COMPRESS=none
```


- .umirc.ts
与 config/config.ts 文件功能相同，但 .umirc.ts 优先级更高


- config/config.ts
与 .umirc 文件功能相同，但 .umirc.ts 优先级更高，但 config 文件夹下可以集中管理所有配置，保持根目录的整洁

- dist
打包后的默认输出文件夹，可以通过 outputPath 配置修改打包产物的输出文件夹



- mock
存放 mock 文件



- public
存放固定静态资源
如 public/image.png,开发时可以通过 /image.png 访问到


- src
```text
.umi 目录： dev 时的临时文件目录，比如入口文件、路由等，会被临时生成到这
不要提交 .umi 临时文件到 git 仓库


.umi-production 目录： build 时的临时文件目录，比如入口文件、路由等，会被临时生成到这
不要提交 .umi-production 临时文件到 git 仓库


app.[ts | tsx]: 运行时的配置文件，可以扩展运行时的能力，如修改路由、修改 render 方法等



layouts/index.tsx
全局布局，默认会在所有路由下生效，如果不需要可以设置 layout: false，如果需要很多层 layout 可以使用 wrappers



pages 目录： 约定式路由默认以 pages/* 文件夹的文件层级结构生成路由表
在配置路由中，component 如果写成相对路径，将以pages 文件夹为起点寻找文件


global.(j|t)sx?
全局前置脚本文件
umi 相对于其他前端框架，没有显示的程序主入口（如：src/index.ts）。如果你需要再应用前置、全局运行的逻辑，可以在这个文件中写入
当需要添加全局Context 、修改应用运行时，请使用 app.tsx


global.(css|less|sass|scss)
全局样式文件，优先级在第三方组件库样式之后，如果要覆盖第三方样式，使用 overrides.css



overrides.(css|less|sass|scss)
高优先级全局样式文件，一般专用于覆盖第三方样式



loading.(tsx|jsx)
全局加载组件
umi4默认按页分包，页面切换时存在加载过程，通过这个文件配置加载动画
```

- plugin.ts 
当有插件定制需求，可以在这个文件进行定义


- favicon
站点 favicon 图标文件
当存在 src/favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp) 时，将会自动在产物中添加站点 favicon ：<link rel="shortcut icon" href="/favicon.png">
若使用外部资源等，可以使用 favicons 手动配置站点图标，配置值优先于约定
## Routing(路由)