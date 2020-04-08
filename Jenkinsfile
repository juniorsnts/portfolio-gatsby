pipeline {
    agent any
    stages {
        stage('Instalando docker'){
            steps {
                ansiblePlaybook credentialsId: 'private_key', inventory: 'ansible/inventories/production/hosts', playbook: 'ansible/docker_install.yml'
            }
        }
        stage('Removendo container antigo'){ 
            steps {
                sh "echo $BRANCH_NAME"
                sh "echo teste"
                script {
                    try {
                        sh 'docker rm portfolio --force'
                    } catch(Exception e){
                        sh "echo $e"
                    }
                }
            }
        }
        stage('Buildando nova imagem'){
            steps {
                script {
                    try {
                        sh 'docker build -t juniorsntsid/portfolio:v1 .'
                    } catch(Exception e){
                        sh "echo $e"
                    }
                }
            }
        }
        stage('Rodando imagem') {
            steps {
                sh 'docker run --name portfolio -d -p 3000:80 juniorsntsid/portfolio:v1'
                sh 'echo "Servidor rodando em: http://localhost:3000"'
            }
        }
    }
}