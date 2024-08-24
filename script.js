const text = document.querySelector(".animated-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Happy Birthday Adel!!";
            }, 0);

            setTimeout(() => {
                text.textContent = "Wish You The Best!";
            }, 4100);

            setTimeout(() => {
                text.textContent = "Enjoy Your Time!";
            }, 8000);
        }
        
textLoad();
setInterval(textLoad, 12000);