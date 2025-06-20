// initialState - 초기값 - Json객체로 생성
const initialState = { count: 0 }

// state와 action은 고정이라고 생각하면 된다.
// state에는 항상 initialState를 디폴트 값으로 적용
// action은 dispatch에서 전달해주는 액션을 받아온다.
function counterReducer(state = initialState, action) {
   // dispatch({ type: 'increment' }) 실행 후
   // action = { type: 'increment' }
   // payload붙인 후 -> action = { type: 'increment', payload: 2 }

   // 타입명은 자유롭게 지정
   switch (action.type) {
      // *** 리덕스는 항상 불변성을 유지해야 한다. ***
      // *** 새로운 객체 or 배열을 만들어서 반환한다. ***
      case 'increment':
         // return { count: state.count + 1 }
         return { count: state.count + action.payload }
      case 'decrement':
         // return { count: state.count - 1 }
         return { count: state.count - action.payload }

      // payload를 이용하여 payload값만큼 증감하는 것을 만들 수 있음
      default:
         // 맨처음 사이트에 들어오는 경우 action 값이 없기 때문에 state를 반환
         // state 초기값 -> initialState
         return state
   }
}

export default counterReducer
