import React from 'react'
const craigPost = require('./postings')

let postList = craigPost.postings.map((data, i) => {
    return (
        <Posting data={data} key={i} />
    )
})

export function Gallery() {
    return (
        <h1>Gallery</h1>
    )
}

export function Posting(post) {
    return (
        <div>
            <h3>{post.title}</h3>
        </div>
    )
}
