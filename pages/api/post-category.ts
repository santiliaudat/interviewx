import { NextApiRequest, NextApiResponse } from 'next'
const faunadb = require('faunadb')

//TODO: Create .env file with FAUNADB_SECRET_KEY
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body
    const dbs = await client.query(
      q.Create(
        q.Collection('categories'),
        { data: data },
      )
    )
    //ok
    res.status(200).json(dbs.data)
  } catch (e) {
    //something went wrong
    res.status(500).json({ error: e.message })
  }
}