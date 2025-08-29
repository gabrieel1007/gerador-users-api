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
                    sh 'docker build -t my-nest-app .'
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