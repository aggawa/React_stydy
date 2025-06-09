function IterationSample() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name) => <li>{name}</li>)
   console.log(nameList)
   /*
    <li>눈사람<li/>
    <li>얼음<li/>
    <li>눈<li/>
    <li>바람<li/>
    */
   // 반복되는 녀석들은 key를 갖고 있어야 해서 오류가 남

   return <ul>{nameList}</ul>
}

export default IterationSample
