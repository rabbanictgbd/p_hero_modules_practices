export default function Friend({friend}){
const {name,email,username}=friend
console.log(friend)
    return(
        <div>
        <h3 className="item">Name: {name} </h3>
        <h3 className="item">Email: {email} </h3>
        <h3 className="item">User name: {username} </h3>
        <br />
        </div>
    )
}