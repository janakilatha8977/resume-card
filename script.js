// Optional small interaction: pulse on hover for avatar
document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.querySelector(".avatar");
  if (!avatar) return;

  avatar.addEventListener("mouseenter", () => {
    avatar.style.boxShadow = "0 0 0 6px rgba(37, 117, 252, 0.25)";
  });
  avatar.addEventListener("mouseleave", () => {
    avatar.style.boxShadow = "none";
  });
});
