const person={
    name: "Rabbani",
    age: 28,
    family: {
        father: "nazib",
        mother: "fatima"
    },
    country: "Bangladesh",
    
}

const jsonData=JSON.stringify(person)
const plainData=JSON.parse(jsonData)


console.log(person)
console.log(jsonData)
console.log(plainData)

const keys=Object.keys(person)
console.log(keys)
const values=Object.values(person)
console.log(values)

const products = [
    {sl:1 , name: "mobile", brand: "apple", price: 5000, color: "gray"},
    {sl:2, name: "mobile", brand: "samsung", price: 6000, color: "blue"},
    {sl:3 , name: "mobile", brand: "nokia", price: 7000, color: "red"},
    {sl:4 , name: "mobile", brand: "walton", price: 10000, color: "black"},
    {sl:5 , name: "mobile", brand: "apple", price: 20000, color: "black"},
    {sl:6 , name: "mobile", brand: "apple", price: 50000, color: "black"},
]

const newData={
    sl: 7,
    name: "mobile",
    brand: "redmi",
    price: 15000,
    color: "white"
}
console.log(newData)

const newArry= [products,newData]

console.log(newArry)

const newArry2= [...products,newData]
console.log(newArry2)

const filterNotBlack= products.filter(p=>p.color!="black")
console.log(filterNotBlack)

const newArry3=[newData,...filterNotBlack]
console.log(newArry3)