pipeline {
    agent {
        label 'dev'
    }

    stages {
        stage('code checkout') {
            steps {
                echo 'git pulling'
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'cd', url: 'https://github.com/wdcs-anilprajapati/Login-and-register-using-node.js-and-mongodb.git']])
                echo "done pull"
            }
        }
        stage('build image') {
            steps {
                sh 'docker build -t pipeline .'
                echo 'building image'
            }
        }
        stage('remove container') {
            steps {
                sh 'docker stop web3'
                sh 'docker rm web3'
                echo 'remove conatiner'
            }
        }
        stage('create new conatiner') {
            steps {
                sh 'docker run -d -p 2009:2000 --name ikk pipeline'
                echo 'creating container'
            }
        }
    }
}
