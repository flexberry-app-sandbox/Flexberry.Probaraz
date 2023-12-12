docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probaraz-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probaraz-java/app ../../..
