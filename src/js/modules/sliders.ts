
interface SliderProps {
    slideItems: string;
    dir: string;
    prevButton: string;
    nextButton: string;
  }
  const sliders = ({ slideItems, dir, prevButton, nextButton }: SliderProps) => {
  
    let indexOfShowSlide: number = 1;
    let pausesetInterval;
    const allSlides: NodeListOf<HTMLElement> = document.querySelectorAll(slideItems) 

    const showSlides = (numOfshowingSlide:number) => {
        if (numOfshowingSlide > allSlides.length) {
            indexOfShowSlide = 1;
        }
        if (numOfshowingSlide < 1) {
            indexOfShowSlide = allSlides.length; 
        }
        allSlides.forEach((slide) => {
            slide.classList.add("animated"); 
            slide.style.display = "none ";
        });
        allSlides[indexOfShowSlide - 1].style.display = "block"; 
    }
    showSlides(indexOfShowSlide);

    const nextSlide = (UnitOfСhange:number) => {
        indexOfShowSlide += UnitOfСhange;
        showSlides(indexOfShowSlide);
    }
    try {
        const prevBtn = document.querySelector(prevButton) as HTMLElement;
        const nextBtn = document.querySelector(nextButton)as HTMLElement;

        prevBtn.addEventListener("click", () => {
            nextSlide(-1);
        });

        nextBtn.addEventListener("click", () => {
            nextSlide(1);
        });
    } catch (e) { }

    const activAutoslider = () => {
        if (dir === "vertical") {
       pausesetInterval = setInterval(() => {
            nextSlide(1);
            allSlides[indexOfShowSlide - 1].classList.add("slideInDown");
        }, 3000);
        } else {
            pausesetInterval = setInterval(() => {
                nextSlide(1);
            }, 3000);
        }
    }
    activAutoslider();
    (allSlides[0].parentNode as HTMLElement).addEventListener("mouseenter", () => {
        clearInterval(pausesetInterval);
    });
    (allSlides[0].parentNode as HTMLElement).addEventListener("mouseleave", () => {
        activAutoslider();
    });
};
export default sliders;
