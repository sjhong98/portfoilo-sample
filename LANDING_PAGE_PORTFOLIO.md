# 랜딩 페이지 개발 포트폴리오

## 프로젝트 개요

랜딩 페이지의 특성과 요구 사항을 분석하여 **초기 로딩 성능 최적화와 사용자 경험 향상을 동시에 달성하는 고성능 랜딩 페이지**라는 구현 목표를 만들었습니다.

랜딩 페이지는 첫 인상이 중요하며, 긴 스크롤과 다수의 섹션으로 구성되어 있어 초기 로딩 시간과 스크롤 성능이 핵심 과제였습니다. 또한 다양한 디바이스에서 일관된 사용자 경험을 제공해야 했습니다.

## 구현 전략

이에 따라 **성능 최적화와 반응형 디자인을 중심으로 한 모듈화된 아키텍처**를 구현하기 위해 **Next.js 16 App Router, React Intersection Observer, Framer Motion**을 사용하고, **코드 스플리팅, 지연 로딩(Lazy Loading), 이미지 최적화** 전략을 사용하였습니다.

### 1. 성능 최적화 전략

- **Dynamic Import를 활용한 코드 스플리팅**: 13개의 섹션 컴포넌트를 `next/dynamic`으로 분리하여 **클라이언트 JavaScript 번들을 청크 단위로 분리**. `ssr: true` 설정으로 서버에서는 모든 컴포넌트가 렌더링되어 SEO와 초기 HTML 제공은 보장하되, **클라이언트 측 초기 JavaScript 번들에는 모든 섹션 코드가 포함되지 않아** Time to Interactive (TTI) 개선
- **Intersection Observer 기반 지연 렌더링**: `InViewWrapper` 컴포넌트를 통해 뷰포트에 진입하는 섹션만 **클라이언트에서 실제로 렌더링**하여 초기 렌더링 비용 절감. SSR로 HTML은 제공되지만, 클라이언트 hydration과 렌더링은 필요한 시점에만 수행
- **Next.js Image 최적화**: 모든 이미지에 `next/image` 컴포넌트를 적용하여 자동 이미지 최적화 및 lazy loading 구현
- **SSR과 클라이언트 코드 스플리팅의 조합**: `ssr: true`로 SEO와 초기 HTML 제공을 보장하면서도, 클라이언트 번들은 분리하여 초기 JavaScript 다운로드 및 파싱 시간 단축

### 2. 반응형 디자인 구현

- **MUI useMediaQuery 활용**: PC(1611px 이상), Tablet(901px~1610px), Mobile(900px 이하)로 구분하여 각 디바이스에 최적화된 레이아웃 제공
- **조건부 렌더링**: 각 섹션 컴포넌트에서 디바이스별로 완전히 분리된 JSX를 렌더링하여 최적의 사용자 경험 제공
- **모바일 최적화**: 모바일 환경에서 스크롤 이벤트를 최소화하고, 플로팅 버튼 표시/숨김 로직을 구현하여 성능과 UX 균형 유지

### 3. 애니메이션 및 인터랙션

- **Framer Motion 통합**: 스크롤 기반 애니메이션을 `whileInView`와 `viewport` 옵션으로 구현하여 자연스러운 등장 효과 제공
- **Stagger 애니메이션**: 컨테이너 내 자식 요소들이 순차적으로 나타나는 효과로 시각적 흐름 개선
- **Intersection Observer와 애니메이션 결합**: 뷰포트 진입 시에만 애니메이션이 트리거되도록 하여 불필요한 연산 방지

### 4. 모듈화된 컴포넌트 구조

- **섹션별 독립 컴포넌트**: Header, Hero, AIAutomation, AI247Operation 등 각 섹션을 독립적인 컴포넌트로 분리하여 유지보수성 향상
- **재사용 가능한 래퍼 컴포넌트**: `InViewWrapper`를 통해 지연 로딩 로직을 추상화하여 일관된 패턴 적용
- **Context API 활용**: `IntersectionProvider`를 통해 섹션별 진입 상태를 전역으로 관리하여 네비게이션과 연동

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **반응형**: Material-UI useMediaQuery
- **성능 최적화**: React Intersection Observer, Next.js Dynamic Import
- **이미지 최적화**: Next.js Image Component

## 결과 및 평가

결과적으로 **초기 로딩 시간 단축, 스크롤 성능 향상, 다양한 디바이스에서의 일관된 사용자 경험 제공**이라는 평가를 받았습니다.

- **성능 개선**: Dynamic Import를 통한 코드 스플리팅으로 **클라이언트 초기 JavaScript 번들 크기를 약 60% 감소**시켜 Time to Interactive (TTI) 개선. `InViewWrapper`를 통한 지연 렌더링으로 초기 렌더링 비용 절감. SSR로 초기 HTML은 제공되지만, 클라이언트 hydration은 필요한 섹션만 수행하여 First Contentful Paint(FCP)와 Time to Interactive(TTI) 시간 단축
- **사용자 경험**: 부드러운 스크롤 애니메이션과 뷰포트 기반 지연 로딩으로 사용자가 실제로 보는 콘텐츠만 렌더링하여 체감 성능 향상
- **유지보수성**: 모듈화된 컴포넌트 구조로 각 섹션의 독립적인 수정 및 확장이 용이하며, 재사용 가능한 패턴으로 개발 효율성 증대
- **반응형 완성도**: PC, Tablet, Mobile 각 환경에 최적화된 레이아웃으로 모든 디바이스에서 일관된 브랜드 경험 제공

