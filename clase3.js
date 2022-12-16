// class TicketManagerc {
//     eventos;
//     static ultimoId = 0;
//     #precioBaseDeGanancia = 0.2;
//     constructor(){
//         this.eventos =[];
//     }
//     getEventos(){
//         return this.eventos;
//     }
//     agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
//         TicketManagerc.ultimoId++;
//         const evento ={
//             nombre,
//             lugar,
//             precio,
//             capacidad,
//             fecha,
//             id: TicketManagerc.ultimoId,
//             participantes:[],
//         }
//         this.eventos.push(evento)

//     }
//     agregarUsuario(idEvento, idUsuario){
//         if(!!!idEvento) throw new Error('debe ingresar un id evento');
//         const evento = this.eventos.find(evento => evento.id === idEvento);
//         if(evento && !this.evento.participantes.some(participante => participante === idUsuario)){
//             evento.participantes.push(idUsuario);
//         }
//     }
//     ponerEventoEnGira( idEvento, nuevaLocalidad, nuevaFecha){
//         const eventoOriginal = this.eventos.find( (evento) => evento.id === idEvento)
//          return {
//             ...eventoOriginal,
//             id : idEvento,
//             localidad: nuevaLocalidad,
//             fecha: nuevaFecha
//          }

//     }
// }
// const  pasar = new TicketManagerc()
// pasar.agregarEventos('final','marruecos', 'Qatar' ,1000, null, '1812')
// console.log(pasar);

const baseDeDatos = [1,2,3,4,5,6,7]
function consultarBaseDeDatos(numero, callback){
    setTimeout(() => {
        const exists = baseDeDatos.some( num => num === numero)
        if(!!exists){
            callback(null);
        }else {
            callback(`el numero ${numero} no esta cargado`)
        }

    }, 1000);
}
console.log('imicio');

function miCallback( error, value){
    if(error){
        throw new Error(error);
    }
    console.log('numero encontrado con exito');
    
}
console.log(consultarBaseDeDatos(7, miCallback));