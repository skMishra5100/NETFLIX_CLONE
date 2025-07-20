
import React, { useState } from 'react'

const Qsn = () => {

  const list = [

    {
      id: 1,
      Q: "what is netflix? ",
      Ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devicesYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! ",
    },
    {
      id: 2,
      Q: "how much does netflix charge?  ",
      Ans: " Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      Q: "where can watch?",
      Ans: " Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consolesYou can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      Q: "how do i cancel?",
      Ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. ",
    },
    {
      id: 5,
      Q: "what can i watch on netflix? ",
      Ans: " Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      Q: "is netflix good for kids? ",
      Ans: " The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },

  ]

  const [current, set] = useState();

  const takeID = (ID) => {
    set(current == ID ? null : ID);
  }
  return (
    <>
      <section className="qeustion">
        <div className="gap">
        </div>
        <div className="qna">
          <h1>Frequently Asked Questions</h1>
          {

            list.length > 0 ? list.map((item, index) => <div key={index} className='qa'> <div className='item' >{item.Q} <span onClick={() => takeID(index)}>+</span>
            </div>
              {current == index ? <div className='ans'>{item.Ans}</div> : null}

            </div>
            ) : ""      }

        </div>

        <div className="butn">
          <button>finish sign up </button>
        </div>

      </section>
    </>
  )
}

export default Qsn
