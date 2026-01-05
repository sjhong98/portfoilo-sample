'use client'

import Image from 'next/image'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeroCalendar from '../../public/assets/landing/HeroCalendar.png'
import InViewWrapper from './InViewWrapper'

interface Props {
  initialRendered: boolean
  setInitialRendered: any,
}

const Hero = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const router = useRouter()
  const isPc = useMediaQuery('(min-width: 1611px)')
  const isTablet = useMediaQuery('(max-width: 1610px)')
  const isPcOrTablet = useMediaQuery('(min-width: 901px)')
  const isMobile = useMediaQuery('(max-width: 900px)')

  useEffect(() => props.setInitialRendered(true), [])
  return (
    <div className='relative'>

      {/* unified title */}
      <div className='w-full flex justify-center absolute unified-title z-[2]'>
        <div className='inline-flex flex-col justify-start items-center'>
          <h1 className="text-center justify-center text-[#1d2232]/90 font-bold font-['Pretendard']">
            <span className="block text-[#1d2232]/70 font-medium">반려동물 미용실・호텔・유치원</span>
            <span className="block">고객 관리에도 전략이 필요합니다</span>
          </h1>
        </div>
      </div>

      {/*  MOBILE  */}
      <div
        ref={ref}
        className='w-full h-[670px] relative bg-gradient-to-b from-[#fefef9] via-white to-[#faf5e3] overflow-hidden flex justify-center initial-load-section-mobile'
      >
        <div className='w-[535px] h-[535px] left-[307px] top-[73px] absolute opacity-30 bg-[#ffd6a7]/50 rounded-full blur-[32px]' />
        <div className='w-full top-[234px] absolute inline-flex flex-col justify-start items-center gap-[5px]'>
          <h2 className='self-stretch inline-flex justify-center items-center gap-[3px]'>
            <span className="text-center justify-center text-[#1d2232]/70 text-base font-normal font-['Pretendard']">
              프리미엄 서비스
            </span>
            <span
              className="text-center justify-center text-[#61d3fb] text-base font-semibold font-['Pretendard']"
              style={{
                background: 'linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              포포넛 AI 에이전트로
            </span>
          </h2>
          <div className='text-center justify-center'>
            <span className="text-[#1d2232]/70 text-base font-medium font-['Pretendard']">기억에 남는 매장</span>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard']">이 되어보세요</span>
          </div>
        </div>
        <div className='w-full h-[37px] top-[633px] absolute overflow-hidden'>
          <div className='w-full h-[37px] bg-[#72462a]' />
          <InViewWrapper label='Hero' index={1} className='w-full left-0 top-[10px] absolute inline-flex justify-start items-center gap-[5px]'>
            <>
              <svg xmlns='http://www.w3.org/2000/svg' width='146' height='17' viewBox='0 0 146 17' fill='none'>
                <path
                  d='M8.12402 2.11914C9.35905 2.11914 10.425 2.31438 11.3242 2.70215C12.2226 3.08924 12.9091 3.64054 13.3916 4.35156C13.8732 5.06138 14.1171 5.89917 14.1172 6.86816C14.1172 7.83714 13.8737 8.67192 13.3926 9.375C12.9095 10.0804 12.223 10.6284 11.3242 11.0156C10.4256 11.4034 9.35968 11.5996 8.12402 11.5996H5.56445V15.0615H1.95508V2.11914H8.12402ZM5.56445 8.94727H7.88672C8.707 8.94727 9.35295 8.77866 9.79883 8.41309C10.248 8.04595 10.4668 7.52231 10.4668 6.86816C10.4667 6.21397 10.2477 5.68924 9.7998 5.31543C9.35396 4.94341 8.70779 4.76953 7.88672 4.76953H5.56445V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M22.8818 2.11914L28.8652 15.0615H25.1299L24.083 12.5801L24.0449 12.4883H18L17.9619 12.5801L16.9141 15.0615H13.2578L19.2217 2.11914H22.8818ZM20.8828 5.58105L19.1055 9.81836L19.0186 10.0264H23.0244L22.9375 9.81836L21.1592 5.58105L21.0215 5.25195L20.8828 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M31.3818 2.11914L34.1318 10.4717L34.2715 10.8945L34.417 10.4736L37.3047 2.11914H40.6846L43.4346 10.5469L43.5742 10.9756L43.7197 10.5488L46.5879 2.11914H50.0049L45.623 15.0615H41.6523L39.0391 7.10547L38.8994 6.68066L38.7549 7.10352L36.0254 15.0615H32.0527L27.6699 2.11914H31.3818Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M57.9287 2.11914C59.1638 2.11914 60.2303 2.3144 61.1289 2.70215C62.0273 3.08924 62.7138 3.64054 63.1963 4.35156C63.6779 5.06138 63.9218 5.89917 63.9219 6.86816C63.9219 7.83714 63.6784 8.67192 63.1973 9.375C62.7142 10.0804 62.0276 10.6284 61.1289 11.0156C60.2303 11.4034 59.1644 11.5996 57.9287 11.5996H55.3691V15.0615H51.7598V2.11914H57.9287ZM55.3691 8.94727H57.6924C58.5127 8.94723 59.1587 8.77874 59.6045 8.41309C60.0536 8.04595 60.2715 7.52227 60.2715 6.86816C60.2714 6.21397 60.0533 5.68925 59.6055 5.31543C59.1597 4.94333 58.5134 4.76957 57.6924 4.76953H55.3691V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M72.6875 2.11914L78.6699 15.0615H74.9346L73.8887 12.5801L73.8496 12.4883H67.8047L67.7656 12.5801L66.7188 15.0615H63.0615L69.0273 2.11914H72.6875ZM70.6885 5.58105L68.9111 9.81836L68.8232 10.0264H72.8301L72.7432 9.81836L70.9658 5.58105L70.8271 5.25195L70.6885 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M81.1865 2.11914L83.9365 10.4717L84.0762 10.8945L84.2217 10.4736L87.1094 2.11914H90.4893L93.2393 10.5469L93.3789 10.9756L93.5244 10.5488L96.3926 2.11914H99.8096L95.4277 15.0615H91.457L88.8438 7.10547L88.7041 6.68066L88.5596 7.10352L85.8301 15.0615H81.8574L77.4746 2.11914H81.1865Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M104.573 2.11914L110.631 9.12305L110.895 9.42773V2.11914H114.426V15.0615H111.425L105.367 8.05664L105.104 7.75195V15.0615H101.572V2.11914H104.573Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M120.589 2.11914V9.19531C120.589 10.2716 120.811 11.107 121.28 11.6748C121.754 12.2479 122.459 12.5234 123.366 12.5234C124.267 12.5234 124.967 12.2473 125.438 11.6738C125.903 11.1061 126.123 10.2712 126.123 9.19531V2.11914H129.675V9.30957C129.675 11.2466 129.115 12.7224 128.014 13.7588C126.91 14.7975 125.355 15.3261 123.327 15.3262C121.299 15.3262 119.743 14.797 118.64 13.7588C117.538 12.7224 116.979 11.2467 116.979 9.30957V2.11914H120.589Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M143.593 2.11914V4.78906H139.366V15.0615H135.756V4.78906H131.51V2.11914H143.593Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' width='146' height='17' viewBox='0 0 146 17' fill='none'>
                <path
                  d='M8.12402 2.11914C9.35905 2.11914 10.425 2.31438 11.3242 2.70215C12.2226 3.08924 12.9091 3.64054 13.3916 4.35156C13.8732 5.06138 14.1171 5.89917 14.1172 6.86816C14.1172 7.83714 13.8737 8.67192 13.3926 9.375C12.9095 10.0804 12.223 10.6284 11.3242 11.0156C10.4256 11.4034 9.35968 11.5996 8.12402 11.5996H5.56445V15.0615H1.95508V2.11914H8.12402ZM5.56445 8.94727H7.88672C8.707 8.94727 9.35295 8.77866 9.79883 8.41309C10.248 8.04595 10.4668 7.52231 10.4668 6.86816C10.4667 6.21397 10.2477 5.68924 9.7998 5.31543C9.35396 4.94341 8.70779 4.76953 7.88672 4.76953H5.56445V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M22.8818 2.11914L28.8652 15.0615H25.1299L24.083 12.5801L24.0449 12.4883H18L17.9619 12.5801L16.9141 15.0615H13.2578L19.2217 2.11914H22.8818ZM20.8828 5.58105L19.1055 9.81836L19.0186 10.0264H23.0244L22.9375 9.81836L21.1592 5.58105L21.0215 5.25195L20.8828 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M31.3818 2.11914L34.1318 10.4717L34.2715 10.8945L34.417 10.4736L37.3047 2.11914H40.6846L43.4346 10.5469L43.5742 10.9756L43.7197 10.5488L46.5879 2.11914H50.0049L45.623 15.0615H41.6523L39.0391 7.10547L38.8994 6.68066L38.7549 7.10352L36.0254 15.0615H32.0527L27.6699 2.11914H31.3818Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M57.9287 2.11914C59.1638 2.11914 60.2303 2.3144 61.1289 2.70215C62.0273 3.08924 62.7138 3.64054 63.1963 4.35156C63.6779 5.06138 63.9218 5.89917 63.9219 6.86816C63.9219 7.83714 63.6784 8.67192 63.1973 9.375C62.7142 10.0804 62.0276 10.6284 61.1289 11.0156C60.2303 11.4034 59.1644 11.5996 57.9287 11.5996H55.3691V15.0615H51.7598V2.11914H57.9287ZM55.3691 8.94727H57.6924C58.5127 8.94723 59.1587 8.77874 59.6045 8.41309C60.0536 8.04595 60.2715 7.52227 60.2715 6.86816C60.2714 6.21397 60.0533 5.68925 59.6055 5.31543C59.1597 4.94333 58.5134 4.76957 57.6924 4.76953H55.3691V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M72.6875 2.11914L78.6699 15.0615H74.9346L73.8887 12.5801L73.8496 12.4883H67.8047L67.7656 12.5801L66.7188 15.0615H63.0615L69.0273 2.11914H72.6875ZM70.6885 5.58105L68.9111 9.81836L68.8232 10.0264H72.8301L72.7432 9.81836L70.9658 5.58105L70.8271 5.25195L70.6885 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M81.1865 2.11914L83.9365 10.4717L84.0762 10.8945L84.2217 10.4736L87.1094 2.11914H90.4893L93.2393 10.5469L93.3789 10.9756L93.5244 10.5488L96.3926 2.11914H99.8096L95.4277 15.0615H91.457L88.8438 7.10547L88.7041 6.68066L88.5596 7.10352L85.8301 15.0615H81.8574L77.4746 2.11914H81.1865Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M104.573 2.11914L110.631 9.12305L110.895 9.42773V2.11914H114.426V15.0615H111.425L105.367 8.05664L105.104 7.75195V15.0615H101.572V2.11914H104.573Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M120.589 2.11914V9.19531C120.589 10.2716 120.811 11.107 121.28 11.6748C121.754 12.2479 122.459 12.5234 123.366 12.5234C124.267 12.5234 124.967 12.2473 125.438 11.6738C125.903 11.1061 126.123 10.2712 126.123 9.19531V2.11914H129.675V9.30957C129.675 11.2466 129.115 12.7224 128.014 13.7588C126.91 14.7975 125.355 15.3261 123.327 15.3262C121.299 15.3262 119.743 14.797 118.64 13.7588C117.538 12.7224 116.979 11.2467 116.979 9.30957V2.11914H120.589Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M143.593 2.11914V4.78906H139.366V15.0615H135.756V4.78906H131.51V2.11914H143.593Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' width='146' height='17' viewBox='0 0 146 17' fill='none'>
                <path
                  d='M8.12402 2.11914C9.35905 2.11914 10.425 2.31438 11.3242 2.70215C12.2226 3.08924 12.9091 3.64054 13.3916 4.35156C13.8732 5.06138 14.1171 5.89917 14.1172 6.86816C14.1172 7.83714 13.8737 8.67192 13.3926 9.375C12.9095 10.0804 12.223 10.6284 11.3242 11.0156C10.4256 11.4034 9.35968 11.5996 8.12402 11.5996H5.56445V15.0615H1.95508V2.11914H8.12402ZM5.56445 8.94727H7.88672C8.707 8.94727 9.35295 8.77866 9.79883 8.41309C10.248 8.04595 10.4668 7.52231 10.4668 6.86816C10.4667 6.21397 10.2477 5.68924 9.7998 5.31543C9.35396 4.94341 8.70779 4.76953 7.88672 4.76953H5.56445V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M22.8818 2.11914L28.8652 15.0615H25.1299L24.083 12.5801L24.0449 12.4883H18L17.9619 12.5801L16.9141 15.0615H13.2578L19.2217 2.11914H22.8818ZM20.8828 5.58105L19.1055 9.81836L19.0186 10.0264H23.0244L22.9375 9.81836L21.1592 5.58105L21.0215 5.25195L20.8828 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M31.3818 2.11914L34.1318 10.4717L34.2715 10.8945L34.417 10.4736L37.3047 2.11914H40.6846L43.4346 10.5469L43.5742 10.9756L43.7197 10.5488L46.5879 2.11914H50.0049L45.623 15.0615H41.6523L39.0391 7.10547L38.8994 6.68066L38.7549 7.10352L36.0254 15.0615H32.0527L27.6699 2.11914H31.3818Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M57.9287 2.11914C59.1638 2.11914 60.2303 2.3144 61.1289 2.70215C62.0273 3.08924 62.7138 3.64054 63.1963 4.35156C63.6779 5.06138 63.9218 5.89917 63.9219 6.86816C63.9219 7.83714 63.6784 8.67192 63.1973 9.375C62.7142 10.0804 62.0276 10.6284 61.1289 11.0156C60.2303 11.4034 59.1644 11.5996 57.9287 11.5996H55.3691V15.0615H51.7598V2.11914H57.9287ZM55.3691 8.94727H57.6924C58.5127 8.94723 59.1587 8.77874 59.6045 8.41309C60.0536 8.04595 60.2715 7.52227 60.2715 6.86816C60.2714 6.21397 60.0533 5.68925 59.6055 5.31543C59.1597 4.94333 58.5134 4.76957 57.6924 4.76953H55.3691V8.94727Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M72.6875 2.11914L78.6699 15.0615H74.9346L73.8887 12.5801L73.8496 12.4883H67.8047L67.7656 12.5801L66.7188 15.0615H63.0615L69.0273 2.11914H72.6875ZM70.6885 5.58105L68.9111 9.81836L68.8232 10.0264H72.8301L72.7432 9.81836L70.9658 5.58105L70.8271 5.25195L70.6885 5.58105Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M81.1865 2.11914L83.9365 10.4717L84.0762 10.8945L84.2217 10.4736L87.1094 2.11914H90.4893L93.2393 10.5469L93.3789 10.9756L93.5244 10.5488L96.3926 2.11914H99.8096L95.4277 15.0615H91.457L88.8438 7.10547L88.7041 6.68066L88.5596 7.10352L85.8301 15.0615H81.8574L77.4746 2.11914H81.1865Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M104.573 2.11914L110.631 9.12305L110.895 9.42773V2.11914H114.426V15.0615H111.425L105.367 8.05664L105.104 7.75195V15.0615H101.572V2.11914H104.573Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M120.589 2.11914V9.19531C120.589 10.2716 120.811 11.107 121.28 11.6748C121.754 12.2479 122.459 12.5234 123.366 12.5234C124.267 12.5234 124.967 12.2473 125.438 11.6738C125.903 11.1061 126.123 10.2712 126.123 9.19531V2.11914H129.675V9.30957C129.675 11.2466 129.115 12.7224 128.014 13.7588C126.91 14.7975 125.355 15.3261 123.327 15.3262C121.299 15.3262 119.743 14.797 118.64 13.7588C117.538 12.7224 116.979 11.2467 116.979 9.30957V2.11914H120.589Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
                <path
                  d='M143.593 2.11914V4.78906H139.366V15.0615H135.756V4.78906H131.51V2.11914H143.593Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='white'
                  strokeWidth='0.3'
                />
              </svg>
            </>
          </InViewWrapper>
        </div>
        <div className='w-[204px] h-[204px] left-[-151px] top-[106px] absolute opacity-30 bg-[#623112]/20 rounded-full blur-[32px]' />
        <InViewWrapper className='w-full h-[228px] left-0 top-[405px] absolute overflow-hidden flex justify-center'>
          <Image
            src={HeroCalendar}
            alt={'포포넛 반려동물 예약 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약을 위한 스마트 캘린더'}
            width={2000}
            height={2000}
            placeholder={'blur'}
            className={'object-cover w-[382.26px] h-[228px] mr-[-10px]'}
            priority
          />
        </InViewWrapper>
        <div className={'top-[322px] absolute flex justify-center w-full'}>
          <button
            className='cursor-pointer px-[15px] py-3 bg-[#623112] rounded-[10px] inline-flex justify-center items-center gap-2.5'
            // onClick={() => handleClickLink('/register')}
          >
            <div className="text-center justify-center text-white text-base font-semibold font-['Pretendard']">
              지금 바로 시작하기
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.56662 1.99932C1.66613 1.91287 1.78904 1.85787 1.9198 1.84125C2.05057 1.82464 2.18332 1.84717 2.30129 1.90598L14.3013 7.90598C14.4122 7.96127 14.5056 8.0464 14.5708 8.1518C14.636 8.2572 14.6706 8.3787 14.6706 8.50265C14.6706 8.6266 14.636 8.7481 14.5708 8.8535C14.5056 8.9589 14.4122 9.04402 14.3013 9.09932L2.30129 15.0993C2.18333 15.1583 2.05052 15.181 1.91965 15.1646C1.78879 15.1481 1.66575 15.0931 1.56612 15.0067C1.46648 14.9203 1.39472 14.8062 1.35992 14.679C1.32513 14.5518 1.32885 14.4171 1.37062 14.292L3.07862 9.16932H6.66995C6.84677 9.16932 7.01633 9.09908 7.14136 8.97405C7.26638 8.84903 7.33662 8.67946 7.33662 8.50265C7.33662 8.32584 7.26638 8.15627 7.14136 8.03124C7.01633 7.90622 6.84677 7.83598 6.66995 7.83598H3.07862L1.36995 2.71332C1.3284 2.58826 1.32483 2.45369 1.35972 2.3266C1.39461 2.19952 1.46704 2.08563 1.56662 1.99932Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </div>

      {/*  PC  */}
      <div
        ref={ref}
        className='w-full min-h-[1252.53px] relative bg-gradient-to-b from-[#fefef9] via-white to-[#faf5e3] overflow-hidden mt-[85px] scrollbar-hidden initial-load-section'
      >
        <motion.div className={'w-full'}>
          <div className='w-[501px] h-[501px] left-[-193px] top-[457px] absolute opacity-30 bg-[#623112]/20 rounded-full blur-[32px]' />
          <div className='w-[654px] h-[654px] left-[1573px] top-[521px] absolute opacity-30 bg-[#ffd6a7]/50 rounded-full blur-[32px]' />
          <div className={'w-full flex justify-center top-[380px] absolute'}>
            <div className='inline-flex flex-col justify-start items-center gap-2.5'>
              <h2 className='self-stretch inline-flex justify-start items-center gap-2.5'>
                <span className="text-center justify-center text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard']">
                  프리미엄 서비스
                </span>
                <span
                  className="text-center justify-center  text-[40px] font-semibold font-['Pretendard']"
                  style={{
                    background: 'linear-gradient(90deg, #61D3FB 0%, #48A0F8 34.77%, #8587F7 65.58%, #D281F8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '40px',
                    fontWeight: 'bold'
                  }}
                >
                  포포넛 AI 에이전트로
                </span>
              </h2>
              <div className='text-center justify-center'>
                <span className="text-[#1d2232]/70 text-[34px] font-medium font-['Pretendard']">기억에 남는 매장</span>
                <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard']">이 되어보세요</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/*  Marquee  */}
        <div className={'top-[775px] absolute w-full'}>
          <InViewWrapper index={2} label='Marquee' className={'relative w-full'}>
            <div className={'flex'}>
              <Image
                src={'/assets/landing/pawpawnutBrownOutlinedText.png'}
                alt={'pawpawnut'}
                width={1133}
                height={138}
              />
              <Image
                src={'/assets/landing/pawpawnutBrownOutlinedText.png'}
                alt={'pawpawnut'}
                width={1133}
                height={138}
              />
              <Image
                src={'/assets/landing/pawpawnutBrownOutlinedText.png'}
                alt={'pawpawnut'}
                width={1133}
                height={138}
              />
            </div>
          </InViewWrapper>
        </div>
        <div className='w-full h-[190px] left-0 top-[890px] absolute'>
          <div className='w-full h-[190px] left-0 top-0 absolute bg-[#72462a]' />
          <InViewWrapper index={2} label='Marquee' className='h-[133px] top-[29px] absolute flex left-[-340px]'>
            <Image src={'/assets/landing/pawpawnutWhiteOutlinedText.png'} alt={'pawpawnut'} width={1133} height={138} />
            <Image src={'/assets/landing/pawpawnutWhiteOutlinedText.png'} alt={'pawpawnut'} width={1133} height={138} />
            <Image src={'/assets/landing/pawpawnutWhiteOutlinedText.png'} alt={'pawpawnut'} width={1133} height={138} />
          </InViewWrapper>
        </div>

        {/*  추후 실제 캘린더 컴포넌트로 교체  */}
        <div
          // label='Calendar'
          className={'top-[499.53px] absolute w-full flex justify-center z-[2] pl-6'}
          style={{
            scale: isTablet ? 0.8 : 1,
            transformOrigin: 'bottom center'
          }}
        >
          <Image
            src={HeroCalendar}
            alt={'포포넛 반려동물 예약 시스템 - 강아지 미용 예약, 애견호텔 예약, 강아지유치원 예약을 위한 스마트 캘린더'}
            width={2000}
            height={2000}
            // placeholder={'blur'}
            className={'object-cover w-[976px] h-[582px]'}
            priority
          />
        </div>

        <div className={'top-[1118.53px] absolute flex justify-center w-full'}>
          <button
            className='cursor-pointer px-10 py-6 bg-[#623112] rounded-[20px] inline-flex justify-center items-center gap-2.5'
            // onClick={() => handleClickLink('/register')}
          >
            <div className="text-center justify-center text-white text-3xl font-semibold font-['Pretendard']">
              지금 바로 시작하기
            </div>
            <div className='w-[30px] h-[30px] relative overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.930578 0.341002C1.11716 0.178918 1.34761 0.0757842 1.59279 0.0446357C1.83798 0.0134871 2.08689 0.0557218 2.30808 0.166002L24.8081 11.416C25.0161 11.5197 25.1911 11.6793 25.3134 11.8769C25.4357 12.0745 25.5005 12.3023 25.5005 12.5348C25.5005 12.7672 25.4357 12.995 25.3134 13.1926C25.1911 13.3902 25.0161 13.5498 24.8081 13.6535L2.30808 24.9035C2.08691 25.0142 1.83788 25.0567 1.59251 25.0258C1.34714 24.9949 1.11645 24.8919 0.929632 24.7299C0.742817 24.5678 0.608272 24.354 0.543023 24.1154C0.477774 23.8769 0.484753 23.6243 0.563078 23.3898L3.76558 13.7848H10.4993C10.8308 13.7848 11.1488 13.6531 11.3832 13.4186C11.6176 13.1842 11.7493 12.8663 11.7493 12.5348C11.7493 12.2032 11.6176 11.8853 11.3832 11.6509C11.1488 11.4164 10.8308 11.2848 10.4993 11.2848H3.76558L0.561828 1.67975C0.483907 1.44527 0.477229 1.19295 0.542639 0.954668C0.608049 0.716389 0.743861 0.502842 0.930578 0.341002Z'
                  fill='white'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
})

export default Hero
