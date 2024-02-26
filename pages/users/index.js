import User from "../../components/User";

export default function UserList ({ users }) {

    return (
        <>
            <h1> List of users</h1>
            {users.map( ( user ) => {
                return <>
                    <User userName={user.name} userEmail={user.email}/>
                </>
            })}
        </>
        )
}

export async function getStaticProps () {
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
    return { props: {
        users: data
    }};
}