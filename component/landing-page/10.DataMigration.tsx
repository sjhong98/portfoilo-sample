'use client'

import DataMigration_excel from '../../public/assets/landing/DataMigration_excel'
import DataMigration_otherService from '../../public/assets/landing/DataMigration_otherService'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import InViewWrapper from './InViewWrapper'

const DataMigration = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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

  const item: any = {
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
      id={'data_migration_section_title'}
      className='w-full px-8 py-20 bg-white inline-flex flex-col justify-start items-center gap-10 overflow-hidden'
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
            <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
              <path
                d='M8.5013 6C11.4468 6 13.8346 5.10457 13.8346 4C13.8346 2.89543 11.4468 2 8.5013 2C5.55578 2 3.16797 2.89543 3.16797 4C3.16797 5.10457 5.55578 6 8.5013 6Z'
                stroke='#1D7DDF'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4.52597 8C3.6813 8.35333 3.16797 8.82133 3.16797 9.33333C3.16797 10.438 5.55597 11.3333 8.5013 11.3333C11.4466 11.3333 13.8346 10.438 13.8346 9.33333C13.8346 8.82133 13.3213 8.35333 12.4766 8'
                stroke='#1D7DDF'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.16797 4V6.66667C3.16797 7.77133 5.55597 8.66667 8.5013 8.66667C11.4466 8.66667 13.8346 7.77133 13.8346 6.66667V4M3.16797 9.33333V12C3.16797 13.1047 5.55597 14 8.5013 14C11.4466 14 13.8346 13.1047 13.8346 12V9.33333'
                stroke='#1D7DDF'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <div className="text-center justify-center text-[#1d7ddf] text-[13px] font-semibold font-['Pretendard']">
              완벽한 데이터 이관
            </div>
          </div>
          <div className="text-center justify-center text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard']">
            데이터 이관이 걱정이신가요?
          </div>
        </div>
        <div className='w-[291px] h-[38px] relative'>
          <div className='w-[291px] left-0 top-[-3px] absolute text-center justify-center'>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              기존에 관리중인 고객 데이터는
              <br /> 포포넛이{' '}
            </span>
            <span className="text-[#1d2232]/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              사장님 대신 옮겨드려요
            </span>
          </div>
        </div>
      </motion.div>
      <section id={'data_migration_content_1'} className={'w-full'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='self-stretch px-4 py-6 bg-[#5fa0db] rounded-2xl flex flex-col justify-start items-center gap-4 overflow-hidden'
        >
          <div className='self-stretch flex flex-col justify-start items-center gap-[15px]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='41' height='40' viewBox='0 0 41 40' fill='none'>
              <path
                d='M31.75 4.0625H11.75C11.1698 4.0625 10.6134 4.29297 10.2032 4.7032C9.79297 5.11344 9.5625 5.66984 9.5625 6.25V10.3125H6.75C6.16984 10.3125 5.61344 10.543 5.2032 10.9532C4.79297 11.3634 4.5625 11.9198 4.5625 12.5V27.5C4.5625 28.0802 4.79297 28.6366 5.2032 29.0468C5.61344 29.457 6.16984 29.6875 6.75 29.6875H9.5625V33.75C9.5625 34.3302 9.79297 34.8866 10.2032 35.2968C10.6134 35.707 11.1698 35.9375 11.75 35.9375H31.75C32.3302 35.9375 32.8866 35.707 33.2968 35.2968C33.707 34.8866 33.9375 34.3302 33.9375 33.75V6.25C33.9375 5.66984 33.707 5.11344 33.2968 4.7032C32.8866 4.29297 32.3302 4.0625 31.75 4.0625ZM25.1875 15.9375H32.0625V24.0625H25.1875V15.9375ZM32.0625 6.25V14.0625H25.1875V12.5C25.1875 11.9198 24.957 11.3634 24.5468 10.9532C24.1366 10.543 23.5802 10.3125 23 10.3125H22.6875V5.9375H31.75C31.8329 5.9375 31.9124 5.97042 31.971 6.02903C32.0296 6.08763 32.0625 6.16712 32.0625 6.25ZM11.4375 6.25C11.4375 6.16712 11.4704 6.08763 11.529 6.02903C11.5876 5.97042 11.6671 5.9375 11.75 5.9375H20.8125V10.3125H11.4375V6.25ZM6.4375 27.5V12.5C6.4375 12.4171 6.47042 12.3376 6.52903 12.279C6.58763 12.2204 6.66712 12.1875 6.75 12.1875H23C23.0829 12.1875 23.1624 12.2204 23.221 12.279C23.2796 12.3376 23.3125 12.4171 23.3125 12.5V27.5C23.3125 27.5829 23.2796 27.6624 23.221 27.721C23.1624 27.7796 23.0829 27.8125 23 27.8125H6.75C6.66712 27.8125 6.58763 27.7796 6.52903 27.721C6.47042 27.6624 6.4375 27.5829 6.4375 27.5ZM11.4375 33.75V29.6875H20.8125V34.0625H11.75C11.6671 34.0625 11.5876 34.0296 11.529 33.971C11.4704 33.9124 11.4375 33.8329 11.4375 33.75ZM31.75 34.0625H22.6875V29.6875H23C23.5802 29.6875 24.1366 29.457 24.5468 29.0468C24.957 28.6366 25.1875 28.0802 25.1875 27.5V25.9375H32.0625V33.75C32.0625 33.8329 32.0296 33.9124 31.971 33.971C31.9124 34.0296 31.8329 34.0625 31.75 34.0625ZM11.0297 23.15L13.6547 20L11.0297 16.85C10.9497 16.7556 10.8893 16.6462 10.8518 16.5283C10.8143 16.4104 10.8005 16.2862 10.8112 16.1629C10.822 16.0396 10.857 15.9197 10.9143 15.81C10.9716 15.7003 11.0501 15.6031 11.1452 15.5239C11.2403 15.4447 11.3501 15.3851 11.4683 15.3486C11.5865 15.312 11.7108 15.2992 11.834 15.311C11.9572 15.3227 12.0768 15.3587 12.1861 15.4169C12.2953 15.4751 12.3919 15.5543 12.4703 15.65L14.875 18.5359L17.2797 15.65C17.4395 15.4612 17.6674 15.3433 17.9139 15.3218C18.1603 15.3003 18.4052 15.3771 18.5952 15.5354C18.7853 15.6937 18.9051 15.9207 18.9285 16.167C18.9519 16.4132 18.8771 16.6587 18.7203 16.85L16.0953 20L18.7203 23.15C18.8003 23.2444 18.8607 23.3538 18.8982 23.4717C18.9357 23.5896 18.9495 23.7138 18.9388 23.8371C18.928 23.9604 18.893 24.0803 18.8357 24.19C18.7784 24.2997 18.6999 24.3969 18.6048 24.4761C18.5097 24.5553 18.3999 24.6149 18.2817 24.6514C18.1635 24.688 18.0392 24.7008 17.916 24.689C17.7928 24.6773 17.6732 24.6413 17.5639 24.5831C17.4547 24.5249 17.3581 24.4457 17.2797 24.35L14.875 21.4641L12.4703 24.35C12.3105 24.5388 12.0826 24.6567 11.8361 24.6782C11.5897 24.6997 11.3448 24.6229 11.1548 24.4646C10.9647 24.3063 10.8449 24.0793 10.8215 23.833C10.7981 23.5868 10.8729 23.3413 11.0297 23.15Z'
                fill='white'
              />
            </svg>
            <div className="text-center justify-start text-white text-[26px] font-bold font-['Pretendard']">
              엑셀 & 수기 관리
            </div>
            <div className="text-center justify-start text-white/70 text-lg font-normal font-['Pretendard'] leading-snug">
              작성된 형태에 구분하지 않고
              <br /> 데이터를 옮겨드릴 수 있어요.
            </div>
          </div>
          <div className='w-full h-[120px] relative overflow-hidden flex justify-center'>
            <DataMigration_excel width={197} height={120} className={'ml-4'} />
          </div>
          <ul className='w-[211px] flex flex-col justify-start items-start gap-2.5'>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                기존 고객 정보 완전 보존
              </div>
            </li>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                예약 히스토리 자동 정리
              </div>
            </li>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                전문팀이 직접 데이터 검증
              </div>
            </li>
          </ul>
        </motion.div>
      </section>
      <section id={'data_migration_content_2'} className={'w-full'}>
        <motion.div
          variants={item}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className='self-stretch px-4 py-6 bg-[#b16ddd] rounded-2xl flex flex-col justify-start items-center gap-4 overflow-hidden'
        >
          <div className='self-stretch flex flex-col justify-start items-center gap-[15px]'>
            <div className='w-10 h-10 relative overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='41' height='40' viewBox='0 0 41 40' fill='none'>
                <path
                  d='M37.1654 19.9997C37.1654 10.7947 29.7037 3.33301 20.4987 3.33301C11.2937 3.33301 3.83203 10.7947 3.83203 19.9997C3.83203 29.2047 11.2937 36.6663 20.4987 36.6663'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22.1661 3.41602C22.1661 3.41602 27.1661 9.99935 27.1661 19.9993M18.8328 36.5827C18.8328 36.5827 13.8328 29.9993 13.8328 19.9993C13.8328 9.99935 18.8328 3.41602 18.8328 3.41602M4.88281 25.8327H20.4995M4.88281 14.166H36.1161'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M36.9653 29.8611C37.7887 30.3678 37.737 31.5994 36.8903 31.6961L32.612 32.1811L30.6937 36.0344C30.3137 36.7994 29.1387 36.4244 28.9437 35.4778L26.852 25.2844C26.687 24.4844 27.407 23.9811 28.102 24.4094L36.9653 29.8611Z'
                  stroke='white'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <div className="text-center justify-start text-white text-[26px] font-bold font-['Pretendard']">
              타사 프로그램
            </div>
            <div className="text-center justify-start text-white/70 text-lg font-normal font-['Pretendard'] leading-snug">
              어떤 프로그램을 사용중이시더라도
              <br /> 포포넛에 데이터를 옮길 수 있어요.
            </div>
          </div>
          <div className='w-full h-[120px] relative overflow-hidden flex justify-center'>
            <DataMigration_otherService width={260} height={155} className={'mt-[-20px]'} />
          </div>
          <ul className='w-[211px] flex flex-col justify-start items-start gap-2.5'>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                고객 정보 & 매출 데이터
              </div>
            </li>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                메뉴 & 서비스 설정
              </div>
            </li>
            <li className='inline-flex justify-start items-center gap-2.5 h-[19px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                <g clipPath='url(#clip0_1240_5174)'>
                  <path
                    d='M8 0.5C3.58175 0.5 0 4.08175 0 8.5C0 12.9185 3.58175 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08175 12.4185 0.5 8 0.5ZM8 15.5157C4.14025 15.5157 1 12.3597 1 8.49997C1 4.64022 4.14025 1.49997 8 1.49997C11.8597 1.49997 15 4.64023 15 8.49997C15 12.3597 11.8597 15.5157 8 15.5157ZM11.1927 5.57275L6.49898 10.296L4.38523 8.18225C4.18998 7.987 3.87348 7.987 3.67798 8.18225C3.48273 8.3775 3.48273 8.694 3.67798 8.88925L6.15273 11.3643C6.34798 11.5592 6.66448 11.5592 6.85998 11.3643C6.88248 11.3418 6.90175 11.3172 6.91925 11.2917L11.9003 6.27998C12.0953 6.08473 12.0953 5.76823 11.9003 5.57275C11.7048 5.3775 11.3883 5.3775 11.1927 5.57275Z'
                    fill='white'
                    fillOpacity='0.8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1240_5174'>
                    <rect width='16' height='16' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
              <div className="justify-start text-white/80 text-base font-medium font-['Pretendard']">
                상세 이용 히스토리
              </div>
            </li>
          </ul>
        </motion.div>
      </section>
    </section>
  ) : (
    <section
      ref={ref}
      id={'data_migration_title'}
      className={'w-full scale-[0.8] mt-[-100px]'}
      style={{ height: isTablet ? '1204px' : '1704px' }}
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-full py-[100px] bg-white inline-flex flex-col justify-center items-center gap-[90px] overflow-hidden'
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='flex flex-col justify-start items-center gap-10'>
            <div className='px-9 py-4 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#e8e9ea] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
              <InViewWrapper className='w-[24px] h-[25px]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
                  <path
                    d='M12 9.07031C16.4183 9.07031 20 7.72717 20 6.07031C20 4.41346 16.4183 3.07031 12 3.07031C7.58172 3.07031 4 4.41346 4 6.07031C4 7.72717 7.58172 9.07031 12 9.07031Z'
                    stroke='#1D7DDF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6.037 12.0703C4.77 12.6003 4 13.3023 4 14.0703C4 15.7273 7.582 17.0703 12 17.0703C16.418 17.0703 20 15.7273 20 14.0703C20 13.3023 19.23 12.6003 17.963 12.0703'
                    stroke='#1D7DDF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 6.07031V10.0703C4 11.7273 7.582 13.0703 12 13.0703C16.418 13.0703 20 11.7273 20 10.0703V6.07031M4 14.0703V18.0703C4 19.7273 7.582 21.0703 12 21.0703C16.418 21.0703 20 19.7273 20 18.0703V14.0703'
                    stroke='#1D7DDF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </InViewWrapper>
              <div className="text-center justify-center text-[#1d7ddf] text-2xl font-semibold font-['Pretendard']">
                완벽한 데이터 이관
              </div>
            </div>
            <div className="text-center justify-center text-[#1d2232]/90 text-[75px] font-bold font-['Pretendard']">
              데이터 이관이 걱정이신가요?
            </div>
          </div>
          <div className='text-center justify-center'>
            <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
              기존에 관리중인 고객 데이터는
              <br /> 포포넛이{' '}
            </span>
            <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[50px] tracking-tight">
              사장님 대신 옮겨드려요
            </span>
          </div>
        </div>
        <section
          id={'data_migration_content'}
          className='w-[1562px] inline-flex justify-start items-start gap-[82px] flex-wrap content-start'
        >
          <motion.div
            id={'data_migration_content_1'}
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='p-[60px] bg-[#5fa0db] rounded-[40px] inline-flex flex-col justify-center items-start gap-[30px] overflow-hidden'
            style={{
              scale: isTablet ? 0.5 : 1,
              transformOrigin: 'right top'
            }}
          >
            <div className='w-[620px] flex flex-col justify-start items-start gap-[51px]'>
              <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100' height='101' viewBox='0 0 100 101' fill='none'>
                  <path
                    d='M78.125 10.7266H28.125C26.6746 10.7266 25.2836 11.3027 24.258 12.3283C23.2324 13.3539 22.6562 14.7449 22.6562 16.1953V26.3516H15.625C14.1746 26.3516 12.7836 26.9277 11.758 27.9533C10.7324 28.9789 10.1563 30.3699 10.1562 31.8203V69.3203C10.1562 70.7707 10.7324 72.1617 11.758 73.1873C12.7836 74.2129 14.1746 74.7891 15.625 74.7891H22.6562V84.9453C22.6562 86.3957 23.2324 87.7867 24.258 88.8123C25.2836 89.8379 26.6746 90.4141 28.125 90.4141H78.125C79.5754 90.4141 80.9664 89.8379 81.992 88.8123C83.0176 87.7867 83.5938 86.3957 83.5938 84.9453V16.1953C83.5938 14.7449 83.0176 13.3539 81.992 12.3283C80.9664 11.3027 79.5754 10.7266 78.125 10.7266ZM61.7188 40.4141H78.9062V60.7266H61.7188V40.4141ZM78.9062 16.1953V35.7266H61.7188V31.8203C61.7188 30.3699 61.1426 28.9789 60.117 27.9533C59.0914 26.9277 57.7004 26.3516 56.25 26.3516H55.4688V15.4141H78.125C78.3322 15.4141 78.5309 15.4964 78.6774 15.6429C78.8239 15.7894 78.9062 15.9881 78.9062 16.1953ZM27.3438 16.1953C27.3438 15.9881 27.4261 15.7894 27.5726 15.6429C27.7191 15.4964 27.9178 15.4141 28.125 15.4141H50.7812V26.3516H27.3438V16.1953ZM14.8438 69.3203V31.8203C14.8438 31.6131 14.9261 31.4144 15.0726 31.2679C15.2191 31.1214 15.4178 31.0391 15.625 31.0391H56.25C56.4572 31.0391 56.6559 31.1214 56.8024 31.2679C56.9489 31.4144 57.0312 31.6131 57.0312 31.8203V69.3203C57.0312 69.5275 56.9489 69.7262 56.8024 69.8727C56.6559 70.0193 56.4572 70.1016 56.25 70.1016H15.625C15.4178 70.1016 15.2191 70.0193 15.0726 69.8727C14.9261 69.7262 14.8438 69.5275 14.8438 69.3203ZM27.3438 84.9453V74.7891H50.7812V85.7266H28.125C27.9178 85.7266 27.7191 85.6443 27.5726 85.4977C27.4261 85.3512 27.3438 85.1525 27.3438 84.9453ZM78.125 85.7266H55.4688V74.7891H56.25C57.7004 74.7891 59.0914 74.2129 60.117 73.1873C61.1426 72.1617 61.7188 70.7707 61.7188 69.3203V65.4141H78.9062V84.9453C78.9062 85.1525 78.8239 85.3512 78.6774 85.4977C78.5309 85.6443 78.3322 85.7266 78.125 85.7266ZM26.3242 58.4453L32.8867 50.5703L26.3242 42.6953C26.1243 42.4592 25.9732 42.1859 25.8794 41.891C25.7857 41.5962 25.7513 41.2858 25.7781 40.9776C25.8049 40.6694 25.8925 40.3695 26.0358 40.0954C26.1791 39.8212 26.3753 39.5781 26.613 39.3801C26.8507 39.1821 27.1252 39.0331 27.4208 38.9417C27.7163 38.8504 28.0271 38.8184 28.335 38.8477C28.643 38.877 28.9421 38.967 29.2151 39.1125C29.4882 39.2579 29.7297 39.456 29.9258 39.6953L35.9375 46.9102L41.9492 39.6953C42.3488 39.2234 42.9186 38.9284 43.5346 38.8748C44.1507 38.8211 44.7629 39.0131 45.2381 39.4089C45.7132 39.8046 46.0126 40.3721 46.0712 40.9877C46.1298 41.6033 45.9427 42.217 45.5508 42.6953L38.9883 50.5703L45.5508 58.4453C45.7507 58.6814 45.9018 58.9548 45.9956 59.2496C46.0893 59.5444 46.1237 59.8549 46.0969 60.1631C46.0701 60.4713 45.9825 60.7711 45.8392 61.0453C45.6959 61.3195 45.4997 61.5625 45.262 61.7605C45.0243 61.9585 44.7498 62.1075 44.4542 62.1989C44.1587 62.2903 43.8479 62.3222 43.54 62.2929C43.232 62.2636 42.9329 62.1736 42.6599 62.0281C42.3868 61.8827 42.1453 61.6846 41.9492 61.4453L35.9375 54.2305L29.9258 61.4453C29.5262 61.9173 28.9564 62.2122 28.3404 62.2658C27.7243 62.3195 27.1121 62.1275 26.6369 61.7318C26.1618 61.336 25.8624 60.7685 25.8038 60.1529C25.7452 59.5374 25.9323 58.9236 26.3242 58.4453Z'
                    fill='white'
                  />
                </svg>
                <div className="justify-start text-white text-6xl font-bold font-['Pretendard']">엑셀 & 수기 관리</div>
                <div className="w-[620px] justify-start text-white/70 text-[34px] font-normal font-['Pretendard'] leading-[50px]">
                  작성된 형태에 구분하지 않고
                  <br /> 데이터를 옮겨드릴 수 있어요.
                </div>
              </div>
            </div>
            <div className='w-[620px] h-[400px] relative overflow-hidden'>
              <div className='w-[500px] h-[322px] left-[60px] top-[48.94px] absolute overflow-hidden'>
                <DataMigration_excel />
              </div>
            </div>
            <div className='self-stretch h-px bg-white' />
            <ul className='flex flex-col justify-start items-start gap-5'>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  기존 고객 정보 완전 보존
                </div>
              </li>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  예약 히스토리 자동 정리
                </div>
              </li>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  전문팀이 직접 데이터 검증
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            id={'data_migration_content_2'}
            variants={item}
            initial='hidden'
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring' as const, stiffness: 100, delay: 0.2 }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='p-[60px] bg-[#b06ddc] rounded-[40px] inline-flex flex-col justify-center items-start gap-[30px] overflow-hidden'
            style={{
              scale: isTablet ? 0.5 : 1,
              transformOrigin: 'left top'
            }}
          >
            <div className='w-[620px] flex flex-col justify-start items-start gap-[51px]'>
              <div className='self-stretch flex flex-col justify-start items-start gap-[15px]'>
                <InViewWrapper className='w-[100px] h-[101px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='100' height='101' viewBox='0 0 100 101' fill='none'>
                    <path
                      d='M91.6673 50.571C91.6673 27.5585 73.0131 8.9043 50.0006 8.9043C26.9882 8.9043 8.33398 27.5585 8.33398 50.571C8.33398 73.5835 26.9882 92.2376 50.0006 92.2376'
                      stroke='white'
                      strokeWidth='4.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M54.1673 9.11328C54.1673 9.11328 66.6673 25.5716 66.6673 50.5716M45.834 92.03C45.834 92.03 33.334 75.5716 33.334 50.5716C33.334 25.5716 45.834 9.11328 45.834 9.11328M10.959 65.1549H50.0006M10.959 35.9883H89.0423'
                      stroke='white'
                      strokeWidth='4.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M91.1633 75.2255C93.2216 76.4921 93.0925 79.5713 90.9758 79.813L80.28 81.0255L75.4841 90.6588C74.5341 92.5713 71.5966 91.6338 71.1091 89.2671L65.88 63.7838C65.4675 61.7838 67.2675 60.5255 69.005 61.5963L91.1633 75.2255Z'
                      stroke='white'
                      strokeWidth='4.5'
                    />
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-6xl font-bold font-['Pretendard']">타사 프로그램</div>
                <div className="w-[620px] justify-start text-white/70 text-[34px] font-normal font-['Pretendard'] leading-[50px]">
                  어떤 프로그램을 사용중이시더라도
                  <br /> 포포넛에 데이터를 옮길 수 있어요.
                </div>
              </div>
            </div>
            <div className='w-[620px] h-[400px] relative overflow-hidden'>
              <div className='w-[600px] h-[323px] left-[10px] top-[-10.64px] absolute'>
                <DataMigration_otherService width={600} height={423} />
              </div>
            </div>
            <div className='self-stretch h-px bg-white' />
            <ul className='flex flex-col justify-start items-start gap-5'>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  고객 정보 & 매출 데이터
                </div>
              </li>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  메뉴 & 서비스 설정
                </div>
              </li>
              <li className='inline-flex justify-start items-center gap-2.5'>
                <InViewWrapper className='w-[30px] h-[31px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='31' viewBox='0 0 30 31' fill='none'>
                    <g clipPath='url(#clip0_1009_1949)'>
                      <path
                        d='M15 0.570312C6.71578 0.570312 0 7.28609 0 15.5703C0 23.855 6.71578 30.5703 15 30.5703C23.2847 30.5703 30 23.855 30 15.5703C30 7.28609 23.2847 0.570312 15 0.570312ZM15 28.7248C7.76297 28.7248 1.875 22.8073 1.875 15.5703C1.875 8.33322 7.76297 2.44525 15 2.44525C22.237 2.44525 28.125 8.33325 28.125 15.5703C28.125 22.8073 22.237 28.7248 15 28.7248ZM20.9864 10.0817L12.1856 18.9378L8.22231 14.9745C7.85622 14.6084 7.26278 14.6084 6.89622 14.9745C6.53013 15.3406 6.53013 15.9341 6.89622 16.3002L11.5364 20.9408C11.9025 21.3064 12.4959 21.3064 12.8625 20.9408C12.9047 20.8986 12.9408 20.8526 12.9736 20.8048L22.313 11.4078C22.6786 11.0417 22.6786 10.4483 22.313 10.0817C21.9464 9.71562 21.353 9.71562 20.9864 10.0817Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1009_1949'>
                        <rect width='30' height='30' fill='white' transform='translate(0 0.570312)' />
                      </clipPath>
                    </defs>
                  </svg>
                </InViewWrapper>
                <div className="justify-start text-white text-[34px] font-medium font-['Pretendard'] leading-[50px]">
                  상세 이용 히스토리
                </div>
              </li>
            </ul>
          </motion.div>
        </section>
      </motion.div >
    </section >
  )
})

export default DataMigration
