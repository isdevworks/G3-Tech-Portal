// O site já carrega com as regras específicas ativadas (PBR)
window.onload = ativarRegras;

function ativarRegras() {
    // Roteamento baseado na imagem enviada pelo usuário
    document.getElementById('link1').className = 'link-box principal-ativo';
    document.getElementById('status-link1').innerHTML = '🟢 Bancos<br>🔵 Servidores Remotos';
    document.getElementById('linha-link1').className = 'conexao principal-ativa';

    document.getElementById('link2').className = 'link-box backup-ativo';
    document.getElementById('status-link2').innerHTML = '🟠 Equipamentos Wi-Fi<br>(Acesso Isolado)';
    document.getElementById('linha-link2').className = 'conexao backup-ativa';
    
    document.getElementById('linha-entrada').className = 'conexao balanceada';
}

function ativarBalanceamento() {
    // Se não houvesse regra, tudo seria misturado (50/50)
    document.getElementById('link1').className = 'link-box ativo-balanceado';
    document.getElementById('status-link1').innerHTML = '📊 50% de todo o tráfego<br>(Bancos, Servidores, Wi-Fi)';
    document.getElementById('linha-link1').className = 'conexao balanceada';

    document.getElementById('link2').className = 'link-box ativo-balanceado';
    document.getElementById('status-link2').innerHTML = '📊 50% de todo o tráfego<br>(Bancos, Servidores, Wi-Fi)';
    document.getElementById('linha-link2').className = 'conexao balanceada';
    
    document.getElementById('linha-entrada').className = 'conexao balanceada';
}

function desativarBalanceamento() {
    // Simula uma configuração errada onde todo o tráfego pesado e o Wi-Fi vão pro mesmo link
    document.getElementById('link1').className = 'link-box sobrecarregado';
    document.getElementById('status-link1').innerHTML = '🔥 95% do Tráfego<br>REDE SOBRECARREGADA';
    document.getElementById('linha-link1').className = 'conexao engarrafada';

    document.getElementById('link2').className = 'link-box ocioso';
    document.getElementById('status-link2').innerHTML = '💤 5% do Tráfego<br>Ocioso (Desperdício)';
    document.getElementById('linha-link2').className = 'conexao desligada';
    
    document.getElementById('linha-entrada').className = 'conexao engarrafada';
}