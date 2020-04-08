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
        remote.name = "portfolio"
        remote.host = "157.245.241.226"
        remote.allowAnyHosts = true
        if(BRANCH_NAME == 'master'){
            withCredentials([sshUserPrivateKey(credentialsId: 'ssh-digital-ocean', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
                remote.user = userName
                remote.identityFile = identity
                stage("SSH Steps Rocks!") {
                    sshCommand remote: remote, command: 'ls -la'
                }
            }
        }
        if(BRANCH_NAME == 'develop'){
            echo 'teste'
        }
    }
}