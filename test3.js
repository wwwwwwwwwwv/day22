const readline =require('readline-sync')
// 1ft 당 3.5
// 300 * 200
const　perFeet = 3.5
try{
console.log("１피트당 샷시의 가격은 얼마인가요？")
const perFeat = parseFloat(readline.prompt())


}catch(e){
    console.log("잘못 입력했어요...")
}

console.log("가로길이는 얼마인가요? cm")
const width = parseInt(readline.prompt())

console.log("세로길이는 얼마인가요? cm")
const height = parseInt(readline.prompt())
//창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
const totalLength = (width * 2) + (height * 2)

//길이(cm) => ft
const totalFeet = Math.ceil(totalLength / 30.48)

console.log(totalFeet)
const totalPay = totalFeet * perFeet
console.log(`총 ${totalPay} 달러입니다.`)


