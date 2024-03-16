docker build -t accountant-frontend-test -f Dockerfile.test .
docker run --rm accountant-frontend-test npm run lint
docker run --rm accountant-frontend-test npm run test
