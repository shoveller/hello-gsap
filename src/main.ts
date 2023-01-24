import gsap from 'gsap'
import './index.css'

// gsap.to(document.getElementsByName('box'), { duration: 1, x: 100, y: 100, rotation: 45 })
// gsap.from(document.getElementsByName('box'), { duration: 1, x: 100, y: 100, rotation: 45 })
gsap.fromTo(document.getElementsByName('box'),
  { duration: 1, x: -100, y: -100, rotation: -45 },
  { duration: 1, x: 100, y: 100, rotation: 45 }
)
