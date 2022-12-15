const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

/* const goToTop = () => {
    
  }; */



const goToTop = () => {

    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  backToTopButton.addEventListener("click", goToTop)

  const menu_btn = document.querySelector(".menu-btn");
  const close_btn = document.querySelector(".close-btn");
  const menu = document.querySelector(".menu");
  const drawer = menu.querySelector(".drawer");
  const blank = menu.querySelector(".blank");
  const body = document.querySelector("body");
  const close = () => {
    menu.classList.remove("blur");
    drawer.classList.remove("drawer-visible");
    body.classList.remove("body");
  };
  
  menu_btn.addEventListener("click", (e) => {
    menu.classList.add("blur");
    drawer.classList.add("drawer-visible");
    body.classList.add("body");
  });
  
  close_btn.addEventListener("click", (e) => {
    close();
  });
  
  blank.addEventListener("click", (e) => {
    close();
  });
  
  Array.from(drawer.querySelectorAll("a")).forEach((element) => {
    element.addEventListener("click", () => {
      close();
    });
  });