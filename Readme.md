# Projet N°2

## Sommaire

- :white_check_mark: [Test de la fonction "addVoter"](#test-de-la-fonction-addvoter)
- :white_check_mark: [Test de la fonction "addProposal"](#test-de-la-fonction-addproposal)
- :white_check_mark: [Test de la fonction "setVote"](#test-de-la-fonction-setvote)
- :white_check_mark: [Test de la fonction "startProposalsRegistering"](#test-de-la-fonction-startproposalsregistering)
- :white_check_mark: [Test de la fonction "endProposalsRegistering"](#test-de-la-fonction-endproposalsregistering)
- :white_check_mark: [Test de la fonction "startVotingSession"](#test-de-la-fonction-startvotingsession)
- :white_check_mark: [Test de la fonction "endVotingSession"](#test-de-la-fonction-endvotingsession)
- :white_check_mark: [Test de la fonction "tallyVotes"](#test-de-la-fonction-tallyvotes)

## REGISTRATION
###### Test de la fonction "addVoter"

Cette fonction permet d'enregistrer un votant. Les tests effectués sont les suivants :

- :white_check_mark: Vérification de l'enregistrement d'un votant
- :white_check_mark: Vérification du message d'erreur en cas d'enregistrement déjà effectué
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect

## PROPOSAL
###### Test de la fonction "addProposal"

Cette fonction permet d'enregistrer une proposition. Les tests effectués sont les suivants :

- :white_check_mark: Vérification de l'enregistrement d'une proposition
- :white_check_mark: Vérification du message d'erreur en cas de description vide
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect

## VOTE
###### Test de la fonction "setVote"

Cette fonction permet d'enregistrer un vote. Les tests effectués sont les suivants :

- :white_check_mark: Vérification de l'enregistrement d'un vote
- :white_check_mark: Vérification du message d'erreur en cas de vote déjà enregistré
- :white_check_mark: Vérification du message d'erreur en cas d'ID de proposition invalide
- :white_check_mark: Vérification de l'incrémentation du nombre de votes pour la proposition correspondante

## STATE
###### Test de la fonction "startProposalsRegistering"

Cette fonction permet de commencer l'enregistrement des propositions. Les tests effectués sont les suivants :

- :white_check_mark: Vérification du changement d'état du workflow

###### Test de la fonction "endProposalsRegistering"

Cette fonction permet de terminer l'enregistrement des propositions. Les tests effectués sont les suivants :

- :white_check_mark: Vérification du changement d'état du workflow
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect

###### Test de la fonction "startVotingSession"

Cette fonction permet de commencer la session de vote. Les tests effectués sont les suivants :

- :white_check_mark: Vérification du changement d'état du workflow
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect

###### Test de la fonction "endVotingSession"

Cette fonction permet de terminer la session de vote. Les tests effectués sont les suivants :

- :white_check_mark: Vérification du changement d'état du workflow
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect

###### Test de la fonction "tallyVotes"

Cette fonction permet de compter les votes et d'identifier la proposition gagnante. Les tests effectués sont les suivants :

- :white_check_mark: Vérification de l'identification de la proposition gagnante
- :white_check_mark: Vérification du changement d'état du workflow
- :white_check_mark: Vérification du message d'erreur en cas d'état du workflow incorrect