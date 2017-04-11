首先，这篇文章的学习来源于阮一峰老师的博客。
接下来开始正文。
css 只是网页样式的描述方法，并非编程语言。
css Modules 并不是将css 改造成编程语言，他功能很单纯，只是加入了局部作用域和模块依赖。

文件夹里是阮一峰老师的demo 库，简单介绍了一些css Modules 的用法。
首先我们来启动这个服务。
step2: 安装依赖。 cd 到该文件目录下，npm  install 回自动安装所需依赖包。
step3: 启动服务。 npm run d emo01. 启动文件夹内的第一个实例。 然后在浏览器里访问 http://localhost:8080,查看结果。

其次，了解css Modules 的内容。
特点一： 局部作用域
    css 的规则都是全局的，任何一个组件的样式规则，都会对整个页面有效。
    产生局部作用域的唯一方法是，使用独一无二的class名字，不与其他选择器重名。
    以react 组件为例：
        在App.js 文件内：
            import React from 'react';
            import style from './App.css';

            export default () => {
            return (
                <h1 className={style.title}>
                Hello World
                </h1>
            );
            }; 
        在App.css 文件内：
            
            .title {
            color: red;
            }
        构建工具会将类名style.title编译成一个哈希字符串。如下：
            <h1 class="_3zyde4l1yATCOkgn-DBWEL">
                Hello World
            </h1>

 特点二： 全局作用域
          CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串。
           在App.css 文件内：
              .title {
                color: red;
              }

              :global(.title) {
                color: green;
              }  

特点三： 定制哈希类名
    在webpack.config.js文件里面可以定制哈希字符串的格式。默认的哈希算法是[hash:base64]，可以定制为：
    loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"
    你会发现.title被编译成了demo03-components-App---title---GpMto。

特点四：Class的组合
    在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。
    在App.css文件中，让.title继承。className.

        .className {
        background-color: blue;
        }

        .title {
        composes: className;
        color: red;
        }

特点五：输入其他模块
    选择器可以继承其他css 文件里面的规则。
    例如：another.css文件：
            .className {
                background-color: blue;
            }
    App.css可以继承another.css里面的规则。
        .title {
            composes: className from './another.css';
            color: red;
        }

特点六：输入变量
