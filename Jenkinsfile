#!groovy
node {
    stage('Checkout') {
        checkout scm
    }

    stage('NPM Install') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            sh 'npm install'
        }
    }

    stage('Build') {
        milestone()
        sh 'npm run build'
    }

    stage('Deploy') {
        sh 'rsync -a --delete dist/kieser/ /var/www/html/kieser'
    }
}
