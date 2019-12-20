(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{288:function(a,t,r){"use strict";r.r(t);var e=r(0),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("专栏原创出处："),r("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),r("OutboundLink")],1),a._v(" ，"),r("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),r("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#什么是原子操作"}},[a._v("什么是原子操作")])]),r("li",[r("a",{attrs:{href:"#处理器如何实现原子操作"}},[a._v("处理器如何实现原子操作")]),r("ul",[r("li",[r("a",{attrs:{href:"#使用总线锁保证原子性"}},[a._v("使用总线锁保证原子性")])]),r("li",[r("a",{attrs:{href:"#使用缓存锁保证原子性"}},[a._v("使用缓存锁保证原子性")])])])]),r("li",[r("a",{attrs:{href:"#java-如何实现原子操作"}},[a._v("Java 如何实现原子操作")]),r("ul",[r("li",[r("a",{attrs:{href:"#使用循环-cas-实现原子操作"}},[a._v("使用循环 CAS 实现原子操作")])]),r("li",[r("a",{attrs:{href:"#使用锁机制实现原子操作"}},[a._v("使用锁机制实现原子操作")])])])]),r("li",[r("a",{attrs:{href:"#思考"}},[a._v("思考")])]),r("li",[r("a",{attrs:{href:"#参考"}},[a._v("参考")])])])]),r("p"),a._v(" "),r("h2",{attrs:{id:"什么是原子操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是原子操作"}},[a._v("#")]),a._v(" 什么是原子操作")]),a._v(" "),r("p",[a._v("原子 (atomic) 本意是“不能被进一步分割的最小粒子”，而原子操作 (atomic operation) 意为“不可被中断的一个或一系列操作”。")]),a._v(" "),r("h2",{attrs:{id:"处理器如何实现原子操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#处理器如何实现原子操作"}},[a._v("#")]),a._v(" 处理器如何实现原子操作")]),a._v(" "),r("p",[a._v("处理器提供总线锁定和缓存锁定两个机制来保证复杂内存操作的原子性。"),r("br")]),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/CPU-术语定义.png",height:"380px"}}),a._v(" "),r("p",[a._v("CPU-术语定义")])]),r("p"),a._v(" "),r("h3",{attrs:{id:"使用总线锁保证原子性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用总线锁保证原子性"}},[a._v("#")]),a._v(" 使用总线锁保证原子性")]),a._v(" "),r("p",[a._v("第一个机制是通过总线锁保证原子性。如果多个处理器同时对共享变量进行读改写操作 (i++就是经典的读改写操作)，那么共享变量就会被多个处理器同时进行操作，这样读改写操作就不是原子的，操作完之后共享变量的值会和期望的不一致。")]),a._v(" "),r("blockquote",[r("p",[a._v("举个例子，如果 i=1，我们进行 两次 i++操作，我们期望的结果是 3，但是有可能结果是 2")])]),a._v(" "),r("p",[a._v("原因可能是多个处理器同时从各自的缓存中读取变量 i，分别进行加 1 操作，然后分别写入 系统内存中。那么，想要保证读改写共享变量的操作是原子的，就必须保证 CPU1 读改写共享变量的时候，CPU2 不能操作缓存了该共享变量内存地址的缓存。")]),a._v(" "),r("p",[a._v("处理器使用总线锁就是来解决这个问题的。所谓总线锁就是使用处理器提供的一个 LOCK#信号，当一个处理器在总线上输出此信号时，其他处理器的请求将被阻塞住，那么该处理器可以独占共享内存。")]),a._v(" "),r("h3",{attrs:{id:"使用缓存锁保证原子性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存锁保证原子性"}},[a._v("#")]),a._v(" 使用缓存锁保证原子性")]),a._v(" "),r("p",[a._v("第二个机制是通过缓存锁定来保证原子性。在同一时刻，我们只需保证对某个内存地址的操作是原子性即可，但总线锁定把 CPU 和内存之间的通信锁住了，这使得锁定期间，其他处理器不能操作其他内存地址的数据，所以总线锁定的开销比较大，目前处理器在某些场合下使用缓存锁定代替总线锁定来进行优化。")]),a._v(" "),r("p",[a._v("频繁使用的内存会缓存在处理器的 L1、L2 和 L3 高速缓存里，那么原子操作就可以直接在处理器内部缓存中进行，并不需要声明总线锁，在 Pentium 6 和目前的处理器中可以使用“缓存 锁定”的方式来实现复杂的原子性。\n所谓“缓存锁定”是指内存区域如果被缓存在处理器的缓存行中，并且在 Lock 操作期间被锁定，那么当它执行锁操作回写到内存时，处理器不在总线上声 言 LOCK#信号，而是修改内部的内存地址，\n并允许它的缓存一致性机制来保证操作的原子性，因为缓存一致性机制会阻止同时修改由两个以上处理器缓存的内存区域数据，当其他处 理器回写已被锁定的缓存行的数据时，会使缓存行无效，i++例子中，当 CPU1 修 改缓存行中的 i 时使用了缓存锁定，那么 CPU2 就不能同时缓存 i 的缓存行。")]),a._v(" "),r("p",[a._v("但是有两种情况下处理器不会使用缓存锁定。")]),a._v(" "),r("ol",[r("li",[a._v("当操作的数据不能被缓存在处理器内部，或操作的数据跨多个缓存行 (cache line) 时，则处理器会调用总线锁定。")]),a._v(" "),r("li",[a._v("有些处理器不支持缓存锁定。对于 Intel 486 和 Pentium 处理器，就算锁定的内存区域在处理器的缓存行中也会调用总线锁定。")])]),a._v(" "),r("p",[a._v("针对以上两个机制，我们通过 Intel 处理器提供了很多 Lock 前缀的指令来实现。例如，位测试和修改指令:BTS、BTR、BTC;交换指令 XADD、CMPXCHG，以及其他一些操作数和逻辑指令 (如 ADD、OR) 等，被这些指令操作的内存区域就会加锁，导致其他处理器不能同时访问它。")]),a._v(" "),r("h2",{attrs:{id:"java-如何实现原子操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-如何实现原子操作"}},[a._v("#")]),a._v(" Java 如何实现原子操作")]),a._v(" "),r("p",[a._v("在 Java 中可以通过锁和循环 CAS 的方式来实现原子操作。")]),a._v(" "),r("h3",{attrs:{id:"使用循环-cas-实现原子操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用循环-cas-实现原子操作"}},[a._v("#")]),a._v(" 使用循环 CAS 实现原子操作")]),a._v(" "),r("p",[a._v("JVM 中的 CAS 操作正是利用了处理器提供的 CMPXCHG 指令实现的。自旋 CAS 实现的基本 思路就是循环进行 CAS 操作直到成功为止。")]),a._v(" "),r("blockquote",[r("p",[a._v("请参考《内存模型-CAS实现原理》内容详细了解")])]),a._v(" "),r("h3",{attrs:{id:"使用锁机制实现原子操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用锁机制实现原子操作"}},[a._v("#")]),a._v(" 使用锁机制实现原子操作")]),a._v(" "),r("p",[a._v("锁机制保证了只有获得锁的线程才能够操作锁定的内存区域。JVM 内部实现了很多种锁机制，有偏向锁、轻量级锁和互斥锁。")]),a._v(" "),r("p",[a._v("除了偏向锁，JVM 实现锁的方式都用了循环 CAS，即当一个线程想进入同步块的时候使用循环 CAS 的方式来获取锁，当它退出同步块的时候使用循环 CAS 释放锁。")]),a._v(" "),r("h2",{attrs:{id:"思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[a._v("#")]),a._v(" 思考")]),a._v(" "),r("ul",[r("li",[a._v("原子性是否保证可见性？")])]),a._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),r("ul",[r("li",[a._v("并发编程的艺术")])])])}),[],!1,null,null,null);t.default=v.exports}}]);