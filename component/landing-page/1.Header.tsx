'use client'

import PawpawnutLogo from '../../public/assets/landing/PawpawnutLogo'
import { useCallback, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Header({ initialRendered }: { initialRendered: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClickLogo = useCallback(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      removeHash()
    } else {
      router.push('/')
    }
  }, [pathname])

  const removeHash = useCallback(() => {
    if (window.location.hash) {
      const urlWithoutHash = window.location.href.split('#')[0]
      window.history.replaceState(null, '', urlWithoutHash)
    }
  }, [])

  const handleClickNavigator = useCallback((sectionId: string, sectionTitle: string, event?: React.MouseEvent) => {
    // 기본 동작(링크 이동)을 막아서 히스토리에 쌓이지 않도록 함
    if (event) {
      event.preventDefault()
    }

    setMobileMenuOpen(false)

    // 현재 경로가 '/'가 아닌 경우 '/'로 이동 후 스크롤
    if (pathname !== '/') {
      // 해시 없이 '/'로 이동하고, 히스토리 스택에 쌓이지 않도록 replaceState 사용
      window.history.replaceState(null, '', `/#${sectionId}`)
      // 페이지 이동 후 스크롤을 위해 약간의 지연을 두고 실행
      setTimeout(() => {
        const elem = document.getElementById(sectionId)
        if (!elem) return
        window.scrollTo({ top: elem.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
      }, 1000)
    } else {
      // 해시 없이 '/'로 이동하고, 히스토리 스택에 쌓이지 않도록 replaceState 사용
      window.history.replaceState(null, '', `/#${sectionId}`)
      // 현재 경로가 '/'인 경우 바로 스크롤
      setTimeout(() => {
        const elem = document.getElementById(sectionId)
        if (elem) {
          window.scrollTo({ top: elem.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
        }
      }, 300)
    }
  }, [pathname])

  const handleClickLink = useCallback((link: string) => {
  }, [])

  return (
    <>
      {/*  MOBILE  */}
      <>
        <div
          className={`w-full h-[63px] px-[21px] flex flex-col justify-start items-center z-[10] fixed overflow-visible bg-[#FEFEFD] initial-load-section-mobile text-[#010101]`}
        >
          {/* <div className='w-full flex items-center justify-center text-[#010101]'> */}
          <div className='w-full h-[63px] inline-flex justify-between items-center'>
            <PawpawnutLogo width={90} height={35} onClick={handleClickLogo} className='cursor-pointer' />
            <div className='p-[7px] inline-flex flex-col justify-start items-start cursor-pointer'>
              {mobileMenuOpen ? (
                // X
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='21'
                  viewBox='0 0 21 21'
                  fill='none'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <path
                    d='M6 15.8995L15.8995 6.00004'
                    stroke='#364153'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 6L10.9497 10.9497L15.8995 15.8995'
                    stroke='#364153'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='21'
                  viewBox='0 0 21 21'
                  fill='none'
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <path
                    d='M3.5 10.5H17.5'
                    stroke='#364153'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.5 15.75H17.5'
                    stroke='#364153'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.5 5.25H17.5'
                    stroke='#364153'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </div>
          </div>

          <nav
            id={'expand-menu'}
            className={`ml-[-24px] overflow-hidden w-screen bg-white absolute bottom-0 flex flex-col gap-[17px] duration-300 select-none ${mobileMenuOpen ? 'border-b-[1px] border-[#ddd]  ' : 'border-none'}`}
            style={{
              height: mobileMenuOpen ? '280px' : '0px',
              marginBottom: mobileMenuOpen ? '-280px' : '0px',
              transitionTimingFunction: 'cubic-bezier(.28,.93,.55,1.05)'
            }}
          >
            <a
              className="cursor-pointer justify-center text-pawpawnut-black text-md font-medium font-['Pretendard'] px-8 pb-[2px] pt-4"
              onClick={(e) => handleClickNavigator('ai_automation_section_title', 'ai_automation', e)}
              href="#ai_automation"
              aria-label="포포넛 주요기능 - AI 기반 자동화, 24/7 AI 운영, 비즈니스 인텔리전스"
            >
              주요기능
            </a>
            <a
              className="cursor-pointer justify-center text-pawpawnut-black text-md font-medium font-['Pretendard'] px-8 py-[2px]"
              onClick={(e) => handleClickNavigator('team', 'team', e)}
              href="#team"
              aria-label="포포넛 팀소개 - 반려동물 예약 시스템 개발팀"
            >
              팀소개
            </a>
            <a
              className="cursor-pointer justify-center text-pawpawnut-black text-md font-medium font-['Pretendard'] px-8 py-[2px]"
              onClick={(e) => handleClickNavigator('try_for_free_title', 'try_for_free', e)}
              href="#try_for_free"
              aria-label="포포넛 요금제 - 강아지 미용 예약, 애견호텔 예약 시스템 가격"
            >
              요금제
            </a>
            <a
              className="cursor-pointer justify-center text-pawpawnut-black text-md font-medium font-['Pretendard'] px-8 py-[2px]"
              onClick={(e) => handleClickNavigator('customer_service', 'customer_service', e)}
              href="#customer_service"
              aria-label="포포넛 문의하기 - 반려동물 예약 시스템 문의"
            >
              문의하기
            </a>
            <a
              className="cursor-pointer justify-center text-pawpawnut-black text-md font-medium font-['Pretendard'] px-8 py-[2px]"
              onClick={() => handleClickLink('login')}
              aria-label="포포넛 로그인"
            >
              로그인
            </a>
            <div className='cursor-pointer justify-center px-8 py-[2px] mt-[-4px]'>
              <div
                className='cursor-pointer px-[18px] py-3 bg-[#623112] rounded-md inline-flex flex-col justify-center items-start'
                onClick={() => handleClickLink('register')}
              >
                <div className="justify-center text-white text-sm font-semibold font-['Pretendard'] leading-[14px]">
                  무료로 시작하기
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>

      {/*  PC  */}
      <>
        <div className={`w-full flex items-center justify-center h-[85px] fixed z-[10] bg-white initial-load-section`}>
          <div className='w-full flex items-center justify-center text-[#010101]'>
            <div className='w-[1460px] px-5 py-2.5 bg-white inline-flex justify-between items-center overflow-hidden'>
              <div className='flex justify-start items-center gap-[71px]'>
                <PawpawnutLogo width={165} height={65} onClick={handleClickLogo} className='cursor-pointer' />
              </div>

              <div className={'ml-auto flex gap-[34px] items-center'}>
                <nav className='flex justify-start items-center gap-[34px]'>
                  <a
                    className="justify-center text-pawpawnut-black text-xl font-semibold font-['Pretendard'] cursor-pointer"
                    onClick={(e) => handleClickNavigator('ai_automation_section_title', 'ai_automation', e)}
                    href="#ai_automation"
                    aria-label="포포넛 주요기능 - AI 기반 자동화, 24/7 AI 운영, 비즈니스 인텔리전스"
                  >
                    주요기능
                  </a>
                  <a
                    className="justify-center text-pawpawnut-black text-xl font-semibold font-['Pretendard'] cursor-pointer"
                    onClick={(e) => handleClickNavigator('team', 'team', e)}
                    href="#team"
                    aria-label="포포넛 팀소개 - 반려동물 예약 시스템 개발팀"
                  >
                    팀소개
                  </a>
                  <a
                    className="justify-center text-pawpawnut-black text-xl font-semibold font-['Pretendard'] cursor-pointer"
                    onClick={(e) => handleClickNavigator('try_for_free_title', 'try_for_free', e)}
                    href="#try_for_free"
                    aria-label="포포넛 요금제 - 강아지 미용 예약, 애견호텔 예약 시스템 가격"
                  >
                    요금제
                  </a>
                  <a
                    className="justify-center text-pawpawnut-black text-xl font-semibold font-['Pretendard'] cursor-pointer"
                    onClick={(e) => handleClickNavigator('customer_service', 'customer_service', e)}
                    href="#customer_service"
                    aria-label="포포넛 문의하기 - 반려동물 예약 시스템 문의"
                  >
                    문의하기
                  </a>
                  <a
                    className="justify-center text-pawpawnut-black text-xl font-semibold font-['Pretendard'] cursor-pointer"
                    onClick={() => handleClickLink('login')}
                    aria-label="포포넛 로그인"
                  >
                    로그인
                  </a>
                </nav>
                <div
                  className='cursor-pointer px-[18px] py-3 bg-[#623112] rounded-md inline-flex flex-col justify-center items-start'
                  onClick={() => handleClickLink('register')}
                >
                  <div className="justify-center text-white text-sm font-semibold font-['Pretendard'] leading-[14px]">
                    무료로 시작하기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
