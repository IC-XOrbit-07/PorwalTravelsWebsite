import React from 'react'
import '../../Css/MobileMenuCss/MobileBlogs.css'
import blog_image_1 from '/assets/Images/Adventure.png'
import blog_image_2 from '/assets/Images/Trek.png'
import blog_image_3 from '/assets/Images/Jungle.png'

function MobileBlogs() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Blog's
          </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          {/* 1 */}
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <img src={blog_image_1} alt="" className="rounded-xl w-full" />
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Wanderlust Diaries</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Adventure is out there – waiting for those bold enough to seek it!
              From trekking the rugged terrains of Spiti Valley to diving into
              the crystal-clear waters of the Andaman Islands, every journey    
              tells a story.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span class="font-medium dark:text-white">Jese Leos</span>
              </div>
            </div>
          </article>

          {/* 2 */}
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <img src={blog_image_2} alt="" className="rounded-xl w-full" />
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Summit Chronicles</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The thrill of conquering mountain summits is unmatched – a mix of
              adrenaline, serenity, and accomplishment. Standing on top of a
              peak after hours of challenging climbs is not just a physical
              achievement but a mental triumph.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span class="font-medium dark:text-white">Jese Leos</span>
              </div>
            </div>
          </article>
          {/* 3 */}
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <img src={blog_image_3} alt="" className="rounded-xl w-full" />
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Into the Wild</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Imagine the thrill of hearing a tiger’s roar in the distance or
              watching elephants bathe in a serene river. Jungle safaris are not
              just adventures; they’re an immersion into the untamed beauty of
              wildlife.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span class="font-medium dark:text-white">Jese Leos</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MobileBlogs
