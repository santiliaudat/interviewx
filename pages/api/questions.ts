import { NextApiRequest, NextApiResponse } from 'next'
import { questions } from './samples'

type QuestionType = {
  id: string,
  question: string,
  response: string,
  is_practice: boolean,
  level: number,
  category: number
}

export default (req: NextApiRequest, res: NextApiResponse<QuestionType>) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(questions))
}