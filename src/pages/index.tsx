import React from "react"
import { graphql } from "gatsby"

const Hero: React.FC<{}> = () => (
  <div className="sm:text-center lg:text-left">
    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
      I'm
      <br className="xl:hidden" />
      <span className="text-teal-500 text-5xl md:text-6xl"> Fabio Sikansi</span>
    </h2>
    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Senior software engineer @FinancialTimes<br />
      Based in London 🇬🇧, from 🇧🇷.
    </p>
  </div>
)

const Picture: React.FC<{ file: IndexData["file"] }> = ({ file }) =>
  file ? (
    <img
      className="object-cover w-full h-full"
      src={file.childImageSharp.fluid.src}
      alt="Fabio Sikansi"
    />
  ) : null

const Index: React.FC<{ data: IndexData }> = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl relative">
          <div className="relative flex w-full justify-center items-center z-10 bg-white h-screen md:pl-20 md:w-7/12">
            <Hero />
            <svg
              className="hidden md:block absolute right-0 inset-y-0 h-full w-64 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        {data.file && (
          <div className="hidden md:block md:absolute md:inset-y-0 md:right-0 md:w-1/2">
            <Picture file={data.file} />
          </div>
        )}
      </div>
    </>
  )
}

export default Index

interface IndexData {
  file?: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
