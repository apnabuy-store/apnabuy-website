const pincodeCityMap = {
  "444601": "Amravati",
  "444602": "Amravati",
  "444603": "Amravati",
  "444604": "Amravati",
  "444605": "Amravati",
  "444606": "Amravati"
};

function checkService() {
  const pin = document.getElementById("pincodeInput").value;
  const msg = document.getElementById("pincodeMessage");

  if (pin.length !== 6) {
    msg.style.color = "red";
    msg.innerText = "Please enter a valid 6-digit pincode.";
    return;
  }

  if (pincodeCityMap[pin]) {
    msg.style.color = "green";
    msg.innerText =
      `✅ Service available in ${pincodeCityMap[pin]}. Showing local shops…`;

    // NEXT STEP (Phase 2):
    // window.location.href = "shops.html?city=" + pincodeCityMap[pin];
  } else {
    msg.style.color = "red";
    msg.innerText =
      "❌ We are not live in your area yet. Expansion coming soon!";
  }
}
const data = {
  Amravati: {
    shops: [
      {
        id: "shree-mobile",
        name: "Shree Mobile Shop",
        area: "Rajkamal, Amravati",
        whatsapp: "919999999999",
        products: [
          {
            id: "realme-65w",
            name: "Realme 65W SuperDart Charger",
            price: 2499,
            image: "product.jpg",
            description:
              "Original Realme 65W SuperDart charger with fast and safe charging.",
            specs: {
              Power: "65W",
              Connector: "Type-C",
              Warranty: "Shop Warranty"
            }
          }
        ]
      }
    ]
  },

  Amravati: {
    shops: [
      {
        id: "city-electronics",
        name: "City Electronics",
        area: "Andheri, Amravati",
        whatsapp: "918888888888",
        products: [
          {
            id: "usb-c-cable",
            name: "USB-C Fast Charging Cable",
            price: 399,
            image: "product.jpg",
            description: "Durable fast charging USB-C cable.",
            specs: {
              Length: "1 Meter",
              Type: "USB-C",
              Warranty: "6 Months"
            }
          }
        ]
      }
    ]
  }
};

