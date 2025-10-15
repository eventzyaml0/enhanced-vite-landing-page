import { gsap } from 'gsap'

document.addEventListener('DOMContentLoaded', function() {
  gsap.from('h1', { duration: 1, y: -50, opacity: 0, ease: "power3.out" })
  gsap.from('main', { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 })
  gsap.from('#cta-button', { duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", delay: 1 })
  
  const button = document.getElementById('cta-button');
  if (button) {
    button.addEventListener('click', function() {
      gsap.to('#cta-button', { duration: 0.3, scale: 0.95, yoyo: true, repeat: 1 })
      alert('Welcome to the enhanced landing page with animations!');
    });
  }

  console.log('Enhanced Vite Landing Page loaded with GSAP');
}