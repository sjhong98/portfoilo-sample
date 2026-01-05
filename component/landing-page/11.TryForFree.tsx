'use client'

import Dashed from '../../public/assets/landing/TryForFree_dashed'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import InViewWrapper from './InViewWrapper'

const TryForFree = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return !isPcOrTablet ? (
    <section
      ref={ref}
      id={'try_for_free_title'}
      className='w-full py-20 bg-[#4a2914] inline-flex flex-col justify-start items-center gap-10 overflow-hidden'
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-start items-center gap-5'
      >
        <div className='px-[15px] py-2 bg-gradient-to-r from-[#502d16] to-[#ffd6a7] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
          <div className='w-4 h-4 relative overflow-hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
              <path
                d='M15.1654 7.99967H1.83203M8.4987 1.33301V14.6663M9.16536 7.99967C9.16536 8.70692 9.44632 9.3852 9.94641 9.88529C10.4465 10.3854 11.1248 10.6663 11.832 10.6663M7.83203 7.99967C7.83203 8.70692 7.55108 9.3852 7.05098 9.88529C6.55089 10.3854 5.87261 10.6663 5.16536 10.6663'
                stroke='white'
                strokeLinecap='round'
              />
              <path
                d='M8.49789 6.68966C8.49827 6.20696 8.65982 5.7382 8.95692 5.35777C9.25403 4.97733 9.66966 4.707 10.1379 4.58966C11.2066 4.323 12.1752 5.291 11.9079 6.36033C11.7906 6.82856 11.5202 7.24419 11.1398 7.5413C10.7594 7.8384 10.2906 7.99996 9.80789 8.00033H8.49789M8.49789 6.68966V8.00033M8.49789 6.68966C8.49752 6.20696 8.33596 5.7382 8.03886 5.35777C7.74175 4.97733 7.32612 4.707 6.85789 4.58966C5.78922 4.323 4.82056 5.291 5.08789 6.36033C5.20522 6.82856 5.47556 7.24419 5.85599 7.5413C6.23643 7.8384 6.70519 7.99996 7.18789 8.00033H8.49789'
                stroke='white'
              />
              <path
                d='M15.1654 7.99967C15.1654 11.1423 15.1654 12.7137 14.1887 13.6897C13.2134 14.6663 11.6414 14.6663 8.4987 14.6663C5.35603 14.6663 3.7847 14.6663 2.80803 13.6897C1.83203 12.7143 1.83203 11.1423 1.83203 7.99967C1.83203 4.85701 1.83203 3.28567 2.80803 2.30901C3.78536 1.33301 5.35603 1.33301 8.4987 1.33301C11.6414 1.33301 13.2127 1.33301 14.1887 2.30901C14.838 2.95834 15.0554 3.87101 15.1287 5.33301'
                stroke='white'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <p className="text-center justify-center text-white text-[13px] font-semibold font-['Pretendard'] ">
            월 990원부터 부담없이
          </p>
        </div>
      </motion.div>
      <div className='h-[800px] overflow-hidden'>
        <TryForFree_Section1 scale={0.35} />
      </div>
      <section id={'try_for_free_content'} className={'w-full px-8'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='self-stretch flex flex-col justify-start items-start gap-2.5'
        >
          <div className='h-[160px] overflow-hidden'>
            <TryForFree_Section2 scale={0.35} />
          </div>
          <div className="flex w-full justify-start items-center gap-[15px] flex-wrap">
            <div className="flex gap-[15px]">
              <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                <Image src="/assets/landing/TryForFree_ai_call.svg" alt="AI 통화 분석" width={40} height={40} />
                <div className="flex flex-col justify-center items-center gap-2.5">
                  <p className="text-center justify-center text-[#ffd6a7] font-semibold font-['Pretendard'] text-[16px] leading-[22px]">AI 통화 분석<br />무제한</p>
                  <p className="text-center justify-center text-white/70 font-normal font-['Pretendard'] text-[12px] leading-[18px]">
                    고객과의 모든 통화를<br />자동 녹취·분석
                  </p>
                </div>
              </div>
              <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                <Image src="/assets/landing/TryForFree_ai_customer.svg" alt="AI 고객 요청 분석" width={40} height={40} />
                <div className="w-[155px] flex flex-col justify-center items-center gap-2.5">
                  <p className="text-center justify-center text-[#ffd6a7] font-semibold font-['Pretendard'] text-[16px] leading-[22px]">AI 고객 요청 분석</p>
                  <div className="w-[175px] text-center justify-center text-white/70 font-normal font-['Pretendard']  text-[12px] leading-[18px]">
                    자주 반복된 요청을<br />자동 분석 후<br />응대 가이드 제공
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                <Image src="/assets/landing/TryForFree_cloud.svg" alt="무중단 배포 시스템" width={40} height={40} />
                <div className="w-[155px] flex flex-col justify-center items-center gap-2.5">
                  <p className="text-center justify-center text-[#ffd6a7] font-semibold font-['Pretendard'] text-[16px] leading-[22px]">무중단 배포 시스템</p>
                  <div className="self-stretch text-center justify-center text-white/70 font-normal font-['Pretendard'] text-[12px] leading-[18px]">
                    서비스 멈춤 걱정 없는<br />안정적 운영
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                <Image src="/assets/landing/TryForFree_report.svg" alt="직원별 매출/판매 내역 자동 정리" width={40} height={40} />
                <div className="flex flex-col justify-center items-center gap-2.5">
                  <p className="text-center justify-center text-[#ffd6a7] font-semibold font-['Pretendard'] text-[16px] leading-[22px]">직원별 매출/판매<br />내역 자동 정리</p>
                  <div className="self-stretch text-center justify-center text-white/70 font-normal font-['Pretendard'] text-[12px] leading-[18px]">
                    누구나 쉽게 보는<br />매출 요약 리포트
                  </div>
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
      id={'try_for_free_title'}
      className='w-full pb-[100px] bg-gradient-to-b from-[#583118] to-[#331c0e] inline-flex flex-col justify-center items-center gap-[90px] overflow-hidden z-[2] relative '
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-[824px] flex flex-col justify-start items-center gap-[90px] pt-[100px]'
      >
        <InViewWrapper className='px-9 py-4 bg-gradient-to-r from-[#502d16] to-[#ffd6a7] rounded-[100px] outline outline-2 outline-offset-[-2px] outline-[#ffd6a7] inline-flex justify-center items-center gap-2.5 overflow-hidden mb-[-50px]'>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
            <path
              d='M22.5 12.0703H2.5M12.5 2.07031V22.0703M13.5 12.0703C13.5 13.1312 13.9214 14.1486 14.6716 14.8987C15.4217 15.6489 16.4391 16.0703 17.5 16.0703M11.5 12.0703C11.5 13.1312 11.0786 14.1486 10.3284 14.8987C9.57828 15.6489 8.56087 16.0703 7.5 16.0703'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M12.5007 10.1058C12.5013 9.38173 12.7436 8.67859 13.1893 8.10794C13.6349 7.53728 14.2584 7.13179 14.9607 6.95578C16.5637 6.55578 18.0167 8.00778 17.6157 9.61178C17.4397 10.3141 17.0342 10.9376 16.4636 11.3832C15.8929 11.8289 15.1898 12.0712 14.4657 12.0718H12.5007M12.5007 10.1058V12.0718M12.5007 10.1058C12.5002 9.38173 12.2578 8.67859 11.8122 8.10794C11.3665 7.53728 10.7431 7.13179 10.0407 6.95578C8.43774 6.55578 6.98474 8.00778 7.38574 9.61178C7.56174 10.3141 7.96724 10.9376 8.5379 11.3832C9.10855 11.8289 9.81169 12.0712 10.5357 12.0718H12.5007'
              stroke='white'
              strokeWidth='1.5'
            />
            <path
              d='M22.5 12.0703C22.5 16.7843 22.5 19.1413 21.035 20.6053C19.572 22.0703 17.214 22.0703 12.5 22.0703C7.786 22.0703 5.429 22.0703 3.964 20.6053C2.5 19.1423 2.5 16.7843 2.5 12.0703C2.5 7.35631 2.5 4.99931 3.964 3.53431C5.43 2.07031 7.786 2.07031 12.5 2.07031C17.214 2.07031 19.571 2.07031 21.035 3.53431C22.009 4.50831 22.335 5.87731 22.445 8.07031'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
          <p className="text-center justify-center text-white text-2xl font-semibold font-['Pretendard']">
            월 990원부터 부담없이
          </p>
        </InViewWrapper>
        <TryForFree_Section1 />

        <Dashed />
        <section id={'try_for_free_content'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[824px] flex flex-col justify-start items-center gap-10'
          >
            <div className="w-full flex flex-col justify-start items-center gap-[50px]">
              <TryForFree_Section2 />
              <div className="inline-flex justify-start items-center gap-[15px] flex-wrap">
                <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                  <Image src="/assets/landing/TryForFree_ai_call.svg" alt="AI 통화 분석" width={50} height={50} />
                  <div className="flex flex-col justify-center items-center gap-2.5">
                    <p className="text-center justify-center text-[#ffd6a7] text-xl font-semibold font-['Pretendard'] leading-[22px]]">AI 통화 분석 무제한</p>
                    <p className="text-center justify-center text-white/70 text-lg font-normal font-['Pretendard'] leading-[22px]">
                      고객과의 모든 통화를<br />자동 녹취·분석
                    </p>
                  </div>
                </div>
                <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                  <Image src="/assets/landing/TryForFree_ai_customer.svg" alt="AI 고객 요청 분석" width={50} height={50} />
                  <div className="w-[155px] flex flex-col justify-center items-center gap-2.5">
                    <p className="text-center justify-center text-[#ffd6a7] text-xl font-semibold font-['Pretendard'] leading-[22px]">AI 고객 요청 분석</p>
                    <div className="w-[175px] text-center justify-center text-white/70 text-lg font-normal font-['Pretendard'] leading-[22px]">
                      자주 반복된 요청을<br />자동 분석 후<br />응대 가이드 제공
                    </div>
                  </div>
                </div>
                <div className="flex-1 self-stretch p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                  <Image src="/assets/landing/TryForFree_cloud.svg" alt="무중단 배포 시스템" width={50} height={50} />
                  <div className="w-[155px] flex flex-col justify-center items-center gap-2.5">
                    <p className="text-center justify-center text-[#ffd6a7] text-xl font-semibold font-['Pretendard'] leading-[22px]">무중단 배포 시스템</p>
                    <div className="self-stretch text-center justify-center text-white/70 text-lg font-normal font-['Pretendard'] leading-[22px]">
                      서비스 멈춤 걱정 없는 안정적 운영
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 bg-white/10 rounded-[20px] inline-flex flex-col justify-start items-center gap-2 overflow-hidden">
                  <Image src="/assets/landing/TryForFree_report.svg" alt="직원별 매출/판매 내역 자동 정리" width={50} height={50} />
                  <div className="flex flex-col justify-center items-center gap-2.5">
                    <p className="text-center justify-center text-[#ffd6a7] text-xl font-semibold font-['Pretendard'] leading-[22px]">직원별 매출/판매<br />내역 자동 정리</p>
                    <div className="self-stretch text-center justify-center text-white/70 text-lg font-normal font-['Pretendard'] leading-[22px]">
                      누구나 쉽게 보는<br />매출 요약 리포트
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </section >
  )
})

