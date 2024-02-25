export default function UserList ({ users }) {

    return (
        <>
            <h1> List of users</h1>
            {users.map( ( user ) => {
                return <>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
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