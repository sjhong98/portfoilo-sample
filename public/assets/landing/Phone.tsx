import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 101 101' {...props}>
    <path
      fill='url(#Phone_svg__a)'
      d='M.5 50.57c0-27.614 22.386-50 50-50s50 22.386 50 50-22.386 50-50 50-50-22.385-50-50'
    />
    <path
      stroke='#fff'
      strokeMiterlimit={10}
      strokeWidth={3}
      d='M73.852 64.04c-1.86-1.875-6.368-4.612-8.555-5.714-2.847-1.435-3.081-1.552-5.32.11-1.493 1.11-2.485 2.102-4.233 1.73-1.747-.373-5.544-2.474-8.868-5.788s-5.548-7.222-5.922-8.963.634-2.722 1.733-4.219c1.55-2.11 1.432-2.46.108-5.308-1.032-2.215-3.848-6.68-5.73-8.532-2.014-1.988-2.014-1.637-3.31-1.098a18.8 18.8 0 0 0-3.028 1.614c-1.875 1.246-2.915 2.28-3.643 3.836-.728 1.555-1.055 5.2 2.703 12.028 3.759 6.827 6.395 10.318 11.853 15.76 5.457 5.443 9.654 8.369 15.788 11.81 7.59 4.25 10.5 3.421 12.06 2.695 1.56-.727 2.6-1.758 3.847-3.633a18.6 18.6 0 0 0 1.618-3.024c.54-1.292.891-1.292-1.1-3.304Z'
    />
    <defs>
      <linearGradient id='Phone_svg__a' x1={100.5} x2={0.5} y1={50.211} y2={50.211} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#00B3E0' />
        <stop offset={1} stopColor='#2883FF' />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgPhone
