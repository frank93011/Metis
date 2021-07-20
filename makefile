run:
	docker compose -f docker-compose.yaml up --build -d
	docker ps -a
update:
	docker compose -f docker-compose.yaml down -v
	docker compose -f docker-compose.yaml up --build -d
	docker ps -a
drun:
	docker build -t metis-backend ./backend
	docker run -d --name metis-backend -p 5000:3000 metis-backend
dupdate:
	docker build -t metis-backend ./backend
	docker stop metis-backend
	docker rm metis-backend
	docker run -d --name metis-backend -p 5000:3000 metis-backend