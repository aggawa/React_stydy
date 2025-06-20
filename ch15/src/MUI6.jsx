import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50'
import IconButton from '@mui/material/IconButton'

function MUI6() {
   return (
      <>
         {/* import를 해주고 그냥 붙여쓰면 아이콘 완성띠 */}
         <AccessTimeFilledIcon />

         <br />

         {/* IconButton: 아이콘을 버튼처럼 사용할 수 있다. */}
         <IconButton>
            <BatteryCharging50Icon />
         </IconButton>

         {/* 앞에서 배웠던 내용 응용 가능 / aria-label은 아이콘 설명 */}
         <IconButton color="secondary" aria-label="충전중">
            <BatteryCharging50Icon />
         </IconButton>
      </>
   )
}

export default MUI6
