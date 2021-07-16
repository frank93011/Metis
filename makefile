run:
	docker compose -f docker-compose.yaml up --build -d
	docker ps -a
update:
	docker compose -f docker-compose.yaml down -v
	docker compose -f docker-compose.yaml up --build -d
	docker ps -a
