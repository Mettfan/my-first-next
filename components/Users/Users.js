import { Box, CardContent, Stack } from "@mui/material";
import styles from '../../styles/Users.module.css'
function Users({users, debtors, debts}) {
    debtors = debtors && users.filter( user => user.isDebtor )
    return ( <>
    
        <Stack>
            {users.map(user => {
                return (<div id={user.id} >
                    <Box 
                        display={'flex'}
                        justifyContent={'space-around'}
                    >
                        <CardContent className={styles.name} >{user.name.split(' ')[0]}</CardContent>
                        <CardContent className={styles.phone} >{user.phone}</CardContent>
                        <CardContent className={styles.email} >{user.email}</CardContent>
                    </Box>
                    
                    </div>)
            })}
        </Stack>
    
    </> );
}

export default Users;