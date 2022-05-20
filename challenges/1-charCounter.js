function counter(str) {
  let obj = {}
  for (let item of str) {
    let char = item.toLowerCase()
    if (/[a-z0-9]/.test(char)) obj[char] = ++obj[char] || 1
  }

  return obj
}
let result = counter('zahra')
console.log(result)
'a'.charCodeAt()
