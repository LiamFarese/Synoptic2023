package user

import (
	"github.com/jmoiron/sqlx"
)

type UserRepository interface {
	CreateUser(user User) (User, error)
	//GetUser(UserID int)
}

type userQueries struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) UserRepository {
	return &userQueries{db: db}
}

func (q *userQueries) CreateUser(user User) (User, error) {
	query := "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id, username, password, role, created_at"
	newUser := User{}
	err := q.db.Get(&newUser, query, user.Username, user.Password, user.Role)
	if err != nil {
		return User{}, err
	}
	return newUser, nil
}

// func (q *userQueries) GetUser(userId int)
