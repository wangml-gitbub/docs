
# ng

## create a ng project

install angular-cli

```bash
npm install -g @angular/cli
```

init a new ng project

```bash
ng new 项目名
```

run dev

```bash
cd 项目名
ng serve --open
```

## base

create a component

```bash
ng generate component xxxx 
```

create a service

```bash
ng generate service xxxx
```

bind prop： [属性名]="变量"

```bash
<div [id]="xxx">xxxx</div>
```

bind event： [事件名]="函数()"

```bash
<div (click)="xxxx()">xxxx</div>

```

if directive： *ngIf="表达式"

```bash
<div *ngIf="1+1 > 4">xxxx</div>

```

for directive： *ngFor="let item of arr"

```bash
<div *ngFor="let item of userList">
  {{item.name}} - {{item.age}}
</div>
```

## 组件

1、创建组件： 手动创建、命令行创建

```bash
① 命令行创建组件： ng generate componnet 组件名
创建该组件名的文件夹，文件夹中有：
一个组件文件： 组件名.component.ts
一个模版文件： 组件名.component.html
一个 CSS 文件： 组件名.component.css
一个测试文件： 组件名.component.spec.ts


② 手动创建组件： user.component.ts
import { Component } from '@angular/core'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
# 模版和样式的第二种写法
# @Component({
#   selector: 'app-user',
#   template: '<div class="d1">xxxxx</div>',
#   styles: ['.d1{clor: #fff; font-size: '18px'}']
# })
export class UserComponent{}

```

2、生命周期

```bash
import { Component } from '@angular/core'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})

export class UserComponent{
  
  // 设置或重新设置数据绑定的输入属性
  ngOnChanges() {}

  // 初始化组件和指令
  ngOnInit() {}

  // 检测变化时
  ngDoCheck() {}

  // 外部内容投入到当前组件视图或者指令绑定的地方
  ngAfterContentInit() {}

  // 被投入的外部内容检查完后
  ngAfterContentCheck() {}

  // 组件视图及其子组件视图初始化完成后
  ngAfterViewInit(){}

  // 组件视图及其子组件视图变更检测完后
  ngAfterViewChecked() {}

  // 组件销毁
  ngOnDestroy(){}
}

```

3、父子组件通信 @Input @Output

```bash
子组件 child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'app-child',
  templateUrl: `
                <div>
                  <div>message: {{message}}</div>
                  <input [value]="title" (change)="changeInput" />
                  <p>name: {{info.name}}</p>
                  <p>desc: {{info.desc}}</p>
                  <button (click)="change">改变 info 数据</button>
                </div>
  `,
  stylesUrl: ['./parent.component.css']
})
export class ChildComponent{
  @Input() info
  @Input('msg') message = ''    // 设置别名为 message
  @Input()
  get title() : string{ 
    return this.childTitle
  }
  set title(title: string){
    this.childTitle = title.trim() || 'no value'
  }
  private childTitle = ''



  @Output eventEmitter = new EventEmitter()
  change(){
    this.eventEmitter.emit('changeFn')
  }
  changeInput(e) {
    this.eventEmitter.emit('changeInput', e.target.value)
  }
}

父组件 parent.component.ts
import { Component } from '@angular/core'
@Component({
  selector: 'app-parent',
  template: '<div><app-child [info]="info" [title]="title" [msg]="msg" (changeFn)="changeInfo" (changeInput)="changeInput" /></div>',
  stylesUrl: ['./parent.component.css']
})
export class ParentComponent{
  info = {
    name: 'parent',
    desc: 'parent desc'
  }
  title = 'this is a title'
  msg = 'this is a message'
  changeFn() {
    this.info = {
      name: 'parent name',
      desc: 'this is parent desc'
    }
  }
  changeInput(val: string) {
    this.title = val
  }
}
```

## 模版

## 指令

## 依赖注入
