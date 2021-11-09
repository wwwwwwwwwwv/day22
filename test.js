
const readline =require('readline-sync')

// console.log("ODD EVEN")
// const answer = readline.prompt()
//
// console.log(answer)
//
// console.log(Math.PI)
//
// let circle = Math.pow(10, 20)
// console.log(circle * Math.PI)

// console.log(num)




// 주어진 데이터
const r1 = 10
const r2 = 20

// 원의 넓이
const area1 = Math.pow(r1, r2) * Math.PI
const area2 = Math.pow(r2, r2) * Math.PI

let gap = area1 - area2

// if 삼항연산자

// if(gap < 0)
// {
//     gap = gap * -1
// }

gap = gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

// console.log("이 도형의 넓이는" + gap + "입니다.")

console.log(`이 도형의 넓이는 ${gap} 입니다.`)