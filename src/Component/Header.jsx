import React from 'react';
import { BiSolidOffer } from 'react-icons/bi';
import {IoHelpBuoyOutline} from "react-icons/io5"


   
const Header = () => {
  return (
  
<nav className="bg-white dark:bg-gray-900 fixed mt-2 pb-2 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
  <svg class="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fill-rule="evenodd" clip-rule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stop-color="#FF993A"></stop><stop offset="1" stop-color="#F15700"></stop></linearGradient></defs></svg>
      <span className="self-center ml-4 text-2xl font-bold  whitespace-nowrap dark:text-white  md:hover:text-orange-600">Swiggy</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <div className="flex-grow justify-end">
      <input
        className="flex w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search"
      />      
    </div>
    <li>
      <a href="#" className=" flex items-center py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        <BiSolidOffer className="mr-2" />
        Offers
      </a>
    </li>
    <li>
      <a href="#" className=" flex items-center py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        <IoHelpBuoyOutline className="mr-2" />
        Help
      </a>
    </li>
    <li>
      <a href="#" className=" flex items-center py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
      <BiSolidOffer className="mr-2" />
        Sign In
      </a>
    </li>
  </ul>
</div>
</div>
 
</nav>


  )
 
}

export default Header;