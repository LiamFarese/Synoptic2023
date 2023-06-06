package listing

import (
	"encoding/json"
	"net/http"
)

type ListingHandler interface {
	CreateListing(w http.ResponseWriter, r *http.Request)
}

type listingHandler struct {
	service ListingService
}

func NewListingHandler(service ListingService) ListingHandler {
	return &listingHandler{service: service}
}

func (h *listingHandler) CreateListing(w http.ResponseWriter, r *http.Request) {
	var params CreateListingParams

	err := json.NewDecoder(r.Body).Decode(&params)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}
	listing, err := h.service.CreateListing(params.Title, params.Body, params.UserID, params.Username)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	jsonRep, err := json.Marshal(listing)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonRep)

}

func (h *listingHandler) ListListings(w http.ResponseWriter, r *http.Request) {

}
