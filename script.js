// script.js

// typewriter effect
// This code grabs the data-text from any element and animates it:
// html: <pre class="typewriter" data-text=">> Booting kernel..."></pre>
function typeWriterEffect(el, speed = 50) {
    const text = el.getAttribute("data-text");
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  window.addEventListener("load", () => {
    document.querySelectorAll(".typewriter").forEach(el => {
      if (el.hasAttribute("data-text")) {
        typeWriterEffect(el);
      }
    });
  });



// Highlight the active link in navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active-link");
      }
    });

  
// Lazy loading images
const lazyloadImages = document.querySelectorAll(".lazy-load");
    lazyloadImages.forEach(function (img) {
      img.setAttribute("src", img.getAttribute("data-src"));
    });
  });

//Lazy reveal
  document.querySelectorAll("figure").forEach(figure => {
    const img = figure.querySelector("img");
    const caption = figure.querySelector("figcaption");

    if (img && caption) {
      img.addEventListener("load", () => {
        caption.classList.add("visible");
      });

      // In case image is already cached and instantly available
      if (img.complete && img.naturalHeight !== 0) {
        caption.classList.add("visible");
      }
    }
  });
  


//pending links
document.querySelectorAll(".pending-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Stop the link from navigating
    alert("🚧 Temporarily unavailable — under maintenance.");
  });
});

  
// Preloader
  
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  });
  

//Toggle hide/show button
function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isHidden = details.classList.contains("hidden");
  
    if (isHidden) {
      details.classList.remove("hidden");
      button.textContent = "[-] Hide Details";
    } else {
      details.classList.add("hidden");
      button.textContent = "[+] Expand Details";
    }
  }
  
  
// Mouse wheel scroll feature in photo-gallery
 document.querySelectorAll('.photo-gallery').forEach(gallery => {
    gallery.addEventListener('wheel', function(e) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    });
  });
  


//JavaScript for random quote 
  
