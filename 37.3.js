const products = [
    {name: "mobile", brand: "apple", price: 5000, color: "gray"},
    {name: "mobile", brand: "samsung", price: 6000, color: "blue"},
    {name: "mobile", brand: "nokia", price: 7000, color: "red"},
    {name: "mobile", brand: "walton", price: 10000, color: "black"},
    {name: "mobile", brand: "apple", price: 20000, color: "black"},
    {name: "mobile", brand: "apple", price: 50000, color: "black"},
]

const productBrand = products.map(product => product.brand)
console.log(productBrand)