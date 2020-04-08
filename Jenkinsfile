pipeline {
    agent any
    environment {
        remote = [:]
        remote.name = 'root'
        remote.host = '157.245.241.226'
        remote.user = 'root'
        remote.password = 'qwe19as3'
        remote.allowAnyHosts = true
    }
    stages {
        stage('Removendo container antigo'){ 
            steps {
                script {
                    try {
                        sh "docker rm portfolio-$BRANCH_NAME --force"
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
                        sh "docker build -t juniorsntsid/portfolio-$BRANCH_NAME:v1 ."
                    } catch(Exception e){
                        sh "echo $e"
                    }
                }
            }
        }
        stage('Rodando imagem') {
            steps {
                script {
                    if(BRANCH_NAME == 'master'){
                        sh "docker run --name portfolio-$BRANCH_NAME -d -p 3000:80 juniorsntsid/portfolio-$BRANCH_NAME:v1"
                        sh 'echo "Servidor rodando em: http://localhost:3000"'
                        sshCommand remote: remote, command: "ls -la"
                    } else if(BRANCH_NAME == 'develop'){
                        sh "docker run --name portfolio-$BRANCH_NAME -d -p 3001:80 juniorsntsid/portfolio-$BRANCH_NAME:v1"
                        sh 'echo "Servidor rodando em: http://localhost:3001"'
                        sshCommand remote: remote, command: "ls -la"
                    } else {
                        sh "echo Error na branch $BRANCH_NAME"
                    }
                }
            }
        }
    }
}