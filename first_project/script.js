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

openFeature()

function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currrentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task List Is Empty");
  }
  // let currentTask = [
  //   {
  //     task: "Mandir Jao",
  //     details: "Hanuman Ji ke Mandir",
  //     imp: true,
  //   },
  //   {
  //     task: "Recording Kro",
  //     details: "Cohort ke liye",
  //     imp: true,
  //   },
  //   {
  //     task: "Lunch at 2 PM",
  //     details: "Nahi to MUmmy Datengi",
  //     imp: false,
  //   },
  // ];

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

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
  }
  renderTask();

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();

    // location.reload();
  });

  var markCompletedBtn = document.querySelectorAll(".task button");

  markCompletedBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentTask.splice(btn.id, 1);
      renderTask();
      location.reload();
    });
  });
}
