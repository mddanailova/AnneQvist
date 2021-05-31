/*Her bruger jeg constant værdien som opretter en skrive beskyttet henvisning til en værdi.
Det betyder ikke at værdien ikke kan ændres på, men at variablen ikke kan benyttes igen
efter den er blevet klikket på.*/

/* Jeg laver en constant for to af de classes som bruges i min section.
queryselectoren retunerer det første element i dokumentet, som matcher den angivne css
selctor i dokumentet*/
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn2");

/* addEventListener vedhæfter en event handler til et element, uden at overskrive 
eksisterende event handlers.
Derudover fjernes den aktive class fra cookie-containeren*/ 
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
});

/* Her laves en timeout i Javascript, som sørger for at vores "Cookie consent banner"
først kommer frem 2 sekunder efter siden indlæses. Tiden udregnes i millisekunder og
værdien for tid, skal derfor være 2000(2 sekunder)*/

setTimeout(() => {
    cookieContainer.classList.add("active");
}, 2000);