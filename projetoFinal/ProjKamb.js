var col1 = document.getElementById("col1")

var openPreTask = document.getElementById("addNewTask");

var formulario = document.getElementById("templatePreTask");


var delPreTask = document.getElementById("delPreTask");
var tituloPreTask = document.getElementById("tituloPreTask");
var conteudoPreTask = document.getElementById("conteudoPreTask");
var addTask = document.getElementById("addTask");








addTask.addEventListener("click", function () {
    formulario.style.display = "none";
    var tituloNewTask = tituloPreTask.value;
    var descricaoNewTask = conteudoPreTask.value;


    var conteudoTask =
        `
    <div id="templateTask" class="draggable">
    <div class="titlePlusButton">
        <p id="tituloTask">${tituloNewTask}</p>
        <div>
            <button>Edit</button>
            <button class="botao-excluir">Del</button>
        </div>
    </div>
    <p id="conteudoTask"> ${descricaoNewTask}</p>
    </div>
    `;
    col1.insertAdjacentHTML("beforeend", conteudoTask);



});


delPreTask.addEventListener("click", function () {
    formulario.style.display = "none";
});

openPreTask.addEventListener("click", function () {
    formulario.style.display = "flex";
    tituloPreTask.value = "";
    conteudoPreTask.value = "";
});

