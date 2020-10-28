import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">

            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="foushware"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>


            </div>

            <img className="post__image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />

            <h4 className="post__text"><strong>UserName: </strong>London,United Kingdom</h4>

            {/* Each Post  */}
            {/* 1- Header =  Avatar circlerImage + UserName */}
            {/* 2- Post Image */}
            {/* 3- UserName + caption */}
            {/* 4- Post Comments */}
            {/* Each Post  */}




        </div>
    )
}

export default Post







