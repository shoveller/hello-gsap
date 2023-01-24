import gsap from 'gsap'
import './index.css'

declare const nav: HTMLDivElement

const tween = gsap.to(document.getElementsByName('box'), {
  duration: 4,
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360,
  ease: "none",
  paused: true
})

declare const play: HTMLButtonElement
play.onclick = () => tween.play()

declare const pause: HTMLButtonElement
pause.onclick = () => tween.pause()

declare const resume: HTMLButtonElement
resume.onclick = () => tween.resume()

declare const reverse: HTMLButtonElement
reverse.onclick = () => tween.reverse()

declare const restart: HTMLButtonElement
restart.onclick = () => tween.restart()
