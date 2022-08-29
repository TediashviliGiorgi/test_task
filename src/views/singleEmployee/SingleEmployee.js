import axios from "axios"
import React, { useEffect, useState } from "react"
import Navbar from './../../components/navBar/Navbar'
import Footer from './../../components/footer/Footer'
import './SingleEmployee.css'

const SingleEmployee = () => {
    let referrer = window.location.href
    let clickedUserId = referrer.substring(referrer.indexOf('e/') + 2);
    let clickedSingleEmployeeUrl = `https://test-task-api-optimo.herokuapp.com/employee/${clickedUserId}`
    const getLocationsEndpoint = 'https://test-task-api-optimo.herokuapp.com/location'
    let [employee, setEmployee] = useState([])

    let [locations, setLocations] = useState([])

    const getEmployee = async () => {
        let employee = await axios.get(clickedSingleEmployeeUrl)
        setEmployee(employee)
    }

    // get locatoins form DB
    const getLocations = async () => {
        let locations = await axios.get(getLocationsEndpoint)
        setLocations(locations)
    }

    useEffect(() => {
        getEmployee()
        getLocations()
    }, [])

    if (employee.data !== null && employee.data !== undefined) {

        // get linked locatoins
        locations.data.map((location) => {
            if (employee.data.job_id == location.id) {
                employee.location = location.name
            }
        })

        // serve likes 
        const likeService = () => {
            let likedPersonId = employee.data.id
            console.log(likedPersonId)
            // increase and save like
            let increasedLike = Number(employee.data.liked) + 1
            let putLikeUrl = `https://test-task-api-optimo.herokuapp.com/employee/${likedPersonId}`
            getEmployee()
            axios.put(putLikeUrl, increasedLike)
            getEmployee()
        }


        return (
            <>
                <Navbar />
                <div className='section'>

                    <div className="personProfileCard">
                        <img src={`https://test-task-api-optimo.herokuapp.com${employee.data.avatar}`} alt={employee.data.name} />
                        <p><strong>{employee.data.name}</strong></p>
                        <p><strong>Job description:</strong> {employee.data.description}</p>
                        <p><strong>Location: </strong>{employee.location}</p><br></br><hr></hr>
                        <p>My name is {employee.data.name} I'm from {employee.location}</p>
                        and I'm a {employee.data.description}
                        
                        <button className="like_btn" onClick={likeService}>
                            {employee.data.liked} - Like: {employee.name}
                            <i className="fa fa-thumbs-up"></i>
                        </button>
                    </div>
                </div>


                <Footer />
            </>
        )
    }
}

export default SingleEmployee