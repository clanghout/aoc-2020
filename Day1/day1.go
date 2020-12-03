package day1

import "fmt"

func main() {
	test := []int {1721, 979, 366, 299, 675, 1456}



    fmt.Println("test: ")
    fmt.Println(computePart2(test))
    fmt.Println("Expecting 241861950")
}


func computePart2(input []int) int {
    for i, iv := range input {
        for  j := i + 1; j < len(input); j++ {
            for  k := j + 1; k < len(input); k++ {
                if (input[i] + input[j] + input[k] == 2020) {
                    fmt.Println("wining numbers", iv, input[j], input[k])
                    return iv * input[j] * input[k]
                }
            }
        }
	}
	return -1
}
