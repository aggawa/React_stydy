const MyComponent = (props) => {
   console.log(props)
   return (
      <div>
         <p>안녕하세요. 제 이름은 {props.name}입니다.</p>
         <p>제 직업은 {props.job}입니다.</p>
         <p>좋아하는 숫자는 {props.forNumber}</p>
         <p>자식 props: {props.children}</p>
      </div>
   )
}

export default MyComponent
