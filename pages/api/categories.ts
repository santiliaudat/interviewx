import { NextApiRequest, NextApiResponse } from 'next'
import { categories } from './samples'

type CategoryType = {
  id: string,
  name: string,
  icon: string,
  url: string
}

export default (req: NextApiRequest, res: NextApiResponse<CategoryType>) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(categories))
}