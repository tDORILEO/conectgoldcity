window.onload = function() {
    setTimeout(function() {
        var ip = "163.5.124.20";
        var porta = "30120";

        var linkDeConexao = "fivem://connect/" + ip + ":" + porta;

        // Redireciona para o link
        window.location.href = linkDeConexao;

            window.close(); // Fecha a janela do navegador
        }
    }, 1000);
};
