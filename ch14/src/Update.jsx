import React, { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 } // 초기 state
   }

   handleClick = () => {
      // count state 1 증가
      this.setState({ count: this.state.count + 1 })
   }

   // 2. 업데이트시 기존 가상돔(Virtual DOM)과 새로운 가상돔(New Virtual DOM)을 비교 후 변화 된 부분을 새로운 가상돔에 반영
   render() {
      console.log('😘 렌더링 중')
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+1</button>
         </div>
      )
   }

   componentDidMount() {
      console.log('😘 컴포넌트 렌더링 완료')
   }

   // 1. props 또는 state변경시 호출됨 -> 렌더링 여부 결정
   shouldComponentUpdate(nextProps, nextState) {
      console.log('👌sholdComponentUpdate 호출')
      console.log('현재 state: ', this.state.count, '다음 state: ', nextState.count)
      return true // false라면 재렌더링이 되지 않는다.
   }

   // 3. DOM이 업데이트 되기 직전의 props와 state를 가져온다
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('👌getSnapshotBeforeUpdate 호출')
      console.log('이전 state: ', prevState.count)
      return '스냅샷 데이터' // 아래 componentDidUpdate() 로 전달됨
   }

   // 4. 새로운 가상돔(New Virtual DOM)을 실제 브라우저 돔(Real Browser DOM)에 반영

   // 5. 업데이트 완료 후 실행
   // useEffect(() => {..}, [state])와 동일한 시점에 실행
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('👌componentDidUpdate 호출')
      console.log('이전 State: ', prevState.count)
      console.log('스냅샷: ', snapshot)
   }

   // 6. 언마운트(컴포넌트 제거) 직전 정리
   // 이 코드 언저리에 마우스 포인트 두고 ctrl + s 누르면 결과를 볼 수 있음
   componentWillUnmount() {
      console.log('🤷‍♂️componentWillUnmount 호출')
   }
}

export default Update
