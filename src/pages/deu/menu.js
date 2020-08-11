import React, { useRef, useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import imgGif from "../../images/bgImgs.gif"
import imgGifV from "../../images/bgImgsV.gif"
import imgWebp from "../../images/imgs1ov.webp"
import imgWebpV from "../../images/imgs1ovV.webp"
import sloganImg2 from "../../images/slogan_eng2.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import "./index.css"

const MenuPage = props => {
  return (
    <Layout>
      <Container
        id="main"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <SEO title="Menu" />
        <Container
          id="home"
          style={{ width: "100vw", maxWidth: "100vw", margin: 0, padding: 0 }}
        >
          <picture>
            <source
              media="(max-width: 599px)"
              srcset={imgWebpV}
              type="image/webp"
            />
            <source
              media="(max-width: 599px)"
              srcset={imgGifV}
              type="image/gif"
            />
            <source
              media="(min-width: 600px)"
              srcset={imgWebp}
              type="image/webp"
            />
            <source
              media="(min-width: 600px)"
              srcset={imgGif}
              type="image/gif"
            />
            <img src={imgGifV} alt="georgian food" className="bgImg" />
          </picture>

          {/* <img src={bgImgsV} alt="georgian food" className={classes.bgImgs} /> */}
        </Container>
        <Container
          id="center"
          style={{
            margin: "0 auto",
          }}
        >
          MENU Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          in vitae eligendi optio molestias exercitationem eaque veniam quod
          praesentium dolores nihil quibusdam minima accusantium ratione velit a
          quas expedita officiis, dolorem nulla qui quia deleniti. Error ipsam
          fugit id hic ex aliquam? Sunt laborum quos architecto earum repellat
          dolore inventore voluptates! Dolores optio molestiae, cupiditate
          repudiandae assumenda nobis. Pariatur harum laborum tenetur quos in
          aliquam doloribus deleniti exercitationem. Eum, magnam temporibus
          reprehenderit laboriosam nostrum autem accusamus ad explicabo ea fuga
          quasi excepturi distinctio error repellat, impedit vitae animi quae
          architecto placeat corporis facilis quod obcaecati dolore. Corporis,
          eligendi! Eaque unde voluptatum, temporibus nobis in ex veritatis,
          harum, aspernatur libero ad dicta alias obcaecati quibusdam similique
          autem. Odit mollitia, ex, excepturi ullam quos veniam nemo tempore
          doloribus laboriosam fugiat reprehenderit ab et exercitationem
          delectus laborum, sint perferendis. Aliquam fuga earum est provident
          nesciunt, consectetur doloribus architecto officiis corrupti itaque
          placeat vitae blanditiis, voluptatibus, necessitatibus modi. Tenetur
          in ea beatae consequatur neque, quod deserunt delectus, iure
          necessitatibus at eveniet quo? Nisi quaerat excepturi cum! Provident
          animi iure assumenda fuga consequatur aliquam eligendi ducimus quod
          molestias quidem ad odio voluptatum omnis, voluptatem sed officiis
          veniam ipsum sint aspernatur ab est inventore hic id et! Fuga possimus
          magnam dolorem? Ea neque nulla alias velit culpa sequi aut itaque
          distinctio! Possimus perspiciatis aliquid vitae sequi? Porro illum
          aperiam esse distinctio exercitationem provident non, placeat modi
          tenetur totam laudantium. Nemo, magni eveniet? Enim veniam quos
          aliquid mollitia nisi consectetur vero atque. Excepturi rem
          consequuntur nesciunt quis corrupti dolorem quia, voluptate voluptatem
          dicta at porro dolorum quaerat blanditiis sapiente incidunt aspernatur
          consectetur placeat eaque architecto omnis, natus iure, nihil quae?
          Facilis ipsum expedita placeat consequuntur voluptate, ea quidem
          harum, quos modi sint aliquam, ex molestias non. Rerum nobis
          laboriosam deleniti quis velit! Itaque doloribus facilis veniam
          expedita?
        </Container>
      </Container>
    </Layout>
  )
}
export default MenuPage
