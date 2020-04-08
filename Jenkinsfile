pipeline {
    agent any
    stages {
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
                if(BRANCH_NAME == 'master'){
                    sh 'docker run --name portfolio -d -p 3000:80 juniorsntsid/portfolio:v1'
                    sh 'echo "Servidor rodando em: http://localhost:3000"'
                } else if(BRANCH_NAME == 'develop'){
                    sh 'docker run --name portfolio -d -p 3001:80 juniorsntsid/portfolio:v1'
                    sh 'echo "Servidor rodando em: http://localhost:3001"'
                } else {
                    sh "echo Error na branch $BRANCH_NAME"
                }
            }
        }
    }
}