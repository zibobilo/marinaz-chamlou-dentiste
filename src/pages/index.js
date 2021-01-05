import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

function IndexPage() {
  const { posts } = useStaticQuery(graphql`
    {
      posts: allGraphCmsPost {
        nodes {
          id
          title
        }
      }
    }
  `)
  console.log(posts)
  return (
    <ul>
      {posts.nodes.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
        </li>
      ))}
    </ul>
  )
}

const Home = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="general">
        <div className="centered">
        <IndexPage />
        
        <h1>Marinaz Chamlou</h1>
        <h2>Dentisterie esthétique <br />Implantologie</h2>
        <p>je suis actuellement<br /> 
          en déménagement de cabinet.<br />
          Contactez-moi directement<br />
          pour prendre rendez-vous.<br />
          Merci de votre fidélité.<br />
        </p>

        <a href="mailto:chamlou.dentaire@gmail.com?subject=Rendez-vous via dentistebxl.com">chamlou.dentaire@gmail.com</a><br />
        <a href="tel:+32 477 43 63 50">+32 477 43 63 50</a><br />
        </div>
      </div>
    </main>
  )
}

export default Home

