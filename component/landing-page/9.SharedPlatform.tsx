'use client'

import SharedPlatformImage from '../../public/assets/landing/SharedPlatform.png'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import InViewWrapper from './InViewWrapper'

const SharedPlatform = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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
      ref={ref}
      id={'shared_platform'}
      className='w-full py-20 bg-white inline-flex flex-col justify-center items-center gap-10 overflow-hidden'
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
              <path
                d='M4.10469 1.93333C3.65375 1.93333 3.3125 2.2824 3.3125 2.68373V3.8H2.375V2.68373C2.375 1.74107 3.1625 1 4.10469 1H13.7703C14.7125 1 15.5 1.74107 15.5 2.68373V9.58293C15.5 10.5256 14.7125 11.2667 13.7703 11.2667H8V10.3333H13.7703C14.2213 10.3333 14.5625 9.98427 14.5625 9.58293V2.68373C14.5625 2.2824 14.2213 1.93333 13.7703 1.93333H4.10469ZM8 9.4H10.3438C10.4681 9.4 10.5873 9.35083 10.6752 9.26332C10.7631 9.1758 10.8125 9.0571 10.8125 8.93333C10.8125 8.80957 10.7631 8.69087 10.6752 8.60335C10.5873 8.51583 10.4681 8.46667 10.3438 8.46667H8V9.4ZM3.3125 12.2C3.18818 12.2 3.06895 12.2492 2.98104 12.3367C2.89314 12.4242 2.84375 12.5429 2.84375 12.6667C2.84375 12.7904 2.89314 12.9091 2.98104 12.9967C3.06895 13.0842 3.18818 13.1333 3.3125 13.1333H4.25C4.37432 13.1333 4.49355 13.0842 4.58146 12.9967C4.66936 12.9091 4.71875 12.7904 4.71875 12.6667C4.71875 12.5429 4.66936 12.4242 4.58146 12.3367C4.49355 12.2492 4.37432 12.2 4.25 12.2H3.3125ZM0.5 6.13333C0.5 5.76203 0.648158 5.40593 0.911881 5.14338C1.1756 4.88083 1.53329 4.73333 1.90625 4.73333H5.65625C6.02921 4.73333 6.3869 4.88083 6.65062 5.14338C6.91434 5.40593 7.0625 5.76203 7.0625 6.13333V13.6C7.0625 13.9713 6.91434 14.3274 6.65062 14.5899C6.3869 14.8525 6.02921 15 5.65625 15H1.90625C1.53329 15 1.1756 14.8525 0.911881 14.5899C0.648158 14.3274 0.5 13.9713 0.5 13.6V6.13333ZM1.90625 5.66667C1.78193 5.66667 1.6627 5.71583 1.57479 5.80335C1.48689 5.89087 1.4375 6.00957 1.4375 6.13333V13.6C1.4375 13.7238 1.48689 13.8425 1.57479 13.93C1.6627 14.0175 1.78193 14.0667 1.90625 14.0667H5.65625C5.78057 14.0667 5.8998 14.0175 5.98771 13.93C6.07561 13.8425 6.125 13.7238 6.125 13.6V6.13333C6.125 6.00957 6.07561 5.89087 5.98771 5.80335C5.8998 5.71583 5.78057 5.66667 5.65625 5.66667H1.90625Z'
                fill='#1D7DDF'
              />
            </svg>
            <p className="text-center justify-center text-[#1d7ddf] text-[13px] font-semibold font-['Pretendard']">
              모두가 함께 쓰는 포포넛
            </p>
          </div>
          <p
            className='text-center justify-center h-[62px]'
            style={{
              lineHeight: '28px'
            }}
          >
            <span className="text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard']">
              인원 제한 없이,
              <br />{' '}
            </span>
            <span className="text-[#623112] text-[26px] font-bold font-['Pretendard']">어떤 기기에서도</span>
          </p>
        </div>
        <div className='w-[291px] h-[38px] relative'>
          <p className='w-[291px] left-0 top-[-3px] absolute text-center justify-center'>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              포포넛은 인원 수나 기기에 상관없이
              <br />
            </span>
            <span className="text-[#1d2232]/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              모든 팀원이 자유롭게 사용
            </span>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              할 수 있어요
            </span>
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-full relative overflow-hidden flex justify-center'
      >
        <Image
          src={SharedPlatformImage}
          alt={'모두가 함께 쓰는 포포넛'}
          width={2000}
          height={2000}
          className={'w-[365px] h-[166px] object-cover'}
          placeholder={'blur'}
        />
      </motion.div>
    </section>
  ) : (
    <section ref={ref} id={'shared_platform'} className={'scale-[0.8]'}>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-full pb-[100px] bg-white inline-flex flex-col justify-center items-center gap-[90px] overflow-hidden'
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='flex flex-col justify-start items-center gap-5'>
            <div className='px-9 py-4 bg-gradient-to-r from-[#61d3fb]/20 via-[#48a0f8]/20 to-[#d281f8]/20 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#e8e9ea] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                <path
                  d='M6.52719 3.4C5.83575 3.4 5.3125 3.9236 5.3125 4.5256V6.2H3.875V4.5256C3.875 3.1116 5.0825 2 6.52719 2H21.3478C22.7925 2 24 3.1116 24 4.5256V14.8744C24 16.2884 22.7925 17.4 21.3478 17.4H12.5V16H21.3478C22.0393 16 22.5625 15.4764 22.5625 14.8744V4.5256C22.5625 3.9236 22.0393 3.4 21.3478 3.4H6.52719ZM12.5 14.6H16.0938C16.2844 14.6 16.4672 14.5263 16.602 14.395C16.7368 14.2637 16.8125 14.0857 16.8125 13.9C16.8125 13.7143 16.7368 13.5363 16.602 13.405C16.4672 13.2737 16.2844 13.2 16.0938 13.2H12.5V14.6ZM5.3125 18.8C5.12188 18.8 4.93906 18.8737 4.80427 19.005C4.66948 19.1363 4.59375 19.3143 4.59375 19.5C4.59375 19.6857 4.66948 19.8637 4.80427 19.995C4.93906 20.1263 5.12188 20.2 5.3125 20.2H6.75C6.94062 20.2 7.12344 20.1263 7.25823 19.995C7.39302 19.8637 7.46875 19.6857 7.46875 19.5C7.46875 19.3143 7.39302 19.1363 7.25823 19.005C7.12344 18.8737 6.94062 18.8 6.75 18.8H5.3125ZM1 9.7C1 9.14305 1.22718 8.6089 1.63155 8.21508C2.03593 7.82125 2.58438 7.6 3.15625 7.6H8.90625C9.47812 7.6 10.0266 7.82125 10.4309 8.21508C10.8353 8.6089 11.0625 9.14305 11.0625 9.7V20.9C11.0625 21.457 10.8353 21.9911 10.4309 22.3849C10.0266 22.7787 9.47812 23 8.90625 23H3.15625C2.58438 23 2.03593 22.7787 1.63155 22.3849C1.22718 21.9911 1 21.457 1 20.9V9.7ZM3.15625 9C2.96563 9 2.78281 9.07375 2.64802 9.20502C2.51323 9.3363 2.4375 9.51435 2.4375 9.7V20.9C2.4375 21.0857 2.51323 21.2637 2.64802 21.395C2.78281 21.5263 2.96563 21.6 3.15625 21.6H8.90625C9.09687 21.6 9.27969 21.5263 9.41448 21.395C9.54927 21.2637 9.625 21.0857 9.625 20.9V9.7C9.625 9.51435 9.54927 9.3363 9.41448 9.20502C9.27969 9.07375 9.09687 9 8.90625 9H3.15625Z'
                  fill='#1D7DDF'
                />
              </svg>
              <p className="text-center justify-center text-[#1d7ddf] text-2xl font-semibold font-['Pretendard']">
                모두가 함께 쓰는 포포넛
              </p>
            </div>
            <p className='text-center justify-center'>
              <span className="text-[#1d2232]/90 text-[70px] font-bold font-['Pretendard']">인원 제한 없이, </span>
              <span className="text-[#623112] text-[70px] font-bold font-['Pretendard']">어떤 기기에서도</span>
            </p>
          </div>
          <p className='text-center justify-center'>
            <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
              포포넛은 인원 수나 기기에 상관없이
              <br />
            </span>
            <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[50px] tracking-tight">
              모든 팀원이 자유롭게 사용
            </span>
            <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[50px] tracking-tight">
              할 수 있어요
            </span>
          </p>
        </div>
        <InViewWrapper className='w-full h-[698px] relative flex justify-center'>
          <Image
            src={SharedPlatformImage}
            alt={'모두가 함께 쓰는 포포넛'}
            width={3000}
            height={3000}
            className={'h-[698px] w-auto object-cover'}
            placeholder={'blur'}
          />
        </InViewWrapper>
      </motion.div>
    </section>
  )
})

export default SharedPlatform
