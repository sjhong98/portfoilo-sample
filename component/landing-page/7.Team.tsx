'use client'

import Image from 'next/image'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import Profile0 from '../../public/assets/landing/dummyIcon.png'
import Profile1 from '../../public/assets/landing/dummyIcon.png'
import Profile2 from '../../public/assets/landing/dummyIcon.png'
import Profile3 from '../../public/assets/landing/dummyIcon.png'
import Profile4 from '../../public/assets/landing/dummyIcon.png'
import Profile5 from '../../public/assets/landing/dummyIcon.png'
import Profile6 from '../../public/assets/landing/dummyIcon.png'
import Profile7 from '../../public/assets/landing/dummyIcon.png'
import Profile8 from '../../public/assets/landing/dummyIcon.png'
import Profile9 from '../../public/assets/landing/dummyIcon.png'
import InViewWrapper from './InViewWrapper'

const Team = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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
      id={'team'}
      className='w-full px-8 py-20 bg-[#1d2232] inline-flex flex-col justify-start items-center gap-10 overflow-hidden'
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-start items-center gap-5'
      >
        <div className='flex flex-col justify-start items-center gap-5'>
          <div className='px-[15px] py-2 bg-gradient-to-r from-[#415cc8] to-[#c0c8e8] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#6583fb] inline-flex justify-center items-center gap-[5px] overflow-hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <g clipPath='url(#clip0_1240_5001)'>
                <path
                  d='M9.64068 11.647L8.10735 10.1137C8.02519 10.0341 7.95987 9.93884 7.91526 9.83353C7.87065 9.72823 7.84766 9.61503 7.84766 9.50066C7.84766 9.3863 7.87065 9.2731 7.91526 9.16779C7.95987 9.06249 8.02519 8.96722 8.10735 8.88766L10.374 7.09433C10.5417 6.94189 10.7601 6.85742 10.9867 6.85742C11.2133 6.85742 11.4317 6.94189 11.5993 7.09433L12.9327 8.42766C13.3139 8.80855 13.601 9.27307 13.7713 9.78433L14.124 10.845L15.5033 12.2237'
                  stroke='#F9F1EA'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.6 10.6L8.31067 10.8887C8.186 11.0133 8.08728 11.1614 8.02021 11.3244C7.95314 11.4874 7.91905 11.662 7.91992 11.8383C7.92079 12.0145 7.95659 12.1889 8.02526 12.3512C8.09394 12.5135 8.19411 12.6606 8.32 12.784L8.904 13.356L10.87 14.096L12.2487 15.4747M6.35933 4.35268L7.89267 5.88601C7.97482 5.96557 8.04015 6.06084 8.08476 6.16614C8.12937 6.27145 8.15236 6.38464 8.15236 6.49901C8.15236 6.61338 8.12937 6.72657 8.08476 6.83188C8.04015 6.93719 7.97482 7.03245 7.89267 7.11201L5.626 8.90534C5.45836 9.05778 5.23992 9.14225 5.01333 9.14225C4.78675 9.14225 4.5683 9.05778 4.40067 8.90534L3.06733 7.57201C2.68751 7.19115 2.40153 6.72714 2.232 6.21668L1.87933 5.15601L0.5 3.77734'
                  stroke='#F9F1EA'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.40333 5.39979L7.69267 5.11113C7.81733 4.98653 7.91605 4.83844 7.98312 4.67545C8.0502 4.51245 8.08428 4.33777 8.08341 4.16151C8.08255 3.98526 8.04674 3.81092 7.97807 3.64859C7.9094 3.48626 7.80922 3.33916 7.68333 3.21579L7.09933 2.64379L5.13333 1.90113L3.75467 0.522461M12.3333 3.02246L13.3333 2.02246M10.3333 2.02246V0.689128M13.3333 5.02246H14.6667M3.33333 12.0225L2.33333 13.0225M5.33333 13.0225V14.3558M2.33333 10.0225H1'
                  stroke='#F9F1EA'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_1240_5001'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <p className="text-center justify-center text-[#f9f1ea] text-[13px] font-semibold font-['Pretendard']">
              최고의 실력과 팀워크
            </p>
          </div>
          <p
            className="text-center justify-center text-[#415cc8] text-[26px] font-bold font-['Pretendard'] whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #415CC9 0%, #C1C9E8 6.73%, #8395DD 16.35%, #C1C9E8 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text'
            }}
          >
            공감을 기술로 만드는 포포넛 팀
          </p>
        </div>
        <div className='inline-flex justify-center items-center gap-2.5'>
          <p className='w-[291px] text-center justify-center' style={{ lineHeight: '22px', letterSpacing: '0.16px' }}>
            <span className="text-white/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              포포넛 팀의{' '}
            </span>
            <span className="text-white/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              절반은
              <br /> 실무 경험이 있는 개발자
            </span>
            <span className="text-white/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              입니다
              <br />
              공감에서 출발한 설계는
              <br /> 전문가의 기술로 구현됩니다
            </span>
          </p>
        </div>
      </motion.div>
      <div className={'w-full flex justify-center'}>
        <svg xmlns='http://www.w3.org/2000/svg' width='236' height='34' viewBox='0 0 236 34' fill='none'>
          <path
            d='M23.1745 1.50043C25.3857 2.49973 27.0919 3.92921 28.2929 5.7859C29.4939 7.64259 30.0944 9.82746 30.0944 12.3331C30.0944 14.8388 29.4939 17.0162 28.2929 18.8567C27.0904 20.6986 25.3857 22.1192 23.1745 23.1185C20.9633 24.1193 18.3557 24.6189 15.3531 24.6189L9.57113 24.6189L9.57113 33.3332H0.1875L0.1875 0L15.3531 0C18.3542 0 20.9619 0.499651 23.1745 1.50043ZM19.1442 15.9282C20.1235 15.0886 20.6139 13.8882 20.6139 12.3331C20.6139 10.778 20.1235 9.57172 19.1442 8.71433C18.1648 7.85694 16.7113 7.42825 14.7834 7.42825L9.56966 7.42825L9.56966 17.1892L14.7834 17.1892C16.7113 17.1892 18.1648 16.7708 19.1442 15.9282Z'
            fill='url(#paint0_linear_1240_5011)'
          />
          <path
            d='M15.3535 0.5C18.1156 0.50004 20.5157 0.931001 22.5635 1.78027L22.9688 1.95605C25.1011 2.91973 26.7291 4.28921 27.873 6.05762C29.0149 7.82282 29.5947 9.91044 29.5947 12.333C29.5947 14.7557 29.0147 16.835 27.874 18.583C26.7288 20.3372 25.1022 21.6989 22.9687 22.6631C20.836 23.6284 18.3014 24.1191 15.3535 24.1191L9.07129 24.1191L9.07129 32.833H0.6875L0.6875 0.5L15.3535 0.5ZM9.06934 17.6895L14.7832 17.6895C16.7728 17.6895 18.3638 17.2582 19.4697 16.3066C20.5822 15.3525 21.1143 14.0007 21.1143 12.333C21.1142 10.6643 20.5824 9.30862 19.4736 8.33789C18.368 7.36993 16.7754 6.92871 14.7832 6.92871L9.06934 6.92871L9.06934 17.6895Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M53.3153 26.857H39.2876L36.68 33.3332H27.1055L41.7499 0L50.9925 0L65.6854 33.3332H55.9215L53.3153 26.857ZM50.5653 19.9047L46.2985 9.23911L42.0332 19.9047H50.5653Z'
            fill='url(#paint1_linear_1240_5011)'
          />
          <path
            d='M50.666 0.5L64.918 32.833H56.2598L53.7793 26.6699L53.6533 26.3574H38.9502L38.8242 26.6699L36.3418 32.833H27.8711L42.0771 0.5L50.666 0.5ZM45.834 9.05371L41.5693 19.7188L41.2949 20.4043H51.3037L51.0293 19.7188L46.7627 9.05371L46.2988 7.89258L45.834 9.05371Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M116.357 0L105.598 33.3332H95.5488L89.1971 13.0471L82.5621 33.3332H72.5148L61.7539 0L71.4224 0L78.1059 21.2854L85.1212 0L93.7472 0L100.431 21.4761L107.398 0L116.357 0Z'
            fill='url(#paint2_linear_1240_5011)'
          />
          <path
            d='M71.0557 0.5L77.6289 21.4355L78.0947 22.918L78.5811 21.4424L85.4824 0.5L93.3789 0.5L99.9531 21.625L100.421 23.127L100.906 21.6309L107.761 0.5L115.67 0.5L105.234 32.833H95.917L89.6738 12.8975L89.207 11.4072L88.7217 12.8916L82.1992 32.833H72.8779L62.4404 0.5L71.0557 0.5Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M142.706 1.50043C144.917 2.49973 146.623 3.92921 147.824 5.7859C149.025 7.64259 149.626 9.82746 149.626 12.3331C149.626 14.8388 149.025 17.0162 147.824 18.8567C146.622 20.6986 144.917 22.1192 142.706 23.1185C140.495 24.1193 137.887 24.6189 134.884 24.6189L129.102 24.6189V33.3332H119.719V0L134.884 0C137.886 0 140.495 0.499651 142.706 1.50043ZM138.677 15.9282C139.656 15.0886 140.147 13.8882 140.147 12.3331C140.147 10.778 139.656 9.57172 138.677 8.71433C137.698 7.85694 136.244 7.42825 134.316 7.42825L129.102 7.42825V17.1892L134.316 17.1892C136.244 17.1892 137.698 16.7708 138.677 15.9282Z'
            fill='url(#paint3_linear_1240_5011)'
          />
          <path
            d='M134.885 0.5C137.647 0.50004 140.048 0.931093 142.095 1.78027L142.5 1.95605C144.632 2.91973 146.26 4.28921 147.404 6.05762C148.546 7.82282 149.126 9.91044 149.126 12.333C149.126 14.7557 148.546 16.835 147.405 18.583C146.26 20.3372 144.633 21.6989 142.5 22.6631C140.367 23.6284 137.833 24.1191 134.885 24.1191L128.603 24.1191V32.833H120.219V0.5L134.885 0.5ZM128.603 17.6895L134.316 17.6895C136.306 17.6894 137.897 17.259 139.003 16.3076L139.002 16.3066C140.115 15.3524 140.646 14.0009 140.646 12.333C140.646 10.6643 140.115 9.30862 139.006 8.33789C137.9 7.37014 136.308 6.92875 134.316 6.92871L128.603 6.92871V17.6895Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M172.848 26.857H158.817L156.211 33.3332H146.637L161.283 0L170.525 0L185.217 33.3332H175.453L172.848 26.857ZM170.098 19.9047L165.833 9.23911L161.566 19.9047H170.098Z'
            fill='url(#paint4_linear_1240_5011)'
          />
          <path
            d='M170.199 0.5L184.449 32.833H175.791L173.312 26.6709L173.186 26.3574H158.479L158.354 26.6699L155.873 32.833H147.402L161.609 0.5L170.199 0.5ZM165.368 9.05371L161.102 19.7188L160.827 20.4043H170.837L170.562 19.7188L166.297 9.05371L165.833 7.89258L165.368 9.05371Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M235.888 0L225.129 33.3332H215.08L208.728 13.0471L202.093 33.3332H192.046L181.285 0L190.954 0L197.637 21.2854L204.652 0L213.278 0L219.962 21.4761L226.929 0L235.888 0Z'
            fill='url(#paint5_linear_1240_5011)'
          />
          <path
            d='M190.587 0.5L197.16 21.4355L197.626 22.918L198.112 21.4424L205.014 0.5L212.91 0.5L219.484 21.625L219.952 23.127L220.438 21.6309L227.292 0.5L235.201 0.5L224.766 32.833H215.448L209.205 12.8975L208.738 11.4072L208.253 12.8916L201.73 32.833H192.409L181.972 0.5L190.587 0.5Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1240_5011'
              x1='15.4969'
              y1='-2.82553'
              x2='15.4969'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1240_5011'
              x1='46.8545'
              y1='-2.82553'
              x2='46.8545'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1240_5011'
              x1='89.7052'
              y1='-2.82553'
              x2='89.7052'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_1240_5011'
              x1='135.028'
              y1='-2.82553'
              x2='135.028'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_1240_5011'
              x1='166.386'
              y1='-2.82553'
              x2='166.386'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint5_linear_1240_5011'
              x1='209.236'
              y1='-2.82553'
              x2='209.236'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='102' height='34' viewBox='0 0 102 34' fill='none'>
          <path
            d='M31.8097 0L31.8097 33.3332H24.0838L9.43788 15.572L9.43788 33.3332H0.242187L0.242188 0L7.96815 0L22.614 17.7613L22.614 0L31.8097 0Z'
            fill='url(#paint0_linear_1240_5018)'
          />
          <path
            d='M7.73145 0.5L22.2285 18.0791L23.1143 19.1533L23.1143 0.5L31.3096 0.5L31.3096 32.833H24.3193L9.82324 15.2539L8.9375 14.1797L8.9375 32.833H0.742187L0.742188 0.5L7.73145 0.5Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M41.3196 29.9525C38.5857 27.2546 37.2187 23.4289 37.2188 18.4767V0L46.6038 0V18.19C46.6038 23.5235 48.7049 26.1903 52.9086 26.1903C57.0799 26.1903 59.1648 23.5235 59.1648 18.19V0L68.4075 0V18.4767C68.4075 23.4289 67.0405 27.2546 64.3081 29.9525C61.5742 32.6518 57.7435 33.9999 52.8146 33.9999C47.8856 33.9999 44.052 32.6503 41.3196 29.9525Z'
            fill='url(#paint1_linear_1240_5018)'
          />
          <path
            d='M46.1035 0.5V18.1904C46.1036 20.9091 46.6372 23.0407 47.7871 24.5C48.955 25.9819 50.6937 26.6904 52.9082 26.6904C55.1082 26.6904 56.8358 25.9807 57.9951 24.498C59.1359 23.0389 59.665 20.9083 59.665 18.1904V0.5L67.9072 0.5V18.4766C67.9072 23.3355 66.5688 27.0179 63.957 29.5967C61.3412 32.1794 57.6509 33.5 52.8145 33.5C47.9781 33.5 44.2852 32.1779 41.6709 29.5967C39.0577 27.0179 37.7187 23.3355 37.7188 18.4766V0.5L46.1035 0.5Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <path
            d='M82.2835 7.47703L72.0938 7.47703V0L101.811 0V7.47555L91.6686 7.47555V33.3332H82.2835V7.47703Z'
            fill='url(#paint2_linear_1240_5018)'
          />
          <path
            d='M101.312 0.5V6.97559L91.1689 6.97559V32.833H82.7832V6.97656L72.5938 6.97656V0.5L101.312 0.5Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1240_5018'
              x1='16.4016'
              y1='-2.82553'
              x2='16.4016'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1240_5018'
              x1='53.1843'
              y1='-2.88204'
              x2='53.1843'
              y2='28.6216'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1240_5018'
              x1='87.3062'
              y1='-2.82553'
              x2='87.3062'
              y2='28.0604'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='flex flex-col justify-start items-start gap-[15px]'>
        <div className='inline-flex justify-center items-start gap-[15px]'>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile0}
              alt={'라태웅'}
              placeholder='blur'
            />
          </div>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile1}
              alt={'채승엽'}
              placeholder='blur'
            />
          </div>
        </div>
        <div className='inline-flex justify-center items-start gap-[15px]'>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile2}
              alt={'윤호준'}
              placeholder='blur'
            />
          </div>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile3}
              alt={'서준형'}
              placeholder='blur'
            />
          </div>
        </div>
        <div className='inline-flex justify-center items-start gap-[15px]'>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile4}
              alt={'이은지'}
              placeholder='blur'
            />
          </div>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile5}
              alt={'강두원'}
              placeholder='blur'
            />
          </div>
        </div>
        <div className='inline-flex justify-center items-start gap-[15px]'>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile6}
              alt={'홍승재'}
              placeholder='blur'
            />
          </div>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile7}
              alt={'라연수'}
              placeholder='blur'
            />
          </div>
        </div>
        <div className='self-stretch inline-flex justify-center items-start gap-[15px]'>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile8}
              alt={'이가원'}
              placeholder='blur'
            />
          </div>
          <div className='w-[155px] h-[205px] relative bg-[#e6edff] rounded-3xl overflow-hidden'>
            <Image
              className='w-[165px] h-[225px] top-[-10px] left-[-5px] absolute object-cover scale-[0.95]'
              width={500}
              height={500}
              src={Profile9}
              alt={'주희선'}
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section
      ref={ref}
      id={'team'}
      className='w-full pb-[0px] bg-[#1d2232] inline-flex flex-col items-center gap-[90px] overflow-hidden relative'
      style={{
        height: isTablet ? '2619px' : '2919px'
      }}
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-start items-center gap-5 flex-shrink-0 scale-[0.8] pt-[90px]'
      >
        <div className='flex flex-col justify-start items-center gap-10'>
          <div className='px-9 py-4 bg-gradient-to-r from-[#415cc8] to-[#c0c8e8] rounded-[100px] outline outline-2 outline-offset-[-2px] outline-[#6583fb] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
            <InViewWrapper className='w-6 h-6 relative overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                <g clipPath='url(#clip0_1192_4987)'>
                  <path
                    d='M15.1817 17.5066L12.8817 15.2066C12.7585 15.0873 12.6605 14.9444 12.5936 14.7864C12.5267 14.6285 12.4922 14.4587 12.4922 14.2871C12.4922 14.1156 12.5267 13.9458 12.5936 13.7878C12.6605 13.6299 12.7585 13.487 12.8817 13.3676L16.2817 10.6776C16.5332 10.449 16.8609 10.3223 17.2007 10.3223C17.5406 10.3223 17.8683 10.449 18.1197 10.6776L20.1197 12.6776C20.6915 13.249 21.1223 13.9457 21.3777 14.7126L21.9067 16.3036L23.9757 18.3716'
                    stroke='#F9F1EA'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13.6207 15.9352L13.1867 16.3682C12.9997 16.5551 12.8516 16.7772 12.751 17.0217C12.6504 17.2662 12.5993 17.5282 12.6006 17.7926C12.6019 18.057 12.6556 18.3185 12.7586 18.562C12.8616 18.8055 13.0119 19.0261 13.2007 19.2112L14.0767 20.0692L17.0257 21.1792L19.0937 23.2472M10.2597 6.56417L12.5597 8.86417C12.6829 8.98351 12.7809 9.12641 12.8478 9.28437C12.9148 9.44233 12.9492 9.61212 12.9492 9.78367C12.9492 9.95522 12.9148 10.125 12.8478 10.283C12.7809 10.4409 12.6829 10.5838 12.5597 10.7032L9.1597 13.3932C8.90825 13.6218 8.58058 13.7485 8.2407 13.7485C7.90083 13.7485 7.57316 13.6218 7.3217 13.3932L5.3217 11.3932C4.75197 10.8219 4.323 10.1259 4.0687 9.36017L3.5397 7.76917L1.4707 5.70117'
                    stroke='#F9F1EA'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.8257 8.13534L12.2597 7.70234C12.4467 7.51543 12.5948 7.29331 12.6954 7.04881C12.796 6.80432 12.8471 6.5423 12.8458 6.27792C12.8445 6.01353 12.7908 5.75203 12.6878 5.50854C12.5848 5.26504 12.4345 5.04439 12.2457 4.85934L11.3697 4.00134L8.4207 2.88734L6.3527 0.819336M19.2207 4.56934L20.7207 3.06934M16.2207 3.06934V1.06934M20.7207 7.56934H22.7207M5.7207 18.0693L4.2207 19.5693M8.7207 19.5693V21.5693M4.2207 15.0693H2.2207'
                    stroke='#F9F1EA'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1192_4987'>
                    <rect width='24' height='24' fill='white' transform='translate(0.720703 0.0351562)' />
                  </clipPath>
                </defs>
              </svg>
            </InViewWrapper>
            <p className="text-center justify-center text-[#f9f1ea] text-2xl font-semibold font-['Pretendard']">
              최고의 실력과 팀워크
            </p>
          </div>
          <div className='flex flex-col justify-start items-center gap-2.5'>
            <p
              className="text-center justify-center text-[#415cc8] text-[70px] font-bold font-['Pretendard']"
              style={{
                background: 'linear-gradient(90deg, #415CC9 0%, #C1C9E8 6.73%, #8395DD 16.35%, #C1C9E8 100%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text'
              }}
            >
              공감을 기술로 만드는 포포넛 팀
            </p>
          </div>
        </div>
        <p className='text-center justify-center'>
          <span className="text-white/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            포포넛 팀의{' '}
          </span>
          <span className="text-white/70 text-[34px] font-bold font-['Pretendard'] leading-[45px] tracking-tight">
            절반은 실무 경험이 있는 개발자
          </span>
          <span className="text-white/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            입니다
            <br />
            공감에서 출발한 설계는 전문가의 기술로 구현됩니다
          </span>
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        className='w-[1150px] inline-flex justify-center items-start gap-[30px] flex-wrap content-start relative mt-[-100px]'
        style={{
          scale: isTablet ? 0.8 : 0.9,
          top: isTablet ? '-130px' : '0px'
        }}
      >
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile0}
            alt={'라태웅'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile1}
            alt={'채승엽'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile2}
            alt={'윤호준'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile3}
            alt={'서준형'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile4}
            alt={'이은지'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile5}
            alt={'강두원'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile6}
            alt={'홍승재'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile7}
            alt={'라연수'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile8}
            alt={'이가원'}
            placeholder='blur'
          />
        </InViewWrapper>
        <InViewWrapper className='w-[360px] h-[495px] relative bg-[#f9f1ea] rounded-[40px] overflow-hidden'>
          <Image
            className='w-[400px] h-[560px] top-[-35px] left-[-20px] absolute object-cover scale-[0.9]'
            width={400}
            height={495}
            src={Profile9}
            alt={'주희선'}
            placeholder='blur'
          />
        </InViewWrapper>
      </motion.div>
      <InViewWrapper label={'team'} className={'flex gap-3 relative'} style={{ top: isTablet ? '-310px' : '', scale: isTablet ? 0.8 : 0.8 }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='110'
          height='123'
          viewBox='0 0 110 123'
          fill='none'
          className={'mr-[-25px]'}
        >
          <path
            d='M83.9784 6.01669C92.0566 9.66744 98.2895 14.8897 102.677 21.6728C107.065 28.4559 109.259 36.4378 109.259 45.5917C109.259 54.7456 107.065 62.7006 102.677 69.4242C98.2842 76.1533 92.0566 81.3432 83.9784 84.994C75.9003 88.6501 66.3739 90.4755 55.4045 90.4755L34.2812 90.4755L34.2812 122.312H0L0 0.535156L55.4045 0.535156C66.3685 0.535156 75.8949 2.36053 83.9784 6.01669ZM69.2543 58.7258C72.8321 55.6583 74.6237 51.2731 74.6237 45.5917C74.6237 39.9104 72.8321 35.5036 69.2543 32.3712C65.6765 29.2389 60.3662 27.6728 53.3233 27.6728H34.2758V63.3325H53.3233C60.3662 63.3325 65.6765 61.8041 69.2543 58.7258Z'
            fill='url(#paint0_linear_1192_5019)'
          />
          <path
            d='M55.4043 1.03516C65.9726 1.03516 75.1748 2.73939 83.0176 6.1377L83.7725 6.47266C91.7718 10.0878 97.9272 15.2496 102.258 21.9443C106.586 28.6359 108.759 36.521 108.759 45.5918C108.759 54.6628 106.586 62.5201 102.259 69.1514C98.0585 75.585 92.1557 80.601 84.5176 84.1953L83.7725 84.5381C75.7726 88.1588 66.3191 89.9756 55.4043 89.9756L33.7812 89.9756L33.7812 121.812H0.5L0.5 1.03516L55.4043 1.03516ZM33.7754 63.832H53.3232C60.4276 63.832 65.8747 62.2914 69.5791 59.1045L69.5801 59.1055C73.2914 55.9234 75.124 51.386 75.124 45.5918C75.124 39.797 73.2911 35.2408 69.584 31.9951C65.8799 28.7522 60.4305 27.1729 53.3232 27.1729H33.7754V63.832Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5019'
              x1='55.9297'
              y1='-9.78735'
              x2='55.9296'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='142'
          height='123'
          viewBox='0 0 142 123'
          fill='none'
          className={'mr-[-25px]'}
        >
          <path
            d='M96.1 98.6519H44.8526L35.3262 122.312H0.347656L53.848 0.535156L87.6142 0.535156L141.292 122.312L105.621 122.312L96.1 98.6519ZM86.0533 73.2532L70.4656 34.2884L54.8832 73.2532H86.0533Z'
            fill='url(#paint0_linear_1192_5020)'
          />
          <path
            d='M87.2871 1.03516L140.524 121.812L105.959 121.812L96.5635 98.4648L96.4375 98.1523L44.5146 98.1523L44.3887 98.4648L34.9883 121.812H1.11328L54.1748 1.03516L87.2871 1.03516ZM70.001 34.1025L54.4189 73.0674L54.1445 73.7529H86.792L86.5176 73.0674L70.9297 34.1025L70.4658 32.9424L70.001 34.1025Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5020'
              x1='72.4969'
              y1='-9.78735'
              x2='72.4969'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='201' height='123' viewBox='0 0 201 123' fill='none'>
          <path
            d='M200.397 0.535156L161.09 122.312L124.379 122.312L101.174 48.2002L76.9343 122.312L40.2286 122.312L0.916016 0.535156L36.2378 0.535156L60.6546 78.2973L86.2837 0.535156L117.797 0.535156L142.214 78.994L167.666 0.535156L200.397 0.535156Z'
            fill='url(#paint0_linear_1192_5021)'
          />
          <path
            d='M35.8711 1.03516L60.1777 78.4473L60.6436 79.9297L61.1299 78.4541L86.6455 1.03516L117.429 1.03516L141.736 79.1426L142.204 80.6445L142.689 79.1484L168.029 1.03516L199.71 1.03516L160.727 121.812L124.746 121.812L101.651 48.0508L101.185 46.5596L100.699 48.0449L76.5713 121.812L40.5918 121.812L1.60254 1.03516L35.8711 1.03516Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5021'
              x1='103.03'
              y1='-9.78735'
              x2='103.03'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='110'
          height='123'
          viewBox='0 0 110 123'
          fill='none'
          className={'mr-[-25px]'}
        >
          <path
            d='M83.9784 6.01669C92.0566 9.66744 98.2895 14.8897 102.677 21.6728C107.065 28.4559 109.259 36.4378 109.259 45.5917C109.259 54.7456 107.065 62.7006 102.677 69.4242C98.2842 76.1533 92.0566 81.3432 83.9784 84.994C75.9003 88.6501 66.3739 90.4755 55.4045 90.4755L34.2812 90.4755L34.2812 122.312H0L0 0.535156L55.4045 0.535156C66.3685 0.535156 75.8949 2.36053 83.9784 6.01669ZM69.2543 58.7258C72.8321 55.6583 74.6237 51.2731 74.6237 45.5917C74.6237 39.9104 72.8321 35.5036 69.2543 32.3712C65.6765 29.2389 60.3662 27.6728 53.3233 27.6728H34.2758V63.3325H53.3233C60.3662 63.3325 65.6765 61.8041 69.2543 58.7258Z'
            fill='url(#paint0_linear_1192_5019)'
          />
          <path
            d='M55.4043 1.03516C65.9726 1.03516 75.1748 2.73939 83.0176 6.1377L83.7725 6.47266C91.7718 10.0878 97.9272 15.2496 102.258 21.9443C106.586 28.6359 108.759 36.521 108.759 45.5918C108.759 54.6628 106.586 62.5201 102.259 69.1514C98.0585 75.585 92.1557 80.601 84.5176 84.1953L83.7725 84.5381C75.7726 88.1588 66.3191 89.9756 55.4043 89.9756L33.7812 89.9756L33.7812 121.812H0.5L0.5 1.03516L55.4043 1.03516ZM33.7754 63.832H53.3232C60.4276 63.832 65.8747 62.2914 69.5791 59.1045L69.5801 59.1055C73.2914 55.9234 75.124 51.386 75.124 45.5918C75.124 39.797 73.2911 35.2408 69.584 31.9951C65.8799 28.7522 60.4305 27.1729 53.3232 27.1729H33.7754V63.832Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5019'
              x1='55.9297'
              y1='-9.78735'
              x2='55.9296'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='142'
          height='123'
          viewBox='0 0 142 123'
          fill='none'
          className={'mr-[-25px]'}
        >
          <path
            d='M96.1 98.6519H44.8526L35.3262 122.312H0.347656L53.848 0.535156L87.6142 0.535156L141.292 122.312L105.621 122.312L96.1 98.6519ZM86.0533 73.2532L70.4656 34.2884L54.8832 73.2532H86.0533Z'
            fill='url(#paint0_linear_1192_5020)'
          />
          <path
            d='M87.2871 1.03516L140.524 121.812L105.959 121.812L96.5635 98.4648L96.4375 98.1523L44.5146 98.1523L44.3887 98.4648L34.9883 121.812H1.11328L54.1748 1.03516L87.2871 1.03516ZM70.001 34.1025L54.4189 73.0674L54.1445 73.7529H86.792L86.5176 73.0674L70.9297 34.1025L70.4658 32.9424L70.001 34.1025Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5020'
              x1='72.4969'
              y1='-9.78735'
              x2='72.4969'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='201' height='123' viewBox='0 0 201 123' fill='none'>
          <path
            d='M200.397 0.535156L161.09 122.312L124.379 122.312L101.174 48.2002L76.9343 122.312L40.2286 122.312L0.916016 0.535156L36.2378 0.535156L60.6546 78.2973L86.2837 0.535156L117.797 0.535156L142.214 78.994L167.666 0.535156L200.397 0.535156Z'
            fill='url(#paint0_linear_1192_5021)'
          />
          <path
            d='M35.8711 1.03516L60.1777 78.4473L60.6436 79.9297L61.1299 78.4541L86.6455 1.03516L117.429 1.03516L141.736 79.1426L142.204 80.6445L142.689 79.1484L168.029 1.03516L199.71 1.03516L160.727 121.812L124.746 121.812L101.651 48.0508L101.185 46.5596L100.699 48.0449L76.5713 121.812L40.5918 121.812L1.60254 1.03516L35.8711 1.03516Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5021'
              x1='103.03'
              y1='-9.78735'
              x2='103.03'
              y2='103.048'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='116' height='123' viewBox='0 0 116 123' fill='none'>
          <path
            d='M115.701 0.536133L115.701 122.313H87.4753L33.9696 57.4253L33.9696 122.313H0.375L0.375 0.536133L28.6002 0.536133L82.1059 65.4234L82.1059 0.536133L115.701 0.536133Z'
            fill='url(#paint0_linear_1192_5026)'
          />
          <path
            d='M28.3643 1.03613L81.7197 65.7412L82.6055 66.8154L82.6055 1.03613L115.2 1.03613L115.2 121.813H87.7119L34.3555 57.1074L33.4697 56.0332L33.4697 121.812H0.875L0.875 1.03613L28.3643 1.03613Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5026'
              x1='59.4102'
              y1='-9.78637'
              x2='59.4102'
              y2='103.049'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='115' height='125' viewBox='0 0 115 125' fill='none'>
          <path
            d='M15.4152 109.962C5.42745 100.106 0.433594 86.129 0.433594 68.0373L0.433594 0.536133L34.7201 0.536133L34.7201 66.9896C34.7201 86.4747 42.396 96.2172 57.7531 96.2172C72.9921 96.2172 80.6089 86.4747 80.6089 66.9896L80.6089 0.536133L114.375 0.536133L114.375 68.0373C114.375 86.129 109.381 100.106 99.399 109.962C89.4112 119.823 75.4166 124.748 57.4097 124.748C39.4029 124.748 25.3975 119.818 15.4152 109.962Z'
            fill='url(#paint0_linear_1192_5027)'
          />
          <path
            d='M34.2197 1.03613L34.2197 66.9893C34.2197 76.7839 36.1471 84.2224 40.085 89.2197C44.0407 94.2397 49.9615 96.7168 57.7529 96.7168C65.4865 96.7168 71.3633 94.2389 75.2891 89.2188C79.1965 84.2216 81.1094 76.7832 81.1094 66.9893L81.1094 1.03613L113.875 1.03613L113.875 68.0371C113.875 86.0355 108.91 99.8686 99.0479 109.605C89.1783 119.35 75.3243 124.248 57.4102 124.248C39.7756 124.248 26.0647 119.497 16.2314 110.059L15.7666 109.605L15.3076 109.146C5.74536 99.4357 0.933594 85.7546 0.933594 68.0371L0.933594 1.03613L34.2197 1.03613Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5027'
              x1='58.7604'
              y1='-9.99283'
              x2='58.7604'
              y2='105.1'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='110' height='123' viewBox='0 0 110 123' fill='none'>
          <path
            d='M38.101 27.852L0.875 27.852L0.875 0.536133L109.442 0.536133V27.8466L72.3876 27.8466L72.3876 122.313L38.101 122.313L38.101 27.852Z'
            fill='url(#paint0_linear_1192_5028)'
          />
          <path
            d='M108.941 1.03613V27.3467L71.8877 27.3467L71.8877 121.813L38.6006 121.812L38.6006 27.3516L1.375 27.3516L1.375 1.03613L108.941 1.03613Z'
            stroke='white'
            strokeOpacity='0.01'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1192_5028'
              x1='56.4504'
              y1='-9.78637'
              x2='56.4504'
              y2='103.049'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C1C9E8' stopOpacity='0.5' />
              <stop offset='1' stopColor='#C1C9E8' stopOpacity='0.05' />
            </linearGradient>
          </defs>
        </svg>
      </InViewWrapper>
    </section>
  )
})

export default Team
