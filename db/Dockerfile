# container
FROM mysql:5.7.32

# set up relative path
ARG S=./db/init

COPY $S/mysql.cnf /etc/mysql/conf.d/sortition.cnf
COPY $S/schema.sql /docker-entrypoint-initdb.d/01-schema.sql
COPY $S/insert_data.sql /docker-entrypoint-initdb.d/02-insert_data.sql

RUN chmod -R 775 /docker-entrypoint-initdb.d