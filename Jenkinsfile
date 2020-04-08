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
}