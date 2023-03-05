const pictureSize = (imgWraperSelector: string) => {
    const imgWrapers: NodeListOf<HTMLElement> = document.querySelectorAll(imgWraperSelector)  

    function showImg(wrap:HTMLElement) {
        const img = wrap.querySelector("img") as HTMLImageElement
        img.src  = `${img.src.slice(0, -4)}-1.png` 
        wrap.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
            (p as HTMLElement).style.display = "none";
        });
    }

    function hideImg(wrap:HTMLElement) {
        const img = wrap.querySelector("img") as HTMLImageElement
        img.src = `${img.src.slice(0, -6)}.png`;
        wrap.querySelectorAll("p").forEach((p) => {
            p.style.display = "block";
        });
    }

    imgWrapers.forEach((wrapper:HTMLElement) => {
        wrapper.addEventListener("mouseover", () => {
            showImg(wrapper);
        });
        wrapper.addEventListener("mouseout", () => {
            hideImg(wrapper);
        });
    });
};
export default pictureSize;
