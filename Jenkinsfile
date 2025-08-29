pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Starting to build docker image'
                sh 'docker build -t my-nest-app .'
            }
        }

        stage('Install packages') {
            agent {
                docker {
                    image 'node:18'
                    reuseNode true
                }
            }
            steps {
                sh "npm install"
            }
        }
    }
}