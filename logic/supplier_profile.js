let bodyInfo = document.querySelector(".body_info");
let productsTab = document.querySelector(".products");
let certificationsTab = document.querySelector(".certifications")
let companyDetails = document.querySelector(".company_details");


let tabAction = document.querySelectorAll(".tab_action");

let overview = document.querySelector("#overview");

let isClicked = true;

for (let i = 0; i < tabAction.length; i++) {
    tabAction[0].addEventListener("click", () => {
        productsTab.style.display = "none";
        certificationsTab.style.display= "none";

        bodyInfo.style.display = "block";
        companyDetails.style.display = "block";
    })

    tabAction[1].addEventListener("click", () => {
        bodyInfo.style.display = "none";
        companyDetails.style.display = "none";
        certificationsTab.style.display= "none";

        productsTab.style.display = "block";
    })

    tabAction[2].addEventListener("click", () => {
        bodyInfo.style.display = "none";
        companyDetails.style.display = "none";

        productsTab.style.display = "none";

        certificationsTab.style.display= "block";
    })
}




