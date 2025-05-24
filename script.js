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
  
const quotes = [
  "Carpe diem. Seize the day, boys. Make your lives extraordinary. — John Keating, Dead Poets Society (1989)",
  "Do, or do not. There is no try. — Yoda, Star Wars: Episode V – The Empire Strikes Back (1980)",
  "Every man dies, but not every man really lives. — William Wallace, Braveheart (1995)",
  "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it. — Ferris Bueller, Ferris Bueller's Day Off (1986)",
  "Our lives are defined by opportunities, even the ones we miss. — Benjamin Button, The Curious Case of Benjamin Button (2008)",
  "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it. — Atticus Finch, To Kill a Mockingbird (1962)",
  "It's what you do right now that makes a difference. — Struecker, Black Hawk Down (2001)",
  "Just because someone stumbles and loses their path, doesn't mean they're lost forever. — Professor X, X-Men: Days of Future Past (2014)",
  "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life. — Walter Mitty, The Secret Life of Walter Mitty (2013)",
  "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine. — Alan Turing, The Imitation Game (2014)",
  "You need to learn how to select your thoughts just the same way you select your clothes every day. — Richard, Eat Pray Love (2010)",
  "Why do we fall, sir? So that we can learn to pick ourselves up. — Alfred, Batman Begins (2005)",
  "Nobody is gonna hit as hard as life, but it ain't how hard you can hit. It's about how hard you can get hit and keep moving forward. — Rocky Balboa, Rocky Balboa (2006)",
  "No matter what anybody tells you, words and ideas can change the world. — John Keating, Dead Poets Society (1989)",
  "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. — Timo Cruz, Coach Carter (2005)",
  "I am the master of my fate: I am the captain of my soul. — Invictus (2009)",
  "We can't retract the decisions we've made. We can only affect the decisions we're going to make from here. — Nick Rice, Law Abiding Citizen (2009)",
  "When a defining moment comes along, you can do one of two things. Define the moment, or let the moment define you. — Roy McAvoy, Tin Cup (1996)",
  "Life and death are only temporary, but freedom goes on forever. — Lucille Vinson, Crazy in Alabama (1999)",
  "You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions: 'Have you found joy in your life?' 'Has your life brought joy to others?' — Carter Chambers, The Bucket List (2007)",
  "It is not our abilities that show what we truly are… it is our choices. — Dumbledore, Harry Potter and the Chamber of Secrets (2002)",
  "Hope is a good thing, maybe the best of things, and no good thing ever dies. — Andy Dufresne, The Shawshank Redemption (1994)",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. — Jordan Belfort, The Wolf of Wall Street (2013)",
  "Great men are not born great, they grow great. — Don Vito Corleone, The Godfather (1972)",
  "Don't let anyone ever make you feel like you don't deserve what you want. — Patrick Verona, 10 Things I Hate About You (1999)",
  "The greatest teacher, failure is. — Yoda, Star Wars: Episode VIII – The Last Jedi (2017)",
  "In every job that must be done, there is an element of fun. — Mary Poppins, Mary Poppins (1964)",
  "Beginnings are usually scary, and endings are usually sad. But it's everything in between that makes it all worth living. — Birdee Pruitt, Hope Floats (1998)",
  "It does not do to dwell on dreams and forget to live. — Dumbledore, Harry Potter and the Sorcerer's Stone (2001)",
  "You mustn't be afraid to dream a little bigger, darling. — Eames, Inception (2010)",
  "Why do we fall, sir? So that we can learn to pick ourselves up. — Alfred Pennyworth, Batman Begins (2005)",
  "It’s not who I am underneath, but what I do that defines me. — Bruce Wayne, Batman Begins (2005)",
  "There's a difference between knowing the path and walking the path. — Morpheus, The Matrix (1999)",
  "All we have to decide is what to do with the time that is given to us. — Gandalf, The Lord of the Rings: The Fellowship of the Ring (2001)",
  "Life is not the amount of breaths you take, it's the moments that take your breath away. — Alex 'Hitch' Hitchens, Hitch (2005)",
  "You get what you settle for. — Louise Sawyer, Thelma & Louise (1991)",
  "Fear is the mind-killer. — Paul Atreides, Dune (2021)",
  "The flower that blooms in adversity is the most rare and beautiful of all. — The Emperor, Mulan (1998)",
  "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind. — Morpheus, The Matrix (1999)",
  "The world ain't all sunshine and rainbows. It is a very mean and nasty place, and it will beat you to your knees and keep you there permanently if you let it. — Rocky Balboa, Rocky Balboa (2006)",
  "You have to do everything you can. You have to work your hardest, and if you stay positive, you have a shot at a silver lining. — Pat Solitano, Silver Linings Playbook (2012)",
  "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. — Albus Dumbledore, Harry Potter and the Sorcerer's Stone (2001)",
  "Of course it is happening inside your head, Harry, but why on earth should that mean it is not real? — Albus Dumbledore, Harry Potter and the Deathly Hallows - Part 2 (2011)",
  "I feel the need—the need for speed! — Pete 'Maverick' Mitchell, Top Gun (1986)",
  "Life is like a box of chocolates. You never know what you're gonna get. — Forrest Gump, Forrest Gump (1994)",
  "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am. — Terry Malloy, On the Waterfront (1954)",
  "Greed, for lack of a better word, is good. — Gordon Gekko, Wall Street (1987)",
  "Keep your friends close, but your enemies closer. — Michael Corleone, The Godfather Part II (1974)",
  "The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life. — Katsumoto, The Last Samurai (2003)",
  "I think a man does what he can, until his destiny is revealed. — Nathan Algren, The Last Samurai (2003)"
]


const quoteBox = document.getElementById("quoteBox");
const TOTAL_TYPING_TIME = 2000; // Total time for typing (2s)
const HOLD_TIME = 5000;          // Time to wait after typing finishes

function typeWriter(text, element, callback) {
  element.textContent = "";
  let i = 0;

  // Dynamically calculate speed so total time = TOTAL_TYPING_TIME
  //const speed = Math.max(10, TOTAL_TYPING_TIME / text.length);
  const speed = 30
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }

  type();
}

function cycleQuotes(index = 0) {
  const quote = quotes[index % quotes.length];
  typeWriter(quote, quoteBox, () => {
    setTimeout(() => {
      cycleQuotes(index + 1);
    }, HOLD_TIME);
  });
}

// Start the cycle
cycleQuotes();

