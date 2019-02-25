// 一些简单的解构赋值例子

// 1. 解构赋值
var [a, b, c] = [1, 2, 3];
console.log('\n1: ');
console.log(a, b, c);

// 2. 右侧长度更长不报错，和上行一样输出
var [a, b, c] = [1, 2, 3, 4];
console.log('\n2: ');
console.log(a, b, c);

// 3. 如果长度更短缺少的为undefined
var [a, b, c] = [1, 2];
console.log('\n3: ');
console.log(a, b, c);

// 4. 类型可以不一样
var [a, b, c] = [1, '2', true];
console.log('\n4: ');
console.log(a, b, c);

// 5. 逗号之间可以是空白，以下例子c是true
var [, , c] = [1, '2', true];
console.log('\n5: ');
console.log(c);

// 6. ...代表rest，在之前的变量取到值之后，...后的变量会是一个存储了右侧剩余值得数组
// 如果没有剩余，则为一个空数组
var [head, mid, ...tail] = [1, true, 'a', 3, 'c'];
console.log('\n6: ');
console.log(head, mid, tail);

// 7. 不完全解构：只有一部分匹配
// 一下例子中a会匹配数组[1, 2]，而[b, c]不完全匹配[3, 4, 5]， b和c会分别被赋值3和4
var [a, [b, c], d] = [[1, 2], [3, 4, 5], 6]
console.log('\n7: ');
console.log(a, b, c, d);

// 8. 等号右边一定要是可遍历结构，否则报错，错误消息为 ... is not iterable
// var [a] = 1;
// var [a] = null;
// var [a] = false;
// var [a] = {};

// 9. 指定默认值，当一个成员严格等于undefined，默认值生效
// 默认值指定在最后，不然没啥意义
var [a = true] = [];
console.log('\n9.');
console.log('a:', a);
var [a, b=false] = [1, undefined];
console.log('a:', a, 'b:', b);
// 下面例子是默认值在中间的时候...毫无意义
var [a, b=false, c] = [1, 2];
console.log('a:', a, 'b:', b, 'c:', c);