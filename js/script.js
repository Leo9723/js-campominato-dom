let container = document.getElementById('container')

const button = document.getElementById('button')

function cellTab(numero) {
    const cell = document.createElement('div');

    cell.classList.add('box')

    cell.innerText = numero;

    return cell;
}

function bombsarray(min, max) {
    let bombs = []
    let i = 0
    while(i<16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min

        if (!bombs.includes(number)){
            bombs.push(number)
            i++
        }
    }

    return bombs;
}

button.addEventListener('click', function(){

    document.querySelector('.container').innerHTML = ''
    document.getElementById('final-score').innerHTML = ''

    container.classList.remove('pointer')
    
    let number = parseInt(document.getElementById('number').value);

    let element = document.getElementById("form");
  
    
    if(number == 100) {
        
        let arraybombs = []

        arraybombs = bombsarray(1, 84)
        let score = []
        console.log(arraybombs)
        for(let i = 0; i<number; i++){

            
            const cella = cellTab(i+1)
            cella.classList.add('c-100')
            container.appendChild(cella);
            
            cella.addEventListener('click', function(){
                if(arraybombs.includes(parseInt(this.innerText))){
                    cella.classList.add('red-box')
                    container.classList.add('pointer')
                    document.getElementById('final-score').innerHTML = 'il tuo punteggio è ' + score.length
                }
                else{
                    cella.classList.add('blue-box')
                    score.push(this.innerText)
                    console.log(score)
                }    
                if(score.length == 33) {
                    document.getElementById('final-score').innerHTML = 'Hai vinto!'
                }           
            }) 
        }
    }
    else if(number == 81) {
        arraybombs = bombsarray(1, 65)
        let score = []
        console.log(arraybombs)
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-81')
            container.appendChild(cella);

            cella.addEventListener('click', function(){
                if(arraybombs.includes(parseInt(this.innerText))){
                    cella.classList.add('red-box')
                    container.classList.add('pointer')
                    document.getElementById('final-score').innerHTML = 'il tuo punteggio è ' + score.length
                }
                else{
                    cella.classList.add('blue-box')
                    score.push(this.innerText)
                    console.log(score)
                } 
                if(score.length == 33) {
                    document.getElementById('final-score').innerHTML = 'Hai vinto!'
                } 
            }) 
        }
    }
    else {
        arraybombs = bombsarray(1, 49)
        let score = []
        console.log(arraybombs)
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-49')
            container.appendChild(cella);

            cella.addEventListener('click', function(){
                if(arraybombs.includes(parseInt(this.innerText))){
                    cella.classList.add('red-box')
                    container.classList.add('pointer')
                    document.getElementById('final-score').innerHTML = 'il tuo punteggio è ' + score.length
                }
                else{
                    cella.classList.add('blue-box')
                    score.push(this.innerText)
                    console.log(score)
                }
                if(score.length == 33) {
                    document.getElementById('final-score').innerHTML = 'Hai vinto!'
                } 
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

