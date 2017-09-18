package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./"))) // index.html in html folder
	http.ListenAndServe(":8080", nil)
}
