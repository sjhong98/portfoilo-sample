'use client'

import Kakao from '../../public/assets/landing/Kakao'
import Email from '../../public/assets/landing/Email'
import Phone from '../../public/assets/landing/Phone'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/navigation'

const CustomerService247 = (props: any) => {
  const router = useRouter()
  const isPc = useMediaQuery('(min-width: 1611px)')
  const isTablet = useMediaQuery('(max-width: 1610px)')
  const isPcOrTablet = useMediaQuery('(min-width: 901px)')
  const isMobile = useMediaQuery('(max-width: 900px)')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1
      }
    }
  }

  return !isPcOrTablet ? (
    <section
      id={'customer_service'}
      className='w-full px-8 py-20 bg-neutral-50 inline-flex flex-col justify-start items-center gap-10 overflow-hidden'
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-start items-center gap-5'
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='px-[15px] py-2 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#e8e9ea] inline-flex justify-center items-center gap-[5px] overflow-hidden'>
            <div className='w-4 h-4 relative overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.9987 2.66634C6.58421 2.66634 5.22766 3.22824 4.22746 4.22844C3.22727 5.22863 2.66536 6.58519 2.66536 7.99967V9.33301H3.9987C4.35232 9.33301 4.69146 9.47348 4.94151 9.72353C5.19156 9.97358 5.33203 10.3127 5.33203 10.6663V12.6663C5.33203 13.1968 5.12132 13.7055 4.74624 14.0806C4.37117 14.4556 3.86246 14.6663 3.33203 14.6663C2.8016 14.6663 2.29289 14.4556 1.91782 14.0806C1.54274 13.7055 1.33203 13.1968 1.33203 12.6663V7.99967C1.33203 4.31767 4.3167 1.33301 7.9987 1.33301C11.6807 1.33301 14.6654 4.31767 14.6654 7.99967V12.6663C14.6654 13.1968 14.4546 13.7055 14.0796 14.0806C13.7045 14.4556 13.1958 14.6663 12.6654 14.6663C12.1349 14.6663 11.6262 14.4556 11.2512 14.0806C10.8761 13.7055 10.6654 13.1968 10.6654 12.6663V10.6663C10.6654 10.3127 10.8058 9.97358 11.0559 9.72353C11.3059 9.47348 11.6451 9.33301 11.9987 9.33301H13.332V7.99967C13.332 6.58519 12.7701 5.22863 11.7699 4.22844C10.7697 3.22824 9.41319 2.66634 7.9987 2.66634Z'
                  fill='#1D7DDF'
                />
              </svg>
            </div>
            <p className="text-center justify-center text-[#1d7ddf] text-[13px] font-semibold font-['Pretendard']">
              24/7 고객 지원
            </p>
          </div>
          <p className='flex flex-col justify-start items-center gap-2.5'>
            <span className="text-center justify-center text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard'] h-[31px]">
              무엇이든 물어보세요
            </span>
            <span className="text-center justify-center text-[#623112] text-[26px] font-bold font-['Pretendard']">
              언제나 함께합니다
            </span>
          </p>
        </div>
        <div className='inline-flex justify-center items-center gap-2.5'>
          <p className='w-[291px] text-center justify-center'>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              포포넛 팀은 바쁜 사장님을 위해
              <br />{' '}
            </span>
            <span className="text-[#1d2232]/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              매장 운영시간이 끝난 늦은 밤까지
            </span>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              <br /> 항상 대기하고 있어요.
              <br /> 어떤 궁금한 점이라도 편하게 문의하세요.
            </span>
          </p>
        </div>
      </motion.div>
      <div className='w-full flex flex-col justify-start items-start gap-5'>
        <div className='self-stretch p-4 bg-white rounded-2xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center gap-4 overflow-hidden'>
          <div className='self-stretch flex flex-col justify-start items-center gap-3.5'>
            <Kakao width={56} height={56} />
            <p className="self-stretch text-center justify-start text-[#4a4e5b] text-lg font-bold font-['Pretendard']">
              카카오톡 상담
            </p>
            <p className="self-stretch text-center justify-start text-[#8e9098] text-base font-normal font-['Pretendard'] mt-[-6px]">
              실시간 채팅으로 빠른 답변
            </p>
          </div>
          <button
            className='w-full cursor-pointer px-10 py-3 bg-[#f4d984] rounded-[20px] inline-flex justify-center items-center gap-2.5'
            onClick={() => router.push('http://pf.kakao.com/_Nxigsn/chat')}
          >
            <p className="text-center justify-center text-[#4a4e5b] text-[13px] font-semibold font-['Pretendard']">
              카톡 상담하기
            </p>
          </button>
        </div>
        <div className='self-stretch p-4 bg-white rounded-2xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center gap-4 overflow-hidden'>
          <div className='self-stretch flex flex-col justify-start items-center gap-3.5'>
            <Email width={56} height={56} />
            <p className="self-stretch text-center justify-start text-[#4a4e5b] text-lg font-bold font-['Pretendard']">
              이메일 문의
            </p>
            <p className="self-stretch text-center justify-start text-[#8e9098] text-base font-normal font-['Pretendard'] mt-[-6px]">
              상세한 문의사항 접수
            </p>
          </div>
          <a
            href='mailto:support@pawpawnut.com'
            className='w-full cursor-pointer bg-white px-10 py-3 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ba46f2] inline-flex justify-center items-center gap-2.5'
          >
            <span className="text-center justify-center text-[#ba46f2] text-[13px] font-semibold font-['Pretendard']">
              메일 보내기
            </span>
          </a>
        </div>
        <div className='self-stretch p-4 bg-white rounded-2xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center gap-4 overflow-hidden'>
          <div className='self-stretch flex flex-col justify-start items-center gap-3.5'>
            <Phone width={56} height={56} />
            <p className="self-stretch text-center justify-start text-[#4a4e5b] text-lg font-bold font-['Pretendard']">
              전화 상담
            </p>
            <p className="self-stretch text-center justify-start text-[#8e9098] text-base font-normal font-['Pretendard'] mt-[-6px]">
              전문 상담원과 직접 통화
            </p>
          </div>
          <a
            href='tel:07045899109'
            className='w-full cursor-pointer bg-white px-10 py-3 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#2289fb] inline-flex justify-center items-center gap-2.5'
          >
            <p className="text-center justify-center text-[#2289fb] text-[13px] font-semibold font-['Pretendard']">
              전화걸기
            </p>
          </a>
        </div>
      </div>
    </section>
  ) : (
    <section
      id={'customer_service'}
      className={'w-full relative overflow-hidden'}
      style={{
        height: isTablet ? '960px' : '1151px'
      }}
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-full pb-[100px] pt-[70px] bg-neutral-50 inline-flex flex-col justify-center items-center gap-[90px] overflow-hidden'
      >
        <div className='flex flex-col justify-start items-center gap-5 scale-[0.8]'>
          <div className='flex flex-col justify-start items-center gap-5'>
            <div className='px-9 py-4 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#e8e9ea] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.5 4.07031C10.3783 4.07031 8.34344 4.91317 6.84315 6.41346C5.34285 7.91375 4.5 9.94858 4.5 12.0703V14.0703H6.5C7.03043 14.0703 7.53914 14.281 7.91421 14.6561C8.28929 15.0312 8.5 15.5399 8.5 16.0703V19.0703C8.5 19.866 8.18393 20.629 7.62132 21.1916C7.05871 21.7542 6.29565 22.0703 5.5 22.0703C4.70435 22.0703 3.94129 21.7542 3.37868 21.1916C2.81607 20.629 2.5 19.866 2.5 19.0703V12.0703C2.5 6.54731 6.977 2.07031 12.5 2.07031C18.023 2.07031 22.5 6.54731 22.5 12.0703V19.0703C22.5 19.866 22.1839 20.629 21.6213 21.1916C21.0587 21.7542 20.2956 22.0703 19.5 22.0703C18.7044 22.0703 17.9413 21.7542 17.3787 21.1916C16.8161 20.629 16.5 19.866 16.5 19.0703V16.0703C16.5 15.5399 16.7107 15.0312 17.0858 14.6561C17.4609 14.281 17.9696 14.0703 18.5 14.0703H20.5V12.0703C20.5 9.94858 19.6571 7.91375 18.1569 6.41346C16.6566 4.91317 14.6217 4.07031 12.5 4.07031Z'
                  fill='#1D7DDF'
                />
              </svg>
              <p className="text-center justify-center text-[#1d7ddf] text-2xl font-semibold font-['Pretendard']">
                24/7 고객 지원
              </p>
            </div>
            <p className="text-center justify-center text-[#1d2232]/90 text-6xl font-bold font-['Pretendard']">
              무엇이든 물어보세요
            </p>
            <p className="text-center justify-center text-[#623112] text-[70px] font-bold font-['Pretendard']">
              언제나 함께합니다
            </p>
          </div>
          <div className='text-center justify-center'>
            <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
              포포넛 팀은 바쁜 사장님을 위해{' '}
            </span>
            <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[50px] tracking-tight">
              매장 운영시간이 끝난 늦은 밤까지
            </span>
            <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
              <br /> 항상 대기하고 있어요. 어떤 궁금한 점이라도 편하게 문의하세요.
            </span>
          </div>
        </div>
        <div
          className='w-[1580px] inline-flex justify-between items-center relative mt-[-50px]'
          style={{ scale: isTablet ? 0.6 : 0.8, top: isTablet ? '-100px' : '0px' }}
        >
          <div className='w-[501px] p-10 bg-white rounded-[40px] shadow-[0px_2px_20px_10px_rgba(0,0,0,0.03)] inline-flex flex-col justify-start items-center gap-[30px] overflow-hidden'>
            <div className='self-stretch flex flex-col justify-start items-center gap-5'>
              <Kakao width={100} height={100} />
              <p className="self-stretch text-center justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                카카오톡 상담
              </p>
              <p className="self-stretch text-center justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                실시간 채팅으로 빠른 답변
              </p>
            </div>
            <div className="self-stretch text-center justify-start text-[#4a4e5b] text-3xl font-medium font-['Pretendard']">
              pawpawnut
            </div>
            <button
              className='cursor-pointer self-stretch px-10 py-6 bg-[#f4d984] rounded-[20px] inline-flex justify-center items-center gap-2.5'
              onClick={() => router.push('http://pf.kakao.com/_Nxigsn/chat')}
            >
              <span className="text-center justify-center text-[#4a4e5b] text-3xl font-semibold font-['Pretendard']">
                카톡 상담하기
              </span>
            </button>
          </div>
          <div className='w-[501px] p-10 bg-white rounded-[40px] shadow-[0px_2px_20px_10px_rgba(0,0,0,0.03)] inline-flex flex-col justify-start items-center gap-[30px] overflow-hidden'>
            <div className='self-stretch flex flex-col justify-start items-center gap-5'>
              <Email width={100} height={100} />
              <p className="self-stretch text-center justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                이메일 문의
              </p>
              <p className="self-stretch text-center justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                상세한 문의사항 접수
              </p>
            </div>
            <p
              className="self-stretch text-center justify-start text-[#f039a3] text-3xl font-medium font-['Pretendard']"
              style={{
                background: 'linear-gradient(270deg, #F039A3 0%, #B348FD 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              support@pawpawnut.com
            </p>
            <a
              href='mailto:support@pawpawnut.com'
              className='cursor-pointer bg-white self-stretch px-10 py-6 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ba46f2] inline-flex justify-center items-center gap-2.5'
            >
              <span className="text-center justify-center text-[#ba46f2] text-3xl font-semibold font-['Pretendard']">
                메일 보내기
              </span>
            </a>
          </div>
          <div className='w-[501px] p-10 bg-white rounded-[40px] shadow-[0px_2px_20px_10px_rgba(0,0,0,0.03)] inline-flex flex-col justify-start items-center gap-[30px] overflow-hidden'>
            <div className='self-stretch flex flex-col justify-start items-center gap-5'>
              <Phone width={100} height={100} />
              <p className="self-stretch text-center justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                전화 상담
              </p>
              <p className="self-stretch text-center justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                전문 상담원과 직접 통화
              </p>
            </div>
            <p
              className="self-stretch text-center justify-start text-[#00b3e0] text-3xl font-medium font-['Pretendard']"
              style={{
                background: 'linear-gradient(270deg, #00B3E0 0%, #2883FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              070-4589-9109
            </p>
            <a
              href='tel:07045899109'
              className='cursor-pointer bg-white self-stretch px-10 py-6 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#2289fb] inline-flex justify-center items-center gap-2.5'
            >
              <span className="text-center justify-center text-[#2289fb] text-3xl font-semibold font-['Pretendard']">
                전화걸기
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CustomerService247
