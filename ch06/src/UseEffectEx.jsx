import { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')

   // ★ useEffect는 실행되는 시점을 아는게 중요하다.
   // 1. 컴포넌트가 렌더링 될때마다 실행

   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log({ name, nickName })
   //    })

   //   console.log({ name: name, nickName: nuckName })
   //   ↑ 키와 값으로 오는 변수명이 같으면 단축해서 사용할 수 있음 ㅇㅇ

   // 2. 맨 처음 랜더링이 될때만 실행되고, 업데이트(리랜더링) 될때는 실행되지 않음

   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log({ name, nickName })
   //    }, [])

   // 3. 처음과 특정 값이 변경될때만 호출 / 아래 코드에서는 [name]값 변경시에만

   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log({ name, nickName })
   //    }, [name])

   // 4. 뒷정리 함수
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.')
      console.log(name)

      return () => {
         console.log('컴포넌트가 리렌더링 되기 전..')
         console.log(name)
      }
   }, [name])

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickName} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름:</b>
               {name}
            </div>
            <div>
               <b>닉네임:</b>
               {nickName}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
