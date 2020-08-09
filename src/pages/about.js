import React from "react"
import { SecondaryPageLayout } from "components"

export default function About() {
  return (
    <SecondaryPageLayout>
      <div className="mx-auto py-8 w-1/2 ">
        <h2>Experience</h2>
        <p>
          In my approach to software development, I value my clients as a
          partner in building a product that meets the needs of the humans who
          use it. Having worked with clients in a wide range of industries
          including healthcare, performing arts, beverage distribution, pet
          food, hospitality, luxury consumer goods, and government, I understand
          that no one knows your domain better than you do.
        </p>

        <p>
          I bring a unique blend of technical knowledge, non-technical language,
          and compassion to all of my projects. During projects, my clients feel
          empowered, comfortable, and heard. The specific technology and stack
          used aren't important if you don't love it when we're done.
        </p>

        <p>
          As a leader, I care deeply about team health and the organization’s
          feedback culture. Individualized management is my passion. I strive to
          foster an environment where each individual’s unique set of strengths
          and ideas have space to grow and better the organization.
        </p>

        <h2>Community</h2>
        <p>
          I started a community in Chicago called Dev Together that connects
          people starting their development career with technical mentors
          through low-commitment, high-value, human interactions. Our flagship
          Code Review & Pairing events take place every other month. Mentors do
          a small code review of a mentee's code prior to the event, and then
          they come together at the event to review the feedback and start
          working through the suggestions in a 1 hour pairing session. Other
          months we'll do events centered around learning and career growth such
          as unit testing workshops, introductory Git presentations, or panel
          discussions with hiring managers. To learn more about Dev Together,
          please visit our website or follow us on Twitter @devtogetherchi
        </p>

        <h2>Speaking Engagements</h2>
        <p>
          I enjoy speaking about topics at the intersection of technology and
          mentorship, communication, and learning. I also love to talk about
          yarn crafts 😉🧶. My previous talks and interviews can be found here.
          If you're interested in having me speak at one of your events or have
          an idea for an event that would be a good match for my background, let
          me know!
        </p>
      </div>
    </SecondaryPageLayout>
  )
}
