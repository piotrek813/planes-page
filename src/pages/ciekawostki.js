
import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Section from 'components/Section'
import { graphql } from 'gatsby';

const contentData = {
        title: 'Samoloty - Ciekawostki',
        heading: 'Samoloty - Ciekawostki',
        textContent: {
            type: 'list',
            content: [
                'Nad Stanami Zjednoczonymi w każdej chwili latają tysiące samolotów.',
                'Najdroższy lot w pierwszej klasie kosztuje ponad 30000 dolarów.',
                'Smugi strumieniowe (białe szlaki) składają się z pary wodnej i mogą być wykorzystywane do przewidywania pogody. Cienki, krótszy ogon wskazuje na niską wilgotność i dobra pogodę. Gruby, dlużej utrzymujący się ogon oznacza wczesne oznaki burzy.',
                'Język angielski jest miedzynarodowym językiem w lotnictwie.',
                'Pierwsze 3 minuty po starcie i ostatnie 8 minut przed lądowaniem to czas, w którym dochodzi do 80% wypadków lotniczych.',
            ],
        },
        image: 'curiosities',
    };

const IndexPage = ({data}) => (
    <MainTemplate title="Budowa samolotu pasażerskiego">
        <Section
            bgColor="orange"
            heading={contentData.heading}
            headerType="h1"
            textContent={contentData.textContent}
            images={[data[contentData.image]]}
            is100vh
        />
    </MainTemplate>

);

export const query = graphql`
    query {
        curiosities: file(relativePath: { eq: "curiosities.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    originalName
                }
            }
        }
  }
`

export default IndexPage;
