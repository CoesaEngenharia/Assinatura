window.onload = function () {
  function generateImage() {
    // DECLARAÇÃO DE VARIÁVEIS
    const name = document.getElementById("name").value;
    const cargo = document.getElementById("cargo").value;
    const unidade = document.getElementById("unidade").value;
    const canvas = document.getElementById("canvas");
    const container = document.querySelector(".container-img");

    // Carrega as fontes
    Promise.all([
      document.fonts.load("700 50px GothamBold"),
      document.fonts.load("55px GothamLight"),
      document.fonts.load("55px Open Sans"),
    ]).then(() => {
      const imagem = new Image();
      imagem.src = "./marca50AnosHorizontal-04.png";
      imagem.addEventListener("load", () => {
        // Desenha a imagem no canvas

        // LARGURA E ALTURA DO CANVAS
        canvas.width = 454;
        canvas.height = 113;

        const ctx = canvas.getContext("2d");

        //DEFINIDO TAMANHO E COR
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // SAÍDA DO INPUT NOME
        ctx.font = "700 14px GothamBold";
        ctx.fillStyle = "#000000";
        ctx.fillText(`${name}`, 200, 45);

        // SAÍDA DO INPUT CARGO
        ctx.font = "12px GothamBold";
        ctx.fillStyle = "#000000";
        ctx.fillText(`${cargo} `, 200, 63);

        // SAÍDA DO INPUT UNIDADE
        const cargoWidth = ctx.measureText(cargo).width;
        ctx.font = "12px GothamLight";
        ctx.fillStyle = "#000000";
        ctx.fillText(` | ${unidade}`, 200 + cargoWidth, 63);

        // SITE COESA
        ctx.font = "12px GothamLight";
        ctx.fillStyle = "#004080";
        ctx.fillText("www.coesa.com.br", 200, 85);

        ctx.drawImage(imagem, 10, 19, 200, 83.45);

        // CONVERTENDO O CANVA EM IMAGEM
        const dataURL = canvas.toDataURL();
        const img = new Image();
        img.classList.add("img-ass");
        img.src = dataURL;
        img.height = 120;
        container.appendChild(img);
      });
    });

    // cria o elemento do botão de download
    const downloadBtn = document.createElement("button");
    downloadBtn.classList.add("bntDownload");
    downloadBtn.innerHTML = "Download da Imagem";

    // adiciona o ouvinte de evento para o botão
    downloadBtn.addEventListener("click", () => {
      // cria um elemento de link temporário para o download da imagem
      const link = document.createElement("a");
      link.download = "assinaturaCoesa.png";
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // adiciona o botão à página HTML
    container.appendChild(downloadBtn);
  }

  // Adiciona o evento de clique ao botão "Gerar assinatura"
  const generateButton = document.querySelector(".botao");
  generateButton.addEventListener("click", generateImage);
};
