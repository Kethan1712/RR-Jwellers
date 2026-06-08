import csv
import json
import random

players = []

with open("players.csv", "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)

    for row in reader:

        overall = int(row["overall"])
        role = row["role"]

        player = {
            "id": int(row["id"]),
            "name": row["name"],
            "team": row["team"],
            "country": row["country"],
            "age": int(row["age"]),
            "role": role,
            "overall": overall,
            "potential": int(row["potential"])
        }

        if role == "BATSMAN":
            player.update({
                "technique": min(99, overall + random.randint(0, 5)),
                "power": overall + random.randint(-3, 3),
                "spinHandling": overall + random.randint(-2, 3),
                "paceHandling": overall + random.randint(-2, 3),

                "pace": random.randint(5, 20),
                "swing": random.randint(5, 20),
                "yorkers": random.randint(5, 20),
                "spin": random.randint(5, 20)
            })

        elif role == "BOWLER":
            player.update({
                "technique": random.randint(20, 50),
                "power": random.randint(20, 50),
                "spinHandling": random.randint(20, 50),
                "paceHandling": random.randint(20, 50),

                "pace": overall + random.randint(-3, 3),
                "swing": overall + random.randint(-3, 3),
                "yorkers": overall + random.randint(-3, 3),
                "spin": overall + random.randint(-3, 3)
            })

        elif role == "ALL_ROUNDER":
            player.update({
                "technique": overall + random.randint(-5, 2),
                "power": overall + random.randint(-5, 2),
                "spinHandling": overall + random.randint(-5, 2),
                "paceHandling": overall + random.randint(-5, 2),

                "pace": overall + random.randint(-8, 2),
                "swing": overall + random.randint(-8, 2),
                "yorkers": overall + random.randint(-8, 2),
                "spin": overall + random.randint(-8, 2)
            })

        elif role == "WICKET_KEEPER":
            player.update({
                "technique": overall + random.randint(-2, 3),
                "power": overall + random.randint(-3, 3),
                "spinHandling": overall + random.randint(-2, 3),
                "paceHandling": overall + random.randint(-2, 3),

                "pace": random.randint(5, 20),
                "swing": random.randint(5, 20),
                "yorkers": random.randint(5, 20),
                "spin": random.randint(5, 20)
            })

        player["catching"] = random.randint(70, 95)
        player["throwing"] = random.randint(70, 95)
        player["reflexes"] = random.randint(75, 98)

        player["pressureHandling"] = random.randint(70, 99)
        player["aggression"] = random.randint(50, 95)
        player["leadership"] = random.randint(40, 95)

        player["stamina"] = random.randint(70, 95)
        player["injuryResistance"] = random.randint(65, 95)

        players.append(player)

with open("players.json", "w", encoding="utf-8") as file:
    json.dump(players, file, indent=2)

print(f"{len(players)} players exported successfully!")