let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    const li = document.querySelector("li")

    if (li.classList.contains("teste")) {
        // li.classList.remove("teste")
        // li.classList.add("verde")
        li.classList.replace('teste', 'verde')


    } else {
        // li.classList.add("teste")
        // li.classList.remove("verde")
        li.classList.replace('verde', 'teste')
    }

    li.classList.toggle("branco")
    console.log(li)
})

