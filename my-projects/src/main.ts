


import i18next from "i18next"
import en from "./i18n/en.ts"
import de from "./i18n/de.ts"



export const resources = {
    en,
    de,
    
}
const storeLanguage = localStorage.getItem("lang")
i18next.init({
  lng: storeLanguage? storeLanguage : "en",
  debug: true,
  resources
})

const switcher = document.querySelector(".language-switcher")

if(switcher){
switcher.value = storeLanguage
    switcher.addEventListener("change", (event:Event)=>{
        const target = event.target as HTMLSelectElement;
        const lang = target.value
        localStorage.setItem("lang", lang)
        i18next.changeLanguage(lang)
        .then(()=>{
            translateAll()
        })
        .catch(err=>console.log(err))

    })
}

function translateAll(){
    const counter = document.querySelector(".counter")
    if(counter){
        counter.textContent = i18next.t("counter", {count:20}) 
    }

    const translateTargets = document.querySelectorAll("[data-t]")
    //translating dynamically
    translateTargets.forEach(el=>{
        const key = el.getAttribute("data-t")
        if(key){
            el.textContent = i18next.t(key)
        }
        
    })

}


document.addEventListener("DOMContentLoaded", translateAll )


 const Image = document.getElementById("image");
    const colorBox = document.getElementById("color-box");

    const colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe"];
    let index = 0;

    Image.addEventListener("click", () => {
      colorBox.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length; // cycle through colors
    });