function TryForFree_Section1({ scale = 1 }: { scale?: number }) {
  const router = useRouter();
  return (
    <div style={{ scale, transformOrigin: 'top center' }} className='w-full flex flex-col items-center gap-[90px]'>
      <div className='w-[659px] flex flex-col justify-start items-center gap-5'>
        <div className='flex flex-col justify-start items-center gap-10'>
          <p className='flex flex-col justify-start items-center gap-2.5'>
            <span className="text-center justify-center text-white text-6xl font-bold font-['Pretendard'] leading-[72px]">
              필요한 기능만 골라쓰는
            </span>
            <span className="text-center justify-center text-[#ffd6a7] text-[70px] font-bold font-['Pretendard'] leading-[84px]">
              합리적인 요금제
            </span>
          </p>
        </div>
        <p className='text-center justify-center leading-[45px]'>
          <span className="text-[#a4f4cf] text-[34px] font-semibold font-['Pretendard'] leading-[45px] tracking-tight">
            프리미엄 기능{' '}
          </span>
          <span className="text-[#edeae8] text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            1개월 무료체험 • 언제든 취소 가능
          </span>
        </p>
      </div>

      <div className="w-[824px] inline-flex flex-col justify-start items-center gap-[50px] whitespace-nowrap">
        <InViewWrapper className="flex flex-col justify-start items-center gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="161" viewBox="0 0 160 161" fill="none">
            <g clipPath="url(#clip0_3464_15881)">
              <path d="M114.156 41.8787L82.344 16.5827C80.972 15.4907 79.028 15.4907 77.656 16.5827L45.844 41.8787C44.048 43.3067 43 45.4787 43 47.7747V132.075C43 137.067 47.048 141.115 52.04 141.115H107.964C112.956 141.115 117.004 137.067 117.004 132.075V47.7747C117.004 45.4787 115.956 43.3067 114.16 41.8787H114.156Z" fill="#8A94A0" />
              <path d="M114.152 41.8748L82.3401 16.5788C80.9681 15.4868 79.0241 15.4868 77.6521 16.5788L45.8401 41.8748C44.0441 43.3028 42.9961 45.4748 42.9961 47.7708V59.2028L77.6521 31.6428C79.0241 30.5508 80.9681 30.5508 82.3401 31.6428L116.996 59.2028V47.7708C116.996 45.4748 115.948 43.3028 114.152 41.8748Z" fill="#FFF8F4" />
              <path d="M38.1588 123.211H47.8388C50.1068 123.211 51.9508 125.051 51.9508 127.323V141.111H34.0508V127.323C34.0508 125.055 35.8908 123.211 38.1628 123.211H38.1588Z" fill="#6B7683" />
              <path d="M77.156 90.7107L45.344 65.4147C43.972 64.3227 42.028 64.3227 40.656 65.4147L8.844 90.7107C7.048 92.1387 6 94.3107 6 96.6067V132.075C6 137.067 10.048 141.115 15.04 141.115H35.472V126.983C35.472 124.903 37.16 123.215 39.24 123.215H46.772C48.852 123.215 50.54 124.903 50.54 126.983V141.115H80.008V96.6067C80.008 94.3107 78.96 92.1387 77.164 90.7107H77.156Z" fill="#D0D5DA" />
              <path d="M77.156 90.7068L45.344 65.4108C43.972 64.3188 42.028 64.3188 40.656 65.4108L8.844 90.7068C7.048 92.1348 6 94.3068 6 96.6028V108.035L40.656 80.4748C42.028 79.3828 43.972 79.3828 45.344 80.4748L80 108.035V96.6028C80 94.3068 78.952 92.1348 77.156 90.7068Z" fill="#007FF2" />
              <path d="M112.159 123.211H121.839C124.107 123.211 125.951 125.051 125.951 127.323V141.111H108.051V127.323C108.051 125.055 109.887 123.211 112.159 123.211Z" fill="#6B7683" />
              <path d="M151.156 71.8787L119.344 46.5827C117.972 45.4907 116.028 45.4907 114.656 46.5827L82.844 71.8787C81.048 73.3067 80 75.4787 80 77.7747V141.115H109.468V126.983C109.468 124.903 111.156 123.215 113.236 123.215H120.768C122.848 123.215 124.536 124.903 124.536 126.983V141.115H144.964C149.956 141.115 154.004 137.067 154.004 132.075V77.7747C154.004 75.4787 152.952 73.3067 151.156 71.8787Z" fill="#AFB7C0" />
              <path d="M151.152 71.8748L119.34 46.5788C117.968 45.4868 116.024 45.4868 114.652 46.5788L82.8401 71.8748C81.0441 73.3028 79.9961 75.4748 79.9961 77.7708V89.2028L114.652 61.6428C116.024 60.5508 117.968 60.5508 119.34 61.6428L153.996 89.2028V77.7708C153.996 75.4748 152.948 73.3028 151.152 71.8748Z" fill="#EF4452" />
            </g>
            <defs>
              <clipPath id="clip0_3464_15881">
                <rect width="160" height="160" fill="white" transform="translate(0 0.570312)" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-center justify-center"><span className="text-[#a4f4cf] text-[55px] font-bold font-['Pretendard'] leading-[66px]">운영 형태별 </span><span className="text-white text-[55px] font-bold font-['Pretendard'] leading-[66px]">맞춤설정</span></div>
          <p className="text-center justify-center text-[#edeae8] text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">모든 업종, 여러 매장을 운영 중이더라도 이용 가능</p>
        </InViewWrapper>
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">미용실</p>
            </div>
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">호텔</p>
            </div>
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">유치원</p>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">미용실+호텔</p>
            </div>
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">미용실+유치원</p>
            </div>
            <div className="flex-1 h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] inline-flex flex-col justify-center items-center gap-[30px] overflow-hidden">
              <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">호텔+유치원</p>
            </div>
          </div>
          <div className="self-stretch h-[79px] p-[30px] bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#ffd6a7] flex flex-col justify-center items-center gap-[30px] overflow-hidden">
            <p className="text-center justify-center text-[#ffd6a7] text-4xl font-semibold font-['Pretendard']">미용실+호텔+유치원</p>
          </div>
        </div>
      </div>

      <div className="w-[824px] inline-flex flex-col justify-start items-center gap-[50px]">
        <div className="flex flex-col justify-start items-center gap-5">
          <div className="w-40 h-40 relative overflow-hidden">
            <div className="w-[136.90px] h-[90.10px] left-0 top-[49.43px] absolute origin-top-left rotate-[-15deg] bg-[#514f63] rounded-[15px]" />
            <div className="w-[136.90px] h-[92.06px] left-[23.10px] top-[54.60px] absolute bg-[#5d5c69] rounded-[15px] shadow-[-2px_-2px_8px_0px_rgba(0,0,0,0.10)] border-2 border-[#7b7a88]" />
            <div className="w-[59.01px] h-[16.52px] left-[34.90px] top-[71.12px] absolute bg-[#a0a3b2] rounded-[100px]" />
            <div className="w-[136.90px] h-[23.60px] left-[23.10px] top-[123.05px] absolute bg-[#a4f4cf] rounded-bl-[15px] rounded-br-[15px]" />
          </div>
          <div className="text-center justify-center"><span className="text-white text-[55px] font-bold font-['Pretendard']">사용 기능별 </span><span className="text-[#a4f4cf] text-[55px] font-bold font-['Pretendard']">요금제</span></div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="self-stretch p-[30px] bg-white/10 rounded-[40px] inline-flex justify-start items-center gap-[30px] overflow-hidden">
            <Image src="/assets/landing/TryForFree_lookie.svg" alt="루키 플랜" width={60} height={60} />
            <div className="inline-flex flex-col justify-center items-start gap-2.5">
              <p className="text-center justify-center text-[#ffd6a7] text-[40px] font-semibold font-['Pretendard']">루키(Lookie)</p>
              <p className="text-center justify-center text-white/70 text-3xl font-normal font-['Pretendard']">처음 시작하는 사장님을 위한 플랜</p>
            </div>
          </div>
          <div className="self-stretch p-[30px] bg-white/10 rounded-[40px] inline-flex justify-start items-center gap-[30px] overflow-hidden">
            <Image src="/assets/landing/TryForFree_starter.svg" alt="스타터 플랜" width={60} height={60} />
            <div className="inline-flex flex-col justify-center items-start gap-2.5">
              <p className="text-center justify-center text-[#ffd6a7] text-[40px] font-semibold font-['Pretendard']">스타터(Starter)</p>
              <p className="text-center justify-center text-white/70 text-3xl font-normal font-['Pretendard']">단골이 늘어나는 시점에 딱 맞는 확장형 플랜</p>
            </div>
          </div>
          <div className="self-stretch p-[30px] bg-white/10 rounded-[40px] inline-flex justify-start items-center gap-[30px] overflow-hidden">
            <Image src="/assets/landing/TryForFree_standard.svg" alt="스탠다드 플랜" width={60} height={60} />
            <div className="inline-flex flex-col justify-center items-start gap-2.5">
              <p className="text-center justify-center text-[#ffd6a7] text-[40px] font-semibold font-['Pretendard']">스탠다드(Standard)</p>
              <p className="text-center justify-center text-white/70 text-3xl font-normal font-['Pretendard']">가장 많은 선택을 받은 높은 효율의 정석 플랜</p>
            </div>
          </div>
          <div className="self-stretch p-[30px] bg-white/10 rounded-[40px] inline-flex justify-start items-center gap-[30px] overflow-hidden">
            <Image src="/assets/landing/TryForFree_premium.svg" alt="프리미엄 플랜" width={60} height={60} />
            <div className="inline-flex flex-col justify-center items-start gap-2.5">
              <p className="text-center justify-center text-[#ffd6a7] text-[40px] font-semibold font-['Pretendard']">프리미엄(Premium)</p>
              <p className="justify-center text-white/70 text-3xl font-normal font-['Pretendard']">AI Agent를 포함한 모든 고급 기능이 포함된 플랜</p>
            </div>
          </div>
        </div>
        <button className="self-stretch cursor-pointer px-10 py-[30px] bg-[#ffd6a7] rounded-[20px] inline-flex justify-between items-center overflow-hidden" onClick={() => router.push('/simulation')} aria-label='나에게 맞는 요금제 찾기'>
          <div className="flex-1 flex justify-between items-center">
            <p className="justify-center text-[#5c3f2c] text-[34px] font-bold font-['Pretendard']">나에게 맞는 요금제 찾기</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
              <path d="M9.16667 41.0389C8.47222 41.3167 7.8125 41.2556 7.1875 40.8556C6.5625 40.4556 6.25 39.8743 6.25 39.1118V29.7368L22.9167 25.5701L6.25 21.4035V12.0285C6.25 11.2646 6.5625 10.6833 7.1875 10.2847C7.8125 9.88612 8.47222 9.82501 9.16667 10.1014L41.25 23.6431C42.1181 24.025 42.5521 24.6674 42.5521 25.5701C42.5521 26.4729 42.1181 27.1153 41.25 27.4972L9.16667 41.0389Z" fill="#5C3F2C" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

function TryForFree_Section2({ scale = 1 }: { scale?: number }) {
  return (
    <div className="flex flex-col w-[824px] justify-start items-center gap-[50px]" style={{ scale, transformOrigin: 'top left' }}>
      <InViewWrapper className="flex flex-col justify-start items-center gap-[30px]">
        <Image src="/assets/landing/TryForFree_text.svg" alt="써보고 결정하세요" width={400} height={100} />
        <div className="flex flex-col justify-start items-center gap-[5px]">
          <p className="text-center justify-center text-white text-[55px] font-bold font-['Pretendard'] leading-[66px]">써보고 결정하세요</p>
          <p className="text-center justify-center text-[#a4f4cf] text-[55px] font-extrabold font-['Pretendard'] leading-[66px]"> 필요한 만큼만, 합리적으로</p>
        </div>
        <div className="text-center justify-center text-[#edeae8] text-3xl font-normal font-['Pretendard'] tracking-tight">
          어떤 요금제를 선택해도,<br />모든 기능을 제한 없이 체험 가능합니다.
        </div>
      </InViewWrapper>
    </div>
  )
}

export default TryForFree