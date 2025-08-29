pipeline {
    agent any

    tools {
      node "NodeJS"
    }

    stages {
        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}