function openMenu(x){
	x.classList.toggle("change")
	$(".mobile-nav-options").toggle("change")
	$(".mobile-nav-options").css("display", "grid")
}

window.sr = ScrollReveal();
sr.reveal('.section-type-1', {origin:'right', duration: 2000});
sr.reveal('.section-type-2', {origin:'right', duration: 2000});
sr.reveal('.section-type-3', {origin:'right', duration: 2000});
sr.reveal('.section-type-4', {origin:'right', duration: 2000});
sr.reveal('.section-type-5', {origin:'right', duration: 2000});
sr.reveal('.section-type-6', {origin:'right', duration: 2000});