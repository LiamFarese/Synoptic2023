package listing

type ListingService interface {
	CreateListing(title string, body string, userId int64, username string) (ListingWithUsername, error)
}

type listingService struct {
	repo ListingRepository
}

func NewListingService(repo ListingRepository) ListingService {
	return &listingService{repo: repo}
}

func (s *listingService) CreateListing(title string, body string, userId int64, username string) (ListingWithUsername, error) {

	listing := ListingWithUsername{Title: title, Body: body, UserID: userId}
	newListing, err := s.repo.CreateListing(listing)
	if err != nil {
		return ListingWithUsername{}, err
	}

	return newListing, nil

}
