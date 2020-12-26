import React from 'react'
import { Link } from 'gatsby'

function SinglePost({ news }) {
  return <div>
    <Link to={`/post/$(news.slug.current)`}>
      <h2 className="tex-2xl font-grenze text-blue-lighter text-underline">
        {news.name}
      </h2>
    </Link>
  </div>
}

export default function NewsPosts({ news }) {
  return <div>
    {news.map((news) => (
      <SinglePost key={news.id} news={news} />
    ))}
  </div>
}