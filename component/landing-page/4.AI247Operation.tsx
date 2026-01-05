'use client'

import Image from 'next/image'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import InViewWrapper from './InViewWrapper'

const AI247Operation = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  }

  return !isPcOrTablet ? (
    <section
      ref={ref}
      id={'ai_247_operation_section_title'}
      className='w-full px-8 py-20 bg-[#1d2232] inline-flex flex-col justify-start items-center gap-[30px] overflow-hidden'
    >
      <motion.div
        className='flex flex-col justify-start items-center gap-5'
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='w-[131px] h-8 relative bg-gradient-to-r from-[#a95bf1] to-[#f9bfed] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#6d00d1]/20 overflow-hidden'>
            <div className='w-[131px] h-8 left-[0.50px] top-0 absolute bg-white/60 backdrop-blur-[5px]' />
            <div className='left-[20.50px] top-[8px] absolute flex justify-center items-center gap-[5px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                className={'mb-[4px]'}
              >
                <g clipPath='url(#clip0_1240_4836)'>
                  <path
                    d='M12 2C12.663 2 13.2989 2.26339 13.7678 2.73223C14.2366 3.20107 14.5 3.83696 14.5 4.5V6.6C14.1803 6.43668 13.8454 6.30505 13.5 6.207V6H3.5V11.5C3.5 11.8978 3.65804 12.2794 3.93934 12.5607C4.22064 12.842 4.60218 13 5 13H6.707C6.80633 13.3493 6.93733 13.6827 7.1 14H5C4.33696 14 3.70107 13.7366 3.23223 13.2678C2.76339 12.7989 2.5 12.163 2.5 11.5V4.5C2.5 3.83696 2.76339 3.20107 3.23223 2.73223C3.70107 2.26339 4.33696 2 5 2H12ZM12 3H5C4.60218 3 4.22064 3.15804 3.93934 3.43934C3.65804 3.72064 3.5 4.10218 3.5 4.5V5H13.5V4.5C13.5 4.10218 13.342 3.72064 13.0607 3.43934C12.7794 3.15804 12.3978 3 12 3ZM16.5 11.5C16.5 12.6935 16.0259 13.8381 15.182 14.682C14.3381 15.5259 13.1935 16 12 16C10.8065 16 9.66193 15.5259 8.81802 14.682C7.97411 13.8381 7.5 12.6935 7.5 11.5C7.5 10.3065 7.97411 9.16193 8.81802 8.31802C9.66193 7.47411 10.8065 7 12 7C13.1935 7 14.3381 7.47411 15.182 8.31802C16.0259 9.16193 16.5 10.3065 16.5 11.5ZM12 9C11.8674 9 11.7402 9.05268 11.6464 9.14645C11.5527 9.24021 11.5 9.36739 11.5 9.5V11.5C11.5 11.6326 11.5527 11.7598 11.6464 11.8536C11.7402 11.9473 11.8674 12 12 12H13.5C13.6326 12 13.7598 11.9473 13.8536 11.8536C13.9473 11.7598 14 11.6326 14 11.5C14 11.3674 13.9473 11.2402 13.8536 11.1464C13.7598 11.0527 13.6326 11 13.5 11H12.5V9.5C12.5 9.36739 12.4473 9.24021 12.3536 9.14645C12.2598 9.05268 12.1326 9 12 9Z'
                    fill='#6D00D1'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_4836'>
                    <rect width='16' height='16' fill='white' transform='translate(0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-center justify-center items-center text-[#6d00d1] text-[13px] font-semibold font-['Pretendard'] mt-[-4px]">
                24/7 AI 운영
              </p>
            </div>
          </div>
          <p className='flex flex-col justify-start items-center gap-2.5'>
            <span className="text-center justify-center items-center text-white/50 text-[26px] font-bold font-['Pretendard'] h-[31px]">
              사장님이 잠든 시간에도
            </span>
            <span className="text-center justify-center items-center text-[#fce6f3] text-[26px] font-bold font-['Pretendard'] h-[31px] whitespace-nowrap">
              포포넛은 스마트하게 일합니다
            </span>
          </p>
        </div>
        <div className='w-[291px] h-[44px] relative'>
          <p className='w-[291px] left-0 top-[-3px] absolute text-center justify-center'>
            <span className="text-white/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              ‘무중단 AI서비스’
            </span>
            <span className="text-white/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight break-keep">
              로 심야 예약, 자동 환불,
              <br />
              고객 알림까지 완전 자동화
            </span>
          </p>
        </div>
      </motion.div>
      <ul className='flex flex-col justify-start items-start gap-[50px]'>
        <li id={'ai_247_operation_section_content_1'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[310px] px-6 pt-6 bg-[#e6edff] rounded-3xl inline-flex justify-center items-start gap-2.5 overflow-hidden'
          >
            <div className='w-full inline-flex flex-col justify-start items-center gap-5'>
              <div className='w-full flex flex-col justify-start items-start gap-[5px]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='41' height='40' viewBox='0 0 41 40' fill='none'>
                  <g clipPath='url(#clip0_1240_4845)'>
                    <path
                      d='M26.1023 32.127C26.1023 35.22 23.5953 37.727 20.5023 37.727C17.4093 37.727 14.9023 35.22 14.9023 32.127H26.1023Z'
                      fill='#FF9E00'
                    />
                    <path
                      d='M17.125 5.64995C17.125 3.78495 18.637 2.27295 20.502 2.27295C22.367 2.27295 23.879 3.78495 23.879 5.64995H17.126H17.125Z'
                      fill='#FF9E00'
                    />
                    <path
                      d='M6.60457 18.823C6.60457 10.842 13.3326 4.433 21.4256 4.957C28.8116 5.435 34.3966 11.898 34.3966 19.299V25.378L36.7606 29.472C37.4416 30.652 36.5906 32.127 35.2276 32.127H5.77257C4.41057 32.127 3.55857 30.652 4.23957 29.472L6.60357 25.378L6.60457 18.823Z'
                      fill='#FFC000'
                    />
                    <circle cx='31.7016' cy='6.58755' r='3.6' fill='#F83A3A' />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_4845'>
                      <rect width='40' height='40' fill='white' transform='translate(0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="justify-start text-[#4a4e5b] text-[28px] font-bold font-['Pretendard']">
                  빈자리 알림
                </h2>
                <p className="justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug">
                  예약 대기 중 빈자리가 생기면
                  <br /> 고객님께 알려드려요!
                </p>
              </div>
              <Image
                className='w-[280px] h-[239px] object-cover'
                src={'/assets/landing/AI247Operation_reservationPending.png'}
                alt={'포포넛 빈자리 알림 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약 대기 고객을 위한 자동 알림'}
                width={1000}
                height={1000}
              />
            </div>
          </motion.div>
        </li>
        <li id={'ai_247_operation_section_content_2'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[310px] h-[402px] px-6 pt-6 bg-[#faeff6] rounded-3xl inline-flex justify-center items-start gap-2.5 overflow-hidden'
          >
            <div className='w-full inline-flex flex-col justify-start items-center gap-5'>
              <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='41' height='40' viewBox='0 0 41 40' fill='none'>
                  <g clipPath='url(#clip0_1240_4858)'>
                    <circle cx='20.2389' cy='20.1813' r='14.235' fill='#FAEFF6' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M20.5 39.5C31.2698 39.5 40 30.7698 40 20C40 9.23015 31.2698 0.5 20.5 0.5C9.73015 0.5 1 9.23015 1 20C1 30.7698 9.73015 39.5 20.5 39.5ZM14.5915 13.6762C14.4628 13.1777 14.1423 12.7504 13.6999 12.4873C13.2574 12.2243 12.7289 12.1469 12.2295 12.272C11.7302 12.397 11.3006 12.7145 11.0344 13.1551C10.7682 13.5957 10.687 14.1236 10.8085 14.6239L11.179 16.1H10.75C10.2328 16.1 9.73684 16.3054 9.37114 16.6711C9.00545 17.0368 8.8 17.5328 8.8 18.05C8.8 18.5672 9.00545 19.0632 9.37114 19.4289C9.73684 19.7946 10.2328 20 10.75 20H12.154L12.6415 21.95H10.75C10.2328 21.95 9.73684 22.1554 9.37114 22.5211C9.00545 22.8868 8.8 23.3828 8.8 23.9C8.8 24.4172 9.00545 24.9132 9.37114 25.2789C9.73684 25.6446 10.2328 25.85 10.75 25.85H13.6165L14.5466 29.5745C15.0653 31.6552 17.9826 31.7682 18.6611 29.7305L20.5 24.2159L22.3389 29.7305C23.0175 31.7682 25.9347 31.6552 26.4534 29.5745L27.3855 25.85H30.25C30.7672 25.85 31.2632 25.6446 31.6289 25.2789C31.9946 24.9132 32.2 24.4172 32.2 23.9C32.2 23.3828 31.9946 22.8868 31.6289 22.5211C31.2632 22.1554 30.7672 21.95 30.25 21.95H28.3585L28.846 20H30.25C30.7672 20 31.2632 19.7946 31.6289 19.4289C31.9946 19.0632 32.2 18.5672 32.2 18.05C32.2 17.5328 31.9946 17.0368 31.6289 16.6711C31.2632 16.3054 30.7672 16.1 30.25 16.1H29.821L30.1915 14.6239C30.2558 14.3748 30.2702 14.1154 30.2338 13.8608C30.1974 13.6061 30.111 13.3611 29.9795 13.14C29.8481 12.9189 29.6742 12.726 29.4678 12.5723C29.2615 12.4187 29.0268 12.3075 28.7772 12.2449C28.5277 12.1824 28.2683 12.1699 28.0139 12.2081C27.7595 12.2463 27.5151 12.3345 27.295 12.4675C27.0748 12.6005 26.8831 12.7758 26.731 12.9832C26.5788 13.1907 26.4692 13.4262 26.4085 13.6762L24.1329 22.7807L22.3506 17.4338C22.2214 17.0451 21.9731 16.7069 21.641 16.4672C21.3088 16.2276 20.9096 16.0986 20.5 16.0986C20.0904 16.0986 19.6912 16.2276 19.359 16.4672C19.0269 16.7069 18.7786 17.0451 18.6495 17.4338L16.8672 22.7807L14.5915 13.6762Z'
                      fill='#FFC000'
                    />
                    <path
                      d='M11.04 3.56126L11.4541 12.0687C11.4788 12.5774 11.0866 12.9893 10.5773 12.9894L2.05978 12.9917C1.63628 12.9918 1.39898 12.4806 1.68391 12.1813L3.66523 10.1007C3.86167 9.89442 3.846 9.55905 3.6288 9.35222L1.32189 7.15542C1.13789 6.98021 1.12404 6.69557 1.29098 6.52026L4.53941 3.10899C4.70635 2.93368 4.99133 2.93361 5.17533 3.10882L7.48224 5.30562C7.69875 5.51179 8.03455 5.51237 8.23161 5.30542L10.2129 3.22479C10.4979 2.92558 11.0195 3.13826 11.04 3.56126Z'
                      fill='#FF9E00'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_4858'>
                      <rect width='40' height='40' fill='white' transform='translate(0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="justify-start text-[#4a4e5b] text-[28px] font-bold font-['Pretendard']">
                  예약금 자동 환불
                </h2>
                <p className="justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug">
                  이용완료 알림과 함께
                  <br /> 예약금이 자동 환불돼요!
                </p>
              </div>
              <Image
                className='w-[280px] h-[232px] object-cover'
                src={'/assets/landing/AI247Operation_depositRefund.png'}
                alt={'포포넛 예약금 자동 환불 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약 완료 후 자동 환불'}
                width={1000}
                height={1000}
              />
            </div>
          </motion.div>
        </li>
      </ul>
    </section>
  ) : (
    <section
      ref={ref}
      id={'ai_247_operation_section_title'}
      className='w-full relative bg-[#1d2232] overflow-hidden'
      style={{
        height: isTablet ? '1125px' : '1625px'
      }}
    >
      <motion.div
        className={'top-[100px] absolute flex justify-center w-full scale-[0.8] mt-[-20px]'}
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='inline-flex flex-col justify-start items-center gap-5'>
          <div className='flex flex-col justify-start items-center gap-10'>
            <div className='w-[244px] h-[61px] relative bg-gradient-to-r from-[#a95bf1] to-[#f9bfed] rounded-[100px] outline outline-2 outline-offset-[-2px] outline-[#6d00d1]/20 overflow-hidden'>
              <div className='w-[244px] h-[61px] left-0 top-[0.47px] absolute bg-white/60 backdrop-blur-[5px]' />
              <div className='left-[41px] top-[16px] absolute inline-flex justify-center items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                  <g clipPath='url(#clip0_1001_739)'>
                    <path
                      d='M17.75 3.03467C18.7446 3.03467 19.6984 3.42976 20.4016 4.13302C21.1049 4.83628 21.5 5.79011 21.5 6.78467V9.93467C21.0204 9.68968 20.518 9.49224 20 9.34517V9.03467H5V17.2847C5 17.8814 5.23705 18.4537 5.65901 18.8757C6.08097 19.2976 6.65326 19.5347 7.25 19.5347H9.8105C9.9595 20.0587 10.156 20.5587 10.4 21.0347H7.25C6.25544 21.0347 5.30161 20.6396 4.59835 19.9363C3.89509 19.2331 3.5 18.2792 3.5 17.2847V6.78467C3.5 5.79011 3.89509 4.83628 4.59835 4.13302C5.30161 3.42976 6.25544 3.03467 7.25 3.03467H17.75ZM17.75 4.53467H7.25C6.65326 4.53467 6.08097 4.77172 5.65901 5.19368C5.23705 5.61563 5 6.18793 5 6.78467V7.53467H20V6.78467C20 6.18793 19.7629 5.61563 19.341 5.19368C18.919 4.77172 18.3467 4.53467 17.75 4.53467ZM24.5 17.2847C24.5 19.0749 23.7888 20.7918 22.523 22.0576C21.2571 23.3235 19.5402 24.0347 17.75 24.0347C15.9598 24.0347 14.2429 23.3235 12.977 22.0576C11.7112 20.7918 11 19.0749 11 17.2847C11 15.4945 11.7112 13.7776 12.977 12.5117C14.2429 11.2458 15.9598 10.5347 17.75 10.5347C19.5402 10.5347 21.2571 11.2458 22.523 12.5117C23.7888 13.7776 24.5 15.4945 24.5 17.2847ZM17.75 13.5347C17.5511 13.5347 17.3603 13.6137 17.2197 13.7543C17.079 13.895 17 14.0858 17 14.2847V17.2847C17 17.4836 17.079 17.6743 17.2197 17.815C17.3603 17.9557 17.5511 18.0347 17.75 18.0347H20C20.1989 18.0347 20.3897 17.9557 20.5303 17.815C20.671 17.6743 20.75 17.4836 20.75 17.2847C20.75 17.0858 20.671 16.895 20.5303 16.7543C20.3897 16.6137 20.1989 16.5347 20 16.5347H18.5V14.2847C18.5 14.0858 18.421 13.895 18.2803 13.7543C18.1397 13.6137 17.9489 13.5347 17.75 13.5347Z'
                      fill='#6D00D1'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1001_739'>
                      <rect width='24' height='24' fill='white' transform='translate(0.5 0.034668)' />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-center justify-center text-[#6d00d1] text-2xl font-semibold font-['Pretendard']">
                  24/7 AI 운영
                </p>
              </div>
            </div>
            <p className='flex flex-col justify-start items-center gap-2.5'>
              <span className="text-center justify-center text-white/50 text-6xl font-bold font-['Pretendard']">
                사장님이 잠든 시간에도
              </span>
              <span className="text-center justify-center text-[#fce6f3] text-[70px] font-bold font-['Pretendard']">
                포포넛은 스마트하게 일합니다
              </span>
            </p>
          </div>
          <p className='text-center justify-center'>
            <span className="text-white/70 text-[34px] font-bold font-['Pretendard'] leading-[45px] tracking-tight">
              ‘무중단 AI서비스’
            </span>
            <span className="text-white/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
              로 심야 예약, 자동 환불, 고객 알림까지 완전 자동화
            </span>
          </p>
        </div>
      </motion.div>
      <div className='w-[953px] h-[953px] left-[1456px] top-[-488.53px] absolute bg-[#3D475B] rounded-full blur-[32px]' />
      <div className='w-[462px] h-[462px] left-[-112px] top-[647.47px] absolute bg-[#3D475B] rounded-full blur-[32px]' />
      <ul
        id={'ai_247_operation_section_content'}
        className={'top-[522.47px] absolute w-full flex justify-center scale-[0.8] mt-[-100px]'}
      >
        <div className='w-[1580px] left-[170px] inline-flex items-start gap-[100px]'>
          {/*  빈자리 알림  */}
          <li
            id={'ai_247_operation_section_content_1'}
          >
            <motion.div
              variants={item}
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              className='p-[60px] bg-[#e6edff] rounded-[40px] flex justify-start items-center gap-2.5 overflow-hidden'
              style={{
                scale: isTablet ? 0.5 : 1,
                transformOrigin: 'right top'
              }}
            >
              <InViewWrapper className='w-[620px] inline-flex flex-col justify-start items-start gap-[51px]'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='none'>
                    <g clipPath='url(#clip0_1001_753)'>
                      <path
                        d='M64 80.3208C64 88.0533 57.7325 94.3208 50 94.3208C42.2675 94.3208 36 88.0533 36 80.3208H64Z'
                        fill='#FF9E00'
                      />
                      <path
                        d='M41.5566 14.1285C41.5566 9.46604 45.3366 5.68604 49.9991 5.68604C54.6616 5.68604 58.4416 9.46604 58.4416 14.1285H41.5591H41.5566Z'
                        fill='#FF9E00'
                      />
                      <path
                        d='M15.2595 47.0608C15.2595 27.1083 32.0795 11.0858 52.312 12.3958C70.777 13.5908 84.7395 29.7483 84.7395 48.2508V63.4483L90.6495 73.6833C92.352 76.6333 90.2245 80.3208 86.817 80.3208H13.1795C9.77447 80.3208 7.64447 76.6333 9.34697 73.6833L15.257 63.4483L15.2595 47.0608Z'
                        fill='#FFC000'
                      />
                      <circle cx='78' cy='16.4722' r='9' fill='#F83A3A' />
                    </g>
                    <defs>
                      <clipPath id='clip0_1001_753'>
                        <rect width='100' height='100' fill='white' transform='translate(0 0.00341797)' />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="self-stretch justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard']">
                    빈자리 알림
                  </h2>
                  <p className="w-[620px] justify-start text-[#1d2232]/50 text-[40px] font-normal font-['Pretendard'] leading-[50px]">
                    예약 대기 중 빈자리가 생기면
                    <br /> 고객님께 알려드려요!
                  </p>
                </div>
                <div className='self-stretch h-[530px] relative overflow-hidden'>
                  <Image
                    className='w-[570px] h-[530] left-[25px] top-0 absolute'
                    src={'/assets/landing/IPhoneMockup.png'}
                    width={570}
                    height={530}
                    alt={'iphone'}
                    priority
                  />
                  <div className='top-[321.47px] absolute inline-flex justify-start items-start gap-[66px] overflow-hidden'>
                    <Image
                      className=''
                      src={'/assets/landing/ReservationPendingAlarm.png'}
                      width={609}
                      height={106}
                      alt={'포포넛 빈자리 알림 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약 대기 고객을 위한 자동 알림'}
                      priority
                    />
                  </div>
                </div>
              </InViewWrapper>
            </motion.div>
          </li>

          {/*  예약금 자동 환불  */}
          <li
            id={'ai_247_operation_section_content_2'}
          >
            <motion.div
              variants={item}
              initial='hidden'
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { type: 'spring' as const, stiffness: 100, delay: 0.2 }
              }}
              viewport={{ once: true, amount: 0.2 }}
              className='p-[60px] bg-[#faeff6] rounded-[40px] flex justify-start items-center gap-2.5 overflow-hidden'
              style={{
                scale: isTablet ? 0.5 : 1,
                transformOrigin: 'left top'
              }}
            >
              <InViewWrapper className='w-[620px] inline-flex flex-col justify-start items-start gap-[51px]'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='none'>
                    <g clipPath='url(#clip0_1001_820)'>
                      <circle cx='61.8798' cy='50.4154' r='32.12' fill='#FAEFF6' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M50 94C74.3012 94 94 74.3012 94 50C94 25.6988 74.3012 6 50 6C25.6988 6 6 25.6988 6 50C6 74.3012 25.6988 94 50 94ZM36.668 35.7308C36.3777 34.6062 35.6545 33.6419 34.6561 33.0484C33.6577 32.4548 32.4651 32.2801 31.3384 32.5624C30.2117 32.8446 29.2423 33.5609 28.6417 34.5551C28.041 35.5492 27.8578 36.7405 28.132 37.8692L28.968 41.2H28C26.833 41.2 25.7139 41.6636 24.8887 42.4887C24.0636 43.3139 23.6 44.433 23.6 45.6C23.6 46.767 24.0636 47.8861 24.8887 48.7113C25.7139 49.5364 26.833 50 28 50H31.168L32.268 54.4H28C26.833 54.4 25.7139 54.8636 24.8887 55.6887C24.0636 56.5139 23.6 57.633 23.6 58.8C23.6 59.967 24.0636 61.0861 24.8887 61.9113C25.7139 62.7364 26.833 63.2 28 63.2H34.468L36.5668 71.604C37.7372 76.2988 44.3196 76.554 45.8508 71.956L50 59.5128L54.1492 71.956C55.6804 76.554 62.2628 76.2988 63.4332 71.604L65.5364 63.2H72C73.167 63.2 74.2861 62.7364 75.1113 61.9113C75.9364 61.0861 76.4 59.967 76.4 58.8C76.4 57.633 75.9364 56.5139 75.1113 55.6887C74.2861 54.8636 73.167 54.4 72 54.4H67.732L68.832 50H72C73.167 50 74.2861 49.5364 75.1113 48.7113C75.9364 47.8861 76.4 46.767 76.4 45.6C76.4 44.433 75.9364 43.3139 75.1113 42.4887C74.2861 41.6636 73.167 41.2 72 41.2H71.032L71.868 37.8692C72.0131 37.3072 72.0455 36.722 71.9634 36.1473C71.8813 35.5727 71.6864 35.02 71.3898 34.5211C71.0931 34.0221 70.7007 33.5868 70.2351 33.2402C69.7695 32.8935 69.2399 32.6425 68.6769 32.5014C68.1138 32.3604 67.5284 32.3321 66.9544 32.4183C66.3803 32.5045 65.829 32.7034 65.3322 33.0036C64.8354 33.3037 64.4029 33.6992 64.0596 34.1673C63.7163 34.6354 63.469 35.1667 63.332 35.7308L58.1972 56.2744L54.1756 44.2096C53.8842 43.3325 53.324 42.5694 52.5745 42.0286C51.825 41.4879 50.9242 41.1968 50 41.1968C49.0758 41.1968 48.175 41.4879 47.4255 42.0286C46.676 42.5694 46.1158 43.3325 45.8244 44.2096L41.8028 56.2744L36.668 35.7308Z'
                        fill='#FFC000'
                      />
                      <path
                        d='M25.7188 4.76704L26.6218 23.3217C26.6758 24.4311 25.8203 25.3294 24.7096 25.3297L6.13303 25.3346C5.20938 25.3348 4.69185 24.2198 5.31327 23.5673L9.63449 19.0294C10.0629 18.5795 10.0288 17.8481 9.55504 17.397L4.52371 12.6058C4.12241 12.2237 4.0922 11.6029 4.45629 11.2206L11.5411 3.78065C11.9052 3.3983 12.5267 3.39814 12.928 3.78028L17.9593 8.57145C18.4315 9.02111 19.1639 9.02236 19.5937 8.57102L23.9149 4.03319C24.5363 3.38062 25.6739 3.84448 25.7188 4.76704Z'
                        fill='#FF9E00'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1001_820'>
                        <rect width='100' height='100' fill='white' transform='translate(0 0.00341797)' />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="self-stretch justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard']">
                    예약금 자동 환불
                  </h2>
                  <p className="w-[620px] justify-start text-[#1d2232]/50 text-[40px] font-normal font-['Pretendard'] leading-[50px]">
                    이용완료 알림과 함께
                    <br /> 예약금이 자동 환불돼요!
                  </p>
                </div>
                <div className='self-stretch h-[530px] relative overflow-hidden'>
                  <Image
                    className='w-[570px] h-[531px] left-[25px] top-[0.47px] absolute'
                    src={'/assets/landing/DepositAutoRefund.png'}
                    width={570}
                    height={531}
                    alt={'포포넛 예약금 자동 환불 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약 완료 후 자동 환불'}
                    priority
                  />
                </div>
              </InViewWrapper>
            </motion.div>
          </li>
        </div>
      </ul>
    </section>
  )
})

export default AI247Operation
