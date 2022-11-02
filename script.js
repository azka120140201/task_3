//DOM Manipulation
/*membuat teks kedalam id/class html tertentu*/
const buyFruits = document.getElementById('buah');
buyFruits.innerHTML = 'Fruits to Buy';

/*membuat element html kedalam id/class html tertentu */
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Strawberry');

//simpan text ke p
pBaru.appendChild(textPBaru);

//simpan pBaru di akhir Section id = 1
const section1 = document.getElementById('1');
section1.appendChild(pBaru);

/*membuat element yang dinamis berdasarkan event handler*/
function setMode() {
     let mode = localStorage.getItem('mode');
     if(!mode) mode = 'light';
     document.body.classList.add(mode);
   }

   function toggleMode() {
    let element = document.body;
    let btn = document.getElementById("darkmode-button");
    let mode = localStorage.getItem('mode')
            
    if(!mode) mode = 'dark';

    if(mode == 'dark') {
       localStorage.setItem("mode", "light");
       element.classList.remove("dark");
       element.classList.add("light");
       btn.innerHTML = 'Dark mode';
       
    }
    else {
      localStorage.setItem("mode", "dark");
      element.classList.remove("light");
      element.classList.add("dark");
      btn.innerHTML = 'Light mode';
    }    
}