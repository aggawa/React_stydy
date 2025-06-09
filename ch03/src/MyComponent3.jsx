const MyComponent = ({ name, job, forNumber, children } = props) => {
   console.log(props)
   // const { name, job, forNumber, children } = props
   return (
      <div>
         <p>안녕하세요. 제 이름은 {name}입니다.</p>
         <p>제 직업은 {job}입니다.</p>
         <p>좋아하는 숫자는 {forNumber}</p>
         <p>자식 props: {children}</p>
      </div>
   )
}

export default MyComponent
