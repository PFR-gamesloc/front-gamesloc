pipeline {
    agent any
    environment {
            // Définir l'identifiant de la clé privée que vous avez configurée dans Jenkins
            SSH_KEY_ID = '01627792-08fd-4cf9-9734-000103d8095e'
        }
    stages {
        stage('Clean workspace') {
            steps {
                dir('/var/jenkins_home/workspace/'){
                    deleteDir()
                }
            }
        }
        stage('Checkout') {
            steps {
                dir('/var/jenkins_home/workspace/'){
                    withCredentials([sshUserPrivateKey(credentialsId: "${SSH_KEY_ID}", keyFileVariable: 'SSH_KEY')]) {
                        sh 'git clone git@github.com:PFR-gamesloc/front-gamesloc.git'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir('/var/jenkins_home/workspace/front-gamesloc') {
                 // Étape de build du projet Angular (vous pouvez ajuster ces commandes selon votre configuration)
                    sh 'npm install'
                    sh 'ng build'
                }
            }
        }

        stage('SonarQube Analysis') {
            environment {
                def scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                dir('/var/jenkins_home/workspace/front-gamesloc') {
                    withSonarQubeEnv(installationName: 'SonarQube') {
                        sh '${scannerHome}/bin/sonar-scanner -D sonar.projectKey=Angular'
                    }
                }
            }
        }
    }
}







