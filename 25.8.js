const sec1= document.getElementById("c1")
const li= document.createElement("li")
li.innerText=("new item")
sec1.appendChild(li)

const mainContainer= document.getElementById("main-container")
const sec4= document.createElement("section")
mainContainer.appendChild(sec4)
const h1= document.createElement("h1")
h1.innerText=("New section by jS")
sec4.appendChild(h1)

const ul= document.createElement("ul")
sec4.appendChild(ul)

const li1= document.createElement("li")
li1.innerText=("item 1 by jS")
ul.appendChild(li1)

const li2= document.createElement("li")
li2.innerText=("item 2 by jS")
ul.appendChild(li2)

const li3= document.createElement("li")
li3.innerText=("item 3 by jS")
ul.appendChild(li3)


sec5= document.createElement("section")
sec5.innerHTML= `
<h1> Section by innerHTML </h1>
<ul>
<li> it 1</li>
<li> it 2</li>
</ul>
`
mainContainer.appendChild(sec5)
