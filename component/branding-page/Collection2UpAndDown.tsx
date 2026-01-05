import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import IntersectionAppearDiv from '@/component/branding-page/IntersectionAppearDiv/IntersectionAppearDiv';

export default function Collection2UpAndDown() {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);
  const [col1MarginTop, setCol1MarginTop] = useState(12.44);
  const [col2MarginTop, setCol2MarginTop] = useState(0);
  const [initial, setInitial] = useState(-220);
  const [topScrollY, setTopScrollY] = useState(0);
  const [isPc, setIsPc] = useState(true);

  const img1 = '/images/sample4.jpg';
  const img2 = '/images/sample2.jpg';
  const img3 = '/images/sample5.jpg';
  const img4 = '/images/sample1.jpg';
  const img5 = '/images/sample3.jpg';
  const img6 = '/images/sample4.jpg';
  const img7 = '/images/sample2.jpg';
  const img8 = '/images/sample5.jpg';
  const bg = 'https://picsum.photos/id/223/4000/3000';

  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsPc(false);
      setInitial(-220);
      setCol2MarginTop(-220);
    } else if (window.innerWidth < 1024) {
      setInitial(-140);
      setCol2MarginTop(-140);
    }
  }, []);

  useEffect(() => {
    let isFirst = true;
    const handleObserve = (e: any) => {
      // 스크롤 내리며 뷰포트 접근할 때
      if (e[0].boundingClientRect.top > 0 && !isFirst && !intersected) {
        setTopScrollY(window.scrollY);
        setIntersected(true);
        // 스크롤 내리며 뷰포트 탈출할 때
      } else if (e[0].boundingClientRect.top < 0 && !isFirst && intersected) {
        setIntersected(false);
        // 스크롤 올리며 뷰포트 탈출할 때
      } else if (e[0].boundingClientRect.top > 0 && !isFirst && intersected) {
        setIntersected(false);
        // 스크롤 올리며 뷰포트 접근할 때
      } else if (e[0].boundingClientRect.top < 0 && !isFirst && !intersected) {
        setIntersected(true);
      } else {
        isFirst = false;
      }
    };

    const options = {
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserve, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [intersected]);

  useEffect(() => {
    const handleCalculateMarginTop = () => {
      if (window.innerWidth > 640) {
        setCol1MarginTop(12.44 - (window.scrollY - topScrollY) * 0.08);
        setCol2MarginTop(initial + (window.scrollY - topScrollY) * 0.17);
      }
    };

    if (intersected) {
      window.addEventListener('scroll', handleCalculateMarginTop);
    }

    return () => {
      window.removeEventListener('scroll', handleCalculateMarginTop);
    };
  }, [intersected]);

  return (
    <div
      className="w-screen sm:h-[432vh] h-[180rem] px-[5.2vw] flex flex-row sm:gap-[20.3vw] gap-[0rem] relative overflow-hidden sm:mb-[-100rem]"
      style={{ background: `url(${bg})`, backgroundSize: isPc ? 'cover' : 'contain' }}
    >
      {isPc ? <div ref={ref} className="w-screen h-full absolute top-[100vh] z-[9999]" /> : <></>}

      {/*  Column 1  */}
      <div
        className="flex flex-col w-full h-full sm:gap-[18.5vh] gap-[24rem] relative"
        style={{ marginTop: isPc ? `${col1MarginTop}rem` : '5rem' }}
      >
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden sm:mt-0 ">
            <Image
              width={1000}
              height={1000}
              src={img1}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] left-[0.3rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK YEONHUI&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>
              PARK YEONHU&nbsp;&nbsp;&nbsp; <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK
              YEONHUI&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK YEONHUI&nbsp;&nbsp;&nbsp;
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img3}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] left-[0.3rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>SON HO MYUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>SON HO MYUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN </span>SON HO MYUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>SON HO MYUNG&nbsp;&nbsp;&nbsp;
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img5}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] left-[0.3rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>JUNG AH YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>JUNG AH YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>JUNG AH YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>JUNG AH YOUNG&nbsp;&nbsp;&nbsp;
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img7}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] left-[0.3rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM NAM YOON&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM NAM YOON&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM NAM YOON&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM NAM YOON&nbsp;&nbsp;&nbsp;
            </pre>
          </div>
        </IntersectionAppearDiv>
      </div>

      {/*  Column 2  */}
      <div
        className="flex flex-col w-full sm:h-full h-[70%] sm:gap-[18.5vh] gap-[24rem] sm:ml-0 ml-[-10rem]"
        style={{ marginTop: isPc ? `${col2MarginTop}rem` : '26rem' }}
      >
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img2}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] right-[0.5rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>MUN JU YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>MUN JU YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>MUN JU YOUNG&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">URBAN&nbsp;&nbsp;&nbsp;</span>MUN JU YOUNG{' '}
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img4}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] right-[0.5rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK IL WOO&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK IL WOO&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK IL WOO&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">PEOPLE&nbsp;&nbsp;&nbsp;</span>PARK IL WOO{' '}
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img6}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] right-[0.5rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>LEE NA RIN{' '}
            </pre>
          </div>
        </IntersectionAppearDiv>
        <IntersectionAppearDiv active={!isPc}>
          <div className="sm:w-full w-[13rem] sm:h-[60vw] h-[18rem] relative overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img8}
              alt="..."
              className="absolute z-[1] w-full h-full object-cover"
            />
            <pre
              className="absolute z-[2] right-[0.5rem] bottom-[0rem] text-white sm:text-[1.125rem] text-[0.5rem] font-[kh-l] rotate-180 mb-[0.5rem] ml-[0.5rem]"
              style={{ writingMode: 'vertical-lr' }}
            >
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM DONG GEUN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM DONG GEUN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM DONG GEUN&nbsp;&nbsp;&nbsp;
              <span className="font-[kh-b]">WIT&nbsp;&nbsp;&nbsp;</span>KIM DONG GEUN{' '}
            </pre>
          </div>
        </IntersectionAppearDiv>
      </div>
    </div>
  );
}
