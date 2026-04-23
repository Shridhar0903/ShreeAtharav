function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    let revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      // ADD STAGGER DELAY (🔥 premium effect)
      el.style.transitionDelay = (index % 4) * 0.1 + "s";

      el.classList.add("active");
    } else {
      el.classList.remove("active");
      el.style.transitionDelay = "0s";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// =============================================================
// PRODUCTS DATA
// =============================================================

const products = [
  {
    title: "Fire Extinguishers",
    subtitle: "Portable Fire Suppression Equipment",
    desc: "High-performance fire extinguishers designed for quick response and effective control of fire hazards in residential, commercial, and industrial environments.",
    img: "images/extinguisher.png",
  },

  {
    title: "Hydrant System",
    subtitle: "High-Pressure Fire Fighting Network",
    desc: "Robust hydrant systems engineered for rapid emergency response, ensuring continuous water supply and efficient fire control in large facilities.",
    img: "images/hydrant.webp",
  },

  {
    title: "Sprinkler System",
    subtitle: "Automatic Fire Suppression System",
    desc: "Advanced sprinkler systems that activate automatically to detect and suppress fires at an early stage, minimizing damage and ensuring safety.",
    img: "images/fire-sprinkler.png",
  },

  {
    title: "Fire Alarm System",
    subtitle: "Intelligent Fire Detection & Alert",
    desc: "Smart fire alarm systems designed for early detection and instant alerts, helping prevent fire escalation and ensuring occupant safety.",
    img: "images/alarm.png",
  },

  {
    title: "Water Flow Control Valves",
    subtitle: "Precision Flow Control Solutions",
    desc: "Durable and reliable control valves designed to regulate water flow efficiently within fire protection systems for optimal performance.",
    img: "images/valve.webp",
  },

  {
    title: "Fire Safety Accessories",
    subtitle: "Complete Fire Protection Support",
    desc: "A wide range of accessories including hoses, nozzles, cabinets, and fittings to enhance and support complete fire safety system installations.",
    img: "images/accessories.jfif",
  },
];
// ============================================
function goToProduct(index) {
  window.location.href = `product.html?product=${index}`;
}
// =================================================
// PRODUCT CHANGE WITH SLIDE ANIMATION
// =============================================================

function changeProduct(index) {
  const wrapper = document.querySelector(".product-wrapper");

  wrapper.classList.remove("slide-in-right");
  wrapper.classList.add("slide-out-left");

  setTimeout(() => {
    // CHANGE CONTENT
    document.getElementById("title").innerText = products[index].title;
    document.getElementById("subtitle").innerText = products[index].subtitle;
    document.getElementById("description").innerText = products[index].desc;
    document.getElementById("productImage").src = products[index].img;

    // SLIDE NEW CONTENT FROM RIGHT
    wrapper.classList.remove("slide-out-left");
    wrapper.classList.add("slide-in-right");
  }, 450);

  // UPDATE ACTIVE LINE
  let lines = document.querySelectorAll(".line");

  lines.forEach((line) => line.classList.remove("active"));

  lines[index].classList.add("active");
}

// =================================================
//Customer Section
// =============================================================

const container = document.querySelector(".projects-panel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 300; // adjust as needed

nextBtn.addEventListener("click", () => {
  container.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
  container.scrollLeft -= scrollAmount;
});
