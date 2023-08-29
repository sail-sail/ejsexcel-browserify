ejsexcel-browserify
--------
> browser excel template engine. export excel, ejsExcel


### How to use?
```bash
npm install ejsexcel-browserify
```
   
### How to test?
- test/test.xlsx 为完整示例 demo

- 示例
```js
import { renderExcel } from "ejsexcel-browserify";
import saveAs from "file-saver";

//获得Excel模板的buffer对象
const res = await fetch("./test.xlsx");
const buffer = await res.arrayBuffer();

//数据源, 可以是任意对象
const data = [
  [{"dpt_des":"开发部","doc_dt":"2013-09-09","doc":"a001"}],
  [{"pt":"pt1","des":"des1","due_dt":"2013-08-07","des2":"2013-12-07"}]
];

//用数据源(对象)data渲染Excel模板
const buffer2 = await renderExcel(buffer, data);

const blob = new Blob([ buffer2 ], {
  type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
});

saveAs(blob, "示例");
```

- 示例使用weborker渲染大型报表
```js
import saveAs from "file-saver";
import { useWebWorkerFn } from "@vueuse/core";

const { workerFn } = useWebWorkerFn(
  async function (data) {
    // 如果第一个参数是字符串, 则会自动通过 fetch 加载该文件, 以此减少线程间传输数据量
    // 如果第二个参数是字符串, 则会自动通过 fetch 加载为json作为数据源, 以此减少线程间传输数据量
    return await ejsexcel.renderExcel(`${ location.origin }/test.xlsx`, data);
  },
  {
    dependencies: [
      `${ location.origin }/ejsexcel.min.js`,
    ],
  },
);

//数据源, 可以是任意对象
const data = [
  [{"dpt_des":"开发部","doc_dt":"2013-09-09","doc":"a001"}],
  [{"pt":"pt1","des":"des1","due_dt":"2013-08-07","des2":"2013-12-07"}]
];

const buffer2 = await workerFn(data);

const blob = new Blob([ buffer2 ], {
  type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
});
saveAs(blob, "示例2");
```

## Syntax

| Syntax                | Description                               |
|-----------------------|-------------------------------------------|
| `_data_`                | `_data_` 为内置对象, 数据源                   |
| `<%forRow`              | 循环一行                                  |
| `<%#`                   | 输出动态公式                               |
| `<%~`                   | 输出数字类型格式                           |
| `<%=`                   | 输出字符串                                |
| `<%forCell`             | 循环单元格                                |
| `<%forRBegin`           | 循环多行                                  |
| `<%forCBegin`           | 循环多个单元格                             |
| `<%_mergeCellFn_("C2:E2")%>`     | 合并单元格`C2:E2`                   |
| `<%_dataValidation_("序列1,序列2")%>`     | 数据验证                  |
| `<%_hideSheet_()%>`     | 隐藏所在工作表                             |
| `<%_showSheet_()%>`     | 显示所在工作表                             |
| `<%_deleteSheet_()%>`   | 删除所在工作表                             |
| `<%   %>`               | 内部可执行 任意`javascript`,可以用 `<%console.log(_data_)%>` 打印临时变量到控制台,进行调试 |

## Author
+ Author: Sail  
    - QQ: 151263555  
    - QQ群: 470988427  
    - email: 151263555@qq.com 

## Templates
> 做一个这样的模版
![模板](http://dn-cnode.qbox.me/Frs_RuLXJxYQgYoIUhGJJ1zspCJE)

## Result
> ## 加数据渲染之后,导出结果
![导出结果](http://dn-cnode.qbox.me/FnRDa5Zyjg-dI7ykCNR0T8SorWyC)


## 捐赠鼓励支持此项目,支付宝扫描:
![捐赠鼓励支持此项目](http://dn-cnode.qbox.me/FucPKV4XWewhakoqTSngU3AsaP0Z)

## 项目贡献人列表
- @Hello World  ¥50
- @德爾文  ¥50
- @Explore®  ¥50
- @向左转  ¥50
- @吴燕飞  ¥50
- @strive-ming  ¥10
- @MR.P  ¥16.66
- @不求来生  ¥6.60
- @羊刀  ¥6.66
- @Leo  ¥8.88
- @不摇碧莲  ¥6.66
- @天涯海角  ¥10
- @刚刚好  ¥5
- @Aptenodytes forsteri  ¥15
- @HHB  ¥30
- @Original  ¥88.88
- @半日  ¥10
- @狗狗踏青去了  ¥50
- @zzzzzzzz  ¥50
- @zzzzzzzz  ¥30
- @九尾之狐  ¥66.66
- @小小青尘  ¥50
