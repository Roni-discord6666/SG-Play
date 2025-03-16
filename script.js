document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour copier le texte dans le presse-papier
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Texte copié !');
        } catch (err) {
            console.error('Erreur lors de la copie :', err);
        }
    };

    // Ajouter les événements de clic sur les lignes de code
    document.querySelectorAll('.code-line').forEach(line => {
        line.addEventListener('click', () => {
            const codeText = line.querySelector('.code-text').textContent;
            copyToClipboard(codeText);
            
            // Effet visuel de copie
            line.style.backgroundColor = 'var(--accent)';
            setTimeout(() => {
                line.style.backgroundColor = '';
            }, 200);
        });

        // Effet de survol
        line.addEventListener('mouseenter', () => {
            line.style.transform = 'translateY(-2px)';
        });

        line.addEventListener('mouseleave', () => {
            line.style.transform = '';
        });
    });
}); 