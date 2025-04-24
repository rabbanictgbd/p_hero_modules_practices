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


console.log(fValue2)