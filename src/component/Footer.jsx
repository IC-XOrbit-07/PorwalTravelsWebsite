import React from 'react'
import '../Css/Footer.css'
import image_1 from '../assets/Images/instagram.png'

function Footer() {
  return (
    <>
      <footer class="bg-black shadow-sm dark:bg-gray-800 mt-10">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400 font-bold">
            © 2023{" "}
            <a href="https://flowbite.com/" class="">
              Porwal Travels
            </a>
            .All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white  dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:text-orange-500 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500">
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
