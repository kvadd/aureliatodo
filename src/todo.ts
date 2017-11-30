export class Todo {
    public description;
    public done;

    constructor(description) {
        this.description = description;
        this.done = false;
    }
}