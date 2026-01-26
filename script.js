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

