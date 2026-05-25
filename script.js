// script.js


// typewriter effect
// This code grabs the data-text from any element and animates it:
// html: <pre class="typewriter" data-text=">> Booting kernel..."></pre>
function typeWriterEffect(el, speed = 10) {
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
function getCurrentPageName() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path.split("/").pop() || "index.html";
}

function highlightActiveNavLink(retryCount = 0) {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = getCurrentPageName();

  if (!navLinks.length) {
    if (retryCount < 20) {
      setTimeout(() => highlightActiveNavLink(retryCount + 1), 50);
    }
    return;
  }

  navLinks.forEach(link => {
    const linkPath = (link.getAttribute("href") || "").split("#")[0];
    link.classList.toggle("active-link", linkPath === currentPath);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Lazy loading images
  const lazyloadImages = document.querySelectorAll(".lazy-load");
  lazyloadImages.forEach(function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
  });

  const navPlaceholder = document.getElementById("nav-placeholder");

  // nav.html is fetched asynchronously on every page, so watch for it to appear
  if (navPlaceholder) {
    const observer = new MutationObserver(() => {
      highlightActiveNavLink();
    });

    observer.observe(navPlaceholder, { childList: true, subtree: true });

    // Try immediately too, in case nav is already present
    highlightActiveNavLink();

    // Stop observing once links are available and highlighted
    window.addEventListener("load", () => {
      highlightActiveNavLink();
      observer.disconnect();
    }, { once: true });
  } else {
    highlightActiveNavLink();
  }
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
      button.textContent = "[-] Hide";
    } else {
      details.classList.add("hidden");
      button.textContent = "[+] Expand";
    }
  }

  
// Mouse wheel scroll feature in photo-gallery
 document.querySelectorAll('.photo-gallery').forEach(gallery => {
    gallery.addEventListener('wheel', function(e) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    });
  });

// Mouse wheel scroll feature in ascii

const asciiBlocks = document.querySelectorAll('.ascii');

asciiBlocks.forEach(block => {
    block.addEventListener('wheel', (evt) => {
        // Only trigger if the content is actually wide enough to scroll
        if (block.scrollWidth > block.clientWidth) {
            evt.preventDefault(); // Stop the main page from scrolling down
            block.scrollLeft += evt.deltaY; // Move the block sideways instead
        }
    }, { passive: false });
});

// Back to top button

const scrollBtn = document.getElementById("terminalTopBtn");

if (scrollBtn) {
    // Show button when user scrolls down 400px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Smooth scroll to top on click
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


//JavaScript for random quote 
  
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
    text: "What is rational is actual and what is actual is rational.",
    source: "G.W.F. Hegel"
  }
];


const quoteBox = document.getElementById("quoteBox");
const quoteText = document.getElementById("quoteText");
const quoteSource = document.getElementById("quoteSource");

const TOTAL_TYPING_TIME = 1000;
const HOLD_TIME = 4000;

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
  const speed = 20;
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
