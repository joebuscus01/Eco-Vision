function ShowSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function HideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  const currentUser = localStorage.getItem("currentUser");
  const accountLink = document.getElementById("account-link");
  if (currentUser && accountLink) {
    accountLink.href = "account.html";
  }
});

// Search Products
const products = [
  { name: "Rest Day Oversized Tee", price: "$39.99", img: "images/oversizedmen.webp", fit: "Loose Fit", url: "clothing_template.html" },
  { name: "Short Sleeve Compression Shirt", price: "$29.99", img: "images/cs2.webp", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "Long Sleeve Compression Shirt", price: "$34.99", img: "images/cs1.avif", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "5' Inseam Training Shorts", price: "$29.99", img: "images/5inshorts.jpg", fit: "Regular Fit", url: "clothing_template.html" },
  { name: "Straight Fit Sweatpants", price: "$49.99", img: "images/Sweatsmen.avif", fit: "Loose Fit", url: "clothing_template.html" },
  { name: "Training Performance Set", price: "$74.99", img: "images/perfset.webp", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "Wide Leg Rest Day Sweatpants", price: "$24.99", img: "images/wideleg.jpg", fit: "Relaxed Fit", url: "clothing_template.html" },
  { name: "Performance Jacket", price: "$24.99", img: "images/gjacket.webp", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "5' Inseam Gym Shorts", price: "$29.99", img: "images/trngshorts.avif", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "EcoVision Everyday Sports Bra", price: "$79.99", img: "images/spbra.avif", fit: "Compression Fit", url: "clothing_template.html" },
  { name: "Eco-friendly Yoga Mat", price: "$49.99", img: "images/yoga_mat.jpg", fit: "", url: "more_template.html" },
  { name: "Biodegradable Resistance Bands", price: "$19.99", img: "images/resistance_bands.jpg", fit: "", url: "resistance_bands.html" },
  { name: "EcoVision Training Straps", price: "$14.99", img: "images/straps.jpg", fit: "", url: "more_template.html" },
  { name: "Everyday Sport Socks 3 Pairs", price: "$19.99", img: "images/socks.jpg", fit: "", url: "more_template.html" },
  { name: "Helmix X EcoVision Shaker Bottle", price: "$9.99", img: "images/shaker1.webp", fit: "", url: "more_template.html" }
];

// === SEARCH BAR FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsBox = document.getElementById("search-results");
  resultsBox.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

  if (!searchInput || !resultsBox) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    resultsBox.innerHTML = "";

    if (query === "") {
      resultsBox.style.display = "none";
      return;
    }

    const matched = products.filter(p => p.name.toLowerCase().includes(query));
    if (matched.length === 0) {
      resultsBox.innerHTML = "<p class='no-result'>No matching items</p>";
    } else {
      matched.forEach(product => {
        const item = document.createElement("div");
        item.className = "search-item";
        item.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <span>${product.name}</span>
        `;
        item.addEventListener("click", () => {
          storeproduct(product.name, product.price, product.img, product.fit);
          window.location.href = product.url;
        });
        resultsBox.appendChild(item);
      });
    }
    resultsBox.style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (!resultsBox.contains(e.target) && e.target !== searchInput) {
      resultsBox.style.display = "none";
    }
  });
});

// === DONATE DIALOG FUNCTIONS ===
function opendonate() {
  const dialog = document.getElementById("donation-dialog");
  dialog.showModal();
}

function closedonate() {
  const dialog = document.getElementById("donation-dialog");
  dialog.close();
  location.reload(); // reset dialog content
}

function submitDonation() {
  const input = document.getElementById("donate-input");
  const value = parseFloat(input.value);

  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  const formatted = value.toFixed(2);
  const dialog = document.getElementById("donation-dialog");

  dialog.innerHTML = `
    <button class="close-x" onclick="closedonate()">✖</button>
    <h1 class="thank-you">Thank you!</h1>
    <p class="thank-you-text">You donated <strong>$${formatted}</strong></p>
  `;
}
