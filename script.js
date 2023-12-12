const fill = document.querySelector('.fill')
const emptyBoxes = document.querySelectorAll('.emptybox')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const emptybox of emptyBoxes){
    emptybox.addEventListener('dragover',dragOver)
    emptybox.addEventListener('dragenter',dragEnter)
    emptybox.addEventListener('dragleave',dragLeave)
    emptybox.addEventListener('drop',dragDrop)
}

function dragStart(){
    this.className += ' onhold'
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd(){
    this.className = 'fill'
}
function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
    this.className += ' onhover'
}
function dragLeave(){
    this.className = 'emptybox'
}
function dragDrop(){
    this.className = 'emptybox'
    this.append(fill)
}