import satori from "satori";
// import { html } from "satori-html";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";
//import { positionAt } from "node_modules/astro/dist/core/errors";

// const markup = html`<div
//       style={{
//         background: "#fefbfb",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: "-1px",
//           right: "-1px",
//           border: "4px solid #000",
//           background: "#ecebeb",
//           opacity: "0.9",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2.5rem",
//           width: "88%",
//           height: "80%",
//         }}
//       />

//       <div
//         style={{
//           border: "4px solid #000",
//           background: "#fefbfb",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2rem",
//           width: "88%",
//           height: "80%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             margin: "20px",
//             width: "90%",
//             height: "90%",
//           }}
//         >
//           <p
//             style={{
//               fontSize: 72,
//               fontWeight: "bold",
//               maxHeight: "84%",
//               overflow: "hidden",
//             }}
//           >
//             {post.data.title}
//           </p>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "100%",
//               marginBottom: "8px",
//               fontSize: 28,
//             }}
//           >
//             <span>
//               by{" "}
//               <span
//                 style={{
//                   color: "transparent",
//                 }}
//               >
//                 "
//               </span>
//               <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//                 {post.data.author}
//               </span>
//             </span>

//             <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//               {SITE.title}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>`;

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          fontSize: 64,
          backgroundImage: "url(https://og-image-ts-uayr.vercel.app/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          display: "flex",
          paddingLeft: 70,
          paddingRight: 70,
          wordBreak: "break-all",
          flexDirection: "column",
          color: "black",
          position: "relative",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                display: "flex",
                textAlign: "left",
                paddingTop: 85,
                width: "98%",
                fontWeight: "700",
                maxWidth: "100%",
                lineBreak: "anywhere",
                overflowWrap: "break-word",
                whiteSpace: "unset",
                textWrap: "wrap",
              },
              children: post.data.title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                position: "absolute",
                width: "100%",
                bottom: 85,
                left: 70,
                justifyContent: "space-between",
                alignItems: "center",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: [
                      {
                        type: "img",
                        props: {
                          src: "https://azmaru-blog-files.s3.ap-northeast-1.amazonaws.com/media/profile_pics/IMG_4445_BMxkUFg.jpeg",
                          alt: "ひろぽっぽ",
                          width: 100,
                          height: 100,
                          style: {
                            borderRadius: 60,
                            marginRight: 10,
                          },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            color: "black",
                            fontSize: 40,
                            lineHeight: 1.5,
                            fontWeight: "550",
                            margin: 0,
                          },
                          children: post.data.author,
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      color: "black",
                      fontSize: 40,
                      lineHeight: 1.5,
                      paddingRight: 0,
                      fontWeight: "550",
                      margin: "0",
                    },
                    children: "ゆきぽわーる",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title + "by"
      ),
    }
  );
};
