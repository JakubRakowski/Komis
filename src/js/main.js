const burgerBtn = document.querySelector('.burger-btn')
const burgerIcon = document.querySelector('.burger-icon')
const navMobileList = document.querySelector('.nav-mobile-list')
const navMobileListItems = document.querySelectorAll('.nav-mobile-list-item')
const footerYear = document.querySelector('.footer__year')
const navDesktop = document.querySelector('.nav-desktop')
const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const msgStatus = document.querySelector('.msg-status')



const handleNav = () => {
	navMobileList.classList.toggle('active')
	let delayTime = 0
	navMobileListItems.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.computedStyleMap.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
	navMobileListItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobileList.classList.remove('active')
		})
	})
}

function addShadow() {
	if (window.scrollY >= 100) {
		navDesktop.classList.add('shadow-bg')
	} else {
		navDesktop.classList.remove('shadow-bg')
	}
}

window.addEventListener('scroll', addShadow)

const hanndleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.accordion-info')
	allActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains('accordion-btn') ||
		e.target.classList.contains('accordion-info') ||
		e.target.classList.contains('accordion-info-text')
	)
		return
	closeAccordionItems()
}

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomość wysłana!'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Wystąpił błąd.'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}
hanndleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)

