import Button from '@mui/material/Button'

// 커스터마이징한 css 적용방법
// 2. 인라인 스타일로 적용

function MUI2_2() {
   return (
      <>
         <Button
            variant="text"
            style={{
               backgroundColor: 'blue',
               color: 'white',
               padding: '16px',
            }}
         >
            Text
         </Button>
         <Button
            variant="contained"
            style={{
               height: '200px',
               backgroundColor: 'red',
            }}
         >
            Contained
         </Button>
         <Button variant="outlined">Outlined</Button>
      </>
   )
}

export default MUI2_2
