import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Section from 'components/Section'
import {graphql} from 'gatsby';

const contentData = {
    title: 'Rodzaje samolotów pasażerskich',
    heading: 'Rodzaje samolotów pasażerskich',
    list: [
        'Samoloty Szerokokadłubowe',
        'Samoloty wąskokadłubowe',
        'Samoloty regionalne'
    ],
    sections: [
        {
            heading: 'Samolot Szerokokadłubowy Boeing 767',
            textContent: {
                type: 'text',
                content: 'Są to samoloty zwykle używane do lotów długodystansowych, transkontynentalnych i transoceanicznych. Nazwa pochodzi od szczególnej cechy samolotu – szerokiego kadłuba. Należą do nich: Airbus A300, 310, 330, 340, 350, 380, Boeing 747, 767, 777, 787, lł-86, 96, Lockhead L-10111, McDonnell Douglas DC-10, MD-11.',
            },
            image: 'boeing_767_lot'
        },
        {
            heading: 'Samolot wąskokadłubowy Embraer 175',
            textContent: {
                type: 'text',
                content: 'Jest to samolot pazażerski lub transpotowy. DO tej kategorii zaliczają się takie maszyny jak: Airbus A318, A319, A320, A321, Boeing 737, 757, Bombardier CEJ-700, McDonnell Douglas MD-80, McDonnell Douglas MD-90, lł-62, Tu-134, Tu-154, An-148, Suchoj SuperJet 100, Fokker 100, Embraer 175, Embraer 190 czy Embraer 196.',
            },
            image: 'embraer_175'
        },
        {
            heading: 'Samolot regionalny Tu-134',
            textContent: {
                type: 'text',
                content: 'To samoloty wykorzystywane na połączeniach krótkodystansowych. Należą do nich m.in. Boeing 717, Bombardier CRJ, Embraer 145, DHC-8, ATR 42, ATR 72, Saab 340, Saab 2000, Tu-134, An-24, An-140.',
            },
            image: 'tu_134'
        },
    ],
};

const CuriositiesPage = ({data}) => (
    <MainTemplate title={contentData.title}>
        <Section
            heading={contentData.heading}
            textContent={{type: 'list', content: contentData.list}}
            isPaddingSmall
            headerType="h1"
        />
        {contentData.sections.map(({heading, textContent, image}) => (
            <Section
                key={heading}
                heading={heading}
                textContent={textContent}
                images={[data[image]]}
                isPaddingSmall
            />
        ))}
    </MainTemplate>
);

export const query = graphql`
    query {
        boeing_767_lot: file(relativePath: { eq: "boeing 767 lot.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                    originalName
                }
            }
        }
        embraer_175: file(relativePath: { eq: "embraer 175.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                    originalName
                }
            }
        }
        tu_134: file(relativePath: { eq: "tu-134.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                    originalName
                }
            }
        }
  }
`

export default CuriositiesPage;
