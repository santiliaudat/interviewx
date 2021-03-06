import { NextApiRequest, NextApiResponse } from 'next'
const faunadb = require('faunadb')

//TODO: Create .env file with FAUNADB_SECRET_KEY
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dbs = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index('all_questions') // specify source
          )
        ),
        ref => q.Get(ref) // lookup each result by its reference
      )
    )
    // ok
    res.status(200).json(dbs.data)
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
  }
}