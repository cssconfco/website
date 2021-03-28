import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Paragrapah from '../atoms/Paragraph'
import Container from '../atoms/Container'
import Speaker from '../molecules/Speaker'
import Heading from '../atoms/Heading'

import { choices, decisions } from '../../utils/designTokens'
import Paragraph from '../atoms/Paragraph'

const handleClickOpenModal = ({
  setSpeaker,
  setShowModal,
  ...speaker
}) => () => {
  setSpeaker(speaker)
  setShowModal(true)
}

const handleClickCloseModal = ({ setSpeaker, setShowModal }) => () => {
  setShowModal(false)
  setSpeaker(null)
}

const Speakers = ({ speakers }) => {
  const [showModal, setShowModal] = useState(false)
  const [speaker, setSpeaker] = useState(null)

  const handleKeydownCloseModal = event =>
    event && event.key === 'Escape' && setShowModal(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeydownCloseModal)

    return () => {
      window.removeEventListener('keydown', handleKeydownCloseModal)
    }
  }, [])

  return (
    <>
      <section id="speakers" className="speakers">
        <Container>
          <div className="container-list">
            <Heading color="red" size={2}>
              Speakers
            </Heading>
            <div className="speaker-list">
              {speakers.map(
                ({
                  id,
                  name,
                  flag,
                  title,
                  bio,
                  twitterHandler,
                  website,
                  company,
                  talkTitle,
                  isLightningTalk,
                  talkLanguage
                }) => (
                  <Speaker
                    key={id}
                    image={id}
                    onClick={handleClickOpenModal({
                      name,
                      flag,
                      title,
                      company,
                      bio,
                      twitterHandler,
                      website,
                      talkTitle,
                      isLightningTalk,
                      talkLanguage,
                      setSpeaker,
                      setShowModal
                    })}
                  >
                    <>
                      <Paragrapah size="sm" weight="bold">
                        {flag} {name}
                      </Paragrapah>
                      <Paragrapah size="xs">
                        {title} {company && <span>({company})</span>}
                      </Paragrapah>
                    </>
                  </Speaker>
                )
              )}
            </div>
          </div>
          <div className="fish"></div>
        </Container>
        {showModal && (
          <div className="modal-container">
            <div className="modal">
              <div className="modal-content">
                <Heading size="0" color="red">
                  {speaker?.flag} {speaker?.name}
                </Heading>
                <Heading size={3} color="red">
                  {speaker?.title}{' '}
                  {speaker?.company ? `(${speaker?.company})` : ''}
                </Heading>
                <div className="talk-info">
                  <Paragraph>
                    {speaker?.talkLanguage === 'English' ? '🇬🇧' : '🇪🇸'}{' '}
                    <strong>
                      {speaker?.isLightningTalk
                        ? '⚡️ Lightning talk'
                        : '🎙 Main talk'}
                    </strong>
                    <br />
                    {speaker?.talkTitle}
                  </Paragraph>
                </div>
                <div className="modal-bio">
                  <Paragraph isFull>{speaker?.bio}</Paragraph>
                </div>
                {speaker?.twitterHandler && (
                  <a
                    className="twitter-link"
                    style={{ color: choices.colors.brand.bayofmany }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://twitter.com/${speaker?.twitterHandler}`}
                  >
                    <Paragraph color="blue">Twitter</Paragraph>
                  </a>
                )}
                {speaker?.website && (
                  <a
                    style={{ color: choices.colors.brand.bayofmany }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={speaker?.website}
                  >
                    <Paragraph color="blue">Website</Paragraph>
                  </a>
                )}
              </div>
              <img
                className="cross-button"
                src="/static/icons/cross.svg"
                onClick={handleClickCloseModal({ setShowModal, setSpeaker })}
              />
              <img
                className="modal-tribal"
                src="/static/images/tribal-modal.svg"
              />
            </div>
          </div>
        )}
      </section>
      <style jsx>{`
        .speakers {
          position: relative;
          background: ${choices.colors.white};
          padding: 20px ${decisions.container.padding} 80px;
          height: 100%;
          min-height: 800px;
          overflow: hidden;
        }

        .container-list {
          position: relative;
          width: 100%;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .container-list > :global(.heading) {
          text-align: center;
        }

        .speaker-list {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .fish {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/fish-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: -200px;
          right: -400px;
          width: 800px;
          height: 800px;
          opacity: 0.8;
        }

        .modal-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          background: rgba(32, 66, 130, 0.95);
          padding: 40px 20px;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          z-index: ${choices.zIndex[50]};
        }

        .modal-tribal {
          position: absolute;
          bottom: -100px;
          right: 10%;
        }

        .cross-button {
          position: absolute;
          top: 25px;
          right: 20px;
          width: 40px;
          cursor: pointer;
        }

        .modal {
          position: relative;
          background: white;
          height: calc(100vh - 80px);
          max-height: 80vh;
          width: 100%;
          max-width: 800px;
          border-radius: 8px;
          padding: 55px 60px;
        }

        .modal-bio {
          margin: 30px 0;
        }

        .twitter-link {
          margin-right: 15px;
        }

        .talk-info {
          margin: 30px 0 10px;
        }

        @media (${decisions.queries.screens.mobile}) {
          .modal-content :global(.heading.size-0) {
            font-size: 18px;
          }

          .modal-content :global(.heading.size-3) {
            font-size: 14px;
          }

          .modal-content .talk-info :global(.paragraph) {
            font-size: 16px;
          }

          .modal-content :global(.paragraph) {
            font-size: 15px;
          }
        }

        @media (${decisions.queries.screens.desktop}) {
          .container-list {
            margin: 150px 0 20px;
            padding: 0 100px;
          }

          .container-list > :global(.heading) {
            text-align: left;
          }

          .speaker-list :global(.speaker:first-child) {
            margin-left: 0;
          }

          .fish {
            top: -450px;
            right: -250px;
            width: 1200px;
            height: 1200px;
          }

          .modal {
            max-height: 600px;
          }
        }
      `}</style>
    </>
  )
}

Speakers.defaultProps = {
  speakers: []
}

Speakers.propTypes = {
  speakers: PropTypes.array
}

export default Speakers
