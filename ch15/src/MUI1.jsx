import Button from '@mui/material/Button'

function MUI1() {
   return (
      <>
         <Button
            variant="text"
            onClick={() => {
               alert('clicked')
            }}
         >
            Text
         </Button>
         <Button variant="contained" size="large">
            Contained
         </Button>
         <Button disabled>Contained</Button>
         <Button variant="outlined" size="small">
            Outlined
         </Button>
         <Button variant="contained" color="success">
            Color
         </Button>
      </>
   )
}

export default MUI1
