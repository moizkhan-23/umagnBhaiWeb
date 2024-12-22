import React, { useEffect, useState } from 'react'
import Logo from '../assets/download.png'

function Header() {
    const navItems=[{name:"Home"},{name:"About"},{name:"Blog"},{name:"Contact"},
]
const [toggle,setToggle]=useState(false)
function mytoggle(e){
    e.stopPropagation();
    
    setToggle((pre)=> !pre)
 }
 
 useEffect(() => {
    const closeMenu = () => setToggle(false);
    window.addEventListener('click', closeMenu);

    return () => {
    
      window.removeEventListener('click', closeMenu);
    };
  }, []);




 
  return (
    <>
    <header className='bg-black py-2 md:py-1  fixed top-0 left-0 z-50 w-full '>
        <nav className='flex   
        justify-between items-center w-[80%] mx-auto '>
            <div>
    <img src={Logo} alt="" className='inline-block rounded-full h-16' />
</div>
<ul className=' hidden md:flex  space-x-3 text-2xl text-orange-600  '>
    {
        navItems.map((items,index)=>(
<li key={index}><button className='inline-block py-1 px-3 hover:scale-75 duration-300 hover:text-orange-300 '>{items.name}</button></li>

        ))
    }

</ul>
<div className='md:hidden'>

{
    !toggle ? <button onClick={mytoggle}><i className="fa-solid fa-bars text-2xl text-white "></i></button> : <button onClick={mytoggle}><i className="fa-solid fa-xmark text-white   text-2xl"></i></button>

}
</div>

{/* mobile view navigation */}

<div
            className={`fixed top-[73px] left-0 w-3/4 bg-black h-full       transition-transform duration-300 ease-in-out text-xl ${
              toggle ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <ul className="text-orange-600 text-3xl flex flex-col items-start  py-10 px-5 ">
            
    
              {navItems.map((items) => (
                <li key={items.name}>
                  <button className="inline-block py-1 px-3 hover:scale-75 duration-300 hover:text-orange-300">{items.name}</button>
                </li>
              ))}
            </ul>
          </div>


        </nav>
    </header>



    
    </>
  )
}

export default Header