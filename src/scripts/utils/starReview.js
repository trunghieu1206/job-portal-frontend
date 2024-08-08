let stars = document.querySelectorAll('.js-star');
let output = document.querySelector('.js-star-output');

function gfg(n) {
	remove();

	for (let i = 0; i < n; i++) {
		stars[i].className = "star " + "js-star " + "display-color";
	};

	output.innerHTML = n;
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star " + "js-star";
		i++;
	}
}