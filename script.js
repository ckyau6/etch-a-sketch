
let numOfPixels = 16;

for (i=0; i < numOfPixels*numOfPixels; i++){  
    let pixel = document.createElement('div');  
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = 'blue';
    })
    document.querySelector('#container').appendChild(pixel);

}

const number = document.querySelector('#number');
number.addEventListener('click', () => {
    numOfPixels = prompt("Please enter a number", 64);
    document.querySelector('#container').style.gridTemplateColumns = `repeat(${numOfPixels}, 1fr)`;
    document.querySelector('#container').style.gridTemplateRows = `repeat(${numOfPixels}, 1fr)`;
})



/*let pixel = document.createElement('div');

createGrid() = function{
for (i=0; i < 256; i++){    
    pixel.className = "pixel";
    document.querySelector('#container').appendChild(pixel);
}}

createGrid();

pixel.addEventListener("mouseover", function(e){
    e.target.style.background = 'blue';
})
*/