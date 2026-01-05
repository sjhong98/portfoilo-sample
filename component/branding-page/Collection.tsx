'use client';

// 0527 0636

import './collection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Slider from 'react-slick';

import Collection2UpAndDown from '@/component/branding-page/Collection2UpAndDown';
import Header from '@/component/branding-page/Header/Header';
import IntersectionAppearDiv from '@/component/branding-page/IntersectionAppearDiv/IntersectionAppearDiv';
import Footer from '@/component/branding-page/Footer/Footer';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useDelayRouter from '@/component/branding-page/useDelayRouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface PropsType {
  collectionNum?: number;
  mainTitle: string;
  mainSubtitle: string;
  outlineTitle: string;
  outlineSubtitle: string;
  outlineContent: string;
  outlineTemplateTitle: string;
  outlineTemplateContent: string;
  section1Title: string;
  section2Title: string;
  section3Title: string;
  section4Title: string;
  main?: any;
  outlineImg: any;
  banner: any;
  section1?: any;
  section2: any;
  section3: any;
  section4: any;
  is2and3equal?: boolean;
  attendants?: number;
  outlineSubtitleMobile: string;
  outlineCaption: string;
}

export default function Collection(props: PropsType) {
  const {
    outlineCaption,
    outlineSubtitleMobile,
    collectionNum,
    mainTitle,
    mainSubtitle,
    outlineTitle,
    outlineSubtitle,
    outlineContent,
    outlineTemplateTitle,
    outlineTemplateContent,
    section1Title,
    section2Title,
    section3Title,
    section4Title,
    section1,
    section2,
    section3,
    section4,
    main,
    banner,
    outlineImg,
  } = props;

  const section2Ref = useRef(null);
  const isCollection = usePathname().split('/')[1] === 'collection';
  const isAward = usePathname().split('/')[1] === 'award';
  const curCollectionNum = usePathname().split('/')[2];
  const [isPc, setIsPc] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [section2_1, setSection2_1] = useState('');
  const [section2_2, setSection2_2] = useState('');
  const [section2_3, setSection2_3] = useState('');
  const [section2_4, setSection2_4] = useState('');
  const [section2_5, setSection2_5] = useState('');
  const [section2_6, setSection2_6] = useState('');
  const [section2_7, setSection2_7] = useState('');
  const [section2_8, setSection2_8] = useState('');
  const [section2_9, setSection2_9] = useState('');
  const [section2_10, setSection2_10] = useState('');
  const [section2_11, setSection2_11] = useState('');
  const [section2_12, setSection2_12] = useState('');
  const [section2_13, setSection2_13] = useState('');

  useEffect(() => {
    let observer;
    let flag = false;

    if (window.innerWidth > 640) {
      gsap.registerPlugin(ScrollTrigger);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.grid-container',
            start: 'top top',
            markers: false,
            end: 'bottom bottom',
            scrub: true,
            pin: '.grid-container',
            anticipatePin: 0,
          },
        })
        .set('.gridBlock:not(.centerBlock)', { autoAlpha: 1 })
        .to('.gridBlock:not(.centerBlock)', { duration: 0.1, autoAlpha: 1 }, 0.001)
        .from('.gridLayer', {
          scale: 4,
          ease: 'none',
        });
    } else {
      setSection2_1('position-0');
      setSection2_2('position-0');
      setSection2_3('position-0');
      setSection2_4('position-0');
      setSection2_5('position-0');
      setSection2_6('position-0');
      setSection2_7('position-0');
      setSection2_8('position-0');
      setSection2_9('position-0');
      setSection2_10('position-0');
      setSection2_11('position-0');
      setSection2_12('position-0');
      setSection2_13('position-0');

      const handleSection2ShowUp = () => {
        if (flag) {
          setTimeout(() => {
            setSection2_1('move-up-m');
            setSection2_7('move-up-m');
            setTimeout(() => {
              setSection2_3('move-up-m');
              setSection2_5('move-up-m');
              setSection2_13('move-up-m');
              setTimeout(() => {
                setSection2_8('move-up-m');
                setTimeout(() => {
                  setSection2_2('move-up-m');
                  setSection2_4('move-up-m');
                  setSection2_6('move-up-m');
                  setSection2_9('move-up-m');
                  setSection2_10('move-up-m');
                  setSection2_11('move-up-m');
                  setSection2_12('move-up-m');
                }, 200);
              }, 100);
            }, 200);
          }, 300);
        } else flag = true;
      };

      if (section2Ref.current) {
        observer = new IntersectionObserver(handleSection2ShowUp);
        observer.observe(section2Ref.current);
      }
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsPc(false);
    } else if (window.innerWidth < 1024) {
      setIsTablet(true);
    }

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsPc(false);
      } else if (window.innerWidth < 1024) {
        setIsTablet(true);
      } else setIsPc(true);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header isCollection={true} color="#FFF" />
      <div className="overflow-hidden z-[2]">
        {/*  Title  */}
        <div className={'bg-[#ddd] w-screen h-screen fixed flex flex-col justify-center items-center'}>
          <video
            className="absolute top-0 w-screen h-screen object-cover"
            src={main}
            preload="none"
            autoPlay
            loop
            muted
          />
          {props.main ? <div className="absolute w-screen h-screen top-0 bg-black opacity-[0.5] z-[1]" /> : <></>}
          {isAward ? (
            <div className="flex flex-col">
              <p
                className="font-[kh-b] text-white lg:text-[5.625rem] sm:text-[3rem] text-[2rem] z-[2] text-center"
                style={{ lineHeight: '1.5rem' }}
              >
                {mainTitle}
              </p>
              <p className="font-[kh-b] text-white lg:text-[5.625rem] sm:text-[3rem] text-[2rem] z-[2]  text-center">
                
              </p>
            </div>
          ) : (
            <p
              className="font-[kh-b] text-white lg:text-[5.625rem] sm:text-[3rem] text-[2rem] z-[2]"
              style={{ textTransform: 'uppercase' }}
            >
              {mainTitle}
            </p>
          )}

          <pre
            className="font-[kh-l] text-white lg:text-[1.5rem] sm:text-[1.2rem] text-[1.125rem] text-center z-[2] sm:mt-0 mt-[1rem]"
            style={{ textTransform: 'uppercase' }}
          >
            {mainSubtitle}
          </pre>
          <div className="absolute sm:bottom-[3.73rem] bottom-[2.51rem] z-[20] floating-anim">
            {isPc ? (
              isTablet ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
                  <path
                    d="M-9.39448e-07 21.4921L1.41419 20.0779L7.414 26.0777L7.414 3.24076e-07L9.41406 4.11502e-07L9.41406 26.0775L15.4137 20.0779L16.8279 21.4921L8.41394 29.9061L-9.39448e-07 21.4921Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="52" viewBox="0 0 29 52" fill="none">
                  <path
                    d="M2.12994 35.7279L16.2721 49.8701L14.8579 51.2843L0.715727 37.1421L2.12994 35.7279Z"
                    fill="white"
                  />
                  <path d="M13.4436 49.8701L27.5858 35.7279L29 37.1421L14.8579 51.2843L13.4436 49.8701Z" fill="white" />
                  <path d="M16 -5.6825e-07L16 50L14 50L14 -6.55673e-07L16 -5.6825e-07Z" fill="white" />
                </svg>
              )
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
                <path
                  d="M-9.39448e-07 21.4921L1.41419 20.0779L7.414 26.0777L7.414 3.24076e-07L9.41406 4.11502e-07L9.41406 26.0775L15.4137 20.0779L16.8279 21.4921L8.41394 29.9061L-9.39448e-07 21.4921Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div id="main-placeholder" className="w-screen h-screen relative" />

        {/*  Outline  */}
        <div
          className="w-screen h-auto flex flex-col items-center relative overflow-hidden"
          style={{
            backgroundColor: '#fff',
            backgroundImage: 'url(/images/collection_background_theme.png)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-screen h-[100vh] flex flex-col justify-center items-center">
            {isPc ? (
              <p
                className="text-black lg:text-[4.5rem] sm:text-[3.2rem] text-[2rem] font-[kh-b] sm:mt-0 mt-[2rem]"
                style={{ textTransform: 'uppercase' }}
              >
                {outlineTitle}
              </p>
            ) : (
              <pre
                className="text-black lg:text-[4.5rem] sm:text-[3.2rem] text-[2rem] font-[kh-b] sm:mt-0 mt-[2rem]"
                style={{ textTransform: 'uppercase' }}
              >
                {outlineTitle}
              </pre>
            )}
            {isPc ? (
              <pre
                className="text-center text-black lg:text-[2.25rem] text-[1.6rem] font-[nt-r] mt-[2rem]"
                style={{
                  lineHeight: '3rem',
                  letterSpacing: '-0.0225rem',
                  textTransform: 'uppercase',
                }}
              >
                {outlineSubtitle}
              </pre>
            ) : (
              <pre
                className="text-center text-black text-[1.375rem] font-[nt-r] mt-[2rem] w-[19rem]"
                style={{
                  lineHeight: '2rem',
                  letterSpacing: '-0.0225rem',
                  textTransform: 'uppercase',
                }}
              >
                {outlineSubtitleMobile}
              </pre>
            )}

            <pre
              className="text-center text-[#666] sm:text-[1.125rem] text-[0.6875rem] font-[kh-l] sm:mt-[3.75rem] mt-[5.75rem]"
              style={{
                lineHeight: isPc ? '1.875rem' : '1.25rem',
                letterSpacing: '-0.0225rem',
                textTransform: 'uppercase',
              }}
            >
              {outlineContent}
            </pre>
          </div>
          {isPc ? (
            isTablet ? (
              <div className="flex flex-col">
                <Image
                  priority={true}
                  width={1000}
                  height={1000}
                  src={outlineImg}
                  alt="..."
                  className="w-full object-cover px-[5.2vw]"
                />
                <p
                  className="w-full text-right mt-[1rem] font-[kh-l] text-[#999] pr-[5.2vw] text-[1rem]"
                  style={{ textTransform: 'uppercase' }}
                >
                  {outlineCaption}
                </p>
              </div>
            ) : (
              <></>
            )
          ) : (
            <div className="flex flex-col">
              <Image
                priority={true}
                width={1000}
                height={1000}
                src={outlineImg}
                alt="..."
                className="w-[20rem] h-[24rem] object-cover"
              />
              <p
                className="w-full text-right mt-[1rem] font-[kh-l] text-[#999] text-[0.6875rem]"
                style={{ textTransform: 'uppercase' }}
              >
                {outlineCaption}
              </p>
            </div>
          )}
          <div className="w-screen sm:h-auto h-[80vh] sm:pb-[10rem] bg-white flex justify-center overflow-hidden gap-[4.75rem]">
            <div
              className={`sm:w-[40.5rem] w-[20rem] h-[52rem] flex flex-col sm:pt-[11rem] pt-[4rem] ${+curCollectionNum === 5 ? 'sm:gap-[2rem]' : 'sm:gap-[6.12rem]'} gap-[1rem] relative`}
            >
              <p
                className="sm:text-[3rem] text-[1.375rem] font-[kh-b]"
                style={{
                  lineHeight: '3.75rem',
                  letterSpacing: '-0.03rem',
                  textTransform: 'uppercase',
                }}
              >
                {outlineTemplateTitle}
              </p>
              <div className="flex w-full sm:gap-[2.5rem] gap-[0.94rem]">
                <p
                  className="w-[3rem] sm:text-[1.5rem] text-[0.9375rem] sm:font-[nt-m] font-[nt-l]"
                  style={{ lineHeight: isPc ? '2.5rem' : '1.625rem', letterSpacing: '-0.015rem' }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>일정</span>
                  <span style={{ whiteSpace: 'nowrap' }}>장소</span>
                  <span style={{ whiteSpace: 'nowrap' }}>주최</span>
                  <span style={{ whiteSpace: 'nowrap' }}>참여</span>
                </p>
                <pre
                  className="sm:w-auto w-[17.81rem] sm:text-[1.5rem] text-[0.9375rem] font-[nt-l]"
                  style={{
                    lineHeight: isPc ? '2.5rem' : '1.625rem',
                    letterSpacing: '-0.015rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {outlineTemplateContent}
                </pre>
              </div>
              <div
                className="sm:w-[35rem] w-screen absolute sm:bottom-0 bottom-[45vh] sm:left-auto left-[-7vw] flex flex-col justify-between border-t-[0.0625rem] border-[#161616] sm:mt-0 mt-[3rem]"
                style={{
                  height:
                    props.section4Title && props.section3Title !== props.section2Title
                      ? isPc
                        ? '12.75rem'
                        : '7.5rem'
                      : isPc
                        ? '9.56rem'
                        : '5.63rem',
                }}
              >
                <div className="border-b-[0.0625rem] border-[#161616] w-full sm:h-[3.19rem] h-[1.87rem] flex">
                  <div className="sm:w-[9rem] w-[12rem] h-full flex justify-center items-center border-r-[0.0625rem] border-[#161616] bg-[#fefefe] relative">
                    <p className="font-[kh-b] sm:text-[1.125rem] text-[0.8125rem]">SECTION 1.</p>
                  </div>
                  <div className="w-[26rem] h-full flex items-center pl-[1.94rem]">
                    <p
                      className="font-[kh-l] sm:text-[1.125rem] text-[0.8125rem]"
                      style={{ textTransform: 'uppercase' }}
                    >
                      {section1Title}
                    </p>
                  </div>
                </div>
                <div className="border-b-[0.0625rem] border-[#161616] w-full sm:h-[3.19rem] h-[1.87rem] flex">
                  <div className="sm:w-[9rem] w-[12rem] h-full flex justify-center items-center border-r-[0.0625rem] border-[#161616] bg-[#fefefe]">
                    <p className="font-[kh-b] sm:text-[1.125rem] text-[0.8125rem]">SECTION 2.</p>
                  </div>
                  <div className="w-[26rem] h-full flex items-center pl-[1.94rem]">
                    <p
                      className="font-[kh-l] sm:text-[1.125rem] text-[0.8125rem]"
                      style={{ textTransform: 'uppercase' }}
                    >
                      {section2Title}
                    </p>
                  </div>
                </div>
                <div className="border-b-[0.0625rem] border-[#161616] w-full sm:h-[3.19rem] h-[1.87rem] flex">
                  <div className="sm:w-[9rem] w-[12rem] h-full flex justify-center items-center border-r-[0.0625rem] border-[#161616] bg-[#fefefe]">
                    <p className="font-[kh-b] sm:text-[1.125rem] text-[0.8125rem]">SECTION 3.</p>
                  </div>
                  <div className="w-[26rem] h-full flex items-center pl-[1.94rem]">
                    <p
                      className="font-[kh-l] sm:text-[1.125rem] text-[0.8125rem]"
                      style={{ textTransform: 'uppercase' }}
                    >
                      {section3Title === section2Title ? section4Title : section3Title}
                    </p>
                  </div>
                </div>
                {section4Title && section2Title !== section3Title ? (
                  <div className="border-b-[0.0625rem] border-[#161616] w-full sm:h-[3.19rem] h-[1.87rem] flex">
                    <div className="sm:w-[9rem] w-[12rem] h-full flex justify-center items-center border-r-[0.0625rem] border-[#161616] bg-[#fefefe]">
                      <p className="font-[kh-b] sm:text-[1.125rem] text-[0.8125rem]">SECTION 4.</p>
                    </div>
                    <div className="w-[26rem] h-full flex items-center pl-[1.94rem]">
                      <p
                        className="font-[kh-l] sm:text-[1.125rem] text-[0.8125rem]"
                        style={{ textTransform: 'uppercase' }}
                      >
                        {section4Title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {isPc ? (
              isTablet ? (
                <></>
              ) : (
                <div className="flex flex-col">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={outlineImg}
                    alt="..."
                    className="w-[44.12rem] h-[52rem] object-cover"
                  />
                  <p
                    className="w-full text-right mt-[1rem] font-[kh-l] text-[#999] text-[1rem]"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {outlineCaption}
                  </p>
                </div>
              )
            ) : (
              <></>
            )}
          </div>
        </div>

        {/*  Section  1  */}
        <div
          className="w-screen h-auto flex flex-col relative object-cover"
          style={{
            backgroundImage: `url('${banner[0]}')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner isPc={isPc} sectionNum={1} sectionTitle={section1Title} />
          {!collectionNum ? (
            <div className="w-screen h-auto sm:pt-[11rem] sm:pb-[11rem] pt-[3rem] pb-[5rem] px-[5.2vw] flex flex-col sm:gap-[6rem] gap-[1rem] relative bg-white">
              <IntersectionAppearDiv>
                <Image
                  priority={true}
                  width={1000}
                  height={1000}
                  src={section1[0]}
                  alt="section1-1"
                  className={`w-full ${isCollection ? 'sm:h-[50rem]' : 'sm:h-[55rem]'} h-[10rem] object-cover sm:mb-[5rem] mb-[0.3rem]`}
                />
              </IntersectionAppearDiv>
              <div className="flex w-full sm:h-[33rem] h-[6.51rem] sm:gap-[2.5rem] gap-[1rem]">
                <IntersectionAppearDiv className="w-[50%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[1]}
                    alt="section1-2"
                    className="w-full sm:h-full h-[6.5rem] object-cover"
                  />
                </IntersectionAppearDiv>
                <IntersectionAppearDiv delay={200} className="w-[50%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[2]}
                    alt="section1-2"
                    className="w-full sm:h-full h-[6.5rem] object-cover"
                  />
                </IntersectionAppearDiv>
              </div>
              <IntersectionAppearDiv delay={isPc ? 0 : 200}>
                <Image
                  priority={true}
                  width={1000}
                  height={1000}
                  src={section1[3]}
                  alt="section1-1"
                  className="w-full sm:h-[55rem] h-[10rem] object-cover sm:mt-0 mt-[0.3rem]"
                />
              </IntersectionAppearDiv>
              <IntersectionAppearDiv delay={isPc ? 0 : 200}>
                <Image
                  priority={true}
                  width={1000}
                  height={1000}
                  src={section1[4]}
                  alt="section1-1"
                  className="w-full sm:h-[55rem] h-[10rem] object-cover sm:mt-0 mt-[0.3rem]"
                />
              </IntersectionAppearDiv>
              <div className="flex w-full sm:h-[33rem] h-[10rem] sm:gap-[2.5rem] gap-[1rem]">
                <IntersectionAppearDiv delay={isPc ? 0 : 200} className="w-[70%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[5]}
                    alt="section1-2"
                    className="w-full h-full object-cover"
                  />
                </IntersectionAppearDiv>
                <IntersectionAppearDiv delay={isPc ? 200 : 400} className="w-[30%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[6]}
                    alt="section1-2"
                    className="w-full h-full object-cover"
                  />
                </IntersectionAppearDiv>
              </div>
              <div className="flex w-full sm:h-[33rem] h-[10rem] sm:gap-[2.5rem] gap-[1rem]">
                <IntersectionAppearDiv className="w-[30%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[7]}
                    alt="section1-2"
                    className="w-full h-full object-cover"
                  />
                </IntersectionAppearDiv>
                <IntersectionAppearDiv delay={200} className="w-[70%]">
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[8]}
                    alt="section1-2"
                    className="w-full h-full object-cover"
                  />
                </IntersectionAppearDiv>
              </div>
              <IntersectionAppearDiv>
                <Image
                  priority={true}
                  width={1000}
                  height={1000}
                  src={section1[9]}
                  alt="section1-1"
                  className="w-full sm:h-[55rem] h-[10rem] object-cover"
                />
              </IntersectionAppearDiv>
              {isCollection && +curCollectionNum === 1 ? (
                <IntersectionAppearDiv>
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section1[10]}
                    alt="section1-1"
                    className="w-full sm:h-[55rem] h-[10rem] object-cover"
                  />
                  <div
                    className="absolute bottom-0 w-[107.5rem] sm:h-[18.25rem] h-[6rem] rotate-180"
                    style={{
                      background:
                        'linear-gradient(180deg, #FFF 6.85%, rgba(255, 255, 255, 0.74) 42.41%, rgba(255, 255, 255, 0.00) 100%)',
                    }}
                  />
                </IntersectionAppearDiv>
              ) : (
                <></>
              )}
            </div>
          ) : <Collection2UpAndDown />
          }
        </div>

        {/*  Section  1-2  */}
        <div
          className="w-screen h-auto flex flex-col relative object-cover"
          style={{
            backgroundImage: `url('${banner[0]}')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner isPc={isPc} sectionNum={1} sectionTitle={section1Title} />
          <Collection2UpAndDown />
        </div>

        {/*  Section 2  */}
        <div
          className="w-screen h-auto flex flex-col relative object-cover z-[2]"
          style={{
            backgroundImage: `url('${banner[1]}')`,
            backgroundAttachment: 'fixed',
            // backgroundSize: typeof banner[1] === 'string' ? 'contain' : 'cover',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner isPc={isPc} sectionNum={2} sectionTitle={section2Title} />
          <div className="grid-container overflow-hidden bg-white">
            <div className="grid" ref={section2Ref}>
              <div className={`gridLayer ${section2_1}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[0]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_2}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[1]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_3}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[2]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_4}`}>
                <Image
                  priority={true}
                  width={1500}
                  height={1500}
                  alt="section2"
                  src={section2[4]}
                  className="gridBlock center"
                />
              </div>
              <div className={`gridLayer ${section2_5}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[3]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_6}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[5]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_7}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[6]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_8}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[7]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_9}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[8]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_10}`}>
                <Image
                  priority={true}
                  width={800}
                  height={800}
                  alt="section2"
                  src={section2[9]}
                  className="gridBlock"
                />
              </div>
              <div className={`gridLayer ${section2_11}`}>
                <div className="gridBlock">
                  <Image priority={true} width={800} height={800} alt="section2" src={section2[10]} />
                </div>
              </div>
              <div className={`gridLayer ${section2_12}`}>
                <div className="gridBlock">
                  <Image
                    priority={true}
                    width={800}
                    height={800}
                    alt="section2"
                    src={section2[11]}
                    className="h-full object-cover"
                  />
                </div>
              </div>
              <div className={`gridLayer ${section2_13}`}>
                <div className="gridBlock">
                  <Image priority={true} width={800} height={500} alt="section2" src={section2[12]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Section  3  */}
        <div
          className="w-screen h-auto flex flex-col relative object-cover"
          style={{
            backgroundImage: `url('${banner[2]}')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner
            isPc={isPc}
            sectionNum={section2Title === section3Title || props.is2and3equal ? 2 : 3}
            sectionTitle={section3Title}
          />
          <div className="sm:h-[57.44rem] h-[280px] w-full bg-white relative flex sm:pt-[12.38rem] pt-[41.5px]">
            <Slider
              className="w-screen h-full"
              infinite={true}
              centerPadding={'60px'}
              slidesToShow={4}
              variableWidth={true}
              swipeToSlide={true}
              dots={false}
              arrows={false}
            >
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[0]}
                  alt="..."
                  className="sm:h-[32.75rem] h-[155px] sm:w-[21.88rem] w-[104px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[1]}
                  alt="..."
                  className="sm:h-[18.75rem] h-[89.89px] sm:w-[28.12rem] w-[134.8px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[2]}
                  alt="..."
                  className="sm:h-[32.75rem] h-[155px] sm:w-[21.88rem] w-[104px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[3]}
                  alt="..."
                  className="sm:h-[18.75rem] h-[89.89px] sm:w-[28.12rem] w-[134.8px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[4]}
                  alt="..."
                  className="sm:h-[32.75rem] h-[155px] sm:w-[21.88rem] w-[104px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[5]}
                  alt="..."
                  className="sm:h-[18.75rem] h-[89.89px] sm:w-[28.12rem] w-[134.8px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[6]}
                  alt="..."
                  className="sm:h-[32.75rem] h-[155px] sm:w-[21.88rem] w-[104px] object-cover cursor-pointer"
                />
              </div>
              <div className="sm:pr-[1.25rem] pr-[4.8px]">
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src={section3[7]}
                  alt="..."
                  className="sm:h-[18.75rem] h-[89.89px] sm:w-[28.12rem] w-[134.8px] object-cover cursor-pointer"
                />
              </div>
            </Slider>
          </div>
        </div>

        {/*  Section 4  */}
        <div
          className="w-screen h-auto flex flex-col relative object-cover"
          style={{
            backgroundImage: `url('${banner[3]}')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Banner
            isPc={isPc}
            sectionNum={section2Title === section3Title || props.is2and3equal ? 3 : 4}
            sectionTitle={section4Title}
          />
          <div className="lg:h-[68.56rem] sm:h-auto h-[200.4px] w-screen bg-white relative flex justify-center lg:pt-[12.38rem] sm:pt-[8rem] pt-[40px]">
            {(!isTablet && isPc) || (!isTablet && !isPc) ? (
              <div className="sm:w-[107.5rem] w-[315px] sm:h-full h-[180px] sm:gap-[2rem] gap-[4.9px] flex overflow-hidden">
                <div className="sm:w-[19.06rem] w-[53px] h-full flex flex-col sm:gap-[2rem] gap-[4.9px]">
                  <IntersectionAppearDiv className="sm:h-full h-[45%]">
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[0]}
                      alt="section4_0"
                      className="sm:h-[28rem] h-full w-full object-cover"
                    />
                  </IntersectionAppearDiv>
                  <IntersectionAppearDiv className="sm:h-full h-[55%]">
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[1]}
                      alt="section4_4"
                      className="sm:h-[28rem] h-full w-full object-cover"
                    />
                  </IntersectionAppearDiv>
                </div>
                <div className="sm:w-[40.19rem] w-[117.3px] h-full flex flex-col sm:gap-[2rem] gap-[4.9px]">
                  <div className="flex w-full sm:h-[16.81rem] h-[50.3px] sm:gap-[2rem] gap-[4.9px]">
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[2]}
                        alt="section4_1"
                        className="h-full sm:w-[15rem] w-[42px] object-cover"
                      />
                    </IntersectionAppearDiv>
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[3]}
                        alt="section4_2"
                        className="h-full sm:w-[23rem] w-[70px] object-cover"
                      />
                    </IntersectionAppearDiv>
                  </div>
                  <IntersectionAppearDiv>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[4]}
                      alt="section4_5"
                      className="sm:h-[21rem] h-[58px] w-full object-cover"
                    />
                  </IntersectionAppearDiv>
                  {isCollection && +curCollectionNum === 2 ? (
                    <div className="sm:gap-[2rem] gap-[4.9px] flex">
                      <IntersectionAppearDiv>
                        <Image
                          priority={true}
                          width={1000}
                          height={1000}
                          src={section4[5]}
                          alt="section4_collection2"
                          className="sm:h-[16rem] h-[47px] sm:w-[27.94rem] w-[80px] object-cover"
                        />
                      </IntersectionAppearDiv>
                      <IntersectionAppearDiv>
                        <Image
                          priority={true}
                          width={1000}
                          height={1000}
                          src={section4[6]}
                          alt="section4_collection2"
                          className="sm:h-[16rem] h-[47px] sm:w-[10.25rem] w-[35.6px] object-cover"
                        />
                      </IntersectionAppearDiv>
                    </div>
                  ) : isCollection && +curCollectionNum === 3 ? (
                    <div className="sm:gap-[2rem] gap-[4.9px] flex">
                      <IntersectionAppearDiv>
                        <Image
                          priority={true}
                          width={1000}
                          height={1000}
                          src={section4[6]}
                          alt="section4_collection3"
                          className="sm:h-[16rem] h-[47px] sm:w-[13rem] w-[42.5px] object-cover"
                        />
                      </IntersectionAppearDiv>
                      <IntersectionAppearDiv>
                        <Image
                          priority={true}
                          width={1000}
                          height={1000}
                          src={section4[5]}
                          alt="section4_collection3"
                          className="sm:h-[16rem] h-[47px] sm:w-[13rem] w-[42.5px] object-cover"
                        />
                      </IntersectionAppearDiv>
                      <IntersectionAppearDiv>
                        <Image
                          priority={true}
                          width={1000}
                          height={1000}
                          src={section4[8]}
                          alt="section4_collection3"
                          className="sm:h-[16rem] h-[47px] sm:w-[10rem] w-[25.625px] object-cover"
                        />
                      </IntersectionAppearDiv>
                    </div>
                  ) : (
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[5]}
                        alt="section4"
                        className="sm:h-[16rem] h-[47px] w-full object-cover"
                      />
                    </IntersectionAppearDiv>
                  )}
                </div>
                <div className="sm:w-[44.63rem] w-[111.575px] h-full flex flex-col sm:gap-[2rem] gap-[4.9px]">
                  {isCollection && +curCollectionNum === 3 ? (
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[7]}
                        alt="section4"
                        className="sm:h-[24rem] h-[70px] w-full object-cover"
                      />
                    </IntersectionAppearDiv>
                  ) : isCollection && +curCollectionNum === 2 ? (
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[7]}
                        alt="section4"
                        className="sm:h-[24rem] h-[70px] w-full object-cover"
                      />
                    </IntersectionAppearDiv>
                  ) : (
                    <IntersectionAppearDiv>
                      <Image
                        priority={true}
                        width={1000}
                        height={1000}
                        src={section4[6]}
                        alt="section4"
                        className="sm:h-[24rem] h-[70px] w-full object-cover"
                      />
                    </IntersectionAppearDiv>
                  )}
                  <IntersectionAppearDiv>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={
                        isAward
                          ? section4[7]
                          : isCollection && +curCollectionNum === 3
                            ? section4[9]
                            : +curCollectionNum === 2
                              ? section4[8]
                              : section4[7]
                      }
                      alt="..."
                      className="sm:h-[29.75rem] h-[90px] w-full object-cover"
                    />
                  </IntersectionAppearDiv>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col px-[5.2vw] gap-[2vw]">
                <div className="flex w-full gap-[2vw]">
                  <IntersectionAppearDiv>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[0]}
                      alt="section4"
                      className="object-cover w-[25vw] h-full"
                    />
                  </IntersectionAppearDiv>
                  <IntersectionAppearDiv delay={200}>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[1]}
                      alt="section4"
                      className="object-cover w-[62vw] h-full"
                    />
                  </IntersectionAppearDiv>
                </div>
                <div className="flex w-full gap-[2vw]">
                  <IntersectionAppearDiv>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[2]}
                      alt="section4"
                      className="object-cover w-[62vw] h-full"
                    />
                  </IntersectionAppearDiv>
                  <IntersectionAppearDiv delay={200}>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[3]}
                      alt="section4"
                      className="object-cover w-[25vw] h-full"
                    />
                  </IntersectionAppearDiv>
                </div>
                <div className="flex w-full gap-[2vw]">
                  <IntersectionAppearDiv>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[4]}
                      alt="section4"
                      className="object-cover w-[25vw] h-full"
                    />
                  </IntersectionAppearDiv>
                  <IntersectionAppearDiv delay={200}>
                    <Image
                      priority={true}
                      width={1000}
                      height={1000}
                      src={section4[5]}
                      alt="section4"
                      className="object-cover w-[62vw] h-full"
                    />
                  </IntersectionAppearDiv>
                </div>
                <IntersectionAppearDiv>
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section4[6]}
                    alt="section4"
                    className="object-cover w-full h-[30rem]"
                  />
                </IntersectionAppearDiv>
                <IntersectionAppearDiv>
                  <Image
                    priority={true}
                    width={1000}
                    height={1000}
                    src={section4[7]}
                    alt="section4"
                    className="object-cover w-full h-[30rem]"
                  />
                </IntersectionAppearDiv>
              </div>
            )}
          </div>
        </div>

        {/*  Navigator  */}
        <Paging
          isCollection={isCollection}
          isPc={isPc}
          next={
            isCollection
              ? +curCollectionNum !== 7
                ? +curCollectionNum + 1
                : 7
              : +curCollectionNum !== 2
                ? +curCollectionNum + 1
                : 2
          }
          prev={+curCollectionNum !== 1 ? +curCollectionNum - 1 : 1}
        />
      </div>

      <Footer />
    </div>
  );
}

