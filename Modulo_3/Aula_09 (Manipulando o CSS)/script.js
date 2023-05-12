let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    const li = document.querySelector("li")
    console.log(li)
    li.style.backgroundColor = "#00F"
    li.style.color = "#fff"
    li.style.fontSize = "20px"
})

