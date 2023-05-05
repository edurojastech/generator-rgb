$(document).ready(() => {
  //App
  const app = {
    corpo: document.getElementById("app"),
    estilos: ["bg-dark", "lead", "animated", "fadeIn"],
    activeClass() {
      this.estilos.forEach((element) => {
        this.corpo.classList.add(element);
      });
    },

    insertComponents(componente) {
      this.corpo.innerHTML = componente.join("");
    },
  };

  // componentes:
  const componenteImg = `<div><img src="img/paint.webp" class="img-fluid mt-5" width="100"/></div>`;
  const componenteTitle = `<div><h2 class="text-white lead">WebApp Color RGB</h2><hr class='text-white bg-light'></div>`;
  const formRed = componenteFomrRGB("formRed", "red");
  const formGreen = componenteFomrRGB("formGreen", "Green");
  const formBlue = componenteFomrRGB("formBlue", "Blue");
  const btnGerar = botoes("btnGerar", "Gerar");
  const btnLimpar = botoes("btnLimpar", "Limpar");
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
    boxResultado,
  ];

  // === Funções da aplicação ===
  function componenteFomrRGB(idColor, valueColor) {
    return `
        <div class="form-group mb-4">
            <div class="col-12">
                <input type="email" class="form-control form-control-lg text-center" id=${idColor} placeholder="Value ${valueColor}" maxlength="3">
            </div>
        </div>`;
  }

  function botoes(idBtn, conteudo) {
    return `
        <div class='mb-3'>
            <button type="button" class="btn btn-info btn-lg" id="${idBtn}">
                ${conteudo} 
            </button>
        </div>`;
  }

  function modalResultado() {
    return `
        <div class="modal fade" id="modalResultado" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Cor gerada</h5>
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
                    </div>
                </div>
            </div>
        </div>`;
  }

  function render() {
    app.activeClass();
    app.insertComponents(componentes);
    $("#btnGerar").click(() => {
      $("#modalResultado").modal();
    });
    $("#btnLimpar").click(() => {
      location.reload();
    });
  }

  //Função de renderização (principal)
  render();
});
