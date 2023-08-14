drop table if exists davidfruver;         
create database davidfruver;
use davidfruver;   

create table productos(
idproducto int(11) auto_increment,
nombreproducto varchar(20) not null,
detalleproducto varchar(20) not null,
precioproducto int(100) not null, 
foto longtext, 
primary key (idproducto));                            

create table compras(
numerocompra int(10) auto_increment,
descripcion varchar(25) not null,
cantidad int(100) not null, 
precio int(100) not null,
total int(100) not null,
primary key (numerocompra));   

create table clientes(
cedula int(10) not null,
nombres varchar(25) not null,
apellidos varchar(25) not null,
telefono int(10) not null, 
direcion varchar(25) not null,
Email varchar(25) not null,
primary key (cedula));      
