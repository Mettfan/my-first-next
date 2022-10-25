import { Avatar, Box, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styles from '../../styles/Profile.module.css'
import gato from '../../assets/gato.jpg'
function Card({user}) {
    return ( <>
    
        <Stack 
            variant='outlined'
            alignItems={'center'}
            padding={'10px'}
            >
                
            <Avatar className={ styles.image } variant="rounded" src={user.image || gato} />
            <Typography fontWeight={700} >{user.name}</Typography >
            {/* <Divider light>Información</Divider> */}
            <Box
                display={'flex'}
                flexDirection={'row'}
            >
                <CardContent>{user.phone}</CardContent>
                <CardContent>{user.debt}</CardContent>
            </Box>
            <CardContent>{user.email}</CardContent>
        </Stack>
    
    </> );
}

export default Card;