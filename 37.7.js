
const storageAdd = () => {
    const idValue= document.getElementById("id").value
const nameValue=    document.getElementById("name").value
    console.log(idValue)
console.log(nameValue)
const data={idValue,nameValue}
// localStorage.setItem(idValue,nameValue)
localStorage.setItem(idValue,JSON.stringify(data))
}

const storedItem= localStorage.getItem("1")
console.log(storedItem)

const plainData= JSON.parse(storedItem)
console.log(plainData)

function storageClear(){
    localStorage.clear()
}

// console.log(idValue)
// console.log(nameValue)