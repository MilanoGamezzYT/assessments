EASY_TEXT = """Ik hou van programmeren. Programmeren is leuk. 
Ik kan veel dingen maken met programmeren. Ik kan een website maken. 
Ik kan een spel maken. Ik kan een chatbot maken. 
Programmeren is niet moeilijk. Ik moet alleen de juiste code schrijven. 
De code moet logisch zijn. De code moet foutloos zijn. Werkende code maakt mij blij. 
Niet-werkende code chagerijnig. Programmeren is een avontuur. Ik leer elke dag iets nieuws met programmeren."""

DIFFICULT_TEXT = """Programmeren is een geweldige activiteit, die je in staat stelt om je creativiteit, 
logica en probleemoplossend vermogen te gebruiken, om allerlei soorten applicaties te maken, 
die nuttig, vermakelijk of zelfs levensveranderend kunnen zijn, afhankelijk van je doel en publiek. 
Het is ook een uitdagende bezigheid, die je voortdurend leert om nieuwe talen, technieken en concepten te leren, 
die je helpen om je code efficiënter, eleganter en robuuster te maken, zonder dat je je ooit hoeft te vervelen of te herhalen. 
Bovendien is het een leuke hobby, die je veel voldoening en plezier kan geven, als je ziet hoe je ideeën tot leven komen op het scherm, als je de interactie met je gebruikers ziet of 
als je de reacties van je vrienden en familie ziet, als je ze verrast met je eigen creaties.
"""

ALLOWED_IN_WORD = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"

# depending on the type of text you wish you get an easy, difficult or text from file.
def getText(choice: str) -> str:
    if choice == 'easy':
        return EASY_TEXT
    elif choice == 'difficult':
        return DIFFICULT_TEXT
    else:
        return getFileContentAsString(choice)

def getFileContentAsString(textFile: str) -> str:
    with open(textFile, 'r') as file:
        content = file.read()
    return content

# opdracht 1
def getNumberOfCharacters(text: str) -> int:
    teller = 0
    for letter in text:
        if letter in ALLOWED_IN_WORD:
            teller += 1
    return teller


# opdracht 2
def getNumberOfSentences(text: str) -> int:
    teller1 = 0
    for letter in text:
        if letter == '.' or letter == '?' or letter == '!':
            teller1 += 1
    return teller1

# opdracht 3
def getNumberOfWords(text: str) -> int:
    teller2 = 0
    for letter in text:
        if letter == ' ':
            teller2 += 1
    return teller2 + 1

# opdracht 5
def getAverageAVI(text: str ) -> int:
    amount_words = getNumberOfWords(text)
    amount_sentences = getNumberOfSentences(text)
    gemiddelde = round(amount_words / amount_sentences)

    if gemiddelde <= 7:
        AVIScore = 5
    elif gemiddelde == 8:
        AVIScore = 6
    elif gemiddelde == 9:
        AVIScore = 7
    elif gemiddelde == 10:
        AVIScore = 8
    elif gemiddelde == 11:
        AVIScore = 11
    elif gemiddelde > 11:
        AVIScore = 12
    return AVIScore
