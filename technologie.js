    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".techListBtn");
        const content = document.querySelector(".content-tech p");
        const image = document.querySelector(".responsive-image");
        const span = document.querySelector(".content-tech span");

        // Function to handle button click
        function handleButtonClick(index) {
            const contents = [
                {
                    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                    imageSrc: "./assets/technology/image-launch-vehicle-portrait.jpg",
                    spanContent: "Launch Vehicle",
                    responsiveImage: "./assets/technology/image-launch-vehicle-landscape.jpg"
                },
                {
                    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                    imageSrc: "./assets/technology/image-space-capsule-portrait.jpg",
                    spanContent: "Space Capsule",
                    responsiveImage: "./assets/technology/image-space-capsule-landscape.jpg"
                },
                {
                    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                    imageSrc: "./assets/technology/image-spaceport-portrait.jpg",
                    spanContent: "Spaceport",
                    responsiveImage: "./assets/technology/image-spaceport-landscape.jpg"
                }
            ];

            // Update content based on button index
            content.textContent = contents[index].text;
            image.src = contents[index].imageSrc;
            span.textContent = contents[index].spanContent;
            
            // Update button classes
            buttons.forEach((button, i) => {
                if (i === index) {
                    button.classList.add("text-dark", "bg-white");
                    button.classList.remove("text-white", "bg-dark");
                } else {
                    button.classList.add("text-white", "bg-dark");
                    button.classList.remove("text-dark", "bg-white");
                }
            });

            // Update responsive image url in CSS
            const mediaQuery = window.matchMedia("(max-width: 768px)");
            if (mediaQuery.matches) {
                image.style.content = `url('${contents[index].responsiveImage}')`;
            } else {
                // Reset content property to empty string if the screen size is not small
                image.style.content = "";
            }
        }

        // Event listeners for buttons
        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                handleButtonClick(index);
            });
        });

        // Event listener for window resize
        window.addEventListener("resize", () => {
            const mediaQuery = window.matchMedia("(max-width: 768px)");
            if (mediaQuery.matches) {
                // Call handleButtonClick function with the current active button index
                const activeButton = document.querySelector(".techListBtn.active");
                if (activeButton) {
                    const index = Array.from(buttons).indexOf(activeButton);
                    handleButtonClick(index);
                }
            } else {
                // Reset content property to empty string if the screen size is not small
                image.style.content = "";
            }
        });

    });
