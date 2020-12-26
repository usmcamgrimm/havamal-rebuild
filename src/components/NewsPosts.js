import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function SinglePost({ news }) {
  return <div>
    <Link to={`/post/$(news.slug.current)`}>
      <h2 className="text-2xl font-grenze text-blue-lighter text-underline">
        {news.name}
      </h2>
      <Img fluid={news.image.asset.fluid} alt={news.name} />
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