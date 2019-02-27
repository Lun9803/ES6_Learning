// ES6可以通过codePointAt()正确识别32位的字符

// 1. 字符串遍历 for...of
console.log("1. 用for...of进行字符串遍历\n这样遍历还可以正确识别大于0XFFFF的字符")
for (var char of 'this is a string'){
    console.log(char);
}
console.log('\n');

// 2. 判断某字符串是否是目标字符串的开头，结尾，或包含
console.log('2.')
var text = "This is a string";
console.log(text.startsWith('T')); //true
console.log(text.startsWith('t')); //false 
// 可选第二个参数，表示开始检查的位置
console.log(text.startsWith(" ", 4)); //true

// 3. repeat()方法
console.log('3.');
console.log('single'.repeat(3)); //重复三次
console.log('single'.repeat(0)); //空字符串
// 参数是小数会直接取整数部分，不四舍五入
console.log('single'.repeat(5.9)); //重复5次

// 题外话：parseInt直接取证，需要四舍五入的话用Math.round();

// 4. 利用padStart()和padEnd()来选择在开头或结尾补齐字符串
console.log('\n4.')
var str = 'some text';
// 第一个参数为补齐后字符串总长度，如果小于源字符串长度，不会有变化
console.log(str.padStart(20, 'other text'));
console.log(str.padStart(5, 'nothing')); //无变化
console.log(str.padStart(50,'ad'));
// 省略第二个参数则会默认用空格补全
console.log(str.padStart(20));

// 5. 字符串内嵌入变量
console.log('\n5.');
var name = 'bob';
var greeting = 'how are you?';
// 这种字符串应用反引号表示
// 所有空格和换行都会被保留
console.log(`This is a sample of adding 
            varaibles in string, hi ${name}, ${greeting}`);
// 也可以调用方法
function hi(){
    return 123;
}
console.log(`${hi()}`); //这里返回的值为number 123，然后被转换为string
console.log(`${hi}`); //注意！如果没有括号的话，会返回函数的内容
