import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Section from 'components/Section'
import { graphql } from 'gatsby';

const IndexPage = ({data}) => (
    <MainTemplate title="Budowa samolotu pasażerskiego">
        <Section
            bgColor="orange"
            heading="Budowa samolotu pasażerskiego"
            images={[data.construction1, data.construction2]}
            headerType="h1"
        />
    </MainTemplate>

);

export const query = graphql`
    query {
        construction1: file(relativePath: { eq: "construction1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                    originalName
                }
            }
        }
        construction2: file(relativePath: { eq: "construction2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                    originalName
                }
            }
        }
  }
`

export default IndexPage;
