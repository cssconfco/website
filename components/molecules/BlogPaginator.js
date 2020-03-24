import PropTypes from 'prop-types'

import { choices } from '../../utils/designTokens'

const BlogPaginator = ({ href, direction, title }) => (
  <>
    <div className="blog-paginator__container">
      <a href={href}>
        <span>{direction}</span>
        <h5>{title}</h5>
      </a>
    </div>
    <style jsx>
      {`
        .blog-paginator__container {
          margin-bottom: 30px;
        }

        .blog-paginator__container a {
          color: ${choices.colors.brand.tuna};
          text-decoration: none;
        }

        .blog-paginator__container a:focus {
          border: unset !important;
          box-shadow: unset !important;
          outline: unset !important;
        }

        .blog-paginator__container span {
          font-size: 15px;
        }

        .blog-paginator__container h5 {
          font-family: Apercu, Arial, sans-serif !important;
          font-weight: ${choices.fontWeight.semibold} !important;
        }
      `}
    </style>
  </>
)

BlogPaginator.propTypes = {
  href: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default BlogPaginator
