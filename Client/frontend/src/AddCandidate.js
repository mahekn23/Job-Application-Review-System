import { useState, useRef } from "react";
import axios from "axios";

function AddCandidate() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [edu_level, setEdu_level] = useState("");
    const [result, setResult] = useState("");
    const [workexp, setWorkexp] = useState("");
    const [resume, setResume] = useState();
    const [status, setStatus] = useState("Applied");

    const inputRef = useRef(null);

    const hName = (event) => { setName(event.target.value); }
    const hEmail = (event) => { setEmail(event.target.value); }
    const hContact = (event) => { setContact(event.target.value); }
    const hEdu_level = (event) => { setEdu_level(event.target.value); }
    const hResult = (event) => { setResult(event.target.value); }
    const hResume = (event) => { setResume(event.target.files[0]); }
    const hWorkexp = (event) => { setWorkexp(event.target.value); }

    const add = (event) => {
        event.preventDefault();
        if (String(contact).length < 10) {
            alert("invalid contact number");
            setName("");
            setEmail("");
            setContact("");
            setEdu_level("");
            setResult("");
            setWorkexp("");
            setResume(null);
            inputRef.current.value = null;
            setStatus("");
        }
        let baseURL = "http://127.0.0.1:8000/job_appl_review_sys/candidates/"
        
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('contact', contact);
        formData.append('edu_level', edu_level);
        formData.append('result', result);
        formData.append('workexp', workexp);
        formData.append('status', status);
        formData.append('resume', resume);
        formData.append('filename', resume.name);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        console.log(formData);
        axios.post(baseURL + email, formData, config)
            .then(() => {
                console.log(formData);
                alert("New Candidate added!!");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Email ID already exists")
            });
        setName("");
        setEmail("");
        setContact("");
        setEdu_level("");
        setResult("");
        setWorkexp("");
        setResume(null);
        inputRef.current.value = null;
        setStatus("");
    }

    return (
        <>

            <div class="container d-flex justify-content-center mt-5">

                <form class="col-lg-8" onSubmit={add}>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={hName} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={hEmail} />
                        <div id="emailHelp" class="form-text">This is your unique ID.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Contact</label>
                        <input required type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contact} onChange={hContact} />
                    </div><br /><br />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Highest Education Level</label>
                        <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={edu_level} onChange={hEdu_level} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Result Obtained</label>
                        <input required type="number" step="any" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={result} onChange={hResult} />
                        <div id="emailHelp" class="form-text">Score achieved in the above mentioned qualification.</div>
                    </div><br /><br />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Work experience</label>
                        <textarea rows={5} cols={40} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={workexp} onChange={hWorkexp} />
                        <div id="emailHelp" class="form-text">For ex: company name; role = description of tasks; duration</div>
                    </div><br /><br />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> Upload Resume</label>
                        <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={hResume} ref={inputRef} />
                        <div id="emailHelp" class="form-text">pdf file</div>
                    </div><br /><br />
                    <button type="submit" class="btn btn-success">Add Candidate</button><br /><br />
                </form></div>

        </>
    )

}
export default AddCandidate;