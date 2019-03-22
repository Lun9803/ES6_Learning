// 给定一个url   使之反转 
// 段数不一定（尽量在原字符串直接操作）

// 完全反转 www.baidu.com -> moc.udiab.www
function swapUrlTotal(url){
    let initialLen = url.length;
    for(let i=initialLen-1; i>=0; i--){
        url = url.concat(url.charAt(i));
    }
    return url.slice(initialLen, url.length);
}

console.log(swapUrlTotal("www.baidu.com"));
console.log(swapUrlTotal("www.baidu.com/image/photos"));


// 只把顺序反转 www.baidu.com -> com.baidu.www
function swapUrlPartial(url){
    let reg = /(\S*)[.](\w*)/;
    let regFindDot = /[.]/;

    if(!regFindDot.test(url))return url;

    let subStr = "";
    for(let i=url.length; i>=0; i--){
        if(url.charAt(i)==".")subStr=url.slice(0, i);
    }
    
    return url.replace(reg, `$2.`+swapUrlPartial(subStr));
}

console.log(swapUrlPartial("www.baidu.com.123.321"));



