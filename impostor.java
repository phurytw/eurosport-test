public class Game {
    public void setupPlayers() {
        for (int i = 0; i < this.players.length; i++) {
            Player p = players[i];
            if (p.name.contains("Solène")) {
                p.impostor = true;
            }
        }
    }
}
