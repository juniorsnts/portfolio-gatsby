node {
    def image = "juniorsntsid/portfolio-$BRANCH_NAME"
    stage('Build da imagem'){
        sh "docker build -t $image ."
    }
}