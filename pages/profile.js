import axios from "axios";
import Card from "../components/Card/Card";
import Users from "../components/Users/Users";
import styles from '../styles/Profile.module.css'
const user = {
    name: 'Julieta',
    phone: '722 211 2529',
    debt: 1200,
    image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067',
    email: 'julieta@gmail.com'
}

function profile(props) {
    return ( <>

        <div className={styles.title}>
            <h1>
                Mi Perfil
            </h1>
            <Card user = {user}></Card>

            <Users debtors = {true} debts = {true} users={ props.users } ></Users>
        </div>
    
    </> );
}
profile.getInitialProps =  async (ctx) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data =  res.data
    console.log(data);
    return {users: data}
  }


export default profile;