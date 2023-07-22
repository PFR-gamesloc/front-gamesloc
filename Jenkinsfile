pipeline {
    agent any
    environment {
            // Définir l'identifiant de la clé privée que vous avez configurée dans Jenkins
            SSH_KEY_ID = '01627792-08fd-4cf9-9734-000103d8095e'
        }
    stages {
        stage('Clean workspace') {
            steps {
                deleteDir()
            }
        }
        stage('Checkout') {
            steps {
                // Cette étape permet de cloner le projet à partir de GitHub
                withCredentials([sshUserPrivateKey(credentialsId: "${SSH_KEY_ID}", keyFileVariable: 'SSH_KEY')]) {
                    sh 'git clone git@github.com:PFR-gamesloc/front-gamesloc.git'
                }
            }
        }

        stage('Build') {
            steps {
                // Étape de build du projet Angular (vous pouvez ajuster ces commandes selon votre configuration)
                sh 'npm install'
                sh 'npm install -g @angular/cli'
                sh 'ng build'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv(installationName: 'SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}







