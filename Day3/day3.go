package main


import (
    "bufio"
    "fmt"
    "os"
)

// readLines reads a whole file into memory
// and returns a slice of its lines.
func readLines(path string) ([]string, error) {
    file, err := os.Open(path)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    var lines []string
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        lines = append(lines, scanner.Text())
    }
    return lines, scanner.Err()
}

func main() {

    test, _ := readLines("day3test.txt")
    input, _ := readLines("day3.txt")


    fmt.Println("Part 1")
    fmt.Println("test: ")
    fmt.Println(computePart1(test,3,1))
    fmt.Println("Expecting 7")
    fmt.Println("\nInput:")
    fmt.Println(computePart1(input,3,1))


    fmt.Println("Part 2")
    fmt.Println("test: ")
    fmt.Println(computePart2(test))
    fmt.Println("Expecting 336")
    fmt.Println("\nInput:")
    fmt.Println(computePart2(input))
}

func isTree(line string, pos int) bool {
    return line[pos] == '#'
}

func computePart1(input []string, dx int, dy int) int {
    sum := 0

    inputLength := len(input[0])

    var xpos = 0

    for i := 0; i<len(input); i+=dy {
        if isTree(input[i], xpos % inputLength) {
            sum++
        }
        xpos += dx
    }

    return sum
}

func computePart2(input []string) int {

    sum := computePart1(input, 1, 1)
    sum *= computePart1(input, 3, 1)
    sum *= computePart1(input, 5, 1)
    sum *= computePart1(input, 7, 1)
    sum *= computePart1(input, 1, 2)


    return sum
}
