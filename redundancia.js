function simularQueda() {
    // Desliga o Link 1
    document.getElementById('link1').className = 'link-box inativo';
    document.getElementById('status-link1').innerHTML = '❌ OFFLINE<br>Cabo rompido/Sem sinal';
    document.getElementById('linha-link1').className = 'conexao inativa';

    // Liga o Link 2 instantaneamente
    document.getElementById('link2').className = 'link-box ativo';
    document.getElementById('status-link2').innerHTML = '✅ ONLINE<br>Assumiu a conexão!';
    document.getElementById('linha-link2').className = 'conexao ativa';
}

function restaurarLink() {
    // Volta o Link 1 ao normal
    document.getElementById('link1').className = 'link-box ativo';
    document.getElementById('status-link1').innerHTML = '✅ ONLINE<br>Enviando dados';
    document.getElementById('linha-link1').className = 'conexao ativa';

    // Coloca o Link 2 de volta na reserva
    document.getElementById('link2').className = 'link-box standby';
    document.getElementById('status-link2').innerHTML = '⏳ STANDBY<br>Aguardando';
    document.getElementById('linha-link2').className = 'conexao';
}