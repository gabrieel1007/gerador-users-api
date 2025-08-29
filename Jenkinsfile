pipeline {
    agent any

    tools {
      nodejs "node"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    customImage = docker.build("my-nestjs-app")
                }
            }
        }

        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}