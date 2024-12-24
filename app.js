let locationinfo=(name,url)=>{
    let atag=document.createElement("a");
    atag.textContent=name;
    atag.href=url;
    atag.target="_blank";
    return atag;
}

let loca1=document.getElementById("loc1");
loca1.appendChild(locationinfo("gogulapadu","https://maps.app.goo.gl/5EzUinC38H6jjSTi8"));

let loca2=document.getElementById("loc2");
loca2.appendChild(locationinfo("guntur","https://maps.app.goo.gl/CeVKNgM2Zeh7eRwi7"));

let loca3=document.getElementById("loc3");
loca3.appendChild(locationinfo("narasaraopet","https://maps.app.goo.gl/ozhvvzwudF6ocaC38"));