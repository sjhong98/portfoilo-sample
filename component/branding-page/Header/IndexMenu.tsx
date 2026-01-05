import './indexMenu.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useDelayRouter from '@/component/branding-page/useDelayRouter';

interface PropsType {
  color?: string;
  isMain?: boolean;
  setSelectedGnbMenu: any;
  selectedGnbMenu: number;
}
export default function IndexMenu(props: PropsType) {
  const { setSelectedGnbMenu, selectedGnbMenu } = props;
  const router = useDelayRouter();
  const [activeItem, setActiveItem] = useState(null);
  const [scrollTop, setScrollTop] = useState(true);
  const [visibleGnbMenu, setVisibleGnbMenu] = useState(-1);

  const handleItemHover = (index: any) => {
    setActiveItem(index);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  useEffect(() => {
    const handleDetectScrollTop = () => {
      if (window.scrollY <= 0) setScrollTop(true);
      else setScrollTop(false);
    };

    window.addEventListener('scroll', handleDetectScrollTop);
  }, []);

  useEffect(() => {
    if (selectedGnbMenu !== -1) {
      setVisibleGnbMenu(selectedGnbMenu);
    } else {
      setTimeout(() => {
        setVisibleGnbMenu(selectedGnbMenu);
      }, 300);
    }
  }, [selectedGnbMenu]);

  return (
    <div className="index-menu">
      <div
        className="index-menu-item lg:gap-[10px] sm:gap-[5px]"
        onMouseEnter={() => handleItemHover(1)}
        onMouseLeave={handleItemLeave}
      >
        <div
          className="index-menu-item-text text-[1.125rem] w-[116px]  text-center"
          style={{
            color: props.color,
            textDecoration: activeItem === 1 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 1 ? '2px' : 'none',
          }}
        >
          Lorem
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] hover:opacity-[1] opacity-[0.5]"
          >
            Ipsum dolor
          </li>
        </ul>
      </div>
      <div className="index-menu-item" onMouseEnter={() => handleItemHover(2)} onMouseLeave={handleItemLeave}>
        <div
          className="index-menu-item-text text-[1.125rem] sm:py-[1.375vw] py-[15px] w-[133px] text-center  "
          style={{
            color: props.color,
            textDecoration: activeItem === 2 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 2 ? '2px' : 'none',
          }}
        >
          Ipsum
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Dolor
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Sit amet
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Consectetur adipiscing
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Elit sed
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Do eiusmod tempor
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Incididunt ut labore
          </li>
        </ul>
      </div>
      <div className="index-menu-item" onMouseEnter={() => handleItemHover(3)} onMouseLeave={handleItemLeave}>
        <div
          className="index-menu-item-text text-[1.125rem] py-[25px] w-[165px] text-center"
          style={{
            color: props.color,
            textDecoration: activeItem === 3 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 3 ? '2px' : 'none',
          }}
        >
          Et dolore magna
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            DOLOR
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            SIT AMET
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            CONSECTETUR
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            ADIPISCING
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            ELIT SED
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            DO EIUSMOD
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            TEMPOR
          </li>
        </ul>
      </div>
      <div className="index-menu-item" onMouseEnter={() => handleItemHover(4)} onMouseLeave={handleItemLeave}>
        <div
          className="index-menu-item-text text-[1.125rem]  w-[116px] text-center py-[25px]"
          style={{
            color: props.color,
            textDecoration: activeItem === 4 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 4 ? '2px' : 'none',
          }}
        >
          Incididunt
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM opacity-[0.5] hover:opacity-[1] h-[35px]"
          >
            Ut labore et
          </li>
          <li
            className="font-sizeL hover:font-sizeM opacity-[0.5] hover:opacity-[1] text-[12px] h-[30px]"
          >
            <span className="font-sizeM">·</span>&nbsp;&nbsp;DOLORE
          </li>
          <li
            className="font-sizeL hover:font-sizeM opacity-[0.5] hover:opacity-[1] text-[12px] h-[30px]"
          >
            <span className="font-sizeM">·</span>&nbsp;&nbsp;MAGNA ALIQUA
          </li>
          <li
            className="font-sizeL hover:font-sizeM opacity-[0.5] hover:opacity-[1] text-[12px] h-[35px]"
          >
            <span className="font-sizeM">·</span>&nbsp;&nbsp;ENIM AD
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Minim veniam
          </li>
        </ul>
      </div>
      <div className="index-menu-item" onMouseEnter={() => handleItemHover(5)} onMouseLeave={handleItemLeave}>
        <div
          className="index-menu-item-text text-[1.125rem]  w-[116px] text-center py-[25px]"
          style={{
            color: props.color,
            textDecoration: activeItem === 5 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 5 ? '2px' : 'none',
          }}
        >
          Quis
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            EXERCITATION
          </li>
        </ul>
      </div>
      <div className="index-menu-item" onMouseEnter={() => handleItemHover(6)} onMouseLeave={handleItemLeave}>
        <div
          className="index-menu-item-text text-[1.125rem] py-[25px] w-[116px] text-center "
          style={{
            color: props.color,
            textDecoration: activeItem === 6 ? 'underline' : 'none',
            textDecorationThickness: activeItem === 6 ? '2px' : 'none',
          }}
        >
          Ullamco
        </div>
        <ul className="index-menu-item-2 lg:text-[18px] sm:text-[11px]" style={{ color: props.color }}>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Laboris
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Nisi ut aliquip
          </li>
          <li
            className="font-sizeL hover:font-sizeM hover:text-[1.125rem] opacity-[0.5] hover:opacity-[1]"
          >
            Ex ea commodo
          </li>
        </ul>
      </div>
    </div>
  );
}
