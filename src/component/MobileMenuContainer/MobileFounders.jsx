import React from 'react'
import founder_image_1 from '/assets/Images/Papa.png'
import founder_image_2 from '/assets/Images/Dada.jpg'
import '../../Css/MobileMenuCss/MobileFounder.css'

function MobileFounders() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="font_styler_founders mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Founders
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* 1 */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <img
                  src={founder_image_2}
                  alt=""
                  className="rounded-xl w-full"
                />
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                <a href="#">Mr Ram Prakash Porwal</a>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#515870",
                  }}
                >
                  Management Team Lead
                </div>
              </h2>
              <p className="mb-5 text-gray-500 dark:text-gray-400 text-center">
                As the founders of this travel business, I manage all paperwork,
                handle outreach, and offer expert consultancy for passports,
                visas, and both domestic and international tours. My focus is on
                providing seamless travel solutions and guiding clients through
                all their travel needs.
              </p>
            </article>

            {/* 2 */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <img
                  src={founder_image_1}
                  alt=""
                  className="rounded-xl w-full"
                />
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                <a href="#">Mr Ajay Kumar Porwal</a>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#515870",
                  }}
                >
                  Technical Team Lead
                </div>
              </h2>
              <p className="mb-5 text-gray-500 dark:text-gray-400 text-center">
                As the co-founder, I handle all the technical aspects of the
                business, including submitting documents online, filling out
                forms, and ensuring all necessary work is completed. I focus on
                streamlining processes and making sure everything runs smoothly
                behind the scenes. Make travel your ultimate advantage Porwal
                Travels offers personalized trips with custom itineraries,
                seamless bookings, and visa and passport assistance. Ou
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileFounders
