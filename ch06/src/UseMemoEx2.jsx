import React, { useState, useMemo } from 'react'

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

const UseMemoEx2 = () => {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => {
      setNumber(e.target.value)
   }

   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }

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

export default UseMemoEx2
