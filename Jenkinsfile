pipeline {
    agent any

    tools {
      nodejs "node"
    }

    stages {
        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}