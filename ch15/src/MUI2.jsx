import Button from '@mui/material/Button'
import './MUI2.css' // css파일 import

// 커스터마이징한 css 적용방법
// 1. 외부스타일시트 사용
// className을 이용하여 import한 css에서 적용

function MUI2() {
   return (
      <>
         <Button variant="text" className="btn1">
            Text
         </Button>
         <Button variant="contained" className="btn2">
            Contained
         </Button>
         <Button variant="outlined" className="btn3">
            Outlined
         </Button>
      </>
   )
}

export default MUI2
