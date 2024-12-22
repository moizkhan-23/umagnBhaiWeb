import Logo from '../assets/download.png'



export default function Footer() {
    const navItems=[{name:"Home"},{name:"About"},{name:"Blog"},{name:"Contact"},
    ]
  return (
    <>    <footer className='py-6 mb-0 bg-black '>
      <div className='sm:px-0 px-8  flex flex-col    sm:space-y-3 space-y-4 sm:items-center items-start
       '>

        <div className=''>
            <img src={Logo} alt="" className='inline-block rounded-full h-16'  />
        </div>

        <ul className="text-orange-600 text-xl sm:flex sm:justify-center sm:items-center">
            
    
            {navItems.map((items) => (
              <li key={items.name}>
                <button className="inline-block py-1 px-3 hover:scale-75 duration-300 hover:text-orange-300">{items.name}</button>
              </li>
            ))}
          </ul>

        <div className="h-0.5  w-[60%] mx-auto mt-10 hover:bg-orange-300 bg-orange-600 duration-200 sm:flex hidden"></div>

<div className='flex md:w-[20%] w-[15%] md:mx-auto md:justify-between  items-center text-white  mt-7 text-2xl md:text-3xl md:space-x-0 space-x-3 '>

        <i className="fa-brands fa-instagram  duration-200 hover:text-orange-300  text-orange-600 cursor-pointer "></i>
        <i className="fa-brands fa-facebook  duration-200 hover:text-orange-300 text-orange-600 cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter  duration-200 hover:text-orange-300 text-orange-600 cursor-pointer"></i>
        <i className="fa-brands fa-youtube  duration-200 hover:text-orange-300 text-orange-600 cursor-pointer"></i>

</div>
</div>




     

    </footer>
    </>

  );
}