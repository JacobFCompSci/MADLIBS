// Event Listener

document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

document.getElementById("mad-lib-btn2").addEventListener("click", buildMadLib2);
// Event Function

function buildMadLib() {
  // Input

  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let noun2 = document.getElementById("noun2").value;
  let city = document.getElementById("city").value;
  //  Process
  let result = ` "There are too many ${pluralNoun} on this ${adjective} airplane!", I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem." Then the captain told me : "Im gonna put us down in ${city}", but once we landed there was a ${noun2} waiting for us!`;

  document.getElementById("html-bg").style.backgroundImage =
    "url(images/plane.jpg)";
  document.getElementById("response").style.fontFamily = "Helvetica";
  document.getElementById("response").style.border = "2px solid orange";
  document.getElementById("head1").style.color = "midnightBlue";
  document.getElementById("head2").style.color = "midnightBlue";
  document.getElementById("instructions").style.background = "gray";
  document.getElementById("instructions").style.color = "black";
  document.getElementById("mad-lib-btn").style.background = "skyblue";
  document.getElementById("mad-lib-btn2").style.background = "skyblue";
  document.getElementById("head2-div").style.color = "midnightBlue";
  document.getElementById("info").style.color = "midnightblue";
  // Output

  document.getElementById("response").innerHTML = result;
}

function buildMadLib2() {
  // Input

  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let noun2 = document.getElementById("noun2").value;
  let city = document.getElementById("city").value;
  //  Process
  let result2 = `"We are surrounded by ${pluralNoun} in this ${adjective} catacomb!" I pleaded, then the tour guide said "Im going to ${verb} this ${noun} and get us out of here." with my luck, there will be a ${noun2} once we get into the streets of ${city}! `;

  // Output

  document.getElementById("response").innerHTML = result2;
}

document
  .getElementById("mad-lib-btn2")
  .addEventListener("click", changeMadLib2);

function changeMadLib2() {
  document.getElementById("html-bg").style.backgroundImage =
    "url(images/tomb.jpeg)";
  document.getElementById("response").style.fontFamily = "Papyrus";
  document.getElementById("response").style.border = "2px solid maroon";
  document.getElementById("instructions").style.background = "gold";
  document.getElementById("instructions").style.color = "maroon";
  document.getElementById("head1").style.color = "maroon";
  document.getElementById("head2").style.color = "maroon";
  document.getElementById("mad-lib-btn").style.background = "gold";
  document.getElementById("mad-lib-btn2").style.background = "gold";
  document.getElementById("head2-div").style.color = "maroon";
  document.getElementById("info").style.color = "red";
}
