// cancelar inscrição
document.querySelectorAll('.btn-cancel').forEach(button => {
    button.addEventListener('click', function() {
        const ticketCard = this.closest('.ticket-card');
        const eventName = ticketCard.querySelector('.event-name').textContent;
        
        if (confirm(`Tem certeza que deseja cancelar sua inscrição para "${eventName}"?`)) {
            
            
            
            const statusBadge = ticketCard.querySelector('.status-badge');
            statusBadge.textContent = 'Cancelado';
            statusBadge.className = 'status-badge status-canceled';
            
            // Remove o botão de cancelar
            this.remove();
            
            alert('Inscrição cancelada com sucesso!');
        }
    });
});

// Navegação entre abas
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove a classe active de todos os itens
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Adiciona a classe active ao item clicado
        this.classList.add('active');
        
        
        if (this.textContent === 'Meu perfil') {
            alert('Redirecionando para Meu Perfil...');
            // window.location.href = 'perfil.html';
        }
    });
});