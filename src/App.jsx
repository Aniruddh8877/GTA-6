import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(ScrollToPlugin)

const App = () => {
  let [Show, setShow] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('.vi-mask-group', {
      rotate: 40,
      duration: 2,
      delay: 1.1,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group', {
      scale: 19,
      duration: 4,
      delay: -1.2,
      ease: 'expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          const svgElement = document.querySelector('.svg')
          if (svgElement) svgElement.remove()
          setShow(true)
          this.kill()
        }
      },
    })
  })

  useGSAP(() => {
    const main = document.querySelector('.main')

    gsap.fromTo(
      '.imagediv .character',
      {
        y: 100,
        x: -380,
        opacity: 0,
      },
      {
        y: -580,
        x: -380,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    )

    main?.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10

      gsap.to('.imagediv .text', {
        x: `${-x * 0.5}%`,
        y: `${-y * 0.5}%`,
        duration: 0.4,
      })

      gsap.to('.imagediv .sky', {
        x: `${-x * 0.2}%`,
        y: `${-y * 0.2}%`,
        duration: 0.4,
      })

      gsap.to('.imagediv .bg', {
        x: `${-x * 0.4}%`,
        y: `${-y * 0.4}%`,
        duration: 0.4,
      })
    })
  }, [Show])

  const scrollToSecondPage = () => {
    const secondPage = document.getElementById('page2')
    if (secondPage) {
      gsap.to(window, {
        scrollTo: { y: secondPage.offsetTop, autoKill: true },
        duration: 1.5,
        ease: 'power2.inOut',
      })
    }
  }

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen flex items-center justify-center bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {Show && (
        <div className="main w-full">
          <section className='w-full h-screen flex items-center justify-center bg-black relative overflow-hidden'>
            <header className='absolute top-0 left-0 w-full px-4 py-6 flex items-center justify-between z-50'>
              <div className='flex items-center gap-4'>
                <div className="flex flex-col gap-1">
                  <div className='w-8 h-1 bg-white'></div>
                  <div className='w-6 h-1 bg-white'></div>
                  <div className='w-4 h-1 bg-white'></div>
                </div>
                <h3 className='text-white text-2xl sm:text-4xl font-bold'>RockStar</h3>
              </div>
              <h3 className='text-white text-xl sm:text-2xl font-serif'>learn more</h3>
            </header>

            <div className='imagediv w-full h-full relative'>
              <img src="./sky.png" alt="" className='sky absolute top-0 left-0 w-full h-full object-cover z-10 scale-150' />
              <img src="./bg.png" alt="" className='bg absolute top-0 left-0 w-full h-full object-cover z-20 scale-110' />
              <div className="text absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='text-white text-6xl sm:text-8xl md:text-[10rem] font-bold'>grand</h1>
                <h1 className='text-white text-6xl sm:text-8xl md:text-[10rem] font-bold'>theft</h1>
                <h1 className='text-white text-6xl sm:text-8xl md:text-[10rem] font-bold'>auto</h1>
              </div>
              <img src="./girlbg.png" alt="" className='character absolute bottom-0 left-1/2 -translate-x-1/2 z-30 scale-100 md:scale-125 lg:scale-[1.3]' />
            </div>

            <footer className="footerdiv absolute bottom-0 left-0 w-full px-4 py-6 flex items-center justify-between z-50">
              <div className='flex items-center gap-2 cursor-pointer' onClick={scrollToSecondPage}>
                <i className="ri-arrow-down-line text-white text-xl sm:text-2xl"></i>
                <h3 className='text-white text-lg sm:text-xl font-serif'>Scroll Down</h3>
              </div>
              <img src="./ps5.png" alt="" className='h-10 sm:h-16 md:h-20' />
              <div className='flex items-center gap-2'>
                <h3 className='text-white text-lg sm:text-xl font-serif'>Coming soon</h3>
                <i className="ri-arrow-right-circle-fill text-white text-xl sm:text-2xl"></i>
              </div>
            </footer>
          </section>

          {/* Second Page */}
          <section id="page2" className="w-full min-h-screen flex items-center justify-center bg-black px-4 py-10">
            <div className="cntnr flex flex-col lg:flex-row text-white w-full max-w-7xl gap-10">
              <div className="limg relative w-full lg:w-1/2 flex justify-center items-center">
                <img src="./imag.png" alt="" className="w-[80%] max-w-md" />
              </div>
              <div className="rg w-full lg:w-1/2">
                <h1 className="text-4xl sm:text-6xl font-bold">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl font-bold">Not Hunting</h1>
                <p className="mt-6 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, asperiores nam, omnis inventore nesciunt.
                </p>
                <p className="mt-3 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius illum fugit eligendi nesciunt quia similique velit.
                </p>
                <p className="mt-6 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate ipsa nostrum autem sapiente.
                </p>
                <button className="bg-yellow-500 px-6 py-3 mt-6 text-black text-lg sm:text-xl rounded-md">
                  Download Now
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
