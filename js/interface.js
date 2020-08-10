$(document).ready(()=>{
    //App
    const app = {
        corpo: document.getElementById("app"),
        estilos: ["bgApp", "lead", "animated", "fadeIn"],
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
    const componenteImg = `<div class='mt-3'><img src="img/paint.png" class="img-fluid" width="100"/></div>`;
    const componenteTitle = `<div><h2 class="text-white lead mt-3">WebApp Color RGB</h2><hr class='mb-1 text-white bg-light'></div>`
    const formRed = componenteFomrRGB('formRed', 'Red');
    const formGreen = componenteFomrRGB('formGreen', 'Green');
    const formBlue = componenteFomrRGB('formBlue', 'Blue');
    const btnGerar = botoes('btnGerar', 'Gerar', 'img/up.png');
    const btnLimpar = botoes('btnLimpar', 'Limpar', 'img/delete.png');
    const boxResultado = modalResultado();
    const autorApp = "Eduardo Rojas"
    const linkAutor = "href='http://eduardorojas.com.br/'"
    const footer = `
        <div class="footer bg-dark pt-2 lead">
            <p>Desenvolvido por 
                <b> 
                    <a style='text-decoration: none; color: white;' 
                    ${linkAutor} target='_blank'>
                        <u>${autorApp}</u>
                    </a>
                </b>
            </p>
        </div>
    `

    // Inserindo os componentes
    const componentes = [
        componenteImg,
        componenteTitle,
        formRed,
        formGreen,
        formBlue,
        btnGerar,
        btnLimpar,
        boxResultado,
        footer
    ]

    // =============== Funções da aplicação ===============
    function componenteFomrRGB(idColor,color){
        return `
        <div class="form-group mt-2">
            <div class="col-12">
                <label class='lead text-white'>${color}:</label>
                <input type="email" class="form-control form-control-lg text-center" id=${idColor} placeholder="Ex: 255" maxlength="3">
            </div>
        </div>`
    }

    function botoes(idBtn, conteudo, img){
        return`
        <div class='mt-2'>
            <button type="button" class="btn btn-warning btn-lg mb-2" id="${idBtn}">
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
                                <input type='text' id="corRGB">
                                <br><br>
                                <span id="copiar">Copy</span>
                            </p>
                        </div>
                        <div id='msgAlerta' class="alert alert-dark text-center" role="alert">
                            Dados inválidos! <br> preencher com valores entre 0 e 255.
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