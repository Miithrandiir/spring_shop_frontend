pipeline {
    agent any

    stages {
        stage('Build') {
          steps {
             script{
                 docker.image("node:16").inside {
                      sh "yarn install"
                      sh "yarn build"
                 }
             }
          }
       }
    }

    post {
        always {
            archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
        }
    }
}