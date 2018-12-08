const axios = require('axios')
const gql = require('graphql-tag')
const { print } = require('graphql')

const endpoint = 'http://localhost:4000'

const READ_ALL_CATEGORIES = gql`
  query READ_ALL_CATEGORIES {
    readCategories {
      id
      title
      itemsCount
      imgUrls
    }
  }
`

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  //fetch data from api
  const data = await axios.post(endpoint, {
    query: print(READ_ALL_CATEGORIES),
  })

  console.log(data)

  // process data
  // data.forEach(datum => createNode(processDatum(datum)))

  // We're done, return.
  return
}
