const hexagonPanes = document.getElementById("hexagon-panes"),
	hexagonPrevious = document.getElementById("hexagon-previous"),
	hexagonNext = document.getElementById("hexagon-next"),
	navigationToggle = document.getElementById("navigation-toggle"),
	popup = document.getElementById("popup");

let activeSideIndex = 0,
	activeCardBox = hexagonPanes.children[activeSideIndex],
	yRotation = 0;
x = 0;

activeCardBox.classList.add("hexagon__pane--active");

function previousFace() {
	yRotation += 60;
	x = x + 1 >= 1 ? -5 : x + 1;
	const sideIndex = activeSideIndex == 0 ? 5 : --activeSideIndex;
	switchSide(sideIndex);
	setHexagonProperty("--hexagon-rotation-y", yRotation + "deg");
	setHexagonProperty("--hexagon-carousel-x", x);
}

function nextFace() {
	yRotation -= 60;
	x = x - 1 <= -6 ? 0 : x - 1;
	const sideIndex = activeSideIndex == 5 ? 0 : ++activeSideIndex;
	switchSide(sideIndex);
	setHexagonProperty("--hexagon-rotation-y", yRotation + "deg");
	setHexagonProperty("--hexagon-carousel-x", x);
}

function switchSide(sideIndex) {
	activeCardBox.classList.toggle("hexagon__pane--active");
	activeSideIndex = sideIndex;
	activeCardBox = hexagonPanes.children[activeSideIndex];
	activeCardBox.classList.toggle("hexagon__pane--active");
}

function setHexagonProperty(property, value) {
	hexagonPanes.style.setProperty(property, value);
}

function onNavLinkClick() {
	navigationToggle.checked = false;
}

function onPopupClick({ target }) {
	if (target.id == "popup") {
		window.location.href = "http://127.0.0.1:8080#section-professions";
	}
}
