'use client';

import './header.css';
import Logo from '@/component/branding-page/logo';
import useDelayRouter from '@/component/branding-page/useDelayRouter';
import IndexMenu from '@/component/branding-page/Header/IndexMenu';
import { useEffect, useState } from 'react';

interface PropsType {
  color?: string;
  isMain?: boolean;
  isCollection?: boolean;
}
export default function Header(props: PropsType) {
  const [isFixed, setIsFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState('80px');
  const [brightness, setBrightness] = useState('brightness(1) blur(0px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenTheme, setMenuOpenTheme] = useState(false);
  const [upperMenuBar, setUpperMenuBar] = useState('');
  const [lowerMenuBar, setLowerMenuBar] = useState('');
  const [menuAnim, setMenuAnim] = useState('menu-appear');
  const [fadeIn, setFadeIn] = useState('');
  const [blackArea, setBlackArea] = useState(false);
  const [isGnb, setIsGnb] = useState(true);
  const [safariBlur, setSafariBlur] = useState('');
  const [selectedGnbMenu, setSelectedGnbMenu] = useState(-1);
  const [blurAtTop, setBlurAtTop] = useState('');
  const [openAnim, setOpenAnim] = useState('');
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1070) {
        setIsGnb(false);
        setHeaderHeight('60px');
      } else {
        setIsGnb(true);
        setHeaderHeight('80px');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);

  const router = useDelayRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
      if (props.isCollection) {
        if (window.scrollY <= 0) {
          if (headerHeight !== '380px') {
            setBlackArea(false);
            setSafariBlur('');
            setBrightness('blur(0px)');
          }
        } else {
          setBlackArea(true);
          setSafariBlur('safari-blur-brightness');
          setBrightness('brightness(0.7) blur(12px)');
        }
      } else {
        if (window.scrollY <= 0) {
          if (headerHeight !== '380px') {
            setBrightness('blur(0px)');
            setSafariBlur('');
          }
        } else {
          setBrightness('blur(12px)');
          setSafariBlur('safari-blur');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  useEffect(() => {
    setFadeIn('fade-in');
  }, []);

  const closeMenu = () => {
    if (isGnb) setHeaderHeight('80px');
    else setHeaderHeight('60px');
    if (props.isCollection) {
      if (window.scrollY === 0) {
        setTimeout(() => {
          setBrightness('');
          setSafariBlur('');
        }, 300);
      }
    } else {
      setBrightness('blur(12px)');
      setSafariBlur('safari-blur');
    }
  };

  const clickMenu = () => {
    if (selectedGnbMenu !== -1) {
      closeMenu();
    } else {
      setSafariBlur('safari-blur');
      setHeaderHeight('380px');
      if (props.isCollection) {
        setBrightness('brightness(0.7) blur(12px)');
        setSafariBlur('safari-blur-brightness');
      } else {
        setBrightness('blur(12px)');
        setSafariBlur('safari-blur');
      }
    }
  };

  const handleClickMenu = () => {
    if (selectedGnbMenu !== -1) {
      setSelectedGnbMenu(-1);
      clickMenu();
    } else {
      clickMenu();
    }
  };

  const handleMenuOpen = () => {
    if (!menuOpen) {
      setMenuAnim('menu-appear');
      setMenuOpen(true);
    } else if (menuOpen) {
      setMenuAnim('menu-disappear');
      setTimeout(() => {
        setMenuOpen(false);
      }, 150);
    }

    setMenuOpenTheme((prev) => !prev);

    if (upperMenuBar === '' || upperMenuBar === 'upper-menu-bar-close') {
      setUpperMenuBar('upper-menu-bar-open');
      setLowerMenuBar('lower-menu-bar-open');
    } else if (upperMenuBar === 'upper-menu-bar-open') {
      setUpperMenuBar('upper-menu-bar-close');
      setLowerMenuBar('lower-menu-bar-close');
    }
  };

  const handleMouseOver = () => {
    setHeaderHeight('380px');
    setOpenAnim('header-open');
  };

  const handleMouseLeave = () => {
    isGnb ? setHeaderHeight('80px') : setHeaderHeight('60px');
    setOpenAnim('header-close');
  };

  useEffect(() => {
    if (headerHeight !== '380px') {
      setTimeout(() => {
        setBlurAtTop('');
        setSafariBlur('');
      }, 150);
    } else {
      if (props.isCollection) {
        setBlurAtTop('brightness(0.7) blur(12px)');
        setSafariBlur('safari-blur-brightness');
      } else {
        setBlurAtTop('blur(12px)');
        setSafariBlur('safari-blur');
      }
    }
  }, [headerHeight]);

  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          height: headerHeight,
          backdropFilter: !isFixed ? blurAtTop : brightness,
          transform: 'translate3d(0, 0, 0)',
          background: !props.isCollection ? 'rgba(255, 255, 255, 0.3)' : '',
        }}
        className={`${safariBlur} main-header px-[5.2vw] ${fadeIn} opacity-0 ${isGnb ? 'overflow-hidden' : ''} ${isFixed ? 'fixed fixed-header' : ''} ${openAnim}`}
      >
        <div className=" flex items-center" style={{ height: isGnb ? '80px' : '60px' }}>
          {/* <Logo
            onClick={() => router.push('/')}
            className="main-header-logo z-[9999]"
            color={menuOpenTheme ? '#FFF' : props.color}
          /> */}
        </div>

        {menuOpen ? <Menu menuAnim={menuAnim} handleMenuOpen={() => handleMenuOpen()} /> : <></>}

        {/*{props.isMain ? (*/}
        {/*  <div className="absolute top-0 bg-[#fff] h-[380px] w-[120vw] opacity-[0.4] left-[-5.2vw]" />*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}

        {isGnb ? (
          <div
            className="h-[80px] hover:h-[380px] z-[9999]"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <IndexMenu
              color={props.color}
              isMain={props.isMain}
              setSelectedGnbMenu={setSelectedGnbMenu}
              selectedGnbMenu={selectedGnbMenu}
            />
          </div>
        ) : (
          <div className="h-full flex items-center cursor-pointer z-[9999]" onClick={handleMenuOpen}>
            <div className="h-[9px] w-[32px] flex flex-col justify-between">
              <div
                className={`w-full h-[2px] ${upperMenuBar}`}
                style={{ backgroundColor: menuOpenTheme ? '#fff' : props.color }}
              />
              <div
                className={`w-full h-[2px]  ${lowerMenuBar}`}
                style={{ backgroundColor: menuOpenTheme ? '#fff' : props.color }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Menu(props: { menuAnim: string; handleMenuOpen: any }) {
  const router = useDelayRouter();
  const { menuAnim, handleMenuOpen } = props;
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [menuHeight, setMenuHeight] = useState(70);

  const handleOpen = (index: number) => {
    setHoverIndex(index);
    switch (index) {
      case 2:
        setMenuHeight(320);
        break;
      case 3:
        setMenuHeight(342);
        break;
      case 4:
        setMenuHeight(240);
        break;
      case 5:
        setMenuHeight(116);
        break;
      case 6:
        setMenuHeight(234);
        break;
    }
  };

  const handleClose = () => {
    setHoverIndex(-1);
    setMenuHeight(70);
  };


  return (
    <div
      className={`fixed z-[9998] w-screen h-screen ml-[-5.2vw] pt-[240px] text-white overflow-y-scroll ${menuAnim}`}
      style={{ background: 'linear-gradient(180deg, #000 0%, #062E57 100%)' }}
    >
      <div className="sm:w-[300px] w-[280px] h-[70px] flex gap-[10px] cursor-pointer">
        <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">01</p>
        <p
          className="text-[34px] font-[nt-b]"
          style={{ textDecorationLine: hoverIndex === 1 ? 'underline' : 'none', whiteSpace: 'nowrap' }}
        >
          Lorem
        </p>
      </div>
      <div
        className="sm:w-[300px] w-[280px] cursor-pointer overflow-hidden"
        style={{ height: hoverIndex === 2 ? `${menuHeight}px` : '70px', transition: 'height 0.15s ease' }}
      >
        <div className="flex gap-[10px]">
          <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">02</p>
          <p
            className="text-[34px] font-[nt-b]"
            style={{ textDecorationLine: hoverIndex === 2 ? 'underline' : 'none', whiteSpace: 'nowrap' }}
          >
            Ipsum
          </p>
        </div>
        <div className="flex flex-col mt-[13px] pl-[12vw] h-[100px]">
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Dolor
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Sit amet
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Consectetur adipiscing
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Elit sed
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Do eiusmod tempor
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Incididunt ut labore
          </p>
        </div>
      </div>
      <div
        className="sm:w-[300px] w-[280px] cursor-pointer overflow-hidden"
        style={{ height: hoverIndex === 3 ? `${menuHeight}px` : '70px', transition: 'height 0.15s ease' }}
      >
        <div className="flex gap-[10px]">
          <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">03</p>
          <p
            className="text-[34px] font-[nt-b]"
            style={{ textDecorationLine: hoverIndex === 3 ? 'underline' : 'none', whiteSpace: 'nowrap' }}
          >
            Et dolore magna
          </p>
        </div>
        <div className="flex flex-col mt-[13px] pl-[12vw] h-[100px]">
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            DOLOR
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            SIT AMET
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            CONSECTETUR
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            ADIPISCING
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            ELIT SED
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            DO EIUSMOD
          </p>
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            TEMPOR
          </p>
        </div>
      </div>
      <div
        className="sm:w-[300px] w-[280px] cursor-pointer overflow-hidden"
        style={{ height: hoverIndex === 4 ? `${menuHeight}px` : '70px', transition: 'height 0.15s ease' }}
      >
        <div className="flex gap-[10px]">
          <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">04</p>
          <p
            className="text-[34px] font-[nt-b]"
            style={{ textDecorationLine: hoverIndex === 4 ? 'underline' : 'none' }}
          >
            Incididunt
          </p>
        </div>
        <div className="flex flex-col mt-[13px] pl-[12vw] h-[100px]">
          <p className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item">
            Ut labore et
          </p>
          <p className="text-[13px] font-[nt-l] mt-[7px] mobile-menu-item">
            &nbsp;&nbsp;<span className="font-sizeM">·</span>&nbsp;&nbsp;DOLORE
          </p>
          <p className="text-[13px] font-[nt-l] mt-[7px] mobile-menu-item">
            &nbsp;&nbsp;<span className="font-sizeM">·</span>&nbsp;&nbsp;MAGNA ALIQUA
          </p>
          <p className="text-[13px] font-[nt-l] mt-[7px] mobile-menu-item">
            &nbsp;&nbsp;<span className="font-sizeM">·</span>&nbsp;&nbsp;ENIM AD
          </p>
          <p className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item">
            Minim veniam
          </p>
        </div>
      </div>
      <div
        className="sm:w-[300px] w-[280px] cursor-pointer overflow-hidden"
        style={{ height: hoverIndex === 5 ? `${menuHeight}px` : '70px', transition: 'height 0.15s ease' }}
      >
        <div className="flex gap-[10px]">
          <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">05</p>
          <p
            className="text-[34px] font-[nt-b]"
            style={{ textDecorationLine: hoverIndex === 5 ? 'underline' : 'none' }}
          >
            Quis
          </p>
        </div>
        <div className="flex flex-col mt-[13px] pl-[12vw] h-[100px]">
          <p className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item">
            EXERCITATION
          </p>
        </div>
      </div>
      <div
        className="sm:w-[300px] w-[280px] cursor-pointer overflow-hidden"
        style={{ height: hoverIndex === 6 ? `${menuHeight}px` : '70px', transition: 'height 0.15s ease' }}
      >
        <div className="flex gap-[10px]">
          <p className="text-[13px] font-[kh-r] ml-[5.2vw] mt-[18px]">06</p>
          <p
            className="text-[34px] font-[nt-b]"
            style={{ textDecorationLine: hoverIndex === 6 ? 'underline' : 'none' }}
          >
            Ullamco
          </p>
        </div>
        <div className="flex flex-col mt-[13px] pl-[12vw] h-[100px]">
          <p
            className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item"
          >
            Laboris
          </p>
          <p className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item">
            Nisi ut aliquip
          </p>
          <p className="text-[20px] font-[nt-l] mt-[7px] mobile-menu-item">
            Ex ea commodo
          </p>
        </div>
      </div>
      {hoverIndex !== -1 ? <div className="w-screen h-[7rem]" /> : <></>}
    </div>
  );
}
