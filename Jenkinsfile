pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-nestjs-app .'
            }
        }

        stage('Install packages') {
            steps {
                sh "npm install"
            }
        }
    }
}