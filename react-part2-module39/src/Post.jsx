export default function Post({ post }) {
    const { title, body } = post
    return (
        <div>
            <h3 className="item">Post title: {title} </h3>
            <h3 className="item">Post body: {body} </h3>
            <br />
        </div>
    )
}