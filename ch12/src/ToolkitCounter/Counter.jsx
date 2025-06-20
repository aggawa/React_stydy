import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'
import { useState } from 'react'
import counterSlice from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   // store에 slice가 여러개가 지정되므로 state.store에 지정한 슬라이스 key값으로 가져온다.
   // state.counter = {value: 0}
   const count = useSelector((state) => state.counter.value)
   // ㄴ 이부분이 중요 왜 그런지 생각
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
               // 여기서 action객체가 아닌 action생성자가 발생하는것임
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
         {count}
      </div>
   )
}

export default Counter
