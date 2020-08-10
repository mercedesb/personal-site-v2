import React from "react"
import { Nav, HtmlHead, RecentBlogPosts } from "components"
import headshot from "../assets/headshot.png"

export default function Home() {
  return (
    <div className="px-12 lg:px-24 pt-12">
      <HtmlHead />
      <div className="lg:min-h-screen flex flex-col lg:justify-between lg:pb-12">
        <div>
          <Nav />
        </div>
        <div className="lg:py-8">
          <section className="flex items-end flex-wrap lg:flex-row-reverse">
            <img
              className="w-full pb-12 px-8 md:w-1/2 md:mx-auto lg:mx-0 lg:w-1/3 lg:pb-0"
              src={headshot}
              alt="Mercedes Bernard speaking"
            />
            <h2 className="lg:text-5xl w-100 lg:w-2/3">
              Values-driven, growth-oriented software engineering leader
              passionate about coaching and creating opportunity
            </h2>
          </section>
        </div>
      </div>

      <section className="pb-16 lg:pt-16">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mt-4 lg:border-r lg:border-current lg:pr-12">
            <p className="text-xl lg:text-2xl font-display mb-8">
              In my approach to software delivery and technical leadership, I
              learn everything I can about my client's and my team's goals to
              make an actionable plan and create opportunities to achieve those
              goals.
            </p>
            <p className="text-xl lg:text-2xl font-display mb-8">
              I view my clients as partners and bring a unique blend of
              technical expertise, non-technical language, and empathetic
              insight to my work.
            </p>
            <p className="text-xl lg:text-2xl font-display mb-8">
              As a leader, I strive to foster an environment where each
              individual’s unique set of strengths and ideas have space to grow
              and better the organization.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <RecentBlogPosts />
          </div>
        </div>
      </section>
    </div>
  )
}
