import React, { useState } from 'react'

function EventPractice() {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   console.log('재실행')

   const onClick = () => {
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // state값을 초기화
      setUsername('')
      setMessage('')
   }

   const onKeyDown = (e) => {
      // 엔터를 눌렀을 때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   // input창에 입력한 값을 각각의 state에 적용
   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         {/* disabled = false */}
         {/* '' = false <- 값이 없을 때  */}
         {/* 두 입력창 모두 입력이 되었을 때 활성화가 되도록 하는것임 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice
