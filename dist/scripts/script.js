const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 3);
			
			video.currentTime = video.duration * percentScrolled ;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");

registerVideo("#bound-two", "#bound-two video")

registerVideo("#bound-three", "#bound-three video")



document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});









const form = document.getElementById("fcf-form-id");
const formFeedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const formData = new FormData(form);

	// Use fetch to submit the form data to your PHP file
	fetch("/private/php/contact.php", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.text())
		.then((data) => {
			if (data === "success") {
				formFeedback.textContent = "Sending successful.";
				formFeedback.style.color = "green";
			} else {
				formFeedback.textContent = "Sending failed.";
				formFeedback.style.color = "red";
			}
			formFeedback.style.display = "block";
		});
});