const quotes2 = [
  {
    text: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "John Keating, *Dead Poets Society* (1989)"
  },
  {
    text: "Do, or do not. There is no try.",
    source: "Yoda, *Star Wars: Episode V – The Empire Strikes Back* (1980)"
  },
  {
    text: "Every man dies, but not every man really lives.",
    source: "William Wallace, *Braveheart* (1995)"
  },
  {
    text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller, *Ferris Bueller's Day Off* (1986)"
  },
  {
    text: "Our lives are defined by opportunities, even the ones we miss.",
    source: "Benjamin Button, *The Curious Case of Benjamin Button* (2008)"
  },
  {
    text: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    source: "Atticus Finch, *To Kill a Mockingbird* (1962)"
  },
  {
    text: "It's what you do right now that makes a difference.",
    source: "Struecker, *Black Hawk Down* (2001)"
  },
  {
    text: "Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
    source: "Professor X, *X-Men: Days of Future Past* (2014)"
  },
  {
    text: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life.",
    source: "Walter Mitty, *The Secret Life of Walter Mitty* (2013)"
  },
  {
    text: "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
    source: "Alan Turing, *The Imitation Game* (2014)"
  },
  {
    text: "You need to learn how to select your thoughts just the same way you select your clothes every day.",
    source: "Richard, *Eat Pray Love* (2010)"
  },
  {
    text: "Why do we fall, sir? So that we can learn to pick ourselves up.",
    source: "Alfred, *Batman Begins* (2005)"
  },
  {
    text: "Nobody is gonna hit as hard as life, but it ain't how hard you can hit. It's about how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa, *Rocky Balboa* (2006)"
  },
  {
    text: "No matter what anybody tells you, words and ideas can change the world.",
    source: "John Keating, *Dead Poets Society* (1989)"
  },
  {
    text: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.",
    source: "Timo Cruz, *Coach Carter* (2005)"
  },
  {
    text: "I am the master of my fate: I am the captain of my soul.",
    source: "*Invictus* (2009)"
  },
  {
    text: "We can't retract the decisions we've made. We can only affect the decisions we're going to make from here.",
    source: "Nick Rice, *Law Abiding Citizen* (2009)"
  },
  {
    text: "When a defining moment comes along, you can do one of two things. Define the moment, or let the moment define you.",
    source: "Roy McAvoy, *Tin Cup* (1996)"
  },
  {
    text: "Life and death are only temporary, but freedom goes on forever.",
    source: "Lucille Vinson, *Crazy in Alabama* (1999)"
  },
  {
    text: "You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions: 'Have you found joy in your life?' 'Has your life brought joy to others?'",
    source: "Carter Chambers, *The Bucket List* (2007)"
  },
  {
    text: "It is not our abilities that show what we truly are… it is our choices.",
    source: "Dumbledore, *Harry Potter and the Chamber of Secrets* (2002)"
  },
  {
    text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    source: "Andy Dufresne, *The Shawshank Redemption* (1994)"
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    source: "Jordan Belfort, *The Wolf of Wall Street* (2013)"
  },
  {
    text: "Great men are not born great, they grow great.",
    source: "Don Vito Corleone, *The Godfather* (1972)"
  },
  {
    text: "Don't let anyone ever make you feel like you don't deserve what you want.",
    source: "Patrick Verona, *10 Things I Hate About You* (1999)"
  },
  {
    text: "The greatest teacher, failure is.",
    source: "Yoda, *Star Wars: Episode VIII – The Last Jedi* (2017)"
  },
  {
    text: "In every job that must be done, there is an element of fun.",
    source: "Mary Poppins, *Mary Poppins* (1964)"
  },
  {
    text: "Beginnings are usually scary, and endings are usually sad. But it's everything in between that makes it all worth living.",
    source: "Birdee Pruitt, *Hope Floats* (1998)"
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    source: "Dumbledore, *Harry Potter and the Sorcerer's Stone* (2001)"
  },
  {
    text: "You mustn't be afraid to dream a little bigger, darling.",
    source: "Eames, *Inception* (2010)"
  },
  {
    text: "It’s not who I am underneath, but what I do that defines me.",
    source: "Bruce Wayne, *Batman Begins* (2005)"
  },
  {
    text: "There's a difference between knowing the path and walking the path.",
    source: "Morpheus, *The Matrix* (1999)"
  },
  {
    text: "All we have to decide is what to do with the time that is given to us.",
    source: "Gandalf, *The Lord of the Rings: The Fellowship of the Ring* (2001)"
  },
  {
    text: "Life is not the amount of breaths you take, it's the moments that take your breath away.",
    source: "Alex 'Hitch' Hitchens, *Hitch* (2005)"
  },
  {
    text: "You get what you settle for.",
    source: "Louise Sawyer, *Thelma & Louise* (1991)"
  },
  {
    text: "Fear is the mind-killer.",
    source: "Paul Atreides, *Dune* (2021)"
  },
  {
    text: "The flower that blooms in adversity is the most rare and beautiful of all.",
    source: "The Emperor, *Mulan* (1998)"
  },
  {
    text: "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.",
    source: "Morpheus, *The Matrix* (1999)"
  },
  {
    text: "The world ain't all sunshine and rainbows. It is a very mean and nasty place, and it will beat you to your knees and keep you there permanently if you let it.",
    source: "Rocky Balboa, *Rocky Balboa* (2006)"
  },
  {
    text: "You have to do everything you can. You have to work your hardest, and if you stay positive, you have a shot at a silver lining.",
    source: "Pat Solitano, *Silver Linings Playbook* (2012)"
  },
  {
    text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    source: "Albus Dumbledore, *Harry Potter and the Sorcerer's Stone* (2001)"
  },
  {
    text: "Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?",
    source: "Albus Dumbledore, *Harry Potter and the Deathly Hallows – Part 2* (2011)"
  },
  {
    text: "I feel the need—the need for speed!",
    source: "Pete 'Maverick' Mitchell, *Top Gun* (1986)"
  },
  {
    text: "Life is like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump, *Forrest Gump* (1994)"
  },
  {
    text: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: "Terry Malloy, *On the Waterfront* (1954)"
  },
  {
    text: "Greed, for lack of a better word, is good.",
    source: "Gordon Gekko, *Wall Street* (1987)"
  },
  {
    text: "Keep your friends close, but your enemies closer.",
    source: "Michael Corleone, *The Godfather Part II* (1974)"
  },
  {
    text: "The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life.",
    source: "Katsumoto, *The Last Samurai* (2003)"
  },
  {
    text: "I think a man does what he can, until his destiny is revealed.",
    source: "Nathan Algren, *The Last Samurai* (2003)"
  }
];

