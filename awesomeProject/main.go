package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func registrationPage(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("templates/main/web/registration.html")
	tmpl.Execute(w, nil)
}

func mainPage(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("templates/main/web/index.html")
	tmpl.Execute(w, nil)
}

func MePage(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("templates/main/web/me.html")
	tmpl.Execute(w, nil)
}

func coursesPage(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("templates/main/web/courses.html")
	tmpl.Execute(w, nil)
}

func handleRequest() {
	http.Handle("/static/", http.StripPrefix("/static", http.FileServer(http.Dir("./static/"))))
	http.HandleFunc("/reg/", registrationPage)
	http.HandleFunc("/me/", MePage)
	http.HandleFunc("/", mainPage)
	http.HandleFunc("/courses/", coursesPage)
	http.ListenAndServe(":8080", nil)
}

func main() {
	fmt.Println("WORK")
	handleRequest()
}
