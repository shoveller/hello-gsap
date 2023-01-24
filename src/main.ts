import gsap from 'gsap'
import './index.css'

gsap.from(document.getElementsByName('box'), {   duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true
})
