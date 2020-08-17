# MiBus Backend-API
API de `MiBus` usando nodejs, express y typescript

## Descripción del proyecto
`MiBus` pretende ser un software de ayuda para las personas de Teruel que 
quieran utilizar el transporte público, concretamente sus líneas de autobús

Este software tiene como objetivo permitir conocer en tiempo real la ubicación de los
autobuses de Teruel, así como de las distintas paradas

Además, permitirá conocer para cada una de las paradas 

## Estado
```diff
+ [En desarrollo]
```

## Variables de entorno
* APP_PORT = APP_PORT
* PGDATABASE = PGDATABASE
* PGHOST = PGHOST
* PGPASSWORD = PGPASSWORD
* PGUSER = PGUSER
* BUS_API = http://212.145.144.99:9889/BTKMonitor_RT.XML
* BUSES_REFRESH = BUSES_REFRESH

## Development Setup
```bash
npm i 
npm run dev
```

## Production Setup
```bash
docker-compose build
docker-compose start [-d]
```