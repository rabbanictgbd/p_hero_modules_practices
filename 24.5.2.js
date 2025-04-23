function matchedProducts( products, search){
    const mached=[]
    for( const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            mached.push(product)
        }
    }
    return mached
}

const products=[
    {id: 1, name: "LG MOBILE", company: "lg"},
    {id: 2, name: "Walton Mobile", company: "walton"},
    {id: 3, name: "samsung mobile", company: "samsung"},
    {id: 4, name: "Dell LAPTOP", company: "dell"},
    {id: 5, name: "HP Laptop", company: "hp"},
    {id: 6, name: "samsung laptop", company: "samsung"},
]

console.log(matchedProducts(products, "mobile"))
console.log(matchedProducts(products, "MOBILE"))