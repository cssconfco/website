import PropTypes from 'prop-types'
import classNames from 'classnames'
import dayjs from 'dayjs'

import Subtitle from '../atoms/Subtitle'
import Heading from '../atoms/Heading'
import { decisions, choices } from '../../utils/designTokens'
import getFlag from '../../utils/getFlag'
import Paragraph from '../atoms/Paragraph'
import getTalkType from '../../utils/getTalkType'

const ScheduleBlock = ({
  time,
  title,
  speaker,
  isBreak,
  isDone,
  isCurrent
}) => {
  return (
    <>
      <div
        className={classNames('schedule-block', {
          'is-done': isDone,
          'is-current': isCurrent
        })}
        id={new Date(time).getTime()}
      >
        <span className={classNames('heading', { 'is-break': isBreak })}>
          <div className="time">
            <Subtitle color="red">{dayjs(time).format('h:mm A')}</Subtitle>
          </div>
          <div className="title">
            <Heading size={2} color="blue">
              {title || `${getFlag(speaker)} ${speaker.talkTitle}`}
            </Heading>
            {speaker && (
              <Paragraph color="blue" size="xs">
                {getTalkType(speaker)}
              </Paragraph>
            )}
            {isBreak && <div className="break-divider" />}
          </div>
        </span>
        {speaker && (
          <div className="speaker">
            <div
              className="photo"
              style={{
                backgroundImage: `url('/static/images/speakers/${speaker?.id}.png')`
              }}
            />
            <div className="content">
              <Heading size={4} color="red">
                {speaker.flag} {speaker.name} — {speaker.title}{' '}
                {speaker?.company ? `(${speaker?.company})` : ''}
              </Heading>
              {speaker?.twitterHandler && (
                <Paragraph size="xs" color="red">
                  @{speaker.twitterHandler}
                </Paragraph>
              )}
              <div className="description">
                <Paragraph color="blue" size="sm" isFull>
                  {speaker.talkDescription}
                </Paragraph>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .schedule-block {
          display: flex;
          flex-direction: column;
          margin-bottom: 50px;
          padding-top: 10px;
        }

        .schedule-block.is-done:not(.is-current) {
          opacity: 0.5;
        }

        .schedule-block.is-current {
          box-shadow: ${choices.shadows.down.lg},
            0 -1px 3px 0 rgba(0, 0, 0, 0.06);
          border-radius: ${choices.borderRadius.lg};
          background: ${choices.colors.brand.beige};
          padding: 20px;
        }

        .heading {
          display: flex;
          align-items: flex-end;
          margin-bottom: 30px;
        }

        .heading.is-break {
          align-items: center;
        }

        .time {
          white-space: nowrap;
          margin-right: 30px;
        }

        .title {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding-bottom: 8px;
          border-bottom: 4px solid ${choices.colors.brand.cinnabar};
          width: 100%;
          letter-spacing: 2px;
        }

        .heading.is-break .title {
          border-bottom: none;
          padding-bottom: 0;
          white-space: nowrap;
        }

        .heading:not(.is-break) .title {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .description {
          margin-top: 10px;
        }

        .photo {
          width: 250px;
          height: 200px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          margin-right: 30px;
          margin-left: 50px;
        }

        .break-divider {
          background: url(/static/images/schedule-divider.svg) repeat-x;
          background-size: cover;
          width: 100%;
          height: 50px;
          margin-left: 20px;
        }

        .speaker {
          display: flex;
        }

        .content {
          width: 100%;
        }

        @media (${decisions.queries.screens.mobile}) {
          .title :global(.heading) {
            font-size: 18px;
          }

          .speaker {
            flex-wrap: wrap;
          }

          .photo {
            margin: 0 0 20px;
          }

          .heading.is-break,
          .heading {
            flex-direction: column;
            align-items: flex-start;
          }

          .time {
            margin-right: 0;
            margin-bottom: 10px;
          }

          .time :global(.subtitle) {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}

ScheduleBlock.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  speaker: PropTypes.object,
  isBreak: PropTypes.bool,
  isDone: PropTypes.bool,
  isCurrent: PropTypes.bool
}

export default ScheduleBlock
