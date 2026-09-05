/* =========================
   LETTER CONTENT
========================= */

const letterText =
`If you're reading this, some time has passed since I built this little project.

I hope you're still curious.
Still learning.
Still building things simply because an idea seemed interesting.

Maybe you're a better developer now.
Maybe some things didn't go exactly as planned.

Either way, don't forget where you started.

Keep learning. Keep creating.

And most importantly — keep going.

— From your past self`;


let opened = false;

let typingStarted = false;


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  if (opened) {
    return;
  }

  opened = true;


  const envelope =
    document.getElementById(
      "envelope"
    );


  const hero =
    document.getElementById(
      "hero"
    );


  const hint =
    document.getElementById(
      "hint"
    );


  const letterSection =
    document.getElementById(
      "letterSection"
    );


  envelope.classList.add(
    "open"
  );


  hint.classList.add(
    "hide"
  );


  /*
    Fade the large title away
    after envelope starts opening
  */

  setTimeout(() => {

    hero.classList.add(
      "fade-away"
    );


    letterSection.classList.add(
      "focused"
    );

  }, 450);


  /*
    Start typewriter after
    opening animation finishes
  */

  setTimeout(() => {

    typeLetter();

  }, 1300);

}


/* =========================
   TYPEWRITER
========================= */

function typeLetter() {

  if (typingStarted) {
    return;
  }


  typingStarted = true;


  const message =
    document.getElementById(
      "message"
    );


  const button =
    document.getElementById(
      "continueButton"
    );


  message.textContent = "";

  message.classList.add(
    "typing"
  );


  let index = 0;

  const speed = 22;


  function type() {

    if (
      index <
      letterText.length
    ) {

      message.textContent +=
        letterText.charAt(
          index
        );


      index++;


      setTimeout(
        type,
        speed
      );

    }

    else {

      message.classList.remove(
        "typing"
      );


      button.classList.add(
        "show"
      );

    }

  }


  type();

}


/* =========================
   GO TO WRITER
========================= */

function finishLetter(event) {

  event.stopPropagation();


  const landingPage =
    document.getElementById(
      "landingPage"
    );


  const writerPage =
    document.getElementById(
      "writerPage"
    );


  landingPage.style.display =
    "none";


  writerPage.classList.remove(
    "hidden-page"
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  loadSavedLetter();

}


/* =========================
   BACK
========================= */

function goBack() {

  const landingPage =
    document.getElementById(
      "landingPage"
    );


  const writerPage =
    document.getElementById(
      "writerPage"
    );


  writerPage.classList.add(
    "hidden-page"
  );


  landingPage.style.display =
    "flex";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   SAVE LETTER
========================= */

function saveLetter() {

  const text =
    document
      .getElementById(
        "letterInput"
      )
      .value
      .trim();


  const date =
    document
      .getElementById(
        "futureDate"
      )
      .value;


  const message =
    document.getElementById(
      "saveMessage"
    );


  if (!text) {

    message.textContent =
      "Please write something before saving your letter.";

    return;

  }


  if (!date) {

    message.textContent =
      "Please choose a future date.";

    return;

  }


  const selectedDate =
    new Date(
      date + "T00:00:00"
    );


  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  if (
    selectedDate <= today
  ) {

    message.textContent =
      "Choose a date in the future.";

    return;

  }


  const savedLetter = {

    text: text,

    openDate: date,

    savedAt:
      new Date()
        .toISOString()

  };


  localStorage.setItem(
    "futureLetter",
    JSON.stringify(
      savedLetter
    )
  );


  message.textContent =
    "✨ Your letter has been saved.";


  loadSavedLetter();

}


/* =========================
   LOAD SAVED LETTER
========================= */

function loadSavedLetter() {

  const saved =
    localStorage.getItem(
      "futureLetter"
    );


  const card =
    document.getElementById(
      "savedLetter"
    );


  if (!saved) {

    card.classList.remove(
      "show"
    );

    return;

  }


  const data =
    JSON.parse(saved);


  const savedDate =
    document.getElementById(
      "savedDate"
    );


  const savedPreview =
    document.getElementById(
      "savedPreview"
    );


  const formattedDate =
    new Date(
      data.openDate +
      "T00:00:00"
    )
    .toLocaleDateString(
      undefined,
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );


  savedDate.textContent =
    "Open on: " +
    formattedDate;


  savedPreview.textContent =
    data.text;


  card.classList.add(
    "show"
  );

}


/* =========================
   DELETE LETTER
========================= */

function deleteLetter() {

  localStorage.removeItem(
    "futureLetter"
  );


  document
    .getElementById(
      "savedLetter"
    )
    .classList
    .remove(
      "show"
    );


  document
    .getElementById(
      "saveMessage"
    )
    .textContent =
    "Saved letter deleted.";

}


/* =========================
   BACKGROUND HEARTS
========================= */

function createHeart() {

  const container =
    document.getElementById(
      "backgroundHearts"
    );


  if (!container) {
    return;
  }


  const heart =
    document.createElement(
      "div"
    );


  heart.classList.add(
    "heart"
  );


  heart.textContent =
    "♡";


  heart.style.left =
    Math.random() *
    100 +
    "vw";


  heart.style.fontSize =
    Math.random() *
    20 +
    12 +
    "px";


  heart.style.animationDuration =
    Math.random() *
    5 +
    7 +
    "s";


  container.appendChild(
    heart
  );


  setTimeout(() => {

    heart.remove();

  }, 12000);

}


/* Create hearts */

setInterval(
  createHeart,
  950
);


/* =========================
   INITIAL SETUP
========================= */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
      Prevent selecting dates
      before tomorrow
    */

    const dateInput =
      document.getElementById(
        "futureDate"
      );


    const tomorrow =
      new Date();


    tomorrow.setDate(
      tomorrow.getDate() + 1
    );


    const minimumDate =
      tomorrow
        .toISOString()
        .split("T")[0];


    dateInput.min =
      minimumDate;

  }
);
