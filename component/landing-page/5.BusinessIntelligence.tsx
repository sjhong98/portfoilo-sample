'use client'

import BusinessIntelligence_automatedVAT from '../../public/assets/landing/BusinessIntelligence_automatedVAT.png'
import BusinessIntelligence_freeConsultant from '../../public/assets/landing/BusinessIntelligence_freeConsultant.png'
import BusinessIntelligence_analysis from '../../public/assets/landing/BusinessIntelligence_analysis.png'
import BusinessIntelligence_forecast from '../../public/assets/landing/BusinessIntelligence_forecast.png'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import InViewWrapper from './InViewWrapper'

const BusinessIntelligence = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
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
      id={'business_intelligence_section_title'}
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
          <div className='px-[15px] py-2 bg-gradient-to-r from-[#35966a]/20 via-[#35966a]/10 to-[#6c93da]/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#c9e8df] inline-flex justify-center items-center gap-[5px] overflow-hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
              <path d='M2.5 2V14H14.5' stroke='#35966A' strokeLinecap='round' strokeLinejoin='round' />
              <path
                d='M5.16797 11.3333L7.83464 6L11.168 9L14.5013 2'
                stroke='#35966A'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className="text-center justify-center text-[#35966a] text-[13px] font-semibold font-['Pretendard']">
              비지니스 인텔리전스
            </p>
          </div>
          <div className='flex flex-col justify-start items-center gap-2.5'>
            <p className="text-center justify-center text-[#1d2232]/90 text-[26px] font-bold font-['Pretendard']">
              예약관리를 넘어
            </p>
            <p className="text-center justify-center text-[#623112] text-[26px] font-bold font-['Pretendard']">
              비즈니스 운영까지
            </p>
          </div>
        </div>
        <div className='w-[291px] h-[38px] relative'>
          <div className='w-[291px] left-0 top-[-3px] absolute text-center justify-center'>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              어려운 세무는{' '}
            </span>
            <span className="text-[#1d2232]/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              파트너 세무사
            </span>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              에게,
              <br />
              효율적인 매장 운영은{' '}
            </span>
            <span className="text-[#1d2232]/70 text-base font-bold font-['Pretendard'] leading-snug tracking-tight">
              포비
            </span>
            <span className="text-[#1d2232]/70 text-base font-normal font-['Pretendard'] leading-snug tracking-tight">
              에게 맡겨보세요.
            </span>
          </div>
        </div>
      </motion.div>
      <ul className='flex flex-col justify-start items-start gap-[50px]'>
        <li id={'business_intelligence_section_content_1'} className={'w-full flex justify-center'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[304px] h-[333px] p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f1f1f2] flex flex-col justify-center items-center gap-4 relative'
          >
            <ComingSoonMobile />
            <Image
              src={BusinessIntelligence_automatedVAT}
              alt={'부가세 신고 자동화'}
              width={300}
              height={300}
              className={'object-cover h-[131px] w-[120px]'}
              placeholder='blur'
            />
            {/*<BusinessIntelligence_automatedVAT className={'mt-[-5px] mb-[-5px]'} />*/}
            <p className="text-center justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard'] break-keep">
              부가세 신고 자동화
            </p>
            <p className="text-center justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug landing-spacing break-keep">
              사장님은 중요한 결정에만 집중하세요
              <br />
              세무신고에 필요한 자료는 포비가 정리할게요
            </p>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_2'} className={'w-full flex justify-center'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[304px] h-[333px] p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f1f1f2] flex flex-col justify-center items-center gap-4 relative'
          >
            <Image
              src={BusinessIntelligence_freeConsultant}
              alt={'무료 세무 상담'}
              width={300}
              height={300}
              className={'h-[131px] w-[120px] object-cover'}
              placeholder='blur'
            />
            {/*<BusinessIntelligence_freeConsultant width={128} />*/}
            <h2 className="text-center justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']">
              무료 세무 상담
            </h2>
            <p className="text-center justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug landing-spacing  break-keep">
              세금 신고부터 자문까지
              <br />
              포포넛 파트너 세무사가 상담해드려요
            </p>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_3'} className={'w-full flex justify-center'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[304px] h-[333px] p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f1f1f2] flex flex-col justify-center items-center gap-4 relative'
          >
            <ComingSoonMobile />
            <Image
              src={BusinessIntelligence_analysis}
              alt={'매출 데이터 분석결과 제공'}
              width={300}
              height={300}
              className={'h-[131px] w-[120px] object-cover'}
              placeholder='blur'
            />
            {/*<BusinessIntelligence_analysis className={'mt-[-20px] mb-[-20px]'} />*/}
            <p className="text-center justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']">
              매출 데이터
              <br /> 분석결과 제공
            </p>
            <p className="text-center justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug landing-spacing break-keep">
              AI가 매출 패턴을 분석하여
              <br /> 맞춤형 비즈니스 전략을 제안합니다
            </p>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_4'} className={'w-full flex justify-center'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            className='w-[304px] h-[333px] p-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#f1f1f2] flex flex-col justify-center items-center gap-4 relative'
          >
            <ComingSoonMobile />
            <Image
              src={BusinessIntelligence_forecast}
              alt={'미래 재고 수요 예측결과 제공'}
              width={300}
              height={300}
              className={'h-[131px] w-[120px] object-cover'}
              placeholder='blur'
            />
            {/*<BusinessIntelligence_forecast className={'mt-[-20px] mb-[-20px]'} />*/}
            <p
              className="text-center justify-start text-[#4a4e5b] text-[22px] font-bold font-['Pretendard']"
              style={{
                lineHeight: '26px'
              }}
            >
              미래 재고 수요
              <br /> 예측결과 제공
            </p>
            <p className="text-center justify-start text-[#1d2232]/50 text-base font-normal font-['Pretendard'] leading-snug landing-spacing break-keep">
              과거 데이터와 트렌드 분석으로
              <br /> 최적의 재고 관리를 지원합니다
            </p>
          </motion.div>
        </li>
      </ul>
    </section>
  ) : (
    <section
      ref={ref}
      id={'business_intelligence_section_title'}
      className='w-full px-[169px] pt-[140px] mb-[-500px] bg-white inline-flex flex-col justify-start items-center gap-[90px] scale-[0.8] origin-top'
    >
      <motion.div
        className='flex flex-col justify-start items-center gap-5'
        variants={container}
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true }}
      >
        <div className='flex flex-col justify-start items-center gap-10'>
          <div className='w-[299px] px-9 py-4 bg-gradient-to-r from-[#35966a]/20 via-[#35966a]/10 to-[#6c93da]/10 rounded-[100px] outline outline-2 outline-offset-[-2px] outline-[#c9e8df] inline-flex justify-center items-center gap-2.5 overflow-hidden'>
            <div className='w-6 h-6 relative overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                <path
                  d='M3.5 3.03467V21.0347H21.5'
                  stroke='#35966A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.5 17.0347L11.5 9.03467L16.5 13.5347L21.5 3.03467'
                  stroke='#35966A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <p className="text-center justify-center text-[#35966a] text-2xl font-semibold font-['Pretendard']">
              비지니스 인텔리전스
            </p>
          </div>
          <div className='flex flex-col justify-start items-center gap-2.5'>
            <p className="text-center justify-center text-[#1d2232]/90 text-6xl font-bold font-['Pretendard']">
              예약관리를 넘어
            </p>
            <p className="text-center justify-center text-[#623112] text-[70px] font-bold font-['Pretendard']">
              비즈니스 운영까지
            </p>
          </div>
        </div>
        <div className='text-center justify-center'>
          <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            어려운 세무는{' '}
          </span>
          <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[45px] tracking-tight">
            파트너 세무사
          </span>
          <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            에게,
            <br />
            효율적인 매장 운영은{' '}
          </span>
          <span className="text-[#1d2232]/70 text-[34px] font-bold font-['Pretendard'] leading-[45px] tracking-tight">
            포비
          </span>
          <span className="text-[#1d2232]/70 text-[34px] font-normal font-['Pretendard'] leading-[45px] tracking-tight">
            에게 맡겨보세요.
          </span>
        </div>
      </motion.div>
      <ul
        className='w-[1266px] flex flex-col justify-start items-start'
        style={{
          gap: isTablet ? '0px' : '100px'
        }}
      >
        <li id={'business_intelligence_section_content_1'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <InViewWrapper
              className='w-full inline-flex justify-center items-center gap-[145px]'
              style={{
                scale: isTablet ? 0.7 : 1,
                marginTop: isTablet ? '-50px' : '0px'
              }}
            >
              <Image
                src={BusinessIntelligence_automatedVAT}
                alt={'부가세 신고 자동화'}
                width={1000}
                height={1000}
                className={'object-cover w-[420px] h-[548px]'}
                placeholder='blur'
              />
              <div className='w-[575px] inline-flex flex-col justify-center items-start gap-[23px]'>
                <ComingSoon />
                <p className="justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard']">
                  부가세 신고 자동화
                </p>
                <p
                  className="w-[590px] justify-start text-[#1d2232]/50 text-[34px] font-normal font-['Pretendard'] leading-[50px]"
                  style={{
                    letterSpacing: '-0.68px'
                  }}
                >
                  사장님은 중요한 결정에만 집중하세요
                  <br />
                  세무신고에 필요한 자료는 포비가 정리할게요
                </p>
              </div>
            </InViewWrapper>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_2'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <InViewWrapper
              className='w-full inline-flex justify-center items-center gap-[145px]'
              style={{
                scale: isTablet ? 0.7 : 1,
                marginTop: isTablet ? '-100px' : '0px'
              }}
            >
              <div className='w-[575px] inline-flex flex-col justify-center items-start gap-[23px] mt-4'>
                <h2 className="justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard']">무료 세무 상담</h2>
                <p
                  className="self-stretch justify-start text-[#1d2232]/50 text-[34px] font-normal font-['Pretendard'] leading-[50px] whitespace-nowrap"
                  style={{
                    letterSpacing: '-0.68px'
                  }}
                >
                  세금 신고부터 자문까지
                  <br />
                  포포넛 파트너 세무사가 상담해드려요
                </p>
              </div>
              <Image
                src={BusinessIntelligence_freeConsultant}
                alt={'무료 세무 상담'}
                width={1000}
                height={1000}
                className={'w-[420px] h-[548px] object-cover'}
                placeholder='blur'
              />
            </InViewWrapper>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_3'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <InViewWrapper
              className='w-full inline-flex justify-center items-center gap-[145px]'
              style={{
                scale: isTablet ? 0.7 : 1,
                marginTop: isTablet ? '-100px' : '0px'
              }}
            >
              <Image
                src={BusinessIntelligence_analysis}
                alt={'매출 데이터 분석결과 제공'}
                width={1000}
                height={1000}
                className={'w-[420px] h-[548px] object-cover'}
                placeholder='blur'
              />
              <div className='w-[575px] self-stretch inline-flex flex-col justify-center items-start gap-[23px]'>
                <ComingSoon />
                <p className="justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard'] leading-[80px]">
                  매출 데이터
                  <br /> 분석결과 제공
                </p>
                <p className="self-stretch justify-start text-[#1d2232]/50 text-[34px] font-normal font-['Pretendard'] leading-[50px]">
                  AI가 매출 패턴을 분석하여
                  <br /> 맞춤형 비즈니스 전략을 제안합니다
                </p>
              </div>
            </InViewWrapper>
          </motion.div>
        </li>
        <li id={'business_intelligence_section_content_4'} className={'w-full'}>
          <motion.div
            variants={item}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <InViewWrapper
              className='w-full inline-flex justify-center items-center gap-[145px]'
              style={{
                scale: isTablet ? 0.8 : 1,
                marginTop: isTablet ? '-100px' : '0px'
              }}
            >
              <div className='w-[575px] self-stretch inline-flex flex-col justify-center items-start gap-[23px]'>
                <ComingSoon />
                <p className="justify-start text-[#4a4e5b] text-6xl font-bold font-['Pretendard'] leading-[80px]">
                  미래 재고 수요
                  <br /> 예측결과 제공
                </p>
                <p className="self-stretch justify-start text-[#1d2232]/50 text-[34px] font-normal font-['Pretendard'] leading-[50px]">
                  과거 데이터와 트렌드 분석으로
                  <br /> 최적의 재고 관리를 지원합니다
                </p>
              </div>
              <Image
                src={BusinessIntelligence_forecast}
                alt={'미래 재고 수요 예측결과 제공'}
                width={1000}
                height={1000}
                className={'w-[420px] h-[548px] object-cover'}
                placeholder='blur'
              />
            </InViewWrapper>
          </motion.div>
        </li>
      </ul>
    </section>
  )
})

