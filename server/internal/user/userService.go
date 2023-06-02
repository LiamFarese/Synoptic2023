package user

import "Github.com/Synoptic2023/internal/util"

type UserService interface {
	CreateUser(username string, password string, role string) (User, error)
}

type userService struct {
	repo UserRepository
}

func NewUserService(userRepository UserRepository) UserService {
	return &userService{repo: userRepository}
}

// returns a user with no id set since this is set once the user is entered into the database
func (s *userService) CreateUser(username string, password string, role string) (User, error) {

	passwordHash, err := util.HashPassword(password)

	if err != nil {
		return User{}, err
	}

	user := User{Username: username, Password: passwordHash, Role: role}

	newUser, err := s.repo.CreateUser(user)

	if err != nil {
		return User{}, err
	}

	return newUser, nil
}
