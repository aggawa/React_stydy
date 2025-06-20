import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   // 고유 값으로 사용 될 id
   // ref 를 사용하여 변수 담기
   const nextId = useRef(4)

   // 할 일 등록
   const onInsert = useCallback(
      (text) => {
         // 추가할 객체 만들기
         const todo = {
            id: nextId.current, // 처음값은 4 (useRef)
            text, // text: text
            checked: false,
            // id: 4
            // text: '입력한값'
            // checked: false <- 이렇게 만들어짐
         }
         setTodos(todos.concat(todo)) // concat - 배열을 합치는 함수
         // 위에서 만든 todo객체를 todos배열에 합친다.
         // setTodos - 원래의 todos를 모두 지우고 concat으로 합쳐준 데이터를 덮어쓴다.
         nextId.current += 1 // nextId 1 씩 더하기 / 다음 id값
         // 이후에 추가는 계속 똑같은 방식으로 추가
      },
      [todos]
   )

   // 할 일 삭제 / 삭제 버튼 클릭시 onRemove 이벤트 발생
   const onRemove = useCallback(
      // 삭제를 누를 todo의 id값
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id !== id)
         // return값이 true일때 removedTodos에 값을 저장
         // removedTodos에 저장되는 값은 삭제 버튼을 누른 값을 제외한 나머지 todos
         setTodos(removedTodos)
         // setTodos를 사용하여 원래의 배열을 지우고 removedTodos에 저장된 새로운 배열로 덮어씀으로 삭제 효과를 낼 수 있다.
      },
      [todos]
   )

   // 할 일 완료, 미완료(토글)
   // 매개변수로 들어온 id에 해당하는 json 객체의 checked 값을 토글로 바꿔준다
   const onToggle = useCallback(
      (id) => {
         // 토글(체크박스)를 선택한 todo의 id값으로 연산
         const toggleTodos = todos.map(
            (todo) =>
               todo.id === id
                  ? {
                       ...todo, // 선택된 todo에 있는 데이터를 불러온다.
                       checked: !todo.checked, // checked 값을 새로 만들고
                       // !연산으로 그의 반대값을 지정한다.
                       // 중복된 키를 가진 값이면 후에있는것이 저장되므로
                       // 새로 만든 chacked값이 저장되고 바뀐 값이 toggleTodos에 저장된다.
                    }
                  : todo
            // 선택된 todo가 아닌 경우 그 값 그대로 toggleTodos에 저장한다.
         )
         setTodos(toggleTodos)
         // 기존의 todos의 데이터를 지우고 새로 만들어진 toggleTodos의 값을 todos에 저장한다.
      },
      [todos]
   )

   return (
      <TodoTemplate>
         {/* todoInsert 컴포넌트에서 할일을 등록하므로 onInsert 함수 props로 전달 */}
         <TodoInsert onInsert={onInsert} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      // 경로 참고하쇼
   )
}

export default App
