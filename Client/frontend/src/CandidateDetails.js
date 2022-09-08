import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";

function CandidateDetails() {

    const location = useLocation();

    const email = location.state.email;

    const [info, setInfo] = useState([])

    useEffect(() => {
        let baseURL = "http://127.0.0.1:8000/job_appl_review_sys/candidates/"
        axios.get(baseURL + email)
            .then((res) => {
                setInfo(res.data);
                console.log(res);
            })
            .catch(console.error);
    }, []);


    const accept = () => {

        let baseURL = "http://127.0.0.1:8000/job_appl_review_sys/candidates/"
        let data = { status: "Accepted" }
        axios.patch(baseURL + email, data)
            .then((res) => {
                setInfo(res.data);
                console.log(res.data);
            })
            .catch(console.error);
        window.location.reload();
    }

    const reject = () => {

        let baseURL = "http://127.0.0.1:8000/job_appl_review_sys/candidates/"
        let data = { status: "Rejected" }
        axios.patch(baseURL + email, data)
            .then((res) => {
                setInfo(res.data);
                console.log(res.data);
            })
            .catch(console.error);
        window.location.reload();

    }

    const download_pdf = () => {
        const doc = new jsPDF();
        let text = "Name of the candidate: " + info.name + "\n\nEmail id: " + info.email + "\nPhone no: " + info.contact + "\n\nHighest Qualification: " + info.edu_level + "\nResult achieved: " + info.result + "\n\nWork Experience: " + info.workexp;
        doc.text(text, 10, 10);
        doc.save(info.name + "_details.pdf");

    }

    return (
        <>

            <div class="d-flex-vertical justify-content-center myclass">
                <div id="capture">
                    <div>
                        <br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary">Name:</label>
                        <span><h3 class="d-inline-flex p-2">{info.name}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Email:</label>
                        <span><h3 class="d-inline-flex p-2">{info.email}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Contact:</label>
                        <span><h3 class="d-inline-flex p-2">{info.contact}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Education Level:</label>
                        <span><h3 class="d-inline-flex p-2">{info.edu_level}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Result:</label>
                        <span><h3 class="d-inline-flex p-2">{info.result}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Work experience:</label>
                        <span><h3 class="d-inline-flex p-2">{info.workexp}</h3></span><br />
                        <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Resume Link:</label>
                        <span><a href={info.resume}><h3 class="d-inline-flex p-2">{info.filename}</h3></a></span></div><br />

                    {info.status == "Applied" ?
                        <div>
                            <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Application Status:</label>
                            <span><h3 class="fs-3 d-inline-flex p-2 text-primary"> {info.status}</h3></span>
                            <br /><br />
                            <button type="button" class="btn btn-success btn-lg me-5" onClick={() => { if (window.confirm("Accept Candidate?")) accept() }}>Accept</button>
                            <button type="button" class="btn btn-danger btn-lg ms-5" onClick={() => { if (window.confirm("Reject Candidate?")) reject() }}>Reject</button>
                        </div> :
                        <div>
                            <label for="disabledTextInput " class="fs-3 form-label text-secondary text-secondary">Application Status:</label>
                            {info.status == "Accepted" ?
                                <div class="fs-3 d-inline-flex p-2 text-success">
                                    <span><h3> {info.status}</h3></span>
                                </div> :
                                <div class="fs-3 d-inline-flex p-2 text-danger">
                                    <span><h3> {info.status}</h3></span>
                                </div>
                            }

                        </div>
                    }
                </div><br/><br/>
                <button onClick={() => { download_pdf() }}
                    class="btn btn-dark">Download resume</button><br /><br />

            </div> </>
    );

}

export default CandidateDetails;