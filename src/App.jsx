import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  //svg animation ^🔗^
  let [Show, setShow] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group",
      {
        rotate: 40,
        duration: 2,
        delay: 1.1,
        ease: "power4.easeInOut",
        transformOrigin: "50% 50%",
      }
    ).to(".vi-mask-group", {
      scale: 19,
      duration: 4,
      delay: -1.2,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          const svgElement = document.querySelector(".svg");
          if (svgElement) svgElement.remove();
          setShow(true);
          this.kill(); // kill the tween after it's done
        }
      },

    });
  });

 useGSAP(() => {
  const main = document.querySelector('.main');

  // One-time animation: character comes from bottom with fade-in
  gsap.fromTo('.imagediv .character',
    {
      y: 100,
      x: -380,
      opacity: 0
    },
    {
      y: -580,
      x: -380,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    }
  );

  // Mousemove parallax effect
  main?.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    gsap.to(".imagediv .text", {
      x: ${-x * 0.5}%,
      y: ${-y * 0.5}%,
      duration: 0.4
    });

    gsap.to('.imagediv .sky', {
      x: ${-x * 0.2}%,
      y: ${-y * 0.2}%,
      duration: 0.4
    });

    gsap.to('.imagediv .bg', {
      x: ${-x * 0.4}%,
      y: ${-y * 0.4}%,
      duration: 0.4
    });
  });

}, [Show]);




  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
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
      {Show &&
        <div className="main w-full">
          <div className='w-full h-screen flex items-center justify-center bg-black'>
            <div className='navbardiv w-full py-10 px-10 flex items-center justify-between absolute z-50 top-0 left-0'>
              <div className='logo flex items-center gap-6 justify-between'>
                <div className="lines gap-2.5 flex flex-col">
                  <div className='line w-14 h-[5px] bg-white'></div>
                  <div className='line w-10 h-[5px] bg-white'></div>
                  <div className='line w-6 h-[5px] bg-white'></div>
                </div>
                <h3 className='text-white text-5xl font-bold font-[Pricedown] -mt-4 leading-none'>RockStar</h3>
              </div>
              <div>
                <h3 className='text-white text-3xl font-serif'>learn more</h3>
              </div>
            </div>

            <div className='imagediv w-full h-screen relative overflow-hidden' >
              <img src="./sky.png"
                alt=""
                className='sky absolute top-0 left-0 w-full h-full object-cover z-10 scale-150' />

              <img src="./bg.png"
                alt=""
                className='bg absolute top-0 left-0 w-full h-full object-cover z-20 scale-110' />

              <div className="text absolute z-20 flex flex-col gap-9 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-30 leading-none" >
                <h1 className='text-white text-[10rem] font-bold  -ml-48'>grand</h1>
                <h1 className='text-white text-[10rem] font-bold  ml-[26rem]'>theft</h1>
                <h1 className='text-white text-[10rem] font-bold  -ml-44'>auto</h1>
              </div>
              <img src="./girlbg.png"
                alt=""
                className='character  absolute -bottom-[87%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3] z-30'
              />
            </div>


            <div className="footerdiv w-full py-10 px-10  flex items-center justify-between absolute z-50 bottom-0 left-0">
              <div className='logo flex items-center gap-2 justify-between'>
                <i className="ri-arrow-down-line font-bold text-white text-2xl"></i>
                <h3 className='text-white text-3xl font-serif  leading-none'>Scroll Down </h3>
              </div>
              <div>
                <img
                  src="./ps5.png"
                  alt=""
                  className=' h-20'
                />
              </div>
              <div className='logo flex items-center gap-2 justify-between'>
                <h3 className='text-white text-3xl font-serif leading-none justify-center items-center'>Comming soon</h3>
                <i className="ri-arrow-right-circle-fill text-3xl text-white"></i>
              </div>
            </div>
          </div>


          {/* second page start here ^*_*^ */}
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default App
