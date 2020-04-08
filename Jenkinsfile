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
        remote.user = 'root'
        remote.password = 'qwe19as3'
        remote.allowAnyHosts = true
        if(BRANCH_NAME == 'master'){
            sshCommand remote: remote, command: "ls -lrt"
        }
        if(BRANCH_NAME == 'develop'){
            echo 'teste'
        }
    }
}