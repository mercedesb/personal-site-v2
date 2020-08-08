import React from "react"
import { Nav } from "components"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Nav />
        </div>
        <div className="px-16 py-8">
          <section>
            <h1 className="text-5xl">Software engineering leader.</h1>
            <h1 className="text-5xl">Advocate for software quality and ...</h1>
            <h1 className="text-5xl">
              Equal parts trust, determination and level-headed clarity.
            </h1>
          </section>
        </div>
      </div>
      <section className="px-16 py-8 w-2/3">
        <p className="text-4xl font-display">
          My about me section that makes clients want to work with me and
          companies want to hire me.
        </p>
      </section>
      <section className="px-16 py-8 w-2/3">
        <p className="text-4xl font-display">
          Thoughts about blogging and what I'm passionate about. Stinking bishop
          babybel fromage frais. St. agur blue cheese croque monsieur cheese
          strings hard cheese cheese strings stilton manchego stinking bishop.
          Brie caerphilly cow gouda everyone loves macaroni cheese jarlsberg
          goat. Cheese.
        </p>
        <a href="/blog-post-1" className="flex">
          <h3 className="w-1/3">Title 1 but I write really long titles</h3>
          <p className="Description">
            Read my thoughts on tech, mentorship, communication, and
            occassionally fiber arts.
          </p>
        </a>
        <a href="/blog-post-1" className="flex">
          <h3 className="w-1/3">Title 2 but I write really long titles</h3>
          <p className="Description">
            Read my thoughts on tech, mentorship, communication, and
            occassionally fiber arts.
          </p>
        </a>
        <a href="/blog-post-1" className="flex">
          <h3 className="w-1/3">Title 3 but I write really long titles</h3>
          <p className="Description">
            Read my thoughts on tech, mentorship, communication, and
            occassionally fiber arts.
          </p>
        </a>
      </section>
      <section className="px-16 py-8 w-2/3">
        <a href="/speaking" className="">
          <h2 className="ContentColumn-title">Speaking</h2>
          <div className="ContentColumn-description">
            <p>
              Find my latest talks and interviews with their accompanying slides
              here.
            </p>
          </div>
        </a>
      </section>
      <section className="px-16 py-8 w-2/3">
        <a href="/about" className="">
          <h2 className="ContentColumn-title">Doing</h2>
          <div className="ContentColumn-description">
            <p>
              Learn about my approach as a consultant and what I've been doing
              in my career.
            </p>
          </div>
        </a>
      </section>
    </div>
  )
}
