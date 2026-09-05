const introLetterText =
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


let introOpened = false;
let typingStarted = false;
let countdownInterval;


/* =========================
   INTRO LETTER
========================= */

function openIntroLetter() {

  if (introOpened) {
    return;
  }

  introOpened = true;


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

  const section =
    document.getElementById(
      "letterSection"
    );


  envelope.classList.add(
    "open"
  );

  hint.classList.add(
    "hide"
  );


  setTimeout(() => {

    hero.classList.add(
      "fade-away"
    );

    section.classList.add(
      "focused"
    );

  }, 450);


  setTimeout(() => {

    typeIntroLetter();

  }, 1300);

}


/* =========================
   INTRO TYPEWRITER
========================= */

function typeIntroLetter() {

  if (typingStarted) {
    return;
  }


  typingStarted = true;


  const message =
    document.getElementById(
      "introMessage"
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


  function type() {

    if (
      index <
      introLetterText.length
    ) {

      message.textContent +=
        introLetterText.charAt(
          index
        );

      index++;

      setTimeout(
        type,
        18
      );

    }

    else {

      message.classList.remove(
        "typing"
      );

      button.classList.add(
        "show"
      );

      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    }

  }


  type();

}


/* =========================
   OPEN WRITER PAGE
========================= */

function openWriter(event) {

  event.stopPropagation();


  document
    .getElementById(
      "landingPage"
    )
    .style
    .display =
    "none";


  document
    .getElementById(
      "writerPage"
    )
    .classList
    .remove(
      "hidden-page"
    );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  loadLetterState();

}


/* =========================
   GO BACK
========================= */

function goBack() {

  document
    .getElementById(
      "writerPage"
    )
    .classList
    .add(
      "hidden-page"
    );


  document
    .getElementById(
      "landingPage"
    )
    .style
    .display =
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
      "Please write something before sealing your letter.";

    return;

  }


  if (!date) {

    message.textContent =
      "Please choose a future date.";

    return;

  }


  const openDate =
    new Date(
      date +
      "T00:00:00"
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
    openDate <= today
  ) {

    message.textContent =
      "Choose a date in the future.";

    return;

  }


  const data = {

    text: text,

    openDate: date,

    savedAt:
      new Date()
        .toISOString()

  };


  localStorage.setItem(
    "futureLetter",
    JSON.stringify(
      data
    )
  );


  message.textContent =
    "🔒 Your letter has been sealed.";


  loadLetterState();

}


/* =========================
   LOAD CURRENT STATE
========================= */

function loadLetterState() {

  clearInterval(
    countdownInterval
  );


  const saved =
    localStorage.getItem(
      "futureLetter"
    );


  const writerCard =
    document.getElementById(
      "writerCard"
    );

  const lockedCard =
    document.getElementById(
      "lockedCard"
    );

  const readyCard =
    document.getElementById(
      "readyCard"
    );

  const openedCard =
    document.getElementById(
      "openedSavedLetter"
    );


  lockedCard.classList.remove(
    "show"
  );

  readyCard.classList.remove(
    "show"
  );

  openedCard.classList.remove(
    "show"
  );


  if (!saved) {

    writerCard.style.display =
      "block";

    return;

  }


  writerCard.style.display =
    "none";


  const data =
    JSON.parse(saved);


  const unlockDate =
    new Date(
      data.openDate +
      "T00:00:00"
    );


  const now =
    new Date();


  if (
    now >= unlockDate
  ) {

    showReadyState();

  }

  else {

    showLockedState(
      unlockDate
    );

  }

}


/* =========================
   LOCKED STATE
========================= */

function showLockedState(
  unlockDate
) {

  const lockedCard =
    document.getElementById(
      "lockedCard"
    );


  lockedCard.classList.add(
    "show"
  );


  document
    .getElementById(
      "unlockDate"
    )
    .textContent =
    "Open on: " +
    unlockDate.toLocaleDateString(
      undefined,
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );


  updateCountdown(
    unlockDate
  );


  countdownInterval =
    setInterval(
      () => {

        updateCountdown(
          unlockDate
        );

      },
      1000
    );

}


/* =========================
   READY STATE
========================= */

function showReadyState() {

  clearInterval(
    countdownInterval
  );


  document
    .getElementById(
      "lockedCard"
    )
    .classList
    .remove(
      "show"
    );


  document
    .getElementById(
      "readyCard"
    )
    .classList
    .add(
      "show"
    );

}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown(
  unlockDate
) {

  const now =
    new Date();


  const difference =
    unlockDate -
    now;


  if (
    difference <= 0
  ) {

    showReadyState();

    return;

  }


  const days =
    Math.floor(
      difference /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  const hours =
    Math.floor(
      (
        difference /
        (
          1000 *
          60 *
          60
        )
      ) %
      24
    );


  const minutes =
    Math.floor(
      (
        difference /
        (
          1000 *
          60
        )
      ) %
      60
    );


  const seconds =
    Math.floor(
      (
        difference /
        1000
      ) %
      60
    );


  document
    .getElementById(
      "countdownTime"
    )
    .textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

}


/* =========================
   OPEN SAVED LETTER
========================= */

function openSavedLetter() {

  const saved =
    localStorage.getItem(
      "futureLetter"
    );


  if (!saved) {
    return;
  }


  const data =
    JSON.parse(saved);


  const unlockDate =
    new Date(
      data.openDate +
      "T00:00:00"
    );


  if (
    new Date() <
    unlockDate
  ) {

    return;

  }


  document
    .getElementById(
      "readyCard"
    )
    .classList
    .remove(
      "show"
    );


  document
    .getElementById(
      "openedSavedLetter"
    )
    .classList
    .add(
      "show"
    );


  typeSavedLetter(
    data.text
  );

}


/* =========================
   SAVED LETTER TYPEWRITER
========================= */

function typeSavedLetter(
  text
) {

  const container =
    document.getElementById(
      "savedLetterContent"
    );


  container.textContent = "";

  container.classList.add(
    "typing"
  );


  let index = 0;


  function type() {

    if (
      index <
      text.length
    ) {

      container.textContent +=
        text.charAt(
          index
        );

      index++;

      setTimeout(
        type,
        20
      );

    }

    else {

      container.classList.remove(
        "typing"
      );

    }

  }


  type();

}


/* =========================
   DELETE LETTER
========================= */

function deleteLetter() {

  localStorage.removeItem(
    "futureLetter"
  );


  clearInterval(
    countdownInterval
  );


  document
    .getElementById(
      "letterInput"
    )
    .value =
    "";


  document
    .getElementById(
      "futureDate"
    )
    .value =
    "";


  document
    .getElementById(
      "saveMessage"
    )
    .textContent =
    "";


  document
    .getElementById(
      "savedLetterContent"
    )
    .textContent =
    "";


  loadLetterState();

}


/* =========================
   FLOATING HEARTS
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


setInterval(
  createHeart,
  950
);


/* =========================
   STARTUP
========================= */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    const input =
      document.getElementById(
        "futureDate"
      );


    const tomorrow =
      new Date();


    tomorrow.setDate(
      tomorrow.getDate() + 1
    );


    const year =
      tomorrow.getFullYear();


    const month =
      String(
        tomorrow.getMonth() + 1
      )
      .padStart(
        2,
        "0"
      );


    const day =
      String(
        tomorrow.getDate()
      )
      .padStart(
        2,
        "0"
      );


    input.min =
      `${year}-${month}-${day}`;

  }
);
