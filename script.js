// const container = document.querySelector('#container')
// for(let i=1; i<10; i++){
//     const box = document.createElement('div')
//     box.className = 'boxes'
//     box.id = `box${i}`
//     console.log(box.id);
//     container.appendChild(box)
//     box.innerHTML = ''
// }
let boxArray = []
let compArray = []
const box = document.querySelectorAll('.boxes')
box.forEach( (opt)=>{
    opt.addEventListener('click',()=>{
        
        
        //   if(opt.innerHTML === ''){
            opt.innerHTML = 'X'
            boxArray.push(opt.id)
            compArray = compArray.filter(id => id !== opt.id);

        // }

        console.log(`BoxArray: ${boxArray}`);

        // if(boxArray.length + compArray.length === 9){
        //     if( boxArray.includes('box1',''))
        //     console.log("Game Over!");
        //     return;  
        // }
      
        
        setTimeout( function(){

            let ranbox = Math.floor(Math.random()* 9 + 1);
            let ranId = `box${ranbox}`
    
            while(boxArray.includes(ranId) || compArray.includes(ranId)){
                  ranbox = Math.floor(Math.random() * 9 + 1);
                  ranId = `box${ranbox}`
           
             }
            compArray.push(ranId)
            console.log(`CompArray:${compArray}`);
            document.getElementById(ranId).innerHTML = 'O'
            
        },300 )

        if()
       
        
      
        
    })
 
} )







