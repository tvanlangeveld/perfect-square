

function perfectSquare(num){
  let newNum = Math.sqrt(num)
  newNum++
  let finalNum = newNum * newNum
  let notSquare = -1
  if((finalNum * 10) % 2 !== 0){
    return notSquare
  } else{
    return finalNum
  }
}




console.log(perfectSquare(9))
console.log(perfectSquare(289))
console.log(perfectSquare(3000))

