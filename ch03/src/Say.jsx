import { useState } from 'react'

const Say = () => {
   // state: 컴포넌트 내부에서 바뀔 수 있는 값
   // state를 사용하기 위해 useState 선언
   // const[state값을 저장할 변수, state값을 바꿀 함수 = useState초기 state값 지정]
   // useState - state 값을 바꿀 함수
   const [message, setMessage] = useState('초기값')
   const onClickEnter = () => {
      setMessage('안녕하세요.')
   }
   const onClickLeave = () => {
      setMessage('안녕히가세요')
   }

   const [color, setColor] = useState('black')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            빨강
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            초록
         </button>
         <button
            onClick={() => {
               setColor('blue')
            }}
         >
            파랑
         </button>
      </div>
   )
}

export default Say
