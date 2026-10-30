/* JEET.EXE crash feature: logic. Standalone: does not touch script.js */
(function () {
  var run = document.getElementById("jxRun");
  var load = document.getElementById("jxLoad");
  var fill = document.getElementById("jxFill");
  var pct = document.getElementById("jxPct");
  var lbl = document.getElementById("jxLbl");
  var ov = document.getElementById("jxOv");
  var why = document.getElementById("jxWhy");
  if (!run || !load || !ov) return;

  var title = document.querySelector(".hero-left h1");
  var computer = document.querySelector(".hero-right img");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;
  var running = false;

  var reasons = [
    "Reason: too many ideas, not enough sleep.",
    "Reason: tried to fix one bug, found five.",
    "Reason: overthinking.dll took 100% CPU.",
    "Reason: it worked yesterday. nobody knows why.",
    "Reason: a semicolon went on holiday.",
  ];

  // keep the dialog on top of everything
  document.body.appendChild(ov);

  function start() {
    if (running) return;
    running = true;
    run.classList.add("jx-hide");
    load.classList.remove("jx-hide");
    lbl.textContent = "LOADING JEET.EXE...";
    var p = 0;
    fill.style.width = "0";
    pct.textContent = "0%";
    timer = setInterval(function () {
      p += Math.random() * 9 + 2;
      if (p >= 93) {
        p = 93;
        clearInterval(timer);
        crash();
      }
      fill.style.width = p + "%";
      pct.textContent = Math.floor(p) + "%";
    }, 110);
  }

  function crash() {
    lbl.textContent = "ERROR: 93% AND THEN...";
    if (title && !reduce) {
      title.classList.remove("jx-crash");
      void title.offsetWidth;
      title.classList.add("jx-crash");
    }
    setTimeout(
      function () {
        why.textContent = reasons[Math.floor(Math.random() * reasons.length)];
        ov.classList.remove("jx-hide");
      },
      reduce ? 0 : 650,
    );
  }

  function close() {
    clearInterval(timer);
    ov.classList.add("jx-hide");
    load.classList.add("jx-hide");
    run.classList.remove("jx-hide");
    running = false;
  }

  run.addEventListener("click", start);
  document.getElementById("jxClose").addEventListener("click", close);
  document.getElementById("jxAgain").addEventListener("click", function () {
    close();
    start();
  });
  ov.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !ov.classList.contains("jx-hide")) close();
  });

  // the retro computer sticker also runs the program
  if (computer) {
    computer.classList.add("jx-clickable");
    computer.setAttribute("role", "button");
    computer.setAttribute("tabindex", "0");
    computer.setAttribute("title", "Run JEET.EXE");
    computer.addEventListener("click", start);
    computer.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        start();
      }
    });
  }
})();
