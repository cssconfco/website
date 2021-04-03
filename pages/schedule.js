import Container from '../components/atoms/Container'
import Heading from '../components/atoms/Heading'
import Logo from '../components/atoms/Logo'

import { choices } from '../utils/designTokens'
import { speakers } from '../utils/constants'
import ScheduleBlock from '../components/organisms/ScheduleBlock'

const normalizedSpeakers = speakers.reduce((prev, cur) => {
  prev[cur.id] = cur
  return prev
}, {})

const scheduleData = [
  {
    time: '2021-04-10T08:00-05:00',
    title: 'Welcome'
  },
  {
    time: '2021-04-10T08:15-05:00',
    speaker: normalizedSpeakers['evangelina-ferreira']
  },
  {
    time: '2021-04-10T08:55-05:00',
    speaker: normalizedSpeakers['carlos-azaustre']
  },
  {
    time: '2021-04-10T12:15-05:00',
    title: 'Lunch',
    isBreak: true
  }
]

const schedule = () => {
  return (
    <div className="schedule">
      <Container>
        <Heading size="0" color="blue" withMargin>
          Schedule
        </Heading>
        {scheduleData.map(schedule => (
          <ScheduleBlock key={schedule.time} {...schedule} />
        ))}
        <div className="logo">
          <Logo />
        </div>
      </Container>
      <style jsx>{`
        .schedule {
          background: ${choices.colors.brand.chiffon}
            url('/static/images/fish-tribal-yellow.svg') no-repeat;
          background-size: 80%;
          background-position: right top;
          width: 100%;
          padding: 50px 20px;
        }

        .logo {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default schedule
