const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
	const isOpen = mainNav.classList.toggle("open");
	menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".view-btn").forEach(button => {
	button.addEventListener("click", () => {
		alert("Driver profile view coming soon.");
	});
});
