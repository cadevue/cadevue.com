---
title: Closest Pair Solver
poster: {
    src: https://ik.imagekit.io/moonwr/closest-pair.png?updatedAt=1740064386887&,
    alt: Closest Pair Solver Poster
}
tags: ["CS202", "In Browser", "Golang", "Typescript", "Algorithm", "Three.js", "Docker", "Cloudflare", "AWS EC2", "Web", "Vite", "TailwindCSS", "Websocket", "CI/CD", "Github Actions"]
meta_description: A web based program that solve the closest pair problem using 2 kind of algorithm — Brute Force and Divide and Conquer. The frontend is built using Typescript and Three.js, while the backend is built using Golang. The program is deployed using Cloudflare Pages (frontend) and Docker-AWS EC2 (backend). Addin Munawwar (Cadevue).
priority: 9.2
is_shown: true
---

Github Repository: <br>
https://github.com/cadevue/closest-pair
<br>

# Try Now!
This application can be tried out immediately! The web application can be accessed in this link: <br>
https://closest-pair-frontend.pages.dev/

# About This Project 
This project is made as part of my Computer Science Study at Bandung Institute of Technology. The specific course related to this project is IF2211 Algorithm Strategy.

This project was originally assigned at the 4th semester, but I decided to redo the entire project (February 2025) from learning purposes. 

The goal of my learning is to create a full web application, with the backend and frontend separated. The frontend and backend utilizes websocket for communication, as the closest pair problem can't be solved quickly, especially with the specification of the project (~ <b>10,000 to 100,000</b> points).

My goal for this project is also to learn about deployment, especially from the backend side. I write the backend using Golang, and deploy it using Docker inside an AWS EC2. I also implement a CI/CD pipeline using Github Actions that automatically build and deploy the backend, using the EC2 instance as the github-actions runner.

The original project can be found in this repository, which is just the algorithm implementation in Golang, without the frontend or server implementation: <br>
https://github.com/cadevue/ClosestPairSolver

*\* Notice that this differs from the repo for the current bot. Repo of the current bot can be found on top of this article*

I also want to credit the people who contributed in the original project:
- [Fakih Anugerah Pratama](https://github.com/fakihap/)


# Project Description 
A web application that solve the closest pair problem using 2 kind of algorithm — Brute Force and Divide and Conquer. The frontend is built using Typescript and Three.js, while the backend is built using Golang. The program is deployed using Cloudflare Pages (frontend) and Docker-AWS EC2 (backend). The communication between the frontend and backend is done using websocket.

Here is the specification of the request and response for the websocket communication:
```go
type SolveCPRequest struct {
	Method    string    `json:"method"`
	Dimension int32     `json:"dimension"`
	Points    []float64 `json:"points"`
}

type SolveCPResponse struct {
	Method            string   `json:"method"`
	Indexes           [2]int32 `json:"indexes"`
	Distance          float64  `json:"distance"`
	NumOfEuclideanOps int64    `json:"numOfEuclideanOps"`
	ExecutionTime     float64  `json:"executionTime"`
}
```

# Frontend
https://github.com/cadevue/closest-pair-frontend/tree/master

The technologies used for the frontend are:
- **Typescript** for the web scripting language
- **Three.js** for the 3D rendering of the points
- **Vite** for the frontend bundler
- **TailwindCSS** for the styling
- **Websocket** for the communication with the backend
- **Cloudflare Pages** for the deployment

# Backend
https://github.com/cadevue/closest-pair-backend/tree/master

The technologies used for the backend are:
- **Golang** for the backend language
- **Docker** for the containerization
- **AWS EC2** for the deployment
- **Websocket** for the communication with the frontend
- **Github Actions** for the CI/CD pipeline

# Deployment
The web application can be accessed in this link: <br>
https://closest-pair-frontend.pages.dev/

# Screenshots 
Here are some screenshots of the closest pair solver web application.

### Application Idle
![Screenshot - Application Idle](../../assets/project/closest-pair/idle.png)

### Solving the Closest Pair
![Screenshot - Solving the Closest Pair](../../assets/project/closest-pair/solving.png)

### Result Visualization and Logs
![Screenshot - Result Visualization and Logs](../../assets/project/closest-pair/result.png)

### Connection Close when Idle
![Screenshot - Connection Close when Idle](../../assets/project/closest-pair/closed.png)