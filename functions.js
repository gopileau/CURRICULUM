function addCommentToList(commentData) {
    // Ajouter le commentaire à la liste en utilisant 'commentData'
    const commentList = document.getElementById('comments');
    const newComment = document.createElement('p');

    // Ajouter le nom, le prénom et le commentaire sous forme de liste en inversant l'ordre
    newComment.innerHTML = ` \
        <div style="margin-bottom:15px;"><b></b><strong>' ${commentData.name} ${commentData.lastname}</strong></div>
        <div style="margin-bottom:15px;"><b></b> ${commentData.comment}</div>
    `;
    commentList.appendChild(newComment);
}

function validateForm() {
    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const comment = document.getElementById('comment').value;

    // Vérifier si tous les champs ne sont pas vides
    if (name === '' || lastname === '' || comment === '') {
        alert('Tous les champs doivent être remplis.');
        return false;
    }

    return true;
}

function submitComment(event) {
    event.preventDefault();

    // Appeler la fonction 'validateForm' pour vérifier si le formulaire est valide
    if (!validateForm()) {
        return;
    }

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const comment = document.getElementById('comment').value;

    // Vérifier si le commentaire dépasse la limite de 500 caractères
    if (comment.length > 500) {
        alert('Votre commentaire dépasse la limite de 500 caractères. Veuillez raccourcir votre mot.');
        return;
    }

    // Afficher un message de succès
    alert('Commentaire envoyé avec succès. Merci, ' + name + ' ' + lastname + '.');

    // Ajouter le commentaire à la liste
    addCommentToList({ name, lastname, comment });

    // Vider le formulaire
    document.getElementById('commentForm').reset();
}

// Ajouter la fonction 'submitComment' en tant qu'écouteur d'événements à l'événement 'submit' du formulaire
document.getElementById('commentForm').addEventListener('submit', submitComment);
console.log('JavaScript loaded and executed');