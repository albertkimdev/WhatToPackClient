import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.2);
  .content {
    padding: 1rem;
    width: 250px;
    display: grid;
    grid-template-areas:
      'title title'
      'items button';
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;
    h2 {
      grid-area: title;
    }
    p {
      grid-area: items;
      margin: 0 !important;
    }
    button {
      grid-area: button;
    }
  }
  figure {
    img {
      border-radius: 5px;
    }
  }
`

const CatCard = ({ category: { title, itemsCount, imgUrls } }) => (
  <Card>
    <div className="image-card">
      <figure className="image is-3by2">
        <img src={imgUrls[0]} alt="" />
      </figure>
    </div>
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="subtitle">
        <strong>{itemsCount}</strong> items
      </p>
      <Link
        to="/home"
        className="button is-info has-text-bold is-outlined"
        style={{ textDecoration: 'none', backgroundImage: 'none' }}
      >
        See more
      </Link>
    </div>
  </Card>
)

export default CatCard
