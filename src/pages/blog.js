import React from "react"
import PropTypes from "prop-types"
import { Nav } from "components"

export default function Blog(props) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex">
        <main className="px-16 pbgd-8 w-4/5">
          {[0, 1, 2].map(post => (
            <div>
              <h3>Title {post} but I write really long titles</h3>
              <p>
                Read my thoughts on tech, mentorship, communication, and
                occassionally fiber arts.
              </p>
            </div>
          ))}
        </main>
        <aside>
          <ul>
            {["Computer science", "Management", "Tips & tricks"].map(
              category => (
                <li>category</li>
              )
            )}
          </ul>
        </aside>
      </div>
    </div>
  )
}

Blog.propTypes = {}
