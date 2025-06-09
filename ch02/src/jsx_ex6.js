function App() {
   // css 인라인 스타일 적용
   const name = '리액트'
   const style = {
      backgroundColor: 'red', // background-color (카멜표기법)
      color: 'black', // 속성값은 문자열로
      fontSize: '48px', // font-size (카멜표기법)
      padding: 16, // 16px -> 단위 생략시 px로 지정
   }

   return <div style={style}>{name}</div>

   // 다른 방법으로는 직접적으로 박아 넣을수도 있다. 근데 위에 방법이 더 조음
   return (
      <div
         style={{
            backgroundColor: 'red', // background-color (카멜표기법)
            color: 'black', // 속성값은 문자열로
            fontSize: '48px', // font-size (카멜표기법)
            padding: 16, // 16px -> 단위 생략시 px로 지정
         }}
      >
         {name}
      </div>
   )
}

export default App
