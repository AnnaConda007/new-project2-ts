import { getResponse } from "./servises/reguest"
const showMoreStyles = (triger:string, wrapper:string) => {
    const btnMoreStyle = document.querySelector(triger) as HTMLElement


    btnMoreStyle.addEventListener("click", function () {
        getResponse("assets/db.json")
            .then(responseAfterFetch => createCards(responseAfterFetch.styles))
        this.remove()
    })


    function createCards(res:Array<{ src: string; title: string; link: string }>) {
        res.forEach(({ src, title, link }) => {
            const card: HTMLElement = document.createElement("div")
            card.classList.add("animated", "fedeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")
            card.innerHTML = `
            <div class="styles-block">
                <img src="${src}" alt>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
            `

      ( document.querySelector(wrapper) as HTMLElement).appendChild(card)

        });

    }






}
export default showMoreStyles