export default function User ({ userName, userEmail }) {
    return (
        <>
            <h2>{userName}</h2>
            <p>Email: {userEmail}</p>
        </>
    )
}