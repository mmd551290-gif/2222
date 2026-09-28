(function () {
  "use strict";

  const targetUrl = "https://swapnodala.com/";

  // ব্যবহারকারীকে জানিয়ে তারপর redirect করা
  const message = document.createElement("p" );
  message.textContent = "আপনাকে নতুন পেজে নেওয়া হচ্ছে...";
  message.style.cssText =
    "font-family:Arial;text-align:center;margin:40px;font-size:18px;";

  if (document.body) {
    document.body.prepend(message);
  }

  setTimeout(function () {
    window.location.href = targetUrl;
  }, 3000);
})();
