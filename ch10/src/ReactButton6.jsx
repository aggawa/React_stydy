import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트 (변수명 대문자)
// 벡틱안에 css 작성(css 코드와 똑같이 작성)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

// 감싸기 기능을 이용해서 기존의 StyledButton의 성질을 그대로 가져온다.
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

// 리액트 전통 방식으로 만든 컴포넌트
const ReactButton = (props) => {
   console.log(props)
   // 리액트 전통방식으로 만든 컴포넌트를 감싸기로 사용하고 싶다면 아래와 같이 className을 지정해준다.
   return <button className={props.className}>{props.children}</button>
}

// ReactButton의 성질을 그대로 가져오면서 폰트사이즈 50px의 버튼을 만들고 싶다 -> 적용 안됨
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
   background-color: salmon;
`

// &은 현재 컴포넌트를 의미
// 가상클래스(:hover, :focus, :active)나
// 가상요소(::before, ::after)와 결합해서 사용
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: orange;
   font-size: ${(props) => props.size || '10px'};
   // || <- 앞의 값이 있다면 그걸 적용하고 없다면 뒤의 것을 적용

   &:hover {
      background-color: darkblue;
   }
`

function ReactButton6() {
   return (
      <>
         {/* <StyledButton>버튼</StyledButton> */}
         {/* <LargeButton>Large</LargeButton> */}
         {/* <ReactButton>React</ReactButton> */}
         {/* <ReactLargeButton>React Large</ReactLargeButton> */}
         <PrimaryButton primary>Normar</PrimaryButton>
         {/* primary가 있으면 white */}
         <PrimaryButton size="20px">Normar</PrimaryButton>
         {/* size가 있다면 있는값적용 없다면 10px적용 */}
         <PrimaryButton>Normar</PrimaryButton>
         {/* primary가 없으면 blue */}
      </>
   )
}

export default ReactButton6
