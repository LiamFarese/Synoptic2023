package test

import (
	"testing"

	"github.com/jmoiron/sqlx"
)

func main(T *testing.T) {
	db, err := sqlx.Connect("pgx", "postgresql://root:secret@localhost:5432/synoptictest?sslmode=disable")
	if err != nil {
		T.Error(err)
	}

}
