import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

const AboutPage = ({ data, pageContext }) => {
  const person = data.peopleCsv
  const nextLink = pageContext.next
  const prevLink = pageContext.previous
  const interests = person.interests.split(",")
  return (
    <div>
      <div className="hidden lg:block">
        <div className="absolute  bg-black top-12 -left-14 h-12 w-64 transform -rotate-45 text-white flex justify-center items-center text-xl z-10">
          Royatul Aliyah
        </div>
      </div>
      <div
        className="block fixed right-0 h-screen w-24 md:w-52 bg-royah-jellyfish border-l-2 border-black "
        style={{ zIndex: -8 }}
      />
      <div
        className="hidden md:block fixed right-64 h-screen w-12 bg-royah-jellyfish border-l-2 border-r-2 border-black"
        style={{ zIndex: -8 }}
      />

      <div className="flex">
        <div className="mx-8 w-12 h-screen bg-royah-red border-l-2 border-r-2 border-black hidden lg:block relative" />

        <div className="p-4 lg:pt-12 lg:pl-12 lg:pb-4 lg:pr-24 max-w-screen-xl flex-1">
          <div className="font-bold text-3xl md:text-4xl py-4">
            {person.name.toUpperCase()}{" "}
            {person.nickname ? (
              <span className="text-royah-red">
                "{person.nickname.toUpperCase()}"
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap justify-left gap-2">
            <div className="flex items-center justify-center w-full sm:w-56 h-72 lg:w-60 lg:h-80 border-2 border-black bg-white">
              <GatsbyImage
                image={person.photo.childImageSharp.gatsbyImageData}
                className="w-full max-w-xs h-full"
              />
            </div>
            <div className="flex-1 border-2 border-black py-2 px-4 lg:px-8 md:p-4 bg-white">
              <div className="text-xl font-semibold mt-2 md:mt-4 mb-2">BIO</div>
              <table className="table-auto">
                <tbody>
                  <tr className="mb-6">
                    <td className="text-right font-bold pb-2">
                      <FaBirthdayCake />
                    </td>
                    <td className="pl-3 pb-2">not available</td>
                  </tr>
                  <tr className="mb-6">
                    <td className="text-right font-bold pb-2">
                      <FaInstagram />
                    </td>
                    <td className="pl-3 pb-2">
                      {person.instagram
                        ? person.instagram.toLowerCase()
                        : "not available"}
                    </td>
                  </tr>
                  <tr className="mb-6">
                    <td className="text-right font-bold pb-2">
                      <FaTwitter />
                    </td>
                    <td className="pl-3 pb-2">not available</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-xl font-semibold mt-2 md:mt-4 mb-2">
                INTERESTS
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {console.log(interests)}
                {interests[0]
                  ? interests.map(interest => {
                      return (
                        <div className="py-1 px-2 shadow-offset-black-2 border border-black hover:bg-green-900 cursor-pointer hover:text-white">
                          {interest.trim().toLowerCase()}
                        </div>
                      )
                    })
                  : "data not available"}
              </div>
            </div>
            <div
              className="w-full italic text-lg text-white px-4 py-8 mb-24 flex justify-center items-center text-center bg-green-900 border-2 border-black"
              style={{ zIndex: -7 }}
            >
              {person.quotes ? `"${person.quotes}"` : "not available"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-4 px-4 justify-between fixed w-screen bottom-0 lg:pl-40 lg:pr-24 bg-royah-yellow border-t-2 border-black ">
        <AniLink
          cover
          bg="#DB2929"
          duration={1}
          direction="left"
          to={prevLink ? `/${prevLink.fields.slug}` : null}
          className="h-10 w-10 border-2 bg-white border-black flex justify-center items-center shadow-offset-black-2"
        >
          <FaArrowLeft />
        </AniLink>
        <AniLink
          paintDrip
          hex="#F5BA16"
          to="/keluarga"
          className="h-10 px-4 border-2 bg-white border-black flex justify-center items-center text-lg font-medium shadow-offset-black-2"
        >
          KEMBALI
        </AniLink>
        <AniLink
          cover
          bg="#DB2929"
          duration={1}
          direction="right"
          to={nextLink ? `/${nextLink.fields.slug}` : null}
          className="h-10 w-10 border-2 bg-white border-black flex justify-center items-center shadow-offset-black-2"
        >
          <FaArrowRight />
        </AniLink>
      </div>
    </div>
  )
}
export default AboutPage
