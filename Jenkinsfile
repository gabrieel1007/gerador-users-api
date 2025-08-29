pipeline {
    agent {
        docker { image 'node:24.0.0' }
    }

    tools {
      nodejs "node"
    }

    stages {
        stage('Docker build image') {
            steps {
                sh "docker build -t my-nest-app ."
            }
        }

        stage('Install packages') {
            steps {
              sh "npm install"
            }
        }
    }
}