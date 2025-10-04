import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function page() {
    const styles = {
    navItemsStyle:
      "text-gray-600 hover:text-[var(--primary-color)] transition-colors",
  };
  return (
    <div>
      <Link
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 bg-white text-gray-900"
        href="#main-content"
      >
        Skip to Content
      </Link>
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <svg
                  className="h-10 w-10 text-[var(--primary-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="text-2xl font-bold text-gray-900">
                  Hope Foundation
                </span>
              </div>
              <nav className="hidden lg:flex items-center gap-8">
                <Link className={styles.navItemsStyle} href="#">
                  About Us
                </Link>
                <Link className={styles.navItemsStyle} href="#">
                  Our Work
                </Link>
                <Link className={styles.navItemsStyle} href="#">
                  Campaigns
                </Link>
                <Link className={styles.navItemsStyle} href="#">
                  Get Involved
                </Link>
                <Link className={styles.navItemsStyle} href="#">
                  Media Center
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <button className="bg-slate-300 text-black font-bold py-2 px-6 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Donate Now
                </button>
                <button className="lg:hidden">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16m-7 6h7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1" id="main-content">
<section
  className="relative h-[600px] bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
  }}
>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                Giving Children a Hope for a Better Future
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mb-8">
                Established in 2002, we are an Indian NGO dedicated to
                empowering marginalised children and their communities.
              </p>
            </div>
          </section>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="border-r border-gray-200 pr-4">
                  <p className="text-4xl font-bold text-[var(--primary-color)]">
                    2.3+ Million
                  </p>
                  <p className="text-gray-600 mt-2">Children</p>
                </div>
                <div className="border-r border-gray-200 pr-4">
                  <p className="text-4xl font-bold text-[var(--primary-color)]">
                    3500+
                  </p>
                  <p className="text-gray-600 mt-2">Villages</p>
                </div>
                <div className="border-r border-gray-200 pr-4">
                  <p className="text-4xl font-bold text-[var(--primary-color)]">
                    200+
                  </p>
                  <p className="text-gray-600 mt-2">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--primary-color)]">
                    23
                  </p>
                  <p className="text-gray-600 mt-2">States</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Programmes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">
                    Providing quality education to underprivileged children.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Women Empowerment
                  </h3>
                  <p className="text-gray-600">
                    Empowering women to become self-reliant.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Empowering Grassroots
                  </h3>
                  <p className="text-gray-600">
                    Strengthening local communities and institutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                  <p className="text-gray-600">
                    Ensuring access to essential healthcare services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">Livelihood</h3>
                  <p className="text-gray-600">
                    Creating sustainable livelihood opportunities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Disaster Response
                  </h3>
                  <p className="text-gray-600">
                    Providing immediate relief and long-term rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-8">Stories in Motion</h2>
              <div className="relative">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full aspect-video rounded-lg shadow-xl"
                  // frameborder="0"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Support A Cause
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    alt="Tayyari Kal Ki"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Ncr81wgShk1pmikZgQJaI4zl41SmQC25cFcQUY-8eph2TanF5bn9JFgyYi8kbtq9NpGk5s_G3ldXzXigXYRSS-FE8Uzwz1bPOY5oYQc1jeiVhyImixSsIn0Afkw1ceoiupV1Fd4lLf26GvehnPQSryGvA26PvF5CQ-YjJ0d7oI2mXFPTi4MoG9EgEm4B5gPX4WcHU3G0ythtBiWoq6HdeGwuMIAZTphQoX3jnpYfIoBT8LlgE74GjLh6PTau2z5gq9SGHhiLApw"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">
                      Tayyari Kal Ki
                    </h3>
                    <button className="w-full mt-4 bg-[var(--secondary-color)] text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition-colors">
                      Donate
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    alt="Health Cannot Wait"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfaXMI_KY49bADDLVajObiFWyOWbw5qQjkYQExyMaBDArO8On0hOSvYQpCsCqPCyGtyL0cbmhqZ8Ptrdnu_YKmd0yv__b4xMrdzLVqYWWwo99D0Mtk8ByLR8U2mnWfN9Im-zHxn_YuRTF6bh1BhsJW5DCHRMGjS3X6xiPBK-BJomFZ7CG2gH5gASQHqefX3_K0xjd1rv5cbptx4ij-HFttndne73geht4zlxyZY8ohfSqbvGD0CIqDTgvgSkwP2dAn09ZBD8Jc0D0"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">
                      Health Cannot Wait
                    </h3>
                    <button className="w-full mt-4 bg-[var(--secondary-color)] text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition-colors">
                      Donate
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    alt="Shiksha Na Ruke"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pk_d7e0BUxFbrNz6CE3_xDjPBeOSrG_ToT_KHAigM1v5H6f9sWURuh1WblkTQORh6tsPZpHwWfEuxYY4QsgGqyX7AqMA6Tc0XEQEiFqhZP6UNI4TGROEXLp5S9nlgTEfbjthLYkjtFVBMy8vj0_1WQmaFJJzPjI98Ju-_u1DU3yDWE0zx7cHYa4igBSYOtLfzcv7cQkSMAWDd0LK5p-ZOdLMR-JvhhqvAKv1pDIhYyDkJy59yGlvcz26wNOfId0-yY0S7Vpyh4Y"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">
                      Shiksha Na Ruke
                    </h3>
                    <button className="w-full mt-4 bg-[var(--secondary-color)] text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition-colors">
                      Donate
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    alt="She Can Fly"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrEwrhm4mjXyXNGJjRdq_iDsFhRj_OTQgyQ62Yf87XkeLCpzqZbSN6cGnSH6PGjM0-mKFbyayYwhIcJ6BprZhfkyDUALDBiigljjEHKtICuIicdq3gxmLyHT2GoqR_veokOzUKvD76brNigWZLmzm0EWluSDV-r4U4i60rQraME0hdbZeBO_AmrtUosAlscM4k5vby2JNHK7Kf1MTp32WEbEHVkdcBX5BS-reY6tQ033B7Oh08TL4HhLUTM_KhK-6lVWewNeJxCKM"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">She Can Fly</h3>
                    <button className="w-full mt-4 bg-[var(--secondary-color)] text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 transition-colors">
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Our Partners in Change
                </h3>
                <p className="text-gray-400">
                  We are grateful for the support of our partners who believe in
                  our mission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Empanelment &amp; Accreditations
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li>UN (ECOSOC)</li>
                  <li>GlobalGiving</li>
                  <li>Guidestar</li>
                  <li>CAF America &amp; India</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Hope Foundation, <br /> New Delhi, India
                  <br /> Email: info@hopefoundation.org
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Subscribe to our Newsletter
                </h3>
                <form className="flex">
                  <input
                    className="w-full rounded-l-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Your email"
                    type="email"
                  />
                  <button className="bg-[var(--primary-color)] text-white font-bold py-2 px-4 rounded-r-md hover:bg-red-600 transition-colors">
                    Subscribe
                  </button>
                </form>
                <div className="flex gap-4 mt-6">
                  <Link className="text-gray-400 hover:text-white" href="#">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.9-2.42-.85.5-1.8.87-2.8 1.07C18.2 4.2 16.9 3.5 15.5 3.5c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.1.98-3.6-.18-6.8-1.9-9-4.57-.37.64-.58 1.4-.58 2.2 0 1.5.76 2.8 1.9 3.6-.7-.02-1.35-.2-1.9-.5v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.75.15-1.15.15-.28 0-.55-.03-.8-.08.55 1.7 2.15 3 4.05 3.05-1.5.95-3.4 1.5-5.45 1.5-.35 0-.7-.02-1.05-.06 1.95 1.25 4.25 2 6.75 2 8.1 0 12.5-6.7 12.5-12.5 0-.2 0-.4-.02-.6.85-.6 1.58-1.35 2.16-2.24z"></path>
                    </svg>
                  </Link>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2.14 15.86h-2.79v-7.31h-1.4V8.57h1.4V7.5c0-1.2.53-2.07 1.62-2.07h1.33v2.06h-.97c-.3 0-.5.18-.5.53v.48h1.5l-.2 2.01h-1.3v7.31z"></path>
                    </svg>
                  </Link>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.88 4H7.12C5.95 4 5 4.95 5 6.12v9.76C5 17.05 5.95 18 7.12 18h9.76c1.17 0 2.12-.95 2.12-2.12V6.12C19 4.95 18.05 4 16.88 4zM8.38 16.25h-1.5V9h1.5v7.25zM7.62 8.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm8.88 8H15v-3.75c0-.88-.02-2-1.22-2s-1.4.95-1.4 1.94V16.25h-1.5V9h1.5v.69h.02c.21-.4.72-.81 1.48-.81 1.58 0 1.87 1.04 1.87 2.4v4.97z"></path>
                    </svg>
                  </Link>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm10.2 2.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    </svg>
                  </Link>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
              <p>© 2023 Hope Foundation. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default page


