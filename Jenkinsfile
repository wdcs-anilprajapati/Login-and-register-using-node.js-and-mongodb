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
                sh 'docker build -t pipelines:$BUILD_NUMBER .'
                echo 'building image'
            }
        }
        stage('remove container') {
            steps {
                sh 'docker ps -q | xargs -r docker stop | xargs -r docker rm'
                echo 'remove conatiner'
            }
        }
        stage('create new conatiner') {
            steps {
                sh 'docker run -d -p 27017:27017 --name mongodb --network my-mongo-network mongo'
                sh 'docker run -d -p 2001:2000 --name anileds --network my-mongo-network pipelines'
                echo 'creating container'
            }
        }
    }
}
