import { use } from "react"
import Friend from "./Friend"

export default function Friends({ friendsPromise }) {
    const friends = use(friendsPromise)
    console.log(friendsPromise)

    return (
        <div className="border">
            <h3> Friends: {friends.length} </h3>
            <h4>
                {
                  friends.map(friend=><Friend friend={friend}></Friend>)  
                }
            </h4>
        </div>
    )
}