// console.log(`hello world from html`);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let result = arr.filter((item, index) =>{
//     console.log(item,index)
// return item && item > 7;
// }
// )
// console.log(result);

let arr2 = 
[
    {name: `hoang`, age : 18},
    {name: `hoang`, age : 16},
    {name: `hoang`, age : 17},
    {name: `hoang`, age : 19},
]
let ageArr = arr2.filter((item, index) =>{
    console.log(item,index);
    return item && item.age === 18;
}
)
console.log(ageArr)

//find tim kiem va tra ve 1 elenment dau tien, filter loc tat ca