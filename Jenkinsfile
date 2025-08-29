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

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh 'docker --version'
                        sh 'docker build -t my-nestjs-app .'
                        echo 'Docker build completed successfully'
                    } catch (Exception e) {
                        echo 'Docker not available. Skipping Docker build.'
                        echo "Error: ${e.getMessage()}"
                        currentBuild.result = 'UNSTABLE'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                sh "npm test"
            }
        }
    }
}