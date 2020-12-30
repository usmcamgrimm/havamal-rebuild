import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function SinglePost({ news }) {
  return <div className="grid">
    <Link to={`/post/$(news.slug.current)`}>
      <h2 className="text-2xl font-grenze text-blue-lighter hover:underline">
        {news.name}
      </h2>
      <h2 className="text-2xl font-grenze text-blue-lighter">
        {news.postAuthor}
      </h2>
      <Img fluid={news.image.asset.fluid} alt={news.name} className="max-w-xs" />
    </Link>
  </div>
}

export default function NewsPosts({ news }) {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 justify-center pt-8">
      {news.map((news) => (
        <SinglePost key={news.id} news={news} />
      ))}
    </div>
  )
}