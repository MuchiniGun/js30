
      //Want to listen for a key up event
      //Get element that you're listening for. using window so the we listen for the entire window
      //The event that we're listening for is called 'keydown'
      //Function that'll give us the event

      function playSound(e) {
        //seleciting an audio element, then using an attribute selector inside []
        //normally --> .querySelector('audio[data-key=65]') but we want to use it for multiple events of e not just one variable
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; //stops the function from running if a key that isn't assigned to an audio is played
        audio.currentTime = 0; //rewinds to the start
        audio.play();
        key.classList.add("playing"); //adds 'playing to the class of key
        //we also have .classList.remove() & .classList.toggle()
      }

      function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        //{this} is always equal to what got called against
        // in this case {this} = key
        // because key was called by .addEventListener // or .addEventListener was called against key
        this.classList.remove("playing");
      }

      const keys = document.querySelectorAll(".key");
      keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
      );

      window.addEventListener("keydown", playSound);
    