export default BusinessIntelligence

function ComingSoon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='194' height='46' viewBox='0 0 194 46' fill='none'>
      <rect x='0.5' y='0.534668' width='193' height='44' rx='22' stroke='#4A4E5B' strokeOpacity='0.2' />
      <path
        d='M36.7969 25.45L38.3789 26.5535C37.7148 27.5171 36.8587 28.2821 35.8105 28.8485C35.2962 29.1219 34.7493 29.3335 34.1699 29.4832C33.597 29.633 33.0013 29.7078 32.3828 29.7078C31.6992 29.7078 31.0449 29.62 30.4199 29.4442C29.1699 29.0861 28.0827 28.4351 27.1582 27.491C26.7155 27.0418 26.3314 26.534 26.0059 25.9676C25.6868 25.4077 25.4395 24.8055 25.2637 24.161C25.0879 23.5164 25 22.8459 25 22.1493C25 21.4526 25.0879 20.7821 25.2637 20.1375C25.6152 18.842 26.2467 17.7287 27.1582 16.7977C27.6009 16.3485 28.099 15.9546 28.6523 15.616C29.1992 15.2905 29.7884 15.0399 30.4199 14.8641C31.0514 14.6818 31.7057 14.5907 32.3828 14.5907C32.9622 14.5907 33.5221 14.6558 34.0625 14.786C34.6029 14.9162 35.1172 15.1017 35.6055 15.3426C36.5885 15.8244 37.4251 16.5015 38.1152 17.3739L36.6211 18.5946C36.1133 17.9631 35.4948 17.4618 34.7656 17.0907C34.043 16.7196 33.2487 16.534 32.3828 16.534C31.6276 16.534 30.9212 16.6838 30.2637 16.9832C29.6061 17.2762 29.0299 17.6766 28.5352 18.1844C28.0404 18.6922 27.6497 19.2879 27.3633 19.9715C27.0833 20.6486 26.9434 21.3745 26.9434 22.1493C26.9434 22.924 27.0833 23.6532 27.3633 24.3368C27.6497 25.0203 28.0404 25.616 28.5352 26.1239C29.0299 26.6317 29.6061 27.0353 30.2637 27.3348C30.9212 27.6278 31.6276 27.7743 32.3828 27.7743C32.8385 27.7743 33.278 27.7189 33.7012 27.6082C34.1243 27.4976 34.5247 27.3413 34.9023 27.1395C35.6576 26.7358 36.2891 26.1727 36.7969 25.45Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M50.1074 24.3758C50.1074 25.1961 49.9707 25.9546 49.6973 26.6512C49.4238 27.3478 49.0495 27.9533 48.5742 28.4676C48.099 28.9819 47.5423 29.3823 46.9043 29.6688C46.2663 29.9618 45.5859 30.1082 44.8633 30.1082C43.3854 30.1082 42.1582 29.5809 41.1816 28.5262C40.7064 28.0249 40.332 27.4227 40.0586 26.7196C39.7852 26.0164 39.6484 25.2352 39.6484 24.3758C39.6484 23.5099 39.7852 22.7254 40.0586 22.0223C40.332 21.3127 40.7064 20.7072 41.1816 20.2059C41.6504 19.7046 42.2005 19.3172 42.832 19.0438C43.4635 18.7703 44.1406 18.6336 44.8633 18.6336C45.5859 18.6336 46.2663 18.7801 46.9043 19.0731C47.5423 19.3595 48.099 19.7567 48.5742 20.2645C49.0495 20.7788 49.4238 21.3875 49.6973 22.0907C49.9707 22.7873 50.1074 23.549 50.1074 24.3758ZM48.0469 24.3563C48.0469 23.8875 47.9883 23.4123 47.8711 22.9305C47.7539 22.4487 47.5684 22.019 47.3145 21.6414C47.0605 21.2573 46.7318 20.9481 46.3281 20.7137C45.9245 20.4728 45.4362 20.3524 44.8633 20.3524C44.3099 20.3524 43.8346 20.4728 43.4375 20.7137C43.0404 20.9481 42.7148 21.2573 42.4609 21.6414C42.207 22.019 42.0215 22.4487 41.9043 22.9305C41.7871 23.4123 41.7285 23.8875 41.7285 24.3563C41.7285 24.825 41.7904 25.297 41.9141 25.7723C42.0443 26.241 42.2396 26.6675 42.5 27.0516C42.7604 27.4292 43.0859 27.7417 43.4766 27.9891C43.8737 28.23 44.3359 28.3504 44.8633 28.3504C45.4167 28.3504 45.8919 28.23 46.2891 27.9891C46.6927 27.7417 47.0247 27.4292 47.2852 27.0516C47.5456 26.6675 47.7376 26.241 47.8613 25.7723C47.985 25.297 48.0469 24.825 48.0469 24.3563Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M52.2363 18.9364L54.2773 18.7118L54.3164 21.5535C54.6094 21.1825 54.9186 20.8179 55.2441 20.4598C55.5697 20.1017 55.9277 19.8055 56.3184 19.5711C56.7155 19.3302 57.1615 19.2098 57.6562 19.2098C58.2357 19.2098 58.7435 19.4019 59.1797 19.786C59.6159 20.1636 59.8698 20.7202 59.9414 21.4559C60.2214 21.1043 60.5208 20.756 60.8398 20.411C61.1589 20.0659 61.5104 19.7795 61.8945 19.5516C62.2786 19.3237 62.7083 19.2098 63.1836 19.2098C63.8216 19.2098 64.3587 19.4246 64.7949 19.8543C65.2376 20.284 65.472 20.9155 65.498 21.7489C65.5176 21.9897 65.5371 22.2599 65.5566 22.5594C65.5762 22.8524 65.5924 23.1812 65.6055 23.5457C65.638 24.1642 65.6641 24.952 65.6836 25.909C65.7096 26.8595 65.7227 28.0021 65.7227 29.3368L63.6816 29.4344C63.6816 28.2495 63.6784 27.2371 63.6719 26.3973C63.6654 25.5509 63.6589 24.8511 63.6523 24.2977L63.623 22.6961C63.584 21.6414 63.2975 21.1141 62.7637 21.1141C62.5228 21.1141 62.2689 21.2248 62.002 21.4461C61.735 21.6675 61.4974 21.9116 61.2891 22.1785C61.2044 22.2827 61.123 22.3869 61.0449 22.491C60.9733 22.5887 60.9017 22.6896 60.8301 22.7938C60.6868 23.0021 60.5501 23.2039 60.4199 23.3993C60.2897 23.5946 60.1758 23.7671 60.0781 23.9168C60.0911 24.2033 60.1042 24.519 60.1172 24.8641C60.1367 25.2091 60.1497 25.5998 60.1562 26.036C60.1693 26.4722 60.1758 26.9604 60.1758 27.5008C60.1758 28.0412 60.1758 28.6532 60.1758 29.3368L58.2812 29.4344C58.2812 28.2495 58.2682 27.2371 58.2422 26.3973C58.2227 25.5509 58.1999 24.8511 58.1738 24.2977C58.1608 23.9722 58.1445 23.6759 58.125 23.409C58.112 23.1421 58.0957 22.9045 58.0762 22.6961C58.0371 21.6414 57.7507 21.1141 57.2168 21.1141C57.054 21.1141 56.8815 21.1694 56.6992 21.2801C56.3411 21.508 55.9896 21.8498 55.6445 22.3055C55.5599 22.4162 55.4753 22.5301 55.3906 22.6473C55.3125 22.7645 55.2344 22.8784 55.1562 22.9891C55.0326 23.1714 54.8893 23.383 54.7266 23.6239C54.5703 23.8647 54.4466 24.0535 54.3555 24.1903L54.4434 29.3368L52.5 29.4344L52.2363 18.9364Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M68.4473 18.9364L70.4883 18.7118L70.5273 21.5535C70.8203 21.1825 71.1296 20.8179 71.4551 20.4598C71.7806 20.1017 72.1387 19.8055 72.5293 19.5711C72.9264 19.3302 73.3724 19.2098 73.8672 19.2098C74.4466 19.2098 74.9544 19.4019 75.3906 19.786C75.8268 20.1636 76.0807 20.7202 76.1523 21.4559C76.4323 21.1043 76.7318 20.756 77.0508 20.411C77.3698 20.0659 77.7214 19.7795 78.1055 19.5516C78.4896 19.3237 78.9193 19.2098 79.3945 19.2098C80.0326 19.2098 80.5697 19.4246 81.0059 19.8543C81.4486 20.284 81.6829 20.9155 81.709 21.7489C81.7285 21.9897 81.748 22.2599 81.7676 22.5594C81.7871 22.8524 81.8034 23.1812 81.8164 23.5457C81.849 24.1642 81.875 24.952 81.8945 25.909C81.9206 26.8595 81.9336 28.0021 81.9336 29.3368L79.8926 29.4344C79.8926 28.2495 79.8893 27.2371 79.8828 26.3973C79.8763 25.5509 79.8698 24.8511 79.8633 24.2977L79.834 22.6961C79.7949 21.6414 79.5085 21.1141 78.9746 21.1141C78.7337 21.1141 78.4798 21.2248 78.2129 21.4461C77.946 21.6675 77.7083 21.9116 77.5 22.1785C77.4154 22.2827 77.334 22.3869 77.2559 22.491C77.1842 22.5887 77.1126 22.6896 77.041 22.7938C76.8978 23.0021 76.7611 23.2039 76.6309 23.3993C76.5007 23.5946 76.3867 23.7671 76.2891 23.9168C76.3021 24.2033 76.3151 24.519 76.3281 24.8641C76.3477 25.2091 76.3607 25.5998 76.3672 26.036C76.3802 26.4722 76.3867 26.9604 76.3867 27.5008C76.3867 28.0412 76.3867 28.6532 76.3867 29.3368L74.4922 29.4344C74.4922 28.2495 74.4792 27.2371 74.4531 26.3973C74.4336 25.5509 74.4108 24.8511 74.3848 24.2977C74.3717 23.9722 74.3555 23.6759 74.3359 23.409C74.3229 23.1421 74.3066 22.9045 74.2871 22.6961C74.248 21.6414 73.9616 21.1141 73.4277 21.1141C73.265 21.1141 73.0924 21.1694 72.9102 21.2801C72.5521 21.508 72.2005 21.8498 71.8555 22.3055C71.7708 22.4162 71.6862 22.5301 71.6016 22.6473C71.5234 22.7645 71.4453 22.8784 71.3672 22.9891C71.2435 23.1714 71.1003 23.383 70.9375 23.6239C70.7812 23.8647 70.6576 24.0535 70.5664 24.1903L70.6543 29.3368L68.7109 29.4344L68.4473 18.9364Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M87.3438 16.0946C87.3438 16.4722 87.2038 16.7977 86.9238 17.0711C86.6504 17.3381 86.3216 17.4715 85.9375 17.4715C85.5599 17.4715 85.2344 17.3381 84.9609 17.0711C84.694 16.7977 84.5605 16.4722 84.5605 16.0946C84.5605 15.7104 84.694 15.3817 84.9609 15.1082C85.2344 14.8283 85.5599 14.6883 85.9375 14.6883C86.3216 14.6883 86.6504 14.8283 86.9238 15.1082C87.2038 15.3817 87.3438 15.7104 87.3438 16.0946ZM84.8633 19.6102L86.8848 19.5321L86.7871 24.2196C86.7546 25.5086 86.735 26.521 86.7285 27.2567C86.709 28.1551 86.6992 28.8615 86.6992 29.3758H84.6973C84.7038 29.0243 84.7103 28.6401 84.7168 28.2235C84.7298 27.8003 84.7396 27.3478 84.7461 26.866C84.7591 26.0262 84.7786 25.0073 84.8047 23.8094L84.8633 19.6102Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M92.0801 29.5711L89.9805 29.8348L89.7852 24.3563C89.7721 23.9852 89.7591 23.5881 89.7461 23.1649C89.7331 22.7352 89.7201 22.3315 89.707 21.9539C89.694 21.5698 89.6842 21.2671 89.6777 21.0457C89.6517 20.1278 89.6322 19.4377 89.6191 18.9754L91.8457 18.9364L91.8848 21.7489C92.0996 21.3778 92.3438 21.0295 92.6172 20.7039C92.8906 20.3719 93.1869 20.0789 93.5059 19.825C93.8249 19.5711 94.1634 19.366 94.5215 19.2098C94.8861 19.0535 95.2669 18.9624 95.6641 18.9364C96.1654 18.9038 96.5983 18.9461 96.9629 19.0633C97.3275 19.1805 97.64 19.3433 97.9004 19.5516C98.1608 19.7534 98.3756 19.9976 98.5449 20.284C98.7207 20.577 98.8542 20.87 98.9453 21.1629C99.043 21.4624 99.1113 21.7651 99.1504 22.0711C99.196 22.3706 99.2253 22.644 99.2383 22.8914C99.2773 24.0112 99.2871 25.1375 99.2676 26.2703C99.248 27.4032 99.2253 28.5783 99.1992 29.7957L97.1973 29.7274C97.2494 28.6792 97.2949 27.631 97.334 26.5828C97.3796 25.5347 97.3763 24.4767 97.3242 23.409C97.3242 23.1812 97.2982 22.9207 97.2461 22.6278C97.194 22.3283 97.0996 22.0321 96.9629 21.7391C96.8652 21.5373 96.7383 21.3582 96.582 21.202C96.4258 21.0522 96.2337 20.9383 96.0059 20.8602C95.7845 20.7821 95.5241 20.7658 95.2246 20.8114C94.7103 20.8895 94.1895 21.2638 93.6621 21.9344C93.1413 22.5854 92.5684 23.5718 91.9434 24.8934L92.0117 27.3934C92.0182 27.7059 92.0247 27.9793 92.0312 28.2137C92.0378 28.4481 92.0443 28.6466 92.0508 28.8094C92.0638 29.187 92.0736 29.4409 92.0801 29.5711Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M110.469 20.1766L110.488 18.2332L112.402 18.2918L112.344 29.5125C112.337 29.7209 112.321 29.9325 112.295 30.1473C112.269 30.3621 112.23 30.5737 112.178 30.7821C111.969 31.6349 111.562 32.4129 110.957 33.116C110.651 33.4611 110.303 33.7703 109.912 34.0438C109.515 34.3107 109.072 34.5288 108.584 34.6981C108.096 34.8739 107.562 34.9845 106.982 35.0301C106.214 35.0562 105.472 34.9748 104.756 34.786C104.118 34.6167 103.499 34.3205 102.9 33.8973C102.301 33.4741 101.855 32.8849 101.562 32.1297L103.447 31.3094C103.675 31.8237 103.997 32.2209 104.414 32.5008C104.837 32.7873 105.267 32.9728 105.703 33.0575C106.178 33.1616 106.68 33.1812 107.207 33.116C107.435 33.0705 107.646 33.0119 107.842 32.9403C108.044 32.8687 108.229 32.7873 108.398 32.6961C108.73 32.5073 109.014 32.2957 109.248 32.0614C109.489 31.8335 109.681 31.5926 109.824 31.3387C109.896 31.2085 109.958 31.0815 110.01 30.9578C110.068 30.8341 110.12 30.7137 110.166 30.5965C110.251 30.3621 110.306 30.1473 110.332 29.952C110.365 29.7632 110.381 29.6167 110.381 29.5125V28.2332C109.99 28.6043 109.583 28.8908 109.16 29.0926C108.743 29.2879 108.356 29.4312 107.998 29.5223C107.79 29.5744 107.581 29.6167 107.373 29.6493C107.171 29.6818 106.969 29.7013 106.768 29.7078C105.231 29.7078 103.962 29.1968 102.959 28.1746C102.477 27.6864 102.096 27.0907 101.816 26.3875C101.543 25.6844 101.406 24.8934 101.406 24.0145C101.406 23.1291 101.559 22.3413 101.865 21.6512C102.178 20.9546 102.581 20.3687 103.076 19.8934C103.577 19.4181 104.141 19.0568 104.766 18.8094C105.391 18.5555 106.022 18.4285 106.66 18.4285C107.103 18.4806 107.549 18.5783 107.998 18.7215C108.382 18.8452 108.796 19.021 109.238 19.2489C109.681 19.4767 110.091 19.786 110.469 20.1766ZM106.768 27.8328C107.64 27.8328 108.424 27.5464 109.121 26.9735C109.447 26.7065 109.723 26.3875 109.951 26.0164C110.179 25.6388 110.335 25.2254 110.42 24.7762V23.4969C110.348 23.0347 110.195 22.6147 109.961 22.2371C109.727 21.853 109.44 21.5243 109.102 21.2508C108.398 20.6779 107.601 20.3914 106.709 20.3914C106.24 20.3914 105.807 20.4891 105.41 20.6844C105.02 20.8732 104.681 21.1369 104.395 21.4754C104.115 21.814 103.893 22.2144 103.73 22.6766C103.568 23.1388 103.486 23.6369 103.486 24.1707C103.486 24.7046 103.568 25.1961 103.73 25.6453C103.893 26.0881 104.121 26.4722 104.414 26.7977C104.701 27.1167 105.042 27.3706 105.439 27.5594C105.843 27.7417 106.286 27.8328 106.768 27.8328Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M132.861 26.8075C132.796 27.2632 132.669 27.6668 132.48 28.0184C132.285 28.3765 132.044 28.6857 131.758 28.9461C131.471 29.2065 131.152 29.4279 130.801 29.6102C130.423 29.7925 130.052 29.9357 129.688 30.0399C129.297 30.1506 128.903 30.2287 128.506 30.2743C128.109 30.3263 127.728 30.3524 127.363 30.3524C126.862 30.3524 126.367 30.297 125.879 30.1864C125.391 30.0822 124.912 29.9357 124.443 29.7469C123.968 29.5516 123.499 29.3205 123.037 29.0535C122.581 28.7866 122.129 28.4937 121.68 28.1746L123.105 26.495C123.613 26.9442 124.115 27.299 124.609 27.5594C125.111 27.8133 125.56 28.0054 125.957 28.1356C126.426 28.2983 126.868 28.4025 127.285 28.4481C127.754 28.4741 128.19 28.4383 128.594 28.3407C129.004 28.2365 129.359 28.0933 129.658 27.911C130.283 27.5269 130.632 27.0353 130.703 26.4364C130.723 26.1955 130.68 25.9741 130.576 25.7723C130.374 25.3817 129.984 25.0529 129.404 24.786C129.268 24.7209 129.124 24.6623 128.975 24.6102C128.831 24.5516 128.685 24.4963 128.535 24.4442C128.223 24.3465 127.9 24.2619 127.568 24.1903C127.243 24.1121 126.927 24.047 126.621 23.995C126.25 23.9233 125.859 23.8354 125.449 23.7313C125.039 23.6206 124.635 23.4806 124.238 23.3114C123.841 23.1356 123.467 22.9175 123.115 22.6571C122.757 22.3901 122.454 22.0744 122.207 21.7098C121.947 21.3452 121.748 20.9188 121.611 20.4305C121.481 19.9422 121.439 19.3823 121.484 18.7508C121.523 18.217 121.634 17.745 121.816 17.3348C122.161 16.508 122.718 15.8472 123.486 15.3524C123.851 15.118 124.242 14.9227 124.658 14.7664C125.075 14.6102 125.505 14.4995 125.947 14.4344C126.396 14.3628 126.842 14.3302 127.285 14.3368C127.884 14.3628 128.499 14.4572 129.131 14.62C129.691 14.7632 130.27 14.9748 130.869 15.2547C131.475 15.5347 132.025 15.9123 132.52 16.3875L131.426 18.116C131.042 17.6799 130.599 17.3315 130.098 17.0711C129.596 16.8042 129.124 16.6089 128.682 16.4852C128.187 16.3485 127.695 16.2703 127.207 16.2508C126.615 16.2508 126.087 16.3387 125.625 16.5145C125.163 16.6903 124.775 16.9214 124.463 17.2078C124.144 17.4878 123.9 17.8035 123.73 18.1551C123.568 18.5067 123.486 18.8517 123.486 19.1903C123.486 19.5223 123.584 19.8446 123.779 20.1571C123.981 20.4696 124.258 20.7528 124.609 21.0067C125.352 21.5405 126.276 21.8823 127.383 22.0321C127.624 22.0581 127.861 22.0939 128.096 22.1395C128.33 22.1785 128.568 22.2274 128.809 22.286C129.277 22.4032 129.727 22.5529 130.156 22.7352C130.592 22.9175 130.99 23.1356 131.348 23.3895C131.712 23.6564 132.015 23.9526 132.256 24.2782C132.503 24.6167 132.682 24.9976 132.793 25.4207C132.91 25.8374 132.933 26.2996 132.861 26.8075Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M144.814 24.3758C144.814 25.1961 144.678 25.9546 144.404 26.6512C144.131 27.3478 143.757 27.9533 143.281 28.4676C142.806 28.9819 142.249 29.3823 141.611 29.6688C140.973 29.9618 140.293 30.1082 139.57 30.1082C138.092 30.1082 136.865 29.5809 135.889 28.5262C135.413 28.0249 135.039 27.4227 134.766 26.7196C134.492 26.0164 134.355 25.2352 134.355 24.3758C134.355 23.5099 134.492 22.7254 134.766 22.0223C135.039 21.3127 135.413 20.7072 135.889 20.2059C136.357 19.7046 136.908 19.3172 137.539 19.0438C138.171 18.7703 138.848 18.6336 139.57 18.6336C140.293 18.6336 140.973 18.7801 141.611 19.0731C142.249 19.3595 142.806 19.7567 143.281 20.2645C143.757 20.7788 144.131 21.3875 144.404 22.0907C144.678 22.7873 144.814 23.549 144.814 24.3758ZM142.754 24.3563C142.754 23.8875 142.695 23.4123 142.578 22.9305C142.461 22.4487 142.275 22.019 142.021 21.6414C141.768 21.2573 141.439 20.9481 141.035 20.7137C140.632 20.4728 140.143 20.3524 139.57 20.3524C139.017 20.3524 138.542 20.4728 138.145 20.7137C137.747 20.9481 137.422 21.2573 137.168 21.6414C136.914 22.019 136.729 22.4487 136.611 22.9305C136.494 23.4123 136.436 23.8875 136.436 24.3563C136.436 24.825 136.497 25.297 136.621 25.7723C136.751 26.241 136.947 26.6675 137.207 27.0516C137.467 27.4292 137.793 27.7417 138.184 27.9891C138.581 28.23 139.043 28.3504 139.57 28.3504C140.124 28.3504 140.599 28.23 140.996 27.9891C141.4 27.7417 141.732 27.4292 141.992 27.0516C142.253 26.6675 142.445 26.241 142.568 25.7723C142.692 25.297 142.754 24.825 142.754 24.3563Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M156.787 24.3758C156.787 25.1961 156.65 25.9546 156.377 26.6512C156.104 27.3478 155.729 27.9533 155.254 28.4676C154.779 28.9819 154.222 29.3823 153.584 29.6688C152.946 29.9618 152.266 30.1082 151.543 30.1082C150.065 30.1082 148.838 29.5809 147.861 28.5262C147.386 28.0249 147.012 27.4227 146.738 26.7196C146.465 26.0164 146.328 25.2352 146.328 24.3758C146.328 23.5099 146.465 22.7254 146.738 22.0223C147.012 21.3127 147.386 20.7072 147.861 20.2059C148.33 19.7046 148.88 19.3172 149.512 19.0438C150.143 18.7703 150.82 18.6336 151.543 18.6336C152.266 18.6336 152.946 18.7801 153.584 19.0731C154.222 19.3595 154.779 19.7567 155.254 20.2645C155.729 20.7788 156.104 21.3875 156.377 22.0907C156.65 22.7873 156.787 23.549 156.787 24.3758ZM154.727 24.3563C154.727 23.8875 154.668 23.4123 154.551 22.9305C154.434 22.4487 154.248 22.019 153.994 21.6414C153.74 21.2573 153.411 20.9481 153.008 20.7137C152.604 20.4728 152.116 20.3524 151.543 20.3524C150.99 20.3524 150.514 20.4728 150.117 20.7137C149.72 20.9481 149.395 21.2573 149.141 21.6414C148.887 22.019 148.701 22.4487 148.584 22.9305C148.467 23.4123 148.408 23.8875 148.408 24.3563C148.408 24.825 148.47 25.297 148.594 25.7723C148.724 26.241 148.919 26.6675 149.18 27.0516C149.44 27.4292 149.766 27.7417 150.156 27.9891C150.553 28.23 151.016 28.3504 151.543 28.3504C152.096 28.3504 152.572 28.23 152.969 27.9891C153.372 27.7417 153.704 27.4292 153.965 27.0516C154.225 26.6675 154.417 26.241 154.541 25.7723C154.665 25.297 154.727 24.825 154.727 24.3563Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
      <path
        d='M161.338 29.5711L159.238 29.8348L159.043 24.3563C159.03 23.9852 159.017 23.5881 159.004 23.1649C158.991 22.7352 158.978 22.3315 158.965 21.9539C158.952 21.5698 158.942 21.2671 158.936 21.0457C158.91 20.1278 158.89 19.4377 158.877 18.9754L161.104 18.9364L161.143 21.7489C161.357 21.3778 161.602 21.0295 161.875 20.7039C162.148 20.3719 162.445 20.0789 162.764 19.825C163.083 19.5711 163.421 19.366 163.779 19.2098C164.144 19.0535 164.525 18.9624 164.922 18.9364C165.423 18.9038 165.856 18.9461 166.221 19.0633C166.585 19.1805 166.898 19.3433 167.158 19.5516C167.419 19.7534 167.633 19.9976 167.803 20.284C167.979 20.577 168.112 20.87 168.203 21.1629C168.301 21.4624 168.369 21.7651 168.408 22.0711C168.454 22.3706 168.483 22.644 168.496 22.8914C168.535 24.0112 168.545 25.1375 168.525 26.2703C168.506 27.4032 168.483 28.5783 168.457 29.7957L166.455 29.7274C166.507 28.6792 166.553 27.631 166.592 26.5828C166.637 25.5347 166.634 24.4767 166.582 23.409C166.582 23.1812 166.556 22.9207 166.504 22.6278C166.452 22.3283 166.357 22.0321 166.221 21.7391C166.123 21.5373 165.996 21.3582 165.84 21.202C165.684 21.0522 165.492 20.9383 165.264 20.8602C165.042 20.7821 164.782 20.7658 164.482 20.8114C163.968 20.8895 163.447 21.2638 162.92 21.9344C162.399 22.5854 161.826 23.5718 161.201 24.8934L161.27 27.3934C161.276 27.7059 161.283 27.9793 161.289 28.2137C161.296 28.4481 161.302 28.6466 161.309 28.8094C161.322 29.187 161.331 29.4409 161.338 29.5711Z'
        fill='#4A4E5B'
        fillOpacity='0.8'
      />
    </svg>
  )
}

