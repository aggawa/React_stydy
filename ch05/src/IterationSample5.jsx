import { use, useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const nameList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
         {name.text}
      </li>
   ))

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   const onChange = (e) => setInputText(e.target.value)

   // 리스트에 값 추가
   const onClick = () => {
      // concat : 두개 이상의 배열을 합치는 함수
      const nextNames = names.concat({
         id: nextId, //5
         text: inputText, // input 창에서 사용자가 입력한 값
      })
      setNames(nextNames) // names state를 합친 배열인 nextNames로 변경
      setNextId(nextId + 1) // nextId값 1증가 (key값 / 다음 값을 위해)
      setInputText('') // inputText를 빈 문자열로 초기화 / 다음값 받아야함
   }

   // 리스트 삭제
   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)

      setNames(nextNames) // 왜 이렇게 되는거지?????? 왜 되는거지???
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
