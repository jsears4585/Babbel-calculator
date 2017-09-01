export function toExp(x) {
  let len = x.toString().length
  if (len > 10) {
    return x.toExponential(3)
  }
  return x
}
