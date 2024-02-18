import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <h4>
                items
            </h4>
            <div>
                <div>
                <input type='checkbox' id='point1' name='point1' value='Point1' />
                <label for='point1'>Point 1</label>
                </div>
                <div>
                <input type='checkbox' id='point2' name='point2' value='Point2' />
                <label for='point2'>Point 3</label>
                </div>
                <div>
                <input type='checkbox' id='point3' name='point3' value='Point3' />
                <label for='point3'>Point 3</label>
                </div>
                <div>
                <input type='checkbox' id='point4' name='point4' value='Point4' />
                <label for='point4'>Point 4</label>
                </div>
            </div>
        </div>
    )
}