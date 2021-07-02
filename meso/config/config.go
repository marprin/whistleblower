package config

import (
	"github.com/marprin/vivliothiki"
)

type (
	Config struct {
		App AppConfig
	}

	AppConfig struct {
		Port uint   `yaml:"port"`
		Name string `yaml:"name"`
	}
)

func ReadConfig(filename string, dest interface{}) error {
	path := "./config"

	err := vivliothiki.ReadYamlConfig(path, filename, dest)
	if err != nil {
		return err
	}
	return nil
}
