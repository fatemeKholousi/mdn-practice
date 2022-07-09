// mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// tutorial: https://regexlearn.com/learn/regex101

const p=/^\w+\.pdf$/
console.log(p.test("salam.pdf"))

const p1="/curious/gm"
console.log(p1.test("I have no special talents. I am only passionately curious"))
