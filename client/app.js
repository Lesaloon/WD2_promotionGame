const socket = new WebSocket('ws://localhost:8080');

$('.terminal').terminal({
    attack: function(server) {
        this.echo('attacking, ' + server);
    },
    login: function(username) {
        if (username.split(" ").length != 1) {
            this.echo('Le pseudo ne peut pas avoir d espace');
            return
        } else {
            socket.send("pseudo:"+username)
        }
    }
}, {
    greetings: 'Ceci est le terminal, écrivez des commandes et soyez prêt'
});


socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});