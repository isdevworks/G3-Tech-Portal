function desativarBalanceamento() {
    // Todo o tráfego vai apenas para o Link 1 (Engarrafamento)
    document.getElementById('link1').className = 'link-box sobrecarregado';
    document.getElementById('status-link1').innerHTML = '🔥 100% do Tráfego<br>SOBRECARREGADO / LENTO';
    document.getElementById('linha-link1').className = 'conexao engarrafada';

    // O Link 2 fica parado (Desperdício)
    document.getElementById('link2').className = 'link-box ocioso';
    document.getElementById('status-link2').innerHTML = '💤 0% do Tráfego<br>Ocioso (Desperdício)';
    document.getElementById('linha-link2').className = 'conexao desligada';
    
    // A linha de entrada também mostra o engarrafamento
    document.getElementById('linha-entrada').className = 'conexao engarrafada';
}

function ativarBalanceamento() {
    // Divide o tráfego suavemente entre os dois links
    document.getElementById('link1').className = 'link-box ativo-balanceado';
    document.getElementById('status-link1').innerHTML = '📊 50% do Tráfego<br>Fluxo Rápido';
    document.getElementById('linha-link1').className = 'conexao balanceada';

    document.getElementById('link2').className = 'link-box ativo-balanceado';
    document.getElementById('status-link2').innerHTML = '📊 50% do Tráfego<br>Fluxo Rápido';
    document.getElementById('linha-link2').className = 'conexao balanceada';
    
    // A linha de entrada volta ao fluxo suave
    document.getElementById('linha-entrada').className = 'conexao balanceada';
}