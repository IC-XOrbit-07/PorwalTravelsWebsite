import React from 'react'
import "../../Css/MenuOptionCss/Blogs.css"

function Blogs() {
  return (
    <div className="hideonresponsive blogs_container_89y1">
      <section class="text-gray-600 body-font">
        <div class="container p-5 ">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src='/assets/Images/Adventure.png'
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Wanderlust Diaries
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Adventure is out there – waiting for those bold enough to seek
                it! From trekking the rugged terrains of Spiti Valley to diving
                into the crystal-clear waters of the Andaman Islands, every
                journey tells a story.
              </p>
              {/*<a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </a>*/}
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src='/assets/Images/Trek.png'
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Summit Chronicles
              </h2>
              <p class="text-base leading-relaxed mt-2">
                The thrill of conquering mountain summits is unmatched – a mix
                of adrenaline, serenity, and accomplishment. Standing on top of
                a peak after hours of challenging climbs is not just a physical
                achievement but a mental triumph.
              </p>
              {/*<a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </a>*/}
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/assets/Images/Jungle.png"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Into the Wild
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Imagine the thrill of hearing a tiger’s roar in the distance or
                watching elephants bathe in a serene river. Jungle safaris are
                not just adventures; they’re an immersion into the untamed
                beauty of wildlife.
              </p>
              {/*<a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </a>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs
