import React from "react"
import { Nav, HtmlHead, RecentBlogPosts } from "components"
import headshot from "../assets/headshot.png"

export default function Home() {
  return (
    <div>
      <HtmlHead />
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Nav />
        </div>
        <div className="px-16 py-8">
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

      <section className="px-16 pt-8 pb-16 w-4/5">
        <RecentBlogPosts />
      </section>
    </div>
  )
}
