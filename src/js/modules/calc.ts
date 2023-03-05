
interface calc{
    size: string,
    material: string,
    option: string,
    promo: string,
    result: string
}


const calc = ({ size, material, option, promo, result }:calc) => {
    const sizeBlock = document.querySelector(size) as HTMLInputElement
    const materialBlock = document.querySelector(material) as HTMLInputElement
    const optionBlock = document.querySelector(option) as HTMLElement
    const promocodeBlock = document.querySelector(promo) as HTMLInputElement
    const resultlBlock = document.querySelector(result) as HTMLElement

    let sum: number = 0;

    const calcFunc = () => {
        sum = Math.round(
            Number(sizeBlock.value) * Number(materialBlock.value) + Number(optionBlock.value)
        );

        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultlBlock.textContent =
                "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "промокод") {
            resultlBlock.textContent =Math.round(sum * 0.7).toString()
        } else {
            resultlBlock.textContent = String(sum)
        }
    };

    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);
};

export default calc;
