const accordion = (triggers:string) => {
    const btns: NodeListOf<HTMLElement>= document.querySelectorAll(triggers);

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active-style"); // toggle  если класс есть, то он его убирает, если класса нет, то добавляет
    (this.nextElementSibling as HTMLElement).classList.toggle("active-content");

    (this.nextElementSibling as HTMLElement).style.maxHeight = this.classList.contains("active-style") ?
                `${(this.nextElementSibling as HTMLElement).scrollHeight}80px` : // если this.classList.contains("active-style") возр true
                `0`; // если this.classList.contains("active-style") возр false

        });
    });
};

export default accordion;

