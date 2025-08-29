pipeline {
    agent {
        docker {
            image 'docker:24-dind'
            args '--privileged --network host -v /var/run/docker.sock:/var/run/docker.sock'
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