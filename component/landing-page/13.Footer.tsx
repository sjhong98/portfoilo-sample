'use client'

import Kakao from '../../public/assets/landing/Footer_kakao'
import Instagram from '../../public/assets/landing/Footer_instagram'
import Phone from '../../public/assets/landing/Footer_phone'
import Youtube from '../../public/assets/landing/Footer_youtube'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()
  const isPc = useMediaQuery('(min-width: 1611px)')
  const isTablet = useMediaQuery('(max-width: 1610px)')
  const isPcOrTablet = useMediaQuery('(min-width: 901px)')
  const isMobile = useMediaQuery('(max-width: 900px)')

  return !isPcOrTablet ? (
    <div className='w-full h-[383.75px] bg-[#111929] relative pt-[70px]'>
      <div className='self-stretch px-6 inline-flex flex-col justify-start items-start gap-[34px]'>
        <div className='self-stretch flex flex-col justify-start items-start gap-5'>
          <p className="self-stretch justify-center text-white text-[22px] font-bold font-['Pretendard']">
            -
          </p>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p className="justify-center text-[#8b95a1] text-[13px] font-normal font-['Pretendard']">
              사업자 등록번호 : - | 대표 : -
              <br />
              통신판매업 신고번호 : 2025-서울마포-
            </p>
            <p className="justify-center text-[#8b95a1] text-[13px] font-normal font-['Pretendard']">
              -
            </p>
          </div>
        </div>
        <div className='inline-flex justify-start items-center gap-[15px] flex-wrap'>
          <button
            className='cursor-pointer p-3 bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('https://play.google.com/store/apps/details?id=com.ibrdos.pawpawnutbiz')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.63732 3.43383L12.3773 12.0048L3.70232 20.6548C3.5604 20.47 3.45022 20.2628 3.37632 20.0418C3.3381 19.7916 3.3381 19.5371 3.37632 19.2868V4.56683C3.35032 4.17183 3.44132 3.77683 3.63632 3.43383M16.1423 8.26683L13.2893 11.0928L4.65332 2.59983C4.93332 2.50283 5.23332 2.47583 5.52632 2.52183C5.98632 2.64783 6.42532 2.84183 6.82832 3.09483L14.6443 7.41983C15.1523 7.69283 15.6473 7.97983 16.1423 8.26683ZM13.2903 12.9298L16.1293 15.7178L14.0713 16.8638L7.79232 20.3538C7.27232 20.6408 6.75032 20.9148 6.24232 21.2278C6.02495 21.3632 5.78121 21.4506 5.52737 21.4842C5.27353 21.5178 5.01543 21.4969 4.77032 21.4228L13.2903 12.9298ZM20.6503 12.0048C20.6576 12.3545 20.5693 12.6995 20.3948 13.0027C20.2203 13.3058 19.9663 13.5555 19.6603 13.7248L17.3143 15.0268L14.2273 12.0048L17.3273 8.93083C18.1223 9.37383 18.9043 9.81683 19.6853 10.2338C19.9968 10.4079 20.2526 10.6666 20.4232 10.98C20.5938 11.2934 20.6732 11.6487 20.6503 12.0048Z" fill="#99A1AF" />
            </svg>
          </button>
          <button
            className='cursor-pointer p-3 bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('https://apps.apple.com/kr/app/id6743143732')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_5411_13489)">
                <path d="M8.80974 14.9197L14.9197 3.88271C15.0037 3.73071 15.0877 3.58071 15.1637 3.42371C15.2327 3.28171 15.2907 3.13871 15.3287 2.98371C15.4087 2.65771 15.3867 2.31771 15.2627 2.00671C15.1423 1.70031 14.9245 1.44204 14.6427 1.27171C14.3663 1.10435 14.0411 1.03627 13.7207 1.07871C13.4007 1.12171 13.1077 1.27271 12.8767 1.50871C12.7667 1.61871 12.6767 1.74371 12.5937 1.87671C12.5017 2.02271 12.4187 2.17471 12.3347 2.32671L11.9487 3.02371L11.5617 2.32571C11.4777 2.17471 11.3947 2.02271 11.3027 1.87671C11.2217 1.74406 11.1268 1.62037 11.0197 1.50771C10.7943 1.27431 10.4972 1.12325 10.1757 1.07871C9.85573 1.0365 9.53089 1.10457 9.25474 1.27171C8.97302 1.44204 8.75516 1.70031 8.63474 2.00671C8.51118 2.31748 8.4881 2.65915 8.56874 2.98371C8.60674 3.13871 8.66475 3.28171 8.73275 3.42371C8.80875 3.58071 8.89275 3.73071 8.97674 3.88271L10.2247 6.13671L5.36274 14.9187H2.03074C1.86274 14.9187 1.69474 14.9187 1.52774 14.9287C1.37574 14.9377 1.22774 14.9567 1.07974 14.9997C0.769745 15.0897 0.497745 15.2797 0.301745 15.5477C0.105799 15.8174 0.000179845 16.1422 2.29472e-07 16.4756C-0.000179387 16.8089 0.105089 17.1338 0.300745 17.4037C0.497745 17.6717 0.768745 17.8607 1.07974 17.9517C1.22774 17.9947 1.37574 18.0137 1.52774 18.0227C1.69474 18.0327 1.86274 18.0327 2.03074 18.0327H15.1277C15.1675 17.9452 15.2009 17.855 15.2277 17.7627C15.6427 16.3467 14.6117 14.9187 13.1927 14.9187L8.80974 14.9197ZM3.11374 18.5417L2.32174 20.0417C2.23974 20.1977 2.15674 20.3517 2.08274 20.5127C2.01446 20.6577 1.96086 20.8091 1.92274 20.9647C1.8425 21.2979 1.86481 21.6475 1.98674 21.9677C2.10774 22.2857 2.32074 22.5507 2.59374 22.7227C2.86674 22.8947 3.18274 22.9647 3.49474 22.9197C3.80874 22.8757 4.09475 22.7217 4.32074 22.4797C4.42874 22.3647 4.51675 22.2377 4.59874 22.1017C4.68875 21.9517 4.76974 21.7957 4.85174 21.6397L6.00074 19.4637C5.91074 19.3137 5.05374 17.9937 3.11374 18.5417ZM23.6997 15.5357C23.5068 15.2746 23.2329 15.0848 22.9207 14.9957C22.7746 14.9551 22.6243 14.9313 22.4727 14.9247C22.3047 14.9147 22.1377 14.9147 21.9697 14.9147H18.6487L14.2587 7.09971C13.6825 7.70427 13.3068 8.47182 13.1827 9.29771C13.0216 10.3307 13.214 11.3878 13.7287 12.2977L19.0027 21.6907C19.0867 21.8407 19.1697 21.9907 19.2617 22.1347C19.3457 22.2647 19.4357 22.3877 19.5447 22.4987C19.7757 22.7307 20.0687 22.8787 20.3897 22.9217C20.7107 22.9647 21.0327 22.8977 21.3117 22.7317C21.5923 22.5639 21.8104 22.3089 21.9327 22.0057C22.0577 21.6987 22.0787 21.3637 21.9987 21.0417C21.9592 20.8916 21.9039 20.7462 21.8337 20.6077C21.7587 20.4527 21.6737 20.3047 21.5897 20.1547L20.3737 17.9887H21.9697C22.1377 17.9887 22.3047 17.9887 22.4727 17.9797C22.6247 17.9707 22.7727 17.9517 22.9207 17.9097C23.2334 17.8206 23.5077 17.6303 23.7007 17.3687C23.8962 17.1033 24.0013 16.7823 24.0007 16.4527C24.0013 16.1231 23.8962 15.8021 23.7007 15.5367" fill="#99A1AF" />
              </g>
              <defs>
                <clipPath id="clip0_5411_13489">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <a
            href='tel:07045899109'
            className='cursor-pointer p-2 bg-[#1E2939] rounded-xl flex justify-center items-center'
          >
            <p className='w-8 h-8 relative'>
              <Phone width={32} height={32} />
            </p>
          </a>
          <button
            className='cursor-pointer p-2 bg-[#1E2939] rounded-xl flex justify-center items-center'
            onClick={() => router.push('http://pf.kakao.com/_Nxigsn/chat')}
          >
            <div className='w-8 h-8 relative overflow-hidden'>
              <Kakao />
            </div>
          </button>
          <button
            className='cursor-pointer p-2 bg-[#1E2939] rounded-xl flex justify-center items-center'
            onClick={() => router.push('https://www.instagram.com/pawpawnut.official/')}
          >
            <div className='w-8 h-8 relative overflow-hidden'>
              <Instagram />
            </div>
          </button>
          <button
            className='cursor-pointer p-2 bg-[#1E2939] rounded-xl flex justify-center items-center'
            onClick={() => router.push('https://www.youtube.com/@%ED%8F%AC%ED%8F%AC%EB%84%9B')}
          >
            <div className='w-8 h-8 relative overflow-hidden'>
              <Youtube className={'scale-[2]'} />
            </div>
          </button>
        </div>
      </div>
      <div className='self-stretch h-[46px] pl-6 pt-7 border-t border-color-azure-17 inline-flex justify-start items-center'>
        <div className='flex justify-start items-end gap-4'>
          <p className="cursor-pointer justify-center text-[#8b95a1] text-[13px] font-normal font-['Pretendard']"
            onClick={() => router.push('/terms/privacy')}
          >
            개인정보처리방침
          </p>
          <p className="cursor-pointer justify-center text-[#8b95a1] text-[13px] font-normal font-['Pretendard']"
            onClick={() => router.push('/terms/pawpawnut')}
          >
            이용약관
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className='w-full h-[458px] px-[200px] justify-center pb-[40px] bg-gradient-to-b from-[#1e2838] to-[#111828] inline-flex flex-col items-center gap-2.5 overflow-hidden'>
      <div className='self-stretch flex flex-col justify-start items-start gap-[34px] scale-[0.8]'>
        <div className='self-stretch flex flex-col justify-start items-start gap-5'>
          <p className="self-stretch justify-center text-white text-4xl font-bold font-['Pretendard']">
            ㈜아이비알도스
          </p>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p className="justify-center text-[#8b95a1] text-[22px] font-normal font-['Pretendard'] leading-[30px]">
              사업자 등록번호 : - | 대표 : -
              <br />
              통신판매업 신고번호 : 2025-서울마포-
            </p>
            <p className="justify-center text-[#8b95a1] text-[22px] font-normal font-['Pretendard']">
              -
            </p>
          </div>
        </div>
        <div className='inline-flex justify-start items-center gap-[15px] w-full'>
          <button
            className='cursor-pointer p-[19px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            // onClick={() => router.push('https://play.google.com/store/apps/details?id=com.ibrdos.pawpawnutbiz')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.63732 3.43383L12.3773 12.0048L3.70232 20.6548C3.5604 20.47 3.45022 20.2628 3.37632 20.0418C3.3381 19.7916 3.3381 19.5371 3.37632 19.2868V4.56683C3.35032 4.17183 3.44132 3.77683 3.63632 3.43383M16.1423 8.26683L13.2893 11.0928L4.65332 2.59983C4.93332 2.50283 5.23332 2.47583 5.52632 2.52183C5.98632 2.64783 6.42532 2.84183 6.82832 3.09483L14.6443 7.41983C15.1523 7.69283 15.6473 7.97983 16.1423 8.26683ZM13.2903 12.9298L16.1293 15.7178L14.0713 16.8638L7.79232 20.3538C7.27232 20.6408 6.75032 20.9148 6.24232 21.2278C6.02495 21.3632 5.78121 21.4506 5.52737 21.4842C5.27353 21.5178 5.01543 21.4969 4.77032 21.4228L13.2903 12.9298ZM20.6503 12.0048C20.6576 12.3545 20.5693 12.6995 20.3948 13.0027C20.2203 13.3058 19.9663 13.5555 19.6603 13.7248L17.3143 15.0268L14.2273 12.0048L17.3273 8.93083C18.1223 9.37383 18.9043 9.81683 19.6853 10.2338C19.9968 10.4079 20.2526 10.6666 20.4232 10.98C20.5938 11.2934 20.6732 11.6487 20.6503 12.0048Z" fill="#99A1AF" />
            </svg>
          </button>
          <button
            className='cursor-pointer p-[19px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('https://apps.apple.com/kr/app/id6743143732')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_5411_13489)">
                <path d="M8.80974 14.9197L14.9197 3.88271C15.0037 3.73071 15.0877 3.58071 15.1637 3.42371C15.2327 3.28171 15.2907 3.13871 15.3287 2.98371C15.4087 2.65771 15.3867 2.31771 15.2627 2.00671C15.1423 1.70031 14.9245 1.44204 14.6427 1.27171C14.3663 1.10435 14.0411 1.03627 13.7207 1.07871C13.4007 1.12171 13.1077 1.27271 12.8767 1.50871C12.7667 1.61871 12.6767 1.74371 12.5937 1.87671C12.5017 2.02271 12.4187 2.17471 12.3347 2.32671L11.9487 3.02371L11.5617 2.32571C11.4777 2.17471 11.3947 2.02271 11.3027 1.87671C11.2217 1.74406 11.1268 1.62037 11.0197 1.50771C10.7943 1.27431 10.4972 1.12325 10.1757 1.07871C9.85573 1.0365 9.53089 1.10457 9.25474 1.27171C8.97302 1.44204 8.75516 1.70031 8.63474 2.00671C8.51118 2.31748 8.4881 2.65915 8.56874 2.98371C8.60674 3.13871 8.66475 3.28171 8.73275 3.42371C8.80875 3.58071 8.89275 3.73071 8.97674 3.88271L10.2247 6.13671L5.36274 14.9187H2.03074C1.86274 14.9187 1.69474 14.9187 1.52774 14.9287C1.37574 14.9377 1.22774 14.9567 1.07974 14.9997C0.769745 15.0897 0.497745 15.2797 0.301745 15.5477C0.105799 15.8174 0.000179845 16.1422 2.29472e-07 16.4756C-0.000179387 16.8089 0.105089 17.1338 0.300745 17.4037C0.497745 17.6717 0.768745 17.8607 1.07974 17.9517C1.22774 17.9947 1.37574 18.0137 1.52774 18.0227C1.69474 18.0327 1.86274 18.0327 2.03074 18.0327H15.1277C15.1675 17.9452 15.2009 17.855 15.2277 17.7627C15.6427 16.3467 14.6117 14.9187 13.1927 14.9187L8.80974 14.9197ZM3.11374 18.5417L2.32174 20.0417C2.23974 20.1977 2.15674 20.3517 2.08274 20.5127C2.01446 20.6577 1.96086 20.8091 1.92274 20.9647C1.8425 21.2979 1.86481 21.6475 1.98674 21.9677C2.10774 22.2857 2.32074 22.5507 2.59374 22.7227C2.86674 22.8947 3.18274 22.9647 3.49474 22.9197C3.80874 22.8757 4.09475 22.7217 4.32074 22.4797C4.42874 22.3647 4.51675 22.2377 4.59874 22.1017C4.68875 21.9517 4.76974 21.7957 4.85174 21.6397L6.00074 19.4637C5.91074 19.3137 5.05374 17.9937 3.11374 18.5417ZM23.6997 15.5357C23.5068 15.2746 23.2329 15.0848 22.9207 14.9957C22.7746 14.9551 22.6243 14.9313 22.4727 14.9247C22.3047 14.9147 22.1377 14.9147 21.9697 14.9147H18.6487L14.2587 7.09971C13.6825 7.70427 13.3068 8.47182 13.1827 9.29771C13.0216 10.3307 13.214 11.3878 13.7287 12.2977L19.0027 21.6907C19.0867 21.8407 19.1697 21.9907 19.2617 22.1347C19.3457 22.2647 19.4357 22.3877 19.5447 22.4987C19.7757 22.7307 20.0687 22.8787 20.3897 22.9217C20.7107 22.9647 21.0327 22.8977 21.3117 22.7317C21.5923 22.5639 21.8104 22.3089 21.9327 22.0057C22.0577 21.6987 22.0787 21.3637 21.9987 21.0417C21.9592 20.8916 21.9039 20.7462 21.8337 20.6077C21.7587 20.4527 21.6737 20.3047 21.5897 20.1547L20.3737 17.9887H21.9697C22.1377 17.9887 22.3047 17.9887 22.4727 17.9797C22.6247 17.9707 22.7727 17.9517 22.9207 17.9097C23.2334 17.8206 23.5077 17.6303 23.7007 17.3687C23.8962 17.1033 24.0013 16.7823 24.0007 16.4527C24.0013 16.1231 23.8962 15.8021 23.7007 15.5367" fill="#99A1AF" />
              </g>
              <defs>
                <clipPath id="clip0_5411_13489">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <a
            href='tel:07045899109'
            className='cursor-pointer p-[15px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
          >
            <Phone width={32} height={32} />
          </a>
          <button
            className='cursor-pointer p-[15px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('http://pf.kakao.com/_Nxigsn/chat')}
          >
            <Kakao />
          </button>
          <button
            className='cursor-pointer p-[15px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('https://www.instagram.com/pawpawnut.official/')}
          >
            <Instagram />
          </button>
          <button
            className='cursor-pointer p-[15px] bg-[#1E2939] rounded-xl inline-flex justify-center items-center'
            onClick={() => router.push('https://www.youtube.com/@%ED%8F%AC%ED%8F%AC%EB%84%9B')}
          >
            <Youtube width={32} height={32} className={'scale-[2]'} />
          </button>
        </div>
      </div>
      <div className='self-stretch h-[46px] pt-7 border-t border-[#1E2939] inline-flex justify-start items-center gap-[552.52px] scale-[0.8]'>
        <div className='flex justify-start items-end gap-10'>
          <p className="justify-center text-[#8b95a1] text-[22px] font-normal font-['Pretendard'] cursor-pointer"
            onClick={() => router.push('/terms/privacy')}
          >
            개인정보처리방침
          </p>
          <p className="justify-center text-[#8b95a1] text-[22px] font-normal font-['Pretendard'] cursor-pointer"
            onClick={() => router.push('/terms/pawpawnut')}
          >
            이용약관
          </p>
        </div>
      </div>
    </div>
  )
}
