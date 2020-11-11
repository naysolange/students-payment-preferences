# Students Payment Preferences
This is a website to track students preference for paying their courses and selecting the payment method for charging them every month.


## Install 
- [Install Docker](https://docs.docker.com/get-docker/) 
- [Install Docker Compose](https://docs.docker.com/compose/install/) 
- [Clone this repository](https://github.com/nportas/students-payment-preferences) 
- Make sure these ports are not in use: 3000, 3306, 8080 
- Go to the root folder 'student-payment-preferences'
- Execute `docker-compose up`
- When the previous step is done go to http://localhost:3000 and voilá!


## Architecture decisions
- Mono repository because is a small project
- Docker for portability
- Layers in the backend for testeability


## Improvements 
- Add acceptance/behaviour tests (e2e) in collaboration with the Product Owner
- Add Frontend tests 
- Add more backend tests and improve them
- Retrieve payment methods from database to fill the combo
- Use classes instead functions for backend layers
- Use environment variables in order to do a deploy in Heroku or AWS
- Use a repository for backend and a different repository for frontend
- Use endpoints as serverless microservices on AWS
- UX/UI design =)

