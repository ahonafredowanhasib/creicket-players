import React from 'react';
import NavImg from '../assets/logo.png'
import Dollar from '../assets/Currency.png'
const NavBar = () => {
    return (
        <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
            </ul>
          </div>
          <a class="w-[60px] h-[60px]">
            <img src={NavImg} alt="" />
          </a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
          </ul>
          
        </div>
        <div class=" navbar-end">
          <span className='mr-1' >6000000000</span>
          <span className='mr-1'>Coin</span>
          <img className='mr-1' src={Dollar} alt="" />
        </div>
      </div>
    );
};

export default NavBar;