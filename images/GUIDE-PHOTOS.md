# Guide — Ajouter vos photos au site GTS-S.A.

Le dossier `images/` contient déjà des visuels de substitution (placeholders)
pour que le site s'affiche correctement en attendant vos vraies photos.

Pour ajouter une vraie photo, il suffit de **remplacer le fichier existant**
en gardant exactement le même nom. Aucune modification de code n'est nécessaire.

## Liste des fichiers attendus

| Fichier                        | Utilisé sur la page | Format conseillé      | Dimensions conseillées |
|---------------------------------|----------------------|------------------------|--------------------------|
| `images/directeur-general.jpg`  | Présentation          | Portrait               | min. 600 × 800 px        |
| `images/train-01.jpg`           | Activités (flotte)    | Paysage ou carré, grande photo | min. 900 × 1000 px |
| `images/train-02.jpg`           | Activités (flotte)    | Paysage               | min. 700 × 480 px        |
| `images/train-03.jpg`           | Activités (flotte)    | Paysage               | min. 700 × 480 px        |
| `images/actu-01.jpg`            | Actualités (article 1)| Paysage 16:10          | min. 800 × 500 px        |
| `images/actu-02.jpg`            | Actualités (article 2)| Paysage 16:10          | min. 800 × 500 px        |
| `images/actu-03.jpg`            | Actualités (article 3)| Paysage 16:10          | min. 800 × 500 px        |

## Conseils pratiques

- **Format** : JPG de préférence (fichiers plus légers que PNG pour des photos).
- **Poids** : essayez de rester sous 300 Ko par image pour un chargement rapide
  (outils gratuits : squoosh.app, tinyjpg.com).
- **Cadrage** : les photos sont automatiquement recadrées (`object-fit: cover`)
  pour remplir leur emplacement — le centre de l'image est privilégié, pensez-y
  au moment du cadrage.
- Vous pouvez ajouter d'autres actualités avec photo dans `actualites.php` en
  dupliquant un bloc du tableau `$news` et en ajoutant un nouveau fichier
  `images/actu-04.jpg`, etc.

## Pour ajouter encore plus de photos (ex: galerie de gares, équipe)

Dites-moi simplement quelles sections vous voulez enrichir et je préparerai
les emplacements correspondants dans le code.
