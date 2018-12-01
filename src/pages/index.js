import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Filter from '../components/layout/Filter'
import UserList from '../components/layout/UserList'
import CatCard from '../components/ui/CatCard'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1>
                  Ever wonder if you're missing something to pack for your trip?
                  Use this website to find all the items you need to pack for
                  your next trip!
                </h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-fifth">
                <Filter />
              </div>
              <div className="column is-three-fifths">
                <h2>Trends</h2>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                </div>
              </div>
              <div className="column is-one-fifth">
                <UserList />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
