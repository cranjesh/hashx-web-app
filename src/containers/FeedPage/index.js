import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PageScroll from "../../components/page-scroll/PageScroll";
import { setFeedLeftCardIndex } from './actions'

const FeedPage = () => {
    // const dispatch = useDispatch()

    const onLeave = () => {
        // dispatch(setFeedLeftCardIndex())
        console.log('k')
    }

    return (
        <main style={{ padding: "1rem 0" }}>
            <h4>Home
                <Link to="/profile">
                    <button onClick={onLeave}>Profile</button>
                </Link>
            </h4>
            <PageScroll/>
        </main>
    )
}
export default FeedPage
