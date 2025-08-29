pipeline {
    agent any

    tools {
      nodejs "node"
    }

    stages {
        stage('Build Docker image') {
            steps {
                script {
                    def image = docker.build("my-nest-app")
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