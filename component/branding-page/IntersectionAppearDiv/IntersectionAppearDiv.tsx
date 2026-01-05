'use client';

import './IntersectionAppearDiv.css';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number; // 순차적 로딩 시에 적용 (ms 단위)
  children: any;
  callback?: any;
  active?: any;
  anim?: string;
  key?: any;
  className?: string;
}

export default function IntersectionAppearDiv(props: PropsType) {
  const { children, delay, callback, active, anim } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (active || active === undefined) {
      let flag = true;
      const handleAppearance = async (e: any) => {
        // 하단에서 교차할 경우에만 이벤트 적용

        if (callback) callback();

        setTimeout(
          () => {
            if (e[0].boundingClientRect.top > 0) {
              if (e[0].isIntersecting) {
                setClassName(anim || 'intersection-appear-anim');
                flag = false;
              } else if (!flag) {
                setClassName('');
                flag = true;
              }
            }
          },
          delay ? delay : 0,
        );
      };

      let observer = new IntersectionObserver(handleAppearance);
      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, [active]);

  return (
    <div
      className={`${className} ${props.className}`}
      ref={ref}
      style={{ opacity: active || active === undefined ? 0 : 1 }}
    >
      {children}
    </div>
  );
}
