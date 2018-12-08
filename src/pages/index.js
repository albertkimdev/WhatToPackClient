import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Filter from '../components/layout/Filter'
import UserList from '../components/layout/UserList'
import CatCard from '../components/ui/CatCard'

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 1rem;
  }
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const categories = data.categoriesGraphQl.readCategories
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
            <div className="columns is-centered">
              <div className="column is-half" style={{ padding: '2rem' }}>
                <h1 className="title">
                  Use this website to find all the items you need to pack for
                  your next trip!
                </h1>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                {/* Sections of content */}
                <SectionWrapper>
                  {categories.map(cat => (
                    <CatCard key={cat.id} category={cat} />
                  ))}
                </SectionWrapper>
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

    categoriesGraphQl {
      readCategories {
        id
        title
        itemsCount
        imgUrls
      }
    }
  }
`
