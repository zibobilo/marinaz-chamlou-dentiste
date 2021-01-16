import * as React from "react"
// import { graphql, useStaticQuery } from "gatsby"

// function IndexPage() {
//   const { posts } = useStaticQuery(graphql`
//     {
//       posts: allGraphCmsPost {
//         nodes {
//           title
//         }
//       }
//     }
//   `)
//   console.log(posts)
//   return (
//     <>
//       {posts.nodes.map(post => (
//         <p>{post.title}</p>
//       ))}
//       </>
//   )
// }

const Home = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <div className="general">
        <div className="centered">       
        {/* <IndexPage /> */}
        <br />
        <h1>Marinaz Chamlou</h1>
        <h2>Dentisterie esthétique <br />Implantologie</h2>
        <p>je suis actuellement<br /> 
          en déménagement de cabinet.<br />
          Contactez-moi directement<br />
          pour prendre rendez-vous.<br />
          Merci de votre fidélité.<br />
        </p>
        <a href="mailto:chamlou.dentaire@gmail.com?subject=Rendez-vous via dentistebxl.com">chamlou.dentaire@gmail.com</a><br /><br />
        <a href="tel:+32 477 43 63 50">+32 477 43 63 50</a><br />
        </div>
      </div>
    </main>
  )
}

export default Home

