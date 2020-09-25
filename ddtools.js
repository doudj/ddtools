// V1.0 by doudouJ 
// description: a tool of javascript
// ## functions about Arrays

// func：一个数组是不是另一个数组的子集 # Is an array a subset of another array
function subSetOfArray(arr1, arr2) {
    // let a = [1,2,3,4,5,6,7,8];
    // let b = [3,2];
    // let c = [3,9];
    // console.log(subSetOfArray(a, b));
    // console.log(subSetOfArray(a, c));
    return arr2.every(val => arr1.includes(val));
}

// func：获取两个数组的交集 # get the intersection of two arrays
function intersectOfArrays(arr1, arr2) {
    return arr1.filter(function(val) {
        return arr2.indexOf(val) > -1
    });
}

// func: 获取两个数组的差集 # get the subtract of two arrays
function subtractOfArrays(arr1, arr2) {
    return arr1.filter(function(val) {
        return arr2.indexOf(val) == -1
    });
}

// func: 获取两个数组的并集 # get the union of two arrays
function unionOfArrays(arr1, arr2) {
    return arr1.concat(
        arr2.filter(function(val) {
            return arr1.indexOf(val) == -1
        })
    )
} 

// ==============================================================
// functions about date and time

// func: 获取昨天，今天，明天，一月前后，三月前后，半年前后日期字符串，分别传-1,0,1,-30,30,-90,90,-180,180
// get string of date about yesterday,today,tomorrow,one month ago/after,three months ago/after,half years age/after
function getDateStr(addDay) {
    var today = new Date();
    today.setDate(today.getDate() + addDay);
    var year = today.getFullYear();
    var month = (today.getMonth() + 1) < 10? "0"+(today.getMonth() + 1)
        : (today.getMonth + 1);
    var day = today.getDate() < 10? "0"+today.getDate() : today.getDate();
    return year + "-" + month + "-" + day;
}


// ==============================================================
// function about data compute/transfer

// func：科学计数法保留几位小数 # Scientific notation retains several decimal places
// console.log(retainDecimalNum(9e-7, 8));
function retainDecimalNum(number, n) {
    return number.toFixed(n);
}

// func: 字符串转换为数字 # Convert string to number
function stringToNumber(val) {
    return val - 0;
}

// func: 获取小数的整数部分的值，不管正负数 # Get the value of the integer part of the decimal, regardless of positive or negative
function getIntegerPart(number) {
    return number|0;
}

// ==============================================================
// other functions, like timer

// func: 定时任务，每三秒执行一次方法或javascript代码块 # timer,Execute method or javascript code block every three seconds
// setInterval(function() { console.log('doudouJ') }, 3000);

console.log(new Date().getDay())