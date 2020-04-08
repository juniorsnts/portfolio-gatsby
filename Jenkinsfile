pipeline {
    agent any
    stages {
        stage('Removendo container antigo'){ 
            steps {
                script {
                    try {
                        sh 'docker rm superfacil --force'
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
                        sh 'docker build -t prodap/superfacil:v1 .'
                    } catch(Exception e){
                        sh "echo $e"
                    }
                }
            }
        }
        stage('Rodando imagem') {
            steps {
                sh 'docker run --name superfacil -d -p 3000:3000 prodap/superfacil:v1'
                sh 'echo "Servidor rodando em: http://localhost:3000"'
            }
        }
    }
}