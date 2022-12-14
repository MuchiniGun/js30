
      // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with

      //Inventros is an object
      const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ];

      //people is an array of people (strings; "lastName, firstName") )
      const people = [
        "Bernhard, Sandra",
        "Bethea, Erin",
        "Becker, Carl",
        "Bentsen, Lloyd",
        "Beckett, Samuel",
        "Blake, William",
        "Berger, Ric",
        "Beddoes, Mick",
        "Beethoven, Ludwig",
        "Belloc, Hilaire",
        "Begin, Menachem",
        "Bellow, Saul",
        "Benchley, Robert",
        "Blair, Robert",
        "Benenson, Peter",
        "Benjamin, Walter",
        "Berlin, Irving",
        "Benn, Tony",
        "Benson, Leana",
        "Bent, Silas",
        "Berle, Milton",
        "Berry, Halle",
        "Biko, Steve",
        "Beck, Glenn",
        "Bergman, Ingmar",
        "Black, Elk",
        "Berio, Luciano",
        "Berne, Eric",
        "Berra, Yogi",
        "Berry, Wendell",
        "Bevan, Aneurin",
        "Ben-Gurion, David",
        "Bevel, Ken",
        "Biden, Joseph",
        "Bennington, Chester",
        "Bierce, Ambrose",
        "Billings, Josh",
        "Birrell, Augustine",
        "Blair, Tony",
        "Beecher, Henry",
        "Biondo, Frank",
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      ////We are taking the inventors and filter over them
      ////Filters work by passing a function through it that will loop through every item in our array
      //first doing the long way
      /*
        const fifteen = inventors.filter(function (inventor) {
          if (inventor.year >= 1500 && inventor.year < 1600) {
            return true; //means that we keep it //if we don't return something that is truthy, it will be discarded
          }
        });
        */
      ////same method but with an arrow function ( shorter way)
      //////you remove the word function, and you just leave the parameter and use =>
      ///////this way also does it all in one line, if both conditions are true then it returns true
      const fifteen = inventors.filter(
        (inventor) => inventor.year >= 1500 && inventor.year < 1600
      );

      /*
        console.log(fifteen); //displays the objects
        */
      //but we can display them in a table:
      console.log("Inventors born between 1500 and 1600:");
      console.table(fifteen);

      // Array.prototype.map()
      ////.map does something with an array and returns a new array of the same length
      // 2. Give us an array of the inventors first and last names
      const fullNames = inventors.map(
        (inventor) => `${inventor.first} ${inventor.last}`
      ); //we will return an inventor and his fullName

      console.log(`Full Names: \n${fullNames}`);

      // Array.prototype.sort()
      ////in JS you sort by returning 1 & -1
      // 3. Sort the inventors by birthdate, oldest to youngest
      /* long way
        const ordered = inventors.sort(function (a, b) {
          if (a.year > b.year) return 1;
          else return -1;
        });
        */

      ////here we use an itenerary operator
      const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

      console.log("Inventors ordered by birth year:");
      console.table(ordered);

      // Array.prototype.reduce()
      ////.reduce allows you to build something on top of the above methods
      //// it allows you to do this :
      // var totalYears = 0;

      // for(var i=0; i < inventors.length; i++) {
      //   totalYears += inventors[i].year;
      // }

      // conosle.log(totalYears);
      // 4. How many years did all the inventors live all together?
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0); //we add the , 0 for the total that was undefined so it actually adds it up and not return an object value

      console.log(totalYears);

      // 5. Sort the inventors by years lived
      const oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year;
        const firstGuy = b.passed - b.year;

        return lastGuy > firstGuy ? -1 : 1;
      });

      console.log("Inventors sorted by the oldest:");
      console.table(oldest);

      // // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // //////this excercise was run through the console on the website

      // const category = document.querySelector(".mw-category");
      // const links = [...category.querySelectorAll("a")]; //will return a node list of links
      // // 2 steps to show that you can call inside a dom object
      // //// could've said --> const category = document.querySelector(".mw-category a");

      // //it is still a node list and to use the map function, we need to convert it to an array
      // //can use to ways:
      // //we can wrap in Array.from():
      // //const links = Array.from(category.querySelectorAll("a"));
      // //or
      // //we can use something from es6 (es6 spread) and create in an array and use "..." to spread it accross an array:
      // //const links = [...category.querySelectorAll("a")];

      // //converting the list of links to a list of names
      // ////map: to take in a list of links and return a list of names
      // //long way:
      // // const de = links.map((link) => link.textContent);
      // //filtering the list of names
      // // de.filter((streetName) => streetName.includes("de"));

      // //short way:
      // const de = links
      //   .map((link) => link.textContent)
      //   //filtering the list of names
      //   .filter((streetNames) => streetNames.includes("de"));

      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(", ");
        const [bLast, bFirst] = nextOne.split(", ");
        return aLast > bLast ? 1 : -1;
      });

      console.table(alpha);

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = [
        "car",
        "car",
        "truck",
        "truck",
        "bike",
        "walk",
        "car",
        "van",
        "bike",
        "walk",
        "car",
        "van",
        "car",
        "truck",
      ];

      console.log("Question 8");
      const transportation = data.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});

      console.log(transportation);

      //Explanation of use of .reduce()
      ////we start with a blank object {}
      ////we first check if there is a 0 to work with at all and if not, we need to make an entry for it
      ////then we increment that
      ////that helps with the flexibility of adding a new entry in the object
    