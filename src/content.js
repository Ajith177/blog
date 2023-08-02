import React from 'react'
const content = () => {
    const date=[{
        title:'Blog_post',
        author:'Ayush bedi'

    },
    {
    title:'Blog_post_2',
    author:'Ajith Ganapathy'
    }]
  return (
    <div class="content">
        <h2 class="coloring">{date[0].title}</h2>
        <p class="writtens">{date[0].author}</p>

        <h2 class="coloring">{date[1].title}</h2>
        <p class="writtens">written by mario</p>
        <p class="writtens">{date[1].author}</p>      
    </div>
  )
}

export default content
