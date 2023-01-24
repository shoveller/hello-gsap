import gsap from 'gsap'
import './index.css'

declare const elem: HTMLDivElement

gsap.to(elem, { duration: 1, x: 100, y: 100, rotation: 45 })
