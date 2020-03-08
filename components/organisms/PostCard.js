import PropTypes from 'prop-types'
import Link from 'next/link'

const truncateDescription = text =>
  text && text.length >= 180 ? `${text.substring(0, 180)} ...` : text

const PostCard = ({ post }) => {
  return (
    <>
      <Link href={post.path}>
        <div className="card__container">
          <div className="card-description__container">
            <h3>{post.title}</h3>
            <h4>{post.publishedAt}</h4>
            <p>{truncateDescription(post.summary)}</p>
          </div>
        </div>
      </Link>
      <style jsx>
        {`
          .card__container {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            height: 200px;
            margin-bottom: 50px;
            transition: 0.3s;
            width: 600px;
          }

          .card__container h3 {
            font-size: 20px;
          }

          .card__container h4 {
            color: #a2a2a2;
            font-size: 15px;
            margin-top: 5px;
          }

          .card__container p {
            margin-top: 5px;
            font-size: 15px;
          }

          .card__container:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }

          .card-description__container {
            height: inherit;
            padding: 20px;
          }
        `}
      </style>
    </>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
}

export default PostCard
