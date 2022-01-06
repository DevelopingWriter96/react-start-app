import Box from '@mui/material/Box'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,  
}

const NotFound = () => {
   return (
      <Box sx={style}>
         <h1>Did you get lost in the Lost Woods?</h1>
         <h2>The page you are looking for was not found.</h2>
      </Box>
   )
}

export default NotFound