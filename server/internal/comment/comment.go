package comment

import "github.com/jackc/pgx/pgtype"

type Comment struct {
	ID            int64              `json:"id"`
	Body          string             `json:"body"`
	UserID        int64              `json:"user_id"`
	PostID        int64              `json:"post_id"`
	ParentComment int64              `json:"parent_comment"`
	CreatedAt     pgtype.Timestamptz `json:"created_at"`
}

type CommentWithUsername struct {
	ID            int64              `json:"id"`
	Username      string             `json:"username"`
	Body          string             `json:"body"`
	UserID        int64              `json:"user_id"`
	PostID        int64              `json:"post_id"`
	ParentComment int64              `json:"parent_comment"`
	CreatedAt     pgtype.Timestamptz `json:"created_at"`
}

type CreateCommentParams struct {
	Body   string `json:"title"`
	UserID int64  `json:"user_id"`
	PostID int64  `json:"post_id"`
}

type CreateReplyParams struct {
	Body          string `json:"title"`
	UserID        int64  `json:"user_id"`
	PostID        int64  `json:"post_id"`
	ParentComment int64  `json:"parent_comment"`
}