function ComingSoonMobile() {
  return (
    <div className='px-3.5 py-2 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-[#4a4e5b]/20 inline-flex flex-col justify-start items-start gap-2.5'>
      <svg xmlns='http://www.w3.org/2000/svg' width='75' height='10' viewBox='0 0 75 10' fill='none'>
        <path
          d='M6.1641 5.36941L6.99075 5.90254C6.64376 6.36804 6.19642 6.73761 5.64873 7.01126C5.37998 7.14336 5.09423 7.24558 4.79147 7.31792C4.49211 7.39026 4.18084 7.42643 3.85767 7.42643C3.50048 7.42643 3.15859 7.38397 2.83202 7.29905C2.17887 7.12606 1.61076 6.81153 1.1277 6.35546C0.89638 6.13844 0.695673 5.8931 0.525582 5.61946C0.358892 5.34897 0.229623 5.05803 0.137774 4.74664C0.0459246 4.43526 0 4.11129 0 3.77475C0 3.4382 0.0459246 3.11424 0.137774 2.80285C0.321472 2.17694 0.651449 1.63909 1.1277 1.18931C1.35903 0.972289 1.61927 0.781999 1.90842 0.618444C2.19418 0.461179 2.50204 0.340085 2.83202 0.255162C3.16199 0.167094 3.50388 0.12306 3.85767 0.12306C4.16043 0.12306 4.45299 0.154513 4.73534 0.217419C5.01769 0.280324 5.28643 0.369965 5.54157 0.486341C6.05525 0.719093 6.49238 1.0462 6.85297 1.46767L6.07225 2.05742C5.80691 1.75232 5.48374 1.51013 5.10274 1.33085C4.72513 1.15157 4.31011 1.06193 3.85767 1.06193C3.46306 1.06193 3.09396 1.13427 2.75037 1.27896C2.40679 1.42049 2.10573 1.61393 1.84719 1.85926C1.58865 2.1046 1.38454 2.39239 1.23486 2.72265C1.08858 3.04976 1.01544 3.40046 1.01544 3.77475C1.01544 4.14904 1.08858 4.50131 1.23486 4.83157C1.38454 5.16182 1.58865 5.44962 1.84719 5.69495C2.10573 5.94028 2.40679 6.13529 2.75037 6.27997C3.09396 6.42151 3.46306 6.49228 3.85767 6.49228C4.0958 6.49228 4.32542 6.46555 4.54654 6.41208C4.76766 6.35861 4.97687 6.28312 5.17417 6.18562C5.56878 5.99061 5.89876 5.71854 6.1641 5.36941Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M13.1191 4.85044C13.1191 5.24674 13.0477 5.61317 12.9048 5.94972C12.7619 6.28626 12.5663 6.57878 12.318 6.82726C12.0697 7.07573 11.7788 7.26917 11.4454 7.40756C11.1121 7.5491 10.7566 7.61987 10.379 7.61987C9.60675 7.61987 8.96551 7.3651 8.45523 6.85556C8.2069 6.61338 8.01129 6.32244 7.86842 5.98274C7.72554 5.64305 7.6541 5.26562 7.6541 4.85044C7.6541 4.43211 7.72554 4.05311 7.86842 3.71341C8.01129 3.37058 8.2069 3.07806 8.45523 2.83588C8.70016 2.59369 8.98762 2.40654 9.31759 2.27444C9.64757 2.14234 10.0014 2.07629 10.379 2.07629C10.7566 2.07629 11.1121 2.14706 11.4454 2.2886C11.7788 2.42699 12.0697 2.61885 12.318 2.86418C12.5663 3.11266 12.7619 3.40675 12.9048 3.74644C13.0477 4.08299 13.1191 4.45098 13.1191 4.85044ZM12.0425 4.841C12.0425 4.61454 12.0118 4.38493 11.9506 4.15218C11.8894 3.91943 11.7924 3.71184 11.6597 3.52941C11.5271 3.34384 11.3553 3.19444 11.1444 3.08121C10.9335 2.96483 10.6783 2.90665 10.379 2.90665C10.0898 2.90665 9.84147 2.96483 9.63396 3.08121C9.42645 3.19444 9.25636 3.34384 9.12369 3.52941C8.99102 3.71184 8.89407 3.91943 8.83283 4.15218C8.7716 4.38493 8.74098 4.61454 8.74098 4.841C8.74098 5.06746 8.7733 5.2955 8.83794 5.5251C8.90597 5.75156 9.00803 5.95758 9.1441 6.14315C9.28017 6.32558 9.45026 6.47655 9.65438 6.59608C9.86189 6.71245 10.1034 6.77064 10.379 6.77064C10.6681 6.77064 10.9165 6.71245 11.124 6.59608C11.3349 6.47655 11.5084 6.32558 11.6444 6.14315C11.7805 5.95758 11.8809 5.75156 11.9455 5.5251C12.0101 5.2955 12.0425 5.06746 12.0425 4.841Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M14.2315 2.22254L15.298 2.11403L15.3184 3.48695C15.4715 3.30767 15.6331 3.13153 15.8032 2.95854C15.9733 2.78555 16.1604 2.64244 16.3645 2.52921C16.572 2.41283 16.805 2.35465 17.0635 2.35465C17.3663 2.35465 17.6317 2.44743 17.8596 2.633C18.0875 2.81543 18.2202 3.08435 18.2576 3.43977C18.4039 3.26993 18.5603 3.10165 18.727 2.93495C18.8937 2.76825 19.0774 2.62986 19.2781 2.51977C19.4788 2.40969 19.7034 2.35465 19.9517 2.35465C20.2851 2.35465 20.5657 2.45844 20.7936 2.66603C21.025 2.87362 21.1474 3.17871 21.161 3.58131C21.1712 3.69769 21.1815 3.82822 21.1917 3.9729C21.2019 4.11444 21.2104 4.27328 21.2172 4.44941C21.2342 4.74822 21.2478 5.1288 21.258 5.59115C21.2716 6.05037 21.2784 6.60237 21.2784 7.24715L20.2119 7.29433C20.2119 6.72189 20.2102 6.23279 20.2068 5.82705C20.2034 5.41816 20.2 5.08004 20.1966 4.81269L20.1813 4.03895C20.1609 3.52941 20.0112 3.27465 19.7323 3.27465C19.6064 3.27465 19.4737 3.32812 19.3343 3.43506C19.1948 3.542 19.0706 3.65994 18.9618 3.7889C18.9175 3.83923 18.875 3.88955 18.8342 3.93987C18.7968 3.98705 18.7594 4.03581 18.7219 4.08613C18.6471 4.18678 18.5757 4.28428 18.5076 4.37864C18.4396 4.473 18.3801 4.55635 18.329 4.62869C18.3358 4.76709 18.3426 4.91963 18.3494 5.08633C18.3596 5.25304 18.3664 5.44175 18.3698 5.65249C18.3766 5.86322 18.3801 6.09912 18.3801 6.36018C18.3801 6.62124 18.3801 6.9169 18.3801 7.24715L17.3901 7.29433C17.3901 6.72189 17.3833 6.23279 17.3697 5.82705C17.3595 5.41816 17.3476 5.08004 17.334 4.81269C17.3272 4.65543 17.3187 4.51232 17.3085 4.38336C17.3017 4.2544 17.2932 4.1396 17.283 4.03895C17.2626 3.52941 17.1129 3.27465 16.8339 3.27465C16.7489 3.27465 16.6587 3.30138 16.5635 3.35485C16.3764 3.46494 16.1927 3.63006 16.0124 3.85023C15.9682 3.9037 15.9239 3.95875 15.8797 4.01536C15.8389 4.07198 15.7981 4.12702 15.7572 4.18049C15.6926 4.26856 15.6178 4.37078 15.5327 4.48716C15.4511 4.60353 15.3864 4.69475 15.3388 4.7608L15.3847 7.24715L14.3693 7.29433L14.2315 2.22254Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M22.7021 2.22254L23.7685 2.11403L23.7889 3.48695C23.942 3.30767 24.1036 3.13153 24.2737 2.95854C24.4438 2.78555 24.6309 2.64244 24.835 2.52921C25.0425 2.41283 25.2755 2.35465 25.5341 2.35465C25.8368 2.35465 26.1022 2.44743 26.3301 2.633C26.558 2.81543 26.6907 3.08435 26.7281 3.43977C26.8744 3.26993 27.0309 3.10165 27.1976 2.93495C27.3643 2.76825 27.548 2.62986 27.7487 2.51977C27.9494 2.40969 28.1739 2.35465 28.4222 2.35465C28.7556 2.35465 29.0363 2.45844 29.2642 2.66603C29.4955 2.87362 29.618 3.17871 29.6316 3.58131C29.6418 3.69769 29.652 3.82822 29.6622 3.9729C29.6724 4.11444 29.6809 4.27328 29.6877 4.44941C29.7047 4.74822 29.7183 5.1288 29.7285 5.59115C29.7421 6.05037 29.7489 6.60237 29.7489 7.24715L28.6825 7.29433C28.6825 6.72189 28.6808 6.23279 28.6774 5.82705C28.674 5.41816 28.6706 5.08004 28.6672 4.81269L28.6519 4.03895C28.6314 3.52941 28.4818 3.27465 28.2028 3.27465C28.0769 3.27465 27.9443 3.32812 27.8048 3.43506C27.6653 3.542 27.5412 3.65994 27.4323 3.7889C27.3881 3.83923 27.3456 3.88955 27.3047 3.93987C27.2673 3.98705 27.2299 4.03581 27.1925 4.08613C27.1176 4.18678 27.0462 4.28428 26.9782 4.37864C26.9101 4.473 26.8506 4.55635 26.7996 4.62869C26.8064 4.76709 26.8132 4.91963 26.82 5.08633C26.8302 5.25304 26.837 5.44175 26.8404 5.65249C26.8472 5.86322 26.8506 6.09912 26.8506 6.36018C26.8506 6.62124 26.8506 6.9169 26.8506 7.24715L25.8607 7.29433C25.8607 6.72189 25.8539 6.23279 25.8403 5.82705C25.83 5.41816 25.8181 5.08004 25.8045 4.81269C25.7977 4.65543 25.7892 4.51232 25.779 4.38336C25.7722 4.2544 25.7637 4.1396 25.7535 4.03895C25.7331 3.52941 25.5834 3.27465 25.3045 3.27465C25.2194 3.27465 25.1293 3.30138 25.034 3.35485C24.8469 3.46494 24.6632 3.63006 24.4829 3.85023C24.4387 3.9037 24.3945 3.95875 24.3503 4.01536C24.3094 4.07198 24.2686 4.12702 24.2278 4.18049C24.1632 4.26856 24.0883 4.37078 24.0033 4.48716C23.9216 4.60353 23.857 4.69475 23.8094 4.7608L23.8553 7.24715L22.8398 7.29433L22.7021 2.22254Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M32.5759 0.849623C32.5759 1.03205 32.5027 1.18931 32.3564 1.32142C32.2136 1.45037 32.0418 1.51485 31.8411 1.51485C31.6438 1.51485 31.4737 1.45037 31.3308 1.32142C31.1913 1.18931 31.1216 1.03205 31.1216 0.849623C31.1216 0.66405 31.1913 0.505213 31.3308 0.373111C31.4737 0.237863 31.6438 0.170239 31.8411 0.170239C32.0418 0.170239 32.2136 0.237863 32.3564 0.373111C32.5027 0.505213 32.5759 0.66405 32.5759 0.849623ZM31.2798 2.54808L32.336 2.51034L32.285 4.77495C32.268 5.39772 32.2578 5.88681 32.2544 6.24223C32.2442 6.67628 32.2391 7.01755 32.2391 7.26602H31.193C31.1964 7.09618 31.1998 6.91061 31.2032 6.70931C31.21 6.50486 31.2151 6.28626 31.2185 6.05351C31.2253 5.64777 31.2355 5.15553 31.2491 4.5768L31.2798 2.54808Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M35.0507 7.36038L33.9536 7.48777L33.8515 4.841C33.8447 4.66172 33.8379 4.46986 33.8311 4.26541C33.8243 4.05782 33.8175 3.86282 33.8107 3.68039C33.8039 3.49482 33.7988 3.34856 33.7954 3.24162C33.7818 2.79813 33.7716 2.46473 33.7648 2.24142L34.9282 2.22254L34.9486 3.58131C35.0609 3.40203 35.1885 3.23376 35.3313 3.07649C35.4742 2.91608 35.629 2.77454 35.7957 2.65188C35.9624 2.52921 36.1393 2.43013 36.3264 2.35465C36.5169 2.27916 36.7159 2.23513 36.9234 2.22254C37.1853 2.20682 37.4116 2.22726 37.6021 2.28388C37.7926 2.34049 37.9558 2.41912 38.0919 2.51977C38.228 2.61728 38.3402 2.73523 38.4287 2.87362C38.5205 3.01516 38.5903 3.1567 38.6379 3.29823C38.6889 3.44292 38.7247 3.58917 38.7451 3.737C38.7689 3.88169 38.7842 4.01379 38.791 4.13331C38.8114 4.6743 38.8165 5.21844 38.8063 5.76572C38.7961 6.313 38.7842 6.88073 38.7706 7.4689L37.7245 7.43587C37.7517 6.92948 37.7755 6.42309 37.796 5.91669C37.8198 5.4103 37.8181 4.89919 37.7909 4.38336C37.7909 4.27328 37.7772 4.14746 37.75 4.00593C37.7228 3.86124 37.6735 3.71813 37.6021 3.57659C37.551 3.47909 37.4847 3.39259 37.403 3.31711C37.3214 3.24476 37.2211 3.18972 37.102 3.15198C36.9863 3.11424 36.8503 3.10637 36.6938 3.12839C36.425 3.16613 36.1529 3.34699 35.8773 3.67095C35.6052 3.98548 35.3058 4.46199 34.9792 5.10049L35.015 6.30828C35.0184 6.45926 35.0218 6.59136 35.0252 6.70459C35.0286 6.81782 35.032 6.91375 35.0354 6.99238C35.0422 7.17481 35.0473 7.29748 35.0507 7.36038Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M44.6591 2.82172L44.6693 1.88285L45.6695 1.91116L45.6389 7.33208C45.6355 7.43272 45.627 7.53495 45.6133 7.63874C45.5997 7.74254 45.5793 7.84476 45.5521 7.94541C45.4433 8.35744 45.2306 8.7333 44.9143 9.073C44.7544 9.2397 44.5724 9.3891 44.3683 9.5212C44.1608 9.65016 43.9294 9.75553 43.6743 9.8373C43.4192 9.92223 43.1402 9.9757 42.8375 9.99771C42.436 10.0103 42.0482 9.97098 41.674 9.87976C41.3407 9.79799 41.0175 9.65488 40.7045 9.45043C40.3915 9.24599 40.1585 8.96134 40.0054 8.59648L40.9903 8.20018C41.1093 8.44866 41.2777 8.64052 41.4954 8.77577C41.7166 8.91416 41.9411 9.0038 42.169 9.04469C42.4173 9.09501 42.6793 9.10445 42.9548 9.073C43.0739 9.05098 43.1844 9.02267 43.2865 8.98807C43.392 8.95347 43.4889 8.91416 43.5774 8.87012C43.7509 8.77891 43.8988 8.67669 44.0213 8.56346C44.1472 8.45337 44.2475 8.337 44.3224 8.21433C44.3598 8.15143 44.3921 8.09009 44.4193 8.03033C44.4499 7.97057 44.4771 7.91238 44.501 7.85577C44.5452 7.74254 44.5741 7.63874 44.5877 7.54438C44.6047 7.45317 44.6132 7.3824 44.6132 7.33208V6.71402C44.4091 6.89331 44.1965 7.0317 43.9754 7.1292C43.7577 7.22356 43.5552 7.29276 43.3681 7.33679C43.2593 7.36196 43.1504 7.3824 43.0416 7.39813C42.9361 7.41385 42.8307 7.42329 42.7252 7.42643C41.9224 7.42643 41.259 7.17953 40.7351 6.68572C40.4834 6.44982 40.2844 6.16203 40.1381 5.82233C39.9952 5.48264 39.9238 5.10049 39.9238 4.67587C39.9238 4.24811 40.0037 3.86753 40.1636 3.53413C40.3269 3.19759 40.5378 2.91451 40.7964 2.6849C41.0583 2.4553 41.3526 2.28073 41.6791 2.16121C42.0057 2.03854 42.3357 1.97721 42.6691 1.97721C42.9004 2.00237 43.1334 2.04955 43.3681 2.11875C43.5689 2.17851 43.7849 2.26343 44.0162 2.37352C44.2475 2.4836 44.4618 2.633 44.6591 2.82172ZM42.7252 6.52059C43.181 6.52059 43.591 6.3822 43.955 6.10541C44.125 5.97645 44.2696 5.82233 44.3887 5.64305C44.5078 5.46062 44.5894 5.2609 44.6336 5.04387V4.42582C44.5962 4.20251 44.5163 3.99964 44.3938 3.81721C44.2713 3.63164 44.1216 3.4728 43.9448 3.3407C43.5774 3.06391 43.1606 2.92552 42.6946 2.92552C42.4497 2.92552 42.2234 2.9727 42.0159 3.06706C41.8118 3.15827 41.6349 3.28565 41.4852 3.44921C41.339 3.61276 41.2233 3.8062 41.1382 4.02952C41.0532 4.25283 41.0107 4.49345 41.0107 4.75136C41.0107 5.00927 41.0532 5.24674 41.1382 5.46377C41.2233 5.67765 41.3424 5.86322 41.4954 6.02049C41.6451 6.17461 41.8237 6.29727 42.0312 6.38849C42.2421 6.47655 42.4735 6.52059 42.7252 6.52059Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M56.3597 6.02521C56.3257 6.24538 56.2594 6.44038 56.1607 6.61023C56.0586 6.78322 55.9328 6.93262 55.7831 7.05843C55.6334 7.18425 55.4667 7.29119 55.283 7.37925C55.0857 7.46732 54.8918 7.53652 54.7013 7.58684C54.4972 7.64031 54.2914 7.67806 54.0839 7.70007C53.8764 7.72524 53.6774 7.73782 53.4869 7.73782C53.2249 7.73782 52.9664 7.71108 52.7113 7.65761C52.4561 7.60729 52.2061 7.53652 51.9612 7.44531C51.7128 7.35095 51.4679 7.23929 51.2264 7.11033C50.9882 6.98137 50.7518 6.83984 50.5171 6.68572L51.2621 5.87423C51.5274 6.09126 51.7894 6.26267 52.0479 6.38849C52.3098 6.51115 52.5446 6.60394 52.7521 6.66685C52.997 6.74548 53.2283 6.7958 53.446 6.81782C53.691 6.8304 53.9189 6.8131 54.1298 6.76592C54.3441 6.7156 54.5295 6.6464 54.686 6.55833C55.0126 6.37276 55.1946 6.13529 55.232 5.84592C55.2422 5.72955 55.2201 5.62261 55.1657 5.5251C55.0602 5.33639 54.8561 5.17755 54.5533 5.04859C54.4819 5.01714 54.4071 4.98883 54.3288 4.96367C54.254 4.93536 54.1774 4.90863 54.0992 4.88346C53.9359 4.83628 53.7675 4.79539 53.594 4.7608C53.4239 4.72305 53.2589 4.6916 53.0991 4.66644C52.9052 4.63184 52.701 4.58938 52.4867 4.53905C52.2724 4.48558 52.0615 4.41796 51.854 4.33618C51.6465 4.25126 51.4509 4.14589 51.2672 4.02008C51.0801 3.89112 50.9219 3.73858 50.7926 3.56244C50.6566 3.3863 50.5528 3.18029 50.4814 2.94439C50.4133 2.70849 50.3912 2.438 50.415 2.1329C50.4354 1.87499 50.4933 1.64696 50.5885 1.4488C50.7688 1.04935 51.0597 0.730102 51.4611 0.491059C51.6516 0.377829 51.8557 0.28347 52.0734 0.207983C52.2911 0.132496 52.5156 0.0790255 52.747 0.0475726C52.9817 0.0129743 53.2147 -0.00275213 53.446 0.000393162C53.759 0.0129743 54.0805 0.0585811 54.4105 0.137213C54.703 0.20641 55.0058 0.308632 55.3187 0.44388C55.6351 0.579127 55.9226 0.761554 56.1811 0.991161L55.6096 1.82624C55.4089 1.6155 55.1776 1.44723 54.9156 1.32142C54.6537 1.19246 54.4071 1.0981 54.1757 1.03834C53.9172 0.972289 53.6604 0.934546 53.4052 0.92511C53.0957 0.92511 52.8201 0.967571 52.5786 1.05249C52.3371 1.13742 52.1346 1.24908 51.9714 1.38747C51.8047 1.52272 51.6771 1.67526 51.5886 1.84511C51.5036 2.01495 51.4611 2.18166 51.4611 2.34521C51.4611 2.50562 51.5121 2.66131 51.6142 2.81229C51.7196 2.96326 51.8642 3.10008 52.0479 3.22275C52.4357 3.48066 52.9188 3.64579 53.4971 3.71813C53.6229 3.73071 53.7471 3.74801 53.8696 3.77003C53.992 3.7889 54.1162 3.81249 54.2421 3.8408C54.487 3.89741 54.7217 3.96975 54.9463 4.05782C55.1742 4.14589 55.3817 4.25126 55.5688 4.37393C55.7593 4.50288 55.9175 4.64599 56.0433 4.80326C56.1726 4.96681 56.2662 5.15081 56.324 5.35526C56.3852 5.55656 56.3971 5.77987 56.3597 6.02521Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M62.6055 4.85044C62.6055 5.24674 62.534 5.61317 62.3911 5.94972C62.2483 6.28626 62.0527 6.57878 61.8043 6.82726C61.556 7.07573 61.2651 7.26917 60.9318 7.40756C60.5984 7.5491 60.2429 7.61987 59.8653 7.61987C59.0931 7.61987 58.4518 7.3651 57.9416 6.85556C57.6932 6.61338 57.4976 6.32244 57.3547 5.98274C57.2119 5.64305 57.1404 5.26562 57.1404 4.85044C57.1404 4.43211 57.2119 4.05311 57.3547 3.71341C57.4976 3.37058 57.6932 3.07806 57.9416 2.83588C58.1865 2.59369 58.4739 2.40654 58.8039 2.27444C59.1339 2.14234 59.4877 2.07629 59.8653 2.07629C60.2429 2.07629 60.5984 2.14706 60.9318 2.2886C61.2651 2.42699 61.556 2.61885 61.8043 2.86418C62.0527 3.11266 62.2483 3.40675 62.3911 3.74644C62.534 4.08299 62.6055 4.45098 62.6055 4.85044ZM61.5288 4.841C61.5288 4.61454 61.4982 4.38493 61.4369 4.15218C61.3757 3.91943 61.2787 3.71184 61.1461 3.52941C61.0134 3.34384 60.8416 3.19444 60.6307 3.08121C60.4198 2.96483 60.1646 2.90665 59.8653 2.90665C59.5761 2.90665 59.3278 2.96483 59.1203 3.08121C58.9128 3.19444 58.7427 3.34384 58.61 3.52941C58.4773 3.71184 58.3804 3.91943 58.3192 4.15218C58.2579 4.38493 58.2273 4.61454 58.2273 4.841C58.2273 5.06746 58.2596 5.2955 58.3243 5.5251C58.3923 5.75156 58.4944 5.95758 58.6304 6.14315C58.7665 6.32558 58.9366 6.47655 59.1407 6.59608C59.3482 6.71245 59.5897 6.77064 59.8653 6.77064C60.1544 6.77064 60.4028 6.71245 60.6103 6.59608C60.8212 6.47655 60.9947 6.32558 61.1308 6.14315C61.2668 5.95758 61.3672 5.75156 61.4318 5.5251C61.4965 5.2955 61.5288 5.06746 61.5288 4.841Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M68.8614 4.85044C68.8614 5.24674 68.79 5.61317 68.6471 5.94972C68.5042 6.28626 68.3086 6.57878 68.0603 6.82726C67.8119 7.07573 67.5211 7.26917 67.1877 7.40756C66.8543 7.5491 66.4988 7.61987 66.1212 7.61987C65.349 7.61987 64.7078 7.3651 64.1975 6.85556C63.9492 6.61338 63.7536 6.32244 63.6107 5.98274C63.4678 5.64305 63.3964 5.26562 63.3964 4.85044C63.3964 4.43211 63.4678 4.05311 63.6107 3.71341C63.7536 3.37058 63.9492 3.07806 64.1975 2.83588C64.4424 2.59369 64.7299 2.40654 65.0599 2.27444C65.3898 2.14234 65.7436 2.07629 66.1212 2.07629C66.4988 2.07629 66.8543 2.14706 67.1877 2.2886C67.5211 2.42699 67.8119 2.61885 68.0603 2.86418C68.3086 3.11266 68.5042 3.40675 68.6471 3.74644C68.79 4.08299 68.8614 4.45098 68.8614 4.85044ZM67.7847 4.841C67.7847 4.61454 67.7541 4.38493 67.6929 4.15218C67.6317 3.91943 67.5347 3.71184 67.402 3.52941C67.2694 3.34384 67.0976 3.19444 66.8867 3.08121C66.6757 2.96483 66.4206 2.90665 66.1212 2.90665C65.8321 2.90665 65.5838 2.96483 65.3762 3.08121C65.1687 3.19444 64.9986 3.34384 64.866 3.52941C64.7333 3.71184 64.6363 3.91943 64.5751 4.15218C64.5139 4.38493 64.4833 4.61454 64.4833 4.841C64.4833 5.06746 64.5156 5.2955 64.5802 5.5251C64.6483 5.75156 64.7503 5.95758 64.8864 6.14315C65.0225 6.32558 65.1925 6.47655 65.3967 6.59608C65.6042 6.71245 65.8457 6.77064 66.1212 6.77064C66.4104 6.77064 66.6587 6.71245 66.8662 6.59608C67.0772 6.47655 67.2506 6.32558 67.3867 6.14315C67.5228 5.95758 67.6231 5.75156 67.6878 5.5251C67.7524 5.2955 67.7847 5.06746 67.7847 4.841Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
        <path
          d='M71.2393 7.36038L70.1422 7.48777L70.0401 4.841C70.0333 4.66172 70.0265 4.46986 70.0197 4.26541C70.0129 4.05782 70.0061 3.86282 69.9993 3.68039C69.9925 3.49482 69.9874 3.34856 69.984 3.24162C69.9704 2.79813 69.9602 2.46473 69.9534 2.24142L71.1168 2.22254L71.1372 3.58131C71.2495 3.40203 71.3771 3.23376 71.5199 3.07649C71.6628 2.91608 71.8176 2.77454 71.9843 2.65188C72.151 2.52921 72.3279 2.43013 72.515 2.35465C72.7055 2.27916 72.9045 2.23513 73.112 2.22254C73.3739 2.20682 73.6002 2.22726 73.7906 2.28388C73.9812 2.34049 74.1444 2.41912 74.2805 2.51977C74.4166 2.61728 74.5288 2.73523 74.6173 2.87362C74.7091 3.01516 74.7789 3.1567 74.8265 3.29823C74.8775 3.44292 74.9133 3.58917 74.9337 3.737C74.9575 3.88169 74.9728 4.01379 74.9796 4.13331C75 4.6743 75.0051 5.21844 74.9949 5.76572C74.9847 6.313 74.9728 6.88073 74.9592 7.4689L73.9131 7.43587C73.9403 6.92948 73.9641 6.42309 73.9846 5.91669C74.0084 5.4103 74.0067 4.89919 73.9795 4.38336C73.9795 4.27328 73.9658 4.14746 73.9386 4.00593C73.9114 3.86124 73.8621 3.71813 73.7906 3.57659C73.7396 3.47909 73.6733 3.39259 73.5916 3.31711C73.51 3.24476 73.4096 3.18972 73.2906 3.15198C73.1749 3.11424 73.0388 3.10637 72.8824 3.12839C72.6136 3.16613 72.3415 3.34699 72.0659 3.67095C71.7938 3.98548 71.4944 4.46199 71.1678 5.10049L71.2036 6.30828C71.207 6.45926 71.2104 6.59136 71.2138 6.70459C71.2172 6.81782 71.2206 6.91375 71.224 6.99238C71.2308 7.17481 71.2359 7.29748 71.2393 7.36038Z'
          fill='#4A4E5B'
          fillOpacity='0.8'
        />
      </svg>
    </div>
  )
}
