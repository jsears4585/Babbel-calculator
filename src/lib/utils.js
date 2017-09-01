export function toExp(x) {
  let len = x.toString().length
  if (len > 10) {
    return x.toExponential(3)
  }
  return x
}

export function findAnswer(prev, op, next) {
  // doing this to avoid eval
  let num1 = parseInt(prev, 10)
  let num2 = parseInt(next, 10)
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
