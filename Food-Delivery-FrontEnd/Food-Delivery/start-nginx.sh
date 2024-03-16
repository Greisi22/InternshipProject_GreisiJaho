docker build -t accountant-frontend-nginx -f Dockerfile.nginx .
docker stop accountant-frontend-nginx && docker rm accountant-frontend-nginx
docker run --name accountant-frontend-nginx --restart=always -d -p 7820:80  accountant-frontend-nginx
