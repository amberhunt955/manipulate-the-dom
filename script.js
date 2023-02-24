let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Welcome!"
  console.log(mainTitle);

  // Part 2

  const body = document.querySelector("body");
  body.style.backgroundColor = "#add8e6";

  // Part 3

  const faveThingsList = body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
  faveThingsList.lastElementChild.remove();

  // Part 4

  const specialTitle = document.querySelectorAll(".special-title");
  console.log(specialTitle);
  specialTitle.forEach( (title) => {
    title.style.fontSize = "2rem";
  }) 

  // Part 5

  const pastRacesList = document.getElementById("past-races");
  pastRacesList.childNodes.forEach( (pastRace) => {
    if (pastRace.textContent === "Chicago") {
      pastRace.remove();
      return;
    }
  })

  // Part 6

  const li = document.createElement("li");
  li.textContent = "Toronto"
  pastRacesList.appendChild(li);
  console.log(pastRacesList);

  // Part 7

  const div = document.createElement("div");
  div.classList.add("blog-post");
  div.classList.add("purple");

  const h1 = document.createElement("h1");
  h1.textContent = li.textContent;
  div.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "Another race!";
  div.appendChild(p);

  const mainDiv = document.querySelector(".main");
  mainDiv.appendChild(div);

  // Part 8

  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote)

  // Part 9

  const allBlogPosts = document.querySelectorAll(".blog-post");

  allBlogPosts.forEach( (blogPost) => {
    blogPost.addEventListener("mouseleave", function(event) {
        event.target.classList.toggle("purple");
        event.target.classList.toggle("red");
        console.log("LEAVING purple toggle");
    })

    blogPost.addEventListener("mouseenter", function(event) {
      event.target.classList.toggle("purple");
      event.target.classList.toggle("red");
        console.log("ENTERING red toggle");
    })
  })

  
});
