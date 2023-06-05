package listing

import "github.com/jackc/pgx/pgtype"

type Listing struct {
	ID    int64  `db:"id" json:"id"`
	Title string `db:"title" json:"title"`
	// Content of the listing
	Body      string             `db:"body" json:"body"`
	UserID    int64              ` db:"user_id" json:"user_id"`
	CreatedAt pgtype.Timestamptz `db:"created_at" json:"created_at"`
}
