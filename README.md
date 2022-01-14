# MiBus Backend-API
API de `MiBus` usando nodejs, express y typescript

## Descripción del proyecto
`MiBus` pretende ser un software de ayuda para las personas de Teruel que 
quieran utilizar el transporte público, concretamente sus líneas de autobús

Este software tiene como objetivo permitir conocer en tiempo real la ubicación de los
autobuses de Teruel, así como de las distintas paradas

Además, permitirá conocer para cada una de las paradas, los autobuses de cada 
línea que van a pasar próximamente por ellas

## Estado
```diff
- [Finalizado]
```

## Variables de entorno
* APP_PORT = APP_PORT
* PGHOST = PGHOST
* PGDATABASE = PGDATABASE
* PGUSER = PGUSER
* PGPASSWORD = PGPASSWORD
* BUSES_API = http://212.145.144.99:9889/BTKMonitor_RT.XML
* BUS_NORMAL_STATE = BUS_NORMAL_STATE
* BUSES_REFRESH = BUSES_REFRESH

## Development Setup
```bash
npm i 
npm run dev
```

## Production Setup
```bash
docker-compose build
docker-compose up [-d]
```
