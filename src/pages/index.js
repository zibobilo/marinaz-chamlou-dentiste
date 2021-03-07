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
        <table>
        <tr>
          <td>
            <h3><b>Cabinet dentaire</b></h3>
            <a href="https://www.google.com/maps/place/Rue+Jean-Baptiste+Meunier+42A,+1050+Ixelles,+Belgium/@50.8147324,4.3489593,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c457b005f2b5:0x3a36276a70cf2e00!8m2!3d50.8147324!4d4.351148"><p>42A Rue Jean Baptiste Meunier</p>
            <p>1050 Bruxelles</p></a>
            <a href="tel:+32 4 77 43 63 50">+32 477 43 63 50</a>
            </td>
            <td>
            <h3><b>Cabinet dentaire <br />CCM Smile</b></h3>
            <a href="https://www.google.com/maps/place/Avenue+de+Tervueren+266,+1150+Woluwe-Saint-Pierre,+Belgium/@50.8355955,4.4162118,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3db501ac7e2db:0x34fdabd00009488c!8m2!3d50.8355955!4d4.4184058"><p>Avenue de Tervueren 266</p>
            <p>1150 Woluwe-saint-Pierre</p></a>
            <a href="tel:+32 2 732 48 29">+32 2 732 48 29</a>
          </td>
        </tr>
        </table>
        <a href="mailto:chamlou.dentaire@gmail.com?subject=Rendez-vous via dentistebxl.com">chamlou.dentaire@gmail.com</a><br /><br />
        </div>
      </div>
    </main>
  )
}

export default Home

