function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)
   console.log(nameList)
   /*
    <li key=0>눈사람<li/>
    <li key=1>얼음<li/>
    <li key=2>눈<li/>
    <li key=3>바람<li/>
    */
   // 리액트에서는 요소를 반복할 때 반드시 요소를 구분하기 위한 key를 지정해줘야 한다.
   // key는 중복될 수 없다.

   return <ul>{nameList}</ul>
}

export default IterationSample2
