// alloc
const buf = Buffer.alloc(10)
// console.log(buf);

// allocUnfate
const buf_2 = Buffer.alloc(100)
// console.log(buf_2);

//from
const buf_3 = Buffer.from('hello')
const buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_3, buf_4);

