import CardChild from "./CardChild";
import CardOneImg from '../assets/img1.jpg'
import CardTwoImg from '../assets/img2.jpg'
import CardThreeImg from '../assets/img3.jpg'
import CardFourthImg from '../assets/image4.jpg'
function CardParent() {

  const cards = [
    {
      id: 1,
      image: CardOneImg,
      title: 'City',
      description: 'This is the first card description   Lorem ipsum dolor sit amet consectetur..',
      
    },
    {
      id: 2,
      image: CardTwoImg,
      title: 'Briged',
      description: 'This is the second card description   Lorem ipsum dolor sit amet consectetur..',
    },
    {
      id: 3,
      image: CardThreeImg,
      title: 'Mountain',
      description: 'This is the third card description Lorem ipsum dolor sit amet consectetur.. ',
    },
    {
      id: 4,
      image: CardFourthImg,
      title: 'River',
      description: 'This is the third card description    Lorem ipsum dolor sit amet consectetur..',
    },
  ];
  

  return (
    <>
    
    
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4   p-1 gap-4 mt-6 w-[80%] m-auto">
   {

    cards.map((card,index)=>(
      <div key={index} className="" >
<CardChild title={card.title} description={card.description} img={card.image} ></CardChild>

      </div>
    ))
   }
 
</div>
     
    </>
  )
}

export default CardParent
