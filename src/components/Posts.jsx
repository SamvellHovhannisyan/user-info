import {useEffect, useState} from "react";
import {MDBTabsContent, MDBTabsLink} from "mdb-react-ui-kit";
import {getPostComments, getUserPosts} from "../redux/user/action";
import {connect} from "react-redux";
import {Loading} from "./Loading";


function Posts(props) {

    const [activePost, setActivePost] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleBasicClick = (value) => {
        if (value !== activePost)
            setActivePost(value);
            getComments(value)

    };

    useEffect(() => {
        props.getUserPosts(props.userId)
    }, [props.userId])


    const getComments = (postId) => {
        setLoading(true)
        setActivePost(postId)
        props.getPostComments(postId)
        setLoading(false)
    }


    return (
        <>
            <h1 className='text-center m-5 text-bg-success'>Posts</h1>
            <div className='post-cards'>
                {
                    props.userPosts.map((post) =>
                        <MDBTabsLink key={post.id} className="current-post card bg-dark text-white m-5"
                                     onClick={() => handleBasicClick(post.id)} active={activePost === post.id}
                        >
                            <div className="card-header ">
                                <h2>{post.title.slice(0, 9)}</h2>
                            </div>
                            <div className="card-body bg-secondary">
                                <p className="card-text">{post.body}</p>
                            </div>
                            <MDBTabsContent className='p-3 bg-secondary '>
                                {
                                    loading ? <Loading/> :
                                    activePost === post.id &&
                                    props.postComments.map((comment) =>

                                        <div>
                                            <h6 className='bg-black'>{comment.email}</h6>
                                            <p>{comment.name}</p>
                                        </div>
                                    )
                                }
                            </MDBTabsContent>
                        </MDBTabsLink>
                    )

                }
            </div>

        </>
    )

}


function mapStateToProps(state) {
    console.log(state)
    return {
        userPosts: state.user.userPosts ,
        postComments: state.user.postComments ,
    }
}

const mapDispatchToProps = d => ({
    getUserPosts: (params) => d(getUserPosts(params)),
    getPostComments: (params) => d(getPostComments(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)