package user

import "github.com/jackc/pgx/pgtype"

type User struct {
	ID       int64  `json:"id"`
	Username string `json:"username"`
	// hashed password
	Password  string             `json:"password"`
	Role      string             `json:"role"`
	CreatedAt pgtype.Timestamptz `json:"created_at"`
}
