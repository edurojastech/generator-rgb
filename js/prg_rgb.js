$(document).ready(()=>{
    $("#msgAlerta").hide()
    //get forms
    const valueR = document.getElementById("formRed")
    const valueG = document.getElementById("formGreen")
    const valueB = document.getElementById("formBlue")
    const corRGB = document.getElementById("corRGB")

    //get div exibirCor
    const exibirCor = document.querySelector("#exibirCor")
    exibirCor.style.display = 'none'

    function somenteNumeros(num) {
        let er = /[^0-9.]/;
        er.lastIndex = 0;
        let campo = num;
        if (er.test(campo.value)) {
            campo.value = "";
        }
    }

    function fnRGB(r, g, b){
        const resultadoCor = `rgb(${r}, ${g}, ${b})`

        if(r == "" || g == "" || b == ""){
            // alert("Dado informado inválido!")
            exibirCor.style.display = 'none'
            $("#msgAlerta").show()
            $("#modalResultado").modal()
            $("#exampleModalLongTitle").text("Alerta!")

        }else if(r == "255" && g == "255" && b == "255"){
            corRGB.style.color = "black"
            exibirCor.classList.add("text-dark")
            exibirCor.classList.remove("text-white")
            exibirCor.style.display = 'block'
            $("#modalResultado").modal()
            $("#msgAlerta, #imgAlert").hide()
            $("#exampleModalLongTitle").text("Cor gerada!")
            $("#copiar").css("border", "1px solid black")
        }else{

            r = parseInt(r); g = parseInt(g); b = parseInt(b)

            if(r > 255 || g > 255 || b > 255){
                exibirCor.style.display = 'none'
                $("#msgAlerta").show()
                $("#modalResultado").modal()
                $("#exampleModalLongTitle").text("Alerta!")
            }else{
                r > 250 || g > 250 || b || 250
                    ? ($("#corRGB").css("color", "#000"), $("#corRGB").css("border", "solid 1px #000"))
                    : (exibirCor.classList.add("text-white"), exibirCor.classList.remove("text-dark"))
               
                exibirCor.style.display = 'block'
                $("#modalResultado").modal()
                $("#msgAlerta, #imgAlert").hide()
                $("#exampleModalLongTitle").text("Cor gerada!")
                $("#copiar").css("border", "1px solid whitesmoke")
            }
        }
        corRGB.value = resultadoCor
        exibirCor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        corRGB.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

    function clearForms(){
        valueR.value = ""
        valueG.value = ""
        valueB.value = ""
    }

    $("#btnGerar").click(()=>{
        somenteNumeros(valueR)
        somenteNumeros(valueG)
        somenteNumeros(valueB)
        fnRGB(valueR.value, valueG.value, valueB.value)
        clearForms()
    })

    $("#btnLimpar").click(()=>{
        clearForms()
    })

    function copiar() {
        let copyText = document.getElementById("corRGB");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert(`Color ${copyText.value} copy!`);
        $('#modalResultado').modal('hide')
    }
    
    $("#copiar").click(()=>{
        copiar()
    })
})