const quotes = [
  {
    text: "The unexamined life is not worth living.",
    source: "Socrates"
  },
  {
    text: "I think, therefore I am.",
    source: "René Descartes"
  },
  {
    text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    source: "Jean-Paul Sartre" // His major works are pre-late 20th century.
  },
  {
    text: "He who has a why to live can bear almost any how.",
    source: "Friedrich Nietzsche"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    source: "Socrates"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    source: "Aristotle"
  },
  {
    text: "To be is to do.",
    source: "Socrates"
  },
  {
    text: "To do is to be.",
    source: "Jean-Paul Sartre" // Consistent with the above rationale.
  },
  {
    text: "To be or not to be, that is the question.",
    source: "William Shakespeare"
  },
  {
    text: "All that is solid melts into air.",
    source: "Karl Marx"
  },
  {
    text: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
    source: "John Milton"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi" // Died 1948, so fits the criteria.
  },
  {
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    source: "Victor Hugo"
  },
  {
    text: "Do not weep; do not wax indignant. Understand.",
    source: "Baruch Spinoza"
  },
  {
    text: "It is not what happens to you, but how you react to it that matters.",
    source: "Epictetus"
  },
  {
    text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    source: "Albert Einstein" // Died 1955, major work pre-late 20th.
  },
  {
    text: "The world is my representation.",
    source: "Arthur Schopenhauer"
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    source: "Lao Tzu"
  },
  {
    text: "Everything that exists is born for no reason, continues to exist through weakness, and dies by accident.",
    source: "Jean-Paul Sartre" // Consistent with above rationale.
  },
  {
    text: "Life must be understood backward; but it must be lived forward.",
    source: "Søren Kierkegaard"
  },
  {
    text: "To live is to suffer, to survive is to find some meaning in the suffering.",
    source: "Friedrich Nietzsche"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt" // Died 1962, so technically pre-late 20th.
  },
  {
    text: "We are too much accustomed to attribute to a single cause that which is the product of several, and, on the other hand, to attribute to several causes that which is the product of a single one.",
    source: "Auguste Comte"
  },
  {
    text: "The greatest test of courage on earth is to bear defeat without losing heart.",
    source: "Robert Green Ingersoll"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  },
  {
    text: "The soul is not in the body, but the body in the soul.",
    source: "Ralph Waldo Emerson"
  },
  {
    text: "One cannot step twice in the same river.",
    source: "Heraclitus"
  }
  // Added some classical and early modern thinkers to fill up the count
  ,
  {
    text: "No man's knowledge here can go beyond his experience.",
    source: "John Locke"
  },
  {
    text: "God is dead. God remains dead. And we have killed him.",
    source: "Friedrich Nietzsche"
  },
  {
    text: "What is rational is actual and what is actual is rational.",
    source: "G.W.F. Hegel"
  }
];


const quoteBox = document.getElementById("quoteBox");
const quoteText = document.getElementById("quoteText");
const quoteSource = document.getElementById("quoteSource");

const TOTAL_TYPING_TIME = 2000;
const HOLD_TIME = 3000;

function typeWriter(text, element, speed, callback) {
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

function showQuoteAtIndex(index) {
  const quote = quotes[index % quotes.length];
  // Dynamically calculate speed so total time = TOTAL_TYPING_TIME
  //const speed = Math.max(10, TOTAL_TYPING_TIME / quote.text.length);
  const speed = 50;
  quoteSource.innerHTML = `— <em>${quote.source}</em>`;

  typeWriter(quote.text, quoteText, speed, () => {
    setTimeout(() => showQuoteAtIndex(index + 1), HOLD_TIME);
  });
}

function showRandomQuoteFirst() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  showQuoteAtIndex(randomIndex);
}

// Start the quote cycle
showRandomQuoteFirst();
