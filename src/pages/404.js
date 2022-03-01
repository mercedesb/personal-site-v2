import React from "react"
import { BaseLayout } from "components"

export default function NotFound(props) {
  return (
    <BaseLayout
      title="Page not found"
      containerClassName="flex"
      headerClassName="w-1/2"
      renderAfterHeader={() => (
        <div className="w-1/2 flex justify-center mt-8">
          <svg
            className="w-10/12"
            viewBox="0 0 568 777"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>404</title>
            <defs></defs>
            <g
              id="Page-4"
              stroke="none"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Group" transform="translate(-2.000000, 2.000000)">
                <path
                  d="M237.191406,384.368074 L237.191406,429.90157 M237.191406,498.849916 L237.191406,756.261719 C245.37568,768.02474 252.962919,773.90625 259.953125,773.90625 C266.943331,773.90625 273.932914,768.02474 280.921875,756.261719 L280.921875,502.356494 M280.921875,434.470974 L280.921875,383.465787 M280.921875,315.033246 L280.921875,271.591211 M280.921875,203.683393 L280.921875,162.231738 M280.921875,93.6832527 L280.921875,52.4414062 L280.921875,0.83203125 L237.191406,52.4414062 L237.191406,90.8990975 M237.191406,159.114614 L237.191406,206.909029 M237.191406,274.422933 L237.191406,316.30715"
                  id="Path"
                  stroke="#FFFFFF"
                  stroke-width="2"
                ></path>
                <a href="/" id="home" style={{ "text-decoration": "none" }}>
                  <g transform="translate(237.481525, 124.411536) rotate(4.000000) translate(-237.481525, -124.411536) translate(62.981525, 89.911536)">
                    <path
                      d="M39.15625,0.277515625 C47.7994792,0.277515625 136.988281,0.277515625 306.722656,0.277515625 L348.957031,34.424 L306.722656,68.5704844 C136.36849,68.5704844 47.1796875,68.5704844 39.15625,68.5704844 C27.1210938,68.5704844 0,60.3712656 0,34.424 C8.09300721e-15,8.47673438 26.1914062,0.277515625 39.15625,0.277515625 Z"
                      id="Path-2"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      transform="translate(174.478516, 34.424000) scale(-1, 1) translate(-174.478516, -34.424000) "
                      fill-opacity="0"
                      fill="#D8D8D8"
                    ></path>
                    <text
                      id="Home"
                      font-family="LibreBaskerville-Regular, Libre Baskerville"
                      font-size="24"
                      font-weight="normal"
                      fill="currentColor"
                      stroke-width="1"
                    >
                      <tspan x="138" y="41">
                        Home
                      </tspan>
                    </text>
                  </g>
                </a>
                <a href="/blog" id="blog" style={{ "text-decoration": "none" }}>
                  <g transform="translate(315.790303, 235.064348) rotate(-4.000000) translate(-315.790303, -235.064348) translate(62.790303, 200.564348)">
                    <text
                      id="Blog"
                      font-family="Poppins-Regular, Poppins"
                      font-size="24"
                      font-weight="normal"
                      fill="currentColor"
                      stroke-width="1"
                    >
                      <tspan x="226" y="41">
                        Blog
                      </tspan>
                    </text>
                    <path
                      d="M56.9347194,0 C69.5023127,0 199.18632,0 445.986742,0 L505.8125,32.8007812 L445.986742,68.2929687 C198.285119,68.2929687 68.6011114,68.2929687 56.9347194,68.2929687 C39.4351314,68.2929687 0,60.09375 0,34.1464844 C1.17675491e-14,8.19921875 38.0833294,0 56.9347194,0 Z"
                      id="Path-2"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      fill-opacity="0"
                      fill="#D8D8D8"
                    ></path>
                  </g>
                </a>
                <a
                  href="/speaking"
                  id="speaking"
                  style={{ "text-decoration": "none" }}
                >
                  <g transform="translate(288.574236, 349.409297) rotate(-1.000000) translate(-288.574236, -349.409297) translate(105.574236, 314.909297)">
                    <path
                      d="M41.0263796,0 C50.0824154,0 143.530937,0 321.371943,0 L366,34.1464844 L321.371943,68.2929687 C142.881543,68.2929687 49.4330221,68.2929687 41.0263796,68.2929687 C28.416416,68.2929687 0,60.09375 0,34.1464844 C8.47953485e-15,8.19921875 27.442326,0 41.0263796,0 Z"
                      id="Path-2"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      transform="translate(183.000000, 34.146484) scale(-1, 1) translate(-183.000000, -34.146484) "
                      fill-opacity="0"
                      fill="#D8D8D8"
                    ></path>
                    <text
                      id="Speaking"
                      font-family="Poppins-Regular, Poppins"
                      font-size="24"
                      font-weight="normal"
                      fill="currentColor"
                      stroke-width="1"
                    >
                      <tspan x="132" y="41">
                        Speaking
                      </tspan>
                    </text>
                  </g>
                </a>
                <a
                  href="/about"
                  id="about"
                  style={{ "text-decoration": "none" }}
                >
                  <g transform="translate(206.462715, 461.831988) rotate(5.000000) translate(-206.462715, -461.831988) translate(2.462715, 427.331988)">
                    <path
                      d="M46.0417182,0 C56.2048242,0 161.077116,0 360.658595,0 L407.894531,34.1464844 L360.658595,68.2929687 C160.348337,68.2929687 55.4760447,68.2929687 46.0417182,68.2929687 C31.8902284,68.2929687 -2.84217094e-14,60.09375 -2.84217094e-14,34.1464844 C-1.89055796e-14,8.19921875 30.7970591,0 46.0417182,0 Z"
                      id="Path-2"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      fill-opacity="0"
                      fill="#D8D8D8"
                    ></path>
                    <text
                      id="About"
                      font-family="LibreBaskerville-Regular, Libre Baskerville"
                      font-size="24"
                      font-weight="400"
                      fill="currentColor"
                      stroke-width="1"
                    >
                      <tspan x="168" y="41">
                        About
                      </tspan>
                    </text>
                  </g>
                </a>
              </g>
            </g>
          </svg>
        </div>
      )}
    ></BaseLayout>
  )
}
