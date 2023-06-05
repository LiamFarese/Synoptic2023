package user

import (
	"fmt"

	"Github.com/Synoptic2023/internal/listing"
	"github.com/jmoiron/sqlx"
)

type UserRepository interface {
	CreateUser(user User) (User, error)
	GetUserByUsername(username string) (User, error)
	GetUserById(userId int64) (User, error)
	GetUserProfile(userId int64) ([]listing.Listing, error)
	ListUsers() ([]User, error)
}

type userQueries struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) UserRepository {
	return &userQueries{db: db}
}

func (q *userQueries) CreateUser(user User) (User, error) {
	query := "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id, username, role, created_at"
	newUser := User{}
	err := q.db.Get(&newUser, query, user.Username, user.Password, user.Role)
	if err != nil {
		return User{}, err
	}

	return newUser, nil
}

func (q *userQueries) GetUserByUsername(username string) (User, error) {
	query := "SELECT id, username, role, created_at FROM users WHERE username = $1 LIMIT 1;"
	user := User{}

	err := q.db.Get(&user, query, username)
	if err != nil {
		return User{}, fmt.Errorf("User does not exist %w", err)
	}

	return user, nil
}

func (q *userQueries) GetUserById(userId int64) (User, error) {
	query := "SELECT * FROM users WHERE id = $1 LIMIT 1;"
	user := User{}

	err := q.db.Get(&user, query, userId)
	if err != nil {
		return User{}, fmt.Errorf("User does not exist %w", err)
	}

	user.Password = ""

	return user, nil
}

func (q *userQueries) GetUserProfile(userId int64) ([]listing.Listing, error) {
	query := "SELECT * FROM listings WHERE user_id = $1"
	listings := make([]listing.Listing, 0)

	err := q.db.Select(&listings, query, userId)
	if err != nil {
		return []listing.Listing{}, fmt.Errorf("could not find any listings", err)
	}

	return listings, nil
}

func (q *userQueries) ListUsers() ([]User, error) {
	query := "SELECT id, username, role, created_at FROM users;"
	users := make([]User, 0)

	err := q.db.Select(&users, query)
	if err != nil {
		return []User{}, err
	}

	return users, nil

}
