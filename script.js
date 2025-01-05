window.onload = function() {
    setTimeout(function() {
        var ip = "163.5.124.20";
        var porta = "30120";

        var linkDeConexao = "fivem://connect/" + ip + ":" + porta;

        // Redireciona para o link
        window.location.href = linkDeConexao;

        // Exibe uma mensagem de confirmação antes de fechar
        if (confirm("Você será desconectado do navegador. Deseja continuar?")) {
            window.close(); // Fecha a janela do navegador
        }
    }, 1000);
};
