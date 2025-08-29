pipeline {
    agent any

    tools {
      nodejs "NodeJS"
    }

    stages {
        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}