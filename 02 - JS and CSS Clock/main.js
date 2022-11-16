const secondHand = document.querySelector(".second-hand");
      const minuteHand = document.querySelector(".min-hand");
      const hoursHand = document.querySelector(".hour-hand");
      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        //basically converting seconds to degrees (base wise, so at x seconds the hand will be at x degrees)
        const secondsDegrees = (seconds / 60) * 360 + 90; //adding 90 because of the offset that we made in css
        //applying some styles to the second hand
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        console.log(`seconds: ${seconds}`);

        const minutes = now.getMinutes();
        const minutesDegrees = (minutes / 60) * 360 + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        console.log(`minutes: ${minutes}`);

        const hours = now.getHours();
        const hoursDegrees = (hours / 24) * 360 + 90;
        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
        console.log(`hours: ${hours}`);
      }

      //makes it run every second
      setInterval(setDate, 1000);

      setDate();