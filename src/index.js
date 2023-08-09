module.exports = function check(str, bracketsConfig) {
  // your solution
  let symbol = {}
  for (i = 0; i < bracketsConfig.length; i++) {
    symbol[bracketsConfig[i][0]] = 0
  }

  for (i = 0; i < str.length; i++) {
    if (str[i] === bracketsConfig[0][0]) {
      symbol[bracketsConfig[0][0]] += 1
      console.log(symbol)

    } else if (str[i] === bracketsConfig[0][1]){
      symbol[bracketsConfig[0][0]] -= 1
      console.log(symbol)
    }
    if (symbol[bracketsConfig[0][0]] < 0) {return false}
  }

  for (i = 0; i < bracketsConfig.length; i++) {
    if (symbol[bracketsConfig[i][0]] !== 0) {return false}
  }

  return true
}

fun = module.exports
console.log(fun('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]))
