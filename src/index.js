module.exports = function check(str, bracketsConfig) {
  // your solution
  let symbolOpen = {}
  let symbolClose = []

  console.log(`"${str}", [${bracketsConfig}]`)
  for (i = 0; i < bracketsConfig.length; i++) {
    symbolOpen[bracketsConfig[i][0]] = bracketsConfig[i][1]
    symbolClose.push(bracketsConfig[i][1])
    // console.log([bracketsConfig[i][1]])
  }

  console.log(symbolOpen)
  console.log(symbolClose)

  let stack = []
  for (i = 0; i < str.length; i++) {
    if (symbolOpen[str[i]]) {
      if (symbolOpen[str[i]] === str[i] && stack[stack.length - 1] === str[i]) {
        console.log("??", symbolOpen[str[i]] === str[i])
        console.log("--1", stack[stack.length - 1], str[i], stack[stack.length - 1] === str[i])
        stack.pop()
      } else {
        stack.push(str[i])
        console.log("++", stack[stack.length - 1], str[i])
      }
    } else {

      if (symbolClose.includes(str[i])) {
        if (symbolOpen[stack[stack.length - 1]] === str[i]) {
          console.log("--2", stack[stack.length - 1], str[i], stack[stack.length - 1] === str[i])
          stack.pop()
        } else {
          console.log("break");
          return false
        }
      // if (symbolOpen[str[i]]) {stack.push(str[i])}
      }
    }
    console.log("==", i, stack)

  //   if (str[i] === bracketsConfig[0][0]) {
  //     symbol[bracketsConfig[0][0]] += 1
  //     console.log(symbol)

  //   } else if (str[i] === bracketsConfig[0][1]){
  //     symbol[bracketsConfig[0][0]] -= 1
  //     console.log(symbol)
  //   }
  //   if (symbol[bracketsConfig[0][0]] < 0) {return false}

  }

  // for (i = 0; i < bracketsConfig.length; i++) {
  //   if (symbol[bracketsConfig[i][0]] !== 0) {return false}
  // }

  
  return (stack.length) ? false : true
}


const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];



fun = module.exports
console.log(fun('111115611111111222288888822225577877778775555666677777777776622222', config6))
