# Job-Application-Review-System

## Technology Stack:
- Frontend : React JS
- Backend: Django
  
The following features are included:

1. Add a new candidate
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/Add_candidate_1.png?raw=true)
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/Add_candidate_2.png?raw=true)

2. After clicking on each candidate, a more detailed description of that candidate is visible along with an Accept and Reject option:
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/Candidate.png?raw=true)

3. All candidates are displayed on the home page:
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/All_Candidates.png?raw=true)

4. A download resume feature is included which downloads a pdf file containing the details provided by a candidate in the form.
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/Candidate_details.png?raw=true)
![alt text](https://github.com/mahekn23/Job-Application-Review-System/blob/master/Candidate_pdf.png?raw=true)

## Usage:
Install react, django and the necessary libraries on your local machine 
1. Clone the repo or download the zip file and extract it.
2. Open one cmd and navigate to Job application review system__test task\Client\frontend and enter a command npm start.
3. Open another cmd and navigate to Job application review system__test task\Server\backend and enter the following commands=>
- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver

(Libraries required: react, axios, jspdf)



