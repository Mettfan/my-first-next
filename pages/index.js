import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Users from '../components/Users/Users'
import Card from '../components/Card/Card'
import { Stack } from '@mui/system'
import { Divider } from '@mui/material'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mettfan's Next</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
      <h1>Welcome to my Page!</h1>
      <Users users = {props.users}/>
      <Divider></Divider>
      <Stack
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        flexWrap='wrap'
        padding='10px'
        
      >
        {
          props.users && props.users.map(user => {
            return (
            <div id={user.id}>
              <Card user = {user}  ></Card> )
            </div>
          }) 
        }


      </Stack>
    </div>
  )
}
Home.getInitialProps = async (ctx) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data =  res.data
  console.log(data);
  return {users: data}
}
