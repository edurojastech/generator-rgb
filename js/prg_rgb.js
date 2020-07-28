$(document).ready(()=>{
    $("#msgAlerta").hide()
    //get forms
    let valueR = document.getElementById("formRed")
    let valueG = document.getElementById("formGreen")
    let valueB = document.getElementById("formBlue")

    //get span id
    let corR = document.getElementById("corR")
    let corG = document.getElementById("corG")
    let corB = document.getElementById("corB")

    //get div exibirCor
    let exibirCor = document.querySelector("#exibirCor")
    exibirCor.style.display = 'none'


    function somenteNumeros(num) {
        var er = /[^0-9.]/;
        er.lastIndex = 0;
        var campo = num;
        if (er.test(campo.value)) {
        campo.value = "";
        }
    }


    function fnRGB(r, g, b){
        console.log(r, g, b)


        if(r == "" || g == "" || b == ""){
            // alert("Dado informado inválido!")
            exibirCor.style.display = 'none'
            $("#msgAlerta").show()
            $("#modalResultado").modal()
            $("#exampleModalLongTitle").text("Alerta!")

        }else if(r == "255" && g == "255" && b == "255"){
            exibirCor.classList.add("text-dark")
            exibirCor.classList.remove("text-white")
            exibirCor.style.display = 'block'
            $("#modalResultado").modal()
            $("#msgAlerta, #imgAlert").hide()
            $("#exampleModalLongTitle").text("Cor gerada!")
        }else{
            exibirCor.classList.add("text-white")
            exibirCor.classList.remove("text-dark")
            exibirCor.style.display = 'block'
            $("#modalResultado").modal()
            $("#msgAlerta, #imgAlert").hide()
            $("#exampleModalLongTitle").text("Cor gerada!")
        }
        corR.textContent = r; corG.textContent = g; corB.textContent = b
        exibirCor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

    $("#btnGerar").click(()=>{
        somenteNumeros(valueR)
        somenteNumeros(valueG)
        somenteNumeros(valueB)
        fnRGB(valueR.value, valueG.value, valueB.value)
    })

    $("#btnLimpar").click(()=>{
        location.reload()
    })
})