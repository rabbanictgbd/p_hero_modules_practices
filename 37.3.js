const products = [
    {sl:1 , name: "mobile", brand: "apple", price: 5000, color: "gray"},
    {sl:2, name: "mobile", brand: "samsung", price: 6000, color: "blue"},
    {sl:3 , name: "mobile", brand: "nokia", price: 7000, color: "red"},
    {sl:4 , name: "mobile", brand: "walton", price: 10000, color: "black"},
    {sl:5 , name: "mobile", brand: "apple", price: 20000, color: "black"},
    {sl:6 , name: "mobile", brand: "apple", price: 50000, color: "black"},
]

const productBrand = products.map(product => product.brand=="apple")
console.log(productBrand)
const productBrand2 = products.filter(product=> product.brand=="apple")
console.log(productBrand2)
// const productBrand2 = products.filter(product=> product.brand="apple")
// console.log(productBrand2)
const productPrice = products.filter(product=> product.price==7000)
console.log(productPrice)
const productColor = products.find(product=> product.color=="black")
console.log(productColor)
 products.forEach(product=> console.log(product.price>=7000) )
