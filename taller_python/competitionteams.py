
# this require pytest
import pytest


def get_winner(games, results):

    maxPoints = 0
    maxPointsTeam = ''
    points = {}

    for idx, item in enumerate(results):

        winner = 0 if item == 1 else 1
        winnerTeam = games[idx][winner]

        try:
            points[winnerTeam] += 3
        except:
            points[winnerTeam] = 3

        if points[winnerTeam] > maxPoints:
            maxPoints = points[winnerTeam]
            maxPointsTeam = winnerTeam

        
    return maxPointsTeam


def test_get_winner():
    games = [
        ['Chivas', 'America'],
        ['America', 'Chivas'],
        ['Atlas', 'Chivas'],
        ['Pumas', 'America']
    ]
    # 0 means item 1 won and viceversa
    results = [
        1, 0, 0, 1
    ]
    assert get_winner(games, results) == 'Chivas'


