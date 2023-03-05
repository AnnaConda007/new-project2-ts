const filter = () => {
    const menu = document.querySelector(".portfolio-menu") as HTMLElement
    const menuItems:NodeListOf<HTMLLIElement>  = menu.querySelectorAll("li") //???
    const wrapperSample = document.querySelector(".portfolio-wrapper") as HTMLElement
    const noPortfolio = document.querySelector(".portfolio-no") as HTMLElement
    const allSample :NodeListOf<HTMLLIElement>= wrapperSample.querySelectorAll(".all")

    const createElement = (selectorName:string) => {
        const btn = menu.querySelector(selectorName) as HTMLElement
        btn.addEventListener("click", () => {
            filterFunc(selectorName);
        });
    };



    const filterFunc = (selector:string) => {
        const sample: NodeListOf<HTMLLIElement> | HTMLLIElement = wrapperSample.querySelectorAll(selector);
        allSample.forEach((sample) => {
            sample.style.display = "none";
            sample.classList.remove("animated", "fadeIn");
        });
        noPortfolio.style.display = "none";
        noPortfolio.classList.remove("animated", "fadeIn");

        if (selector != ".grandmother" && selector != ".granddad") {
            if (sample.length > 0) {
                sample[0].style.display = "block";
                sample[0].classList.add("animated", "fadeIn");
            } else if (sample != undefined) {
                sample.forEach((sample) => {
                    sample.style.display = "block";
                    sample.classList.add("animated", "fadeIn");
                });
            }
        } else {
            noPortfolio.style.display = "block";
            noPortfolio.classList.add("animated", "fadeIn");
        }
    };

    createElement(".all");
    createElement(".lovers");
    createElement(".chef");
    createElement(".girl");
    createElement(".guy");
    createElement(".granddad");
    createElement(".grandmother");

    menu.addEventListener("click", (e) => {
        const target = e.target as HTMLElement
        if (target && target.tagName == "LI") {
            menuItems.forEach((item) => item.classList.remove("active"));
            target.classList.add("active");
        }
    });
};

export default filter;
