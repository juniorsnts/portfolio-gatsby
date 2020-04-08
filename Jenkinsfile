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
    stage('deploy'){
        def remote = [:]
        remote.name = 'portfolio-digital'
        remote.host = '157.245.241.226'
        remote.allowAnyHosts = true
        if(BRANCH_NAME == 'master'){
            try {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-digital-ocean', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                    remote.user = userName
                    remote.identityFile = identity
                    echo identity
                    sshCommand remote: remote, command: "docker run -d -p 80:80 ${image}"
                }
                echo "Servidor rodando em http://${remote.host}:80"
            } catch(Exception e){
                echo e
            }
        }
        if(BRANCH_NAME == 'develop'){
            try {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-digital-ocean', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                    remote.user = userName
                    remote.identityFile = identity
                    echo identity
                    sshCommand remote: remote, command: "docker run -d -p 81:80 ${image}"
                }
                echo "Servidor rodando em http://${remote.host}:81"
            } catch(Exception e){
                echo e
            }
        }
    }
}