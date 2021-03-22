import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const LandingTemplate = ({
  image,
  title,
  main,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#5269A6 0.5rem 0px 0px, #5269A6 -0.5rem 0px 0px',
            backgroundColor: '#5269A6',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{main.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{main.description}</h3>
                  </div>
                </div>
                <div>
                  <BlogRoll/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

LandingTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  main: PropTypes.object,
}

const Landing = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LandingTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

Landing.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Landing

export const pageQuery = graphql`
  query LandingTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          title
          description
        }
      }
    }
  }
`
