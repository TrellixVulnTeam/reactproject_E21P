import "./App.css";
import React, { useState } from "react";

export default function App() {
  const user = [
    {
      name: "Valimai",
      pic:
        "https://images.news18.com/ibnlive/uploads/2021/07/1626014989_valimai.jpg",
      about:
      "Synopsis:A super cop tries to track down the brain behind a series of robberies and murders, but things turn personal when his family become pawns in the criminal's game.",
       Rating:"⭐⭐⭐⭐⭐"

    },
    {
      name: "Veeramae Vaagai Soodum",
      pic:
        "https://assets.thehansindia.com/h-upload/2021/11/27/1600x960_1123689-veeramae-vaagai-soodum.jpg",
      about:
        "Synopsis:A police aspirant tries to track down the criminals who have murdered his sister.",
         Rating:"⭐⭐⭐"
    },
    {
      name: "Naai Sekar",
      pic:
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      about:
        "Synopsis:Naai Sekar is likely to appeal more to kids, especially those under-10. For the rest, this is a film that will feel funny in parts and juvenile in the rest.",
        Rating:"⭐⭐"
    },
    {
      name: "Enna Solla Pogirai",
      pic:
        "https://m.media-amazon.com/images/M/MV5BM2Y0ODBhYjctNzZiYi00ODIwLWJiMmYtM2ZlNjUwZDlkYjQ3XkEyXkFqcGdeQXVyMTQyOTU3OTMw._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:Three individuals with clear notions of what romance discover the indefinable magic that is love when they end up in a triangular romantic relationship. ",
        Rating:"⭐⭐⭐⭐⭐"
    },
    {
      name: "Yaaro",
      pic:
        "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/10/30/Yaaro-Movie-First-Look-Poster-.jpg?quality=80&zoom=1&ssl=1",
      about:
        "Synopsis:Yaaro, is an edge-of-the-seat thriller that revolves around the life of a loner, who had a troubled childhood.",
       Rating:"⭐⭐⭐"
    },
    {
      name: "Maaran",
      pic:
        "https://static.toiimg.com/photo/msid-87310079/87310079.jpg?118968",
      about:
        "Synopsis:A man who follows the Gandhian path of non-violence is forced to resort to violence when he fails to get justice from the judicial system.",
       Rating:"⭐⭐⭐"
    },
    {
      name: "Mahaan",
      pic:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/mahaan-movie-review-1.jpg",
      about:
        "A middle-aged school teacher is abandoned by his family after he decides to live a life of his own. He realises his dream of becoming a billionaire, but misses his son.",
       Rating:"⭐⭐⭐⭐⭐"
    },
    {
      name: "maara",
      pic:
        "https://m.media-amazon.com/images/M/MV5BYmM3OTEzOTEtM2Y4Yi00ZGNjLWJmMjAtOTQ4YjBiOGUzZmNkXkEyXkFqcGdeQXVyMTI3MjIwMzU2._V1_FMjpg_UX1000_.jpg",
      about:
        "Synopsis:A young woman named Paaru notices a painting on the walls of a coastal town that depicts a fairy tale she once heard as a child. Intrigued, she sets out to find the person who painted it.",
       Rating:"5"
    },
    {
    name: "annatha",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMjNkNTE1NGUtNjNhMi00ZmY1LWI2NDEtZWZlYTkwZjNjMGMzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      about:
        "Synopsis:Kaalaiyan loves his younger sister dearly and does everything to make her happy. When she elopes with her lover to Kolkata, he goes to great lengths to protect her from the clutches of an evil don.",
       Rating:"⭐⭐⭐⭐⭐"
    }
  ];
  return (
    <div classNameName="App">
      <h1>List of Tamil films of 2021</h1>
      <hr />
      <div className="row">
        {user.map((usr) => (
          <Msg name={usr.name} pic={usr.pic} about={usr.about} />
        ))}
        {/* <Welcome  profile="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="alli" />
      <Welcome name="rani" profile="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

      <Welcome name="suresh" /> */}
      </div>
    </div>
  );
}
// export default function App() {
//   const names = ["uma", "mani", "sudha", "suresh", "hema"];
//   return (
//     <div classNameName="App">
//       {names.map((nm) => (
//         <Msg name={nm} />
//       ))}
//     </div>
//   );
// }

function Msg({ name, pic, about,Rating }) {
  // const name = "Allirani🤷‍♂️✔✔💖";
  //console.log(Props, name);
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <img className="user-profile" src={pic} alt="Movie name" />
        <div>
          <h6>Movie Title: {name}</h6>
          <p>{about}</p>
          <p>{Rating}</p>
         
          <a href="#" className="btn btn-primary">
            Home
          </a>
          <Counter />
        </div>
      </div>
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <table>
        <tr>
          <td><button onClick={() => setLike(like + 1)}>👍{like}</button></td>
          <td></td>
          <td><button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button></td>
        </tr>
      </table>
            
    </div>
  );
}
// function Welcome(Props) {
//   // const name = "Allirani🤷‍♂️✔✔💖";
//   //console.log(Props, name);
//   return (
//     <div>
//       <img classNameName="user-profile" src={Props.profile} alt="hgj" />
//       <h1> Hai {Props.name} </h1>
//     </div>
//   );
// }
// function Welcome1(Props) {
//   // const name = "Allirani🤷‍♂️✔✔💖";
//   //console.log(Props, name);
//   return (
//     <div>
//       <h1> Hai {Props.name} </h1>
//       <p /> Alli Rani, also known as Alli arasi, is a legendary Tamil queen of
//       the Sangam period, who is thought to have ruled the whole western and
//       northern coast of Sri Lanka from her capital Kudiramalai. According to
//       folklore, her fort, Allirani fort, is located in Mannar, Sri Lanka.
//     </div>
//   );
// }
