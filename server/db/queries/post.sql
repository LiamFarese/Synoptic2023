-- name: GetPost :one
SELECT * FROM posts
WHERE id = $1 LIMIT 1;

-- name: ListPosts :many
SELECT * FROM posts
ORDER BY created_at DESC;

-- name: UpdatePost :one
UPDATE posts
SET body = $2
WHERE id = $1
RETURNING *;