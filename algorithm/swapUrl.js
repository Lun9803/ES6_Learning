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
function findNextDotIndex(url, startIndex){
    for(let i=startIndex-1; i>=0; i--){
        if(i==0)return 0;
        if(url.charAt(i)=='.')return i;
    }
}

function swapUrlPartial(url){
    let originalLength = url.length;
    let startIndex = url.length;
    while(true){
        let nextDotIndex = findNextDotIndex(url, startIndex);
        if(nextDotIndex!=0){
            url = url.concat(url.slice(nextDotIndex, startIndex));
        }
        if(nextDotIndex==0){
            url = url.concat(".", url.slice(nextDotIndex, startIndex));
            break;
        }
        startIndex = nextDotIndex;
    }
    return url.slice(originalLength+1, url.length);
}

console.log(swapUrlPartial("www.baidu.com.123.321"));
console.log(swapUrlPartial("www.12412.1.1.0"));



