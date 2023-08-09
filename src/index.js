module.exports = function check(str, bracketsConfig) {
  // your solution
  let symbolOpen = {}   // Открыающие символы
  let symbolClose = []  // Закрывающие символы
  let stack = []        // Стэк обработки строки

  // Заполнить справочники открывающих и закрывающих символов
  for (i = 0; i < bracketsConfig.length; i++) {
    symbolOpen[bracketsConfig[i][0]] = bracketsConfig[i][1]
    symbolClose.push(bracketsConfig[i][1])
  }

  // Обработка строки (добавление в стэк, извлечение из стэка)
  for (i = 0; i < str.length; i++) {
    // Если символ открывающий
    if (symbolOpen[str[i]]) {
      // Является ли этот символ и закрывающим и такой же символ лежит на вершине стэка
      if (symbolOpen[str[i]] === str[i] && stack[stack.length - 1] === str[i]) {
        // удаляем символ из стэка
        stack.pop()
      } else {
        // добавляем символ в стэк
        stack.push(str[i])
      }
    } else {
      // является ли символ закрывающим
      if (symbolClose.includes(str[i])) {
        // Соответствует ли закрывающий символ открывающему
        if (symbolOpen[stack[stack.length - 1]] === str[i]) {
          // удаляем открывающий символ с вершины стэка
          stack.pop()
        } else {
          // Последовательность символов не соблюдена, выход из функции
          return false
        }
      }
    }
  }
  // При верной последовательности стэк должен быть пуст
  return (stack.length) ? false : true
}
