import React from "react"
import { Nav, HtmlHead, RecentBlogPosts } from "components"
import headshot from "../assets/headshot.png"

export default function Home() {
  return (
    <div className="px-24 pt-12">
      <HtmlHead />
      <div className="min-h-screen flex flex-col justify-between pb-12">
        <div>
          <Nav />
        </div>
        <div className="py-8">
          <section className="flex items-end">
            <h2 className="text-5xl w-2/3">
              Values-driven, growth-oriented software engineering leader
              passionate about coaching and creating opportunity
            </h2>
            <img
              className="w-1/3 px-8"
              src={headshot}
              alt="Mercedes Bernard speaking"
            />
          </section>
        </div>
      </div>

      <section className="py-16">
        <div className="flex">
          <div className="w-1/2 mt-4 border-r border-current mr-8 pr-8">
            <p className="text-2xl font-display mb-8">
              In my approach to software delivery and technical leadership, I
              learn everything I can about my client's and my team's goals to
              make an actionable plan and create opportunities to achieve those
              goals.
            </p>
            <p className="text-2xl font-display mb-8">
              I view my clients as partners and bring a unique blend of
              technical expertise, non-technical language, and empathetic
              insight to my work.
            </p>
            <p className="text-2xl font-display mb-8">
              As a leader, I strive to foster an environment where each
              individual’s unique set of strengths and ideas have space to grow
              and better the organization.
            </p>
          </div>
          <div className="w-1/2 pl-8">
            <RecentBlogPosts />
          </div>
        </div>
      </section>
    </div>
  )
}
