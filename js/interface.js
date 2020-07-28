$(document).ready(()=>{
    //App
    const app = {
        corpo: document.getElementById("app"),
        estilos: ["bg-dark", "lead", "animated", "fadeIn"],
        activeClass(){
            this.estilos.forEach(element => {
                this.corpo.classList.add(element);
            });
        },

        insertComponents(componente){
            this.corpo.innerHTML = componente.join('');
        }
    }

    // componentes:
    const componenteImg = `<div class='mt-5'><img src="img/paint.png" class="img-fluid" width="100"/></div>`;
    const componenteTitle = `<div><h2 class="text-white lead mt-3">WebApp Color RGB</h2><hr class='mb-4 text-white bg-light'></div>`
    const formRed = componenteFomrRGB('formRed', 'red');
    const formGreen = componenteFomrRGB('formGreen', 'Green');
    const formBlue = componenteFomrRGB('formBlue', 'Blue');
    const btnGerar = botoes('btnGerar', 'Gerar', 'img/up.png');
    const btnLimpar = botoes('btnLimpar', 'Limpar', 'img/delete.png');
    const boxResultado = modalResultado();

    // Inserindo os componentes
    const componentes = [
        componenteImg,
        componenteTitle,
        formRed,
        formGreen,
        formBlue,
        btnGerar,
        btnLimpar,
        boxResultado
    ]

    // === Funções da aplicação ===
    function componenteFomrRGB(idColor, valueColor){
        return `
        <div class="form-group mb-4">
            <div class="col-12">
                <input type="email" class="form-control form-control-lg text-center" id=${idColor} placeholder="Value ${valueColor}" maxlength="3">
            </div>
        </div>`
    }

    function botoes(idBtn, conteudo, img){
        return`
        <div class='mb-3'>
            <button type="button" class="btn btn-warning btn-lg" id="${idBtn}">
                ${conteudo} <img src="${img}" class="img-fluid" width="30">
            </button>
        </div>`
    }

    function modalResultado(){
        return`
        <div class="modal fade" id="modalResultado" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <img id='imgAlert' src="img/alert.png" width="40" class="img-fluid"/>
                            <span id="exampleModalLongTitle"></>
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="exibirCor">
                            <p class="text-center p-2" style="font-weight: 900;">
                                rgb(<span id="corR">R</span>, <span id="corG">G</span>, <span id="corB">B</span>)
                            </p>
                        </div>
                        <div id='msgAlerta' class="alert alert-dark text-center" role="alert">
                            Dados inválidos!
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }

    function render(){
        app.activeClass()
        app.insertComponents(componentes)
    }

    //Função de renderização (principal)
    render()
})