export class DiamondExample {
    private readonly charCodeOfA = "A".charCodeAt(0);
    public readonly diamondLetter: string;

    constructor(value: string) {
        this.diamondLetter = value;
    }

    getIndexOf(char: string): number {
        const charCode = char.toUpperCase().charCodeAt(0) - this.charCodeOfA;
        return charCode + 1;
    }

    print(): string{
        let result = "   A\n  B B\n C   C\nE     E\n C   C\n  B B\n   A";
        console.log(result);
        return result;
    }
}
