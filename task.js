let p = document.createElement("p")
p.innerText = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas sunt. Inventore recusandae beatae, maxime, esse nulla saepe illo dolore quidem nemo nesciunt officia consequatur. Quaerat quam assumenda animi eos? "
document.body.appendChild(p)
let btn = document.createElement("Button")
btn.innerText ="Show"
document.body.appendChild(btn)
let btn1 = document.querySelector("button")
let btn2 = document.createElement("button")
btn2.innerText ="Hide"
document.body.appendChild(btn2)
let btn3 = document.querySelector("button")
btn1.addEventListener('click',()=>{
    p.style.display = "block"
})
btn3.addEventListener('click',() =>{
    p.style.display = "none"
})