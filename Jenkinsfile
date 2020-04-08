def remote = [:]
remote.name = 'portfolio-digital'
remote.host = '157.245.241.226'
remote.allowAnyHosts = true
node {
    def image = "juniorsntsid/portfolio-$BRANCH_NAME"
    stage('Build da imagem'){
        sh "docker build -t ${image} ."
    }
    stage('Subindo a imagem'){
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
            sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
            sh "docker push ${image}"
        }
    }
    stage('Parando container'){
        if(BRANCH_NAME == 'master'){
            withCredentials([usernamePassword(credentialsId: 'vm-ocean', usernameVariable: 'username', passwordVariable: 'password')]) {
                remote.user = username 
                remote.password = password
                try {
                    sshCommand remote: remote, command: "docker rm portfolio-${BRANCH_NAME} --force"
                } catch(Exception err){
                    echo "${err}"
                }
            }
        }
        if(BRANCH_NAME == 'develop'){
            withCredentials([usernamePassword(credentialsId: 'vm-ocean', usernameVariable: 'username', passwordVariable: 'password')]) {
                remote.user = username
                remote.password = password
                try {
                    sshCommand remote: remote, command: "docker rm portfolio-${BRANCH_NAME} --force"
                } catch(Exception err){
                    echo "${err}"
                }
            }
        }        
    }
    stage('deploy'){
        if(BRANCH_NAME == 'master'){
            withCredentials([usernamePassword(credentialsId: 'vm-ocean', usernameVariable: 'username', passwordVariable: 'password')]) {
                remote.user = username
                remote.password = password
                sshCommand remote: remote, command: "docker run --name portfolio-${BRANCH_NAME} -d -p 80:80 ${image}"
            }
            echo "Servidor rodando em http://${remote.host}:80"
        }
        if(BRANCH_NAME == 'develop'){
            withCredentials([usernamePassword(credentialsId: 'vm-ocean', usernameVariable: 'username', passwordVariable: 'password')]) {
                remote.user = username
                remote.password = password
                sshCommand remote: remote, command: "docker run --name portfolio-${BRANCH_NAME} -d -p 81:80 ${image}"
            }
            echo "Servidor rodando em http://${remote.host}:81"
        }
    }
}