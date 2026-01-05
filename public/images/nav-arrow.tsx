export default function NavArrow(props: { dark: boolean }) {
  return (
    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 527">
        <rect
          id="Rectangle 427"
          width="0.942217"
          height="5.6533"
          transform="matrix(-0.706672 -0.707541 0.706672 -0.707541 1.59869 8)"
          fill={props.dark ? '#fff' : '#161616'}
        />
        <rect
          id="Rectangle 428"
          width="0.942217"
          height="5.6533"
          transform="matrix(0.706672 -0.707541 0.706672 0.707541 0.93158 0.666504)"
          fill={props.dark ? '#fff' : '#161616'}
        />
      </g>
    </svg>
  );
}
