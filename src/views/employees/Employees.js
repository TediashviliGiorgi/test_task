import axios from "axios"
import React, { useEffect, useState } from "react"
import Navbar from "../../components/navBar/Navbar"
import Footer from '../../components/footer/Footer'
import './Employees.css'
// import '../../components/likeService/LikeService.css'


const Employees = () => {

    let [employees, setEmployees] = useState([])
    let [locations, setLocations] = useState([])
    let [selects, setSelects] = useState()




    const getAllEmployeesEndpoint = 'https://test-task-api-optimo.herokuapp.com/employee'
    const getLocationsEndpoint = 'https://test-task-api-optimo.herokuapp.com/location'

    // get employees data from DB
    const getEmployees = async () => {
        let employees = await axios.get(getAllEmployeesEndpoint)
        setEmployees(employees)
    }

    // get locatoins form DB

    const getLocations = async () => {
        let locations = await axios.get(getLocationsEndpoint)
        setLocations(locations)
    }

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])

    // serve likes 
    const likeService = (index) => {
        let likedPersonId = employees.data[index].id
        console.log(likedPersonId)
        // increase and save like
        let increasedLike = Number(employees.data[index].liked) + 1
        let putLikeUrl = `https://test-task-api-optimo.herokuapp.com/employee/${likedPersonId}`
        getEmployees()
        axios.put(putLikeUrl, increasedLike)
        getEmployees()
    }


    // check if data isn't null or undefined
    if (employees.data !== null && employees.data !== undefined && locations.data !== undefined) {

        //  sort data by likes
        employees.data.sort((a, b) => {
            return b.liked - a.liked
        })

        // get linked locatoins

        employees.data.map((employee) => {
            locations.data.map((location) => {
                if (employee.job_id == location.id) {
                    employee.location = location.name
                }
            })
        })



       
        return (
            <div>
                <Navbar />
                <main>
                    <div className="title">
                    </div>
                    <div className="employees">

                        {

                            // each employee
                            employees.data.map((employee, index) => (
                                <div key={index} className='employee'>
                                    <a href={`/singleemployee/${employee.id}`}>
                                        <img src={`https://test-task-api-optimo.herokuapp.com${employee.avatar}`} alt={employee.name} />
                                        <div className="employee-info">
                                            <p><strong className={`${index <= 2 ? 'top' : ''}`}>{employee.name}</strong></p>
                                            <p><strong>Job description:</strong> {employee.description}</p>
                                            <p>{employee.location}</p>
                                        </div>
                                    </a>
                                    {/* <LikeService likes={employee.liked} name={employee.name} key={index}/> */}
                                    {/* like button */}
                                    <button className="like_btn" onClick={() => likeService(index)}>
                                        {employee.liked} - Like: {employee.name}
                                        <i className="fa fa-thumbs-up"></i>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Employees