import React, { useState, useMemo, useCallback } from 'react'

const getAverage = (numbers) => {
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}
// reduce <- 누적 합산 같은 곳에 많이 쓰이는 함수
// 예를들어 1, 2, 3, 4 리스트가 있을때 (a, b) <- 여기서는 (1, 2)를 가져와 a + b 연산을 함
// 다음에 오는 a는 위의 연산을 통해 나온 3, b는 리스트의 3, 즉 다시 a + b 연산을 함
// 다음에 오는 a는 위의 연산을 통해 나온 6, b는 리스트의 4, 다시 연산을 하여 10! 뭔 말인지 알겄제?

const UseCallbackEx = () => {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // useCallback: 컴포넌트가 리렌더링이 될때 함수가 재생성 되지 않도록 해준다.
   // 함수가 재생성되면 성능이 저하됨

   // 컴포넌트가 처음 렌더링 될때만 함수 생성
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   // number, list state의 값이 바뀔때만 함수 재생성
   // *** 함수 안에서 state값을 참조(사용) 하는 경우 반드시 state값을 지정해줘야 한다.
   // *** 함수를 재생성 하지 않으면 바뀐 state값을 올바르게 가져올 수 없다.
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }, [number, list])

   // list state가 바뀔때만 getAverage() 함수 실행
   const avg = useMemo(() => getAverage(list), [list])

   return (
      <div>
         <input value={number} onChange={onChange}></input>
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값:</b> {avg}
         </div>
      </div>
   )
}

export default UseCallbackEx
