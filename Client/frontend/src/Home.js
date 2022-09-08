import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        let baseURL = "http://127.0.0.1:8000/job_appl_review_sys/candidates/"
        axios.get(baseURL)
            .then((res) => {
                setInfo(res.data);
            })
            .catch(console.error);
    }, []);

    const navigate = useNavigate();

    const gotodetails = (id) => {
        navigate('/details', { state: { email: id } });
    }


    return (
        <div class="container d-flex justify-content-center mt-5">
            <table class="table table-success table-striped col-lg-5">
                <thead class="fs-4">
                    <tr>
                        <th scope="col"> Name </th>
                        <th scope="col"> Email ID </th>
                        <th scope="col"> Contact No.</th>
                        <th scope="col"> Status </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((e =>

                            <tr onClick={() => { if (window.confirm("Go to " + e.name + " details?")) gotodetails(e.email) }}>
                                <td class="fs-5">{e.name}</td>
                                <td class="fs-5"> {e.email} </td>
                                <td class="fs-5"> {e.contact} </td>
                                {
                                    e.status == "Applied" ?
                                        <div><td class="text-primary fs-5"> {e.status} </td></div> :
                                        <div>
                                            {
                                                e.status == "Accepted" ?
                                                    <div><td class="text-success fs-5"> {e.status} </td></div> :
                                                    <div><td class="text-danger fs-5"> {e.status} </td></div>
                                            }
                                        </div>

                                }

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
export default Home;