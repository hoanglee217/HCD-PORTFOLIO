pipeline {
    agent any
    tools { nodejs "node" }
    environment {
        imageName = "hoangcodedao/portfolio"
        registerCredential = 'hoangcodedao'
        dockerImage = ''
    }
    stages {
        stage('Install Dependency') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test Lint') {
            steps {
                sh 'yarn lint'
            }
        }
        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }
        stage('Deploy Image') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", 'dockerhub-creds'){
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }
}