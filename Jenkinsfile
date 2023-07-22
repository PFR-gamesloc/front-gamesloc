pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Cette étape permet de cloner le projet à partir de GitHub
                git 'git@github.com:PFR-gamesloc/front-gamesloc.git'
            }
        }

        stage('Build') {
            steps {
                // Étape de build du projet Angular (vous pouvez ajuster ces commandes selon votre configuration)
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv('installationName: 'SonarQube'') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}







