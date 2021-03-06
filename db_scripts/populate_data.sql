CREATE TABLE IF NOT EXISTS parada (
  id SMALLINT PRIMARY KEY,
  name TEXT NOT NULL,
  lat NUMERIC,
  lon NUMERIC
);

INSERT INTO parada
VALUES
(1, 'Nicanor Villalta, 3', 40.332322, -1.089849),
(2, 'Hogar San José', 40.333381, -1.092771),
(3, 'Sagunto, 73', 40.332541, -1.098766),
(4, 'Sagunto, 51', 40.333249, -1.100552),
(5, 'Sagunto, 13', 40.335409, -1.103162),
(6, 'Sagunto, 9', 40.336270, -1.104587),
(7, 'Ronda Ambéles', 40.340502, -1.105492),
(8, 'Estación de Autobuses', 40.342511, -1.104217),
(9, 'Dámaso Torán Archivo', 40.344379, -1.104991),
(11, 'Crtra. Alcañiz, 14', 40.347232, -1.108946),
(12, 'Crtra. Alcañiz, 28', 40.349567, -1.109080),
(13, 'Universidad', 40.351555, -1.109683),
(14, 'Las Viñas', 40.349544, -1.111896),
(15, 'Santa Bárbara, 10', 40.347751, -1.110258),
(16, 'Los Sauces', 40.332947, -1.096148),
(17, 'Sagunto, 80', 40.332897, -1.098577),
(18, 'Sagunto, 48', 40.333444, -1.101826),
(19, 'Avenida Aragón, 3', 40.333451, -1.103127),
(20, 'Avenida Aragón, 17', 40.332235, -1.104700),
(21, 'Playa de Aro', 40.332110, -1.108512),
(22, 'Victoria Diez', 40.333685, -1.107818),
(23, 'Iglesia los Paules', 40.335348, -1.107116),
(25, 'Joaquín Arnau', 40.340923, -1.107571),
(26, 'Óvalo', 40.341296, -1.108185),
(27, 'Ronda Ambéles', 40.340194, -1.105319),
(28, 'Dámaso Torán, 11', 40.344111, -1.104999),
(30, 'Dámaso Torán Arcos', 40.345256, -1.106143),
(31, 'Nicanor Villalta, 2', 40.332381, -1.090318),
(32, 'Luís Milla', 40.330309, -1.091046),
(33, 'INAEM', 40.329134, -1.092417),
(34, 'Ángel Custodio', 40.328127, -1.094230),
(35, 'Segundo Chomón Bajada', 40.327799, -1.098568),
(36, 'Pedro IV', 40.329323, -1.100759),
(37, 'Centro Sauld C/Jerónimo', 40.330123, -1.103217),
(38, 'Sanz Gadea, 11', 40.329896, -1.108006),
(39, 'Sanz Gadea, 1', 40.331498, -1.108385),
(40, 'Plaza Constitución', 40.329794, -1.108083),
(41, 'Centro Salud Av. Europa', 40.329162, -1.103244),
(43, 'Colegio Fuenfresca', 40.329416, -1.095403),
(44, 'Ramón J. Sender, 5', 40.330444, -1.093998),
(45, 'Ramón J. Sender, 3', 40.332839, -1.092802),
(46, 'Segundo Chomón Subida', 40.327702, -1.098488),
(78, 'Tesorería SS', 40.330833, -1.092435),
(79, 'Iglesia la Esperanza', 40.332141, -1.093305),
(98, 'Crtra. Castralvo - Av. Europa', 40.328856, -1.100606),
(108, 'Leocaldo Brun', 40.353910, -1.114365),
(109, 'UNED', 40.352634, -1.111719),
(110, 'Piscina San León', 40.352097, -1.116489),
(111, 'CEE Arboleda', 40.351087, -1.114079),
(112, 'Colegio Ensanche', 40.337073, -1.106369);

