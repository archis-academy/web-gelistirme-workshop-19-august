const arttirmaBasligi = document.getElementById("counter-el");  // h2
const oncekiGirisler = document.getElementById("oncekiGirisler"); //p
const kaydetBtn = document.getElementById("kaydet-btn");


let ilkSayi = 0;

function arttir(){
    ilkSayi = ilkSayi + 1;
    arttirmaBasligi.innerHTML = ilkSayi;
}

function kaydet(){
    oncekiGirisler.innerHTML = oncekiGirisler.innerHTML + " - " + ilkSayi;
    ilkSayi = 0;
    arttirmaBasligi.innerHTML = ilkSayi;
    kaydetBtn.style.backgroundColor = "blue";
}