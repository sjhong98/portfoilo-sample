import * as React from 'react'
import type { SVGProps } from 'react'
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 101' {...props}>
    <rect width={100} height={100} y={0.57} fill='url(#Email_svg__a)' rx={50} />
    <path
      fill='#fff'
      d='M32.5 32.71H65a7.5 7.5 0 0 1 7.5 7.5v22.5a7.5 7.5 0 0 1-7.5 7.5H32.5a7.5 7.5 0 0 1-7.5-7.5v-22.5a7.5 7.5 0 0 1 7.5-7.5m0 2.5c-1.25 0-2.35.426-3.2 1.176L48.75 48.96 68.2 36.386c-.85-.75-1.95-1.175-3.2-1.175zm16.25 16.776L27.825 38.41c-.2.55-.325 1.175-.325 1.8v22.5a5 5 0 0 0 5 5H65a5 5 0 0 0 5-5v-22.5c0-.625-.125-1.25-.325-1.8z'
    />
    <defs>
      <linearGradient id='Email_svg__a' x1={100} x2={0} y1={50.211} y2={50.211} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F039A3' />
        <stop offset={1} stopColor='#B348FD' />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgEmail
