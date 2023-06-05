package models

import (
	"github.com/jackc/pgx/v5/pgtype"
)

type Comment struct {
	ID            int64              `json:"id"`
	Body          string             `json:"body"`
	UserID        int64              `json:"user_id"`
	PostID        int64              `json:"post_id"`
	ParentComment pgtype.Int8        `json:"parent_comment"`
	CreatedAt     pgtype.Timestamptz `json:"created_at"`
}

type Listing struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
	// Content of the listing
	Body      string             `json:"body"`
	UserID    int64              `json:"user_id"`
	CreatedAt pgtype.Timestamptz `json:"created_at"`
}

type Post struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
	// Content of the post
	Body      string             `json:"body"`
	UserID    int64              `json:"user_id"`
	CreatedAt pgtype.Timestamptz `json:"created_at"`
}

type User struct {
	ID       int64  `json:"id"`
	Username string `json:"username"`
	// hashed password
	Password  string             `json:"password"`
	Role      string             `json:"role"`
	CreatedAt pgtype.Timestamptz `json:"created_at"`
}