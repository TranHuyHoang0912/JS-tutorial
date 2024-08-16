let obj = {
    name: `hoang`,
    age: 18,
    address: `13 hcm`
};
let b = `address`;
obj.b = `12 hcm`;
console.log(`my name is`, obj.name, obj);
// {} ngoac nhon de khai bao object, doi tuong, () khai bao function
console.log(`my age is`, obj.age);
console.log(`address at`, obj[b]);
// dau ngoac vuong dung de khai bao neu do la hang so va ko thay doi