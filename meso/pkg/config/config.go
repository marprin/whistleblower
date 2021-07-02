package config

import (
	"fmt"
	"io/ioutil"

	"github.com/marprin/vivliothiki"
	"gopkg.in/yaml.v3"
)

func ReadYamlConfig(path, filename string, dest interface{}) error {
	src := fmt.Sprintf("%s/%s.%s.yml", path, filename, vivliothiki.GetEnv())

	yamlFile, err := ioutil.ReadFile(src)
	if err != nil {
		return err
	}

	err = yaml.Unmarshal(yamlFile, dest)
	if err != nil {
		return err
	}
	return nil
}
