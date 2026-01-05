'use client'

import AIAutomation_calllog from '../../public/assets/landing/AIAutomation_calllog.png'
import AIAutomation_oneclick from '../../public/assets/landing/AIAutomation_oneclick.png'
import AIAutomation_customer from '../../public/assets/landing/AIAutomation_customer.png'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import InViewWrapper from './InViewWrapper'

const AIAutomation = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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
    hidden: { y: 30, opacity: 0 }
  }

  return !isPcOrTablet ? (
    <section
      ref={ref}
      id={'ai_automation_section_title'}
      className='w-full px-8 py-20 bg-white inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden'
    >
      <motion.div
        className='flex flex-col justify-start items-center gap-5'
        variants={container}
        initial='hidden'
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100 }
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='px-[15px] py-2 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#1d7ddf]/20 inline-flex justify-center items-center gap-[5px] overflow-hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
              <path
                d='M6.57336 3.6346C6.97202 2.46794 8.58402 2.4326 9.05669 3.5286L9.09669 3.63527L9.63469 5.2086C9.75799 5.56943 9.95723 5.89961 10.219 6.17689C10.4807 6.45416 10.7989 6.67208 11.152 6.81594L11.2967 6.86994L12.87 7.40727C14.0367 7.80594 14.072 9.41794 12.9767 9.8906L12.87 9.9306L11.2967 10.4686C10.9357 10.5918 10.6054 10.791 10.328 11.0528C10.0506 11.3145 9.83262 11.6327 9.68869 11.9859L9.63469 12.1299L9.09736 13.7039C8.69869 14.8706 7.08669 14.9059 6.61469 13.8106L6.57336 13.7039L6.03602 12.1306C5.91281 11.7697 5.7136 11.4393 5.45185 11.1619C5.1901 10.8846 4.87188 10.6665 4.51869 10.5226L4.37469 10.4686L2.80136 9.93127C1.63402 9.5326 1.59869 7.9206 2.69469 7.4486L2.80136 7.40727L4.37469 6.86994C4.73551 6.74664 5.0657 6.5474 5.34297 6.28565C5.62025 6.0239 5.83816 5.70573 5.98202 5.3526L6.03602 5.2086L6.57336 3.6346ZM7.83536 4.06527L7.29802 5.6386C7.11028 6.18881 6.80487 6.69147 6.40305 7.1116C6.00122 7.53173 5.51265 7.85922 4.97136 8.07127L4.80469 8.13194L3.23136 8.66927L4.80469 9.2066C5.35489 9.39434 5.85756 9.69976 6.27769 10.1016C6.69781 10.5034 7.02531 10.992 7.23736 11.5333L7.29802 11.6999L7.83536 13.2733L8.37269 11.6999C8.56043 11.1497 8.86584 10.6471 9.26767 10.2269C9.66949 9.80681 10.1581 9.47932 10.6994 9.26727L10.866 9.20727L12.4394 8.66927L10.866 8.13194C10.3158 7.9442 9.81315 7.63878 9.39303 7.23696C8.9729 6.83514 8.64541 6.34657 8.43336 5.80527L8.37336 5.6386L7.83536 4.06527ZM13.1687 1.33594C13.2934 1.33594 13.4156 1.37092 13.5215 1.43692C13.6273 1.50291 13.7125 1.59727 13.7674 1.70927L13.7994 1.78727L14.0327 2.47127L14.7174 2.7046C14.8423 2.74707 14.9519 2.82568 15.0322 2.93048C15.1124 3.03528 15.1598 3.16155 15.1682 3.29328C15.1766 3.42502 15.1458 3.55629 15.0795 3.67046C15.0132 3.78463 14.9146 3.87656 14.796 3.9346L14.7174 3.9666L14.0334 4.19994L13.8 4.8846C13.7575 5.00956 13.6788 5.11907 13.574 5.19927C13.4691 5.27946 13.3428 5.32673 13.2111 5.33509C13.0794 5.34344 12.9481 5.3125 12.834 5.24619C12.7199 5.17988 12.628 5.08118 12.57 4.9626L12.538 4.8846L12.3047 4.2006L11.62 3.96727C11.495 3.92481 11.3855 3.84619 11.3052 3.74139C11.2249 3.63659 11.1776 3.51033 11.1692 3.37859C11.1607 3.24686 11.1916 3.11558 11.2579 3.00141C11.3241 2.88724 11.4228 2.79531 11.5414 2.73727L11.62 2.70527L12.304 2.47194L12.5374 1.78727C12.5823 1.65555 12.6674 1.54121 12.7806 1.46027C12.8938 1.37933 13.0295 1.33585 13.1687 1.33594Z'
                fill='#1D7DDF'
              />
            </svg>
            <p className="text-center justify-center text-[#1d7ddf] text-[13px] font-semibold font-['Pretendard']">
              AI 기반 자동화
            </p>
          </div>
          <p className='flex flex-col justify-start items-center gap-2.5'>
            <span className="text-center justify-center text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard'] h-[31px]">
              문의 전화만 받아도
            </span>
            <span className="text-center justify-center text-[#623112] text-[26px] font-bold font-['Pretendard']">
              알아서 척척
            </span>
          </p>
        </div>
        <div className='w-[291px] h-[38px] relative'>
          <p className='w-[291px] left-0 top-[-3px] absolute text-center justify-center'>
            <span className="text-[#1d2232]/80 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              AI 에이전트{' '}
            </span>
            <span className="text-[#1d2232] text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              포비
            </span>
            <span className="text-[#1d2232]/80 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              가 사장님 대신
              <br />
              대화 맥락을 이해하고 고객 정보를 관리합니다.
            </span>
          </p>
        </div>
      </motion.div>
      <ul className='w-full flex flex-col justify-center items-start gap-10'>
        <li id={'ai_automation_section_content_1'} className={'w-full min-w-[275px]'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 100 }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='self-stretch h-[332px] py-2.5 bg-color-white--60%/60 rounded-2xl backdrop-blur-sm flex flex-col justify-start items-center overflow-hidden'
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className='w-[200px] h-[182px] relative overflow-hidden flex justify-center'>
              <Image
                src={AIAutomation_calllog}
                alt={'포포넛 AI 자동 녹취 및 스마트 요약 시스템 - 강아지 미용 예약, 애견호텔 고객관리를 위한 통화 기록'}
                className={'w-[200px] h-[181px] object-cover'}
                width={1000}
                height={1000}
                placeholder={'blur'}
              />
            </div>
            <div className='self-stretch px-5 flex flex-col justify-start items-start gap-2.5 overflow-hidden'>
              <div className='self-stretch flex flex-col justify-start items-start gap-2.5'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                  <div className="justify-start text-[#dee1e7] text-2xl font-bold font-['Pretendard']">01</div>
                  <h2 className="self-stretch justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']">
                    AI 자동 녹취 & 스마트 요약
                  </h2>
                </div>
                <p
                  className="self-stretch justify-start text-[#8e9098] text-base font-normal font-['Pretendard'] leading-normal break-keep"
                  style={{ letterSpacing: '-0.32px' }}
                >
                  보호자와 통화를 자동으로 녹음하고, 핵심 내용을 실시간으로 추출해 요약합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </li>
        <li id={'ai_automation_section_content_2'} className={'w-full min-w-[275px]'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 100 }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='self-stretch h-[332px] py-2.5 bg-color-white--60%/60 rounded-2xl backdrop-blur-sm flex flex-col justify-start items-center overflow-hidden'
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className='w-[232px] h-[181px] relative overflow-hidden flex justify-center'>
              <Image
                src={AIAutomation_oneclick}
                alt={'포포넛 원클릭 예약 생성 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약을 위한 간편 예약'}
                className={'w-[200px] h-[181px] object-cover'}
                width={1000}
                height={1000}
                placeholder={'blur'}
              />
            </div>
            <div className='self-stretch px-5 flex flex-col justify-start items-start gap-2.5 overflow-hidden'>
              <div className='self-stretch flex flex-col justify-start items-start gap-2.5'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                  <div className="justify-start text-[#dee1e7] text-2xl font-bold font-['Pretendard']">02</div>
                  <p className="self-stretch justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']">
                    원클릭 예약 생성
                  </p>
                </div>
                <p
                  className="self-stretch justify-start text-[#8e9098] text-base !text-[16px] font-normal font-['Pretendard'] leading-normal  break-keep"
                  style={{ letterSpacing: '-0.32px' }}
                >
                  요약된 정보를 활용해 클릭 한 번에 예약이 자동으로 완성됩니다.
                </p>
              </div>
            </div>
          </motion.div>
        </li>
        <li id={'ai_automation_section_content_3'} className={'w-full min-w-[275px]'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 100 }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='self-stretch h-[332px] py-2.5 bg-color-white--60%/60 rounded-2xl backdrop-blur-sm flex flex-col justify-start items-center overflow-hidden'
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className='w-[232px] h-[181px] relative overflow-hidden flex justify-center'>
              <Image
                src={AIAutomation_customer}
                alt={'포포넛 맞춤형 고객관리 지원 시스템 - 반려동물 고객관리, 애견호텔 고객관리를 위한 스마트 솔루션'}
                className={'w-[200px] h-[181px] object-cover'}
                width={1000}
                height={1000}
                placeholder={'blur'}
              />
            </div>
            <div className='self-stretch px-5 flex flex-col justify-start items-start gap-2.5 overflow-hidden'>
              <div className='self-stretch flex flex-col justify-start items-start gap-2.5'>
                <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
                  <div className="justify-start text-[#dee1e7] text-2xl font-bold font-['Pretendard']">03</div>
                  <p className="self-stretch justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']">
                    맞춤형 고객관리 지원
                  </p>
                </div>
                <p
                  className="self-stretch justify-start text-[#8e9098] text-base font-normal font-['Pretendard'] leading-normal break-keep"
                  style={{ letterSpacing: '-0.32px' }}
                >
                  수집된 데이터를 분석해 반려동물별 맞춤형 응대 가이드를 제공합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </li>
      </ul>
    </section>
  ) : (
    <section
      ref={ref}
      id={'ai_automation_section_title'}
      className={`w-full scale-[0.8] ${isTablet ? 'mt-[-160px]' : 'mt-[-100px]'}`}
    >
      <motion.div
        className='w-full'
        variants={container}
        initial='hidden'
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100 }
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='w-full px-[169px] py-[100px] bg-white inline-flex flex-col justify-start items-center gap-[90px] overflow-hidden'>
          <div className='flex flex-col justify-start items-center gap-5'>
            <div className='flex flex-col justify-start items-center gap-10'>
              <div className='px-9 py-4 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-2 outline-offset-[-2px] outline-[#1d7ddf]/20 inline-flex justify-center items-center gap-2.5 overflow-hidden'>
                <div className='w-6 h-6 relative overflow-hidden'>
                  <div className='w-[0.84px] h-[0.67px] left-[12.07px] top-[23.14px] absolute' />
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
                    <path
                      d='M9.10613 5.48267C9.70413 3.73267 12.1221 3.67967 12.8311 5.32367L12.8911 5.48367L13.6981 7.84367C13.8831 8.3849 14.1819 8.88018 14.5746 9.29609C14.9672 9.712 15.4444 10.0389 15.9741 10.2547L16.1911 10.3357L18.5511 11.1417C20.3011 11.7397 20.3541 14.1577 18.7111 14.8667L18.5511 14.9267L16.1911 15.7337C15.6497 15.9185 15.1542 16.2173 14.7381 16.6099C14.3221 17.0026 13.995 17.4799 13.7791 18.0097L13.6981 18.2257L12.8921 20.5867C12.2941 22.3367 9.87613 22.3897 9.16813 20.7467L9.10613 20.5867L8.30013 18.2267C8.11531 17.6852 7.8165 17.1898 7.42387 16.7737C7.03124 16.3576 6.55392 16.0306 6.02413 15.8147L5.80813 15.7337L3.44813 14.9277C1.69713 14.3297 1.64413 11.9117 3.28813 11.2037L3.44813 11.1417L5.80813 10.3357C6.34936 10.1507 6.84464 9.85186 7.26055 9.45924C7.67646 9.06661 8.00334 8.58936 8.21913 8.05967L8.30013 7.84367L9.10613 5.48267ZM10.9991 6.12867L10.1931 8.48867C9.91152 9.31397 9.4534 10.068 8.85066 10.6982C8.24793 11.3284 7.51507 11.8196 6.70313 12.1377L6.45313 12.2287L4.09313 13.0347L6.45313 13.8407C7.27843 14.1223 8.03243 14.5804 8.66262 15.1831C9.29282 15.7859 9.78405 16.5187 10.1021 17.3307L10.1931 17.5807L10.9991 19.9407L11.8051 17.5807C12.0867 16.7554 12.5449 16.0014 13.1476 15.3712C13.7503 14.741 14.4832 14.2497 15.2951 13.9317L15.5451 13.8417L17.9051 13.0347L15.5451 12.2287C14.7198 11.9471 13.9658 11.4889 13.3356 10.8862C12.7054 10.2835 12.2142 9.55062 11.8961 8.73867L11.8061 8.48867L10.9991 6.12867ZM18.9991 2.03467C19.1862 2.03467 19.3695 2.08715 19.5283 2.18614C19.687 2.28513 19.8148 2.42667 19.8971 2.59467L19.9451 2.71167L20.2951 3.73767L21.3221 4.08767C21.5096 4.15136 21.674 4.26928 21.7944 4.42648C21.9148 4.58368 21.9858 4.77309 21.9984 4.97069C22.011 5.16829 21.9647 5.3652 21.8653 5.53646C21.766 5.70771 21.618 5.84561 21.4401 5.93267L21.3221 5.98067L20.2961 6.33067L19.9461 7.35767C19.8823 7.5451 19.7643 7.70937 19.6071 7.82966C19.4498 7.94995 19.2604 8.02086 19.0628 8.03339C18.8652 8.04592 18.6683 7.99951 18.4971 7.90005C18.3259 7.80058 18.1881 7.65253 18.1011 7.47467L18.0531 7.35767L17.7031 6.33167L16.6761 5.98167C16.4886 5.91797 16.3243 5.80005 16.2039 5.64285C16.0835 5.48565 16.0125 5.29625 15.9999 5.09865C15.9872 4.90104 16.0335 4.70414 16.1329 4.53288C16.2323 4.36162 16.3803 4.22373 16.5581 4.13667L16.6761 4.08867L17.7021 3.73867L18.0521 2.71167C18.1196 2.51409 18.2471 2.34258 18.417 2.22117C18.5868 2.09976 18.7904 2.03454 18.9991 2.03467Z'
                      fill='#1D7DDF'
                    />
                  </svg>
                </div>
                <div className="text-center justify-center text-[#1d7ddf] text-2xl font-semibold font-['Pretendard']">
                  AI 기반 자동화
                </div>
              </div>
              <p className='flex flex-col justify-start items-center gap-2.5'>
                <span className="text-center justify-center text-[#1d2232]/90 text-6xl font-bold font-['Pretendard']">
                  문의 전화만 받아도
                </span>
                <span className="text-center justify-center text-[#623112] text-[70px] font-bold font-['Pretendard']">
                  알아서 척척
                </span>
              </p>
            </div>
            <p className='text-center justify-center'>
              <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
                AI 에이전트{' '}
              </span>
              <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[45px] tracking-tight">
                포비
              </span>
              <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
                가 사장님 대신
                <br />
                대화 맥락을 이해하고 고객 정보를 관리합니다.
              </span>
            </p>
          </div>
          <ul
            id={'ai_automation_section_content'}
            className='w-screen max-w-[1657px] inline-flex gap-[38.5px] justify-center items-center flex-wrap px-[38.5px]'
          >
            <li
              id={'ai_automation_section_content_1'}
              className='w-[501px] min-h-[620px]'
            >
              <motion.div
                variants={item}
                initial='hidden'
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 100 }
                }}
                viewport={{ once: true, amount: 0.2 }}
                className='w-[501px] min-h-[620px] bg-[#f4f5f7] rounded-[40px] inline-flex flex-col justify-start items-center overflow-hidden'
              >
                <InViewWrapper className='w-[440px] h-[330px] relative overflow-hidden flex justify-center'>
                  <Image
                    src={AIAutomation_calllog}
                    alt={'포포넛 AI 자동 녹취 및 스마트 요약 시스템 - 강아지 미용 예약, 애견호텔 고객관리를 위한 통화 기록'}
                    className={'w-[336px] h-[330px] object-cover'}
                    width={1000}
                    height={1000}
                    placeholder={'blur'}
                  />
                </InViewWrapper>
                <div
                  className='self-stretch px-[45px] flex flex-col justify-start items-start gap-2.5 overflow-hidden'
                  style={{
                    letterSpacing: '-0.8px'
                  }}
                >
                  <div className='self-stretch flex flex-col justify-start items-start gap-3'>
                    <div className="justify-start text-[#dee1e7] text-[40px] font-bold font-['Pretendard']">01</div>
                    <h2 className="self-stretch justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                      AI 자동 녹취 & 스마트 요약
                    </h2>
                    <p className="self-stretch justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                      보호자와 통화를 자동으로 녹음하고,
                      <br />
                      핵심 내용을 실시간으로 추출해
                      <br />
                      요약합니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
            <li
              id={'ai_automation_section_content_2'}
              className='w-[501px] min-h-[620px]'
            >
              <motion.div
                variants={item}
                initial='hidden'
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 100, delay: 0.2 }
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
                className='w-[501px] min-h-[620px] bg-[#f4f5f7] rounded-[40px] inline-flex flex-col justify-start items-center overflow-hidden'
              >
                <InViewWrapper className='w-[440px] h-[330px] relative overflow-hidden flex justify-center'>
                  <Image
                    src={AIAutomation_oneclick}
                    alt={'포포넛 원클릭 예약 생성 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약을 위한 간편 예약'}
                    className={'w-[336px] h-[330px] object-cover'}
                    width={1000}
                    height={1000}
                    placeholder={'blur'}
                  />
                </InViewWrapper>
                <div
                  className='self-stretch px-[45px] flex flex-col justify-start items-start gap-2.5 overflow-hidden'
                  style={{
                    letterSpacing: '-0.8px'
                  }}
                >
                  <div className='self-stretch flex flex-col justify-start items-start gap-3'>
                    <div className="justify-start text-[#dee1e7] text-[40px] font-bold font-['Pretendard']">02</div>
                    <p className="self-stretch justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                      원클릭 예약 생성
                    </p>
                    <p className="self-stretch justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                      요약된 정보를 활용해 클릭 한 번에 예약이 자동으로 완성됩니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
            <li
              id={'ai_automation_section_content_3'}
              className='w-[501px] min-h-[620px]'
            >
              <motion.div
                variants={item}
                initial='hidden'
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 100, delay: 0.35 }
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.35 }}
                className='w-[501px] min-h-[620px] bg-[#f4f5f7] rounded-[40px] inline-flex flex-col justify-start items-center overflow-hidden'
              >
                <InViewWrapper className='w-[440px] h-[330px] relative overflow-hidden flex justify-center'>
                  <Image
                    src={AIAutomation_customer}
                    alt={'포포넛 맞춤형 고객관리 지원 시스템 - 반려동물 고객관리, 애견호텔 고객관리를 위한 스마트 솔루션'}
                    className={'w-[336px] h-[330px] object-cover'}
                    width={1000}
                    height={1000}
                    placeholder={'blur'}
                  />
                </InViewWrapper>
                <div
                  className='self-stretch px-[45px] flex flex-col justify-start items-start gap-2.5 overflow-hidden'
                  style={{
                    letterSpacing: '-0.8px'
                  }}
                >
                  <div className='self-stretch flex flex-col justify-start items-start gap-3'>
                    <div className="justify-start text-[#dee1e7] text-[40px] font-bold font-['Pretendard']">03</div>
                    <p className="self-stretch justify-start text-[#4a4e5b] text-[40px] font-bold font-['Pretendard']">
                      맞춤형 고객관리 지원
                    </p>
                    <p className="self-stretch justify-start text-[#8e9098] text-3xl font-normal font-['Pretendard']">
                      수집된 데이터를 분석해
                      <br />
                      반려동물별 맞춤형 응대 가이드를
                      <br />
                      제공합니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
})

export default AIAutomation
