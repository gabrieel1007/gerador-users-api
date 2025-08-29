pipeline {
    agent {
        docker { image 'node:22.18.0-alpine3.22' }
    }

    tools {
      nodejs "node"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t my-nestjs-app .
                    docker tag my-nestjs-app
                """
            }
        }

        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}