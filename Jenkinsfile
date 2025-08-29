pipeline {
    agent any

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