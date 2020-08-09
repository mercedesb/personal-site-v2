import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "../assets/Twitter.svg"
import LinkedinIcon from "../assets/Linkedin.svg"

export function PostSocialShare({ urlSegment, title, preamble }) {
  return (
    <div class="flex items-center">
      <Link
        to={`https://twitter.com/intent/tweet?url=http://www.mercedesbernard.com/blog/${urlSegment}/&text=${title}&via=mercedescodes`}
      >
        <img className="w-8 mr-4" src={TwitterIcon} alt="Twitter share icon" />
      </Link>
      <Link
        to={`https://www.linkedin.com/shareArticle?mini=true&url=http://www.mercedesbernard.com/blog/${urlSegment}/&title=${title}&summary=${preamble}`}
      >
        <img className="w-8" src={LinkedinIcon} alt="LinkedIn share icon" />
      </Link>
    </div>
  )
}
