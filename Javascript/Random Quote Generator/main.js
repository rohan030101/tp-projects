let quotes = [
  {
    authorName: "Elon Musk",
    quote: "Engineering is the closest thing to magic that exists in the world",
  },
  {
    authorName: "Satya Nadella",
    quote:
      "Our industry does not respect tradition – it only respects innovation.",
  },
  {
    authorName: "Sundar Pichai",
    quote:
      "For me, it matters that we drive technology as an equalizing force, as an enabler for everyone around the world",
  },
  {
    authorName: "Reed Hastings",
    quote:
      "Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.",
  },
  {
    authorName: "Mark Zuckerberg",
    quote:
      "The biggest risk is not taking any risk… In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks",
  },
  {
    authorName: "Tim Cook",
    quote:
      "Work takes on new meaning when you feel you are pointed in the right direction. Otherwise, it’s just a job, and life is too short for that.",
  },
  {
    authorName: "Michael Dell",
    quote:
      "You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.",
  },
  {
    authorName: "Dara Khosrowshahi",
    quote: "Desperation sometimes drives innovation.",
  },
  {
    authorName: "Jack Dorsey",
    quote:
      "Make every detail perfect and limit the number of details to perfect.",
  },
  {
    authorName: "Dan Schulman",
    quote:
      "One way to understand human progress is to look at how technology has made products and services – once reserved for the elite – progressively more accessible and affordable.",
  },
];

if (localStorage.getItem("quotes") == null) {
  localStorage.setItem("quotes", JSON.stringify(quotes));
  console.log(localStorage.getItem("quotes"));
} else {
  console.log("data exists");
}

let getLocalStorageQuote = JSON.parse(localStorage.getItem("quotes"));

//show quotes on button click
function showQuote() {
  let randomIndex = Math.random() * getLocalStorageQuote.length;
  console.log(parseInt(randomIndex));
  document.getElementById("displayQuote").innerText =
    getLocalStorageQuote[parseInt(randomIndex)].quote;
  document.getElementById("displayAuthorName").innerText =
    getLocalStorageQuote[parseInt(randomIndex)].authorName;
}

//add quote to existing localstorage
function addQuote() {
  let newQuote = document.getElementById("newQuote").value;
  let newAuthorName = document.getElementById("newAuthorName").value;

  let newLocalStorageQuote = {
    quote: newQuote,
    authorName: newAuthorName,
  };

  getLocalStorageQuote.push(newLocalStorageQuote);
  localStorage.setItem("quotes", JSON.stringify(getLocalStorageQuote));
}
