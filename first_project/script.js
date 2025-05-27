function openFeature() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var allfullElemBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      // console.log(elem.id);
      fullElemPage[elem.id].style.display = "block";
    });
  });

  allfullElemBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}

openFeature();

function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task List Is Empty");
  }

  function renderTask() {
    var allTask = document.querySelector(".allTask");
    var sum = "";

    currentTask.forEach(function (elem, idx) {
      sum =
        sum +
        `<div class="task">
  <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
  <button id=${idx}>Mark as Completed</button>
  </div>`;
    });

    allTask.innerHTML = sum;

    // stringify - change into object to Array form

    localStorage.setItem("currentTask", JSON.stringify(currentTask));


    document,querySelectorAll('.task button').forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1); // to remove the item using splice
        renderTask();
        location.reload();
      });
    });
  }
  renderTask();

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();

    taskCheckbox.checked = false
    taskInput.value = ''
    taskDetailsInput.value = ''
   
  });
}

todoList();


