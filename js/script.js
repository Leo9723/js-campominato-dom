let container = document.getElementById('container')

const button = document.getElementById('button')

function cellTab(numero) {
    const cell = document.createElement('div');

    cell.classList.add('box')

    cell.innerText = numero;

    return cell;
}


button.addEventListener('click', function(){

    document.querySelector('.container').innerHTML = ''
    
    let number = parseInt(document.getElementById('number').value);

    let element = document.getElementById("form");
  
    
    if(number == 100) {
        for(let i = 0; i<number; i++){
        
            const cella = cellTab(i+1)
            cella.classList.add('c-100')
            container.appendChild(cella);
            
            cella.addEventListener('click', function(){
                cella.classList.add('red-box')
                console.log(this.innerText)
            }) 
            
            
        
        }
    }
    else if(number == 81) {
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-81')
            container.appendChild(cella);

            cella.addEventListener('click', function(){
                cella.classList.add('red-box')
                console.log(this.innerText)
            }) 



        }
    }
    else {
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-49')
            container.appendChild(cella);

            cella.addEventListener('click', function(){
                cella.classList.add('red-box')
                console.log(this.innerText)
            }) 


            
        }
    }
    
    if(number == 100) {
        element.classList.add('c-100')
    }
})

/* element.addEventListener('click', function(){
    element.classList.add('red-box')
}) */