function App() {
   const type = 'radio'
   const str = 'string'
   const number = 0

   return (
      <>
         <input type="text" value="리액트" disabled={true} />
         <br />
         {/* 앞에있는 것이 true면 앞의 값을 랜더링 */}
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={true} />
         선택1
         <br />
         {/* 앞의것이 true면 뒤의 결과를 랜더링 */}
         {/* str || number => true || false => true */}
         <input type={type} checked={str || number} />
         선택2
      </>
   )
}

export default App
