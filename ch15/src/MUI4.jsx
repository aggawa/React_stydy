import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => {
   console.log(theme)
   return {
      backgroundColor: '#fff',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.typography.body2,
   }
})

/*
xs, 0px
sm, 600px
md, 900px
lg, 1200px
xl, 1536px
*/

function MUI4() {
   //    return (
   //       <Container
   //          maxWidth="md"
   //          sx={{
   //             backgroundColor: 'skyblue',
   //          }}
   //       >
   //          콘테이너
   //       </Container>
   //    )
   return (
      <Container maxWidth="md">
         {/* container: 부모 그리드 역할 표시 */}
         <Grid container>
            {/* <Grid size={8}>1</Grid>
            <Grid size={4}>2</Grid>
            <Grid size={6}>3</Grid>
            <Grid size={6}>4</Grid> */}
            {/* 12비율 그거 알지? */}

            {/* 화면 사이즈가 md가 넘어가면 md 비율 적용 그렇지 않으면 sx 사이즈 비율 적용 */}
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
         </Grid>
      </Container>
   )
}

export default MUI4
