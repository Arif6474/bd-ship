import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMAGE_URL, OFFICE_EMPLOYEES_API } from '../../../../../Utilities/APIs'

function Employees() {
    const [officeEmployees, setOfficeEmployees] = useState([]);
    // console.log(employees);
    useEffect(() => {
        const getOfficeEmplpoyees = async () => {
            const { data } = await axios.get(OFFICE_EMPLOYEES_API)
            setOfficeEmployees(data)
        }
        getOfficeEmplpoyees()
    }, [])
    return (
        <div className="container boardMember">
            <div className="reverent">
                <div className="reverent-board-member">
                    <h1>Employee</h1>
                </div>
            </div>
            <div className="all-members">
                {
                    officeEmployees?.map(officeEmployee =>

                        <div className="revere-member membersPro" key={officeEmployee._id}>
                            <img src={IMAGE_URL + officeEmployee.image} alt="" />
                            <h3>{officeEmployee.name} </h3>
                            <h6>{officeEmployee.designation} </h6>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Employees