function Banner(props: { sectionNum: number; sectionTitle: string; isPc: boolean }) {
  const { sectionNum, sectionTitle, isPc } = props;
  return (
    <div className="w-screen sm:h-screen h-[11.25rem] flex flex-col justify-center items-center relative">
      <div className="w-screen sm:h-screen h-[11.25rem] absolute bg-black opacity-85 z-[1]" />
      <div className="flex gap-[0.8rem] z-[2]">
        <p className="font-[kh-m] text-white sm:text-[1.125rem] text-[0.8125rem] sm:mt-[-0.1rem] mt-[0rem] sm:ml-0 ml-[-0.6rem] opacity-100">
          {`SECTION ${sectionNum}`}.
        </p>
      </div>
      <p
        className="font-[kh-b] text-white sm:text-[4.5rem] text-[1.625rem] opacity-100 z-[2]"
        style={{ textTransform: 'uppercase' }}
      >
        {sectionTitle}
      </p>
      <div />
    </div>
  );
}

function Paging(props: { next: number; prev: number; isPc: boolean; isCollection: boolean }) {
  const { next, prev, isPc, isCollection } = props;
  const router = useDelayRouter();

  return (
    <div className="w-screen sm:h-[30.5rem] h-[200.3px] bg-white relative flex justify-center items-center ">
      <div className="sm:w-[73.62rem] w-screen lg:px-0 px-[5.2vw] h-[5.13rem] flex justify-between items-center">
        {/*  PREV ARROW  */}
        <div className="flex gap-[1rem] relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isPc ? '19' : '11'}
            height="34"
            viewBox="0 0 19 34"
            fill="none"
            className="absolute sm:bottom-[2.3rem] bottom-[0.2rem]"
          >
            <path
              d="M7.41807e-07 16.9707L16.9706 0.000139318L18.3848 1.41435L1.41421 18.3849L7.41807e-07 16.9707Z"
              fill="#161616"
            />
            <path
              d="M1.41421 15.5565L18.3848 32.5271L16.9706 33.9413L7.41807e-07 16.9707L1.41421 15.5565Z"
              fill="#161616"
            />
          </svg>
          <p className="font-[kh-b] sm:text-[4.5rem] text-[1.625rem] ml-[2.2rem]">PREV</p>
        </div>

        {/*  CENTER MENU  */}
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isPc ? '48' : '20'}
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect y="21" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect y="42" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="21.0005" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="41.9995" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="21.0005" y="21" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="21.0005" y="42" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="41.9995" y="21" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
            <rect x="41.9995" y="42" width="6.00014" height="6.00014" rx="3.00007" fill="#161616" />
          </svg>
        </div>

        {/*  NEXT ARROW  */}
        <div className="flex gap-[1rem] relative cursor-pointer">
          <p className="font-[kh-b] sm:text-[4.5rem] text-[1.625rem] mr-[2.2rem]">NEXT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isPc ? '19' : '11'}
            height="34"
            viewBox="0 0 19 34"
            fill="none"
            className="absolute sm:bottom-[2.3rem] bottom-[0.2rem] right-0 rotate-180"
          >
            <path
              d="M7.41807e-07 16.9707L16.9706 0.000139318L18.3848 1.41435L1.41421 18.3849L7.41807e-07 16.9707Z"
              fill="#161616"
            />
            <path
              d="M1.41421 15.5565L18.3848 32.5271L16.9706 33.9413L7.41807e-07 16.9707L1.41421 15.5565Z"
              fill="#161616"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
