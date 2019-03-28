var socket = io.connect('http://localhost:3000'),
//input = document.querySelector('#msg-box'),
message = undefined;

//var roomSocket = io('id do prédio')

socket.on('enter', data => {console.log('minha data', data)})

// input.addEventListener('keypress', (e) => {
//     if(e.which === 13 && e.target.value !== '') {
//         console.log(e.target.value)
//         message = {
//             msg: {
//                 body: e.target.value,
//                 delivered: true,
//                 time: new Date()
//             },
//             from: 'israel',
//             to: 'Erika'
//         };

//         socket.emit('sendmessage', {message});

//         e.target.value = '';
//     }
// });

socket.on('checkMessageReceived', data => {
    console.log('mensagem foi checada', data)
})