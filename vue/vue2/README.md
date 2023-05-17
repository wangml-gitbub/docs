# record

## 1、为什么选择 vue 框架 + vue 简介

```text
为什么选择 vue 框架：
vue 是渐进式的 javascript 框架
易学易用上手快
适用于场景丰富的开发
最火，市面上使用广泛
提升开发体验，相比于传统前端开发更加迅捷
组件化开发，内置各种指令，简化开发流程
性能出色


简介：
是一款构建用户界面的 javascript 框架
声明式开发
渐进式框架
```

## 2、vue API 风格

```text
选项式 API --- vue2
组合式 API --- vue3
```

## 3、vue 开发前的准备 + 工程目录结构

```text
编辑器：vscode | IDEA | WebStorm | ...
环境：node 环境(官网下载或者使用 nvm)

vue 脚手架安装： npm install @vue/cli -g

可选安装（yarn、pnpm）: 
npm install pnpm -g 
npm install yarn -g 

可选安装（nvm、 nrm）: 
官网下载 nvm
npm install nrm -g 


工程初始化方式：
npm init vue
vue cerate 项目名
pnpm create vite
npm init vite@latest
yarn create vite


工程目录结构解析：
```

## 4、模版语法 & v-html

```text
文本插值使用 {{ JS表达式 }}
v-html 渲染标签（作用相当于 innerHTML）
```

## 5、属性绑定

```text
使用 v-bind:属性名=”属性值“，简写为 :属性名=”属性值“
:id="d1"
:class="c1"
:style="s1"
:title="t1"
```

## 6、条件渲染

```text
v-if   不断进行 DOM节点挂载|卸载来显示隐藏。切换开销大
v-if v-else
v-if v-else-if v-else

v-show DOM节点存在，通过控制 display 属性来显示隐藏。初始化渲染开销大
```

## 7、列表渲染 + 通过 key 管理状态

```text
item 为数组的每一项或对象每一项值，index 为下标
v-for="(item, index) in arr"
v-for="(item, index) of arr"
v-for="(item, index) in obj"
v-for="(item, index) of obj"


例如：
<div>
  <div v-for="item in arr" :key="item">{{item}}</div>
  <div v-for="item in obj" :key="item">{{item}}</div>
</div>

export default {
  data() {
    return {
      arr: [1, 2, 3],
      obj: {
        name: 'bob',
        age: 11
      }
    }
  }
}
```

## 8、事件处理+传参+修饰符

```text
内联事件处理器(不常用): @click="count++"

常用事件绑定方式：
@click="函数名 | js 表达式"
@click="函数名(参数1, 参数2)"
@click="函数名(参数1, $event)"


事件修饰符
@click.stop
@click.prevent
@click.capture
@click.self
@click.once
@click.passive

@click.keyup.enter
@click.keyup.tab
@click.keyup.delete
@click.keyup.esc
@click.keyup.space
@click.keyup.up
@click.keyup.down
@click.keyup.left
@click.keyup.right

@click.keyup.alt
@click.keyup.ctrl
@click.keyup.shift
@click.keyup.meta

```

## 数组变化侦测

```text
vue 中，数组的 contact slice filter 方法不能直接引起数组的变化，界面 UI 无法更新

数组变化的侦测可以通过 push pop shift unshift，或者通过重新赋值的方式引起界面的重新渲染更新
```

## 9、计算属性

```text
export default {
  computed: {
    fullName() {
      return 'w'+'ml'
    }
  }
}
```

## 10、class 绑定

```text
v-bind:class=""
:class=""
```

## 11、style 绑定

数组变化侦测
侦听器
表单输入绑定
模版引用

组件组成
组件嵌套关系
组件注册方式
组件传递数据 props
组件传递多种类型数据
组件传参 props 校验
组件事件
组件事件配合 v-model 使用
组件数据传递
透传属性 Attributes
依赖注入

动态组件
组件保持存活
异步组件

插槽 slot
具名插槽
作用域插槽

组件生命周期
组件生命周期应用

vue 应用

## r

```text
1、vue 优势
2、什么是渐进式
3、声明式和命令式
4、三大框架比对
5、什么是单页面应用
6、组件&模块，组件化&模块化
7、vue2 & vue3 区别
8、选项式 API & 组合式 API
9、JS 表达式 & JS 语句
10、什么是模版语法
11、v-show 和 v-if 区别
12、v-html 作用
13、v-for 的 key 作用
14、数组的侦测怎么实现
15、computed vs methods
```
