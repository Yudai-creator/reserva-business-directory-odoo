let bodyInfo = document.querySelector(".body_info");
let productsTab = document.querySelector(".products");
let companyDetails = document.querySelector(".company_details");


let tabAction = document.querySelector(".tab_action");

let overview = document.querySelector("#overview");

tabAction.addEventListener("click", () => {
    
    bodyInfo.style.display = "none"
    companyDetails.style.display = "none"

    productsTab.style.display = "block"
       
})

overview.addEventListener("click", () => {
    bodyInfo.style.display = "block"
    companyDetails.style.display = "block"

    productsTab.style.display = "none"
})


