const search = document.querySelector('.search')
const offerTittle = document.querySelectorAll('.offer-title')
const offerBox = document.querySelectorAll('.offer-box')
const fordBtn = document.querySelector('.ford-btn')
const bmwBtn = document.querySelector('.bmw-btn')
const opelBtn = document.querySelector('.opel-btn')
const vwBtn = document.querySelector('.vw-btn')
const audiBtn = document.querySelector('.audi-btn')
const searchEngine = e =>{
    const text = search.value.toLowerCase()

    offerTittle.forEach(el => {
        const task = el.textContent

        if(task.toLowerCase().indexOf(text) !== -1){
            el.parentNode.style.display = 'flex'
        }else{
            el.parentNode.style.display = 'none'
        }
    })
}
const audiBtnEngine = () => {
	search.value = audiBtn.textContent
	audiBtn.classList.add('active')
}
const fordBtnEngine = () => {
	search.value = fordBtn.textContent
	fordBtn.classList.add('active')
}
const bmwBtnEngine = () => {
	search.value = bmwBtn.textContent
	bmwBtn.classList.add('active')
}
const opelBtnEngine = () => {
	search.value = opelBtn.textContent
	opelBtn.classList.add('active')
}
const vwBtnEngine = () => {
	search.value = vwBtn.textContent
	vwBtn.classList.add('active')
}
const removeBtnClass = () => {
	audiBtn.classList.remove('active')
	fordBtn.classList.remove('active')
	bmwBtn.classList.remove('active')
	opelBtn.classList.remove('active')
	vwBtn.classList.remove('active')
}
search.addEventListener('keyup',  () => { 
	removeBtnClass()
	searchEngine ()
})
audiBtn.addEventListener('click' , () =>{
	removeBtnClass()
	audiBtnEngine()
	searchEngine(search)
})
fordBtn.addEventListener('click' , () =>{
	removeBtnClass()
	fordBtnEngine()
	searchEngine(search)
})
bmwBtn.addEventListener('click' , () =>{
	removeBtnClass()
	bmwBtnEngine()
	searchEngine(search)
})
opelBtn.addEventListener('click' , () =>{
	removeBtnClass()
	opelBtnEngine()
	searchEngine(search)
})
vwBtn.addEventListener('click' , () =>{
	removeBtnClass()
	vwBtnEngine()
	searchEngine(search)
})
search.addEventListener('click', () =>{
	search.value = ''
})