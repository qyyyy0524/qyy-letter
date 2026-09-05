let opened = false;

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


function openLetter() {

  if (opened) {
    return;
  }

  opened = true;

  const envelope =
    document.getElementById(
      "envelope"
    );

  const hint =
    document.getElementById(
      "hint"
    );

  envelope.classList.add(
    "open"
  );

  hint.style.opacity = "0";

  setTimeout(() => {
    typeLetter();
  }, 1200);
}


function typeLetter() {

  const message =
    document.getElementById(
      "message"
    );

  const button =
    document.getElementById(
      "continueButton"
    );

  let index = 0;

  const speed = 28;

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

    } else {

      button.classList.add(
        "show"
      );

    }
  }

  type();
}


function finishLetter(event) {

  event.stopPropagation();

  document.body.innerHTML = `
    <div class="final-screen">

      <h1>
        See you in the future. 🚀
      </h1>

      <p>
        This letter has been delivered.
      </p>

    </div>
  `;
}


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

  heart.textContent = "♡";

  heart.style.left =
    Math.random() * 100
    + "vw";

  heart.style.fontSize =
    Math.random() * 20
    + 12
    + "px";

  heart.style.animationDuration =
    Math.random() * 5
    + 6
    + "s";

  container.appendChild(
    heart
  );

  setTimeout(() => {
    heart.remove();
  }, 11000);
}


setInterval(
  createHeart,
  900
);
