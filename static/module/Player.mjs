class Character {
    #health;
    constructor(health) {
        this.#health = health;
        this.getHealth = this.getHealth.bind(this);
        this.setHealth = this.setHealth.bind(this);
    }

    getHealth() {
        return this.#health;
    } 

    setHealth(health) {
        this.#health = health; // Corrected to use the private field
    }
}

export {Character};