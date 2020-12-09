#!/bin/sh

echo Which day are we on?
read day

mkdir Day"$day"
cd Day"$day" || exit


touch day"$day".txt
touch day"$day"test.txt
templatefile="
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
        while ((eolIndex = previous.indexOf('\\n')) >= 0) {
            const line = previous.slice(0, eolIndex);
            yield line;
            previous = previous.slice(eolIndex+1);
        }
    }
    if (previous.length > 0) {
        yield previous;
    }
}

async function main() {
    const test = 'day${day}test.txt'
    const input = 'day$day.txt'

    async function computePart1(inputFilePath: any): Promise<number> {
        const readStream = fs.createReadStream(inputFilePath,
            { encoding: 'utf8', highWaterMark: 256 });
        let counter = 0;
        for await (const line of chunksToLines(readStream)){
            console.log(line)
            counter++
        }
        return counter
    }

    async function computePart2(inputFilePath: any): Promise<number> {
        const readStream = fs.createReadStream(inputFilePath,
            { encoding: 'utf8', highWaterMark: 256 });
        let counter = 0;
        for await (const line of chunksToLines(readStream)){
            console.log(line)
            counter++
        }
        return counter
    }

    console.log('Part 1')
    console.log('test: ')
    console.log(await computePart1(test))
    console.log('Expecting 2')
    // console.log('\nInput:')
    // console.log(await computePart1(input))


    // console.log('\n\nPart 2')
    // console.log('test: ')
    // console.log(await computePart2(test))
    // console.log('Expecting 0')
    // console.log('\nInput:')
    // console.log(await computePart2(input))
}
main();
";
 printf "%s" "$templatefile" > day"$day".ts


## Create shorthand executable to compile and run
echo 'tsc day'"$day"'.ts && node day'"$day"'.js' > runDay"$day".sh
chmod 755 runDay"$day".sh


