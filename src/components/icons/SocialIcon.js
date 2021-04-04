import React from "react"
import GitHubIcon from "./GitHubIcon"
import WhatsAppIcon from "./WhatsAppIcon"
import LinkedInIcon from "./LinkedInIcon"

const SocialIcon = ({ name }) => {
  const Icon = {
    GitHub: GitHubIcon,
    WhatsApp: WhatsAppIcon,
    LinkedIn: LinkedInIcon,
  }

  const IconTag = Icon[name]

  return <IconTag />
}

export default SocialIcon
