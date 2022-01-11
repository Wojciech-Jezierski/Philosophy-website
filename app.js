const btnScrollToTop = document.querySelector(".scrollTop");

        btnScrollToTop.addEventListener("click", function () {
            // window.scrollTo(0, 0);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

            // $("html, body").animate({ scrollTop: 0 }, "slow");
        });