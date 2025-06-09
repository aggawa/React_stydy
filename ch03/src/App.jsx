import MyComponent from './MyComponent'
import Type from './Type'
import Say from './Say'
import InputText from './InputText'

// 리액트에서는 컴포넌트 함수명과 파일명을 똑같이 쓴다. 대문자로 시작.
// import 컴포넌트 함수명 from 파일명

// function App() {} 요거 혹은

// props: 자식 컴포넌트에서 특정 속성을 이용해 속성값을 전달
const App = () => {
   return <InputText />
   // return <Say />
   // return (
   //    <Type
   //       str="react"
   //       num={200}
   //       bool={1 == 1}
   //       arr={[0, 1, 2]}
   //       json={{ react: '리액트', time: 2 }}
   //       func={(a, b) => {
   //          return a + b
   //       }}
   //    />
   // )
   // return (
   //    <MyComponent name="하서" job="강사" forNumber={1}>
   //       맑음
   //    </MyComponent>
   //    // 맑음 <- 자식 props
   // )
   // <MyComponent /> <- 닫는게 있다면 이렇게도 사용 가능
}

export default App
