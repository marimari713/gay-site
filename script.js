const images = [
	'url("/images/choucho110.png")',
	'url("/images/choucho17.png")',
	'url("/images/kirakira52.png")',
	'url("/images/kirakira56.png")',
	'url("/images/kirakira90-.png")',
	'url("/images/koakuma3-22.png")',
	'url("/images/koakuma3-24.png")',
	'url("/images/moriyoru11.png")',
	'url("/images/moriyoru12.png")',
	'url("/images/moriyoru13.png")',
	'url("/images/moriyoru15.png")',
	'url("/images/okumono_animalb10.png")',
	'url("/images/okumono_animalb12.png")',
	'url("/images/okumono_animalb14.png")',
	'url("/images/rhombus-48-.png")',
	'url("/images/rhombus-55.png")',
	'url("/images/splatter1.png")',
	'url("/images/splatter22.png")',
	'url("/images/splatter24.png")',
	'url("/images/splatter3.png")',
	'url("/images/splatter5.png")',
	'url("/images/succubus10.png")',
	'url("/images/succubus11.png")',
	'url("/images/succubus12.png")',
	'url("/images/succubus13.png")',
	'url("/images/succubus16.png")',
	'url("/images/succubus17.png")',
	'url("/images/succubus18.png")',
	'url("/images/succubus19.png")',
	'url("https://applesause.nekoweb.org/images/ribbon216.png")',
	'url("https://applesause.nekoweb.org/images/yamikawa51.png")',
	'url("https://applesause.nekoweb.org/images/yokunai35.png")',
];

document.addEventListener("DOMContentLoaded", () => {
	// Set a random background image
	const randomImage = images[Math.floor(Math.random() * images.length)];
	document.body.style.backgroundImage = randomImage;

	// Function to set random source for image elements with data-random-image
	const setRandomImageSrc = (selector) => {
		const imgElements = document.querySelectorAll(selector);
		imgElements.forEach((img) => {
			if (img.hasAttribute("data-random-image")) {
				const sources = img.dataset.randomImage.split(" ");
				const randomSource =
					sources[Math.floor(Math.random() * sources.length)];
				img.setAttribute("src", randomSource);

				// Log the random source for debugging
				console.log("Selected random source:", randomSource);
			}
		});
	};

	// Apply random images to both image elements
	setRandomImageSrc("img[data-random-image]");
});

const maskImages = [
	"url(/images/icons/masks/tumblr_46dcb246275a16f0f8e3e02ccbee3b7a_01a56811_500.png)",
	"url(/images/icons/masks/fates%20bloom%20mask.png)",
	"url(/images/icons/masks/tumblr_e7d6368aa48ab5c395e62b52d8da4f3a_83adc2f7_1280.png)",
	"url(/images/icons/masks/tumblr_dfbd02a333acb5281b368d0737e5c60c_fb037d07_1280.png)",
	"url(/images/icons/masks/tumblr_df1e79fff73db969f74deae4603b46a2_e7a8b6ee_1280.png)",
	"url(/images/icons/masks/tumblr_47c4a0fcbfcab65cfc6b8a5d33dd5522_2cf8d317_500.webp)",
	"url(/images/icons/masks/tumblr_9048dd613bfa06d279a42aa63ab00043_71d5c876_1280.png)",
	"url(/images/icons/masks/tumblr_9034322c380ef47ff1a2b93eb4e944e6_583d88f2_1280.png)",
	"url(/images/icons/masks/custom1.png)",
	"url(/images/icons/masks/mask24.png)",
	"url(/images/icons/masks/owomask.png)",
	"url(/images/icons/masks/fuckingbullshit.png)",
	"url(/images/icons/masks/owomincemeat.png)",
	"url(/images/icons/masks/efniafnaifnaifna.png)",
	"url(/images/icons/masks/fgaefafwafafafggegngs.png)",
	"url(/images/icons/masks/pojijiuh.png)",
	"url(/images/icons/masks/ookok.png)",
	"url(/images/icons/masks/kokihyubuhybg.png)",
];
document.addEventListener("DOMContentLoaded", () => {
	const randomMask =
		maskImages[Math.floor(Math.random() * maskImages.length)];
	const icon = document.querySelector(".icon");

	if (icon) {
		icon.style.maskImage = randomMask;
	} else {
		console.warn("No element with class 'icon' found.");
	}
	console.log(randomMask);
});

// break, delete if things break
