(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{331:function(a,t,r){"use strict";r.r(t);var s=r(0),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("专栏原创出处："),r("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),r("OutboundLink")],1),a._v(" ，"),r("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),r("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),r("ul",[r("li",[a._v("本教程使用 Scala 2.13")])]),a._v(" "),r("h2",{attrs:{id:"欢迎来到-scala-入门-语言特征"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#欢迎来到-scala-入门-语言特征"}},[a._v("#")]),a._v(" 欢迎来到 Scala 入门-语言特征")]),a._v(" "),r("p",[a._v("本教程包含了对于大多数 Scala 特性的简单介绍。主要针对 Scala 这门语言的初学者。")]),a._v(" "),r("h2",{attrs:{id:"scala-是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-是什么？"}},[a._v("#")]),a._v(" Scala 是什么？")]),a._v(" "),r("p",[a._v("Scala 是一门现代的多范式语言，志在以简洁、优雅及类型安全的方式来表达常用的编程模型。它平滑地集成了面向对象和函数式语言的特性。")]),a._v(" "),r("h2",{attrs:{id:"scala-是面向对象的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-是面向对象的"}},[a._v("#")]),a._v(" Scala 是面向对象的")]),a._v(" "),r("p",[a._v("鉴于一切值都是对象，可以说 Scala 是一门纯面向对象的语言。对象的类型和行为是由类和特质来描述的。类可以由子类化和一种灵活的、基于 mixin 的组合机制（它可作为多重继承的简单替代方案）来扩展。")]),a._v(" "),r("h2",{attrs:{id:"scala-是函数式的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-是函数式的"}},[a._v("#")]),a._v(" Scala 是函数式的")]),a._v(" "),r("p",[a._v("鉴于一切函数都是值，又可以说 Scala 是一门函数式语言。Scala 为定义匿名函数提供了轻量级的语法，支持高阶函数，允许函数嵌套及柯里化。Scala 的样例类和内置支持的模式匹配代数模型在许多函数式编程语言中都被使用。对于那些并非类的成员函数，单例对象提供了便捷的方式去组织它们。")]),a._v(" "),r("p",[a._v("此外，通过对提取器的一般扩展，Scala 的模式匹配概念使用了 right-ignoring 序列模式，自然地延伸到 XML 数据的处理。其中，for 表达式对于构建查询很有用。这些特性使得 Scala 成为开发 web 服务等程序的理想选择。")]),a._v(" "),r("h2",{attrs:{id:"scala-是静态类型的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-是静态类型的"}},[a._v("#")]),a._v(" Scala 是静态类型的")]),a._v(" "),r("p",[a._v("Scala 配备了一个拥有强大表达能力的类型系统，它可以静态地强制以安全、一致的方式使用抽象。典型来说，这个类型系统支持：")]),a._v(" "),r("ul",[r("li",[a._v("泛型类")]),a._v(" "),r("li",[a._v("型变注解")]),a._v(" "),r("li",[a._v("上、下 类型边界")]),a._v(" "),r("li",[a._v("作为对象成员的内部类和抽象类型")]),a._v(" "),r("li",[a._v("复合类型")]),a._v(" "),r("li",[a._v("显式类型的自我引用")]),a._v(" "),r("li",[a._v("隐式参数和隐式转化")]),a._v(" "),r("li",[a._v("多态方法\n类型推断让用户不需要标明额外的类型信息。这些特性结合起来为安全可重用的编程抽象以及类型安全的扩展提供了强大的基础。")])]),a._v(" "),r("h2",{attrs:{id:"scala-是可扩展的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-是可扩展的"}},[a._v("#")]),a._v(" Scala 是可扩展的")]),a._v(" "),r("p",[a._v("在实践中，特定领域应用的发展往往需要特定领域的语言扩展。Scala 提供了一种语言机制的独特组合方式，使得可以方便地以库的形式添加新的语言结构。")]),a._v(" "),r("p",[a._v("很多场景下，这些扩展可以不通过类似宏（macros）的元编程工具完成。例如：")]),a._v(" "),r("ul",[r("li",[a._v("隐式类允许给已有的类型添加扩展方法。")]),a._v(" "),r("li",[a._v("字符串插值可以让用户使用自定义的插值器进行扩展。")])]),a._v(" "),r("h2",{attrs:{id:"scala-的互操作性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scala-的互操作性"}},[a._v("#")]),a._v(" Scala 的互操作性")]),a._v(" "),r("p",[a._v("Scala 设计的目标是与流行的 Java 运行环境（JRE）进行良好的互操作，特别是与主流的面向对象编程语言——Java 的互操作尽可能的平滑。Java 的最新特性如函数接口（SAMs）、lambda 表达式、注解及泛型类 在 Scala 中都有类似的实现。")]),a._v(" "),r("p",[a._v("另外有些 Java 中并没有的特性，如缺省参数值和带名字的参数等，也是尽可能地向 Java 靠拢。Scala 拥有类似 Java 的编译模型（独立编译、动态类加载），且允许使用已有的成千上万的高质量类库。")]),a._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.scala-lang.org/tour/tour-of-scala.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.scala-lang.org/tour/tour-of-scala.html"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=l.exports}}]);