(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{273:function(v,_,l){"use strict";l.r(_);var t=l(0),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("blockquote",[l("p",[v._v("专栏原创出处："),l("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源笔记文件 "),l("OutboundLink")],1),v._v(" ，"),l("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源码 "),l("OutboundLink")],1),v._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),v._v(" "),l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#比较说明"}},[v._v("比较说明")])]),l("li",[l("a",{attrs:{href:"#并发性比较"}},[v._v("并发性比较")])]),l("li",[l("a",{attrs:{href:"#锁比较"}},[v._v("锁比较")])]),l("li",[l("a",{attrs:{href:"#说明"}},[v._v("说明")])])])]),l("p"),v._v(" "),l("h2",{attrs:{id:"比较说明"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#比较说明"}},[v._v("#")]),v._v(" 比较说明")]),v._v(" "),l("p",[v._v("本节内容主要从 CAS 、volatile 、synchronized、Lock 进行对比分析并发实现的差异。")]),v._v(" "),l("p",[v._v("实现并发的基础是保证了可见性、有序性，因此此处不做比较。")]),v._v(" "),l("h2",{attrs:{id:"并发性比较"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#并发性比较"}},[v._v("#")]),v._v(" 并发性比较")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("场景")]),v._v(" "),l("ul",[l("li",[v._v("CAS：单个变量支持比较替换操作，如果实际值与期望值一致时才进行修改")]),v._v(" "),l("li",[v._v("volatile：单个变量并发操作，直接修改为我们的目标值")]),v._v(" "),l("li",[v._v("synchronized：一般性代码级别的并发")]),v._v(" "),l("li",[v._v("Lock：代码级别的并发，需要使用锁实现提供的独特机制，例如：读写分离、分段、中断、共享、重入等 synchronized 不支持的机制。")])])]),v._v(" "),l("li",[l("p",[v._v("原子性")]),v._v(" "),l("ul",[l("li",[v._v("CAS：保证原子性")]),v._v(" "),l("li",[v._v("volatile：单个操作保证原子性，组合操作（例如：++）不保证原子性")]),v._v(" "),l("li",[v._v("synchronized：保证原子性")]),v._v(" "),l("li",[v._v("Lock：保证原子性")])])]),v._v(" "),l("li",[l("p",[v._v("并发粒度")]),v._v(" "),l("ul",[l("li",[v._v("CAS：单个变量值")]),v._v(" "),l("li",[v._v("volatile：单个变量值")]),v._v(" "),l("li",[v._v("synchronized：静态、非静态方法、代码块")]),v._v(" "),l("li",[v._v("Lock：代码块")])])]),v._v(" "),l("li",[l("p",[v._v("编码操作性")]),v._v(" "),l("ul",[l("li",[v._v("CAS：调用 JDK 方法")]),v._v(" "),l("li",[v._v("volatile：使用关键字，系统通过屏障指令保证并发性")]),v._v(" "),l("li",[v._v("synchronized：使用关键字，加锁解锁操作系统默认通过指令控制")]),v._v(" "),l("li",[v._v("Lock：手动加锁解锁")])])]),v._v(" "),l("li",[l("p",[v._v("线程阻塞")]),v._v(" "),l("ul",[l("li",[v._v("CAS：不会")]),v._v(" "),l("li",[v._v("volatile：不会")]),v._v(" "),l("li",[v._v("synchronized：可能会")]),v._v(" "),l("li",[v._v("Lock：可能会")])])]),v._v(" "),l("li",[l("p",[v._v("性能（在合理使用情况下比较，比如我们可以用 volatile 实现的需求即不用 Lock）")]),v._v(" "),l("ul",[l("li",[v._v("CAS：主要表现在 CPU 资源占用")]),v._v(" "),l("li",[v._v("volatile：性能较好")]),v._v(" "),l("li",[v._v("synchronized：性能一般（JDK 1.6 优化后增加了偏向锁、轻量级锁机制）")]),v._v(" "),l("li",[v._v("Lock：性能较差")])])])]),v._v(" "),l("h2",{attrs:{id:"锁比较"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#锁比较"}},[v._v("#")]),v._v(" 锁比较")]),v._v(" "),l("blockquote",[l("p",[v._v("volatile 不是锁实现机制，因此锁相关比较不参与")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("锁中断操作")]),v._v(" "),l("ul",[l("li",[v._v("synchronized：不支持中断操作")]),v._v(" "),l("li",[v._v("Lock：支持中断，支持超时中断")])])]),v._v(" "),l("li",[l("p",[v._v("锁功能性")]),v._v(" "),l("ul",[l("li",[v._v("synchronized：独占锁、可重入锁")]),v._v(" "),l("li",[v._v("Lock：独占锁、共享锁、可重入锁、读写锁、分段锁 ...")])])]),v._v(" "),l("li",[l("p",[v._v("锁状态感知")]),v._v(" "),l("ul",[l("li",[v._v("synchronized：无法判断是否拿到锁")]),v._v(" "),l("li",[v._v("Lock：可以判断是否拿到锁")])])]),v._v(" "),l("li",[l("p",[v._v("死锁")]),v._v(" "),l("ul",[l("li",[v._v("synchronized：可能出现死锁")]),v._v(" "),l("li",[v._v("Lock：需合理编码，可能出现死锁")])])])]),v._v(" "),l("h2",{attrs:{id:"说明"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[v._v("#")]),v._v(" 说明")]),v._v(" "),l("p",[v._v("本内容为个人理解总结，可能存在理论性问题，欢迎讨论反馈，谢谢。")])])}),[],!1,null,null,null);_.default=i.exports}}]);