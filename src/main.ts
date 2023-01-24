import gsap from 'gsap'
import './index.css'

const timeline = gsap.timeline()
Array.from(document.getElementsByName('box')).forEach((elem, index) => {
  timeline.to(elem, {
    duration: 1, x: 200, scale: 0.1 * index
  })
})
