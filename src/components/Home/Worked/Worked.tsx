import { Container, Paragraph } from '../../_ui'

import {
  WorkedBox,
  WorkedTitle,
  WorkedSubTitle,
  WorkedContent,
  WorkedTime
} from './Worked.styles'

interface IWorkedProps {
  data: {
    title: string
    companies: {
      number: string
      title: string
      position: string
      description: string
      color: string
      workedTime: string
    }[]
  }
}

export const Worked = ({ data }: IWorkedProps) => {
  const { title, companies } = data

  return (
    <WorkedBox>
      <Container>
        <WorkedTitle>{title}</WorkedTitle>
        <WorkedContent>
          {companies.map((companie, index) => (
            <div key={index}>
              <WorkedTitle className="number-title">
                {companie.number}
              </WorkedTitle>
              <WorkedSubTitle highlight={companie.color}>
                <span>{companie.title}</span>
                {companie.position}
              </WorkedSubTitle>
              <Paragraph>{companie.description}</Paragraph>
              <WorkedTime>{companie.workedTime}</WorkedTime>
            </div>
          ))}
        </WorkedContent>
      </Container>
    </WorkedBox>
  )
}
