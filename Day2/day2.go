package main

	
import (
	"bufio"
    "fmt"
	"os"
	"strings"
	"strconv"
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


type passwordLine struct {
	min, max int
	letter rune
	password string
}

func main() {
	
	test, _ := readLines("day2test.txt")
	input, _ := readLines("day2.txt")


	fmt.Println("Part 1")
    fmt.Println("test: ")
    fmt.Println(computePart1(test))
	fmt.Println("Expecting 2")
	fmt.Println("\nInput:")
	fmt.Println(computePart1(input))
	

	fmt.Println("Part 2")
    fmt.Println("test: ")
    fmt.Println(computePart2(test))
	fmt.Println("Expecting 1")
	fmt.Println("\nInput:")
    fmt.Println(computePart2(input))
}



func parseLine(input string) passwordLine {
	splitted := strings.Split(input, " ")
	ran := strings.Split(splitted[0], "-")
	min, _ := strconv.Atoi(ran[0])
	max, _ := strconv.Atoi(ran[1])

	return passwordLine{
		min: min, 
		max: max, 
		letter: rune(splitted[1][0]), 
		password: splitted[2]}
}

func countChar(line string, char rune) int {
	sum := 0
	for _, iv := range line {
		if iv == char {
			sum++
		}
	}
	return sum
}

func computePart1(input []string) int {
	sum := 0

	for _, iv := range input {
		pl := parseLine(iv)
		count := countChar(pl.password, pl.letter)
		if count >= pl.min && count <= pl.max {
			sum++
		}

	}
	
	return sum
}

func computePart2(input []string) int {
	sum := 0

	for _, iv := range input {
		checks := 0
		pl := parseLine(iv)

		if len(pl.password) >= pl.min {
			if rune(pl.password[pl.min-1]) == pl.letter {
				checks++
			}
		} 

		if len(pl.password) >= pl.max {
			if rune(pl.password[pl.max-1]) == pl.letter {
				checks++
			}
		} 
		
		if checks == 1 {
			sum++
		}

	}
	
	return sum
}
