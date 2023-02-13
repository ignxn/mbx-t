pipeline {
    agent any

    tools { nodejs "18.14.0" }

    stages {
        stage('Test npm') {
          steps {
            sh """
              npm --version
            """
          }
        }
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}