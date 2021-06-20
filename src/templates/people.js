import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSchool } from "@react-icons/all-files/fa/FaSchool"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft"
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight"
import { GiKite } from "@react-icons/all-files/gi/GiKite"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import PageHeader from "../components/pageheader"
import { GatsbyImage } from "gatsby-plugin-image"
import tw from "twin.macro"

export const query = graphql`
  query($slug: String!) {
    peopleCsv(fields: { slug: { eq: $slug } }) {
      name
      absen
      nickname
      school
      major
      instagram
      interests
      quotes
      photo {
        childImageSharp {
          resize {
            src
          }
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`

const PageContainer = tw.div`flex flex-col min-h-screen items-center`
const OuterContainer = tw.div`w-4/5 flex flex-wrap justify-center`
const InnerContainer = tw.div`w-4/5 lg:px-20 flex flex-col lg:flex-row justify-center lg:flex-nowrap `
const ImageContainer = tw.div`flex items-center justify-center`
const TextContainer = tw.div`flex flex-col items-center lg:items-start font-sans lg:w-full pt-8 lg:pl-10`
const Table = tw.table`table-auto`
const TableBody = tw.tbody``
const TableRow = tw.tr`mb-6`
const TableLeftColumn = tw.td`text-right font-bold pb-2`
const TableRightColumn = tw.td`pl-3 pb-2`
const QuoteContainer = tw.div`text-center lg:text-left items-center lg:items-start my-8 max-w-xs sm:max-w-md flex flex-col`

const People = props => {
  const data = props.data.peopleCsv
  const nextLink = props.pageContext.next
  const prevLink = props.pageContext.previous
  const image = data.photo.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <SEO title={data.name} description={data.quotes} />
      <PageContainer>
        <PageHeader title={data.name} />

        <OuterContainer>
          <div
            className="w-screen h-screen top-0 fixed filter blur"
            style={{
              zIndex: -10,
            }}
          >
            <GatsbyImage image={image} alt={data.name} className="h-full" />
          </div>

          <InnerContainer>
            <ImageContainer>
              <GatsbyImage
                image={image}
                className="w-full sm:w-56 lg:w-60 xl:w-72 rounded-lg img-container"
              />
            </ImageContainer>

            <TextContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableLeftColumn>
                      <FaSchool />
                    </TableLeftColumn>

                    <TableRightColumn>
                      {data.school
                        ? `${data.school} - ${data.major}`
                        : "no data"}
                    </TableRightColumn>
                  </TableRow>

                  <TableRow>
                    <TableLeftColumn>
                      <FaInstagram />
                    </TableLeftColumn>

                    <TableRightColumn>
                      {data.instagram ? data.instagram : "no data"}
                    </TableRightColumn>
                  </TableRow>

                  <TableRow>
                    <TableLeftColumn>
                      <GiKite />
                    </TableLeftColumn>

                    <TableRightColumn>
                      {data.interests ? data.interests : "no data"}
                    </TableRightColumn>
                  </TableRow>
                </TableBody>
              </Table>

              {data.quotes ? (
                <QuoteContainer>
                  <FaQuoteLeft />
                  <div className="align-middle py-4">{data.quotes}</div>
                  <FaQuoteRight />
                </QuoteContainer>
              ) : null}
            </TextContainer>
          </InnerContainer>
        </OuterContainer>
      </PageContainer>

      <div className="flex justify-center md:justify-end sticky bottom-4 py-4 mx-8">
        <div className="text-center text-md gap-4 items-center bg-white shadow rounded-full px-4 h-12 flex justify-center">
          <Link to={prevLink ? `/${prevLink.fields.slug}` : null}>
            <FaChevronLeft />
          </Link>
          <Link
            to="/keluarga"
            className="text-4xl rounded-full bg-white h-16 w-16 -my-2 shadow-md flex items-center justify-center"
          >
            <FaTimes />
          </Link>
          <Link to={nextLink ? `/${nextLink.fields.slug}` : null}>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default People
