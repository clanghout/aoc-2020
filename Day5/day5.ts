import { ReadStream } from 'fs';

let fs = require('fs');

/**
 * Parameter: async iterable of chunks (strings)
 * Result: async iterable of lines (incl. newlines)
 */
async function* chunksToLines(chunksAsync: ReadStream): AsyncGenerator<string, void, unknown> {
    let previous = '';
    for await (const chunk of chunksAsync) {
        previous += chunk;
        let eolIndex;
        while((eolIndex = previous.indexOf('\n')) >= 0) {
            const line = previous.slice(0, eolIndex);
            yield line;
            previous = previous.slice(eolIndex + 1);
        }
    }
    if(previous.length > 0) {
        yield previous;
    }
}

async function main() {
    const test = 'day5test.txt'
    const input = 'day5.txt'

    function getRowId(line: string) {
        return parseInt(
            Array.from(line.slice(0, 7))
                .map(char => char == 'F' ? 0 : 1) // convert to binary numbers
                .join(''), // make it one string
            2); // radix 2 for binary number
    }

    function getColId(line: string) {
        return parseInt(
            Array.from(line.slice(-3))
                .map(char => char == 'L' ? 0 : 1) // convert to binary numbers
                .join(''), // make it one string
            2); // radix 2 for binary number
    }

    async function computePart1(inputFilePath: any): Promise<number> {
        const readStream = fs.createReadStream(inputFilePath,
            {encoding: 'utf8', highWaterMark: 256});


        function getSeatId(line: string) {
            const rowId = getRowId(line);
            const colId = getColId(line);

            return rowId * 8 + colId
        }

        let maxId = 0;
        for await (const line of chunksToLines(readStream)) {
            const newId = getSeatId(line);
            if(maxId < newId) {
                maxId = newId
            }
        }
        return maxId
    }

    async function computePart2(inputFilePath: any): Promise<number> {
        const readStream = fs.createReadStream(inputFilePath,
            {encoding: 'utf8', highWaterMark: 256});
        let minRow = 200;
        let maxRow = 0;

        let lines = chunksToLines(readStream)
        let seats: { key: number; value: number[] } | {} = {}
        for await (const line of lines) {
            const rowNr = getRowId(line)
            minRow = minRow < rowNr ? minRow : rowNr
            maxRow = maxRow < rowNr ? rowNr : maxRow

            // save an array with the seat cols filled per row
            seats[rowNr] = seats[rowNr] ?? []
            seats[rowNr].push(getColId(line))
        }

        // remove the two outer rows
        delete seats[minRow]
        delete seats[maxRow]

        // find the row that has a free seat (eg not all 8 spots filled)
        const missingSeatRowId: number = parseInt(Object.keys(seats).filter(filledSeats => seats[filledSeats].length < 8)[0])

        // find number 1..7 that is not filled, that is your seat column number
        let seatRow = seats[missingSeatRowId];
        const missingSeatColId = Array.from({length: 10}, (_, i) => i + 1).filter(seatnr => !seatRow.includes(seatnr))[0]

        return missingSeatRowId * 8 + missingSeatColId
    }

    console.log('Part 1')
    console.log('test: ')
    console.log(await computePart1(test))
    console.log('Expecting 820')
    console.log('\nInput:')
    console.log(await computePart1(input))


    console.log('Part 2')
    console.log('Expecting 0')
    console.log('\nInput:')
    console.log(await computePart2(input))
}

main();
