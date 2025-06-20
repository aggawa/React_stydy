// 커스터마이징한 css 적용방법
// 4. styled 사용
//

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme) // MUI에서 사용하는 CSS 속성값 객체
   // 여기서 값 확인

   // 테마객체는 MUI 컴포넌트 전체에 공통적으로 적용되는 디자인 시스템 정보를 가지고 있다. -> 협업시 일관성있는 디자인을 만들 수 있다.
   return {
      //   backgroundColor: 'blue',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(2),
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      }, // 이것들은 콘솔창에서 확인해보센
   }
})

function MUI2_4() {
   return <CustomButton>버튼</CustomButton>
}

export default MUI2_4
