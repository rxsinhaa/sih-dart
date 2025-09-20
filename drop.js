document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("loaderModal");
  const enterBtn = document.getElementById("enterBtn");
  const body = document.body;

  // --- Page Load Logic ---
  // Show the pre-loader for 1.5 seconds, then fade it out.
  setTimeout(() => {
    modal.classList.add("hidden"); // Hide loader
    body.classList.add("loaded");    // Show main content
  }, 1500); // 1.5 seconds

  // --- Button Navigation Logic ---
  // The button now simply navigates to the classroom page.
  enterBtn.addEventListener("click", function() {
    // In a real application, this would go to a different page,
    // like "classroom.html"
    window.location.href = "index.html";
  });
});