import PropTypes from 'prop-types'

import Container from '../atoms/Container'
import BlogPaginator from '../molecules/BlogPaginator'
import Logo from '../atoms/Logo'
import Responsive from '../atoms/Responsive'

import blogPosts from '../../blog/blogPosts'

import { links } from '../../utils/constants'
import { choices } from '../../utils/designTokens'

function BlogPost({ meta, children }) {
  const current = blogPosts.map(({ title }) => title).indexOf(meta.title)

  const next = blogPosts[current - 1]
  const prev = blogPosts[current + 1]

  return (
    <div>
      <Container>
        <div>
          <Responsive.Mobile>
            <Logo width={50} />
          </Responsive.Mobile>
          <Responsive.Desktop>
            <Logo width={100} />
          </Responsive.Desktop>
        </div>
        <a className="back__link" href={links.BLOG}>
          {'<'} BACK TO BLOG{' '}
        </a>
        <h4>{meta.title}</h4>
        {children}
        {next || prev ? (
          <div>
            <hr />
            <div className="blog-pagination__container">
              <div>
                {prev && (
                  <BlogPaginator
                    href={prev.path}
                    direction="< Previous post"
                    title={prev.title}
                  />
                )}
              </div>
              <div>
                {next && (
                  <BlogPaginator
                    href={next.path}
                    direction="Next post >"
                    title={next.title}
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </Container>
      <style jsx>
        {`
          .back__link {
            color: ${choices.colors.black};
            font-size: 13px;
            margin-top: 20px;
            margin-bottom: 40px;
            text-decoration: none;
          }

          .back__link:focus {
            border: unset !important;
            box-shadow: unset !important;
            outline: unset !important;
          }

          .blog-pagination__container {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}

BlogPost.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default BlogPost
