import React from 'react'
import '../../Css/MenuOptionCss/Tours.css'
import { Link } from 'react-router-dom';

export default function Tours() {
    return (
        <div className='menu_box_enlarge_2t69_tours hideOnResponsive'>
            <div className="main_container_391_">
                <div className='location_all_region'>
                    {/* North */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>North</h4>

             

                        <ul className='list_item_container'>
                            <li><Link to="/region/J&k">Jammu & Kashmir</Link></li>
                            <li><Link to="/region/Himachal">Himachal Pradesh</Link></li>
                            <li><Link to="/region/Punjab">Punjab</Link></li>
                            <li><Link to="/region/Uttrakhand">Uttarakhand</Link></li>
                            <li><Link to="/region/Haryana">Haryana</Link></li>
                            <li><Link to="/region/UP">Uttar Pradesh</Link></li>
                            
                        </ul>
                    </div>
                    {/* North east */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>North East</h4>
                        <ul className='list_item_container'>
                            <li><a href="#">Arunachal Pradesh</a></li>
                            <li><a href="#">Assam</a></li>
                            <li><a href="#">Manipur</a></li>
                            <li><a href="#">Meghalaya</a></li>
                            <li><a href="#">Mizoram</a></li>
                            <li><a href="#">Nagaland</a></li>
                            <li><a href="#">Tripura</a></li>
                        </ul>
                    </div>
                    {/* South */}
                    <div className='heading_option_container'>
                        <h4 className='region_highlighter'>South</h4>
                        <ul className='list_item_container'>
                            <li><a href="#">Andhra Pradesh</a></li>
                            <li><a href="#">Telangana</a></li>
                            <li><a href="#">Karnataka</a></li>
                            <li><a href="#">Tamil Nadu</a></li>
                            <li><a href="#">Kerala</a></li>
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
                            <li><a href="#">Rajasthan</a></li>
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
