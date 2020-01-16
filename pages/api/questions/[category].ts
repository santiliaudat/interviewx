import { NextApiRequest, NextApiResponse } from 'next'
const faunadb = require('faunadb')

//TODO: Create .env file with FAUNADB_SECRET_KEY
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query: { category } } = req
    const dbs = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('questions_by_category'), category
          )
        ),
        ref => q.Get(ref)
      )
    )
    console.log(dbs.data)
    //ok
    res.status(200).json(dbs.data)
  } catch (e) {
    //something went wrong
    res.status(500).json({ error: e.message })
  }
}