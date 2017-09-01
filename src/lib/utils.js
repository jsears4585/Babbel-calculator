export function toExp(x) {
  let len = x.toString().length
  if (len >= 9) {
    return x.toExponential(3)
  }
  return x
}

export function findAnswer(prev, op, next) {
  // doing this to avoid eval
  let num1 = parseFloat(prev)
  let num2 = parseFloat(next)
  let answer = 0
  switch(op) {
    case '+':
      answer = num1 + num2
      break;
    case '-':
      answer = num1 - num2
      break;
    case '/':
      answer = num1 / num2
      break;
    case '*':
      answer = num1 * num2
      break;
    default:
      console.log('Operation error')
  }
  return answer
}
