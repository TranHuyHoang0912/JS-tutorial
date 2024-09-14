// map dùng để tạo ra 1 array mới, nó cũng giống như vòng lặp for

let arr = [
    `hoang`,
    `huy`,
    `tran`
]

let consult = arr.map(
    (item)=>{
        return item + `123`;
    }
)
console.log(consult)