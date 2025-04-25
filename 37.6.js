const fValue1=false
const fValue2=""
const fValue3=0
const fValue4=-0
// const fValue5=

const tValue=true
const tValue2="abc"
const tValue3=123
const tValue4=-123
const tValue5={}
const tValue6=[]
const tValue7="123"

if(fValue1){
    console.log("the value is truthy")
}else{
    console.log("the value is falsy")
};

console.log(fValue1)
console.log(tValue)

fValue1?console.log("value is "+true):console.log("value is "+false)
fValue2?console.log("value is "+true):console.log("value is "+false)
fValue3?console.log("value is "+true):console.log("value is "+false)
fValue4?console.log("value is "+true):console.log("value is "+false)

tValue?console.log("value is "+true):console.log("value is "+false)
tValue2?console.log("value is "+true):console.log("value is "+false)
tValue3?console.log("value is "+true):console.log("value is "+false)
tValue4?console.log("value is "+true):console.log("value is "+false)
tValue5?console.log("value is "+true):console.log("value is "+false)
tValue6?console.log("value is "+true):console.log("value is "+false)
tValue7?console.log("value is "+true):console.log("value is "+false)


const min=10
const max=50

min>=10 && max<=40?console.log("truthy"):console.log("falsy")
min>=10 || max<=40?console.log("truthy"):console.log("falsy")

const result = min>10 && min<50? "true con": "false con"
console.log(result)

const isActive=true
isActive?console.log("show user green"): console.log("hide user")

const showUser= ()=>console.log("show green user")
const hideUser= ()=>console.log("show red user")

isActive?showUser():hideUser()
isActive && showUser()
isActive || hideUser()