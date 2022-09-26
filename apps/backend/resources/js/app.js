import './../scss/main.scss'
import 'unpoly'
import NProgress from 'nprogress'

function toggleNavbar() {
  sidebarEl.classList.toggle('open')
  backdropEl.classList.toggle('open')
}

const sidebarEl = document.querySelector('.sidebar')
const backdropEl = document.querySelector('.nav-backdrop')
const btnBurgerEl = document.getElementById('menu-btn')

btnBurgerEl.addEventListener('click', toggleNavbar)
backdropEl.addEventListener('click', toggleNavbar)

up.on('up:request:load', () => {
  NProgress.start()
})

up.on('up:request:loaded', () => {
  NProgress.done()
})

up.on('up:request:fatal', () => {
  NProgress.done()
})

up.on('up:request:late', () => {
  NProgress.done()
})
