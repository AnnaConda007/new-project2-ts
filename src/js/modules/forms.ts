const forms = () => {
    const allForms:NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
    const allInputs:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const uploadInput:NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: "Загрузка....",
        success: "Спасибо, мы с вами свяжемся",
        failure: "Что-то пошло не так..",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png",
    };

    const path = {
        designer: "assets/server.php",
        question: "assets/question.php",
    };

    const clearAllInputs = () => {
        allInputs.forEach((input) => {
            input.value = "";
        });
        uploadInput.forEach((input) => {
          (  input.previousElementSibling as HTMLInputElement).textContent = "Файл не выбран";
        });
    };

    uploadInput.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.files && input.files.length > 0){
                console.log(input.files[0] );
                let dots;
                const arr = input.files[0].name.split(".");
                arr[0].length > 6 ? (dots = "...") : (dots = ".");
                const name = arr[0].substring(0, 6) + dots + arr[1];
               ( input.previousElementSibling as HTMLElement).textContent = name;
            }
        });
    });

    allForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessageDiv:HTMLElement = document.createElement("div");
            statusMessageDiv.classList.add("status");
            (form.parentNode as HTMLFormElement).appendChild(statusMessageDiv);

            form.classList.add("animated", "fadeOutUp");
            setTimeout(() => {
                form.style.display = "none";
            }, 400);

            const statusImg:HTMLElement = document.createElement("img");
            statusImg.setAttribute("src", message.spinner);
            statusImg.classList.add("animated", "fadeInUp");
            statusMessageDiv.appendChild(statusImg);

            const textMessage:HTMLElement = document.createElement("div");
            textMessage.textContent = message.loading;
            statusMessageDiv.appendChild(textMessage);

            const formData: FormData = new FormData(form) 
            let api:string;
            form.closest(".popup-design") || form.classList.contains("calc_form ")
                ? (api = path.designer)
                : (api = path.question);

            const data: object = {};
            formData.forEach((value, key) => (data[key] = value));
            console.log("data: ", JSON.stringify(data));

            const success = () => {
                console.log("success!");
                statusImg.setAttribute("src", message.ok);
                textMessage.textContent = message.success;
            };

            const error = () => {
                console.log("error!");
                statusImg.setAttribute("src", message.fail);
                textMessage.textContent = message.failure;
            };

            const variants = [error, success];
            variants[Math.floor(Math.random() * variants.length)]();

            clearAllInputs();

            setTimeout(() => {
                statusMessageDiv.remove();
                form.style.display = "block";
                form.classList.remove("fadeOutUp");
                form.classList.add("fadeInUp");
            }, 5000);
        });
    });
};

export default forms;
