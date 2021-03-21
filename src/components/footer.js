import * as React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

const FooterContainer = tw.div`text-gray-700 container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row`
const RoyahLogoContainer = tw.div`text-xl font-bold leading-none text-gray-900 select-none tracking-tighter`
const CopyrightContainer = tw.div`mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0`
const AccountsContainer = tw.div`inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start`
const SocialLogo = tw.a`text-gray-400 hover:text-gray-700`
const ScreenReaderOnly = tw.span`sr-only`

const Footer = () => {
  return (
    <FooterContainer>
      <RoyahLogoContainer>
        <Link to="/">
          Royatul <br /> Aliyah
        </Link>
      </RoyahLogoContainer>

      <CopyrightContainer>&copy; 2021 IT Development Team</CopyrightContainer>

      <AccountsContainer>
        <SocialLogo href="/instagram">
          <ScreenReaderOnly>Instagram</ScreenReaderOnly>
          <FaInstagram className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo href="/youtube">
          <ScreenReaderOnly>YouTube</ScreenReaderOnly>
          <FaYoutube className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo href="/github">
          <ScreenReaderOnly>GitHub</ScreenReaderOnly>
          <FaGithub className="w-6 h-6" />
        </SocialLogo>

        <SocialLogo>@royatulaliyah</SocialLogo>
      </AccountsContainer>
    </FooterContainer>
  )
}

export default Footer
