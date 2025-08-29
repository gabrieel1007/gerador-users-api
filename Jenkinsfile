pipeline {
    agent any

    tools {
      nodejs "node"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Starting to build docker image'

                script {
                    def customImage = docker.build("my-nestjs-app")
                    customImage.push()
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