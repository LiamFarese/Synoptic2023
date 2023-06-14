package test

import (
	"log"

	"github.com/jmoiron/sqlx"
)

func main() {
	db, err := sqlx.Connect("pgx", "postgresql://root:secret@localhost:5432/synoptictest?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	RunTests(db)
}

func RunTests(db *sqlx.DB) {

}
