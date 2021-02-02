function scrollTo(element) {
    const offsetTop = document.getElementById(element.getAttribute("href")).offsetTop;

    scroll({
      top: offsetTop - 100,
      behavior: "smooth"
    });
}

const links = document.querySelectorAll("#navbar ul li a, #home-arrow");
for (const link of links) {
    document.getElementById(link.getAttribute("id")).addEventListener("click", function(event){
        event.preventDefault();
        scrollTo(this);
    });
}