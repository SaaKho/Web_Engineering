import React from 'react'
import "./Style1.css";

export default function Booking() {
    return (
        <form action="action_page.php" method="get" className='search-form'>
            <div className="row d-flex justify-content-center" style={{}}>
                <div className="col-2">
                    <label htmlFor="check-in-date" className='search-labels'>Check-in date:</label>
                    <input type="date" id="check-in-date" name="check-in-date" />
                </div>
                <div className="col-2">
                    <label for="check-out-date" className='search-labels'>Check-out date:</label>
                    <input type="date" id="check-out-date" name="check-out-date" />
                </div>
                <div className="col-2">
                    <label for="num-guests" className='search-labels'>Number of guests:</label>
                    <input type="number" id="num-guests" name="num-guests" />
                </div>
                <div className="col-2">
                    <label for="room-type" className='search-labels'>Room type:</label>
                    <select id="room-type" name="room-type">
                        <option value="standard">Standard</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div className="col-2">
                    <label for="room-type" className='search-labels' style={{marginTop: '72px'}}></label>
                    <input type="submit" value="Search" />
                </div>
            </div>
        </form>
    )
}
