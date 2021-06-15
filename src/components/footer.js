import * as React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

const FooterContainer = tw.div`text-gray-800 container flex flex-col items-center px-8 py-8 sm:flex-row min-w-full`
const RoyahLogoContainer = tw.div`text-xl font-bold tracking-tight leading-none text-gray-900 select-none tracking-tighter`
const CopyrightContainer = tw.div`mt-4 text-sm text-gray-700 hover:text-gray-800 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-500 sm:mt-0`
const AccountsContainer = tw.div`inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start`
const SocialLogo = tw.a`text-gray-700 hover:text-gray-800`
const ScreenReaderOnly = tw.span`sr-only`

const Footer = () => {
  return (
    <FooterContainer>
      <RoyahLogoContainer>
        <Link to="/">
          <h1>
            Digital
            <span className="text-royah-yellow">Yearbook</span>
          </h1>
        </Link>
      </RoyahLogoContainer>

      <CopyrightContainer>
        &copy;2021, Made with 💕 by Royah ITDev Team
      </CopyrightContainer>

      <AccountsContainer>
        <SocialLogo href="/instagram" target="_blank" rel="noopener noreferrer">
          <ScreenReaderOnly>Instagram</ScreenReaderOnly>
          <FaInstagram className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo href="/youtube" target="_blank" rel="noopener noreferrer">
          <ScreenReaderOnly>YouTube</ScreenReaderOnly>
          <FaYoutube className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo href="/github" target="_blank" rel="noopener noreferrer">
          <ScreenReaderOnly>GitHub</ScreenReaderOnly>
          <FaGithub className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo>@royatulaliyah</SocialLogo>
      </AccountsContainer>
    </FooterContainer>
  )
}

export default Footer
