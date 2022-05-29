import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { httpGetPosts } from '../redux/posts.action'

const PostsPage = ({ posts, httpGetPosts }) => {
    // const users = useSelector((state) => state.posts)
    const { loading, data, error } = posts
    // const dispatch = useDispatch()
    useEffect(() => {
        httpGetPosts()
    }, [])
    return (
        <>
            <h1>Posts Page</h1>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && data.length && (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

const loadData = (store, param) => {
    return store.dispatch(httpGetPosts(param))
}

const mapToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default {
    component: connect(mapToProps, { httpGetPosts })(PostsPage),
    loadData,
}
