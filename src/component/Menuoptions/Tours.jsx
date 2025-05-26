import React from 'react'
import '../../Css/MenuOptionCss/Tours.css'
import { Link } from 'react-router-dom';

export default function Tours() {
    return (
        <div className='menu_box_enlarge_2t69_tours hideOnResponsive'>
            <h1 className='ml-3 mt-8 font-bold bg-red-600 p-2 text-white rounded-lg mr-96 text-center'>Rajasthan link is the only one working</h1>

            <div className="main_container_391_">
                <div className='location_all_region'>
                    {/* North */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>North</h4>

             

                        <ul className='list_item_container'>
                            <li><Link to="">Jammu & Kashmir</Link></li>
                            <li><Link to="">Himachal Pradesh</Link></li>
                            <li><Link to="">Punjab</Link></li>
                            <li><Link to="">Uttarakhand</Link></li>
                            <li><Link to="">Haryana</Link></li>
                            <li><Link to="">Uttar Pradesh</Link></li>
                            
                        </ul>
                    </div>
                    {/* North east */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>North East</h4>
                        <ul className='list_item_container'>
                            <li><Link to="">Arunachal Pradesh</Link></li>
                            <li><Link to="">Assam</Link></li>
                            <li><Link to="">Manipur</Link></li>
                            <li><Link to="">Meghalaya</Link></li>
                            <li><Link to="">Mizoram</Link></li>
                            <li><Link to="">Nagaland</Link></li>
                            <li><Link to="">Tripura</Link></li>
                        </ul>
                    </div>
                    {/* South */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>South</h4>
                        <ul className='list_item_container'>
                            <li><Link to="">Andhra Pradesh</Link></li>
                            <li><Link to="">Telangana</Link></li>
                            <li><Link to="">Karnataka</Link></li>
                            <li><Link to="">Tamil Nadu</Link></li>
                            <li><Link to="">Kerala</Link></li>
                            {/* <li><a href="#">Options</a></li>
                            <li><a href="#">Options</a></li> */}
                        </ul>
                    </div>
                    {/* East */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>East</h4>
                        <ul className='list_item_container'>
                            <li><a href="#">Bihar</a></li>
                            <li><a href="#">Jharkhand</a></li>
                            <li><a href="#">Odisha</a></li>
                            <li><a href="#">West Bengal</a></li>
                            <li><a href="#">Sikkim</a></li>
                            {/* <li><a href="#">Options</a></li>
                            <li><a href="#">Options</a></li> */}
                        </ul>
                    </div>
                    {/* West */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>West</h4>
                        <ul className='list_item_container'>
                            <li><Link to="/region/Rajasthan">Rajasthan</Link></li>
                            <li><a href="#">Gujarat</a></li>
                            <li><a href="#">Maharashtra</a></li>
                            <li><a href="#">Goa</a></li>
                            {/* <li><a href="#">Options</a></li>
                            <li><a href="#">Options</a></li>
                            <li><a href="#">Options</a></li> */}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}
