import React from "react"
import { Nav, BlogListItem } from "components"
import pic from "../assets/ProfilePic-2032-removebg.png"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Nav />
        </div>
        <div className="px-16 py-8">
          <section className="flex items-end">
            <h2 className="text-5xl w-2/3">
              I am a values-driven, growth-oriented software engineering leader
              passionate about coaching and creating opportunity.
            </h2>
            <img
              className="w-1/3 px-8"
              src={pic}
              alt="Mercedes Bernard speaking"
            />
          </section>
        </div>
      </div>
      <section className="px-16 py-8 w-2/3">
        <p className="text-2xl font-display mb-8">
          In my approach to software delivery and technical leadership, I learn
          everything I can about my client's and my team's goals to make an
          actionable plan and create opportunities to achieve those goals.
        </p>
        <p className="text-2xl font-display mb-8">
          I view my clients as partners and bring a unique blend of technical
          expertise, non-technical language, and empathetic insight to my work.
        </p>
        <p className="text-2xl font-display mb-8">
          As a leader, I strive to foster an environment where each individual’s
          unique set of strengths and ideas have space to grow and better the
          organization.
        </p>
      </section>
      <section className="px-16 py-8 w-4/5">
        <h3 className="text-4xl mb-8">Recent blog posts</h3>
        {[0, 1, 2].map(post => (
          <BlogListItem
            title={`Title ${post} but I write really long titles`}
            description="Read my thoughts on tech, mentorship, communication, and
            occassionally fiber arts."
          />
        ))}
      </section>
    </div>
  )
}
