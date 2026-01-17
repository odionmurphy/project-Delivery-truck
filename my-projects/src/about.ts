
import i18next from "i18next"
import en from "./uss/en.ts"
import de from "./uss/de.ts"


export const resources = {
    en,
    de,
    
}

i18next.init({
  lng: "en",
  debug: true,
  resources
})

const switcher = document.querySelector(".language-switcher")
console.log(switcher)
if(switcher){
    switcher.addEventListener("change",(event:Event)=>{
        const target = event.target as HTMLSelectElement;
        const lang = target.value
        console.log(lang)
        i18next.changeLanguage(lang)
        
        .then(()=>{
            console.log("hi")
            translateAll()
        })
        .catch(err=>console.log(err))
    })
}

function translateAll(){
    console.log("hello")
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