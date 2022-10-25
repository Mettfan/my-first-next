import { AppBar, Button, Icon, TextField } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useRouter } from 'next/router';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
function Nav({children}) {
    let nav = useRouter()
    let goto = ( path ) => {
        nav.push(path)
        
    } 
    return ( <>
        <nav className={styles.nav}>
            <AppBar className={styles.appbar}>
                {/* <TextField variant= 'filled'>  Search </TextField> */}
                
                <Button className={styles.button} variant='contained' onClick={() => {goto('/')}}> Home </Button>     
                <Button className={styles.button} variant='contained' onClick={() => {goto('/profile')} }> Profile </Button>     
                <Button className={styles.button} variant='contained'> Menu </Button>     
            </AppBar>
        </nav>

        
    </> );
}

export default Nav;