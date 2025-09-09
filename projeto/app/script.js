document.addEventListener('DOMContentLoaded', () => {
    const listingGrid = document.getElementById('listing-grid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Dados dos equipamentos com URLs de imagens do Google (apenas para demonstração)
    const equipmentListings = [
        {
            id: 1,
            name: 'Bicicleta Mountain Bike Aro 29',
            description: 'Perfeita para trilhas e aventuras na natureza.',
            price: 50,
            image: 'https://images.unsplash.com/photo-1517799539266-70e23e20e895?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Santa Cruz do Sul, RS'
        },
        {
            id: 2,
            name: 'Skate Completo Profissional',
            description: 'Shape de maple, trucks resistentes, ideal para manobras.',
            price: 35,
            image: 'https://images.unsplash.com/photo-1549429402-38d5303362a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Porto Alegre, RS'
        },
        {
            id: 3,
            name: 'Patins In-line Ajustável',
            description: 'Confortável e seguro para iniciantes e avançados.',
            price: 30,
            image: 'https://images.unsplash.com/photo-1579298245585-613d964344d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Canoas, RS'
        },
        {
            id: 4,
            name: 'Caiaque Duplo Inflável',
            description: 'Leve e fácil de transportar, ideal para rios e lagos.',
            price: 80,
            image: 'https://images.unsplash.com/photo-1596706927376-787889e4905d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Gramado, RS'
        },
        {
            id: 5,
            name: 'Prancha de Surf Funboard 7\'0',
            description: 'Excelente para pegar as primeiras ondas e evoluir.',
            price: 70,
            image: 'https://images.unsplash.com/photo-1600728348637-23b03657b98d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Florianópolis, SC'
        },
        {
            id: 6,
            name: 'Equipamento de Camping Completo',
            description: 'Barraca para 4 pessoas, saco de dormir e isolante térmico.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1534880946112-2591605f626c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Bento Gonçalves, RS'
        },
        {
            id: 7,
            name: 'Bicicleta Elétrica Dobrável',
            description: 'Ideal para mobilidade urbana, fácil de guardar.',
            price: 75,
            image: 'https://images.unsplash.com/photo-1537243936998-3486f0590a78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'São Paulo, SP'
        },
        {
            id: 8,
            name: 'Skate Longboard para Downhill',
            description: 'Para descidas rápidas e curvas emocionantes.',
            price: 40,
            image: 'https://images.unsplash.com/photo-1596706927376-787889e4905d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            location: 'Curitiba, PR'
        }
    ];

    function createListingCard(listing) {
        const card = document.createElement('div');
        card.classList.add('listing-card');
        card.dataset.listingId = listing.id; // Adiciona um data attribute para identificar o item

        card.innerHTML = `
            <img src="${listing.image}" alt="${listing.name}">
            <div class="listing-card-content">
                <h4>${listing.name}</h4>
                <p>${listing.description}</p>
                <p><strong>Local:</strong> ${listing.location}</p>
                <div class="listing-card-price">R$ ${listing.price.toFixed(2)} <span>/ dia</span></div>
            </div>
        `;
        return card;
    }

    // Carrega os itens de destaque
    if (listingGrid) {
        equipmentListings.forEach(listing => {
            const card = createListingCard(listing);
            listingGrid.appendChild(card);
        });
    }

    // --- Funcionalidade dos Botões e Links ---

    // 1. Navegação do Header e Ações de Usuário
    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que a página recarregue
            const action = link.dataset.action;
            if (action) {
                switch (action) {
                    case 'home':
                        alert('Você clicou em Início! (Redirecionaria para a home)');
                        // window.location.href = 'index.html'; // Exemplo de redirecionamento real
                        break;
                    case 'equipamentos':
                        alert('Você clicou em Equipamentos! (Redirecionaria para a página de listagens)');
                        break;
                    case 'how-it-works':
                        alert('Você clicou em Como Funciona! (Redirecionaria para a página de instruções)');
                        break;
                    case 'contact':
                        alert('Você clicou em Contato! (Redirecionaria para a página de contato)');
                        break;
                    case 'login':
                        alert('Clicou em Entrar! (Abriria um modal de login ou redirecionaria)');
                        break;
                    case 'signup':
                        alert('Clicou em Cadastrar! (Abriria um formulário de cadastro ou redirecionaria)');
                        break;
                }
            }
        });
    });

    // 2. Botão de Pesquisa
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Pesquisando por "${searchTerm}"... (Aqui seria a lógica de busca real!)`);
                // Implementar lógica de filtragem ou redirecionamento para página de resultados
            } else {
                alert('Por favor, digite algo para pesquisar.');
            }
        });

        // Permitir pesquisa ao pressionar Enter no input
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // 3. Cliques nos Cards de Categoria
    document.querySelectorAll('.category-item').forEach(categoryCard => {
        categoryCard.addEventListener('click', () => {
            const category = categoryCard.dataset.category;
            alert(`Você clicou na categoria: ${category.replace('-', ' ')}! (Redirecionaria para a página dessa categoria)`);
            // Implementar redirecionamento ou filtragem de listagens
        });
    });

    // 4. Cliques nos Cards de Equipamentos (Listings)
    if (listingGrid) {
        listingGrid.addEventListener('click', (event) => {
            const clickedCard = event.target.closest('.listing-card');
            if (clickedCard) {
                const listingId = clickedCard.dataset.listingId;
                const listing = equipmentListings.find(item => item.id == listingId);
                if (listing) {
                    alert(`Você clicou no equipamento: ${listing.name}!\nPreço: R$ ${listing.price.toFixed(2)}/dia\nLocal: ${listing.location}\n(Redirecionaria para a página de detalhes do equipamento)`);
                    // Implementar redirecionamento para a página de detalhes do equipamento
                }
            }
        });
    }

    // 5. Links do Footer
    document.querySelectorAll('footer a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const action = link.dataset.action;
            if (action) {
                switch (action) {
                    case 'faq':
                        alert('Você clicou em FAQ! (Redirecionaria para a página de Perguntas Frequentes)');
                        break;
                    case 'terms':
                        alert('Você clicou em Termos de Serviço! (Redirecionaria para a página de Termos)');
                        break;
                    case 'privacy':
                        alert('Você clicou em Política de Privacidade! (Redirecionaria para a página de Privacidade)');
                        break;
                }
            }
        });
    });

});