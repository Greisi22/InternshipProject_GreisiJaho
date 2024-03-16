docker build -t accountant-frontend-build -f Dockerfile.build .
docker run --rm -v $PWD/build:/app/build accountant-frontend-build
