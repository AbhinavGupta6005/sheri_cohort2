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
  let currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task List Is Empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");
    let sum = "";

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

    let mark0CompletedBtn = document.querySelectorAll(".task button");

    mark0CompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
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

    taskCheckbox.checked = false;
    taskInput.value = "";
    taskDetailsInput.value = "";
  });
}

todoList();

function dailyPlanner() {
  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var dayplanner = document.querySelector(".day-planner");

  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
  );

  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || "";
    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time">
                    <p>${elem}</p>
                <input id=${idx} type="text" placeholder="Write Here..." value=${savedData}>
                </div>`;
  });

  dayplanner.innerHTML = wholeDaySum;

  var dayplannerInput = document.querySelectorAll(".day-planner input");

  dayplannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      console.log("hello");
      dayPlanData[elem.id] = elem.value;
      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner()