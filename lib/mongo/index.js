// mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGO_URI
const options = {}


if (!process.env.NEXT_PUBLIC_MONGO_URI) {
  throw new Error('Add Mongo URI to .env.local')
}
let client = new MongoClient(uri, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {

  clientPromise = client.connect()
}

export default clientPromise
