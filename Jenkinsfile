env.SUDO_ASKPASS = '/usr/libexec/sudo-askpass'

pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "sudo -A npm install"
                sh "sudo -A npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo -A rm -rf /var/www/jenkins-react-app"
                sh "sudo -A cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}