let arrow = document.querySelector(".arrow_function");
let sideMenuContainer = document.querySelector(".side_menu");

let routes = document.querySelectorAll(".button_route");
let routeText = document.querySelectorAll(".route_text");

// routes.innerHTML = ""

let flag = true;

arrow.addEventListener("click", () => {
    if(flag){
        arrow.style.transform = "rotate(180deg)";
        arrow.style.left = "4%"

        sideMenuContainer.style.width = "5%"

        for (let i = 0; i < routeText.length; i++) {
            routeText[i].style.display = "none";
        }
    }else{
        arrow.style.transform = "rotate(0deg)";
        arrow.style.left = "13.8%"

        sideMenuContainer.style.width = "15%";

        for (let i = 0; i < routeText.length; i++) {
            routeText[i].style.display = "block";
        }
    }
    
    flag = !flag;
})

console.log(routeText);

