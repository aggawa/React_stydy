import Box from '@mui/material/Box'

// 커스터마이징한 css 적용방법
// 3. sx props 사용 (json객체 형태로 사용)
// json이니까 카멜표기법으로 알지?
// sx props도 인라인 스타일 적용 밥법과 유사하게 사용하면 된다.

function MUI2_3() {
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'warning.light',
            // &: 현재 컴포넌트라는 뜻
            '&:hover': {
               backgroundColor: 'red',
            },
         }}
      >
         안녕앙년 나는 준모야
      </Box>
   )
}

export default MUI2_3
