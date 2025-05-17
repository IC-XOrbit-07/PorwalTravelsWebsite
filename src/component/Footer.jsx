import React from 'react'
import '../Css/Footer.css'
// import image_1 from '../assets/Images/instagram.png'

function Footer() {
  return (
    <>
      <footer className="bg-black shadow-sm dark:bg-gray-800 mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400 font-bold">
            © 2023{" "}
            <a href="https://flowbite.com/" className="">
              Porwal Travels
            </a>
            .All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:text-orange-500 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chinmay-porwal-945621270/" target='_blank'
                className="hover:text-orange-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer
