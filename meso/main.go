package main

import (
	"log"

	"github.com/marprin/whistleblower/meso/config"
)

func main() {
	cfg := &config.Config{}
	err := config.ReadConfig("main", cfg)
	if err != nil {
		log.Fatalln("Failed read config")
	}

}
