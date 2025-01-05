// Selecionar todos os botões com a classe "botoes_filtro"
var btns = document.getElementsByClassName("botoes_filtro");

// Função para mostrar ou esconder itens com base no filtro
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("itens");
  if (c == "all" || c == "") c = ""; // Mostrar todos os itens se o filtro for 'all' ou vazio
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show"); // Esconder todos os itens
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); // Mostrar os itens filtrados
  }
}

// Mostrar itens
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Esconder itens
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Adicionar eventos aos botões
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Verificar se o botão já está ativo
    if (this.classList.contains("active")) {
      // Se ativo, desativar
      this.classList.remove("active");
      filterSelection("all"); // Mostrar todos os itens novamente
    } else {
      // Se não está ativo, remover a classe "active" de outros botões
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      
      // Ativar o botão clicado
      this.classList.add("active");

      // Aplicar o filtro correspondente
      filterSelection(this.textContent.toLowerCase());
    }
  });
}

// Exibir todos os itens ao carregar a página
filterSelection("all");
