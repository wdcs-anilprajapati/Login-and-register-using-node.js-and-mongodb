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
                sh 'docker build -t pipelines .'
                echo 'building image'
            }
        }
        stage('remove container') {
            steps {
                sh 'docker ps -q | xargs -r docker stop'
                echo 'remove conatiner'
            }
        }
        stage('create new conatiner') {
            steps {
                sh 'docker run -d -p 2007:2000 --name oo pipelines'
                echo 'creating container'
            }
        }
    }
}
