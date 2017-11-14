angular 2
1.开发环境
Angular使用 TypeScript 它是开发Angular应用程序的主要语言。
TypeScript是一个超级JavaScript集合，它被迁移到TypeScript，用TypeScript编写的代码不太容易出现运行时错误。
设置开发环境：
    步骤(1):通过在命令提示符下键入以下命令，在本地驱动器中创建项目文件夹。
        mkdir angular2-demo
        cd angular2-demo
    步骤(2):您需要创建 tsconfig.json ，这是TypeScript编译器配置文件。 它指导编译器生成JavaScript文件。
    步骤(3):在项目文件夹 angular2-demo 中创建 typings.json 文件。
    typings.json
        {
        "globalDependencies": {
            "core-js": "registry:dt/core-js#0.0.0+20160602141332",
            "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
            "node": "registry:dt/node#6.0.0+20160621231320"
        }
        }
        大量的JavaScript库扩展了具有特征和语法的JavaScript环境，而这些特性和语法本身不能被TypeScript编译器识别。 typings.json 文件用于在Angular应用程序中标识TypeScript定义文件。
        在上面的代码中，有三种类型的文件，如下所示:
        core-js :它为我们的ES5浏览器带来ES2015 / ES6功能。
        jasmine :这是Jasmine测试框架的类型。
        node :它用于引用nodejs环境中的对象的代码。
        这些类型用于开发更大的Angular应用。
    步骤(4):使用以下代码将 package.json 文件添加到您的 angular2-demo 项目文件夹。package.json 将包含我们的应用所需的包。 这些包使用npm(节点程序包管理器)进行安装和维护。
    步骤(5):要安装软件包，请在命令提示符下运行以下npm命令。
        npm install
    步骤(6):在项目文件夹中的Angular应用程序组件的位置创建一个名为 app / 的子文件夹。 您可以使用以下命令创建文件夹:
        mkdir app
        cd app
    步骤(7):您创建的文件需要以 .ts 扩展名保存。 使用以下代码在您的 app / 文件夹中创建一个名为 environment_app.component.ts 的文件
    步骤(8):接下来，使用以下代码创建 environment_main.ts 文件:
    environment_main.ts
    步骤(9):现在使用以下代码在您的项目文件夹 angular2-demo / 中创建 index.html
    步骤(10):要运行应用程序，请在终端窗口中键入以下命令:
    npm start 
2.angular 2 架构
    （1）模块 module 
    某些应用程序的组件类名称为 AppComponent ，您可以在名为 app.component.ts 的文件中找到它。 使用 export 语句从模块中导出组件类，如下所示:
    export class AppComponent { }
    (2)组建 compontent
    组件是具有模板的控制器类，主要处理页面上的应用程序和逻辑的视图。 它是一个可以在整个应用程序中使用的代码。 组件知道如何呈现自己和配置依赖注入。
    要注册组件，我们使用 @Component 注释，可以将应用程序拆分为更小的部分。 每个DOM元素只有一个组件。
    (3)模板 template
    组件的视图可以通过使用模板来定义，该模板告诉Angular如何显示组件。 例如，下面的简单模板显示如何显示名称:
    <div>
        Your name is : {{name}}
    </div>
    要显示该值，可以在插值大括号中放置模板表达式。
    (4)元数据 metadata
        @Component({
            selector : 'mylist',
            template : '<h2>Name is Harry</h2>'
            directives : [MyComponentDetails]
        })
        export class ListComponent{...}
    @Component 是一个装饰器，它使用配置对象来创建组件及其视图。 selector 创建组件的实例，其中它找到< mylist> 父HTML中的标记。 模板告诉Angular如何显示组件。 指令装饰器用于表示组件或指令的数组。
    (5)数据绑定 data binging
    它将模板部分与组件部分和模板HTML组合，使用标记绑定以连接两侧。 有四种类型的数据绑定:
        插值:它显示div标签中的组件值。
        属性绑定:将属性从父级属性传递给子级的属性。
        事件绑定:当您单击组件方法名称时触发。
        双向绑定:此表单通过使用 ngModel 指令在单个符号中绑定属性和事件。
    (6)服务 services
    (7)指示 directive
    (8)依赖注入 Dependency Injection
    