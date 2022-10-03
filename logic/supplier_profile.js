let bodyInfo = document.querySelector(".body_info");

let profileEditFields = document.querySelector(".profile_edit_fields")
let editFirstCol = document.querySelector(".features_first_column");
let editSecondCol = document.querySelector(".features_second_column");

let productsTab = document.querySelector(".products");
let certificationsTab = document.querySelector(".certifications")

let companyDetails = document.querySelector(".company_details");


let tabAction = document.querySelectorAll(".tab_action");

let overview = document.querySelector("#overview");

let isClicked = true;

for (let i = 0; i < tabAction.length; i++) {
    tabAction[0].addEventListener("click", () => {

        if(productsTab){    
            productsTab.style.display = "none";
        }
        
        if(certificationsTab){
            certificationsTab.style.display= "none";
        }
        
        if(bodyInfo){
            bodyInfo.style.display = "block";
        }

        if(profileEditFields){
            profileEditFields.style.display = "flex";
        }

        if(editFirstCol){
            editFirstCol.style.display = "block";
        }

        if(editSecondCol){
            editSecondCol.style.display = "flex";
        }
        
        if(companyDetails){
            companyDetails.style.display = "block";
        }
        
    })

    tabAction[1].addEventListener("click", () => {

        if(bodyInfo){
            bodyInfo.style.display = "none";
        }
        

        if(editFirstCol){
            editFirstCol.style.display = "none";
        }

        if(editSecondCol){
            editSecondCol.style.display = "none";
        }

        if(profileEditFields){
            profileEditFields.style.display = "block";
        }
        
        if(companyDetails){
            companyDetails.style.display = "none";
        }


        if(certificationsTab){
            certificationsTab.style.display= "none";
        }
        
        if(productsTab){
            productsTab.style.display = "block";
        }
        
    })

    tabAction[2].addEventListener("click", () => {
        if(bodyInfo){
            bodyInfo.style.display = "none";
        }
        

        if(editFirstCol){
            editFirstCol.style.display = "none";
        }

        if(editSecondCol){
            editSecondCol.style.display = "none";
        }

        if(profileEditFields){
            profileEditFields.style.display = "block";
        }
        
        if(companyDetails){
            companyDetails.style.display = "none";
        }
        
        if(productsTab){
            productsTab.style.display = "none";
        }

        if(certificationsTab){
            certificationsTab.style.display= "block";
        }
    })
}




