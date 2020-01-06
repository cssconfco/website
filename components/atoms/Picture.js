import PropTypes from 'prop-types'

import getCenteredStyles from '../../utils/getCenteredStyles'
import { getImageUrlForLink, getImageAlt } from '../../utils/getImageProps'

const Picture = ({ image, style, width, isInline, isCentered }) => {
  if (!image) {
    return null
  }

  return (
    <>
      <picture
        style={{
          lineHeight: 0,
          maxWidth: `${width}px`,
          ...getCenteredStyles(isCentered),
          ...style // This needs to be at the end to override the styles
        }}
      >
        <img alt={getImageAlt(image)} src={getImageUrlForLink(image)} />
      </picture>
      <style jsx>{`
        picture {
          display: ${isInline ? 'inline-block' : 'block'};
        }

        img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

Picture.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  style: PropTypes.object,
  width: PropTypes.number,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool
}

export default Picture
