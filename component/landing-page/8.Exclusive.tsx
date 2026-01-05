'use client'

import Exclusive_sendAgreementAlarm from '../../public/assets/landing/Exclusive_sendAgreementAlarm'
import Exclusive_calendar from '../../public/assets/landing/Exclusive_calendar.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import InViewWrapper from './InViewWrapper'

const Exclusive = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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
      id={'exclusive_title'}
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
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <g clipPath='url(#clip0_1240_5050)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.52718 2.20501C7.26451 2.54767 6.96851 3.07701 6.53784 3.84901L6.31984 4.24034L6.28051 4.31101C6.08051 4.67101 5.91051 4.97634 5.63784 5.18301C5.36251 5.39234 5.02651 5.46767 4.63584 5.55567L4.55984 5.57301L4.13584 5.66901C3.29918 5.85834 2.72918 5.98834 2.33984 6.14234C1.95918 6.29167 1.87918 6.41501 1.84851 6.51301C1.81584 6.61701 1.81518 6.77634 2.04184 7.13767C2.27318 7.50434 2.66318 7.96167 3.23251 8.62834L3.52184 8.96634L3.57184 9.02434C3.84051 9.33767 4.06451 9.59901 4.16718 9.92968C4.26918 10.2583 4.23518 10.603 4.19384 11.0217L4.18718 11.0997L4.14318 11.551C4.05651 12.439 3.99918 13.051 4.01851 13.491C4.03851 13.931 4.13118 14.0523 4.20518 14.1083C4.27051 14.1583 4.39184 14.213 4.78718 14.0997C5.18918 13.985 5.72385 13.7403 6.50718 13.3797L6.90451 13.197L6.97718 13.1637C7.34051 12.995 7.65518 12.8497 7.99918 12.8497C8.34318 12.8497 8.65784 12.995 9.02118 13.163C9.04473 13.1746 9.06918 13.1857 9.09451 13.1963L9.49118 13.3797C10.2745 13.7403 10.8092 13.985 11.2112 14.0997C11.6065 14.213 11.7278 14.1583 11.7932 14.1083C11.8672 14.0523 11.9598 13.9303 11.9798 13.491C11.9998 13.051 11.9412 12.439 11.8552 11.551L11.8112 11.0997L11.8045 11.0217C11.7632 10.603 11.7292 10.2583 11.8312 9.92968C11.9338 9.59901 12.1578 9.33767 12.4265 9.02434L12.4765 8.96634L12.7658 8.62834C13.3352 7.96167 13.7252 7.50434 13.9558 7.13767C14.1832 6.77634 14.1825 6.61767 14.1498 6.51301C14.1192 6.41501 14.0392 6.29167 13.6585 6.14234C13.2685 5.98834 12.6992 5.85834 11.8625 5.66901L11.4385 5.57301L11.3625 5.55567C10.9718 5.46767 10.6358 5.39234 10.3605 5.18301C10.0872 4.97634 9.91851 4.67167 9.71784 4.31101L9.67918 4.24034L9.46051 3.84901C9.02985 3.07701 8.73384 2.54767 8.47118 2.20501C8.20851 1.86234 8.07518 1.83301 7.99918 1.83301C7.92318 1.83301 7.78918 1.86234 7.52718 2.20501ZM6.73385 1.59701C7.05051 1.18234 7.44318 0.833008 7.99918 0.833008C8.55518 0.833008 8.94718 1.18234 9.26518 1.59701C9.57718 2.00501 9.90851 2.59901 10.3132 3.32501L10.5525 3.75367C10.8138 4.22301 10.8812 4.32301 10.9652 4.38701C11.0452 4.44767 11.1498 4.48234 11.6585 4.59767L12.1252 4.70301C12.9092 4.88034 13.5552 5.02634 14.0252 5.21167C14.5132 5.40434 14.9405 5.68767 15.1052 6.21634C15.2678 6.73967 15.0852 7.22101 14.8025 7.66967C14.5278 8.10634 14.0892 8.61967 13.5532 9.24634L13.2365 9.61634C12.8918 10.019 12.8198 10.1177 12.7858 10.2263C12.7518 10.3377 12.7545 10.4663 12.8072 11.003L12.8545 11.495C12.9358 12.3323 13.0018 13.015 12.9785 13.535C12.9552 14.065 12.8352 14.573 12.3985 14.905C11.9532 15.2423 11.4352 15.205 10.9352 15.061C10.4505 14.9223 9.84651 14.6443 9.11318 14.3063L8.67585 14.105C8.19718 13.885 8.09518 13.8497 7.99918 13.8497C7.90318 13.8497 7.80118 13.885 7.32251 14.105L6.88584 14.3063C6.15184 14.6443 5.54784 14.9223 5.06318 15.061C4.56318 15.2043 4.04518 15.2423 3.60051 14.905C3.16318 14.573 3.04318 14.065 3.01984 13.5357C2.99651 13.0157 3.06251 12.3323 3.14384 11.4957L3.19184 11.003C3.24384 10.4657 3.24651 10.3377 3.21184 10.2263C3.17851 10.1177 3.10651 10.0197 2.76184 9.61634L2.44518 9.24634C1.90984 8.61967 1.47118 8.10634 1.19651 7.67034C0.913178 7.22101 0.730512 6.73967 0.893178 6.21634C1.05784 5.68767 1.48518 5.40434 1.97318 5.21167C2.44318 5.02634 3.08918 4.88034 3.87318 4.70301L3.91518 4.69367L4.33918 4.59767C4.84851 4.48234 4.95251 4.44767 5.03318 4.38634C5.11718 4.32301 5.18451 4.22301 5.44651 3.75367L5.68518 3.32501C6.08984 2.59834 6.42118 2.00501 6.73318 1.59701'
                  fill='#1D7DDF'
                />
              </g>
              <defs>
                <clipPath id='clip0_1240_5050'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <p className="text-center justify-center text-[#1d7ddf] text-[13px] font-semibold font-['Pretendard']">
              포포넛의 차별점
            </p>
          </div>
          <p className='flex flex-col justify-start items-center gap-2.5' style={{}}>
            <span className="text-center justify-center text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard'] h-[31px]">
              기능은 비슷해 보여도
            </span>
            <span className="text-center justify-center text-[#623112] text-[26px] font-bold font-['Pretendard']">
              결과는 다릅니다
            </span>
          </p>
        </div>
        <div className='w-[291px] h-[38px] relative'>
          <p className="w-[291px] left-0 top-[-3px] absolute text-center justify-center text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
            고객을 이해하는 개발자가 만든 포포넛은
            <br />
            디테일과 완성도에서 다른 결과를 만듭니다.
          </p>
        </div>
      </motion.div>
      <section id={'exclusive_content_1'} className={'w-full'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='w-full flex flex-col justify-center items-center gap-10'
        >
          <div className='w-full h-px bg-[#f1f1f2]' />
          <div className='w-full rounded-[10px] flex flex-col justify-center items-center gap-4'>
            <div className='w-full flex flex-col justify-center items-start gap-[5px]'>
              <p className="flex justify-center text-[#dee1e7] text-[13px] font-bold font-['Pretendard']">UX 혁신</p>
              <p className='w-full flex flex-col justify-start items-start gap-[5px]'>
                <span className="w-full justify-center text-[#4a4e5b] text-xl font-bold font-['Pretendard']">
                  똑같은 타임라인이 아닌,
                </span>
                <span
                  className="self-stretch justify-start text-[#61d3fb] text-xl font-bold font-['Pretendard']"
                  style={{
                    background:
                      'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  직관적인 비주얼 캘린더
                </span>
              </p>
            </div>
            <div className='w-full h-[206px] relative rounded-[10px] overflow-hidden flex justify-center items-center'>
              <Image
                src={Exclusive_calendar}
                alt={'직관적인 비주얼 캘린더'}
                width={1500}
                height={1500}
                className={'w-[300px] h-[206.62px] object-cover'}
                placeholder={'blur'}
              />
            </div>
            <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
              <div className='inline-flex justify-start items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                  <g clipPath='url(#clip0_1240_5067)'>
                    <circle cx='10' cy='10.6094' r='10' fill='#EE7373' fillOpacity='0.1' />
                    <path
                      d='M6.18941 6.79878C6.44196 6.54624 6.85141 6.54624 7.10395 6.79878L13.8106 13.5054C14.0631 13.758 14.0631 14.1674 13.8106 14.42C13.558 14.6725 13.1486 14.6725 12.8961 14.42L6.18941 7.71333C5.93687 7.46078 5.93687 7.05133 6.18941 6.79878Z'
                      fill='#EE7373'
                    />
                    <path
                      d='M13.8106 6.79878C14.0631 7.05133 14.0631 7.46078 13.8106 7.71333L7.10395 14.42C6.85141 14.6725 6.44195 14.6725 6.18941 14.42C5.93686 14.1674 5.93686 13.758 6.18941 13.5054L12.896 6.79878C13.1486 6.54624 13.558 6.54624 13.8106 6.79878Z'
                      fill='#EE7373'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5067'>
                      <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='inline-flex flex-col justify-start items-start'>
                  <p className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard'] break-keep">
                    일반 서비스
                  </p>
                  <p className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard']">
                    복잡한 타임라인으로 예약 현황 파악이 어려움
                  </p>
                </div>
              </div>
              <div className='inline-flex justify-start items-center gap-2.5 '>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                  <g clipPath='url(#clip0_1240_5074)'>
                    <circle cx='10' cy='10.6094' r='10' fill='#7BC13A' fillOpacity='0.1' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.7711 7.05578C14.9117 7.19642 14.9907 7.38715 14.9907 7.58603C14.9907 7.7849 14.9117 7.97563 14.7711 8.11628L9.14956 13.7378C9.07527 13.8121 8.98707 13.871 8.89 13.9112C8.79293 13.9515 8.68888 13.9722 8.58381 13.9722C8.47874 13.9722 8.37469 13.9515 8.27762 13.9112C8.18055 13.871 8.09235 13.8121 8.01806 13.7378L5.22506 10.9453C5.15343 10.8761 5.09629 10.7933 5.05698 10.7018C5.01768 10.6103 4.99699 10.5119 4.99612 10.4123C4.99526 10.3127 5.01423 10.214 5.05194 10.1218C5.08965 10.0296 5.14534 9.9459 5.21576 9.87548C5.28618 9.80506 5.36992 9.74937 5.46209 9.71166C5.55427 9.67395 5.65303 9.65497 5.75261 9.65584C5.8522 9.6567 5.95061 9.67739 6.04211 9.7167C6.13362 9.75601 6.21637 9.81314 6.28556 9.88478L8.58356 12.1828L13.7101 7.05578C13.7797 6.98608 13.8624 6.93079 13.9534 6.89307C14.0445 6.85535 14.142 6.83594 14.2406 6.83594C14.3391 6.83594 14.4367 6.85535 14.5277 6.89307C14.6187 6.93079 14.7014 6.98608 14.7711 7.05578Z'
                      fill='#7BC13A'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5074'>
                      <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <p className='flex flex-col justify-start items-start'>
                  <span className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard']">
                    포포넛
                  </span>
                  <span className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard']">
                    신규 예약과 결제 여부를
                  </span>
                  <span className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard']">
                    한눈에 파악할 수 있는 직관적 디자인
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id={'exclusive_content_2'} className={'w-full'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='self-stretch flex flex-col justify-start items-center gap-10'
        >
          <div className='self-stretch h-px bg-[#f1f1f2]' />
          <div className='self-stretch rounded-[10px] flex flex-col justify-center items-center gap-4'>
            <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
              <p className="justify-start text-[#dee1e7] text-[13px] font-bold font-['Pretendard']">완전 자동화</p>
              <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                <p className="self-stretch justify-start text-[#4a4e5b] text-xl font-bold font-['Pretendard']">
                  만료일 기준
                </p>
                <h2
                  className="self-stretch justify-start text-[#61d3fb] text-xl font-bold font-['Pretendard']"
                  style={{
                    background:
                      'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  일괄 발송 전자동의서
                </h2>
              </div>
            </div>
            <div className='self-stretch h-[206px] relative bg-[#f0f1f3] rounded-[10px] overflow-hidden flex justify-center items-center'>
              <Exclusive_sendAgreementAlarm width={260} height={185} />
            </div>
            <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
              <div className='inline-flex justify-start items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                  <g clipPath='url(#clip0_1240_5092)'>
                    <circle cx='10' cy='10.6094' r='10' fill='#EE7373' fillOpacity='0.1' />
                    <path
                      d='M6.18941 6.79878C6.44196 6.54624 6.85141 6.54624 7.10395 6.79878L13.8106 13.5054C14.0631 13.758 14.0631 14.1674 13.8106 14.42C13.558 14.6725 13.1486 14.6725 12.8961 14.42L6.18941 7.71333C5.93687 7.46078 5.93687 7.05133 6.18941 6.79878Z'
                      fill='#EE7373'
                    />
                    <path
                      d='M13.8106 6.79878C14.0631 7.05133 14.0631 7.46078 13.8106 7.71333L7.10395 14.42C6.85141 14.6725 6.44195 14.6725 6.18941 14.42C5.93686 14.1674 5.93686 13.758 6.18941 13.5054L12.896 6.79878C13.1486 6.54624 13.558 6.54624 13.8106 6.79878Z'
                      fill='#EE7373'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5092'>
                      <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='inline-flex flex-col justify-start items-start'>
                  <p className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard']">
                    일반 서비스
                  </p>
                  <p className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard'] break-keep">
                    수동으로 동의서 관리, 만료일 추적이 번거로움
                  </p>
                </div>
              </div>
              <div className='inline-flex justify-start items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                  <g clipPath='url(#clip0_1240_5099)'>
                    <circle cx='10' cy='10.6094' r='10' fill='#7BC13A' fillOpacity='0.1' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.7711 7.05578C14.9117 7.19642 14.9907 7.38715 14.9907 7.58603C14.9907 7.7849 14.9117 7.97563 14.7711 8.11628L9.14956 13.7378C9.07527 13.8121 8.98707 13.871 8.89 13.9112C8.79293 13.9515 8.68888 13.9722 8.58381 13.9722C8.47874 13.9722 8.37469 13.9515 8.27762 13.9112C8.18055 13.871 8.09235 13.8121 8.01806 13.7378L5.22506 10.9453C5.15343 10.8761 5.09629 10.7933 5.05698 10.7018C5.01768 10.6103 4.99699 10.5119 4.99612 10.4123C4.99526 10.3127 5.01423 10.214 5.05194 10.1218C5.08965 10.0296 5.14534 9.9459 5.21576 9.87548C5.28618 9.80506 5.36992 9.74937 5.46209 9.71166C5.55427 9.67395 5.65303 9.65497 5.75261 9.65584C5.8522 9.6567 5.95061 9.67739 6.04211 9.7167C6.13362 9.75601 6.21637 9.81314 6.28556 9.88478L8.58356 12.1828L13.7101 7.05578C13.7797 6.98608 13.8624 6.93079 13.9534 6.89307C14.0445 6.85535 14.142 6.83594 14.2406 6.83594C14.3391 6.83594 14.4367 6.85535 14.5277 6.89307C14.6187 6.93079 14.7014 6.98608 14.7711 7.05578Z'
                      fill='#7BC13A'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5099'>
                      <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='inline-flex flex-col justify-start items-start'>
                  <p className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard']">
                    포포넛
                  </p>
                  <p className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard'] break-keep">
                    만료일 기준 자동 발송으로 서류 관리 완전 자동화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id={'exclusive_content_3'} className={'w-full'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='self-stretch flex flex-col justify-start items-center gap-10'
        >
          <div className='self-stretch h-px bg-[#f1f1f2]' />
          <div className='self-stretch rounded-[10px] flex flex-col justify-center items-center gap-4'>
            <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
              <p className="justify-start text-[#dee1e7] text-[13px] font-bold font-['Pretendard']">
                개인화 메시징
              </p>
              <p className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                <span className="self-stretch justify-start text-[#4a4e5b] text-xl font-bold font-['Pretendard']">
                  상황에 맞는
                </span>
                <span
                  className="self-stretch justify-start text-[#61d3fb] text-xl font-bold font-['Pretendard']"
                  style={{
                    background:
                      'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  개인화된 알림톡
                </span>
              </p>
            </div>
            <div className='w-full h-[206px] relative bg-[#f0f1f3] rounded-[10px] overflow-hidden flex justify-center gap-[5px]'>
              <Image
                className='w-[139px] h-[195px] mt-4 object-cover'
                width={342}
                height={458}
                src={'/assets/landing/Exclusive_personalizedAlarm1.png'}
                alt={'Exclusive_personalizedAlarm1'}
              />
              <Image
                className='w-[139px] h-[195px]  object-cover'
                width={343}
                height={458}
                src={'/assets/landing/Exclusive_personalizedAlarm2.png'}
                alt={'Exclusive_personalizedAlarm2'}
              />
            </div>
            <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
              <div className='inline-flex justify-start items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
                  <g clipPath='url(#clip0_1240_5119)'>
                    <circle cx='10' cy='10.6094' r='10' fill='#EE7373' fillOpacity='0.1' />
                    <path
                      d='M6.18941 6.79878C6.44196 6.54624 6.85141 6.54624 7.10395 6.79878L13.8106 13.5054C14.0631 13.758 14.0631 14.1674 13.8106 14.42C13.558 14.6725 13.1486 14.6725 12.8961 14.42L6.18941 7.71333C5.93687 7.46078 5.93687 7.05133 6.18941 6.79878Z'
                      fill='#EE7373'
                    />
                    <path
                      d='M13.8106 6.79878C14.0631 7.05133 14.0631 7.46078 13.8106 7.71333L7.10395 14.42C6.85141 14.6725 6.44195 14.6725 6.18941 14.42C5.93686 14.1674 5.93686 13.758 6.18941 13.5054L12.896 6.79878C13.1486 6.54624 13.558 6.54624 13.8106 6.79878Z'
                      fill='#EE7373'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5119'>
                      <rect width='20' height='20' fill='white' transform='translate(0 0.5)' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='inline-flex flex-col justify-start items-start'>
                  <p className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard']">
                    일반 서비스
                  </p>
                  <p className="justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard'] break-keep">
                    획일적인 템플릿 메시지로 개성 없는 소통
                  </p>
                </div>
              </div>
              <div className='self-stretch inline-flex justify-start items-center gap-2.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <g clipPath='url(#clip0_1240_5126)'>
                    <circle cx='10' cy='10.1094' r='10' fill='#7BC13A' fillOpacity='0.1' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.7711 6.55578C14.9117 6.69642 14.9907 6.88715 14.9907 7.08603C14.9907 7.2849 14.9117 7.47563 14.7711 7.61628L9.14956 13.2378C9.07527 13.3121 8.98707 13.371 8.89 13.4112C8.79293 13.4515 8.68888 13.4722 8.58381 13.4722C8.47874 13.4722 8.37469 13.4515 8.27762 13.4112C8.18055 13.371 8.09235 13.3121 8.01806 13.2378L5.22506 10.4453C5.15343 10.3761 5.09629 10.2933 5.05698 10.2018C5.01768 10.1103 4.99699 10.0119 4.99612 9.91233C4.99526 9.81274 5.01423 9.71398 5.05194 9.62181C5.08965 9.52964 5.14534 9.4459 5.21576 9.37548C5.28618 9.30506 5.36992 9.24937 5.46209 9.21166C5.55427 9.17395 5.65303 9.15497 5.75261 9.15584C5.8522 9.1567 5.95061 9.17739 6.04211 9.2167C6.13362 9.25601 6.21637 9.31314 6.28556 9.38478L8.58356 11.6828L13.7101 6.55578C13.7797 6.48608 13.8624 6.43079 13.9534 6.39307C14.0445 6.35535 14.142 6.33594 14.2406 6.33594C14.3391 6.33594 14.4367 6.35535 14.5277 6.39307C14.6187 6.43079 14.7014 6.48608 14.7711 6.55578Z'
                      fill='#7BC13A'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1240_5126'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='flex-1 inline-flex flex-col justify-start items-start'>
                  <p className="justify-start text-[#1d2232]/70 text-base font-semibold font-['Pretendard']">
                    포포넛
                  </p>
                  <p className="self-stretch justify-start text-[#1d2232]/70 text-sm font-normal font-['Pretendard'] break-keep">
                    상황별 커스텀 된 메시지로 더욱 친근한 메시지 발송 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  ) : (
    <section
      ref={ref}
      id={'exclusive_title'}
      className='w-full pb-[100px] pt-[70px] bg-neutral-50 inline-flex flex-col justify-start items-center gap-[90px] overflow-hidden z-[2]'
      style={{ height: isTablet ? '1911px' : '2611px' }}
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-start items-center gap-5 scale-[0.8]'
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='px-9 py-4 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#e8e9ea] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.7927 3.55605C11.3987 4.07005 10.9547 4.86405 10.3087 6.02205L9.98172 6.60905L9.92272 6.71505C9.62272 7.25505 9.36772 7.71305 8.95872 8.02305C8.54572 8.33705 8.04172 8.45005 7.45572 8.58205L7.34172 8.60805L6.70572 8.75205C5.45072 9.03605 4.59572 9.23105 4.01172 9.46205C3.44072 9.68605 3.32072 9.87105 3.27472 10.018C3.22572 10.174 3.22472 10.413 3.56472 10.955C3.91172 11.505 4.49672 12.191 5.35072 13.191L5.78472 13.698L5.85972 13.785C6.26272 14.255 6.59872 14.647 6.75272 15.143C6.90572 15.636 6.85472 16.153 6.79272 16.781L6.78272 16.898L6.71672 17.575C6.58672 18.907 6.50072 19.825 6.52972 20.485C6.55972 21.145 6.69872 21.327 6.80972 21.411C6.90772 21.486 7.08972 21.568 7.68272 21.398C8.28572 21.226 9.08772 20.859 10.2627 20.318L10.8587 20.044L10.9677 19.994C11.5127 19.741 11.9847 19.523 12.5007 19.523C13.0167 19.523 13.4887 19.741 14.0337 19.993C14.0691 20.0104 14.1057 20.027 14.1437 20.043L14.7387 20.318C15.9137 20.859 16.7157 21.226 17.3187 21.398C17.9117 21.568 18.0937 21.486 18.1917 21.411C18.3027 21.327 18.4417 21.144 18.4717 20.485C18.5017 19.825 18.4137 18.907 18.2847 17.575L18.2187 16.898L18.2087 16.781C18.1467 16.153 18.0957 15.636 18.2487 15.143C18.4027 14.647 18.7387 14.255 19.1417 13.785L19.2167 13.698L19.6507 13.191C20.5047 12.191 21.0897 11.505 21.4357 10.955C21.7767 10.413 21.7757 10.175 21.7267 10.018C21.6807 9.87105 21.5607 9.68605 20.9897 9.46205C20.4047 9.23105 19.5507 9.03605 18.2957 8.75205L17.6597 8.60805L17.5457 8.58205C16.9597 8.45005 16.4557 8.33705 16.0427 8.02305C15.6327 7.71305 15.3797 7.25605 15.0787 6.71505L15.0207 6.60905L14.6927 6.02205C14.0467 4.86405 13.6027 4.07005 13.2087 3.55605C12.8147 3.04205 12.6147 2.99805 12.5007 2.99805C12.3867 2.99805 12.1857 3.04205 11.7927 3.55605ZM10.6027 2.64405C11.0777 2.02205 11.6667 1.49805 12.5007 1.49805C13.3347 1.49805 13.9227 2.02205 14.3997 2.64405C14.8677 3.25605 15.3647 4.14705 15.9717 5.23605L16.3307 5.87905C16.7227 6.58305 16.8237 6.73305 16.9497 6.82905C17.0697 6.92005 17.2267 6.97205 17.9897 7.14505L18.6897 7.30305C19.8657 7.56905 20.8347 7.78805 21.5397 8.06605C22.2717 8.35505 22.9127 8.78005 23.1597 9.57305C23.4037 10.358 23.1297 11.08 22.7057 11.753C22.2937 12.408 21.6357 13.178 20.8317 14.118L20.3567 14.673C19.8397 15.277 19.7317 15.425 19.6807 15.588C19.6297 15.755 19.6337 15.948 19.7127 16.753L19.7837 17.491C19.9057 18.747 20.0047 19.771 19.9697 20.551C19.9347 21.346 19.7547 22.108 19.0997 22.606C18.4317 23.112 17.6547 23.056 16.9047 22.84C16.1777 22.632 15.2717 22.215 14.1717 21.708L13.5157 21.406C12.7977 21.076 12.6447 21.023 12.5007 21.023C12.3567 21.023 12.2037 21.076 11.4857 21.406L10.8307 21.708C9.72972 22.215 8.82372 22.632 8.09672 22.84C7.34672 23.055 6.56972 23.112 5.90272 22.606C5.24672 22.108 5.06672 21.346 5.03172 20.552C4.99672 19.772 5.09572 18.747 5.21772 17.492L5.28972 16.753C5.36772 15.947 5.37172 15.755 5.31972 15.588C5.26972 15.425 5.16172 15.278 4.64472 14.673L4.16972 14.118C3.36672 13.178 2.70872 12.408 2.29672 11.754C1.87172 11.08 1.59772 10.358 1.84172 9.57305C2.08872 8.78005 2.72972 8.35505 3.46172 8.06605C4.16672 7.78805 5.13572 7.56905 6.31172 7.30305L6.37472 7.28905L7.01072 7.14505C7.77472 6.97205 7.93072 6.92005 8.05172 6.82805C8.17772 6.73305 8.27872 6.58305 8.67172 5.87905L9.02972 5.23605C9.63672 4.14605 10.1337 3.25605 10.6017 2.64405'
                fill='#1D7DDF'
              />
            </svg>
            <p className="text-center justify-center text-[#1d7ddf] text-2xl font-semibold font-['Pretendard']">
              포포넛의 차별점
            </p>
          </div>
          <p className="text-center justify-center text-[#1d2232]/90 text-6xl font-bold font-['Pretendard']">
            기능은 비슷해 보여도
          </p>
          <p className="text-center justify-center text-[#623112] text-[70px] font-bold font-['Pretendard']">
            결과는 다릅니다
          </p>
        </div>
        <p className="text-center justify-center text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
          고객을 이해하는 개발자가 만든 포포넛은
          <br />
          디테일과 완성도에서 다른 결과를 만듭니다.
        </p>
      </motion.div>
      <ul className="w-full">
        <li>
          <section
            id={'exclusive_content_1'}
            className={'w-full flex justify-center relative'}
            style={{ scale: isTablet ? 0.6 : 0.8, top: isTablet ? '-100px' : '0px' }}
          >
            <motion.div
              variants={item}
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              className='min-w-[1582px] p-[60px] bg-white rounded-[40px] shadow-[0px_2px_60px_10px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-[50px] overflow-hidden'
            >
              <div className='w-[706px] self-stretch inline-flex flex-col justify-center items-start gap-[45px]'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                  <p className="justify-start text-[#dee1e7] text-3xl font-bold font-['Pretendard']">UX 혁신</p>
                  <p className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                    <span className="self-stretch justify-start text-[#4a4e5b] text-[50px] font-bold font-['Pretendard']">
                      똑같은 타임라인이 아닌,
                    </span>
                    <span
                      className="self-stretch justify-start text-[#61d3fb] text-[50px] font-bold font-['Pretendard']"
                      style={{
                        background:
                          'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      직관적인 비주얼 캘린더
                    </span>
                  </p>
                </div>
                <div className='flex flex-col justify-start items-start gap-[15px]'>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_1973)'>
                          <circle cx='20' cy='20.8496' r='20' fill='#EE7373' fillOpacity='0.1' />
                          <path
                            d='M11.6601 12.5097C12.2458 11.9239 13.1956 11.9239 13.7814 12.5097L29.3377 28.066C29.9235 28.6518 29.9235 29.6015 29.3377 30.1873C28.7519 30.7731 27.8022 30.7731 27.2164 30.1873L11.6601 14.631C11.0743 14.0452 11.0743 13.0954 11.6601 12.5097Z'
                            fill='#EE7373'
                          />
                          <path
                            d='M29.3377 12.5097C29.9235 13.0954 29.9235 14.0452 29.3377 14.631L13.7814 30.1873C13.1956 30.7731 12.2458 30.7731 11.66 30.1873C11.0743 29.6015 11.0743 28.6518 11.66 28.066L27.2164 12.5097C27.8022 11.9239 28.7519 11.9239 29.3377 12.5097Z'
                            fill='#EE7373'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_1973'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.884766)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <p className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        일반 서비스
                      </p>
                      <p className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        복잡한 타임라인으로 예약 현황 파악이 어려움
                      </p>
                    </div>
                  </div>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_1984)'>
                          <circle cx='20' cy='20.8496' r='20' fill='#7BC13A' fillOpacity='0.1' />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M29.546 13.9963C29.8272 14.2776 29.9852 14.6591 29.9852 15.0568C29.9852 15.4546 29.8272 15.836 29.546 16.1173L18.303 27.3603C18.1544 27.5089 17.978 27.6268 17.7839 27.7073C17.5898 27.7877 17.3817 27.8291 17.1715 27.8291C16.9614 27.8291 16.7533 27.7877 16.5591 27.7073C16.365 27.6268 16.1886 27.5089 16.04 27.3603L10.454 21.7753C10.3108 21.6369 10.1965 21.4714 10.1179 21.2884C10.0393 21.1054 9.99788 20.9086 9.99615 20.7094C9.99442 20.5103 10.0324 20.3127 10.1078 20.1284C10.1832 19.944 10.2946 19.7766 10.4354 19.6357C10.5763 19.4949 10.7438 19.3835 10.9281 19.3081C11.1124 19.2327 11.31 19.1947 11.5091 19.1964C11.7083 19.1982 11.9051 19.2396 12.0881 19.3182C12.2711 19.3968 12.4367 19.5111 12.575 19.6543L17.171 24.2503L27.424 13.9963C27.5633 13.8569 27.7287 13.7464 27.9108 13.6709C28.0928 13.5955 28.288 13.5566 28.485 13.5566C28.6821 13.5566 28.8772 13.5955 29.0593 13.6709C29.2413 13.7464 29.4067 13.8569 29.546 13.9963Z'
                            fill='#7BC13A'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_1984'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.884766)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <span className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        포포넛
                      </span>
                      <span className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        신규 예약과 결제 여부를
                      </span>
                      <span className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        한눈에 파악할 수 있는 직관적 디자인
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <InViewWrapper className='w-[706px] h-[468.27px] relative rounded-[30px] overflow-hidden'>
                <Image
                  src={Exclusive_calendar}
                  alt={'직관적인 비주얼 캘린더'}
                  width={1500}
                  height={1500}
                  className={'w-[707px] h-[469px] object-cover'}
                  placeholder={'blur'}
                />
              </InViewWrapper>
            </motion.div>
          </section>
        </li >
        <li>
          <section
            id={'exclusive_content_2'}
            className={'w-full flex justify-center relative'}
            style={{ scale: isTablet ? 0.6 : 0.8, top: isTablet ? '-250px' : '0px' }}
          >
            <motion.div
              variants={item}
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              className='min-w-[1582px] p-[60px] bg-white rounded-[40px] shadow-[0px_2px_60px_10px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-[50px] overflow-hidden'
            >
              <InViewWrapper className='w-[660px] h-[460.27px] relative bg-white rounded-[30px] overflow-hidden'>
                <Exclusive_sendAgreementAlarm />
              </InViewWrapper>
              <div className='w-[706px] self-stretch inline-flex flex-col justify-center items-start gap-[45px]'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                  <p className="justify-start text-[#dee1e7] text-3xl font-bold font-['Pretendard']">완전 자동화</p>
                  <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                    <p className="self-stretch justify-start text-[#4a4e5b] text-[50px] font-bold font-['Pretendard']">
                      만료일 기준
                    </p>
                    <h2
                      className="self-stretch justify-start text-[#61d3fb] text-[50px] font-bold font-['Pretendard']"
                      style={{
                        background:
                          'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      일괄 발송 전자동의서
                    </h2>
                  </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-[15px]'>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_2091)'>
                          <circle cx='20' cy='20.125' r='20' fill='#EE7373' fillOpacity='0.1' />
                          <path
                            d='M11.6601 11.785C12.2458 11.1993 13.1956 11.1993 13.7814 11.785L29.3377 27.3414C29.9235 27.9272 29.9235 28.8769 29.3377 29.4627C28.7519 30.0485 27.8022 30.0485 27.2164 29.4627L11.6601 13.9064C11.0743 13.3206 11.0743 12.3708 11.6601 11.785Z'
                            fill='#EE7373'
                          />
                          <path
                            d='M29.3377 11.785C29.9235 12.3708 29.9235 13.3206 29.3377 13.9064L13.7814 29.4627C13.1956 30.0485 12.2458 30.0485 11.66 29.4627C11.0743 28.8769 11.0743 27.9272 11.66 27.3414L27.2164 11.785C27.8022 11.1993 28.7519 11.1993 29.3377 11.785Z'
                            fill='#EE7373'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_2091'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.160156)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <p className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        일반 서비스
                      </p>
                      <p className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        수동으로 동의서 관리, 만료일 추적이 번거로움
                      </p>
                    </div>
                  </div>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_2098)'>
                          <circle cx='20' cy='20.125' r='20' fill='#7BC13A' fillOpacity='0.1' />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M29.546 13.2717C29.8272 13.553 29.9852 13.9345 29.9852 14.3322C29.9852 14.73 29.8272 15.1114 29.546 15.3927L18.303 26.6357C18.1544 26.7843 17.978 26.9022 17.7839 26.9826C17.5898 27.0631 17.3817 27.1045 17.1715 27.1045C16.9614 27.1045 16.7533 27.0631 16.5591 26.9826C16.365 26.9022 16.1886 26.7843 16.04 26.6357L10.454 21.0507C10.3108 20.9123 10.1965 20.7468 10.1179 20.5638C10.0393 20.3808 9.99788 20.184 9.99615 19.9848C9.99442 19.7856 10.0324 19.5881 10.1078 19.4038C10.1832 19.2194 10.2946 19.052 10.4354 18.9111C10.5763 18.7703 10.7438 18.6589 10.9281 18.5835C11.1124 18.5081 11.31 18.4701 11.5091 18.4718C11.7083 18.4736 11.9051 18.5149 12.0881 18.5936C12.2711 18.6722 12.4367 18.7864 12.575 18.9297L17.171 23.5257L27.424 13.2717C27.5633 13.1323 27.7287 13.0217 27.9108 12.9463C28.0928 12.8709 28.288 12.832 28.485 12.832C28.6821 12.832 28.8772 12.8709 29.0593 12.9463C29.2413 13.0217 29.4067 13.1323 29.546 13.2717Z'
                            fill='#7BC13A'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_2098'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.160156)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <p className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        포포넛
                      </p>
                      <p className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        만료일 기준 자동 발송으로 서류 관리 완전 자동화
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </li>
        <li>
          <section
            id={'exclusive_content_3'}
            className={'w-full flex justify-center relative'}
            style={{ scale: isTablet ? 0.6 : 0.8, top: isTablet ? '-400px' : '0px' }}
          >
            <motion.div
              variants={item}
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              className='min-w-[1582px] p-[60px] bg-white rounded-[40px] shadow-[0px_2px_60px_10px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-[50px] overflow-hidden'
            >
              <div className='w-[706px] self-stretch inline-flex flex-col justify-center items-start gap-[45px]'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                  <p className="justify-start text-[#dee1e7] text-3xl font-bold font-['Pretendard']">개인화 메시징</p>
                  <p className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                    <span className="self-stretch justify-start text-[#4a4e5b] text-[50px] font-bold font-['Pretendard']">
                      상황에 맞는
                    </span>
                    <span
                      className="self-stretch justify-start text-[#61d3fb] text-[50px] font-bold font-['Pretendard']"
                      style={{
                        background:
                          'var(--AI-color, linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      개인화된 알림톡
                    </span>
                  </p>
                </div>
                <div className='flex flex-col justify-start items-start gap-[15px]'>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div className='w-[40px] h-[41px]'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_2116)'>
                          <circle cx='20' cy='20.3984' r='20' fill='#EE7373' fillOpacity='0.1' />
                          <path
                            d='M11.6601 12.0585C12.2458 11.4727 13.1956 11.4727 13.7814 12.0585L29.3377 27.6148C29.9235 28.2006 29.9235 29.1504 29.3377 29.7361C28.7519 30.3219 27.8022 30.3219 27.2164 29.7361L11.6601 14.1798C11.0743 13.594 11.0743 12.6443 11.6601 12.0585Z'
                            fill='#EE7373'
                          />
                          <path
                            d='M29.3377 12.0585C29.9235 12.6443 29.9235 13.594 29.3377 14.1798L13.7814 29.7361C13.1956 30.3219 12.2458 30.3219 11.66 29.7361C11.0743 29.1504 11.0743 28.2006 11.66 27.6148L27.2164 12.0585C27.8022 11.4727 28.7519 11.4727 29.3377 12.0585Z'
                            fill='#EE7373'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_2116'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.433594)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <p className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        일반 서비스
                      </p>
                      <p className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        획일적인 템플릿 메시지로 개성 없는 소통
                      </p>
                    </div>
                  </div>
                  <div className='inline-flex justify-start items-center gap-[15px]'>
                    <div className='w-[40px] h-[41px]'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='41' viewBox='0 0 40 41' fill='none'>
                        <g clipPath='url(#clip0_1009_2123)'>
                          <circle cx='20' cy='20.3984' r='20' fill='#7BC13A' fillOpacity='0.1' />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M29.546 13.5451C29.8272 13.8264 29.9852 14.2079 29.9852 14.6056C29.9852 15.0034 29.8272 15.3849 29.546 15.6661L18.303 26.9091C18.1544 27.0578 17.978 27.1756 17.7839 27.2561C17.5898 27.3365 17.3817 27.3779 17.1715 27.3779C16.9614 27.3779 16.7533 27.3365 16.5591 27.2561C16.365 27.1756 16.1886 27.0578 16.04 26.9091L10.454 21.3241C10.3108 21.1858 10.1965 21.0203 10.1179 20.8373C10.0393 20.6542 9.99788 20.4574 9.99615 20.2582C9.99442 20.0591 10.0324 19.8616 10.1078 19.6772C10.1832 19.4929 10.2946 19.3254 10.4354 19.1846C10.5763 19.0437 10.7438 18.9323 10.9281 18.8569C11.1124 18.7815 11.31 18.7435 11.5091 18.7453C11.7083 18.747 11.9051 18.7884 12.0881 18.867C12.2711 18.9456 12.4367 19.0599 12.575 19.2031L17.171 23.7991L27.424 13.5451C27.5633 13.4058 27.7287 13.2952 27.9108 13.2197C28.0928 13.1443 28.288 13.1055 28.485 13.1055C28.6821 13.1055 28.8772 13.1443 29.0593 13.2197C29.2413 13.2952 29.4067 13.4058 29.546 13.5451Z'
                            fill='#7BC13A'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1009_2123'>
                            <rect width='40' height='40' fill='white' transform='translate(0 0.433594)' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
                      <p className="justify-start text-[#1d2232]/70 text-3xl font-semibold font-['Pretendard']">
                        포포넛
                      </p>
                      <p className="justify-start text-[#1d2232]/70 text-[28px] font-normal font-['Pretendard']">
                        상황별 커스텀 된 메시지로 더욱 친근한 메시지 발송 가능
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <InViewWrapper className='w-[706px] h-[468.27px] relative bg-neutral-50 rounded-[30px] overflow-hidden'>
                <Image
                  className='w-[342px] h-[458px] left-[5px] top-[10px] absolute object-cover'
                  width={342}
                  height={458}
                  src={'/assets/landing/Exclusive_personalizedAlarm1.png'}
                  alt={'Exclusive_personalizedAlarm1'}
                />
                <Image
                  className='w-[343px] h-[458px] left-[358px] top-[-0.08px] absolute object-cover'
                  width={343}
                  height={458}
                  src={'/assets/landing/Exclusive_personalizedAlarm2.png'}
                  alt={'Exclusive_personalizedAlarm2'}
                />
              </InViewWrapper>
            </motion.div>
          </section>
        </li>
      </ul >
    </section >
  )
})

export default Exclusive
