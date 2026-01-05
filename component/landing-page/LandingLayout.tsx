'use client'

import { ReactNode, useState, useEffect } from 'react'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'

export default function LandingLayout({ children }: { children: ReactNode }) {
  const isPc = useMediaQuery('(min-width: 1611px)')
  const isTablet = useMediaQuery('(max-width: 1610px)')
  const isPcOrTablet = useMediaQuery('(min-width: 901px)')
  const isMobile = useMediaQuery('(max-width: 900px)')
  
  const [showFloatingButtons, setShowFloatingButtons] = useState(true)

  useEffect(() => {
    // 모바일에서만 스크롤 이벤트 등록
    if (!isMobile) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setShowFloatingButtons(scrollTop <= 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <>
      <div
        className={'overflow-x-hidden scrollbar-hidden min-h-[200vh] flex flex-col justify-between bg-white'}
        style={{
          width: isPc ? '100%' : isTablet ? '100%' : '100vw'
        }}
      >
        {children}
        <div 
          className={`flex flex-col gap-4 fixed bottom-10 right-10 z-[1000] transition-opacity duration-75 ${
            showFloatingButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* <button
            className={'w-full flex gap-4 relative justify-center items-center font-bold h-10 bg-white text-base rounded shadow cursor-pointer'}
            onClick={() => window.open('https://pf.kakao.com/_Nxigsn/chat ')}>
            <div className={'flex items-center bg-[yellow] px-2 py-2 rounded absolute left-0'}>
              <Image src={'/images/front-pages/landing-page/bubble.png'} alt={'bubble'} width={24} height={24} />
            </div>
            <span className={'ml-6'}>빠른상담</span>
          </button>
          <button
            className={'px-4 py-2 bg-[#623112] font-bold text-base text-white rounded cursor-pointer'}
            onClick={() => window.open('https://open.kakao.com/o/gNyvGp3g')}>
            <span>사장님 커뮤니티 입장</span>
          </button> */}
        </div>
      </div>
    </>
  )
}
