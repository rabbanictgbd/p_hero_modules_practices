const nayok={
    name: "Salman",
    id: 121,
    adress: "movie,cinema",
    car:{
        brand: "tesla",
        price: 5000000,
        isMercitice: true
    },
    friends: ["Sakib", "Apu", "Amir"],
    act: function hello(hi){
        console.log("acting is like Sakib Khan")
    },
Numbers: [20,30,40,50,50]
}


function add (num1,num2){
    console.log(arguments)
}
add(1,2,4,5,6,70)
// console.log(add(4,5))

console.log(nayok.friends)
console.log(nayok.friends[2])
console.log(nayok.act)
console.log(nayok.car)
console.log(nayok.car.brand)
console.log(nayok.name)
console.log(nayok.act())
