package comment

import "github.com/jackc/pgx/pgtype"

type Comment struct {
	ID            int64              `json:"id"`
	Body          string             `json:"body"`
	UserID        int64              `json:"user_id"`
	PostID        int64              `json:"post_id"`
	ParentComment pgtype.Int8        `json:"parent_comment"`
	CreatedAt     pgtype.Timestamptz `json:"created_at"`
}
