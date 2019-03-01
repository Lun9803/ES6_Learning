// 面试的时候一个题，当时问有没有想到用regex做，然鹅对regex还没咋应用过，就过了
// 题目是字符串标准化： 1234567890 -> 1,234,567,890   或者12345->12,345

function changeFormat(s){

    if(s.length<4){
        return s;
    }

    var remain = s.length % 3;

    // 如果不加这个if的话，刚好能被3整除的情况，head为空，tail为原来的字符串
    // 那么处理过后开头会多一个逗号
    if(remain == 0)remain = 3;
    var tail = s.slice(remain,s.length);
    var head = s.slice(0, remain);

    // 注意要用（）括起来，表示分组，才能用后续的$1
    var reg = /(\d{3})/g;
    var newTail = tail.replace(reg,',$1');
    return head+newTail;
}

console.log(changeFormat('123412412512'));
console.log(changeFormat('1234567890'));
console.log(changeFormat('1'));