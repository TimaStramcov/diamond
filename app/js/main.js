const moveMouse = () => {
    function moveBg (){
        const a = document.querySelector('.diamond');
        const b = document.querySelector('body')
        a.addEventListener('mouseover', (e) => {
            if(e.target){
                b.style.backgroundColor = "blue";
            }
        });
        a.addEventListener('mouseout', (e) => {
            if(e.target){
                b.style.backgroundColor = "white";
            }
        });
    }

    moveBg();
}

const counter = () =>{

count();
    function count(){
        const arr = ['1', '2','3', ' ',];
        const a = document.querySelector('.text');
        const z = document.querySelector('svg');
        arr.forEach(item => {
            setTimeout(() => {
                if(item == ' '){
                    z.style.zIndex ='-1';
                } else{
                    z.style.zIndex ='1';
                }
               a.textContent = item;
            }, arr.indexOf(item) * 1000)
            
        });
    }

    setInterval(() => {
        count();
    }, 4500);
}

moveMouse();
counter();